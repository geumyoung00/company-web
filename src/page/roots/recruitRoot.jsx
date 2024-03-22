import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RecruitmentTop from '../../components/SubTop/RecruitmentTop';

const RecruitmentLayout = () => {
	return (
		<>
			<Header />
			<RecruitmentTop />
			<Outlet />
		</>
	);
};
export default RecruitmentLayout;
