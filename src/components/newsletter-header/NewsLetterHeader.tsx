'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';

const StyledBox = styled(Box)(() => ({
    marginTop: '15px',
	marginBottom: '15px',
	backgroundColor: '#F4F4F4',
	borderRadius: '10px',
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

const NewsletterHeader: FC = () => {
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

export default NewsletterHeader;
