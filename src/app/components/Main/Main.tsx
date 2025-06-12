'use client'

import { menuStore } from '@/app/store/menu-store'
import { observer } from 'mobx-react-lite'
import { reaction } from 'mobx'
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
    const disposer = reaction(
      () => menuStore.order.map((item) => ({ ...item })),
      () => {
        // console.log('order changed', orderSnapshot)
      }
    )

    return () => disposer()
  }, [])

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
              onIncrease={() => menuStore.increaseCount(item.name)}
              onDecrease={() => menuStore.decreaseCount(item.name)}
            />
          ))}
      </div>
    </section>
  )
})

export default Main
