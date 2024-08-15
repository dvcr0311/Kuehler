// src/components/DataView.js
import React, { useEffect, useState } from 'react';
import { getSheetData } from '../api/googleSheets';

const DataView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetData = await getSheetData();
      setData(sheetData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Datos de los Sensores</h2>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataView;
