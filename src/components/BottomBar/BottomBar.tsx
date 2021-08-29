import React from "react";
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route, useLocation} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import Pencil from '../../assets/icon/pencil.svg'
import User from '../../assets/icon/user_w.svg'
import './style.css'
import {Routers} from "../../routers/routers";
export const BottomBar = () => {
    const {pathname} = useLocation();
    const isActive = !pathname.includes('user')
    return (
        <IonTabs>
            <IonRouterOutlet>
              <Routers/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home" className={`flex-row flex-center ${isActive ? 'active-tab' : ''}`}>
                    <IonIcon src={Pencil} font-size="14px" style={{width: 14, marginRight: 10}}/>


                    <IonLabel style={{fontSize: 15}}>Запись</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2" className={'flex-row flex-center'}>
                    <IonIcon src={User} font-size="14px" style={{width: 14, marginRight: 10}}/>
                    <IonLabel style={{fontSize: 15}}>Личный кабинет</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}
