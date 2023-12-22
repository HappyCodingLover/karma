import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Typography } from '../../typography'
import nft3 from '../../../assets/imgs/nft_3.png'

export const Sidebar = ({ sections }) => {
  return (
    <div className="flex flex-row h-[100vh] w-[20%] p-[40px] xl:p-[60px]">
      <div className="sidebar-container px-[50px] py-[50px] xl:py-[100px]">
        <img src={nft3} className='absolute top-[70%] w-[120px] xl:w-[200px]' alt='NFT3'/>
        <nav className="flex flex-1 mt-[90px] xl:mt-[160px] flex-col">
          <ul role="list" className="flex flex-1 flex-col">
            <li>
              <ul role="list" className="space-y-6">
                {sections.map((item) => (
                  <li className='mt-[20px] xl:mt-[40px]' key={item.label}>
                    <NavLink
                      to={item.to}
                      className={({ isActive, isPending }) =>
                        twMerge(
                          'font-medium h-9 flex gap-3 xl:gap-8 desktop:justify-start items-center',
                          isActive ? 'font-extrabold' : isPending && ''
                        )
                      }
                    >
                      <img src={item.icon} className='w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]' alt='IMG'/>
                      <Typography className='text-[24px] xl:text-[46px] text-white' variant='label-large'>{item.label}</Typography>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}