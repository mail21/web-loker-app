import React from 'react';
import './JumbotronComponent.css';
import Jumbotron from './../../img/Jumbotron.png';

function JumbotronComponent() {
  return (
    <section className="section--jumbotron">
      <article>
        <h1 className="article--jumbotron-h1">Loker Programmer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto perferendis exercitationem fuga quam? Temporibus, aperiam</p>
        <button className="button--jumbotron">Mulai</button>
      </article>
      <aside>
        <img src={Jumbotron} alt="jumbotron" />
      </aside>
    </section>
  );
}

export default JumbotronComponent;
