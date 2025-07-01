import './page-wrapper.scss';
import Header from '../header/header';
import Hero from '../../blocks/hero/hero';
import Catalog from '../../blocks/catalog/catalog';
import catalogAuto from '../../../mocks/catalog-auto';
import catalogBest from '../../../mocks/catalog-best';

function PageWrapper() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Hero/>
        <Catalog catalogAuto={catalogAuto} catalogBest={catalogBest}/>
      </main>
    </>
  );
}

export default PageWrapper;