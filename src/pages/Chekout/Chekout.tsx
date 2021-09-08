import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';
import { IonButtons, IonButton, IonHeader, IonToolbar, IonItem, IonInput, IonLabel, IonCheckbox, } from '@ionic/react';

export const Checkout = (): JSX.Element => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isChecked, setChecked] = useState(false);

  const history = useHistory();

  const onRegistration = () => {
    history.push('/verification');
  };

  return (
    <div className={'component'}>
      <IonHeader style={{ height: 72 }} className={'flex-row flex-center'}>
        <IonToolbar>
          <IonButtons style={{ marginLeft: 10, justifyContent: 'space-between', paddingRight: 20 }}>
            <div className={'flex-row flex-center'}>
    ≈                       <div style={{ color: 'white', paddingLeft: 20 }}>Подтверждение записи</div>
            </div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div className={'wrapper-chekout'}>
        <IonItem lines="none" color="light" style={{ with: '100%', height: '54px', }}>
          <IonLabel style={{ color: 'rgba(167, 167, 171, 1)' }} position="floating">Номер телефона*</IonLabel>
          <IonInput value={phone} onIonChange={e => setPhone(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem lines="none" color="light" style={{ with: '100%', height: '54px', marginTop: '8px' }}>
          <IonLabel style={{ color: 'rgba(167, 167, 171, 1)' }} position="floating">Имя*</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem lines="none" color="white" style={{ with: '100%', marginTop: '16px', height: '64px' }}>
          <IonLabel style={{ color: 'rgba(167, 167, 171, 1)' }} position="stacked">+Добавить комментарий</IonLabel>
          <IonInput style={{ height: '100px' }} value={comment} onIonChange={e => setComment(e.detail.value!)}> </IonInput>
        </IonItem>
        <IonItem lines="none" style={{ with: '100%', marginTop: '20px', color: 'light' }}>
          <div className={'checkbox-text'}>Я принимаю условия пользовательского соглашения</div>
          <IonCheckbox checked={isChecked} onIonChange={e => setChecked(e.detail.checked)} slot="start" color="dark"/>
        </IonItem>
        <IonButton onClick={() => onRegistration()} disabled={!isChecked} size="large" expand="block" color="dark" style={{ marginTop: '30px' }}>Подтвердить</IonButton>
      </div>
    </div>
  );
};
