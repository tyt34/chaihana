import { MenuType } from './menu.types'

export const MENU_LIST: MenuType[] = [
  {
    name: 'Плов',
    price: 300,
    halfAvailable: false,
    type: 'food',
  },
  {
    name: 'Шашлык',
    price: 450,
    halfAvailable: true,
    type: 'food',
  },
  {
    name: 'Лимонад',
    price: 150,
    halfAvailable: false,
    type: 'drink',
  },
  {
    name: 'Лаваш',
    price: 50,
    halfAvailable: false,
    type: 'bread',
  },
  {
    name: 'Чай черный',
    price: 100,
    halfAvailable: true,
    type: 'drink',
  },
]
