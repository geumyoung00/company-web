import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const Organization = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.organization}`}>
      <div className={classes.inner}>
        <section>
          <p className={classes['section-title']}>organization</p>
          <h3>
            <strong>일렉오션</strong>이 걸어온 길
          </h3>
        </section>
      </div>
    </div>
  )
}
