import React  from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { IComment, ISpecialist } from '../../interfaces/interfaces';
import {  IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import ReactStars from 'react-rating-stars-component';
import moment from 'moment';
import { saveSpecialists } from '../../redux/specialists/actions';
import DefaultImage from '../../assets/image/defaultImage.png';

interface ISpecialistProps {
  specialist: ISpecialist;
}

interface ICommentProps{
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {


  return (
    <div className={'comment-wrapper'}>
      <div className="comment-rating-wrapper">
        <ReactStars
          count={5}
          value={2}
          size={10}
          edit={false}
          emptyIcon={<i className="far fa-star"/>}
          halfIcon={<i className="fa fa-star-half-alt"/>}
          fullIcon={<i className="fa fa-star"/>}
          activeColor="#ffd700"
        />
        <span className={'comment-addedBy'}>{comment.addedBy + ', ' + moment(comment.createdAt).format('DD.MM.YYYY')}</span>
      </div>
      <span style={{ fontSize: 13 }}>{comment.text}</span>
    </div>
  );
};

export const SpecialistDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { specialist } = location.state as ISpecialistProps;
  console.log('location.state', specialist);
  const handleClick = () => {
    history.go(-2);
    dispatch(saveSpecialists(specialist));
  };
  return (
    <div className={'wrapper-detail'}>
      <IonHeader style={{ height: 72 }} className={'flex-row flex-center'}>
        <IonToolbar>
          <IonButtons style={{ marginLeft: 10, justifyContent: 'space-between', paddingRight: 20 }}>
            <div className={'flex-row flex-center'}>
              <IonBackButton color={'medium-contrast'} text={''}/>
              <div style={{ color: 'white', paddingLeft: 20 }}>{'Сотрудник'}</div>
            </div>

          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/*<IonAvatar>*/}
      <img src={DefaultImage} alt={'user-avatar'} style={{ width: 100, height: 100, marginTop: 50 }}/>
      {/*</IonAvatar>*/}

      <span>{specialist.name}</span>
      <div className="rating">
        <ReactStars
          count={5}
          value={2}
          size={20}
          edit={false}
          emptyIcon={<i className="far fa-star"/>}
          halfIcon={<i className="fa fa-star-half-alt"/>}
          fullIcon={<i className="fa fa-star"/>}
          activeColor="#ffd700"
        />
        <span style={{ marginLeft: 10 }}>{specialist.rating.toFixed(1)}</span>
      </div>

      {specialist.comments.map((comment) => <div key={comment.id} style={{ width: '100%' }}>
        <Comment comment={comment}/>
      </div>)}

      <div className="click-button" onClick={handleClick}>
        <span style={{ fontWeight: 500, fontSize: 17 }}>Выбрать специалиста</span>
      </div>
    </div>
  );
};
