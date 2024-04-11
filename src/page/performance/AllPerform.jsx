import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import ListCard from '../../components/ListCard/ListCard'
import BoardTab from '../../components/BoardTab/BoardTab'
import { PERFORMANCE_ITEMS } from '../../components/constants/PERFORMANCE_ITEMS'
import { useState } from 'react'

export const AllPerform = () => {
  const [filterItems, setFilterItems] = useState(PERFORMANCE_ITEMS)
  function filterItemHandler(tabName) {
    if (tabName === 'all') {
      setFilterItems(PERFORMANCE_ITEMS)
    } else {
      const items = PERFORMANCE_ITEMS.filter(item => item.labelEn === tabName)
      setFilterItems(items)
    }
  }

  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['all-perform']}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={'hide'}>주요실적</h3>
          <BoardTab filterItemHandler={filterItemHandler} />
          <div className={style.lists}>
            {filterItems.map(item => (
              <ListCard item={item} key={item.id} items={filterItems} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
