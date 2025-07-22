import classes from '../common.module.css'
import style from './Recruitment.module.css'
import { RECRUIT_ITEMS } from '../../components/constants'
import BoardTab from '../../components/BoardTab/BoardTab'
import { ReactComponent as Plus } from '../../assets/svg/iconPlus.svg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const RecruitmentNotice = () => {
  const [filterItems, setFilterItems] = useState(RECRUIT_ITEMS)
  const params = useParams()
  const { tab } = params

  useEffect(() => {
    if (!tab) setFilterItems(RECRUIT_ITEMS)
    else {
      const items = RECRUIT_ITEMS.filter(item => item.en === tab)
      setFilterItems(items)
    }
  }, [tab])

  return (
    <div className={`${classes['contents-wrap']} ${style.notice} }`}>
      <div className={classes.inner}>
        <section>
          <p className={`${classes['section-title']} ${style['section-title']}`}>Recruitment</p>
          <BoardTab />
          <div className={style.lists}>
            {filterItems.map(item => {
              return (
                <div key={item.id} className={`${style.item} ${item.status ? '' : style.disabled}`}>
                  <a href={item.status ? item.link : null} target={item.status ? '_parent' : ''}>
                    <p className={style.label}>{item.status ? '모집 중' : '모집 마감'}</p>
                    <p className={style.title}>{item.title}</p>
                    <ul>
                      <li>
                        <strong>모집기간</strong>
                        {`${item.startDate} ~ ${item.endDate}`}
                      </li>
                      <li>
                        <strong>모집인원</strong>
                        {item.personnel} 명
                      </li>
                      <li>
                        <strong>지원자격</strong>
                        {item.capa}
                      </li>
                    </ul>
                    <div className={style.hover}>
                      <i className={style.icon}>
                        <Plus />
                      </i>
                      <p>바로가기</p>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
