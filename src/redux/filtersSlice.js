import { createSlice } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';
// const initialState = { name: '' };
// export default function filterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'filters/changeFilter': {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// }
// export const changeFilter = createAction('filters/changeFilter');

const slice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
