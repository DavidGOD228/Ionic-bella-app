import React, { useState } from 'react';
import { PinCode } from '../../components/PinCode/PinCode';
import './style.css';
import { IonButtons, IonHeader, IonToolbar } from '@ionic/react';

export const Verification = (): JSX.Element => {
  const [pinCodeValue, setPinCodeValue] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handlePinCode = (text: string) => {
    setPinCodeValue(text);
  };
  const onSendPinCode = () => {
    setChecked(true);
  };

  return (
    <div className={'component'}>
      <IonHeader style={{ height: 72 }} className={'flex-row flex-center'}>
        <IonToolbar>
          <IonButtons style={{ marginLeft: 10, justifyContent: 'space-between', paddingRight: 20 }}>
            <div className={'flex-row flex-center'}>
              ≈                       <div style={{ color: 'white', paddingLeft: 20 }}>Введите код из sms</div>
            </div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div className={'wrapper-verification'}>
        <div className={'pin-code-wrapper, pin-code-center'}>
          <div>
            <PinCode value={pinCodeValue} onChange={handlePinCode} onComplete={onSendPinCode} />
            <span className={'send-again'}>Повторить отправку кода</span>
          </div>
        </div>
        <button className={isChecked ? 'checkout-button' : 'not-checkout-button'} disabled={!isChecked} style={{ marginTop: 52 }}>отправить</button>
      </div>
    </div>
  );
};
