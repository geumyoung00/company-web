import classes from '../common.module.css'
import style from './BusinessStyle.module.css'

export const Chart = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.buesiness}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={`${classes['section-title']} ${style['section-title']}`}>해도 제작</h3>
          <div className={style.description}>
            <p>
              국가에서 인정한 해도제작업체(등록번호 제21호)로서, 다양한 종류의 종이해도와 전자해도의 제작 업무를
              수행하고 있습니다.
            </p>
            <p></p>
          </div>
          <div className={style.lists}>
            <h4>주요업무</h4>
            <ul>
              <li>
                <div className={style['text-box']}>
                  <strong>종이해도</strong>
                  <span>바다의 지형, 수심, 위험물 등 심볼로 표현</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg02.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>전자해도</strong>
                  <span>종이해도와 동일한 정보를 전자해도로 제작</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>주제도</strong>
                  <span></span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
