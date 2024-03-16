'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(() => ({
	backgroundColor: '#F4F4F4',
	marginTop: '30px',
	borderRadius: '10px',
    marginLeft : '15vh',
    marginRight : '15vh'
}));

const Title = styled('div')(() => ({
	color: '#212121',
	fontWeight: 700,
	fontSize: '30px',
	lineHeight: '33px',
	textTransform: 'uppercase',
	padding: '20px',
	textAlign: 'center',
}));

const Text = styled('div')(() => ({
	color: '#212121',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '26px',
	paddingBottom: '20px',
	textAlign: 'center',
}));

const NewsLetterHeader = () => {
	return (
		<StyledBox>
			<Title>Newsletters</Title>
			<Text>
				Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et
				des marques satellites. Ainsi, vous pouvez découvrir toutes nos
				newsletters selon vos centres d’intérêt et gérer plus facilement
				l’inscription à vos newsletters.{' '}
			</Text>
		</StyledBox>
	);
};

export default NewsLetterHeader;
