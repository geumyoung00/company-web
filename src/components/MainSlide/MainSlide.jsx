import classes from '../MainSlide/MainSlide.module.css'

export const MainSlide = ({ seletedTopic }) => {
  return (
    <div className={classes.carousel}>
      <img className={classes.selected} src={process.env.PUBLIC_URL + 'images/main/img_main_si.png'} />
      <img src={process.env.PUBLIC_URL + 'images/main/img_main_chart.png'} />
    </div>
  )
}
