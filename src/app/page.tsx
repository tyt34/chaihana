import styles from './Page.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles['a-1']}></div>
        <div className="a-2"></div>
        <div className="a-3"></div>
        тут должно быть меню и интерфейс заказа
      </section>

      <section className=""></section>
    </>
  )
}
