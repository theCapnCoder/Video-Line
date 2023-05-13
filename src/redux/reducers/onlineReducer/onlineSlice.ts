import { createSlice } from '@reduxjs/toolkit'

type State = {
  title: string,
  text: string 
}

const initialState: State = {
  title: 'Проводите онлайн-трансляции',
  text: 'Помимо звонков, вы можете использовать VideoLineApp для проведения онлайн-трансляций. Количество зрителей не ограничено.'
}

const onlineSlice = createSlice({
  name: 'online',
  initialState,
  reducers: {}
})

export default onlineSlice.reducer;