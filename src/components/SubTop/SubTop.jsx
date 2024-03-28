import NavBar from '../NavBar/NavBar'
import classes from './SubTop.module.css'
import { useLocation } from 'react-router-dom'
import NAV_ITEMS from '../constants'

const SubTop = () => {
  const location = useLocation()
  const { pathname } = location

  const path1 = pathname.split('/')[1]
  const path2 = pathname.split('/')[2]

  const findNavItem = NAV_ITEMS.find(item => item.en === path1)
  const findDropdownItem = findNavItem.dropdownItems.find(item => item.en === path2)

  return (
    <section
      className={`${classes['nav']} ${classes.recruitment}`}
      style={{ backgroundImage: `url(${require(`../../assets/images/sub/img_sub_top_${path1}.png`)})` }}
    >
      <div className={classes.inner}>
        <h2>{findDropdownItem.kr}</h2>
        <NavBar />
      </div>
    </section>
  )
}

export default SubTop
