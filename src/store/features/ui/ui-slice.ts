import { INotification } from './../../../interfaces/Notification.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
	cartIsVisible: boolean;
	notification: INotification;
};
const initialState: initialStateType = {
	cartIsVisible: false,
	notification: {} as INotification,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotification(state, { payload }: PayloadAction<INotification>) {
			state.notification = {
				title: payload.title,
				message: payload.message,
				status: payload.status,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
