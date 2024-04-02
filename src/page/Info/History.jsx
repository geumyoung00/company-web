import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const History = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.history}`}>
      <div className={classes.inner}>
        <section>
          <p className={classes['section-title']}>history</p>
          <div className={style['title-box']}>
            <h3>
              <strong>일렉오션</strong>이 걸어온 길
            </h3>
          </div>
          <div className={style.lists}>
            <ul>
              <li></li>
            </ul>
          </div>
        </section>
        <div className={style['bg-img']}></div>
      </div>
    </div>
  )
}
