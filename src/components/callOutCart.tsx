'use client'
import { CheckCircleIcon,ExclamationIcon } from "@heroicons/react/solid"
import { Callout } from "@tremor/react"
type Props = {
massage:string,
warning?:boolean
}

function CallOutCard({massage,warning}:Props) {
  return (
    <Callout
    className="mt-4"
    title={massage} 
    icon={ warning? ExclamationIcon : CheckCircleIcon}
    color={warning?'rose':'teal'}
    />
  )
}

export default CallOutCard