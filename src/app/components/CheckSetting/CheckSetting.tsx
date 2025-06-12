'use client'

import { LOCAL_STORAGE_SETTING } from '@/app/Setting/Setting.constants'
import { settingsStore } from '@/app/store/setting-store'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { appStore } from '@/app/store/app-store'

export default function CheckSetting() {
  const pathname = usePathname()

  useEffect(() => {
    appStore.setCurrentPath(pathname)
  }, [pathname])

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_SETTING)

    if (raw) {
      try {
        const data = JSON.parse(raw)
        settingsStore.setSetting(data)
      } catch (e) {
        console.error('Ошибка чтения настроек из localStorage', e)
      }
    }
  }, [])

  return <></>
}
