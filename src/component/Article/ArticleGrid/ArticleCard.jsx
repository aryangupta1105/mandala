"use client";
import * as React from "react";

function ArticleCard({
  imageUrl,
  date,
  title,
  author,
  category,
  imageAspectClass,
  imageWidthClass = "w-full"
}) {
  return (
    <article>
      <header>
        <img
          src={imageUrl}
          alt={title}
          className={`object-contain ${imageWidthClass} rounded-lg ${imageAspectClass}`}
        />
      </header>
      <div className="mt-4 w-full">
        <time className="text-base font-bold text-yellow-900">{date}</time>
        <h2 className="mt-3 text-2xl text-yellow-700 font-bold">
          {title}
        </h2>
        <div className="mt-3 w-full font-medium">
          <div className="w-full border border-dashed border-yellow-900 border-opacity-30 min-h-px" />
          <div className="flex gap-2.5 items-center mt-2.5 w-full text-base font-bold text-yellow-900">
            <span className="self-stretch my-auto">
              {author}
            </span>
            <span className="self-stretch my-auto">
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
