import React, { useEffect, useState } from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import { getCategories } from '../services';
import { CategoryContext } from '../contexts/CategoryContext.Context';

function MyApp({ Component, pageProps }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CategoryContext.Provider>
  );
}

export default MyApp;
