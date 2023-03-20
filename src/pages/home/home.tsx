import { Main } from '../../layouts';
import { Intro, About, Experience, Features, Company, Contacts  } from '../../components/index';
// import styles from './home.module.scss';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Main>
        <Intro />
        <About />
        <Experience />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        {/* <Services /> */}
        <Features />
        <Company />
        <Contacts />
      </Main>
    </>
  );
}
