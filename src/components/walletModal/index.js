import React, { useState } from 'react';
import { Modal } from 'antd';
import walletLogo from '../../assets/imgs/walletconnect.png'
import metamaskLogo from '../../assets/imgs/metamask.png'
import arrowImg from '../../assets/imgs/arrow.png'
import { Typography } from '../typography';
import logo from '../../assets/imgs/logo.png'
import { Charactor } from '../character';
import { useConnect } from 'wagmi'

const WalletModal = ({ isModalOpen, setIsModalOpen }) => {
  const { connect, connectors, isLoading, pendingConnector } = useConnect()
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    body: {
    },
    mask: {
      backgroundColor: 'rgba(55, 55, 55, 0.65)',
    },
    content: {
      padding: 50,
      backgroundColor: '#000000',
      width: 483
    },
  };

  const wallets = {
    WalletConnect: <React.Fragment>
        <div className='flex items-center gap-4'>
          <div className='h-16 w-16 flex items-center justify-center'>
            <img
              src={walletLogo}
              alt="walletconnect"
            />
          </div>
          <Typography className="text-[36px] xl:text-[70px] text-white" variant="heading-small">
            WalletConnect
          </Typography>
        </div>
        <img
          src={arrowImg}
          alt="arrow"
        />
      </React.Fragment>,
    MetaMask: <React.Fragment>
        <div className='flex items-center gap-4'>
          <div className='bg-[#1D1D1D] h-16 w-16 flex items-center justify-center rounded-[20px]'>
            <img
              src={metamaskLogo}
              alt="metamast"
            />
          </div>
          <div>
            <Typography className="text-[36px] xl:text-[70px] text-white leading-7 text-left" variant="heading-small">Metamask</Typography>
            <Typography className="text-[18px] xl:text-[50px] text-[#CECECE] font-[500]" variant="heading-small">And other browser wallets</Typography>
          </div>
        </div>
        <img
          src={arrowImg}
          alt="arrow"
        />
      </React.Fragment>

}

  return (
    <Modal
      title=""
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      styles={modalStyles}
    >
      <div className='flex flex-col'>
        
        <div className='flex flex-col justify-center items-center pb-12'>
          <img src={logo} className='w-[208px] xl:w-[416px] ml-4' alt='LOGO' />
          <Typography className="text-[36px] xl:text-[70px] text-white" variant="heading-small">Connect Wallet</Typography>
        </div>

        <div className='flex flex-col gap-[20px]'>
          {connectors.map((connector) => (
            <button
              className='flex items-center justify-between'
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => {
                connect({ connector })
                setIsModalOpen(false)
              }}
            >
              {wallets[`${connector.name}`]}
            </button>
          ))}
        </div>

        <div className='flex items-center justify-center pt-44'>
          <Typography className="text-[15px] xl:text-[40px] text-[#CECECE] font-[500]" variant="heading-small">By connecting, I accept Karma's <Charactor className='text-[#2786DE]'>Terms of Service</Charactor></Typography>
        </div>
    </div>

    </Modal>
  );
};
export default WalletModal;