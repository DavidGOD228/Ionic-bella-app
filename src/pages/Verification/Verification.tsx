import React, { useState } from 'react';
import user from '../../assets/icon/user_w.svg';
import pencil from '../../assets/icon/pencil.svg';
import './style.css';
import { IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonItem, IonInput, IonLabel, } from '@ionic/react';

export const Verification = (): JSX.Element => {
  const [code, setCode] = useState('');

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
        <IonItem lines="none" color="light" style={{ with: '100%', height: '54px', }}>
          <IonLabel style={{ color: 'rgba(167, 167, 171, 1)' }} position="floating">Номер телефона*</IonLabel>
          <IonInput value={code} onIonChange={e => setCode(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton disabled={false} size="large" expand="block" color="dark" style={{ marginTop: '74px' }}>Отправить</IonButton>
      </div>
      <div className={'footer-btn'}>
        <IonButton className={'footer-item-btn-left'} size="large" expand="block">
          <IonIcon slot="start" icon={pencil} />
          Запись
        </IonButton>
        <IonButton className={'footer-item-btn-right'} size="large" expand="block">
          <IonIcon slot="start" icon={user} />
          Личный кабинет
        </IonButton>
      </div>
    </div>
  );
};
