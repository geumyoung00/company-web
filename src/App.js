import classes from './Custom.module.css';
import { ReactComponent as Logo } from './assets/images/logo.svg';
import { ReactComponent as Arrow } from './assets/images/iconSelectArrow.svg';

function App() {
	let selectedItem =
		document.querySelector(
			'.selectLabel'
		);
	let toggleBox = document.querySelector(
		'.toggleBox'
	);

	const toggleOpen = () => {
		if (toggleBox.style.maxHeight === 0) {
			toggleBox.style.maxHeight =
				toggleBox.scrollHeight + 'px';
		} else {
			toggleBox.removeAttribute('style');
		}
	};

	return (
		<div
			className={`${classes.wrap} ${classes.main}`}>
			<header
				er
				className={classes.header}>
				<h1 className={classes.logo}>
					<a
						href='/'
						title='일렉오션'>
						<Logo />
					</a>
					<span className={classes.hide}>
						일렉오션
					</span>
				</h1>
				<nav>
					<div className={classes.depth1}>
						<a href='/'>회사소개</a>
						<a href='/'>사업분야</a>
						<a href='/'>사업실적</a>
						<a href='/'>인재채용</a>
					</div>
					{/* <div className={classes.dep2Lists}>
						<ul>
							<li>
								<a href='/'>인사말</a>
							</li>
							<li>
								<a href='/'>회사연혁</a>
							</li>
							<li>
								<a href='/'>조직도</a>
							</li>
							<li>
								<a href='/'>CI 소개</a>
							</li>
							<li>
								<a href='/'>오시는 길</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href='/'>SI</a>
							</li>
							<li>
								<a href='/'>해도제작</a>
							</li>
							<li>
								<a href='/'>위성사업</a>
							</li>
							<li>
								<a href='/'>해양예보방송</a>
							</li>
							<li>
								<a href='/'>R&D</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href='/'>주요실적</a>
							</li>
							<li>
								<a href='/'>사업실적</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href='/'>복지문화</a>
							</li>
							<li>
								<a href='/'>채용안내</a>
							</li>
							<li>
								<a href='/'>채용공고</a>
							</li>
						</ul>
					</div> */}
				</nav>
				<div
					className={`${classes.lang} ${classes.active}`}>
					<button className='toggleBtn'>
						Language
						<Arrow />
					</button>
					<ul className='toggleBox'>
						<li>
							<a href='/'>한국어</a>
						</li>
						<li>
							<a href='/'>English</a>
						</li>
					</ul>
				</div>
			</header>
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
}

export default App;
