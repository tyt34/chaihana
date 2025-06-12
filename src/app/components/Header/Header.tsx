import Button from '../Button/Button'
import CheckSetting from '../CheckSetting/CheckSetting'
import styles from './Header.module.scss'

const LINKS_LIST = [
  { href: '/', name: 'Меню' },
  { href: '/Order', name: 'Заказ' },
  { href: '/Setting', name: 'Настройки' },
]

export default function Header() {
  return (
    <>
      <CheckSetting />

      <section className={styles.container}>
        {LINKS_LIST.map((link) => (
          <Button key={link.href} href={link.href} name={link.name} />
        ))}
      </section>
    </>
  )
}
