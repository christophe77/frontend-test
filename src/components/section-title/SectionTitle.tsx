'use client';
import { styled } from '@mui/system';

const Title = styled('div')(() => ({
	color: '#212121',
	fontWeight: 700,
	fontSize: '22px',
	lineHeight: '27.65px',
	textTransform: 'uppercase',
    marginTop : '15px',
    marginBottom : '15px',
}));

const Rectangle = styled('div')(() => ({
	width: '70px',
	height: '4px',
	borderRadius: '10px',
	backgroundColor: '#B00005',
}));

interface ISectionTitleProps {
	title: string;
}

const SectionTitle: ({ title }: ISectionTitleProps) => JSX.Element = ({
	title,
}: ISectionTitleProps) => {
	return (
		<>
			<Title>{title}</Title>
			<Rectangle />
		</>
	);
};

export default SectionTitle;
