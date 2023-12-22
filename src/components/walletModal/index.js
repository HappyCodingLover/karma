import React from 'react';
import { Button, Modal } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { Flex } from 'antd';
import walletLogo from '../../assets/imgs/walletconnect.png'
import metamaskLogo from '../../assets/imgs/metamask.png'
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const WalletModal = ({isModalOpen, setIsModalOpen}) => {
  const token = useTheme();
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
      backdropFilter: 'blur(1px)',
    },
    content: {
      padding: 50,
      backgroundColor: '#000000'
    },
  };

  return (
    <Modal
      title=""
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      styles={modalStyles}
    >
      <Flex gap='middle' vertical>
        <Flex gap="middle" vertical>
          <div className="h-24 w-24">
            <img
              src={walletLogo}
              alt="walletconnect"
            />
          </div>
          <Paragraph>
            WalletConnect
          </Paragraph>
        </Flex>

        <div>
          <div className="h-24 w-24">
              <img
                src={metamaskLogo}
                alt="metamast"
              />
            </div>
          <Paragraph>
            Connect with MetaMask
          </Paragraph>
        </div>

      </Flex>
    </Modal>
  );
};
export default WalletModal;