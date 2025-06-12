'use client'

import { menuStore } from '../store/menu-store'
import { observer } from 'mobx-react-lite'
import { settingsStore } from '../store/setting-store'
import ItemMenu from '../components/ItemMenu/ItemMenu'
import styles from './Order.module.scss'

const OrderPage = observer(() => {
  const orderWithCount = menuStore.order.filter((item) => item.count > 0)

  return (
    <section className={styles.page}>
      <div>
        <h1>Заказ</h1>
      </div>

      <div>
        {orderWithCount.map((item) => (
          <ItemMenu
            key={item.name}
            item={item}
            onIncrease={() =>
              menuStore.increaseCount(item.name, settingsStore.setting.allowHalfOrders)
            }
            onDecrease={() =>
              menuStore.decreaseCount(item.name, settingsStore.setting.allowHalfOrders)
            }
          />
        ))}
      </div>
    </section>
  )
})

export default OrderPage
