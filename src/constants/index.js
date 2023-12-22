import etherLogo from '../assets/imgs/ether.png'
import binanceLogo from '../assets/imgs/binance.png'
import btcLogo from '../assets/imgs/btc.png'
import uniswapLogo from '../assets/imgs/uniswap.png'
import chainLinkLogo from '../assets/imgs/Chainlink.png'

export const coinArr = [
  {
    network: 'Ethereum',
    icon: <img className='mt-1' src={etherLogo} alt='Ethereum'/>,
    ticker: 'ETH',
    amount: '0.0000',
    balance: '0.0000'
  },
  {
    network: 'Binance Token',
    icon: <img className='mt-1' src={binanceLogo} alt='Binance Token'/>,
    ticker: 'BNB',
    amount: '0.0000',
    balance: '0.0000'
  },
  {
    network: 'Bitcoin',
    icon: <img className='mt-1' src={btcLogo} alt='Bitcoin'/>,
    ticker: 'BTC',
    amount: '0.0000',
    balance: '0.0000'
  },
  {
    network: 'Uniswap',
    icon: <img className='mt-1' src={uniswapLogo} alt='Uniswap'/>,
    ticker: 'UNI',
    amount: '0.0000',
    balance: '0.0000'
  },
  {
    network: 'Chainlink',
    icon: <img className='mt-1' src={chainLinkLogo} alt='Chainlink'/>,
    ticker: 'LINK',
    amount: '0.0000',
    balance: '0.0000'
  }
] 