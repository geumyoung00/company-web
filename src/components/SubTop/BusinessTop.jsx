import NavBar from '../NavBar/NavBar'
import classes from './SubTop.module.css'

const BusinessTop = () => {
  return (
    <section className={`${classes['nav']} ${classes.business}`}>
      <div className={classes.inner}>
        <h2>페이지 타이을</h2>
        <NavBar />
      </div>
    </section>
  )
}

export default BusinessTop
