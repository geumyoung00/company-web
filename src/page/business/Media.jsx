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
              해양조사 정보와 예보정보를 이용한 해양예보방송을 운영함으로써 다양한 해양활동에 도움이 될 수 있도록
              지원하고 있습니다. <br />
              다양한 영상을 제작하고 특히, 해양에 관련된 양상을 제작하여 해양산업의 활성화를 위해 노력하고 있습니다.
            </p>
          </div>
          <div className={style.lists}>
            <h4>주요업무</h4>
            <ul>
              <li>
                <div className={style['text-box']}>
                  <strong>해양예보방송 운영</strong>
                  <span>더욱 친근한 해양예보를 위한 기획 및 홍보</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>해양예보방송 제작</strong>
                  <span>보다 쉬운 정보제공을 위한 방송 제작</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg02.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>SHORT 영상 제작</strong>
                  <span>변화하는 미디어 환경에 따른 콘텐츠 제공</span>
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
