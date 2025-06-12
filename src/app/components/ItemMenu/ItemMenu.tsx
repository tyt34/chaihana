import { MenuType } from './ItemMenu.types'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import styles from './ItemMenu.module.scss'

interface Props {
  item: MenuType
  onIncrease?: () => void
  onDecrease?: () => void
}

const ItemMenu = observer(({ item, onIncrease, onDecrease }: Props) => {
  console.log({ item: toJS(item) })

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
          <span className={styles.button}> - </span>
        </button>

        <button onClick={onIncrease} aria-label={`Увеличить количество для ${item.name}`}>
          <span className={styles.button}> + </span>
        </button>

        <span className={styles.count}>{item.count}</span>
      </div>
    </section>
  )
})

export default ItemMenu
