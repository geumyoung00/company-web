import { Link, useLocation } from 'react-router-dom'
import { Toggle } from '../Toggle/Toggle'
import classes from './NavBar.module.css'
import { useEffect, useState } from 'react'
import { ReactComponent as Home } from '../../assets/svg/iconHome.svg'
import { NAV_ITEMS } from '../constants'

const NavBar = ({ navOne, navTwo }) => {
  const isOnSubTop = true
  const location = useLocation()
  const { pathname } = location

  const path1 = pathname.split('/')[1]
  const path2 = pathname.split('/')[2]

  const findItemWithStr = (arr, str) => arr.find(item => item.en === str)

  const navItem = findItemWithStr(NAV_ITEMS, path1)
  const dropdownItem = findItemWithStr(navItem.dropdownItems, path2)

  const [selectedNavItem, setSelectedNavItem] = useState(navItem)
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(dropdownItem)

  useEffect(() => {
    setSelectedDropdownItem(dropdownItem)
  }, [dropdownItem, navItem])

  const onClickNavItem = item => {
    setSelectedNavItem(item)
    setSelectedDropdownItem(item.dropdownItems[0])
  }

  return (
    <div className={classes['nav-bar']}>
      <dl>
        <dd className={classes.home}>
          <Link to="/">
            <span className={`hide`}>홈으로</span>
            <Home />
          </Link>
        </dd>
        <dd>
          <Toggle isOnSubTop={isOnSubTop} selectedText={selectedNavItem.kr}>
            <ul>
              {NAV_ITEMS.map(item => {
                return (
                  <li key={item.en} onClick={onClickNavItem.bind(null, item)}>
                    <Link to={`/${item.en}/${item.dropdownItems[0].en}`}>{navOne}</Link>
                  </li>
                )
              })}
            </ul>
          </Toggle>
        </dd>
        <dd>
          <Toggle isOnSubTop={isOnSubTop} selectedText={selectedDropdownItem.kr}>
            <ul>
              {selectedNavItem.dropdownItems.map(item => (
                <li key={item.en}>
                  <Link to={`/${selectedNavItem.en}/${item.en}`}>{navTwo}</Link>
                </li>
              ))}
            </ul>
          </Toggle>
        </dd>
      </dl>
    </div>
  )
}
export default NavBar
