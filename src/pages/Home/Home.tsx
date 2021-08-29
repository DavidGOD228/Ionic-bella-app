import React, {useEffect, useState} from 'react'
import './style.css'
import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonToggle, IonToolbar} from "@ionic/react";
import Logo from "../../assets/icon/logo.svg";
import Car from "../../assets/icon/car.svg";
import {chevronDown, chevronForward} from 'ionicons/icons'
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../redux/rootReducer";
import {getAffiliatesRequest} from "../../redux/affiliates/actions";
import {getFormattedDate} from "../../helpers/functions";
import {AffiliateItem} from "../../components/AffiliateItem/AffiliateItem";

export const Home = () => {
    const [isList, setIsList] = useState(true)
    const [showAboutInfo, setShowAboutInfo] = useState(false)
    const [currentCity, setCurrentCity] = useState('')
    const dispatch = useDispatch();
    const {affiliates} = useSelector((store: IRootReducer) => store.affiliatesList)

    const cityList = [
        'Lutsk',
        'Lutsk2',
        'Lutsk3',
        'Lutsk4',
        'Lutsk5',
        'Lutsk6',
        'Lutsk7',
        'Lutsk8',
        'Lutsk9',
        'Las Vegas'
    ]

    useEffect(() => {
        setCurrentCity(cityList[0])
    }, [])

    useEffect(() => {
        dispatch(getAffiliatesRequest())
    }, [])

    return (
        <IonPage>
            <IonHeader style={{maxHeight: 180}}>
                <IonToolbar>
                    <IonIcon src={Logo} font-size="80px"
                             style={{width: 80, height: 80, marginTop: 40, marginLeft: 34}}/>
                    <IonButton slot="end" className={'header-button'} onClick={() => setShowAboutInfo(!showAboutInfo)}>О компании <IonIcon src={chevronDown} style={{
                        marginLeft: 5,
                        marginTop: 5
                    }}/></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen onClick={() => setShowAboutInfo(false)}>
                {showAboutInfo && <div className={'header-about-info'}>
                    Bella Janne - это это сеть салонов красоты бизнес-класса с более чем 18-летней историей.
                    Отличный сервис и высокое качество услуг, королевское ощущение роскоши и палитры модных новинок от мастеров парикмахерского искусства.
                </div>}
                <div className={'toggle-container'}>
                    <h3 style={{marginTop: 0}}>Выберите филиал</h3>
                    <div className={'flex-row flex-a-center'}>
                        <p className={`${isList ? 'active-toggle-title' : ''} toggle-title`}
                           style={{marginRight: 18}}>Список</p>
                        <IonToggle onIonChange={() => {
                            setIsList(!isList)
                        }}/>
                        <p className={`${isList ? '' : 'active-toggle-title'} toggle-title`}
                           style={{marginLeft: 18}}>Карта</p>
                    </div>
                </div>

                <div className={'city-container flex-row'}>
                    {cityList && cityList.map((item) =>
                        <div className={`${currentCity === item ? 'select-item-active' : ''} select-item`}
                             onClick={() => setCurrentCity(item)}>
                            {item}
                        </div>
                    )}
                </div>
                {isList && <div className={'affiliates-container'}>
                    {affiliates && affiliates.map(affiliate =>
                        <AffiliateItem affiliate={affiliate}/>
                    )}
                </div>}
            </IonContent>

        </IonPage>
    )
}
