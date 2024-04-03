import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const Organization = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.organization}`}>
      <div className={classes.inner}>
        <section>
          <p className={classes['section-title']}>organization</p>
          <div className={style.chart}>
            <div className={style.row}>
              <div className={`${style.box} ${style.primary}`}>
                <div className={style.text}>회 장</div>
              </div>
            </div>
            <div className={style.row}>
              <div className={`${style.box} ${style.secondary}`}>
                <div className={style.text}>본 부 장</div>
              </div>
              <div className={`${style.box} ${style.secondary}`}>
                <div className={style.text}>대 표 이 사</div>
              </div>
              <div className={style.box}>
                <div className={style.text}>기업부설연구소</div>
              </div>
            </div>
            <div className={`${style.row} ${style.teams}`}>
              <div className={style.box}>
                <div className={style.text}>경영관리팀</div>
              </div>
              <div className={style.box}>
                <div className={style.text}>미디어팀</div>
              </div>
              <div className={style.box}>
                <div className={style.text}>위성팀</div>
              </div>
            </div>
            <div className={`${style.row} ${style.teams}`}>
              <div className={style.box}>
                <div className={style.text}>해도제작팀</div>
              </div>
              <div className={style.box}>
                <div className={style.text}>F/E인프라팀</div>
              </div>
              <div className={style.box}>
                <div className={style.text}>S/W개발팀</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
