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

  increaseCount(name: string, halfMode: boolean) {
    const item = this.order.find((el) => el.name === name)

    if (!item) {
      return
    }

    if (halfMode && item.halfAvailable) {
      item.count = +(item.count + 0.5).toFixed(1)
    } else {
      item.count++
    }
  }

  decreaseCount(name: string, halfMode: boolean) {
    const item = this.order.find((el) => el.name === name)
    if (!item) return

    if (halfMode && item.halfAvailable) {
      item.count = +Math.max(0, item.count - 0.5).toFixed(1)
    } else {
      item.count = Math.max(0, item.count - 1)
    }
  }
}

export const menuStore = new MenuStore()
