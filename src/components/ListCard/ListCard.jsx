import { useLocation } from 'react-router-dom'
import { ReactComponent as LineArrow } from '../../assets/svg/iconLineArrow.svg'
import classes from './ListCard.module.css'

const ListCard = () => {
  const location = useLocation()
  const { pathname } = location
  const path = pathname.split('/')[2]

  return (
    <div className={classes.item}>
      <div className={classes['default-item']}>
        <img src={require('../../assets/images/sub/performance/img_bg_sample.png')} alt="프로젝트" />
        <div className={classes['info-text']}>
          <dl>
            <dt>사업명 프로젝트명</dt>
            <dd>
              <strong>사업기간</strong>
              <span>2023년 4월 ~ 12월</span>
            </dd>
            <dd>
              <strong>사업내용</strong>
              <span>상세내용 작성하기</span>
            </dd>
          </dl>
        </div>
      </div>
      <a className={classes['href-item']} href={`/performance/${path}/detail`} alt="게시글 상세보기">
        <img src={require('../../assets/images/sub/performance/img_bg_sample.png')} alt="프로젝트" />
        <div className={classes['btn-move']}>
          <p className={classes.title}>사업명 프로젝트명</p>
          <i className={classes.more}>
            <LineArrow />
          </i>
        </div>
      </a>
    </div>
  )
}

export default ListCard
