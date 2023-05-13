import { combineReducers } from '@reduxjs/toolkit'
import nav from '../reducers/navReducer/navSlice';
import main from '../reducers/mainReducer/mainSlice';
import actionButtons from '../reducers/actionButtonsReducer/actionButtonsSlice'
import cards from '../reducers/cardsReducer/cardsSlice'
import online from '../reducers/onlineReducer/onlineSlice'

export const combineReducer = combineReducers({
  nav,
  main,
  actionButtons,
  cards,
  online
});