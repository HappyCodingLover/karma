import './App.css';
import { RoundedIcon } from './components/roundedicon';
import { Typography } from './components/typography';
import logo from './assets/imgs/logo.png'
import nft1 from './assets/imgs/nft1.png'
import nft2 from './assets/imgs/nft2.png'
import nft3 from './assets/imgs/nft3.png'
import nft4 from './assets/imgs/nft4.png'
import nft5 from './assets/imgs/nft5.png'
import discordIcon from './assets/imgs/discord.png'
import xstreamIcon from './assets/imgs/xstream.png'

import { Charactor } from './components/character';

function App() {
  return (
    <>
      <div className='flex flex-col gap-[80px] sm:gap-[40px] xl:gap-[200px] bg-black px-[100px] sm:px-[40px] py-[60px] h-[660px] sm:h-[560px] xl:h-[1360px]'>
        <div className="flex justify-center items-center">
          <div className='flex flex-1 justify-end'>
            <img src={logo} className='w-[208px] xl:w-[416px]' alt='LOGO'/>
          </div>
          <div className="flex flex-1 justify-center items-center gap-[80px] xl:gap-[160px]">            
            <Typography className="text-[55px] xl:text-[110px] text-white mb-3" variant="heading-medium">Karma</Typography> 
            <RoundedIcon className="w-[15px] xl:w-[40px] h-[15px] xl:h-[40px]" />
            <Typography className="text-[40px] xl:text-[80px] text-white" variant="heading-small">Governance</Typography>   
            <RoundedIcon className="w-[15px] xl:w-[40px] h-[15px] xl:h-[40px]" />
            <Typography className="text-[40px] xl:text-[80px] text-white" variant="heading-small">Markets</Typography>   
          </div>
          <div className='flex flex-1 justify-center items-center xl:gap-[100px]'>
            <img src={nft1} className='w-[110px] xl:w-[210px] rotate-[25px] ml-[80px]' alt="NFT1"/>
            <button className='bg-[#1061AC] py-[12px] text-white rounded-full ml-[60px] w-[120px] xl:w-[280px] h-[70px] xl:h-[140px] text-[30px] xl:text-[60px] font-semibold'> App </button>
          </div>
        </div>

        <div className="relative">
          <img src={nft2} className='absolute left-[50px] w-[147px] xl:w-[294px]' alt='NFT2'/>
          <div className="flex justify-center items-center gap-[120px] xl:gap-[200px]">            
            <Typography className="text-[70px] xl:text-[150px] text-white" variant="heading-medium">
              Le<Charactor className='text-[#3C85F2]'>n</Charactor>d
            </Typography> 
            <RoundedIcon className="w-[15px] xl:w-[40px] h-[15px] xl:h-[40px]" />
            <Typography className="text-[70px] xl:text-[150px] text-white" variant="heading-small">
              B<Charactor className='text-[#3C85F2]'>o</Charactor>rr<Charactor className='text-[#3C85F2]'>o</Charactor>w
            </Typography>   
            <RoundedIcon className="w-[15px] xl:w-[40px] h-[15px] xl:h-[40px]" />
            <Typography className="text-[70px] xl:text-[150px] text-white" variant="heading-small">
              Sw<Charactor className='text-[#3C85F2]'>a</Charactor>p
            </Typography>   
          </div>
        </div>

        <div className='flex justify-end mr-[80px]'>
          <img src={nft3} className='absolute w-[147px] xl:w-[294px]' alt='NFT3'/>
        </div>
      </div>

      <div className="bg-bgImg1 h-[600px] xl:h-[820px] p-[60px]">
        <div className='px-[60px]'>
          <Typography className="description text-[70px] xl:text-[120px] text-center text-white tracking-wide" variant='heading-medium'>
            Kar<Charactor className='text-[#3C85F2]'>m</Charactor>a is a de<Charactor className='text-[#3C85F2]'>cen</Charactor>tralized 
            len<Charactor className='text-[#AD60B4]'>d</Charactor>ing and
            b<Charactor className='text-[#AD60B4]'>o</Charactor>rr<Charactor className='text-[#AD60B4]'>o</Charactor>wing 
            platf<Charactor className='text-[#1CAE19]'>o</Charactor>rm with 
            su<Charactor className='text-[#AD60B4]'>pp</Charactor>ort for over <Charactor className='text-[#3C85F2]'>6</Charactor> different 
            blockchains and 50 collateral ena<Charactor className='text-[#3C85F2]'>bl</Charactor>ed
            t<Charactor className='text-[#1CAE19]'>o</Charactor>kens <Charactor className='text-[#3C85F2]'>+</Charactor> 
            <Charactor className='text-[#EBEF3A]'>NFT’S</Charactor>.
          </Typography>
        </div>
      </div>
      <div className="bg-bgImg2 h-[480px] xl:h-[820px] p-[60px]">
        <div className='flex justify-end px-[60px]'>
          <Typography className="text-[70px] xl:text-[140px] text-center text-white tracking-wide" variant='heading-medium'>
            <Charactor className='text-[#3C85F2]'>$115,015,715</Charactor> of borrowing backed by
          </Typography>
        </div>
        <div className='flex justify-start px-[60px]'>
          <Typography className="text-[70px] xl:text-[140px] text-center text-white tracking-wide" variant='heading-medium'>
            <Charactor className='text-[#AD60B4]'>$300,737,033</Charactor> of collateral.
          </Typography>
        </div>
        <div className='flex justify-end'>
          <img src={nft4} className='absolute w-[147px] xl:w-[294px]' alt='NFT4'/>
        </div>
      </div>

      <div className="bg-bgImg3 h-[740px] xl:h-[1260px] px-[60px] py-[100px]">
        <div className='flex justify-center items-center '>
          <div className='w-[70%]'>
            <Typography className="text-[50px] xl:text-[100px] text-center text-white tracking-wide" variant='heading-medium'>
              <Charactor className='text-[#1E72EF]'>Join our discord & twitter</Charactor>
              <br/>
              <Charactor className='text-[#3E629979]'>Ask questions, get answers and connect with our community.</Charactor>
            </Typography>
          </div>
        </div>
        <div className='flex justify-center items-center gap-[60px] xl:gap-[140px] mt-[60px]'>
          <div className='flex justify-center items-center w-[150px] xl:w-[340px] h-[150px] xl:h-[340px] rounded-[42%] bg-white'>
            <img src={discordIcon} className='w-[120px] xl:w-[260px]' alt='DISCORD'/>
          </div>
          <div className='flex justify-center items-center w-[150px] xl:w-[340px] h-[150px] xl:h-[340px] rounded-[42%] bg-black'>
            <img src={xstreamIcon} className='w-[90px] xl:w-[180px]' alt='XSTREAM'/>
          </div>
        </div>
        <div className='relative flex justify-between mt-[120px]'>
          <Typography className="text-[30px] xl:text-[70px] text-center text-white tracking-wide text-[#757575]" variant='paragraph-medium'>2024 karma.defi All rights reserved</Typography>
          <img src={nft5} className='absolute right-0 bottom-0 w-[150px] xl:w-[360px]' alt='NFT5'/>
        </div>
      </div>
    </>
  );
}

export default App;
