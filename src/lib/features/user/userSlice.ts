import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import User from '@/types/user';

const initialState: User = {
	id: '507f1f77bcf86cd799439011',
	firstName: 'Jamie',
	lastName: 'Doe',
	gender: 'M',
	email: 'jamie.doe@example.com',
	subscriptions: [],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeUser: (state, action: PayloadAction<User>) => {
			return (state = { ...action.payload });
		},
	},
});

export const { changeUser } = userSlice.actions;

export const currentUser = (state: RootState) => state.user;

export default userSlice.reducer;
