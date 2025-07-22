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
  })

  useGSAP(
    () => {
      businessMm.add(viewPort, context => {
        let { isIpad, isDesktop } = context.conditions
        const topics = gsap.utils.toArray('dd')

        gsap.from('h3', {
          translateX: '-100%',
          opacity: 0,
          scrollTrigger: {
            trigger: 'h3',
            start: isIpad ? 'top bottom' : 'top center',
            end: isIpad ? 'center bottom' : 'center+=30% center',
            scrub: 2,
          },
        })

        if (isDesktop) {
          // min-width: 1280px
          gsap.from('dl', {
            opacity: 0,
            translateX: '30%',
            scrollTrigger: { trigger: 'dl', scrub: 2, start: '0 center', end: 'top+=20% center' },
          })

          gsap.to(topics, {
            xPercent: -100 * (topics.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: businessRef.current,
              end: `${document.querySelector('dl').offsetWidth} bottom`,
              pin: true,
              scrub: 1,
              snap: 1 / (topics.length - 1),
            },
          })
        } else if (isIpad) {
          // min-width: 768px
          topics.forEach(topic => {
            gsap.from(topic, {
              translateY: '50%',
              opacity: 0,
              scrollTrigger: {
                trigger: topic,
                start: '-60% center',
                end: '20% center',
                scrub: 2,
              },
            })
          })
        } else {
          topics.forEach(topic => {
            // min-width:320px
            gsap.from(topic, {
              translateY: '50%',
              opacity: 0,
              scrollTrigger: {
                trigger: topic,
                start: '-5% 75%',
                end: 'center 70%',
                scrub: 2,
              },
            })
          })
        }
      })
    },
    { scope: businessRef },
  )

  useGSAP(() => {
    sectionMm.add(viewPort, context => {
      let { isIpad, isDesktop } = context.conditions
      gsap.from(sectionRef.current[4], {
        translateY: '40%',
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current[4],
          start: isDesktop ? 'top-=35% center' : isIpad ? '-40% center' : '-50% center',
          end: isDesktop ? 'top center' : isIpad ? '16% center' : '20% center',
          scrub: 2,
          markers: true,
        },
      })

      gsap.from(sectionRef.current[5], {
        opacity: 0,
        translateY: '20%',
        scrollTrigger: {
          trigger: sectionRef.current[5],
          start: isDesktop ? 'top-=50% center' : 'top-=20% center+=10%',
          end: isDesktop ? 'top center' : 'top+=20% center+=10%',
          scrub: 2,
        },
      })
    })
  })

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
          <div className={`${classes.inner}`}>
            <h3>BUSINESS</h3>
            <dl className={`${classes.topics} pin`}>
              {NAV_ITEMS[1].dropdownItems.map(item => {
                return (
                  <dd key={item.id}>
                    <Link className={classes.topic} to={`/business/${item.en}`}>
                      <div className={classes.image}>
                        <img src={require(`../../assets/images/main/img_main_business_${item.id}.png`)} alt="1" />
                      </div>
                      <div className={classes.text}>
                        <p className={classes.number}>{item.id}</p>
                        <h4 className={classes.name}>{item.kr}</h4>
                        <p className={classes.desc}>{item.desc}</p>
                        <div className={classes.view}>
                          <span>View more</span>
                          <i className={classes.icon}>
                            <LineArrow />
                          </i>
                        </div>
                      </div>
                    </Link>
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
