'use client'

import { appStore } from '@/app/store/app-store'
import Button from '../Button/Button'
import CheckSetting from '../CheckSetting/CheckSetting'
import styles from './Header.module.scss'
import { observer } from 'mobx-react-lite'

const LINKS_LIST = [
  { href: '/', name: 'Меню' },
  { href: '/Order', name: 'Заказ' },
  { href: '/Setting', name: 'Настройки' },
]

const Header = observer(() => {
  return (
    <>
      <CheckSetting />

      <section className={styles.container}>
        {LINKS_LIST.map((link) => (
          <Button
            key={link.href}
            href={link.href}
            name={link.name}
            isActive={appStore.currentPath === link.href}
          />
        ))}
      </section>
    </>
  )
})

export default Header
