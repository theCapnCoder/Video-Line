import { createSlice } from '@reduxjs/toolkit';

type State = {
  title: string;
  text: string;
  info: string;
}

const initialState: State = {
  title: '',
  text: '',
  info: '',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {}
})

export default mainSlice.reducer;