import { ReactNode } from 'react'
import React from 'react'

export interface ConditionalProps {
  test: boolean
  children: ReactNode
}

const Conditional = ({ test, children }: ConditionalProps) => {
  if (!test) return null
  return <>{children}</>
}

export default Conditional
