import React from 'react'
import user from '../../assets/icon/user_w.svg'
import pencil from '../../assets/icon/pencil.svg'
import './style.css'
import {IonRow, IonCol, IonGrid, IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonItem, IonInput, IonLabel, IonCheckbox,} from "@ionic/react";

export const Successful = (): JSX.Element => {


    return (
        <div className={"component"}>
            <div className={'wrapper-verification'}>
            <h1 className={'flex-row flex-center'}>Вы успешно записались!</h1>
                <IonButton disabled={false} size="large" expand="block" color="dark" style={{marginTop: '74px'}}>Добавить календарь</IonButton>
                <h1 className={'flex-row flex-center'}>Вы успешно записались!</h1>
            </div>
            <div className={'footer-btn'}>
                <IonButton className={'footer-item-btn-left'} size="large" expand="block">
                <IonIcon slot="start" icon={pencil}/>
                    Запись
                </IonButton>
                <IonButton className={'footer-item-btn-right'} size="large" expand="block">
                <IonIcon slot="start" icon={user}/>
                    Личный кабинет
                </IonButton>
            </div>
        </div>
    )
}
