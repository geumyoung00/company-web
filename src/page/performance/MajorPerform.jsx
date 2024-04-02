import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import ListCard from '../../components/ListCard/ListCard'

export const MajorPerform = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['major']}`}>
      <div className={classes.inner}>
        <section>
          <h3 className="hide">주요실적</h3>
          <div className={style.lists}>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </section>
      </div>
    </div>
  )
}
