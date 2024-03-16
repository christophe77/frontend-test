'use client';
import { Box, Fab, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Newsletter from '@/types/newsletter';
import { useAppSelector } from '@/lib/hooks';

const StyledBox = styled(Box)(() => ({
	position: 'relative',
	marginTop: '15px',
	marginBottom: '15px',
	backgroundColor: 'white',
	textAlign: 'center',
	width: '100%',
}));

const TitleBlock = styled('div')(() => ({
	backgroundColor: '#CECECE',
	height: '200px',
	display: 'grid',
	alignItems: 'center',
}));

const Title = styled('p')(() => ({
	textAlign: 'center',
	color: '#FFFFFF',
	fontWeight: 700,
	fontSize: '30px',
}));

const Description = styled('div')(() => ({
	color: '#212121',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '26px',
	textAlign: 'center',
	marginTop: '10px',
	height: '60px',
}));

const SubscribeFab = styled(Fab)(() => ({
	backgroundColor: '#FAEC70',
	borderRadius: '40px',
	width: '123px',
	height: '40px',
	padding: '8px, 30px, 8px, 30px',
	textTransform: 'capitalize',
	marginTop: '10px',
	'&:hover': {
		backgroundColor: '#FAEC70',
	},
}));

const RegisterFab = styled(Fab)(() => ({
	backgroundColor: '#B00005',
	color: 'white',
	borderRadius: '40px',
	width: '123px',
	height: '40px',
	padding: '8px, 30px, 8px, 30px',
	textTransform: 'capitalize',
	marginTop: '10px',
	'&:hover': {
		backgroundColor: '#B00005',
	},
}));

interface INewsletterCardProps {
	newsletter: Newsletter;
}

const NewsletterCard: ({ newsletter }: INewsletterCardProps) => JSX.Element = ({
	newsletter,
}: INewsletterCardProps) => {
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
	return (
		<Grid item xs={12} sm={3}>
			<StyledBox>
				<TitleBlock>
					<Title>{newsletter.title}</Title>
				</TitleBlock>
				<Description>{newsletter.description}</Description>
				{userHasRight(newsletter.subscriptions) ? (
					<RegisterFab>s&apos;inscrire</RegisterFab>
				) : (
					<SubscribeFab>s&apos;abonner</SubscribeFab>
				)}
			</StyledBox>
		</Grid>
	);
};

export default NewsletterCard;
