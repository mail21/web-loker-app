import React from 'react';
import blogPic from './../../img/blogPic.jpg';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import './BlogComponent.css';

const Article = () => {
  return (
    <article>
      <div className="headline-image" style={{ backgroundImage: `url(${blogPic})` }}></div>
      <h3>Cara Cepat belajar Programming</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem soluta inventore beatae voluptatum, doloribus debitis at ea, praesentium illo est repellendus repellat distinctio eaque expedita magni unde non enim?</p>
    </article>
  );
};

function BlogComponent() {
  return (
    <div className="sectionBlog">
      <h1 className="sectionBlog--h1">
        From <br /> Our <br /> Blog
      </h1>
      <div className="headline-blog">
        <Flickity>
          <Article />
          <Article />
          <Article />
        </Flickity>
      </div>
    </div>
  );
}

export default BlogComponent;
