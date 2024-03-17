import { useAppSelector } from '@/lib/hooks';
import User from '@/types/user';

const useNewsletterCard: () => {
	user: User;
	userHasRight: (newsletterSubscriptions: string[]) => boolean;
} = () => {
	const user = useAppSelector((state) => state.user);
	const userHasRight: (newsletterSubscriptions: string[]) => boolean = (
		newsletterSubscriptions: string[],
	) => {
		if (newsletterSubscriptions.length === 0) {
			return true;
		}
		if (
			user.subscriptions.some((subscription) =>
				newsletterSubscriptions.includes(subscription),
			)
		) {
			return true;
		}
		return false;
	};
	return { user, userHasRight };
};
export default useNewsletterCard;
