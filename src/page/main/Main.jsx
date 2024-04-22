import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPageScroller, { SectionContainer } from 'react-page-scroller'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Responsive from '../../components/SlickSlide/MainPerfomanceSlide'
import classes from './Main.module.css'
import { ReactComponent as Plus } from '../../assets/svg/iconPlus.svg'
import { NAV_ITEMS } from '../../components/constants'

export const Main = () => {
  const [isCrrentPage, setCrrentPage] = useState(0)
  const handlePageChange = number => {
    setCrrentPage(number)
  }

  return (
    <>
      <div className={classes.main}>
        <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={isCrrentPage}>
          <section id="mainVs" className={classes.main_vs}>
            <Header />
            <div className={classes.inner}>
              <h2>캐치프라이즈 문구 작성하기</h2>
            </div>
            <img src={require('../../assets/images/main/img_main_visual.png')} alt="메인 회사소개" />
            <div className={classes['mouse-icon']}>
              <span>Scroll Down</span>
              <i></i>
            </div>
          </section>
          <SectionContainer height={55}>
            <section className={`${classes['h-auto']} ${classes['main-text-section']}`}>
              <div className={classes.inner}>
                <p>
                  <strong>ELECOCEAN</strong>
                </p>
                <p>
                  일렉오션은 다양한 경험을 보유한 해양전문기업으로
                  <br /> 더 나은 미래형 해양기술을 선도합니다.
                </p>
              </div>
            </section>
          </SectionContainer>
          <section className={classes.business}>
            <div className={classes.inner}>
              <h3>BUSINESS</h3>
              <hr />
              <dl className={classes.topics}>
                {NAV_ITEMS[1].dropdownItems.map(item => {
                  return (
                    <dd key={item.id}>
                      <Link to={`/business/${item.en}`} className={`${classes['topic-box']}`}>
                        <div className={classes.docker}>
                          <p>{item.id}</p>
                          <p className={classes['hover-hide']}>{item.id}</p>
                          <i />
                        </div>
                        <div className={classes.topic}>
                          <h4>{item.kr}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <div className={classes['topic-img']}>
                          <img src={require(`../../assets/images/main/img_main_business_${item.id}.png`)} alt="1" />
                        </div>
                      </Link>
                    </dd>
                  )
                })}
              </dl>
            </div>
          </section>
          <SectionContainer height={86}>
            <section className={classes.major}>
              <div className={classes.inner}>
                <h3>주요실적</h3>
                <Responsive />
              </div>
            </section>
          </SectionContainer>
          <section className={`${classes.recruit}`}>
            <div className={classes.inner}>
              <div className={classes.box}>
                <div className={classes.left}>
                  <dl>
                    <dt>
                      <h3>인재채용</h3>
                      <p>일렉오션과 함께 성잘할 소중한 인재를 기다립니다.</p>
                    </dt>
                    <dd>
                      <a href="/">
                        <h4>복지문화</h4>
                        <i className={classes['icon-plus']}>
                          <Plus />
                        </i>
                      </a>
                    </dd>
                    <dd>
                      <a href="/">
                        <h4>채용안내</h4>
                        <i className={classes['icon-plus']}>
                          <Plus />
                        </i>
                      </a>
                    </dd>
                  </dl>
                </div>
                <div className={classes.right}>
                  <dl>
                    <dt>
                      <h3>채용공고</h3>
                    </dt>
                    <dd>
                      <a href="/">
                        <h4>채용공고 제목</h4>
                        <i className={classes['icon-plus']}>
                          <Plus />
                        </i>
                        <p>
                          <strong>채용기간</strong>
                          2024.03.25 ~ 2024.04.15
                        </p>
                      </a>
                    </dd>
                    <dd>
                      <a href="/">
                        <h4>채용공고 제목</h4>
                        <i className={classes['icon-plus']}>
                          <Plus />
                        </i>
                        <p>
                          <strong>채용기간</strong>
                          2024.03.25 ~ 2024.04.15
                        </p>
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <Footer />
            <div className={classes['main-bg']}>
              <img src={require('../../assets/images/main/img_main_bg.png')} alt="" />
            </div>
          </section>
        </ReactPageScroller>
      </div>
    </>
  )
}
export default Main
