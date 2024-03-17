import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { changeUser } from '@/lib/features/user/userSlice';
import User from '@/types/user';

const useUserList = () => {
	const user: User = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const changeUserSubscriptions = (user: User) => {
		dispatch(changeUser(user));
	};
	return { user, changeUserSubscriptions };
};
export default useUserList;
