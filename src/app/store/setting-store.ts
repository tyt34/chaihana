import { makeAutoObservable } from 'mobx'
import { UserSettings } from '../Setting/Setting.types'
import { DEFAULT_SETTINGS, LOCAL_STORAGE_SETTING } from '../Setting/Setting.constants'

export class SettingsStore {
  setting: UserSettings = DEFAULT_SETTINGS

  constructor() {
    makeAutoObservable(this)
  }

  setSetting(data: UserSettings) {
    this.setting = data
    localStorage.setItem(LOCAL_STORAGE_SETTING, JSON.stringify(data))
  }
}

export const settingsStore = new SettingsStore()
