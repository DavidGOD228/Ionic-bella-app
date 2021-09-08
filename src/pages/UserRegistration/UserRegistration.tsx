import React, { useState } from 'react';
import './styles.css';
import Clock from '../../assets/icon/clock.svg';
import ICO2 from '../../assets/icon/user-bonus2.svg';
import Percent from '../../assets/icon/percent.svg';
import { formatPhoneNumber } from '../../helpers/functions';
import { PinCode } from '../../components/PinCode/PinCode';
import { useHistory } from 'react-router';
export const UserRegistration = () => {
  const [inputValue, setInputValue] = useState('');
  const [pinCodeValue, setPinCodeValue] = useState('');
  const [isPinCode, setIsPinCode] = useState(false);

  const history = useHistory();

  const handleInput = (e) => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
  };
  const handlePinCode = (text: string) => {
    setPinCodeValue(text);
  };
  const onSendPinCode = () => {
    history.push('/user');
  };
  return (
    <div>
      <div className="header">
        <span>Вход в личный кабинет</span>
      </div>
      <div className="container-user">
        <span className={'title'}>
          {'Зарегистрируйтесь\nи получите'}
        </span>
        <div className="bonus" style={{ marginTop: '10%' }}>
          <div className="bonusImg">
            <img src={Clock} alt=""/>
          </div>
          <span>Доступ к истории визитов</span>
        </div>
        <div className="bonus">
          <div className="bonusImg">
            <img src={ICO2} alt=""/>
          </div>
          <span>Возможность оценки визита </span>
        </div> <div className="bonus">
          <div className="bonusImg">
            <img src={Percent} alt=""/>
          </div>
          <span>Бонусы и скидки</span>
        </div>
        {isPinCode
          ?
          <div className={'pin-code-wrapper'}>
            <PinCode value={pinCodeValue} onChange={handlePinCode} onComplete={onSendPinCode}/>
            <span className={'send-again'}>Повторить отправку кода</span>
          </div>
          :
          <input type="text" className="input" placeholder={'Номер телефона'} onChange={(e) => handleInput(e)} value={inputValue}/>
        }

        <div className="main-button" onClick={() => isPinCode ? onSendPinCode() :  setIsPinCode(true)}>
          <span>{isPinCode ?  'Войти' : 'Получить код'}</span>
        </div>

      </div>
    </div>
  );
};
