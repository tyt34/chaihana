export interface MenuResponse {
  name: string
  price: number
  halfAvailable: boolean
  type: 'food' | 'drink' | 'bread'
}
