import classes from '../common.module.css'
import style from './Recruitment.module.css'

export const RecruitmentInfo = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.info} }`}>
      <div className={classes.inner}>
        <section className={style['section-top']}>
          <h3>
            <strong>일렉오션</strong>과 함께 성장할
            <br />
            <strong> 소중한 인재</strong>를 기다립니다.
          </h3>
          <div className={style.img}>
            <img src={require('../../assets/images/sub/recruitment/img_recruite_info.png')} alt="회의하는 직장인" />
          </div>
          <div className={style['culture']}>
            <h4>기업문화</h4>
            <ul className={style.lists}>
              <li className={style.item}>
                <h5>기업문화1</h5>
                <p>공백 포함 60 ~ 80자 내외의 기업문화1에 대한 상세문구를 작성 4줄까지 표출 가능</p>
              </li>
              <li className={style.item}>
                <h5>기업문화2</h5>
                <p>공백 포함 60 ~ 80자 내외의 기업문화2에 대한 상세문구를 작성 4줄까지 표출 가능</p>
              </li>
              <li className={style.item}>
                <h5>기업문화3</h5>
                <p>공백 포함 60 ~ 80자 내외의 기업문화3에 대한 상세문구를 작성 4줄까지 표출 가능</p>
              </li>
            </ul>
          </div>
          <div className={style.process}>
            <h4>채용과정</h4>
            <ul className={style.steps}>
              <li className={style.step}>
                <p className={style.index}>step 01</p>
                <h5>서류전형</h5>
                <p>서류전형에 대한 설명을 50자 이내로 작성해주세요. </p>
              </li>
              <li className={style.step}>
                <p className={style.index}>step 02</p>
                <h5>1차 실무면접</h5>
                <p>1차 실무면접에 대한 설명을 50자 이내로 작성해주세요. </p>
              </li>
              <li className={style.step}>
                <p className={style.index}>step 03</p>
                <h5>2차 임원면접</h5>
                <p>2차 임원면접에 대한 설명을 50자 이내로 작성해주세요. </p>
              </li>
              <li className={style.step}>
                <p className={style.index}>step 04</p>
                <h5>최종 합격</h5>
                <p>최종 합격에 대한 설명을 50자 이내로 작성해주세요. </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
