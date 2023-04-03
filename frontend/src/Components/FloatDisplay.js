import React, {useState, useEffect} from 'react';
import './FloatDisplay.css';

const Box = () => {

  const[data, setData] = useState({});

  //Load the data independently (side effect)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/esp32_dropplet/api/Measures/?format=json')
      .then((res) => res.json())
      .then((data) => setData(data[data.length - 1]));
  },[]);

  //renderable view
  return (
    <div className="box">
      <p>Latests Measures</p>
      <p className="float">{data.c_temp || 'Loading...'}</p>
      <p className="float">{data.f_temp || 'Loading...'}</p>
      <p className="float">{data.hum || 'Loading...'}</p>
      <p className="float">{data.check_time || 'Loading...'}</p>
    </div>
  );
};

export default Box;
