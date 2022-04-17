import type { NextPage } from 'next';
import React, { useState } from 'react';
import Sidebar from '../components/Components/Sidebar/Sidebar';
import StartPage from './StartPage/StartPage';

const Home: NextPage = () => {

	return (
		<div className='flex'>
			<div className='w-1/5'>
				<Sidebar />
			</div>
			<div className='w-4/5'>
				<StartPage />
			</div>
		</div>
	)
}

export default Home;