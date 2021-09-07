import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import Logo from '../../assets/icon/logo.svg';
import Users from '../../assets/icon/users.svg';
import Checkbox from '../../assets/icon/bgCheckbox.svg';
import Calendar from '../../assets/icon/bgCalendar.svg';
import { chevronDown, chevronForward, closeOutline } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { IAffiliates } from '../../interfaces/interfaces';
import './style.css';
import { useHistory, useLocation } from 'react-router';
import { IRootReducer } from '../../redux/rootReducer';
import { deleteService, deleteDate } from '../../redux/services/actions';
import { deleteSpecialist } from '../../redux/specialists/actions';
import moment from 'moment';

interface IVisitDetailsProps {
  affiliate: IAffiliates;
}

export const VisitDetails = () => {
  const store = useSelector((state: IRootReducer) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { affiliate } = location.state as IVisitDetailsProps;


  const handleBack = () => {
    history.goBack();
  };

  const handleSpecialist = () => {
    history.push('/selectSpecialist');
  };
  const handleServices = () => {
    history.push('/services');
  };
  const handleDate = () => {
    history.push('/selectDate');
  };
  const handleDeleteService = () => {
    if (store.service.savedService.length) {
      dispatch(deleteService());
    } else {
      handleServices();
    }

  };
  const handleDeleteDate = () => {
    if (store.service.savedTime) {
      dispatch(deleteDate());
    } else {
      handleDate();
    }

  };
  const handleDeleteSpecialist = () => {
    if (store.specialistsList.savedSpecialist) {
      dispatch(deleteSpecialist());
    } else {
      handleSpecialist();
    }

  };
  return (
    <IonPage>
      <IonHeader style={{ height: 140 }}>
        <IonToolbar>
          <IonButtons slot={'start'} style={{ marginLeft: 10 }} >
            <IonBackButton color={'medium-contrast'} text={''}/>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>

          <IonIcon src={Logo} slot="start" font-size="80px"
            style={{ minWidth: 80, height: 80, marginTop: 20, marginLeft: 24 }}/>
          <IonButton slot="start" className={'header-address'}>
            <div>
                            Bella Janne
              <div className={'flex-row'} style={{ alignItems: 'flex-end' }}>
                <span style={{ color: 'grey', marginTop: 10, fontSize: 13 }}>
                  {affiliate.address}
                </span>
                <IonIcon src={chevronDown} style={{ color: 'grey', marginLeft: 5 }}/>
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
            style={{ justifyContent: 'space-between' }}>
            <div className={'flex-row flex-a-center'}   onClick={handleSpecialist}>
              <IonIcon src={Users} style={{ width: 58, height: 58 }}/>
              <div style={{
                marginLeft: 24,
                color: store.specialistsList.savedSpecialist ? 'black' : '#A7A7AB'
              }}>{`${store.specialistsList.savedSpecialist ? store.specialistsList.savedSpecialist.name : 'Выберите специалиста'}`}</div>
            </div>
            <IonIcon src={store.specialistsList.savedSpecialist  ? closeOutline : chevronForward} style={{ color: 'grey', marginRight: -10, padding: 10 }} onClick={handleDeleteSpecialist}/>
          </div>

          <br/>
          <label className={'visit-detail-label'}>Услуга</label>
          <br/>
          <div className={'visit-detail-item-wrapper flex-row flex-a-center'}
            style={{ justifyContent: 'space-between' }}>
            <div className={'flex-row flex-a-center'} onClick={handleServices}>
              <IonIcon src={Checkbox} style={{ width: 58, minWidth: 58, height: 58 }}/>
              <div style={{
                marginLeft: 24,
                color: store.service.savedService.length ? 'black' : '#A7A7AB',
                height: 58,
                overflow: 'hidden'
              }}>
                {store.service.savedService.length > 0 ? store.service.savedService.map((service, index) => service.title + (index !== store.service.savedService.length - 1 ? ', ' : '')) : 'Выберите услугу'}
              </div>
            </div>
            <IonIcon src={store.service.savedService.length ? closeOutline : chevronForward} style={{ color: 'grey', marginRight: -10, padding: 10 }} onClick={handleDeleteService}/>
          </div>

          <br/>
          <label className={'visit-detail-label'}>Дата и время</label>
          <div className={'visit-detail-item-wrapper flex-row flex-a-center'}
            style={{ justifyContent: 'space-between' }}>
            <div className={'flex-row flex-a-center'} onClick={handleDate}>
              <IonIcon src={Calendar} style={{ width: 58, height: 58 }}/>
              <div style={{
                marginLeft: 24,
                color: store.service.savedTime ? 'black' : '#A7A7AB'
              }}>
                {store.service.savedTime ? moment(store.service.savedTime).format('DD MMMM YYYY [в] HH:mm') : 'Выберите дату и время'}
              </div>
            </div>
            <IonIcon src={store.service.savedTime ? closeOutline : chevronForward} style={{ color: 'grey', marginRight: -10, padding: 10 }} onClick={handleDeleteDate}/>

          </div>
          <div className={'change-affiliate-button'} onClick={handleBack}>
                        Сменить филиал
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};
