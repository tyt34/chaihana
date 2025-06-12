'use client'

import { MenuResponse } from '@/app/api/menu/menu.types'
import { MenuType } from '../ItemMenu/ItemMenu.types'
import { useEffect, useState } from 'react'
import ItemMenu from '../ItemMenu/ItemMenu'
import styles from './Main.module.scss'

const transformResponse = (list: MenuResponse[]): MenuType[] => {
  return list.map((el) => {
    const { halfAvailable, name, price } = el
    const update: MenuType = {
      count: 0,
      halfAvailable,
      name,
      price,
    }
    return update
  })
}

export default function Main() {
  const [menu, setMenu] = useState<MenuType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data: MenuResponse[]) => {
        console.log({ D: data })
        const updateList = transformResponse(data)
        console.log({ updateList })
        setMenu(updateList)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Ошибка загрузки меню:', err)
        setLoading(false)
      })
  }, [])

  return (
    <section className={styles.page}>
      <div>
        <h1>Меню ресторана</h1>
      </div>

      <div>
        {loading && <p>Загрузка...</p>}
        {!loading &&
          menu.map((item, index) => (
            <ItemMenu
              key={index}
              item={item}
              onIncrease={() => console.log(`+ ${item.name}`)}
              onDecrease={() => console.log(`- ${item.name}`)}
            />
          ))}
      </div>
    </section>
  )
}
