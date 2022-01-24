import { configureStore } from '@reduxjs/toolkit';

import ethReducer from './ethSlice';

export default configureStore({
  reducer: { ethReducer },
});
