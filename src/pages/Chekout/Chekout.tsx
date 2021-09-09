import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './style.css';
import { IonButtons, IonHeader, IonToolbar } from '@ionic/react';

export const Checkout = (): JSX.Element => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [isShowComment, setShowComment] = useState(false);

  const history = useHistory();

  const onRegistration = () => {
    history.push('/verification');
  };

  useEffect(() => {
    console.log(phone, name, comment);
  });

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
      <div className={'wrapper-checkout'}>
        <form className={'checkout-form'} >
          <input className={'checkout-input'} value={phone} onChange={(event) => setPhone(event.target.value)} type="text" placeholder="Номер телефона*" />
          <input className={'checkout-input'} value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Имя*" />
          {!isShowComment && <span className={'checkout-input-comment-text'} onClick={() => setShowComment(true)}>+Добавить комментарий</span>}
          {isShowComment &&
            <textarea className={'checkout-input-comment'} onChange={(event) => setComment(event.target.value)} name="" id="" placeholder={'Комментарий'} cols={30}></textarea>
          }
          <label className={'checked-container'}>
            <input className={'checkout-input-checked'} defaultChecked={isChecked} onChange={() => setChecked(!isChecked)} type="checkbox" />
            <span className={'checkout-input-checked-text'}>Я принимаю условия пользовательского соглашения.</span>
          </label>
        </form>
        <button className={isChecked ? 'checkout-button' : 'not-checkout-button'} onClick={() => onRegistration()} disabled={!isChecked}>Подтвердить</button>
      </div>
    </div>
  );
};
