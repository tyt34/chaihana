import { makeAutoObservable } from 'mobx'

class AppStore {
  currentPath: string = '/'

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentPath(path: string) {
    this.currentPath = path
  }
}

export const appStore = new AppStore()
