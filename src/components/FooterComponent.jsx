import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/img/logonav.png';

const FooterComponent = () => {
  const handleStatus = (e) => {
    localStorage.setItem('status', e);
  };

  return (
    <div className="footer pt-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <img src={LogoImage} alt="logo-img" />
            <p className="desc">Solusi perbaikan kerusakan instalasi listrik rumah anda dengan cara yang MUDAH, penyelesaian CEPAT, hasil yang BERKUALITAS dan service yang menjadi ANDALAN</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 852-9551-4990</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">nyalalagi.official@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <ul className="menu p-0">
              <li>
                <a href={`#beranda`} onClick={() => handleStatus('beranda')}>
                  Beranda
                </a>
              </li>
              <li>
                <a href={`#tentang`} onClick={() => handleStatus('tentang')}>
                  Tentang
                </a>
              </li>
              <li>
                <a href={`#beranda`} onClick={() => handleStatus('keunggulan')}>
                  Keunggulan
                </a>
              </li>
              <li>
                <a href={`#beranda`} onClick={() => handleStatus('layanan')}>
                  Layanan
                </a>
              </li>
              <li>
                <a href={`#beranda`} onClick={() => handleStatus('testimonial')}>
                  Testimonial
                </a>
              </li>
              <li>
                <a href={`#beranda`} onClick={() => handleStatus('download')}>
                  Download
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">NyalaLagi</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
