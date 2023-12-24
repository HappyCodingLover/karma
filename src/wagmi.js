import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism],
  [publicProvider()],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.REACT_APP_WEB3_PROJECTID,
      },
    }),
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
})

