import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/svg/iconSelectArrow.svg';
import { ReactComponent as LineArrow } from '../../assets/svg/iconSelectLineArrow.svg';
import classes from './Toggle.module.css';

export const Toggle = ({
	children,
	isActive,
	isOnSubTop,
	seletedText,
}) => {
	const [isOpen, setIsOpen] =
		useState(null);
	const onClickToggle = () => {
		// true면 open상태 / false면 closed 상태
		setIsOpen((prev) =>
			prev === 'open' ? 'closed' : 'open'
		);
	};
	console.log(isOnSubTop);

	return (
		<div
			className={`${classes.toggle} ${
				isOpen === 'open'
					? classes.open
					: isOpen === 'closed'
					? classes.closed
					: classes.initial
			} ${
				isActive ? classes.active : ''
			} ${
				isOnSubTop
					? classes['nav-depth']
					: null
			}`}>
			<button onClick={onClickToggle}>
				{seletedText}
				{isOnSubTop ? (
					<LineArrow />
				) : (
					<Arrow />
				)}
			</button>
			<div
				className={classes['toggle-items']}>
				{children}
			</div>
		</div>
	);
};
