import React, {useState} from 'react'
import './style.css'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {useSelector, useDispatch} from 'react-redux'

import moment from "moment";
import {saveDate} from '../../redux/services/actions'
import {MainHeader} from "../../components/Header/MainHeader";
import {IRootReducer} from "../../redux/rootReducer";
import {useHistory} from "react-router";
import {IonBackButton, IonButtons, IonButton, IonHeader, IonIcon, IonSearchbar, IonToolbar, IonItemDivider, IonItem, IonInput, IonLabel, IonCheckbox,} from "@ionic/react";
import Search from "../../assets/icon/search.svg";
import { relative } from 'path';
import { NONAME } from 'dns';



export const Chekout = (): JSX.Element => {
    const [isShowModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setСomment] = useState('')
    const [checked, setChecked] = useState(false);


    
    return (
        <div className={"component"}>
            <IonHeader style={{height: 72}} className={'flex-row flex-center'}>
                <IonToolbar>
                    <IonButtons style={{marginLeft: 10, justifyContent: 'space-between', paddingRight: 20}}>
                        <div className={'flex-row flex-center'}>
    ≈                            <div style={{color: 'white', paddingLeft: 20}}>{'Подтверждение записи'}</div>
                        </div>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className={'wrapperChekout'}>
                <IonItem lines="none" color='light' style={{with: '100%', height: '54px',}}>
                    <IonLabel style={{color: 'rgba(167, 167, 171, 1)'}} position="floating">Номер телефона*</IonLabel>
                    <IonInput value={phone}></IonInput>
                </IonItem>
                <IonItem lines="none" color='light' style={{with: '100%', height: '54px', marginTop: '8px'}}>
                    <IonLabel style={{color: 'rgba(167, 167, 171, 1)'}} position="floating">Имя*</IonLabel>
                    <IonInput value={name}></IonInput>
                </IonItem>
                <IonItem lines="none" color='white' style={{with: '100%', marginTop: '16px', height: '64px'}}>
                    <IonLabel style={{color: 'rgba(167, 167, 171, 1)'}} position="stacked">+Добавить комментарий</IonLabel>
                    <IonInput style={{height: '100px'}} value={comment}> </IonInput>
                </IonItem>
                <IonItem lines="none" style={{with: '100%', marginTop: '20px', color: 'light'}}>
                    <div className={'checkboxText'}>Я принимаю условия пользовательского соглашения</div>
                    <IonCheckbox checked={checked} slot="start" color="dark"/>
                </IonItem>
                <IonButton size="large" expand="block" color="dark" style={{marginTop: '30px'}}>Подтвердить</IonButton>
            </div>
            <div className={'footerBtn'}>
                <IonButton className={'footerItemBtn footerItemBtnLeft'} size="large" expand="block">
                {/* <IonIcon slot="start" icon={}/> */}
                    Запись
                </IonButton>
                <IonButton className={'footerItemBtn footerItemBtnRight'} size="large" expand="block">
                {/* <IonIcon slot="start" icon={}/> */}
                    Личный кабинет
                </IonButton>
            </div>
        </div>
    )
}
