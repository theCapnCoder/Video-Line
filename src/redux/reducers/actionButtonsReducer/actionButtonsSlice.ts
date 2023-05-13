import { createSlice } from '@reduxjs/toolkit'

const initialState: Array<string> = [
  "бесплатно",
  "вход по ссылке",
  "без ограничений по времени",
  "звонки из браузера",
  "демонстрация экрана",
  "демонстрация экрана",
]

const actionButtonsSlice = createSlice({
  name: 'actionButtons',
  initialState,
  reducers: {}
})

export default actionButtonsSlice.reducer;