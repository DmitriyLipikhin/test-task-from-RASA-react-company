import './page-wrapper.scss';
import Header from '../header/header';
import Hero from '../../blocks/hero/hero';

function PageWrapper() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Hero/>
      </main>
    </>
  );
}

export default PageWrapper;