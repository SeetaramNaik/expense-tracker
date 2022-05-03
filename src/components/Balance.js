import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts= transaction.map(transaction=>transaction.amount);
  const total=amounts.reduce((acc,item)=> (acc+=item),0).toFixed(2);

  return <div>
        <h3>Your Balance</h3>
        <h1 id="balance">₹{total}</h1>
  </div>;
};


