
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { addBooking, clearBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;