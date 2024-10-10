import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center my-8"> {/* Added vertical margins */}
        <Link to={'/allproducts'}>
          <button className='bg-gray-300 px-5 py-2 rounded-xl'>
            See More
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
