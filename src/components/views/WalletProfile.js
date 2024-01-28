import { Row,Col } from 'antd';
import {useState} from 'react';
import {AiOutlineQrcode,AiTwotoneContainer,AiOutlineKey,AiOutlineUser} from 'react-icons/ai';
import WalletResetPasswordModal from "../component/WalletResetPasswordModal";
import { useTranslation } from 'react-i18next';
import Icon from "react-crypto-icons";
import  {useEthPrice} from '../../utils/ethprice';

   
function WalletProfile() {
  const [t,i18n] = useTranslation();
  const [use,setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [showModal,setShowModal] = useState(false);
  const { ethPrice } = useEthPrice() 

  return (
    <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
      <Row>
        <Col span={20}>
         {t('Email Address')} 
        </Col>
        <Col span={4} className="text-center text-overflow">
          {t('Edit Password')}
        </Col>
      </Row>

      <Row className="text-lg font-bold">
        <Col span={20}>
          {t(use.email)}
        </Col>
        <Col span={4} className="text-center">
          <a onClick={()=>setShowModal(true)}><AiOutlineKey size={20} className="inline mr-2"/></a>
        </Col>
      </Row>
      <Row className="text-gray-500">
                  <Col span={6}>{t("Name")}</Col>
                  <Col span={6} className="text-left">{t("Price")}</Col>
                </Row>
                {
                  
                    <Row className="mt-2 text-lg myColor1" >
                      <Col span={6}>
                     
                          <Icon className="inline mr-4" name={"eth"} size={30} />
                    
                      ETH
                      </Col>
                      <Col span={6} className="text-left">{`$ ${parseFloat(ethPrice).toFixed(5)}`}</Col>
                    </Row>
                }

      {
        showModal?
          <WalletResetPasswordModal  setModalShow={setShowModal} title="Reset Password"/>
        : null
      }
    </Col>
  );
}

export default WalletProfile;