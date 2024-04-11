import { useState, useRef, useEffect } from 'react'
import { ReactComponent as Arrow } from '../../assets/svg/iconSelectArrow.svg'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'
import classes from './Toggle.module.css'

export const Toggle = ({ children, isActive, isOnSubTop, selectedText }) => {
  const [isOpen, setIsOpen] = useState(null)
  const ref = useRef()
  const onClickToggle = e => {
    // true면 open상태 / false면 closed 상태
    e.preventDefault()
    setIsOpen(prev => (prev === 'open' ? 'closed' : 'open'))
    // setIsOpen('open')
  }

  // useEffect(() => {
  //   function listener(e) {
  //     //모달 안을 클릭 했는지
  //     if (!ref.current || ref.current.contains(e.target)) {
  //       console.log('outside')
  //       return
  //     }
  //     //모달 밖을 클릭 했는지
  //     console.log('inside')
  //     setIsOpen('closed')
  //   }
  //   document.addEventListener('mousedown', listener)
  //   return () => {
  //     document.removeEventListener('mousedown', listener)
  //   }
  // }, [ref])

  return (
    <div
      ref={ref}
      className={`${classes.toggle} ${
        isOpen === 'open' ? classes.open : isOpen === 'closed' ? classes.closed : classes.initial
      } ${isActive ? classes.active : ''} ${isOnSubTop ? classes['nav-depth'] : null}`}
    >
      <button onClick={onClickToggle}>
        {selectedText}
        {isOnSubTop ? <ArrowHead /> : <Arrow />}
      </button>
      <div className={classes['toggle-items']} ref={ref}>
        {children}
      </div>
    </div>
  )
}
