import clsx from 'clsx'
import React from 'react'
import Anchor from '../Anchor/Anchor'

export type LinkTabProps = {
  title: string
  description: string
  href: string
  isActive?: boolean
}

const LinkTab = (props: LinkTabProps) => {
  const { title, description, href, isActive } = props

  return (
    <Anchor
      href={href}
      className={clsx(
        'isolate p-4 space-y-1 border-2',
        'first-of-type:rounded-tl-md last-of-type:rounded-tr-md',
        isActive ? 'border-plumbus' : 'border-transparent',
        isActive ? 'bg-plumbus/5 hover:bg-plumbus/10' : 'hover:bg-white/5'
      )}
    >
      <h4 className="font-bold">{title}</h4>
      <span className="text-sm text-white/80 line-clamp-2">{description}</span>
    </Anchor>
  )
}

export default LinkTab
