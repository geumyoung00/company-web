import classes from '../MainSlide/MainSlide.module.css'

export const MainSlide = ({ seletedTopic }) => {
  return (
    <div className={classes['img-wrap']}>
      {seletedTopic ? (
        <img
          className={classes.selected}
          src={require(`../../assets/images/main/img_main_${seletedTopic}.png`)}
          alt={`${seletedTopic}`}
        />
      ) : (
        <img className={classes.selected} src={process.env.PUBLIC_URL + `images/main/img_main_si.png`} alt="si" />
      )}
    </div>
  )
}
