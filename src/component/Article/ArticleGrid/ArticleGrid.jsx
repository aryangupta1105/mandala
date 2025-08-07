"use client";
import * as React from "react";
import ArticleCard from "./ArticleCard";
const ArticleGrid = () => {
  const column1Articles = [
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/cd08ab913411990407c5e0a7798e34b96044a229?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Mandala Within cover revealed!",
      author: "By Clay Boykin",
      category: "Soulful_Leadership"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/31d82041d052745f02b303a1458c0e5968fcdba6?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Stillness That Speaks: Rediscovering Inner Peace",
      author: "By Clay Boykin",
      category: "Soulful_Leadership"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/156eaf42e2791505ae06fe2bb272e1076380d998?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Gentle Power of Listening",
      author: "By Clay Boykin",
      category: "Mindful Communication"
    }
  ];

  const column2Articles = [
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9bf8c86836b896ed436697811e15292952ef18c2?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "Finding the Still Point in a Noisy World",
      author: "By Clay Boykin",
      category: "Quiet Mind"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/b41ff66d0724bf4dcc26928d4414ccffd677659a?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Stillness That Speaks: Rediscovering Inner Peace",
      author: "By Clay Boykin",
      category: "Soulful_Leadership"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/168ac6ad57e83f3f5028be6a5bf182d6721a5ce1?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "Men Without Masks",
      author: "By Clay Boykin",
      category: "Authentic Masculinity"
    }
  ];

  const column3Articles = [
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/564ce4aa17b4eac8b5f98c456154a3131d4331c9?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Stillness That Speaks: Rediscovering Inner Peace",
      author: "By Clay Boykin",
      category: "Soulful_Leadership"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/94e3df7e97742e5d7c80dd5bb8ba8c560a2567b3?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "The Stillness That Speaks: Rediscovering Inner Peace",
      author: "By Clay Boykin",
      category: "Soulful_Leadership"
    },
    {
      imageUrl: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/cd820df9465f7bdd074335857e03df9f35709547?placeholderIfAbsent=true",
      date: "Aug 2025",
      title: "From Chaos to Calm",
      author: "By Clay Boykin",
      category: "Quite Mind"
    }
  ];

  return (
    <main className="flex gap-5 max-md:flex-col">
      <section className="w-[33%] max-md:ml-0 max-md:w-full">
        <div className="text-base font-bold text-yellow-900 max-md:mt-8">
          {column1Articles.map((article, index) => (
            <div key={index} className={index > 0 ? "mt-11 max-md:mt-10" : ""}>
              <ArticleCard
                imageUrl={article.imageUrl}
                date={article.date}
                title={article.title}
                author={article.author}
                category={article.category}
                imageAspectClass="aspect-[1.61]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="ml-5 w-[33%] max-md:ml-0 max-md:w-full mt-16">
        <div className="grow text-base font-bold text-yellow-900 max-md:mt-8">
          {column2Articles.map((article, index) => (
            <div key={index} className={index > 0 ? "mt-11 max-md:mt-10" : ""}>
              <ArticleCard
                imageUrl={article.imageUrl}
                date={article.date}
                title={article.title}
                author={article.author}
                category={article.category}
                imageAspectClass="aspect-[1.5]"
                imageWidthClass="max-w-full w-[375px]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="text-base font-bold text-yellow-900 max-md:mt-8">
          {column3Articles.map((article, index) => (
            <div key={index} className={index > 0 ? "mt-11 max-md:mt-10" : ""}>
              <ArticleCard
                imageUrl={article.imageUrl}
                date={article.date}
                title={article.title}
                author={article.author}
                category={article.category}
                imageAspectClass="aspect-[1.61]"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArticleGrid;
