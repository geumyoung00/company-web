import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import classes from './MainPerfomanceSlide.module.css'
import { ReactComponent as LineArrow } from '../../assets/svg/iconLineArrow.svg'
import { ReactComponent as ArrowHead } from '../../assets/svg/iconSelecArrowHead.svg'

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className={`${classes['carousel-arrow']} ${classes.prev}`} onClick={onClick}>
      {' '}
      <i>
        <span className="hide">이전</span>
        <ArrowHead />
      </i>
    </div>
  )
}

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className={`${classes['carousel-arrow']} ${classes.next}`} onClick={onClick}>
      <i>
        <span className="hide">다음</span>
        <ArrowHead />
      </i>
    </div>
  )
}

const Responsive = () => {
  var settings = {
    responsive: [
      {
        breakpoint: 480,
        settings: {
          swipe: false,
          touchMove: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 4000,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }

  return (
    <div className={`${['slider-container']} ${classes.carousel} main-performance`}>
      <Slider {...settings}>
        <div className={classes['item']}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
        <div className={classes['item']}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
        <div className={classes['item']}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
        <div className={classes['item']}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
        <div className={`${classes['item']} ${classes.last}`}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
        <div className={`${classes['item']} ${classes.last}`}>
          <div className={classes.inner}>
            <div className={classes['item-text']}>
              <h4>주요실적 프로젝트</h4>
              <p>주요실적 프로젝트에 대한 간략한 설명 한 줄</p>
              <a className={classes.more} href="/">
                <span>View more</span>
                <div className={classes.icon}>
                  <LineArrow />
                </div>
              </a>
            </div>
            <div className={classes['item-img']}>
              <img src={require('../../assets/images/main/img_main_swipe_01.png')} alt="주요실적 프로젝트" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Responsive
