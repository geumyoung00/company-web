import { useState } from 'react'
import { ReactComponent as Arrow } from '../../assets/svg/iconSelectArrow.svg'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'
import classes from './Toggle.module.css'

export const Toggle = ({ children, isActive, isOnSubTop, selectedText }) => {
  const [isOpen, setIsOpen] = useState(null)
  const onClickToggle = () => {
    // true면 open상태 / false면 closed 상태
    setIsOpen(prev => (prev === 'open' ? 'closed' : 'open'))
  }

  return (
    <div
      className={`${classes.toggle} ${
        isOpen === 'open' ? classes.open : isOpen === 'closed' ? classes.closed : classes.initial
      } ${isActive ? classes.active : ''} ${isOnSubTop ? classes['nav-depth'] : null}`}
    >
      <button onClick={onClickToggle}>
        {selectedText}
        {isOnSubTop ? <ArrowHead /> : <Arrow />}
      </button>
      <div className={classes['toggle-items']}>{children}</div>
    </div>
  )
}
