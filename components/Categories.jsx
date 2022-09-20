import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-pond shadow-lg rounded-lg p-8 pb-12 mb-8 border-2 border-gold">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-gold">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 text-grey hover:text-gold`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
