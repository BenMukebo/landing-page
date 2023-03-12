// import { Footer } from '../footer';
// import { Header } from '../header';
import './main.scss';


type Props = {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  other?: any;
};
export const Main = ({ children }: Props) => {
  return (
    <main>
      {children}
    </main>
  );
};
