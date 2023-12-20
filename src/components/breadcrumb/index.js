import { Typography } from "../typography"

export const InlineBreadcrumb = ({textArray}) => {
  return (  
    <div className="flex justify-center items-center gap-15">            
      <Typography className="text-[40px] md:text-[22px] xl:text-[80px] text-white" variant="heading-medium"></Typography>    
    </div>
  )
}