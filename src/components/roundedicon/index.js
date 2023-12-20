import { twMerge } from "tailwind-merge"

export const RoundedIcon = ({className}) => {
  return (
    <div className={twMerge(`bg-white rounded-full`, className)} />
  )
}