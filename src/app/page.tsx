import Link from 'next/link'
import styles from './Page.module.scss'

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles['a-1']}></div>
      <div className="a-2"></div>
      <div className="a-3"></div>

      <Link href="/Order" className={styles.myLink}>
        Перейти на страницу 1
      </Link>

      <Link href="/Setting" className={styles.myLink}>
        Перейти на страницу 2
      </Link>
    </section>
  )
}
