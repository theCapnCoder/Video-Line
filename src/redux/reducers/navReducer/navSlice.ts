import { createSlice } from '@reduxjs/toolkit'

const initialState: Array<string> = ['Блог', 'Безопасность', 'Помощь']

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {}
})

export default navSlice.reducer;