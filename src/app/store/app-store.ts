import { makeAutoObservable } from 'mobx'

class UIStore {
  counter = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.counter++
  }

  reset() {
    this.counter = 0
  }
}

export const uiStore = new UIStore()
