import { Header, Navbar, Main, Footer } from '../../layouts';
import { Intro, About, Services, Products, Team, Testimonials, Contacts  } from '../../components/index';
// import styles from './home.module.scss';

export const Home: React.FC<{}> = () => {
  return (
    <>
     <Header isVisible={true}>
        <Navbar />
      </Header>
      <Main>
        <Intro />
        <About />
        <Services />
        <Products />
        <Team />
        <Testimonials />
        <Contacts />
      </Main>
      <Footer />
    </>
  );
}
