import { createSlice } from '@reduxjs/toolkit'

type State = {
  text: string,
  link: string,
}

const initialState: Array<State> = [
  {
    text: 'Блог',
    link: '#'
  },
  {
    text: 'Безопасность',
    link: '#'
  },
  {
    text: 'Помощь',
    link: '#'
  },
]

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {}
})

export default navSlice.reducer;