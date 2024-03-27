import classes from './Footer.module.css';
import { ReactComponent as LogoFooter } from '../../assets/svg/logoFooter.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <p className={classes['footer-logo']}>
          <LogoFooter />
        </p>
        <div className={classes.info}>
          <dl>
            <dd>부산광역시 해운대구 센텀동로 35, 3층 308호 (우동, 센텀SH밸리)</dd>
            <dd>
              <a href="tel:8207082288116">TEL. 070-8228-8116</a>
            </dd>
            <dd>FAX. 070-4369-4080</dd>
          </dl>
          <p className={classes.copy}>2023 ELECOCEAN ⓒ ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
