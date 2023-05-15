import { createSlice } from '@reduxjs/toolkit'
import { Button } from '../../../Blocks/Main/ActionButtons/ActionButtons';



const initialState: Array<Button> = [
  {
    text: "бесплатно",
  },
  {
    text: "вход по ссылке",
  },
  {
    text: "без ограничений по времени",
  },
  {
    text: "звонки из браузера",
  },
  {
    text: "демонстрация экрана",
  },
  {
    text: "безопасно",
  },
]

const actionButtonsSlice = createSlice({
  name: 'actionButtons',
  initialState,
  reducers: {}
})

export default actionButtonsSlice.reducer;