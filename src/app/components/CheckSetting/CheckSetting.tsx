'use client'

import { LOCAL_STORAGE_SETTING } from '@/app/Setting/Setting.constants'
import { settingsStore } from '@/app/store/setting-store'
import { useEffect } from 'react'

export default function CheckSetting() {
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_SETTING)
    console.log({ raw })
    if (raw) {
      try {
        const data = JSON.parse(raw)
        console.log({ data })
        settingsStore.setSetting(data)
      } catch (e) {
        console.warn('Ошибка чтения настроек из localStorage', e)
      }
    }
  }, [])

  return <></>
}
