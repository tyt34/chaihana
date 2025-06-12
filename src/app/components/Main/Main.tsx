'use client'

import { menuStore } from '@/app/store/menu-store'
import { observer } from 'mobx-react-lite'
import { settingsStore } from '@/app/store/setting-store'
import { useEffect } from 'react'
import ItemMenu from '../ItemMenu/ItemMenu'
import styles from './Main.module.scss'

const Main = observer(() => {
  useEffect(() => {
    if (menuStore.originalMenu.length === 0) {
      menuStore.setLoading(true)
      fetch('/api/menu')
        .then((res) => res.json())
        .then((data) => {
          menuStore.setMenu(data)
        })
        .catch(() => {})
        .finally(() => {
          menuStore.setLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    console.log({ S: settingsStore.setting })
  }, [])

  // useEffect(() => {
  //   const disposer = reaction(
  //     () => menuStore.order.map((item) => ({ ...item })),
  //     () => {
  //       // console.log('order changed', orderSnapshot)
  //     }
  //   )

  //   return () => disposer()
  // }, [])

  return (
    <section className={styles.page}>
      <div>
        <h1>Меню ресторана</h1>
      </div>

      <div>
        {menuStore.loading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner} />
          </div>
        )}

        {!menuStore.loading &&
          menuStore.order.map((item) => (
            <ItemMenu
              key={item.name}
              item={item}
              onIncrease={() =>
                menuStore.increaseCount(item.name, settingsStore.setting.allowHalfOrders)
              }
              onDecrease={() =>
                menuStore.decreaseCount(item.name, settingsStore.setting.allowHalfOrders)
              }
            />
          ))}
      </div>
    </section>
  )
})

export default Main
