import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import InfoTop from '../../components/SubTop/InfoTop';

const InfoLayout = () => {
	return (
		<>
			<Header />
			<InfoTop />
			<Outlet />
		</>
	);
};
export default InfoLayout;
