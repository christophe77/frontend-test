'use client';
import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import {
	USER_WITHOUT_SUBSCRIPTION,
	USER_WITH_ONE_SUBSCRIPTION,
	USER_WITH_MULTIPLE_SUBSCRIPTION,
} from '@/mocks/user';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { changeUser } from '@/lib/features/user/userSlice';

interface IUserDivProps {
	fontWeight: string;
	onClick: () => void;
}
const UserDiv = styled('div')((props: IUserDivProps) => ({
	flexGrow: 1,
	color: 'black',
	cursor: 'pointer',
	fontWeight: props.fontWeight,
}));

const UserList: FC = () => {
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: '#F4F4F4' }}>
				<Toolbar>
					<UserDiv
						fontWeight={user.subscriptions.length === 0 ? 'bold' : 'regular'}
						onClick={() => dispatch(changeUser(USER_WITHOUT_SUBSCRIPTION))}
					>
						User 0
					</UserDiv>
					<UserDiv
						fontWeight={user.subscriptions.length === 1 ? 'bold' : 'regular'}
						onClick={() => dispatch(changeUser(USER_WITH_ONE_SUBSCRIPTION))}
					>
						User 1
					</UserDiv>
					<UserDiv
						fontWeight={user.subscriptions.length > 1 ? 'bold' : 'regular'}
						onClick={() =>
							dispatch(changeUser(USER_WITH_MULTIPLE_SUBSCRIPTION))
						}
					>
						User X
					</UserDiv>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default UserList;
