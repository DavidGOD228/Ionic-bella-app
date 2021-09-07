import React, { useState } from 'react';
import './styles.css';
import Clock from '../../assets/icon/clock.svg';
import ICO2 from '../../assets/icon/user-bonus2.svg';
import Percent from '../../assets/icon/percent.svg';
import { formatPhoneNumber } from '../../helpers/functions';
export const User = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
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
        <input type="text" className="input" placeholder={'Номер телефона'} onChange={(e) => handleInput(e)} value={inputValue}/>
        <div className="main-button">
          <span>Получить код</span>
        </div>

      </div>
    </div>
  );
};
