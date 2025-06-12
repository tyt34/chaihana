'use client'

import { menuStore } from '@/app/store/menu-store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ItemMenu from '../ItemMenu/ItemMenu'
import styles from './Main.module.scss'

const Main = observer(() => {
  // const [menu, setMenu] = useState<MenuType[]>([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetch('/api/menu')
  //     .then((res) => res.json())
  //     .then((data: MenuResponse[]) => {
  //       console.log({ D: data })
  //       const updateList = transformResponse(data)
  //       console.log({ updateList })
  //       setMenu(updateList)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.error('Ошибка загрузки меню:', err)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    console.log(' --> ')
    menuStore.setLoading(true)
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        console.log({ D: data })
        menuStore.setMenu(data)
      })
      .catch(() => {})
      .finally(() => {
        console.log(' --> 2')
        menuStore.setLoading(false)
      })
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
          menuStore.menu.map((item) => (
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
