import { createSlice } from '@reduxjs/toolkit';

type State = {
  title: string;
  text: string;
  info: string;
}

const initialState: State = {
  title: 'Бесплатные видеозвонки для общения без границ',
  text: 'Для начала звонка отправьте собеседнику ссылку-приглашение. Общайтесь с коллегами, бизнес-партнерами и друзьями бесплатно и без ограничений по времени.',
  info: 'Для входа в VideoLineApp авторизуйтесь или зарегистрируйтесь в системе.',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {}
})

export default mainSlice.reducer;