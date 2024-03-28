import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RecruitmentTop from '../../components/SubTop/RecruitmentTop';
import Footer from '../../components/Footer/Footer';

const RecruitmentLayout = () => {
	return (
		<>
			<Header />
			<RecruitmentTop />
			<Outlet />
			<Footer />
		</>
	);
};
export default RecruitmentLayout;
