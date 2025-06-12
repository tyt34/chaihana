import { ReactNode } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

interface Props {
  children?: ReactNode
  href: string
  name: string
}

export default function Button({ children, href, name }: Props) {
  return (
    <Link href={href} className={styles.container}>
      <p>{name}</p>
      {children}
    </Link>
  )
}
