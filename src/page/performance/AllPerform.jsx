import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import ListCard from '../../components/ListCard/ListCard'
import BoardTab from '../../components/BoardTab/BoardTab'

export const AllPerform = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['all-perform']}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={'hide'}>주요실적</h3>
          <BoardTab />
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
