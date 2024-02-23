import React, { useState } from 'react';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LogoColor } from '../../assets/images/logo_color.svg';
import { Toggle } from '../Toggle/Toggle';

const Header = () => {
	const [
		isHeaderActive,
		setIsHeaderActive,
	] = useState(false);

	const HeaderActiveHandler = () => {
		setIsHeaderActive((prev) => !prev);
	};
	return (
		<div
			className={`${
				classes['header-wrap']
			} ${
				isHeaderActive ? classes.active : ''
			}`}>
			<header className={classes.header}>
				<h1 className={classes.logo}>
					<a
						href='/'
						title='일렉오션'>
						<span>일렉오션</span>
						{isHeaderActive ? (
							<LogoColor />
						) : (
							<Logo />
						)}
					</a>
				</h1>
				<nav
					onMouseEnter={HeaderActiveHandler}
					onMouseLeave={HeaderActiveHandler}>
					<div
						className={
							classes['depth1-list']
						}>
						<ul>
							<li className={classes.active}>
								<a href='/'>
									회사소개
									<i />
								</a>
								<div className={classes.depth2}>
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
								</div>
							</li>
							<li>
								<a href='/'>
									사업분야
									<i />
								</a>
								<div className={classes.depth2}>
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
								</div>
							</li>
							<li>
								<a href='/'>
									사업실적
									<i />
								</a>
								<div className={classes.depth2}>
									<ul>
										<li>
											<a href='/'>주요실적</a>
										</li>
										<li>
											<a href='/'>사업실적</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a href='/'>
									인재채용
									<i />
								</a>
								<div className={classes.depth2}>
									<ul>
										<li>
											<a href='/'>복지문화</a>
										</li>
										<li>
											<a href='/'>채용문화</a>
										</li>
										<li>
											<a href='/'>복지문화</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</nav>
				<Toggle isActive={isHeaderActive}>
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
					className={
						classes['header-background']
					}></div>
			</header>
		</div>
	);
};

export default Header;
