import { MenuResponse } from '@/app/api/menu/menu.types'

export type MenuType = Omit<MenuResponse, 'type'> & {
  count: number
}
