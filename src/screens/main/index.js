// import { RoundedIcon } from './components/roundedicon';
// import { Typography } from './components/typography';
import { Divider } from '../../components/divider';
import logo1 from '../../assets/imgs/logo1.png'
import nft1 from '../../assets/imgs/nft_1.png'
import nft2 from '../../assets/imgs/nft_2.png'
// import nft3 from '../../assets/imgs/nft_3.png'
// import nft4 from '../assets/imgs/nft4.png'
// import nft5 from '../assets/imgs/nft5.png'
// import discordIcon from '../assets/imgs/discord.png'
// import xstreamIcon from '../assets/imgs/xstream.png'

import { ItemList } from "../../components/list";
import { Typography } from "../../components/typography";
import { Dropdown } from '../../components/dropdown';
import { useState } from 'react';
import { coinArr } from '../../constants';

// import { Charactor } from '../../components/character';

export const MainPage = () => {
  const [ticker, setTicker] = useState(coinArr[0])

  const onSelect = (item) => {
    setTicker({...item})
  }
  const connectWallet = () => {
    alert('connect your wallet')
  }

  return (
    <div className='relative'>
      <div className=" w-5/6">
        <div className="flex justify-between items-center py-[20px] xl:py-[40px] mt-3">
          <div className='flex items-center gap-2'>
            <img src={logo1} className='h-[100px] xl:h-[180px]' alt='LOGO1'/>
            <Typography className="text-white text-[56px] xl:text-[110px]" variant="heading-medium">Karma</Typography>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <div className='relative'>
              <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
              <div className="absolute left-[10px] top-0 w-[40px] h-[40px] rounded-full bg-red-500"></div>
            </div>
            <Typography className="text-white text-[30px] xl:text-[60px]" variant="label-large">USDC</Typography>
            <Dropdown ticker={ticker} tickerArr={coinArr} onSelect={onSelect}/>
          </div>
          <div className='cursor-pointer' onClick={connectWallet}>
            <Typography className="text-white text-[28px] xl:text-[56px]" variant="label-large">Connect Wallet</Typography>
          </div>
        </div>

        <Divider className='m-0' />

        <div className="flex justify-between gap-[60px]">
          <div className=" w-2/3">
            <div className="my-[32px] xl:my-[64px]">
              <div className="flex">
                <Typography className="flex-1 text-white text-[36px] xl:text-[70px]" variant="label-large">Balance</Typography>
                <Typography className="flex-1 text-white text-[36px] xl:text-[70px]" variant="label-large">Net APY</Typography>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex flex-1 items-center gap-4">
                  <div className="w-[50px] xl:w-[100px] h-[50px] xl:h-[100px] rounded-[10px] bg-white"></div>
                  <Typography className="text-[#9E9E9E] text-[36px] xl:text-[70px]" variant="label-large">0.00000</Typography>
                </div>
                <Typography className="flex-1 text-[#9E9E9E] text-[36px] xl:text-[70px]" variant="label-large">0.00000%</Typography>
              </div>
            </div>

            <div className="px-[20px] py-[40px] min-w-[400px] bg-[#1B2031] rounded-[20px]">
              <div className="flex ">
                <div className="flex flex-[3] items-center gap-[60px] px-[30px]">
                  <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="label-medium">Collateral Asset</Typography>
                </div>
                <div className="flex flex-[2] items-center gap-[60px] px-[30px]">
                  <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="label-medium">Balance</Typography>
                </div>
              </div>
              <ItemList />
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex items-end gap-[120px] my-[36px] xl:my-[78px] min-h-[116px] xl:min-h-[220px]">
              <Typography className="m-0 text-[#9E9E9E] text-[32px] xl:text-[64px]" variant="label-large">Supply</Typography>
              <Typography className="m-0 text-[#9E9E9E] text-[32px] xl:text-[64px]" variant="label-large">Borrow</Typography>
            </div>

            <div className="flex flex-col gap-[60px]">
              <div className="flex flex-col gap-[20px] px-[26px] xl:px-[44px] py-[35px] xl:py-[70px] bg-[#1B2031] rounded-[20px] min-w-[300px]">
                <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="label-small">USDC Wallet Balance</Typography>
                <div className="flex items-center gap-4 xl:my-[20px]">
                  <div className="w-[50px] xl:w-[100px] h-[50px] xl:h-[100px] rounded-[10px] bg-white"></div>
                  <Typography className="text-[36px] xl:text-[70px] text-[#9E9E9E]" variant="label-medium">0.0000</Typography>
                </div>
                <Divider className='m-0' />
                <div className="flex justify-between items-center">
                  <div>
                    <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="label-small">Borrow APR</Typography>
                    <Typography className="text-white text-[36px] xl:text-[70px]" variant="label-small">1.03%</Typography>
                  </div>
                  <div>
                    <Typography className="text-[24px] xl:text-[48px] text-[#9E9E9E]" variant="label-small">Lend APR</Typography>
                    <Typography className="text-white text-[36px] xl:text-[70px]" variant="label-small">1.03%</Typography>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[20px] px-[26px] xl:px-[44px] py-[35px] xl:py-[70px] bg-[#1B2031] rounded-[20px] min-w-[300px]">
                <Typography className="text-[20px] xl:text-[36px] text-[#9E9E9E]" variant="label-small">Position Summary</Typography>
                <div className='flex items-center gap-[20px]'>
                  <Typography className="flex-[3] text-[20px] xl:text-[36px] text-white" variant="label-small">Collateral Value</Typography>
                  <Typography className="flex-[2] text-[20px] xl:text-[36px] text-white" variant="label-small">0.00000</Typography>
                </div>
                <div className='flex items-center gap-[20px]'>
                  <Typography className="flex-[3] text-[20px] xl:text-[36px] text-white" variant="label-small">Liquidantion Point</Typography>
                  <Typography className="flex-[2] text-[20px] xl:text-[36px] text-white" variant="label-small">0.00000</Typography>
                </div>
                <div className='flex items-center gap-[20px]'>
                  <Typography className="flex-[3] text-[20px] xl:text-[36px] text-white" variant="label-small">Borrow Capacity</Typography>
                  <Typography className="flex-[2] text-[20px] xl:text-[36px] text-white" variant="label-small">0.00000</Typography>
                </div>
                <div className='flex items-center gap-[20px]'>
                  <Typography className="flex-[3] text-[20px] xl:text-[36px] text-white" variant="label-small">Available to Borrow</Typography>
                  <Typography className="flex-[2] text-[20px] xl:text-[36px] text-white" variant="label-small">0.00000</Typography>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='flex justify-center mt-[30px]'>
          <img src={nft1} className='w-[96px] xl:w-[156px]' alt='NFT'/>
        </div>

        <Divider />
        <div className='flex gap-[30px] mt-[30px] mb-[60px]'>
          <Typography className="text-[18px] xl:text-[36px]" variant='paragraph-medium'>Governance</Typography>
          <Typography className="text-[18px] xl:text-[36px]" variant='paragraph-medium'>Terms</Typography>
        </div>
      </div>

      <img src={nft2} className='absolute top-[40%] right-[30px] w-[120px] xl:w-[200px]' alt='NFT'/>
      {/* <img src={nft3} className='absolute top-[70%] w-[120px] xl:w-[200px] left-[-50px] z-1' alt='NFT3'/> */}
    </div>
  );
}