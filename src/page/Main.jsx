import classes from './Main.module.css'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../components/constants'
import { MainBusinessSlide } from '../components/SlickSlide/MainBusinessSlide'
import { ReactComponent as Plus } from '../assets/svg/iconPlus.svg'
import { useState } from 'react'
import Responsive from '../components/SlickSlide/MainPerfomanceSlide'

const Main = () => {
  const [seletedTopic, setSelectedTopic] = useState('')
  const onMouseEnter = path => {
    setSelectedTopic(path)
  }

  return (
    <div className={classes.main}>
      <section id="mainVs" className={classes.main_vs}>
        <div className={classes.inner}>
          <h2>캐치프라이즈 문구 작성하기</h2>
        </div>
        <img src={require('../assets/images/main/img_main_visual.png')} alt="메인 회사소개" />
      </section>
      <section className={`${classes['h-auto']} ${classes['main-text-section']}`}>
        <div className={classes.inner}>
          <p>
            <strong>ELECOCEAN</strong>
          </p>
          <p>
            일렉오션은 다양한 경험을 보유한 해양전문기업으로
            <br />더 나은 미래형 해양기술을 선도합니다.
          </p>
        </div>
      </section>
      <section className={classes.business}>
        <div className={classes.inner}>
          <h3>BUSINESS</h3>
          <hr />
          <dl className={classes.topics}>
            {NAV_ITEMS[1].dropdownItems.map(item => {
              return (
                <dd key={item.id}>
                  <Link
                    to={`/business/${item.en}`}
                    className={`${classes['topic-box']}`}
                    onMouseEnter={onMouseEnter.bind(null, item.en)}
                  >
                    <div className={classes.docker}>
                      <p>{item.id}</p>
                      <p className={classes['hover-hide']}>{item.id}</p>
                      <i />
                    </div>
                    <div className={classes.topic}>
                      <h4>{item.kr}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </Link>
                </dd>
              )
            })}
          </dl>
          <div className={classes['topic-img']}>
            <MainBusinessSlide seletedTopic={seletedTopic} />
          </div>
        </div>
      </section>
      <section className={classes.major}>
        <div className={classes.inner}>
          <h3>주요실적</h3>
          <Responsive />
        </div>
      </section>
      <section className={`${classes.recruit}`}>
        <div className={classes.inner}>
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
      </section>
      <div className={classes['main-bg']}>
        <img src={require('../assets/images/main/img_main_bg.png')} alt="" />
      </div>
    </div>
  )
}

export default Main
