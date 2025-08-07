import React from 'react';

import InsightsHero from './Heading/InsightsHero';
import Pagination from './Pagination/Pagination';
import ArticleGrid from './ArticleGrid/ArticleGrid';

export const AllArticlePage= () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=La+Belle+Aurore:wght@400&family=Inter:wght@600;700&display=swap"
      />
      <main className="relative mx-auto my-0 bg-[#FFF6E5] gap-10 h-[1900px] w-[1280px] max-md:w-full max-md:h-auto py-10">
        <InsightsHero/>
        <ArticleGrid />
        <div className='flex justify-center mt-12'>
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default AllArticlePage;
