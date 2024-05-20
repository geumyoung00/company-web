import React, { useState } from 'react'
import classes from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as LogoColor } from '../../assets/svg/logoColor.svg'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'
import { Toggle } from '../Toggle/Toggle'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../constants'
import ScrollToTop from '../../action/scroll-to-top'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [showItem, setShowItem] = useState(null)

  const HeaderActiveHandler = () => {
    setIsHeaderActive(prev => !prev)
    setShowItem(null)
    if (isHeaderActive) {
      document.body.style.overflowY = ''
    } else {
      window.innerWidth <= 1366 ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = '')
    }
  }

  const depthOpenHandler = itemId => {
    if (itemId === showItem) {
      setShowItem(null)
      return
    }
    setShowItem(itemId)
  }

  const depthItem = NAV_ITEMS.map(item => item.dropdownItems)

  return (
    <>
      <ScrollToTop />
      <div className={`${classes['header-wrap']} ${isHeaderActive ? classes.open : ''}`}>
        <header className={classes.header}>
          <h1 className={classes.logo}>
            <Link to="/" title="일렉오션">
              <span className="hide">일렉오션</span>
              <Logo />
            </Link>
          </h1>
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
        <div className={`${classes['menu-wrap']}`}>
          <div className={classes['language']}>
            <Link>
              Supporting english
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
      {/* {window.innerWidth <= 1366 ? (
        <div className={`${classes['media-header-wrap']} ${isHeaderActive ? classes.open : ''}`}>
          <header className={classes.header}>
            <h1 className={classes.logo}>
              <Link to="/" title="일렉오션">
                <span>일렉오션</span>
                <Logo />
              </Link>
            </h1>
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
          <div className={`${classes['menu-wrap']}`}>
            <div className={classes['language']}>
              <Link>
                Supporting english
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
      ) : (
        <div className={`${classes['header-wrap']} ${isHeaderActive ? classes.active : ''}`}>
          <header className={classes.header}>
            <h1 className={classes.logo}>
              <Link to="/" title="일렉오션">
                <span>일렉오션</span>
                {isHeaderActive ? <LogoColor /> : <Logo />}
              </Link>
            </h1>
            <nav onMouseEnter={HeaderActiveHandler} onMouseLeave={HeaderActiveHandler}>
              <div className={classes['depth1-list']}>
                <ul>
                  <li className={classes.active}>
                    <Link to="/info/greeting">
                      회사소개
                      <i />
                    </Link>
                    <div className={classes.depth2}>
                      <ul>
                        {depthItem[0].map(item => {
                          return (
                            <li key={item.en}>
                              <Link to={`/info/${item.en}`}>{item.kr}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/business/si">
                      사업분야
                      <i />
                    </Link>
                    <div className={classes.depth2}>
                      <ul>
                        {depthItem[1].map(item => {
                          return (
                            <li key={item.en}>
                              <Link to={`/business/${item.en}`}>{item.kr}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/performance/major">
                      사업실적
                      <i />
                    </Link>
                    <div className={classes.depth2}>
                      <ul>
                        {depthItem[2].map(item => {
                          return (
                            <li key={item.en}>
                              <Link to={`/performance/${item.en}`}>{item.kr}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/recruit/welfare">
                      인재채용
                      <i />
                    </Link>
                    <div className={classes.depth2}>
                      <ul>
                        {depthItem[3].map(item => {
                          return (
                            <li key={item.en}>
                              <Link to={`/recruit/${item.en}`}>{item.kr}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <Toggle className={classes.language} isActive={isHeaderActive} selectedText="Language">
              <ul>
                <li>
                  <a href="/">한국어</a>
                </li>
                <li>
                  <a href="/">English</a>
                </li>
              </ul>
            </Toggle>
            <hr />
            <div
              onMouseEnter={HeaderActiveHandler}
              onMouseLeave={HeaderActiveHandler}
              className={classes['header-background']}
            ></div>
          </header>
        </div>
      )} */}
    </>
  )
}

export default Header
