import classes from '../common.module.css'
import style from './BusinessStyle.module.css'

export const Media = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.buesiness}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={`${classes['section-title']} ${style['section-title']}`}>해양예보방송</h3>
          <div className={style.description}>
            <p>
              고객과의 충분한 대화와 협의를 통해 요구사항을 파악하여 고객이 만족하는 시스템을 만들어가고 있습니다.
              <br />
              특히 해양분야, 공간정보분야에 대하여 많은 경험을 가지고 있으며 WEB시스템과 CS시스템에 대한 경험 또한두루
              갖추고 있습니다.
            </p>
          </div>
          <div className={style.lists}>
            <h4>주요업무</h4>
            <ul>
              <li>
                <div className={style['text-box']}>
                  <strong>주요업무 1</strong>
                  <span>주요업무1에 대한 간략한 설명문구</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>주요업무 1</strong>
                  <span>주요업무2에 대한 간략한 설명문구</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg02.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>주요업무 1</strong>
                  <span>주요업무3에 대한 간략한 설명문구</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg03.png')} alt="주요업무" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
