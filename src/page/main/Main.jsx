import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Responsive from '../../components/SlickSlide/MainPerfomanceSlide'
import classes from './Main.module.css'
import { ReactComponent as Plus } from '../../assets/svg/iconPlus.svg'
import { NAV_ITEMS } from '../../components/constants'

export const Main = () => {
  const visualImage = useRef()
  const visualtext = useRef()

  useGSAP(() => {
    gsap.to(visualImage.current, { scale: '1.0', opacity: '.6', duration: 2 })
    gsap.to(visualtext.current, { translateY: '0', opacity: '1', duration: 2 })
  })

  return (
    <>
      <div className={classes.main}>
        <section className={classes['main-vs']}>
          <div className={classes.inner}>
            <h2 ref={visualtext}>메인 슬로건 문구 작성</h2>
          </div>
          <img ref={visualImage} src={require('../../assets/images/main/img_main_visual.png')} alt="메인 회사소개" />
          <div className={classes['mouse-icon']}>
            {/* <span>Scroll</span> */}
            <i></i>
          </div>
        </section>
        <section className={`${classes['text-section']}`}>
          <div className={classes.inner}>
            <p>
              <strong>ELECOCEAN</strong>
            </p>
            <p>
              해양 기술 산업의 다양한 경험으로
              <br /> 미래형 해양기술을 선도합니다.
            </p>
          </div>
        </section>
        {/* <section className={classes.business}>
          <div className={classes.inner}>
            <h3>BUSINESS</h3>
            <hr />
            <dl className={classes.topics}>
              {NAV_ITEMS[1].dropdownItems.map(item => {
                return (
                  <dd key={item.id}>
                    <div className={`${classes['topic-box']}`}>
                      <div className={classes.docker}>
                        <p>{item.id}</p>
                        <i />
                      </div>
                      <div className={classes.topic}>
                        <h4>{item.kr}</h4>
                        <p>{item.desc}</p>
                      </div>
                      <div className={classes['topic-img']}>
                        <img src={require(`../../assets/images/main/img_main_business_${item.id}.png`)} alt="1" />
                      </div>
                      <Link to={`/business/${item.en}`}>
                        <span>View more</span>
                        <div className={classes.icon}>
                          <i></i>
                        </div>
                      </Link>
                    </div>
                  </dd>
                )
              })}
            </dl>
          </div>
        </section> */}
        {/* <section className={classes.major}>
          <div className={classes.inner}>
            <h3>주요실적</h3>
            <Responsive />
          </div>
        </section> */}
        {/* <section className={`${classes.recruit}`}>
          <div className={classes.inner}>
            <div className={classes.box}>
              <div className={classes.left}>
                <dl>
                  <dt>
                    <h3>인재채용</h3>
                    <p>일렉오션과 함께 성장할 소중한 인재를 기다립니다.</p>
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
          <div className={classes['main-bg']}>
            <img src={require('../../assets/images/main/img_main_bg.png')} alt="" />
          </div>
        </section> */}
      </div>
    </>
  )
}
export default Main
