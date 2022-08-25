import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (
      categories.includes(newCategory) ||
      categories.includes(newCategory.toLowerCase()) ||
      categories.includes(newCategory.toUpperCase())
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <section class="navigation">
        <div class="nav-container">
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul class="nav-list">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="pad">
        <h1>Search Gif</h1>
        <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
