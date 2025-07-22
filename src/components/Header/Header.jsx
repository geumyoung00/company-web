import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as LogoColor } from '../../assets/svg/logoColor.svg'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../constants'
import ScrollToTop from '../../action/scroll-to-top'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [showItem, setShowItem] = useState(null)
  const HeaderActiveHandler = () => {
    setIsHeaderActive(prev => !prev)
    setShowItem(null)
  }

  const depthOpenHandler = itemId => {
    if (itemId === showItem) {
      setShowItem(null)
      return
    }
    setShowItem(itemId)
  }

  useEffect(() => {
    if (window.innerWidth <= 1279) {
      isHeaderActive ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = '')
    }
  }, [isHeaderActive])

  return (
    <>
      <ScrollToTop />
      <div className={`${classes['header-wrap']} ${isHeaderActive ? classes.open : ''}`}>
        <header className={classes.header}>
          <h1 className={classes.logo}>
            <Link to="/" title="일렉오션">
              <span className="hide">일렉오션</span>
              <Logo />
              <LogoColor className={classes['res-logo']} />
            </Link>
          </h1>
          <div onMouseEnter={HeaderActiveHandler} onMouseLeave={HeaderActiveHandler} className={classes['nav-wrap']}>
            <nav>
              <div className={classes['depth1-list']}>
                {NAV_ITEMS.map(item => {
                  const depth1 = item.en

                  return (
                    <div className={`${classes['depth1-menu']} `} key={item.id}>
                      <Link to={`/${depth1}/${item.dropdownItems[0].en}`}>
                        <span>{item.kr}</span>
                        <i className={classes.docker}></i>
                      </Link>
                      <div className={classes['depth2-list']}>
                        <ul>
                          {item.dropdownItems.map(item => {
                            return (
                              <li className={classes['depth2-menu']} key={item.en}>
                                <Link to={`/${depth1}/${item.en}`}>{item.kr}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </nav>
          </div>
          <div className={classes['language']}>
            <Link>
              Go to english
              <i>
                <ArrowHead />
              </i>
            </Link>
          </div>
          <div className={classes['menu-button']}>
            <button className={isHeaderActive ? classes.close : ''} onClick={HeaderActiveHandler}>
              <p className="hide">전체메뉴</p>
              <div className={classes['menu-icon']}>
                <i className={`${classes.line} ${classes['line-1']}`}></i>
                <i className={`${classes.line} ${classes['line-2']}`}></i>
                <i className={`${classes.line} ${classes['line-3']}`}></i>
              </div>
            </button>
          </div>
        </header>
        <div className={`${classes['res-nav-wrap']}`}>
          <div className={classes['language']}>
            <Link>
              Go to english
              <i>
                <ArrowHead />
              </i>
            </Link>
          </div>
          <nav>
            <div className={classes['depth1-list']}>
              {NAV_ITEMS.map(item => {
                const depth1 = item.en

                return (
                  <div
                    className={`${classes['depth1-menu']} ${showItem === item.id ? classes.open : ''}`}
                    key={item.id}
                  >
                    <button onClick={() => depthOpenHandler(item.id)}>
                      <span>{item.kr}</span>
                      <i></i>
                    </button>
                    <div className={classes['depth2-list']}>
                      <ul>
                        {item.dropdownItems.map(item => {
                          return (
                            <li className={classes['depth2-menu']} key={item.en}>
                              <Link to={`/${depth1}/${item.en}`}>{item.kr}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
