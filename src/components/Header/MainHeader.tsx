import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonToolbar } from '@ionic/react';
import Search from '../../assets/icon/search.svg';


interface Iprops{
  title: string;
  onChange: (text: string) => void;
  searchText: string;
  isShowSearch: boolean;
  setIsShowSearch: (isShow: boolean) => void;
  serviceHeader: boolean;

}
export const MainHeader = ({ title, onChange, isShowSearch, searchText, setIsShowSearch, serviceHeader }: Iprops) => {
  return (
    <IonHeader style={{ height: 72 }} className={'flex-row flex-center'}>
      <IonToolbar>
        {!isShowSearch &&
                <IonButtons style={{ marginLeft: 10, justifyContent: 'space-between', paddingRight: 20 }}>
                  <div className={'flex-row flex-center'}>
                    <IonBackButton color={'medium-contrast'} text={''}/>
                    <div style={{ color: 'white', paddingLeft: 20 }}>{title}</div>
                  </div>
                  <IonIcon src={Search} onClick={() => setIsShowSearch(!isShowSearch)}/>
                </IonButtons>}
        {isShowSearch &&
                <IonSearchbar placeholder={'Введите название услуги'} color={'light'} value={searchText}
                  onIonChange={e => onChange(e.detail.value!)}
                  showCancelButton="never"/>
        }
      </IonToolbar>
    </IonHeader>
  );
};
