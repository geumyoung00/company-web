import classes from './BoardTab.module.css'

const BoardTab = () => {
  return (
    <div className={classes['tabs']}>
      <ul>
        <li className={classes.active}>
          <a href="/">
            전체
            <i />
          </a>
        </li>
        <li>
          <a href="/">
            소프트웨어 개발
            <i />
          </a>
        </li>
        <li>
          <a href="/">
            해도제작
            <i />
          </a>
        </li>
        <li>
          <a href="/">
            위성사업
            <i />
          </a>
        </li>
        <li>
          <a href="/">
            해양예보방송
            <i />
          </a>
        </li>
        <li>
          <a href="/">
            연구사업
            <i />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default BoardTab
