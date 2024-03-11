import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Main from './page/Main';
import MainLayout from './page/roots/MainRoot';
import InfoLayout from './page/roots/InfoRoot';
import BusinessLayout from './page/roots/BusinessRoot';
import PerformLayout from './page/roots/PerformRoot';
import RecruitmentLayout from './page/roots/recruitRoot';

import Greeting from './page/Info/Greeting/Greeting';
import History from './page/Info/History/History';
import Organization from './page/Info/Organization/Organization';
import Identity from './page/Info/CompanyIdentity/CompanyIdentity';
import Location from './page/Info/Location/Location';
import SystemIntergation from './page/business/SI/SI';
import Chart from './page/business/Chart/Chart';
import Satellite from './page/business/Satellite/Satellite';
import Media from './page/business/Media/Media';
import ResearchDevelopment from './page/business/Rnd/Rnd';
import MajorPerform from './page/performance/MajorPerform/MajorPerform';
import AllPerform from './page/performance/AllPerform/AllPerform';
import Welfare from './page/recruitment/Welfare/Welfare';
import RecruitmentNotice from './page/recruitment/RecruitmentNotice/RecruitmentNotice';
import RecruitmentInfo from './page/recruitment/RecruitmentInfo/RecruitmentInfo';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{ path: '/', element: <Main /> },
			],
		},
		{
			path: '/info',
			element: <InfoLayout />,
			children: [
				{
					path: 'greeting',
					index: true,
					element: <Greeting />,
				},
				{
					path: 'history',
					index: true,
					element: <History />,
				},
				{
					path: 'organization',
					index: true,
					element: <Organization />,
				},
				{
					path: 'CI',
					index: true,
					element: <Identity />,
				},
				{
					path: 'location',
					index: true,
					element: <Location />,
				},
			],
		},
		{
			path: '/business',
			element: <BusinessLayout />,
			children: [
				{
					path: 'si',
					index: true,
					element: <SystemIntergation />,
				},
				{
					path: 'chart',
					index: true,
					element: <Chart />,
				},
				{
					path: 'satellite',
					index: true,
					element: <Satellite />,
				},
				{
					path: 'media',
					index: true,
					element: <Media />,
				},
				{
					path: 'rnd',
					index: true,
					element: <ResearchDevelopment />,
				},
			],
		},
		{
			path: '/performance',
			element: <PerformLayout />,
			children: [
				{
					path: 'major',
					index: true,
					element: <MajorPerform />,
				},
				{
					path: 'all',
					index: true,
					element: <AllPerform />,
				},
			],
		},
		{
			path: '/recurit',
			element: <RecruitmentLayout />,
			children: [
				{
					path: 'walfare',
					index: true,
					element: <Welfare />,
				},
				{
					path: 'recuritInfo',
					index: true,
					element: <RecruitmentInfo />,
				},
				{
					path: 'recuritNotice',
					index: true,
					element: <RecruitmentNotice />,
				},
			],
		},
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
