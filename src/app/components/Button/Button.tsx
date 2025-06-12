import { ReactNode } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  href: string
  name: string
  isActive?: boolean
}

export default function Button({ children, href, name, isActive }: Props) {
  return (
    <Link href={href} className={clsx(styles.container, isActive && styles.active)}>
      <p>{name}</p>
      {children}
    </Link>
  )
}
