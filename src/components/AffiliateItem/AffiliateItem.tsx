import { getFormattedDate } from '../../helpers/functions';
import { IonIcon } from '@ionic/react';
import Car from '../../assets/icon/car.svg';
import { chevronForward } from 'ionicons/icons';
import React from 'react';
import { IAffiliates } from '../../interfaces/interfaces';
import { useHistory } from 'react-router';

interface IAffiliatesProps {
  affiliate: IAffiliates;
}
export const AffiliateItem = ({ affiliate }: IAffiliatesProps) => {
  const history = useHistory();

  const handleOpen = () => {
    history.push('/visitDetail', {
      affiliate
    });
  };
  return (
    <div className={'affiliate flex-a-center'} style={{ justifyContent: 'flex-between' }} onClick={handleOpen}>
      <div>
        <h5 style={{ margin: 0 }}>{affiliate.name}</h5>
        <p className={'text-margin'}>{affiliate.address}</p>
        <p className={'text-margin'}>{affiliate.phoneNumber}</p>
        <div className={'time-text text-margin'}>Ближайшее доступное
                    время: {getFormattedDate(affiliate.nearestAvailableTime)} в {getFormattedDate(affiliate.nearestAvailableTime, 'HH:mm')}</div>
        <div className={'time-text text-margin'}>Ближайшее время
                    прибытия:
        <IonIcon slot={'end'} src={Car} color={'medium'} style={{
          marginLeft: 5,
          marginRight: 5,
          height: 9,
        }}/>
        {getFormattedDate(affiliate.closestTime, 'HH:mm')}</div>

      </div>
      <IonIcon slot={'end'} src={chevronForward} color={'medium'} style={{
        marginLeft: 5,
        marginTop: 5,
        color: 'red'
      }}/>
    </div>
  );
};
