import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitsRequest } from '../../redux/user/actions';
import { IRootReducer } from '../../redux/rootReducer';
export const Visits = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: IRootReducer) => state.user);
  useEffect(() => {
    dispatch(getVisitsRequest());
  }, []);

  // const store =
  return (
    <div>
      <div className="header">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};
