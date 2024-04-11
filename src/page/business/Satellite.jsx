import classes from '../common.module.css'
import style from './BusinessStyle.module.css'

export const Satellite = () => {
  return (
    <div className={`${classes['contents-wrap']} ${style.buesiness}`}>
      <div className={classes.inner}>
        <section>
          <h3 className={`${classes['section-title']} ${style['section-title']}`}>해양 위성 시스템</h3>
          <div className={style.description}>
            <p>
              해양위성센터의 기본 시설, 인프라(네트워크, 하드웨어, 소프트웨어), 인력운영 및 시스템에 대한 ISP를 수립하고
              운영 프로세스를 구축하여 현재까지 위성정보 수집·관리·배포 시스템을 구축 및 운영을 지원하고 있습니다.
            </p>
          </div>
          <div className={style.lists}>
            <h4>주요업무</h4>
            <ul>
              <li>
                <div className={style['text-box']}>
                  <strong>위성영상 활용 솔루션</strong>
                  <span>위성영상 전처리 기술 개발 및 활용</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg01.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>위성영상 활용 연구</strong>
                  <span>원격탐사, 해양·기상, 기후변화, 재해재난 등</span>
                </div>
                <img src={require('../../assets/images/sub/business/img_si_bg02.png')} alt="주요업무" />
              </li>
              <li>
                <div className={style['text-box']}>
                  <strong>해양위성 인프라 구축</strong>
                  <span>해양위성센터의 시스템 관리 및 운영 지원</span>
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
