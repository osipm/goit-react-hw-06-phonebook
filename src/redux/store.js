import phoneReduser from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { phone: phoneReduser },
});
export default store;
