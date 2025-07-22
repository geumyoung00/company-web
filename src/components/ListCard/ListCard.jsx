import { useLocation, useParams } from 'react-router-dom'
import { ReactComponent as LineArrow } from '../../assets/svg/iconLineArrow.svg'
import classes from './ListCard.module.css'
import { Link } from 'react-router-dom'

const ListCard = ({ item, items }) => {
  const location = useLocation()
  const { pathname } = location
  const path = pathname.split('/')[2]

  const params = useParams()
  const { tab } = params

  return (
    <div className={classes.item}>
      <div className={classes['default-item']}>
        <img src={require('../../assets/images/sub/performance/img_bg_sample.png')} alt="프로젝트" />
        <div className={classes['info-text']}>
          <dl>
            <dt>{item.title}</dt>
            <dd>
              <strong>사업기간</strong>
              <span>{item.period}</span>
            </dd>
            <dd>
              <strong>사업내용</strong>
              <span>상세내용 작성하기</span>
            </dd>
          </dl>
        </div>
      </div>
      <Link
        className={classes['href-item']}
        to={!tab ? `/performance/${path}/detail/${item.id}` : `/performance/${path}/${tab}/detail/${item.id}`}
        state={{ items: items }}
        alt="게시글 상세보기"
      >
        <img src={require('../../assets/images/sub/performance/img_bg_sample.png')} alt="프로젝트" />
        <div className={classes['btn-move']}>
          <p className={classes.title}>사업명 프로젝트명</p>
          <i className={classes.more}>
            <LineArrow />
          </i>
        </div>
      </Link>
    </div>
  )
}

export default ListCard
