import classes from '../common.module.css'
import style from './BusinessStyle.module.css'

export const ResearchDevelopment = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.buesiness}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={`${classes['section-title']} ${style['section-title']}`}>연구 개발 사업</h3>
          <div className={style.description}>
            <p>
              기업부설 연구소 운영을 통해 대용량과학데이터, 빅데이터, 지능형 CCTV 등 다양한 분야에서 연구개발을 수행하고
              있으며, 연구개발과제 및 자체 프로젝트를 통해 솔루션을 개발하고 특허출원 및 등록, 공인인증시험성적,
              기술이전 등 사업화를 위해 노력하고 있습니다.
            </p>
          </div>
          <div className={style.lists}>
            <h4>주요업무</h4>
            <ul>
              <li>
                <div className={style['text-box']}>
                  <strong>빅데이터 연구</strong>
                  <span>기후변화 분석을 위한 해양분야 빅데이터 분석</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>인공지능 연구</strong>
                  <span>연안지역 CCTV 영상을 활용한 AI 솔루션 개발</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg02.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>융함데이터 연구</strong>
                  <span>예측모델, 실측데이터 등을 활용한 데이터 융합</span>
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
