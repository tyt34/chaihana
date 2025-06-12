'use client'

import { DEFAULT_SETTINGS, LOCAL_STORAGE_SETTING } from './Setting.constants'
import { useEffect, useState } from 'react'
import { UserSettings } from './Setting.types'
import styles from './Setting.module.scss'

export default function SettingPage() {
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_SETTING)
    if (stored) {
      try {
        setSettings(JSON.parse(stored))
      } catch {
        // игнорируем ошибку
      }
    }
  }, [])

  const toggleAllowHalfOrders = () => {
    setSettings((prev) => ({
      ...prev,
      allowHalfOrders: !prev.allowHalfOrders,
    }))
  }

  const toggleComment = () => setIsOpen((prev) => !prev)

  return (
    <div className={styles.container}>
      <h1>Настройки</h1>

      <div className={styles.commentWrapper}>
        <button onClick={toggleComment} className={styles.commentToggle}>
          <span className={styles.buttonWrapper}>{isOpen ? 'Скрыть информацию' : 'Подробнее'}</span>
        </button>

        {isOpen && (
          <p className={styles.comment}>
            Если включено, пользователь сможет заказывать половинчатые блюда (например, половину
            порции).
          </p>
        )}
      </div>

      <label>
        <input
          type="checkbox"
          checked={settings.allowHalfOrders}
          onChange={toggleAllowHalfOrders}
        />
        Разрешить заказ половинок
      </label>
    </div>
  )
}
