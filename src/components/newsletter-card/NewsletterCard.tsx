'use client';
import { Box, Fab, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Newsletter from '@/types/newsletter';

const StyledBox = styled(Box)(() => ({
	marginTop: '15px',
	marginBottom: '15px',
	backgroundColor: 'white',
    textAlign: 'center',
    width:'100%'
}));

const TitleBlock = styled('div')(() => ({
	backgroundColor: '#CECECE',
	height: '200px',
    display: "grid",
    alignItems: "center"
}));

const Title = styled('p')(() => ({
    textAlign:'center',
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
    marginTop: '10px'
}));

const SubscribeFab = styled(Fab)(() => ({
	backgroundColor: '#FAEC70',
	borderRadius: '40px',
	width: '123px',
	height: '40px',
	padding: '8px, 30px, 8px, 30px',
	textTransform: 'capitalize',
    marginTop: '10px'
}));

const RegisterFab = styled(Fab)(() => ({
	backgroundColor: '#B00005',
	borderRadius: '40px',
	width: '123px',
	height: '40px',
	padding: '8px, 30px, 8px, 30px',
	textTransform: 'capitalize',
    marginTop: '10px'
}));

interface INewsletterCardProps {
	newsletter: Newsletter;
}

const NewsletterCard: ({ newsletter }: INewsletterCardProps) => JSX.Element = ({
	newsletter,
}: INewsletterCardProps) => {
	return (
		<Grid item xs={12} sm={4}>
			<StyledBox>
				<TitleBlock>
					<Title>{newsletter.title}</Title>
				</TitleBlock>
				<Description>{newsletter.description}</Description>
				<SubscribeFab>s&apos;abonner</SubscribeFab>
				<RegisterFab>s&apos;inscrire</RegisterFab>
			</StyledBox>
		</Grid>
	);
};

export default NewsletterCard;
