import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://683c183228a0b0f2fdc62700.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      console.log('fetchContacts');
      const response = await axios.get('/contacts');
      return response.data; //це є payload, який буде передано в редюсер
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
