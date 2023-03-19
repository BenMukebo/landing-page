import { Main } from '../../layouts';
import { Intro, About, Experience, Services, Features, Company, Contacts  } from '../../components/index';
// import styles from './home.module.scss';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Main>
        <Intro />
        <About />
        <Services />
        <Experience />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        <Features />
        <Company />
        <Contacts />
      </Main>
    </>
  );
}
