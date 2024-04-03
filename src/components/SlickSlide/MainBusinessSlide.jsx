import classes from './MainBusinessSlide.module.css'

export const MainBusinessSlide = ({ seletedTopic }) => {
  return (
    <div className={classes['img-wrap']}>
      {seletedTopic ? (
        <img
          className={classes.selected}
          src={require(`../../assets/images/main/img_main_${seletedTopic}.png`)}
          alt={`${seletedTopic}`}
        />
      ) : (
        <img className={classes.selected} src={require(`../../assets/images/main/img_main_si.png`)} alt="si" />
      )}
    </div>
  )
}
