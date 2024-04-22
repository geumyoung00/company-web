import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as LogoColor } from '../../assets/svg/logoColor.svg'
import { Toggle } from '../Toggle/Toggle'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../constants'
import ScrollToTop from '../../action/scroll-to-top'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [innerWidth, setInnerWidth] = useState(null)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [innerWidth])
  const HeaderActiveHandler = () => {
    setIsHeaderActive(prev => !prev)
  }

  const depthItem = NAV_ITEMS.map(item => item.dropdownItems)

  return (
    <>
      <ScrollToTop />
      {innerWidth <= 1024 ? (
        <div className={`${classes['media-header-wrap']}`}>
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
          <div className={`${classes['menu-wrap']} ${isHeaderActive ? classes.active : ''}`}>여기다가 메뉴넣을래</div>
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
      )}
    </>
  )
}

export default Header
