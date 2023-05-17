import { combineReducers } from '@reduxjs/toolkit'
import nav from '../reducers/navReducer/navSlice';
import main from '../reducers/mainReducer/mainSlice';
import actionButtons from '../reducers/actionButtonsReducer/actionButtonsSlice'
import cards from '../reducers/cardsReducer/cardsSlice'
import action from '../reducers/actionReducer/actionSlice'

export const combineReducer = combineReducers({
  nav,
  main,
  actionButtons,
  cards,
  action
});