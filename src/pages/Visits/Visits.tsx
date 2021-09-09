import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitsRequest } from '../../redux/user/actions';
import { IRootReducer } from '../../redux/rootReducer';
import { IVisits } from '../../interfaces/interfaces';
import { VisitsItem } from '../../components/VisitsItem/VisitsItem';
export const Visits = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: IRootReducer) => state.user);
  const [visits, setVisits] = useState<IVisits[]>([]);
  useEffect(() => {
    dispatch(getVisitsRequest());
  }, []);

  useEffect(() => {
    setVisits(store.visits);
  }, [store.visits]);


  return (
    <div>
      <div className="header">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      {visits.map((visit, i) => <VisitsItem data={visit}/>)}
    </div>
  );
};
