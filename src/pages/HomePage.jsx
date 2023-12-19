import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png';

import { kelasTerbaru, dataSwiper } from '../data/index';
import { useNavigate } from 'react-router-dom';
import { downloadImage, gsImage, MudahImage, CepatImage, BerkualitasImage, AndalanImage, TentangImage } from '../assets';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage" id="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 id="homepage" className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Listrik mati tinggal click <br /> <span>&quot;NyalaLagi&quot;</span> deh....
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Kami siap membantu mengatasi permasalahan listrik di rumah anda. Dengan tenaga ahli yang berpengalaman, kami menjamin pelayanan perbaikan listrik terbaik untuk kenyamanan dan keselamatan keluarga anda. Yuk segera download
                NyalaLagi gaes
              </p>
              <button className="btn btn-warning btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/layanan')}>
                Get Started
              </button>
              <button className="btn btn-outline-warning btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">View Demo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      {/* tentang */}
      <div className="syarat-ketentuan-page" id="tentang">
        <div className="syarat-ketentuan min-vh-100">
          <Container>
            <Row className="pt-5">
              <Col lg="6" className="pt-lg-0 pt-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={TentangImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
              </Col>
              <Col data-aos="fade-up" data-aos-duration="2000">
                <h1 className="fw-bold mb-4 animate__animated animate__fadeInUp animate__delay-1s">NyalaLagi Apa tuh?</h1>
                <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  Kami adalah platform digital yang menyediakan jasa perbaikan kelistrikan rumah anda dengan cara yang MUDAH, penyelesaian CEPAT, hasil yang BERKUALITAS dan service yang menjadi ANDALAN
                </p>
                <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  Dengan kombinasai antara teknologi digital yang canggih dan di dukung tenaga ahli kelistrikan yang mumpuni maka kami bertujuan menjadi penyedia jasa perbaikan listrik yang terkemuka di pasar dan menjadi andalan masyarakat
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* tentang */}

      {/* Section LAYANAN */}
      <div className="faq" id="keunggulan">
        <Container>
          <Row className="pt-5">
            <Col>
              <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Keunggulan Kami</h2>
            </Col>
          </Row>
          <Row className="keunggulan pt-5" data-aos="fade-up" data-aos-duration="1000">
            <Col lg="3">
              <img src={MudahImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
              <h4 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s mb-5">Mudah</h4>
              <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s text-center">Dengan layanan berbasis teknologi digital pelanggan dengan MUDAH mendapatkan service terbaik hanya dalam satu genggaman</p>
            </Col>
            <Col lg="3" data-aos="fade-up" data-aos-duration="2000">
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
      {/* Section LAYANAN */}

      <div className="kelas w-100 min-vh-100" id="layanan">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Layanan Kami</h1>
              <p className="text-center">kami menyediakan layanan terbaik untuk kebutuhan instalasi listrik rumah anda</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <h5 className="mb-4">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center pb-3">
                    <p className="m-0">{kelas.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate('/layanan')}>
                Lihat Semua Layanan<i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5" id="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
        <Row className="mt-5">
          <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate('/testimonial')}>
              Lihat Semua Testimonial<i className="fa-solid fa-chevron-right ms-1"></i>
            </button>
          </Col>
        </Row>
      </div>
      {/* download */}
      <div className="downloadpage" id="download">
        <header className="downloadheader w-100 min-vh-100 d-flex align-items-center overflow-hidden">
          <Container>
            <Row className="download-box d-flex align-items-center pt-lg-5">
              <Col lg="6" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">Yuk Segera Download</h1>
                <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Dapatkan kenyamanan, ketenangan malam hari di rumah anda tanpa kwatir gelap dengan NyalaLagi</p>
                <button className="btn btn-lg rounded-1 m-0 p-0 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/layanan')}>
                  <img src={gsImage} alt="gsimage" className="w-100 m-0 p-0" />
                </button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={downloadImage} alt="download-img" className="animate__animated animate__fadeInUp" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      {/* download */}
    </div>
  );
};

export default HomePage;
