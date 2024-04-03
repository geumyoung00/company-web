import classes from '../common.module.css'
import style from './InfoStyle.module.css'

export const History = () => {
  document.addEventListener('scroll', event => {})
  onscroll = () => {}
  return (
    <div className={`${classes['contents-wrap']} ${style.history}`}>
      <div className={classes.inner}>
        <section className={classes.grid}>
          <p className={classes['section-title']}>history</p>
          <div className={style['title-box']}>
            <h3>
              <strong>일렉오션</strong>이<br /> 걸어온 길
            </h3>
            <ul className={style['img-lists']}>
              <li>
                <img src={require('../../assets/images/sub/info-history/img_history_01.png')} alt="회의하는 직장인" />
              </li>
              <li>
                <img
                  src={require('../../assets/images/sub/info-history/img_history_02.png')}
                  alt="마린시티와 광안대교 전경"
                />
              </li>
              <li>
                <img
                  src={require('../../assets/images/sub/info-history/img_history_03.png')}
                  alt="회의 중 책상위의 서류들"
                />
              </li>
              <li>
                <img src={require('../../assets/images/sub/info-history/img_history_04.png')} alt="사무실 전경" />
              </li>
            </ul>
          </div>
          <div className={style['lists']}>
            <ol>
              <li className={`${style.card} ${style.active}`}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2023</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>01</p>
                    <p className={style.text}>
                      청년친화강소기업 선정<span>(고용노동부)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2022</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>06</p>
                    <p className={style.text}>
                      부산광역시 우수기업<span>(부산광역시)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2021</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>04</p>
                    <p className={style.text}>
                      서비스 강소기업<span>(부산광역시)</span>
                    </p>
                  </li>
                  <li>
                    <p className={style.month}>01</p>
                    <p className={style.text}>
                      청년친화강소기업 선정<span>(고용노동부)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2020</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>06</p>
                    <p className={style.text}>
                      부산광역시 우수기업<span>(부산광역시)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2019</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>06</p>
                    <p className={style.text}>
                      부산광역시 우수기업<span>(부산광역시)</span>
                    </p>
                  </li>
                  <li>
                    <p className={style.month}>04</p>
                    <p className={style.text}>강소기업 선정</p>
                  </li>
                  <li>
                    <p className={style.month}>02</p>
                    <p className={style.text}>엔지니어링사업자(해양) 등록</p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2018</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>12</p>
                    <p className={style.text}>인재육성형 중소기업 선정</p>
                  </li>
                  <li>
                    <p className={style.month}>07</p>
                    <p className={style.text}>ISO-9001 : 2005</p>
                  </li>
                  <li>
                    <p className={style.month}>03</p>
                    <p className={style.text}>수로조사업 등록</p>
                  </li>
                  <li>
                    <p className={style.month}>02</p>
                    <p className={style.text}>벤처기업 등록</p>
                  </li>
                  <li>
                    <p className={style.month}>01</p>
                    <p className={style.text}>초경량 비행 장치 사용사업 등록</p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2017</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>06</p>
                    <p className={style.text}>부산시해운대구 본점 이전</p>
                  </li>
                  <li>
                    <p className={style.month}>05</p>
                    <p className={style.text}>기업부설연구소 설립</p>
                  </li>
                  <li>
                    <p className={style.month}>01</p>
                    <p className={style.text}>해도 제작업 등록</p>
                  </li>
                  <li>
                    <p className={style.month}></p>
                    <p className={style.text}>주식회사 일렉오션 상호 변경</p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2016</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>04</p>
                    <p className={style.text}>소프트웨어 사업자 등록</p>
                  </li>
                </ul>
              </li>
              <li className={style.card}>
                <div className={style.year}>
                  <i className={style.docker} />
                  <h4>2015</h4>
                </div>
                <ul>
                  <li>
                    <p className={style.month}>10</p>
                    <p className={style.text}>주식회사 일렉소프트 설립 사업자 등록</p>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}
