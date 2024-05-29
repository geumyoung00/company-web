import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Responsive from '../../components/SlickSlide/MainPerfomanceSlide'
import classes from './Main.module.css'
import { ReactComponent as Plus } from '../../assets/svg/iconPlus.svg'
import { ReactComponent as LineArrow } from '../../assets/svg/iconLineArrow.svg'
import { NAV_ITEMS } from '../../components/constants'

gsap.registerPlugin(ScrollTrigger)

export const Main = () => {
  const viewPort = { isMobile: '(min-width:320px)', isIpad: '(min-width: 768px)', isDesktop: '(min-width: 1280px)' }
  let businessMm = gsap.matchMedia()
  let sectionMm = gsap.matchMedia()

  const businessRef = useRef()
  const sectionRef = useRef([])
  useGSAP(() => {
    sectionMm.add(viewPort, context => {
      let { isIpad, isDesktop } = context.conditions
      gsap.from(sectionRef.current[4], {
        translateY: '50%',
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current[4],
          start: isDesktop ? '-70% 80%' : isIpad ? '-70% 80%' : '-50% 55%',
          end: isDesktop ? '10% 60%' : isIpad ? '10% 60%' : '-25% 55%',
          scrub: 2,
        },
      })
    })

    gsap.from(sectionRef.current[0], { scale: '1.2', opacity: '0', translateY: '4rem', duration: 1.4 })
    gsap.from(sectionRef.current[1], { scale: '1.2', opacity: '.7', duration: 1.2 })
    gsap.from(sectionRef.current[2], { opacity: '0', translateY: '-1rem', duration: 1, delay: 1.5 })
    gsap.from('.box p', {
      scale: 1.4,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.box p',
        toggleActions: 'resume pause reset pause',
        start: '-100% 70%',
        end: '300% 70%',
        scrub: 2,
      },
    })

    gsap.from(sectionRef.current[5], {
      opacity: 0,
      translateY: '50%',
      scrollTrigger: {
        trigger: sectionRef.current[5],
        start: '-50% 85%',
        end: '0% 85%',
        scrub: 2,
      },
    })
  })

  useGSAP(
    () => {
      businessMm.add(viewPort, context => {
        let { isIpad, isDesktop } = context.conditions
        const topics = gsap.utils.toArray('dd')

        gsap.from('h3', {
          translateX: '-100%',
          opacity: 0,
          duration: 2,
          scrollTrigger: { trigger: 'h3', start: 'center 75%', end: 'center 75%', scrub: 2 },
        })

        if (isDesktop) {
          gsap.from('dl', {
            opacity: 0,
            translateY: '50%',
            scrollTrigger: { trigger: 'dl', scrub: 2, start: 'top-=55% center', end: 'top-=20% center' },
          })
        }

        isDesktop
          ? // min-width: 1366px
            gsap.to(topics, {
              xPercent: -100 * (topics.length - 1),
              ease: 'none',
              scrollTrigger: {
                trigger: businessRef.current,
                pin: true,
                scrub: 1,
                snap: {
                  snapTo: 1 / (topics.length - 1),
                  duration: 1.5,
                  delay: 0, // 스냅을 하기 전 0.2초동안 지연
                  ease: 'power3.out', // 변화속도
                },
                start: 'top top',
                end: `${document.querySelector('dd').offsetWidth / 5}% top`,
              },
            })
          : isIpad
          ? // min-width: 768px
            topics.forEach(topic => {
              gsap.from(topic, {
                translateY: '50%',
                opacity: 0,
                scrollTrigger: {
                  trigger: topic,
                  start: '-60% 80%',
                  end: '20% 80%',
                  scrub: 2,
                },
              })
            })
          : topics.forEach(topic => {
              // min-width:320px
              gsap.from(topic, {
                translateY: '50%',
                opacity: 0,
                scrollTrigger: {
                  trigger: topic,
                  start: '-45% 80%',
                  end: '10% 65%',
                  scrub: 2,
                },
              })
            })
      })
    },
    { scope: businessRef },
  )

  return (
    <>
      <div className={classes.main}>
        <section className={classes['main-vs']}>
          <div
            ref={context => {
              sectionRef.current[0] = context
            }}
            className={classes.inner}
          >
            <h2>메인 슬로건 문구 작성</h2>
          </div>
          <img
            ref={context => {
              sectionRef.current[1] = context
            }}
            src={require('../../assets/images/main/img_main_visual.png')}
            alt="메인 회사소개"
          />
          <div
            ref={context => {
              sectionRef.current[2] = context
            }}
            className={classes['mouse-icon']}
          >
            <span>Scroll</span>
            <i></i>
          </div>
        </section>
        <section
          ref={context => {
            sectionRef.current[3] = context
          }}
          className={`${classes['text-section']}`}
        >
          <div className={`${classes.inner} ${'box'}`}>
            <p>
              <strong>ELECOCEAN</strong>
            </p>
            <p>
              해양 기술 산업의 다양한 경험으로
              <br /> 미래형 해양기술을 선도합니다.
            </p>
          </div>
        </section>
        <section ref={businessRef} className={`${classes.business}`}>
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
                        <Link to={`/business/${item.en}`}>
                          <span>View more</span>
                          <div className={classes.icon}>
                            <LineArrow />
                          </div>
                        </Link>
                      </div>
                      <div className={classes['topic-img']}>
                        <img src={require(`../../assets/images/main/img_main_business_${item.id}.png`)} alt="1" />
                      </div>
                    </div>
                  </dd>
                )
              })}
            </dl>
          </div>
        </section>
        <section className={classes.major}>
          <div
            ref={context => {
              sectionRef.current[4] = context
            }}
            className={classes.inner}
          >
            <h3>주요실적</h3>
            <Responsive />
          </div>
        </section>
        <section className={`${classes.recruit}`}>
          <div className={classes.inner}>
            <div ref={context => (sectionRef.current[5] = context)} className={classes.box}>
              <div className={classes.left}>
                <dl>
                  <dt>
                    <h3>인재 채용</h3>
                    <p>일렉오션과 함께 성장할 소중한 인재를 기다립니다.</p>
                  </dt>
                  <dd>
                    <a href="/">
                      <h4>복지 문화</h4>
                      <i className={classes['icon-plus']}>
                        <Plus />
                      </i>
                    </a>
                  </dd>
                  <dd>
                    <a href="/">
                      <h4>채용 안내</h4>
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
                    <h3>채용 공고</h3>
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
        </section>
        <div className={classes['main-bg']}>
          <img src={require('../../assets/images/main/img_main_bg.png')} alt="" />
        </div>
      </div>
    </>
  )
}
export default Main
