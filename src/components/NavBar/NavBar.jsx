import { Link } from 'react-router-dom';
import { Toggle } from '../Toggle/Toggle';
import classes from './NavBar.module.css';
import { useState } from 'react';
import { ReactComponent as Home } from '../../assets/svg/iconHome.svg';

const NavBar = () => {
	const isOnSubTop = true;
	const [seletedText, setSelectedText] =
		useState('회사소개');

	return (
		<div className={classes['nav-bar']}>
			<dl>
				<dd className={classes.home}>
					<Link to='/'>
						<span className={`hide`}>
							홈으로
						</span>
						<Home />
					</Link>
				</dd>
				<dd>
					<Toggle
						isOnSubTop={isOnSubTop}
						seletedText={seletedText}>
						<ul>
							<li>
								<a href='/'>회사소개</a>
							</li>
							<li>
								<a href='/'>사업분야</a>
							</li>
							<li>
								<a href='/'>사업실적</a>
							</li>
							<li>
								<a href='/'>사업분야</a>
							</li>
						</ul>
					</Toggle>
				</dd>
				<dd>
					<Toggle
						isOnSubTop={isOnSubTop}
						seletedText={seletedText}>
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
					</Toggle>
				</dd>
			</dl>
		</div>
	);
};
export default NavBar;
