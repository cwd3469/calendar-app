import { combineReducers } from 'redux';
import { History } from 'history';
import userReducer from './user';
import orderReducer from './order';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const rootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    order: orderReducer,
    router: connectRouter(history),
  });
