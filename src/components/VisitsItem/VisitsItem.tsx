import React from 'react';
import { IVisits } from '../../interfaces/interfaces';
import './styles.css';
import ShareIco from '../../assets/icon/share.svg';
import NextArrowIco from '../../assets/icon/next.svg';
import CopyIco from '../../assets/icon/copy.svg';
import Logo from '../../assets/icon/logo.svg';


interface IProps {
  data: IVisits;
}
export const VisitsItem = ({ data }: IProps) => {
  return (
    <div>
      <div className="visit-header">
        <img src={Logo} alt=""/>
        <div className="header-company-detail">
          <span className={'header-company-detail-name'}>{data.salon.name}</span>
          <span className={'header-company-detail-address'}>{data.salon.address}</span>
        </div>
        <img src={CopyIco} alt="" className={'visit-header-ico'}/>
        <img src={ShareIco} alt=""  className={'visit-header-ico'}/>
        <img src={NextArrowIco} alt=""  className={'visit-header-ico'}/>
      </div>
      <div className="visit-master-wrapper">
        <div className="visit-master">
          <img src={data.specialists.image} alt=""/>
          <span>{data.specialists.name}</span>
        </div>
        <div className="visit-master-time">
          <img src="" alt=""/>
          <span>{data.time}</span>
        </div>
      </div>
    </div>
  );
};
