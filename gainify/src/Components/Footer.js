import React from 'react';
import './Footer.css';
import { ReactComponent as MailIcon } from '../Logo/mail.svg';
import { ReactComponent as FacebookIcon } from '../Logo/facebook.svg';
import { ReactComponent as InstagramIcon } from '../Logo/instagram.svg';

const Footer = ({ lang, translations }) => (
  <footer className="bg-dark text-light mt-5 pt-4 pb-2 footer-shadow">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-3 text-center">
          <h5>{lang === 'pl' ? 'Nawigacja' : 'Navigation'}</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">{lang === 'pl' ? 'Strona główna' : 'Home'}</a></li>
            <li><a href="/about" className="text-light text-decoration-none">{translations[lang].about}</a></li>
            <li><a href="/products" className="text-light text-decoration-none">{translations[lang].products}</a></li>
            <li><a href="/login" className="text-light text-decoration-none">{translations[lang].login}</a></li>
            <li><a href="/register" className="text-light text-decoration-none">{translations[lang].register}</a></li>
          </ul>
        </div>
        <div className="col-md-6 mb-3 text-center">
          <h5>{lang === 'pl' ? 'Kontakt' : 'Contact'}</h5>
          <ul className="list-unstyled d-flex justify-content-center gap-4" style={{ fontSize: 0, padding: 15

            
           }}>
            <li>
              <a href="mailto:support@gainify.com" className="text-light text-decoration-none" title="E-mail">
                <MailIcon style={{ width: 32, height: 32, verticalAlign: 'middle' }} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Gainify" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none" title="Facebook">
                <FacebookIcon style={{ width: 32, height: 32, verticalAlign: 'middle' }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/Gainify" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none" title="Instagram">
                <InstagramIcon style={{ width: 32, height: 32, verticalAlign: 'middle' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-light" />
      <div className="text-center pb-2" style={{ fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Gainify. {lang === 'pl' ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}
      </div>
    </div>
  </footer>
);

export default Footer;