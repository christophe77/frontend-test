'use server';

import React from 'react';
import UserList from '@/components/user-list/UserList';
import NewsletterHeader from '@/components/newsletter-header/NewsletterHeader';
import NewsletterCard from '@/components/newsletter-card/NewsletterCard';
import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import Newsletter from '@/types/newsletter';
import { Grid } from '@mui/material';

const page = () => {
	return (
		<>
			<UserList />
			<NewsletterHeader />
			<Grid container spacing={4}>
				{NEWSLETTER_ITEMS.map((newsletter: Newsletter) => {
					return <NewsletterCard key={newsletter.id} newsletter={newsletter} />;
				})}
			</Grid>
		</>
	);
};

export default page;
