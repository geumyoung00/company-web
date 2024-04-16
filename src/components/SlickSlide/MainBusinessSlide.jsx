import { useRef } from 'react'
import classes from './MainBusinessSlide.module.css'
import { useEffect } from 'react'

export const MainBusinessSlide = ({ seletedTopic }) => {
  const imgRef = useRef(null)
  console.log(seletedTopic)
  useEffect(() => {
    const elements = imgRef.current.querySelectorAll('img')
  }, [seletedTopic])

  return (
    // <>
    //   <div className={classes['img-wrap']}>
    //     {seletedTopic ? (
    //       <img
    //         className={classes.selected}
    //         src={require(`../../assets/images/main/img_main_${seletedTopic}.png`)}
    //         alt={`${seletedTopic}`}
    //       />
    //     ) : (
    //       <img src={require(`../../assets/images/main/img_main_si.png`)} alt="si" />
    //     )}
    //   </div>
    // </>

    <div className={classes['img-wrap']} ref={imgRef}>
      <img src={require(`../../assets/images/main/img_main_si.png`)} alt="si" />
      <img src={require(`../../assets/images/main/img_main_chart.png`)} alt="chart" />
      <img src={require(`../../assets/images/main/img_main_media.png`)} alt="media" />
    </div>
  )
}
