import React, {useState, useEffect} from 'react'
import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonToggle, IonToolbar, IonInfiniteScroll} from "@ionic/react";
import {MainHeader} from '../../components/Header/MainHeader'
import {IRootReducer} from '../../redux/rootReducer'
import {getServicesRequest, saveService} from '../../redux/services/actions'
import './styles.css'
import {IServiceCategory, IService} from '../../interfaces/interfaces'
import {useSelector, useDispatch} from 'react-redux'
import {checkmarkOutline, informationCircleOutline} from "ionicons/icons";
import {sumInObject} from '../../helpers/functions'
import Delete from '../../assets/icon/delete.svg'
import {services} from "../../mock/services";
import {useHistory} from "react-router";
export const SelectServices = (): JSX.Element => {
    const store = useSelector((state: IRootReducer) => state.service)
    const [headerSearchText, setHeaderSearchText] = useState('')
    const [isShowSearch, setShowSearchText] = useState(false)
    const [categorySelect, setCategorySelect] = useState(0)
    const [servicesList, setServicesList] = useState<IService[]>(store.services)
    const [selectedService, setSelectedService] = useState<IService[]>(store.savedService)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getServicesRequest())
        setServicesList(store.services)
    }, [store.services])
    const searchServices = (text: string) => {
        setHeaderSearchText(text)

        console.log('text.length', store.services[0].title.includes(text))
        if(text.length){
            const filterServices = store.services.filter(service => service.title.toLowerCase().includes(text.toLowerCase()))
            setServicesList(filterServices)
        }else{
            setShowSearchText(false)
            setServicesList(store.services)
        }
        // console.log('filterServices', filterServices)

    }
    const onSelectCategory = (item: IServiceCategory, index) => {
        setCategorySelect(index)
        const filterServices = store.services.filter(service => service.category === item.category)
        setServicesList(filterServices)
    }
    const deleteService = (item: IService) => {
        const newArray = selectedService.filter(e => e.id !== item.id)
        setSelectedService(newArray)
    }
    const onSelectService = (item: IService) => {
        const findIndex = selectedService.findIndex((el) => el.id === item.id)
        if(findIndex == -1){
            setSelectedService([...selectedService, item])
        }else{
            deleteService(item)
        }

    }
    const onSaveServices = () => {
        history.goBack()
        dispatch(saveService(selectedService))
    }
    return(
        <IonPage style={{justifyContent: 'flex-start'}} className={'main-component'}>
            <MainHeader title={'Выберите  Услугу'} onChange={(text) => searchServices(text)} searchText={headerSearchText} isShowSearch={isShowSearch} setIsShowSearch={(isShow) => setShowSearchText(isShow)}/>
            {/*<IonInfiniteScroll>*/}
            <div className="scroll-wrapper" >
                {!headerSearchText.length && (
                    <IonContent className="left-content" style={{flex:1, }}>
                        {store.servicesCategory.map((service, index) => (
                            <div className={'component-category'} key={service.id} onClick={() => onSelectCategory(service, index)}>
                                <div className="left-side-image-wrapper">
                                    <img src={service.image} alt="" className={index !== categorySelect ? 'blackImage': ''} style={{width: 93, height: 93, alignSelf: 'center', objectFit: 'cover'}}/>
                                    <div className="">
                                        <span></span>
                                    </div>
                                </div>
                                <span style={{color: '#000', textAlign: 'center', display: 'block', fontWeight: 500}}>{service.name}</span>
                            </div>
                        ))}
                    </IonContent>
                )}
               <IonContent className="service-container" style={{flex:2}}>
                   {servicesList.map((service, index) => (
                       <div className="service-item" key={service.id} onClick={() => onSelectService(service, )}>
                           <div className="">
                               <img src={service.image} alt="" style={{width: 64, height: 64, marginRight: 12, objectFit: 'cover'}}/>
                           </div>
                           <div className="">
                               <span style={{}}>{service.title}</span>
                               <div className="service-item-bottom">
                                   <span>{service.price} грн</span>
                                   <span>{service.duration} хв</span>
                               </div>
                           </div>
                           <div className="select-button" style={{backgroundColor:  selectedService.filter(el => el.id === service.id).length ? '#000' : '#E3E3E6'}}>
                               <IonIcon src={checkmarkOutline} style={{color: selectedService.filter(el => el.id === service.id).length ? '#fff': '#E3E3E6', width: 22, height: 22}}/>
                           </div>

                       </div>
                   ))}
               </IonContent>
            </div>
            {selectedService.length && (
                <div className="selected-services-modal">
                    <span className="modal-title">Выбранные услуги: {selectedService.length} <span style={{color: '#ccc'}}>/ {sumInObject(selectedService, 'price')} грн</span></span>

                    <div className="selected-services-modal-wrapper">
                        {selectedService.map((service) => (
                            <div key={service.id} className={'selected-services-modal-item'}>
                                <div className="" style={{display: 'flex'}}>
                                    <img src={service.image} alt="" style={{width: 36, height: 36, marginRight: 10, objectFit: 'cover'}}/>
                                    <div className="">
                                        <span style={{fontSize: 12}}>{service.title}</span>
                                        <div className="selected-services-modal-item-bottom">
                                            <span style={{marginRight: 20}}>{service.price} грн</span>
                                            <span>{service.duration} хв</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="" onClick={() => deleteService(service)}>
                                    <img src={Delete} alt="" style={{width: 15, height: 15}}/>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="selected-services-modal-button" onClick={() => onSaveServices()}>
                        Далее
                    </div>

                </div>
            )}

        </IonPage>
    )
}
