import React, { useState, useRef, useEffect } from 'react';

import Form from "./components/Form/Form.js";
import Modal from "./components/Modal/Modal";

import './styles.scss';

export default function App() {
  
  const [modalOpened, setModalOpened] = useState(false);
  const orderedList = useRef(null);
  
  const modalHandler = (value) => {
    setModalOpened(value)
  };
  
  useEffect(() => {
    const olClick = (event) => {
      if ( event.target.closest('.ordered-list li')) {
        modalHandler(true)
      }
    };
    if (orderedList)
    document.addEventListener('click', olClick);
  }, []);
  
  return (
    <React.Fragment>
      <div className="content">
        <header>
          <div className="inner">
            <div className="text">
              <span className="title">Banner header</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud</p>
            </div>
            <Form/>
          </div>
        </header>
        <main>
          <section className="posts">
            <div className="post">
              <div className="inner">
                <div className="title">Post header 1 Post header 1 Post header 1</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eius
                  nobis reprehenderit vero. Alias dicta ex harum laboriosam quod!
                </div>
              </div>
            </div>
            <div className="post">
              <div className="inner">
                <div className="title">Post header 2</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eius
                  nobis reprehenderit vero. Alias dicta ex harum laboriosam quod!
                </div>
              </div>
            </div>
            <div className="post">
              <div className="inner">
                <div className="title">Post header 3</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eius
                  nobis reprehenderit vero. Alias dicta ex harum laboriosam quod!
                </div>
              </div>
            </div>
            <div className="post">
              <div className="inner">
                <div className="title">Post header 4</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eius
                  nobis reprehenderit vero. Alias dicta ex harum laboriosam quod!
                </div>
              </div>
            </div>
            <div className="post">
              <div className="inner">
                <div className="title">Post header 5</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eius
                  nobis reprehenderit vero. Alias dicta ex harum laboriosam quod!
                </div>
              </div>
            </div>
          </section>
          <section className="list-section">
            <div className="inner">
              <div className="monitor-bg">
                <div className='img'></div>
              </div>
              <div>
                <h1 className="title">Title text</h1>
                <ol ref={orderedList} className='ordered-list'>
                  <li><span>Duis aute irure dolor in reprehenderit<sup><small>1</small></sup> in voluptate velit</span>
                  </li>
                  <li><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat<sup></sup></span></li>
                  <li><span>Ut enim ad minim veniam, quis nostrud exercitation<sup></sup></span></li>
                  <li><span>Et dolore magna aliqua<sup></sup></span></li>
                  <li><span>Sed do eiusmod tempor<sup><small>2</small></sup> incididunt ut labore</span></li>
                  <li><span>Lorem ipsum dolor sit amet<sup><small>3</small></sup> consectetur adipisicing elit</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section className="main-footer">
            <div className="inner">
              <p><sup>1</sup> Reprehenderit - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore</p>
              <p><sup>2</sup> Tempor - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
                ex ea commodo consequat.</p>
              <p><sup>3</sup> Amet - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.</p>
            </div>
          </section>
        </main>
      </div>
      <Modal open={modalOpened} onClose={modalHandler}/>
      {/*<Backdrop open={modalOpened} onClose={modalHandler}/>*/}
    </React.Fragment>
  )
}
