import classes from '../common.module.css'
import style from './PerformanceStyle.module.css'
import ListCard from '../../components/ListCard/ListCard'
import BoardTab from '../../components/BoardTab/BoardTab'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PERFORMANCE_ITEMS } from './../../components/constants/PERFORMANCE_ITEMS'

export const AllPerform = () => {
  const [filterItems, setFilterItems] = useState(PERFORMANCE_ITEMS)
  const params = useParams()
  const { tab } = params

  useEffect(() => {
    if (!tab) setFilterItems(PERFORMANCE_ITEMS)
    else {
      const items = PERFORMANCE_ITEMS.filter(item => item.labelEn === tab)
      setFilterItems(items)
    }
  }, [tab])

  return (
    <div className={`${classes['contents-wrap']} ${style.performance}  ${style['all-perform']}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={'hide'}>주요실적</h3>
          <BoardTab />
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
