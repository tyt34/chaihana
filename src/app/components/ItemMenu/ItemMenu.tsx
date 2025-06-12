import styles from './ItemMenu.module.scss'
import { MenuType } from './ItemMenu.types'

interface Props {
  item: MenuType
  onIncrease?: () => void
  onDecrease?: () => void
}

export default function ItemMenu({ item, onIncrease, onDecrease }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <p>{item.name}</p>
      </div>

      <div className={styles.price}>
        <p>{item.price} ₽</p>
      </div>

      <div className={styles.controls}>
        <button onClick={onDecrease} aria-label={`Уменьшить количество для ${item.name}`}>
          -
        </button>

        <button onClick={onIncrease} aria-label={`Увеличить количество для ${item.name}`}>
          +
        </button>

        <span className={styles.count}>{item.count}</span>
      </div>
    </section>
  )
}
