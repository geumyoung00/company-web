import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const Greeting = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.greeting}`}>
      <div className={classes.inner}>
        <section>
          <p className="hide">GREETING</p>
          <div className={style.left}>
            <h3>
              친환경 토털 솔루션 & 서비스
              <br />
              <strong>
                <span>Elec</span>Ocean
              </strong>
            </h3>
            <hr />
            <div className={style['greeting-text']}>
              <p>
                일렉오션은 친환경적 정보기술 인프라 적용과 종합적 자연주의, 기술적 실용주의, 생태적 친환경 에너지가
                순환하는 쾌적한 공간이라는 균형과 조화를 통해 고객의 기대를 뛰어넘는 자연 접근적 토털 정보기술을 제공할
                입니다. 고객의 니즈를 삶의 정보기술로 전이 시키는데 관련된 모든 자원을 활용하여 소통시키는 정보기술
                인프라의 추구가 바로 일렉오션의 이념이기 때문입니다.
              </p>
              <p>
                이제 일렉오션는 스마트한 고객에게 진정성과 편리성으로 소통하는 기업이 될 것 입니다. 환경 친화적인
                솔루션을 설계하는 것은 단순한 IT 제품의 제공이 아닌, 고객이 처한 상황과 활용 방식을 기술 구조로
                재정의하고 소프트웨어와 하드웨어로 지원하는 것이기 때문입니다.{' '}
              </p>
              <p>
                끊임없는 시장 조사와 연구개발을 통해 환경에 대한 재해석, 사회문화와 기술트렌드, 소비자 라이프 스타일의
                변화를 직시하며 고객의 생활공간 전반에 새로운 가치를 제공하는 토털 솔루션 기업으로써, 고객의 감성이라는
                파동에 공명하는 깊이 있는 기업으로 성장할 것을 약속드립니다.
              </p>
              <div className={style.signature}>
                <p>㈜일렉오션</p>
                <p>대표이사</p>
                <p>
                  <strong>정 일 화</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={style.right}></div>
        </section>
      </div>
    </div>
  )
}
