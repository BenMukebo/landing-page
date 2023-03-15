import { Main } from '../../layouts';
import {  Intro2,Gorillar,Contacts  } from '../../components/index';
// import styles from './gorilla.module.scss';

export const Gorilla: React.FC<{}> = () => {
  return (
    <>
      <Main>
        <Intro2 />
        <Gorillar />
        <Contacts />
      </Main>
    </>
  );
}
