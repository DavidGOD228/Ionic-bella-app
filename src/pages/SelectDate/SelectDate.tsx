import React, {useState} from 'react'
import './styles.css'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {useSelector, useDispatch} from 'react-redux'

import moment from "moment";
import {saveDate} from '../../redux/services/actions'
import {MainHeader} from "../../components/Header/MainHeader";
import {IRootReducer} from "../../redux/rootReducer";
import {useHistory} from "react-router";
import {IonBackButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonToolbar} from "@ionic/react";
import Search from "../../assets/icon/search.svg";



export const SelectDate = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [isShowModal, setShowModal] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState(moment().format())

    const dispatch = useDispatch()
    const history = useHistory()
    const store = useSelector((store: IRootReducer) => store.service)
    const modifiers = {
    };
    const months = Array.apply(0, Array(4)).map(function(_,i){return moment().month(moment().month() + i).format('MMMM')})
    const modifiersStyles = {
        selected: {
            backgroundColor: '#000',
            borderRadius: 0,
            color: '#fff'
        }
    }
    const onSelectTime = (time) => {
        const hour = moment(time, 'HH:mm').format('HH')
        const minute = moment(time, 'HH:mm').format('mm')
        const date =  moment(selectedDate).set({'hour': Number(hour), minute: Number(minute)}).format('')
        history.push('/chekout')
        dispatch(saveDate(date))
    }

    return (
        <div className={"component"} onClick={() => setShowModal(false)}>
            <IonHeader style={{height: 72}} className={'flex-row flex-center'}>
                <IonToolbar>
                    <IonButtons style={{marginLeft: 10, justifyContent: 'space-between', paddingRight: 20}}>
                        <div className={'flex-row flex-center'}>
≈                            <div style={{color: 'white', paddingLeft: 20}}>{'Выберите Дату'}</div>
                        </div>
                        <span onClick={(e) => {
                            setShowModal(true)
                            e.stopPropagation()
                        }} style={{color: '#fff'}}>{moment(selectedMonth).format('MMM').toUpperCase().substring(0,3)}</span>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            {isShowModal && (
                <div className="month-modal">
                    {months.map((month, i) => (
                        <span key={month} onClick={() => setSelectedMonth(moment().add(i, 'month').format())} style={{display: 'block', padding: 15, backgroundColor: moment(month, 'MMMM').format('MMM') ===  moment(selectedMonth).format('MMM')? '#F5F5F7': '#fff'}}>{month}</span>
                    ))}
                </div>
            )}
            <div className="wrapper">
                <DayPicker captionElement={({date, localeUtils}) => (
                    <div></div>
                )} selectedDays={[selectedDate]} month={new Date(selectedMonth)} onDayClick={(day) => setSelectedDate(day)} initialMonth={undefined} canChangeMonth={false} disabledDays={[{daysOfWeek: [6,0]}]} firstDayOfWeek={ 1 } modifiers={modifiers} modifiersStyles={modifiersStyles}/>
            </div>
<div className="dates-container-wrapper">

    <div className="dates-container">
        {store.dates.map((el) => (
            <div key={el.title}>
                <span style={{marginLeft: 10, color: '#A7A7AB'}}>{el.title}</span>
                <div className="dates-wrapper">
                    {el.dates.map((date) => (
                        <div key={date} onClick={() => onSelectTime(date)} className={'date-item'}>{date}</div>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>


        </div>
    )
}
