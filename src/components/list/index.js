import { coinArr } from "../../constants"
import { Typography } from "../typography"
import plusLogo from '../../assets/imgs/plus.png'
import minusLogo from '../../assets/imgs/minus.png'

export const ItemList = () => {
  return (
    <>
    {
      coinArr.map((item, i) => (
        <div className="flex items-center px-[30px] mt-[20px] gap-[50px] w-full" key={i}>
          <div className="flex flex-[3] items-center gap-[12px] xl:gap-[24px]">
            {item.icon}
            <div className="flex flex-col">
              <Typography className="text-white text-[24px] xl:text-[44px] " variant="paragraph-medium">{item.network}</Typography>
              <Typography className="text-[18px] xl:text-[32px] text-[#9E9E9E]" variant="paragraph-medium">{`${item.ticker} ${item.amount} in wallet`}</Typography>
            </div>
          </div>
          <div className="flex flex-[2] items-center gap-[20px]">
            <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="paragraph-medium">{item.balance}</Typography>
            <div className="flex justify-center items-center w-[40px] xl:w-[80px] h-[40px] xl:h-[80px] rounded-full bg-gray-500">
              <img src={plusLogo} alt="add"/>
            </div>
            <div className="flex justify-center items-center w-[40px] xl:w-[80px] h-[40px] xl:h-[80px] rounded-full bg-gray-500">
              <img src={minusLogo} alt="minus"/>
            </div>
          </div>
        </div>
      ))
    }
    </>
  )
}