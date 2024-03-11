import NavBar from '../NavBar/NavBar';
import classes from './SubTop.module.css';

const PerformanceTop = () => {
	return (
		<section
			className={`${classes['nav']} ${classes.performance}`}>
			<div className={classes.inner}>
				<h2>인사말</h2>
				<NavBar />
			</div>
		</section>
	);
};

export default PerformanceTop;
