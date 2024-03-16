'use server';
import React from 'react';
import { Grid } from '@mui/material';
import UserList from '@/components/user-list/UserList';
import NewsletterHeader from '@/components/newsletter-header/NewsletterHeader';
import NewsletterCard from '@/components/newsletter-card/NewsletterCard';
import SectionTitle from '@/components/section-title/SectionTitle';
import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import Newsletter from '@/types/newsletter';

const page = () => {
	const sanList = NEWSLETTER_ITEMS.filter(
		(newsletter: Newsletter) => newsletter.site === 'SAN',
	);
	const denList = NEWSLETTER_ITEMS.filter(
		(newsletter: Newsletter) => newsletter.site === 'DEN',
	);
	const danList = NEWSLETTER_ITEMS.filter(
		(newsletter: Newsletter) => newsletter.site === 'DAN',
	);
	const lanList = NEWSLETTER_ITEMS.filter(
		(newsletter: Newsletter) => newsletter.site === 'LAN',
	);

	return (
		<>
			<UserList />
			<NewsletterHeader />
			{sanList.length > 0 && (
				<>
					<SectionTitle title={'Les echos'} />
					<Grid container spacing={4}>
						{sanList.map((newsletter: Newsletter) => {
							return (
								<NewsletterCard key={newsletter.id} newsletter={newsletter} />
							);
						})}
					</Grid>
				</>
			)}
			{denList.length > 0 && (
				<>
					<SectionTitle title={'Investir'} />
					<Grid container spacing={4}>
						{denList.map((newsletter: Newsletter) => {
							return (
								<NewsletterCard key={newsletter.id} newsletter={newsletter} />
							);
						})}
					</Grid>
				</>
			)}
			{danList.length > 0 && (
				<>
					<SectionTitle title={'Entrepreneurs'} />
					<Grid container spacing={4}>
						{danList.map((newsletter: Newsletter) => {
							return (
								<NewsletterCard key={newsletter.id} newsletter={newsletter} />
							);
						})}
					</Grid>
				</>
			)}
			{lanList.length > 0 && (
				<>
					<SectionTitle title={'Capital finance'} />
					<Grid container spacing={4}>
						{lanList.map((newsletter: Newsletter) => {
							return (
								<NewsletterCard key={newsletter.id} newsletter={newsletter} />
							);
						})}
					</Grid>
				</>
			)}
		</>
	);
};

export default page;
