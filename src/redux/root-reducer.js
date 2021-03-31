import { combineReducers } from 'redux'; //to combine all reducers in the root
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //default storage now
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root', //starting point
  storage,
  whitelist: ['cart'], //reducers to store
};

const rootReducer = combineReducers({
  user: userReducer, //key is for the key in the state object
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
