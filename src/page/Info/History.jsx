import { useRef, useState, useEffect } from 'react'
import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const History = () => {
  const [activeIndexes, setActiveIndexes] = useState([])
  const listRef = useRef(null)

  useEffect(() => {
    const elements = listRef.current.querySelectorAll('dl')

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      elements.forEach((dl, index) => {
        const rect = dl.getBoundingClientRect()
        if (rect.bottom <= windowHeight && 480 > rect.top) {
          setActiveIndexes(prevIndexes => [...prevIndexes, index])
        } else {
          setActiveIndexes(prevIndexes => prevIndexes.filter(i => i !== index))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${classes['contents-wrap']} ${style.history}`}>
      <div className={classes.inner}>
        <section>
          <p className={`${classes['section-title']} ${style['section-title']}`}>history</p>
          <h3>
            <strong>일렉오션</strong>이 걸어온 길
          </h3>
          <div className={style.lists} ref={listRef}>
            <div className={style.box}>
              <div className={style.img}>
                <p className={style['box-title']}>2020 ~ 현재</p>
                <img src={require('../../assets/images/sub/info/img_history_01.png')} alt="업무 중인 회사원들" />
              </div>
              <div className={style.years}>
                <dl className={`${style.year} ${activeIndexes.includes(0) ? style.active : ''}`}>
                  <dt>2023</dt>
                  <dd>
                    <strong>01</strong>
                    청년친화강소기업 선정(고용노동부)
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(1) ? style.active : ''}`}>
                  <dt>2022</dt>
                  <dd>
                    <strong>06</strong>
                    부산광역시 우수기업(부산광역시)
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(2) ? style.active : ''}`}>
                  <dt>2021</dt>
                  <dd>
                    <strong>04</strong>
                    서비스 강소기업(부산광역시)
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(3) ? style.active : ''}`}>
                  <dt>2020</dt>
                  <dd>
                    <strong>06</strong>
                    부산광역시 우수기업(부산광역시)
                  </dd>
                </dl>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.img}>
                <p className={style['box-title']}>2015 ~ 2019</p>
                <img src={require('../../assets/images/sub/info/img_history_02.png')} alt="의기투합하는 모습" />
              </div>
              <div className={style.years}>
                <dl className={`${style.year} ${activeIndexes.includes(4) ? style.active : ''}`}>
                  <dt>2019</dt>
                  <dd>
                    <strong>06</strong>
                    부산대표 창업기업 선정(부산광역시)
                  </dd>
                  <dd>
                    <strong></strong>
                    전기 사업자 등록(전기자동차 충전사업)
                  </dd>
                  <dd>
                    <strong>04</strong>
                    강소기업 선정
                  </dd>
                  <dd>
                    <strong>02</strong>
                    엔지니어링사업자(해양) 등록
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(5) ? style.active : ''}`}>
                  <dt>2018</dt>
                  <dd>
                    <strong>12</strong>
                    인재육성형 중소기업 선정
                  </dd>
                  <dd>
                    <strong>07</strong>
                    ISO-9001 : 2005
                  </dd>
                  <dd>
                    <strong>03</strong>
                    수로조사업 등록
                  </dd>
                  <dd>
                    <strong>02</strong>
                    벤처기업등록
                  </dd>
                  <dd>
                    <strong>01</strong>
                    초경량 비행 장치 사용사업 등록
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(6) ? style.active : ''}`}>
                  <dt>2017</dt>
                  <dd>
                    <strong>06</strong>
                    부산시해운대구 본점 이전
                  </dd>
                  <dd>
                    <strong>05</strong>
                    기업부설연구소 설립
                  </dd>
                  <dd>
                    <strong>01</strong>
                    해도 제작업 등록
                  </dd>
                  <dd>
                    <strong></strong>
                    주식회사 일렉오션 상호 변경
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(7) ? style.active : ''}`}>
                  <dt>2016</dt>
                  <dd>
                    <strong>04</strong>
                    소프트웨어 사업자 등록
                  </dd>
                </dl>
                <dl className={`${style.year} ${activeIndexes.includes(8) ? style.active : ''}`}>
                  <dt>2015</dt>
                  <dd>
                    <strong>10</strong>
                    주식회사 일렉소프트 설립
                  </dd>
                </dl>
              </div>
            </div>
            <i className={style.line} />
          </div>
        </section>
      </div>
    </div>
  )
}
