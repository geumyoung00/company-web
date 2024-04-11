import classes from '../common.module.css'
import style from './Recruitment.module.css'

export const Welfare = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.welfare} }`}>
      <div className={classes.inner}>
        <section className={classes.grid}>
          <h3>
            직원이 행복한 일터를 위해 <br />
            <strong>일렉오션</strong>은 항상 노력합니다.
          </h3>
          <hr />
          <div className={style.lists}>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare01.png')} alt="시차 출퇴근제" />
              </div>
              <h4>시차 출퇴근제</h4>
              <p>개인스케줄에 맞춰 출근시간 자율적으로 선택 할 수 있습니다.</p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare02.png')} alt="자기계발비" />
              </div>
              <h4>자기계발비 지원</h4>
              <p>
                제한없이 자유롭게 사용 가능
                <br />
                (반기당 20만원)
              </p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare03.png')} alt="리프레시 휴가" />
              </div>
              <h4>리프레시 휴가</h4>
              <p>
                자유롭게 사용할 수 있는 휴가 지원
                <br />
                (3년 만근 시 15일 지급)
              </p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare04.png')} alt="업무 도서 지원" />
              </div>
              <h4>업무 도서 지원</h4>
              <p>업무능령 향상을 위한 도서구매 지원</p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare05.png')} alt="모든 식비 지원" />
              </div>
              <h4>모든 식비 지원</h4>
              <p>
                점심, 저녁 식대 지원
                <br />
                (석식은 야근 발생 시)
              </p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare06.png')} alt="야근시 교통비 지원" />
              </div>
              <h4>야근시 교통비 지원</h4>
              <p>택시비용 또는 법인차량 제공</p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare07.png')} alt="간식 및 음료 제공" />
              </div>
              <h4>간식 및 음료 제공</h4>
              <p>신상 간식과 음료, 캡슐커피까지 상시 대기</p>
            </div>
            <div className={style.item}>
              <div className={style.img}>
                <img src={require('../../assets/images/sub/recruitment/img_welfare08.png')} alt="자율복장 근무" />
              </div>
              <h4>자율복장 근무</h4>
              <p>옷이 편해야 일도 잘 된다!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
