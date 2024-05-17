import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import classes from './MainPerfomanceSlide.module.css'
import { ReactComponent as LineArrow } from '../../assets/svg/iconLineArrow.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={`${classes['carousel-arrow']} ${classes.next}`} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={`${classes['carousel-arrow']} ${classes.prev}`} onClick={onClick} />
}

const Responsive = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 2000,
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
                <span>자세히 보기</span>
                <LineArrow />
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
                <span>자세히 보기</span>
                <LineArrow />
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
                <span>자세히 보기</span>
                <LineArrow />
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
                <span>자세히 보기</span>
                <LineArrow />
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
                <span>자세히 보기</span>
                <LineArrow />
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
                <span>자세히 보기</span>
                <LineArrow />
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
