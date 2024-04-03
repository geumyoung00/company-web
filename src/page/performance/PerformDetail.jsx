import { useLocation } from 'react-router-dom'
import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import BoardTab from '../../components/BoardTab/BoardTab'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'

export const PerformDetail = () => {
  const location = useLocation()
  const { pathname } = location
  const path = pathname.split('/')[2]

  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['all-perform']}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={'hide'}>실적 상세 정보</h3>
          {path === 'all' ? <BoardTab /> : ''}
          <div className={style['detail-contents']}>
            <div className={style.img}></div>
            <div className={style.contents}>
              <p className={style.title}>
                사업 프로젝트명
                <span>2022년</span>
              </p>
              <div className={style.table}>
                <dl>
                  <dt>구분</dt>
                  <dd>상세내용</dd>
                </dl>
                <dl>
                  <dt>구분</dt>
                  <dd>상세내용</dd>
                </dl>
                <dl>
                  <dt>구분</dt>
                  <dd>상세내용</dd>
                </dl>
                <dl>
                  <dt>구분</dt>
                  <dd>상세내용</dd>
                </dl>
              </div>
              <ul className={style['page-btn']}>
                <li className={style.prev}>
                  <a href="/">
                    <ArrowHead />
                    이전 글
                  </a>
                </li>
                <li>
                  <a href="/">목록으로</a>
                </li>
                <li className={style.next}>
                  <a href="/">
                    다음 글<ArrowHead />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
