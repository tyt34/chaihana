import Button from '../Button/Button'
import styles from './Header.module.scss'

const LINKS_LIST = [
  { href: '/', name: 'Меню' },
  { href: '/Order', name: 'Заказ' },
  { href: '/Setting', name: 'Настройки' },
]

export default function Header() {
  return (
    <section className={styles.container}>
      {/* <Button href="/" name="меню"></Button> */}
      {/* <Button href="/Order"></Button> */}
      {/* <Button href="/Setting"></Button> */}

      {LINKS_LIST.map((link) => (
        <Button key={link.href} href={link.href} name={link.name} />
      ))}
    </section>
  )
}
