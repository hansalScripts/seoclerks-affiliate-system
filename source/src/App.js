import React, { useState } from 'react';
import Footer from './components/static/Footer';
import Navbar from './components/static/Navbar';
import Search from './components/static/Search';
import ServiceCard from './components/views/ServiceCard';

const App = () => {

  const [searchParams, setSearchParams] = useState([]);

  const handleSubmit = (data) => {
    setSearchParams(data);
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-md-12 order-xl-1 order-md-0'>
            <Search handleSubmit={handleSubmit} />
          </div>
          <div className='col-xl-9 col-md-12 order-xl-0 order-md-1'>
            <div className='page_wrapper'>
              <ServiceCard searchParams={searchParams} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
