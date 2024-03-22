import classes from './Main.module.css';

const Main = () => {
	return (
		<div className={classes.main}>
			<section
				id='mainVs'
				className={classes.main_vs}>
				<div className={classes.inner}>
					<h2>캐치프라이즈 문구 작성하기</h2>
				</div>
				<img
					src={
						process.env.PUBLIC_URL +
						'main/main_bg.png'
					}
					alt='메인 회사소개'
				/>
			</section>
		</div>
	);
};

export default Main;
