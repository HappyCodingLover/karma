import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navbar'
import dashboardIcon from '../../assets/imgs/dashboard_icon.png'
import swapIcon from '../../assets/imgs/swap_icon.png'
import marketsIcon from '../../assets/imgs/markets_icon.png'

export const Layout= ({ children }) => {
  const commonSections = [
    {
      icon: dashboardIcon,
      label: 'Dashboard',
      to: '/main/dashboard',
    },
    {
      icon: swapIcon,
      label: 'Swap',
      to: '/main/swap',
    },
    {
      icon: marketsIcon,
      label: 'Markets',
      to: '/main/markets',
    },
  ]

  const navigation = { sections: commonSections }
  return (
    <>
      <Navbar {...{ navigation }}>{children ?? <Outlet />}</Navbar>
    </>
  )
}
