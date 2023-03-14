import { Main } from '../../layouts';
import { Intro, About, Services, Features, Contacts  } from '../../components/index';
// import styles from './home.module.scss';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Main>
        <Intro />
        <About />
        <Services />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        <Features />
        <Contacts />
      </Main>
    </>
  );
}
