import { NextResponse } from 'next/server'
import { MENU_LIST } from './menu.constants'

export async function GET() {
  return NextResponse.json(MENU_LIST)
}
