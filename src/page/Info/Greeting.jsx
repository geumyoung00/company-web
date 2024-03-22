import classes from '../common.module.css';
import style from './InfoStyle.module.css';

const Greeting = () => {
	return (
		<div
			className={`${classes['contents-wrap']} ${style.greeting}`}>
			<div className={classes.inner}>
				<section>
					<p className='hide'>GREETING</p>
					<div className={style.left}>
						<h3>
							친환경 토털 솔루션 & 서비스
							<br />
							<strong>
								<span>Elec</span>Ocean
							</strong>
						</h3>
						<hr />
						<div
							className={
								style['greeting-text']
							}>
							<p>
								일렉오션은 친환경적 정보기술
								인프라 적용과 종합적 자연주의,
								기술적 실용주의, 생태적 친환경
								에너지가 순환하는 쾌적한
								공간이라는 균형과 조화를 통해
								고객의 기대를 뛰어넘는 자연
								접근적 토털 정보기술을 제공할
								입니다. 고객의 니즈를 삶의
								정보기술로 전이 시키는데 관련된
								모든 자원을 활용하여 소통시키는
								정보기술 인프라의 추구가 바로
								일렉오션의 이념이기 때문입니다.
							</p>
						</div>
					</div>
					<div className={style.right}></div>
				</section>
			</div>
		</div>
	);
};
export default Greeting;
