'use server';

import React from 'react';
import UserList from '@/components/user-list/UserList';
import NewsLetterHeader from '@/components/newsletter-header/NewsLetterHeader';

const page = () => {
	return (
		<>
			<UserList />
			<NewsLetterHeader />
		</>
	);
};

export default page;
