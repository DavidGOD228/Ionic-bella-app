import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonToolbar
} from '@ionic/react';
import Search from '../../assets/icon/search.svg';
import './style.css';
import { specialtyMockList } from '../../mock/common';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/rootReducer';
import { getSpecialistsRequest } from '../../redux/specialists/actions';
import { chevronForward } from 'ionicons/icons';
import { SpecialistItem } from '../../components/SpecialistItem/SpecialistItem';

export const SelectSpecialist = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentSpecialty, setCurrentSpecialty] = useState('');
  const dispatch = useDispatch();
  const { specialists } = useSelector((store: IRootReducer) => store.specialistsList);

  useEffect(() => {
    dispatch(getSpecialistsRequest());
  }, []);

  return (
    <IonPage>
      <IonHeader style={{ height: 72 }} className={'flex-row flex-center'}>
        <IonToolbar>
          {!isShowSearch &&
                    <IonButtons style={{ marginLeft: 10, justifyContent: 'space-between', paddingRight: 20 }}>
                      <div className={'flex-row flex-center'}>
                        <IonBackButton color={'medium-contrast'} text={''}/>
                        <div style={{ color: 'white', paddingLeft: 20 }}>Выберите Сотрудника</div>
                      </div>
                      <IonIcon src={Search} onClick={() => setIsShowSearch(!isShowSearch)}/>
                    </IonButtons>}
          {isShowSearch &&
                    <IonSearchbar placeholder={'Введите название услуги'} color={'light'} value={searchText}
                      onIonChange={e => setSearchText(e.detail.value!)}
                      showCancelButton="never"/>
          }
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className={'city-container flex-row'}>
          {specialtyMockList && specialtyMockList.map((item) => <div className={`${currentSpecialty === item ? 'select-item-active' : ''} select-item`}
            onClick={() => setCurrentSpecialty(item)}>
            {item}
          </div>)}
        </div>
        <div className={'specialists-container'}>
          <div className={'specialist-default'}>
            <h3 style={{ margin: 0 }}> Любой специалист</h3>
            <IonIcon style={{ color: '#C1C1C4' }} src={chevronForward}
              onClick={() => setIsShowSearch(!isShowSearch)}/>
          </div>
          {specialists.map((specialist) => <div className={'specialist-default specialist-item'} key={specialist.id}>
            <SpecialistItem specialist={specialist}/>
          </div>)}
        </div>

      </IonContent>

    </IonPage>
  );
};
