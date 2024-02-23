import classes from './Custom.module.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function App() {
	return (
		<div className={classes.wrap}>
			{/* <header
				className={classes['header-wrap']}> */}
			<Header />
			<Main />
		</div>
	);
}

export default App;
