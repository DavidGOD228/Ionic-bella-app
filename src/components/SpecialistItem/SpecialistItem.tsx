import React, {useState} from "react";
import {IonAvatar, IonIcon} from "@ionic/react";
import DefaultImage from "../../assets/image/defaultImage.png";
import {informationCircleOutline} from "ionicons/icons";
import {IAffiliates, ISpecialist} from "../../interfaces/interfaces";
import {useHistory} from "react-router";
import './style.css'
import {getFormattedDate} from "../../helpers/functions";
import ReactStars from "react-rating-stars-component";

interface ISpecialistProps {
    specialist: ISpecialist
}

export const SpecialistItem = ({specialist}: ISpecialistProps) => {
    const [currentTime, setCurrentTime] = useState(new Date())

    const handleSelectTime = (time: Date) => {
        if (currentTime === time) {
            setCurrentTime(new Date())
        }
        else {
            setCurrentTime(time)
        }
    }
    return (
        <div className={'width100'}>
            <div className={'flex-row width100'}>
                <IonAvatar>
                    <img src={specialist?.image ? specialist.image : DefaultImage} alt={'user-avatar'}/>
                </IonAvatar>
                <div style={{marginLeft: 16, justifyContent: 'space-between', width: '100%'}} className={'flex-row'}>
                    <div>
                        <div>{specialist.name}</div>
                        <div className={'flex-row'}>
                        {specialist.speciality.map((item) => <div style={{fontSize: '13px'}}>&nbsp;{item}</div>)}
                        </div>
                        <ReactStars
                            count={5}
                            value={2}
                            size={24}
                            edit={false}
                            emptyIcon={<i className="far fa-star"/>}
                            halfIcon={<i className="fa fa-star-half-alt"/>}
                            fullIcon={<i className="fa fa-star"/>}
                            activeColor="#ffd700"
                        />
                    </div>

                    <IonIcon src={informationCircleOutline} style={{color: '#DADADA', width: 22, height: 22}}/>
                </div>

            </div>
            <div className={'specialist-available'}>
                Ближайшее время на {getFormattedDate(specialist.availableTime[0], 'DD MMMM')}:
            </div>
            <div className={'flex-row'} style={{flexWrap: 'wrap'}}>
            {specialist.availableTime.map((time) =>
                <div className={`specialist-time-container ${currentTime === time ? 'specialist-time-active' : ''} `} onClick={() => handleSelectTime(time)}>
                    {getFormattedDate(time, 'HH:mm')}
                </div>
            )}
            </div>
        </div>
    )
}
