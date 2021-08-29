import React, {useState} from "react";
import {IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar} from "@ionic/react";
import Logo from "../../assets/icon/logo.svg";
import Users from "../../assets/icon/users.svg";
import Checkbox from "../../assets/icon/bgCheckbox.svg";
import Calendar from "../../assets/icon/bgCalendar.svg";
import {chevronDown, chevronForward} from "ionicons/icons";
import {IAffiliates} from "../../interfaces/interfaces";
import './style.css'
import {useHistory, useLocation} from "react-router";

interface IVisitDetailsProps {
    affiliate: IAffiliates
}

export const VisitDetails = () => {
    const [visit, setVisit] = useState({
        specialist: '',
        services: [],
        date: ''
    })
    const location = useLocation();
    const history = useHistory()
    const {affiliate} = location.state as IVisitDetailsProps


    const handleBack = () => {
        history.goBack()
    }

    const handleSpecialist = () => {
        history.push('/selectSpecialist')
    }
    return (
        <IonPage>
            <IonHeader style={{height: 140}}>
                <IonToolbar>
                    <IonButtons slot={'start'} style={{marginLeft: 10}} >
                        <IonBackButton color={'medium-contrast'} text={''}/>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>

                    <IonIcon src={Logo} slot="start" font-size="80px"
                             style={{minWidth: 80, height: 80, marginTop: 20, marginLeft: 24}}/>
                    <IonButton slot="start" className={'header-address'}>
                        <div>
                            Bella Janne
                            <div className={'flex-row'} style={{alignItems: 'flex-end'}}>
                            <span style={{color: 'grey', marginTop: 10, fontSize: 13}}>
                                {affiliate.address}
                            </span>
                                <IonIcon src={chevronDown} style={{color: 'grey', marginLeft: 5}}/>
                            </div>
                        </div>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={'visit-detail-container'}>
                    <h3>Детали визита</h3>
                    <label className={'visit-detail-label'}>Специалист</label>
                    <div className={'visit-detail-item-wrapper flex-row flex-a-center'}
                         onClick={handleSpecialist}
                         style={{justifyContent: 'space-between'}}>
                        <div className={'flex-row flex-a-center'}>
                            <IonIcon src={Users} style={{width: 58, height: 58}}/>
                            <div style={{
                                marginLeft: 24,
                                color: visit.specialist ? 'black' : '#A7A7AB'
                            }}>{`${visit.specialist ? visit.specialist : 'Выберите специалиста'}`}</div>
                        </div>
                        <IonIcon src={chevronForward} style={{color: 'grey', marginLeft: 5}}/>
                    </div>

                    <br/>
                    <label className={'visit-detail-label'}>Услуга</label>
                    <div className={'visit-detail-item-wrapper flex-row flex-a-center'}
                         style={{justifyContent: 'space-between'}}>
                        <div className={'flex-row flex-a-center'}>
                            <IonIcon src={Checkbox} style={{width: 58, height: 58}}/>
                            <div style={{
                                marginLeft: 24,
                                color: visit.services.length ? 'black' : '#A7A7AB'
                            }}>
                                {visit.services.length > 0 ? visit.services.map((service) => service) : 'Выберите услугу'}
                            </div>
                        </div>
                        <IonIcon src={chevronForward} style={{color: 'grey', marginLeft: 5}}/>
                    </div>

                    <br/>
                    <label className={'visit-detail-label'}>Дата и время</label>
                    <div className={'visit-detail-item-wrapper flex-row flex-a-center'}
                         style={{justifyContent: 'space-between'}}>
                        <div className={'flex-row flex-a-center'}>
                            <IonIcon src={Calendar} style={{width: 58, height: 58}}/>
                            <div style={{
                                marginLeft: 24,
                                color: visit.date ? 'black' : '#A7A7AB'
                            }}>
                                {visit.date ? visit.date : 'Выберите дату и время'}
                            </div>
                        </div>
                        <IonIcon src={chevronForward} style={{color: 'grey', marginLeft: 5}}/>
                    </div>
                    <div className={'change-affiliate-button'} onClick={handleBack}>
                        Сменить филиал
                    </div>
                </div>
            </IonContent>

        </IonPage>
    )
}
