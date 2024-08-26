import classes from './BoardTab.module.css'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../../components/constants/NAV_ITEMS'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const BoardTab = () => {
  const location = useLocation()
  const { pathname } = location
  const path1 = pathname.split('/')[2]
  const [checkTab, setCheckTab] = useState('all')

  let names = []
  if (path1 === 'recruitNotice') {
    names = [
      { en: 'open', kr: '모집 중' },
      { en: 'close', kr: '모집 마감' },
    ]
  } else {
    names = NAV_ITEMS.find(item => item.en === 'business').dropdownItems
  }
  const navItems = [{ en: 'all', kr: '전체' }, ...names]
  const checkTabHandler = tabName => {
    setCheckTab(tabName)
  }

  return (
    <div className={`${classes['tabs']}`}>
      <div className={classes.inner}>
        {navItems.map(item => {
          return (
            <Link
              className={`${classes.btn} ${item.en === checkTab ? classes.active : ''}`}
              key={item.en}
              to={
                path1 === 'recruitNotice'
                  ? item.en === 'all'
                    ? `/recruit/recruitNotice`
                    : `/recruit/recruitNotice/${item.en}`
                  : item.en === 'all'
                  ? `/performance/all/`
                  : `/performance/all/${item.en}`
              }
              onClick={() => {
                checkTabHandler(item.en)
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
