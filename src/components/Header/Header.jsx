import React, { useState } from 'react';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as LogoColor } from '../../assets/svg/logo_color.svg';
import { Toggle } from '../Toggle/Toggle';
import { Link } from 'react-router-dom';

const Header = () => {
	const [
		isHeaderActive,
		setIsHeaderActive,
	] = useState(false);

	const HeaderActiveHandler = () => {
		setIsHeaderActive((prev) => !prev);
	};

	const seletedText = 'Language';
	return (
		<>
			<div
				className={`${
					classes['header-wrap']
				} ${
					isHeaderActive
						? classes.active
						: ''
				}`}>
				<header className={classes.header}>
					<h1 className={classes.logo}>
						<Link
							to='/'
							title='일렉오션'>
							<span>일렉오션</span>
							{isHeaderActive ? (
								<LogoColor />
							) : (
								<Logo />
							)}
						</Link>
					</h1>
					<nav
						onMouseEnter={HeaderActiveHandler}
						onMouseLeave={
							HeaderActiveHandler
						}>
						<div
							className={
								classes['depth1-list']
							}>
							<ul>
								<li className={classes.active}>
									<Link to='/info/greeting'>
										회사소개
										<i />
									</Link>
									<div
										className={classes.depth2}>
										<ul>
											<li>
												<Link to='/info/greeting'>
													인사말
												</Link>
											</li>
											<li>
												<Link to='/info/history'>
													회사연혁
												</Link>
											</li>
											<li>
												<Link to='/info/organization'>
													조직도
												</Link>
											</li>
											<li>
												<Link to='/info/CI'>
													CI 소개
												</Link>
											</li>
											<li>
												<Link to='/info/location'>
													오시는 길
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<Link to='/business/si'>
										사업분야
										<i />
									</Link>
									<div
										className={classes.depth2}>
										<ul>
											<li>
												<Link to='/business/si'>
													SI
												</Link>
											</li>
											<li>
												<Link to='/business/chart'>
													해도제작
												</Link>
											</li>
											<li>
												<Link to='/sub/satellite'>
													위성사업
												</Link>
											</li>
											<li>
												<Link to='/business/media'>
													해양예보방송
												</Link>
											</li>
											<li>
												<Link to='/business/rnd'>
													R&D
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<Link to='/performance/major'>
										사업실적
										<i />
									</Link>
									<div
										className={classes.depth2}>
										<ul>
											<li>
												<Link to='/performance/major'>
													주요실적
												</Link>
											</li>
											<li>
												<Link to='/performance/all'>
													사업실적
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<Link to='/recurit/walfare'>
										인재채용
										<i />
									</Link>
									<div
										className={classes.depth2}>
										<ul>
											<li>
												<Link to='/recurit/walfare'>
													복지문화
												</Link>
											</li>
											<li>
												<Link to='/recurit/recuritInfo'>
													채용안내
												</Link>
											</li>
											<li>
												<Link to='/recurit/recuritNotice'>
													채용공고
												</Link>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</nav>
					<Toggle
						isActive={isHeaderActive}
						seletedText={seletedText}>
						<ul>
							<li>
								<a href='/'>한국어</a>
							</li>
							<li>
								<a href='/'>English</a>
							</li>
						</ul>
					</Toggle>
					<hr />
					<div
						onMouseEnter={HeaderActiveHandler}
						onMouseLeave={HeaderActiveHandler}
						className={
							classes['header-background']
						}></div>
				</header>
			</div>
		</>
	);
};

export default Header;
