import { useLocation } from 'react-router-dom'
import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import BoardTab from '../../components/BoardTab/BoardTab'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'

export const PerformDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { pathname, state } = location
  const path = pathname.split('/')[2]
  const { items } = state
  const item = items.find(item => item.id === id)

  let findItemIdx = items.findIndex(item => item.id === id)
  let navigateItem = {}
  const navigateHandler = state => {
    if (state === 'prev') {
      findItemIdx--
      navigateItem = items[findItemIdx]
      if (!navigateItem) {
        alert('처음 글입니다.')
        navigate(`/performance/${path}`)
      } else {
        navigate(`/performance/${path}/${navigateItem.id}`)
      }
    } else if (state === 'next') {
      findItemIdx++
      navigateItem = items[findItemIdx]
      if (findItemIdx > items.length - 1) {
        alert('마지막 글입니다.')
        navigate(`/performance/${path}`)
      } else {
        navigate(`/performance/${path}/${navigateItem.id}`)
      }
    } else {
      navigate(`/performance/${path}`)
    }
  }

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
                {item.title}
                <span>{item.period}</span>
              </p>
              <div className={style.table}>
                <dl>
                  <dt>사업부문</dt>
                  <dd>{item.labelKr}</dd>
                </dl>
                <dl>
                  <dt>발주처</dt>
                  <dd>{item.content.client}</dd>
                </dl>
                <dl>
                  <dt>추진 업무</dt>
                  <dd>{item.content.work}</dd>
                </dl>
                <dl>
                  <dt>기술</dt>
                  <dd>{item.content.skill}</dd>
                </dl>
              </div>
              <ul>
                <li>
                  <Link
                    className={style['btn-list']}
                    onClick={() => {
                      navigateHandler('prev')
                    }}
                    state={{ items: items }}
                  >
                    <ArrowHead />
                    이전 글
                  </Link>
                </li>
                <li>
                  <Link
                    className={style['btn-list']}
                    onClick={() => {
                      navigateHandler()
                    }}
                  >
                    목록으로
                  </Link>
                </li>
                <li>
                  <Link
                    className={style['btn-list']}
                    onClick={() => {
                      navigateHandler('next')
                    }}
                    state={{ items: items }}
                  >
                    다음 글<ArrowHead />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
