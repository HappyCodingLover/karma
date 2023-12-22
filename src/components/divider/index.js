import { twMerge } from "tailwind-merge"

export const Divider = ({ className="" }) => {
  return (
    <div className={twMerge("border-t-[1px] border-dotted my-[30px]", className)}/>
  )
}