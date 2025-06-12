import { makeAutoObservable } from 'mobx'
import { MenuResponse } from '@/app/api/menu/menu.types'
import { MenuType } from '../components/ItemMenu/ItemMenu.types'

export class MenuStore {
  originalMenu: MenuResponse[] = []
  order: MenuType[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  setMenu(data: MenuResponse[]) {
    this.originalMenu = data

    this.order = data.map(({ name, price, halfAvailable }) => ({
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
    const item = this.order.find((el) => el.name === name)
    if (item) {
      item.count++
    }
  }

  decreaseCount(name: string) {
    const item = this.order.find((el) => el.name === name)
    if (item && item.count > 0) {
      item.count--
    }
  }
}

export const menuStore = new MenuStore()
