import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} AK.`}
    </span>
    <Link secondary className="footer__link" href="#" target="_self">
      Crafted by TDS
    </Link>
  </footer>
);

export default Footer;
