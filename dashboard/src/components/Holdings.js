
import React, {useSelectedLayoutSegment, useEffect, useState } from 'react';

import axios from 'axios';
 import "../index.css";
// import { holdings } from "../data/data";


const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
       
      setAllHoldings(res.data);
    });
  }, []);

    

  return (
    <>
    <h3 className='title'>Holdings({allHoldings.length})</h3>
    <div className='order-table'>
      <table>
        <tr>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. cost</th>
          <th>LTP</th>
          <th>Cur. val</th>
          <th>P&L</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>
        {allHoldings.map((stock, index) => {
  const avg = stock.avg ?? 0;
  const price = stock.price ?? 0;
  const qty = stock.qty ?? 0;

  const curValue = price * qty;
  const isProfit = curValue - avg * qty >= 0.0;
  const profClass = isProfit ? "profit" : "loss";
  const dayClass = stock.isLoss ? "loss" : "profit";

  return (
    <tr key={index}>
      <td>{stock.name || "N/A"}</td>
      <td>{qty}</td>
      <td>{avg.toFixed(2)}</td>
      <td>{price.toFixed(2)}</td>
      <td>{curValue.toFixed(2)}</td>
      <td className={profClass}>
        {(curValue - avg * qty).toFixed(2)}
      </td>
      <td className={profClass}>{stock.net ?? "N/A"}</td>
      <td className={dayClass}>{stock.day ?? "N/A"}</td>
    </tr>
  );
})}

      </table>
    </div>
    <div className='row'>
      <div className='col'>
        <h5>
          29,875.<span>55</span>{" "}
        </h5>
        <p>Total investment</p>
      </div>
      <div className='col'>
        <h5>
          31,875.<span>95</span>{" "}
        </h5>
        <p>Current value</p>
      </div>
      <div className='col'>
        <h5>
          1,553.40.(+5.20%)
        </h5>
        <p>P&L</p>
      </div>
    </div>
    </>
  );
};

export default Holdings;