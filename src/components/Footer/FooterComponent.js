import React from 'react';
import './FooterComponent.css';
import logo from './../../img/logo.png';
import ig from './../../img/ig.png';
import fb from './../../img/fb.png';
import twitter from './../../img/twitter.png';

function FooterComponent() {
  return (
    <footer>
      <h3>Copyright 2020 All right reserved | Loker Programmer</h3>
      <div>
        <article style={{ display: 'flex' }}>
          <div>
            <img src={logo} alt="logo" width="90" style={{ marginRight: '20px' }} />
          </div>
          <div>
            <h4>Loker programmer</h4>
            <p>
              Situs Pembelajaran programming dari <br /> dasar hingga Advance
            </p>
            <p>Info Lowongan pekerjaan Programming</p>
          </div>
        </article>
        <article>
          <h4>Contact us</h4>
          <p>+62852-7173-7949</p>
          <p>info@Lokerprogrammer.com</p>
        </article>
        <article>
          <h4>Help</h4>
          <p>Info Kelas</p>
          <p>Info Dukungan</p>
        </article>
        <article>
          <h4>Follow us on</h4>
          <div>
            <div style={{ marginBottom: '10px' }}>
              <img src={ig} alt="ig" width="20" style={{ marginRight: '5px' }} />
              @Lokerprogrammer
            </div>
            <div style={{ marginBottom: '10px' }}>
              <img src={fb} alt="fb" width="20" style={{ marginRight: '5px' }} />
              Loker Programmer
            </div>
            <div style={{ marginBottom: '10px' }}>
              <img src={twitter} alt="twitter" width="20" style={{ marginRight: '5px' }} />
              @lokerprogrammer
            </div>
          </div>
        </article>
      </div>
    </footer>
  );
}

export default FooterComponent;
