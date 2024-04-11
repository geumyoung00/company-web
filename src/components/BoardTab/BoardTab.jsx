import { useState } from 'react'
import classes from './BoardTab.module.css'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../../components/constants/NAV_ITEMS'
import { useLocation } from 'react-router-dom'

const BoardTab = ({ filterItemHandler }) => {
  const location = useLocation()
  const { pathname } = location
  const path = pathname.split('/')[1]
  let names = []
  if (path === 'recruit') {
    names = [
      { en: 'open', kr: '모집 중' },
      { en: 'close', kr: '모집 마감' },
    ]
  } else {
    names = NAV_ITEMS.find(item => item.en === 'business').dropdownItems
  }
  const navItems = [{ en: 'all', kr: '전체' }, ...names]

  const [activText, setActiveText] = useState('all')
  function tabHandler(tabName) {
    setActiveText(tabName)
  }

  return (
    <div className={classes['tabs']}>
      <div className={classes.inner}>
        {navItems.map(item => {
          return (
            <Link
              className={`${classes.btn} ${item.en === activText ? classes.active : ''}`}
              key={item.en}
              onClick={() => {
                tabHandler(item.en)
                filterItemHandler(item.en)
              }}
            >
              <span>{item.kr}</span>
              <i className={classes.docker} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default BoardTab
