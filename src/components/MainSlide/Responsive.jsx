import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import classes from './Responsive.module.css'
import { ReactComponent as LineArrow } from '../../assets/svg/iconSelectLineArrow.svg'

const Responsive = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={`${['slider-container']} ${classes.carousel}`}>
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
      </Slider>
    </div>
  )
}

export default Responsive
