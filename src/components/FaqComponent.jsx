import { Container, Row, Col } from 'react-bootstrap';
import { MudahImage, CepatImage, BerkualitasImage, AndalanImage } from '../assets';

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="pt-5">
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Keunggulan Kami</h2>
          </Col>
        </Row>
        <Row className="keunggulan pt-5">
          <Col lg="3">
            <img src={MudahImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            <h4 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Mudah</h4>
            <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s text-center">Dengan layanan berbasis teknologi digital pelanggan dengan MUDAH mendapatkan service terbaik hanya dalam satu genggaman</p>
          </Col>
          <Col lg="3">
            <img src={CepatImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            <h4 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Cepat</h4>
            <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s text-center">Didukung fitur pencarian teknisi terdekat memungkinkan proses penyelesaian problem anda dengan CEPAT</p>
          </Col>
          <Col lg="3">
            <img src={BerkualitasImage} alt="hero-img" className="animate__animated animate__fadeInUp " />
            <h4 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Berkualitas</h4>
            <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s text-center">Dengan dukungan tenaga ahli kelistrikan yang mumpuni kami menjamin kualitas pelayanan yang prima kepada pelanggan</p>
          </Col>
          <Col lg="3">
            <img src={AndalanImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            <h4 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Andalan</h4>
            <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s text-center">Dengan keMUDAHAN, keCEPATAN & hasil yang BERKUALITAS NyalaLagi menjadi platfrom ANDALAN untuk masalah kelistrikan rumah anda</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
