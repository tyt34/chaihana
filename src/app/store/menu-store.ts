import { makeAutoObservable } from 'mobx'
import { MenuResponse } from '@/app/api/menu/menu.types'

// const transformResponse = (list: MenuResponse[]): MenuType[] => {
//   return list.map((el) => {
//     const { halfAvailable, name, price } = el
//     const update: MenuType = {
//       count: 0,
//       halfAvailable,
//       name,
//       price,
//     }
//     return update
//   })
// }

// Тип с добавленным count, без type
export interface MenuType {
  name: string
  price: number
  halfAvailable: boolean
  count: number
}

export class MenuStore {
  menu: MenuType[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  setMenu(data: MenuResponse[]) {
    this.menu = data.map(({ name, price, halfAvailable }) => ({
      name,
      price,
      halfAvailable,
      count: 0,
    }))
  }

  setLoading(val: boolean) {
    this.loading = val
  }

  increaseCount(name: string) {
    const item = this.menu.find((el) => el.name === name)
    if (item) {
      item.count++
    }
  }

  decreaseCount(name: string) {
    const item = this.menu.find((el) => el.name === name)
    if (item && item.count > 0) {
      item.count--
    }
  }
}

export const menuStore = new MenuStore()
