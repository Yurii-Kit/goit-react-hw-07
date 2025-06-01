// import { createAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//   },
//   filters: {
//     name: '',
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload,
//           ),
//         },
//       };
//     }
//     case 'filters/setFilter': {
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           name: action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = createAction('contacts/addContact');

// export const deleteContact = createAction('contacts/deleteContact');

// export const changeFilter = createAction('filters/setFilter');

const persistConfig = {
  key: 'contacts-items',
  storage,
};
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
