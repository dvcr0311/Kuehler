// src/api/googleSheets.js
import axios from 'axios';

const SHEET_ID = 'YOUR_SHEET_ID';
const API_KEY = 'YOUR_API_KEY';

export const getSheetData = async () => {
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`
  );
  return response.data.values;
};
