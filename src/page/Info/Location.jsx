import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const Location = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.location}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={`${classes['section-title']} ${style['title']}`}>location</h3>
          <div className={style.wrap}>
            <div className={style.map}></div>
            <div className={style['info-box']}>
              <p>㈜일렉오션</p>
              <dl>
                <dt>주소</dt>
                <dd>부산광역시 해운대구 센텀동로 35 센텀SH밸리 308호</dd>
              </dl>
              <dl>
                <dt>연락처</dt>
                <dd>
                  <strong>Tel</strong>
                  <span>070-8228-8116</span>
                </dd>
                <dd>
                  <strong>FAX</strong>
                  <span>070-4369-4080</span>
                </dd>
              </dl>
              <dl>
                <dt>교통</dt>
                <dd>
                  <strong>지하철</strong>
                  <span>부산 2호선 센텀시티역 하차 도보 10분 </span>
                </dd>
                <dd>
                  <strong>버스</strong>
                  <span>동해선 백스코역 하차 후 도보 10분</span>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
