import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import ListCard from '../../components/ListCard/ListCard'
import { PERFORMANCE_ITEMS } from '../../components/constants/PERFORMANCE_ITEMS'

export const MajorPerform = () => {
  const majorItems = PERFORMANCE_ITEMS.filter(item => item.type === 'major')

  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['major']}`}>
      <div className={`${classes.inner} ${style['inner-wrap']}`}>
        <section>
          <h3 className="hide">주요실적</h3>
          <div className={style.lists}>
            {majorItems.map(item => (
              <ListCard item={item} key={item.id} items={majorItems} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
