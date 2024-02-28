import { slug } from 'github-slugger';
import React from 'react';
import Category from './Category';

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="mt-10 flex flex-wrap items-start border-y-2 border-solid border-primary px-0 py-4 font-medium text-primary dark:border-light dark:text-light md:px-10 sxl:px-20">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
