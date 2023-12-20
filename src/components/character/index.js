import { twMerge } from "tailwind-merge"

export const Charactor = ({className, children}) => {
  return (
    <span className={twMerge(className)}>{children}</span>
  )
}