import React from 'react';
import Main from './pages/main';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../src/img/logo.svg';
import eth from '../src/img/eth.png';
import bnb from '../src/img/bnb.png';
import matic from '../src/img/matic.png';
import wallet from '../src/img/wallet.png';
import play from '../src/img/play.png';
import X from "../src/img/x.svg";
import Tg from "../src/img/tg.svg";
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <main>
        <div className="header-wrapper">
          <div className="header__logo">
            <img src={logo} className="header__img" alt="" />
            <div>
              Wallet <br/> Discover
            </div>
          </div>
          <div className="header__info header__hider">
            <div className="header__item">
              <img src={eth} alt="" />
              <div>
                0.00 ETH
              </div>
            </div>
            <div className="header__item">
              <img src={bnb} alt="" />
              <div>
                0.00 BNB
              </div>
            </div>
            <div className="header__item">
              <img src={matic} alt="" />
              <div>
                0.00 MATIC
              </div>
            </div>
            <div className="header__item">
              <img src={wallet} alt="" />
              <div>
                Total wallets <br /> scanned: 30000
              </div>
            </div>
          </div>
          <button className="header__button">
            Disconnect
          </button>
        </div>
        <div className="wrapper">
          <div className="info">
            <div className="header__item">
              <img src={eth} alt="" />
              <div>
                0.00 ETH
              </div>
            </div>
            <div className="header__item">
              <img src={bnb} alt="" />
              <div>
                0.00 BNB
              </div>
            </div>
            <div className="header__item">
              <img src={matic} alt="" />
              <div>
                0.00 MATIC
              </div>
            </div>
            <div className="header__item">
              <img src={wallet} alt="" />
              <div>
                Total wallets <br /> scanned: 30000
              </div>
            </div>
          </div>
          <div className="discover">
            <button className="discover__button">
              <img src={play} alt="" />
            </button>
            <div className="discover__text">
              Discover the wallets!
            </div>
          </div>
          <div className="addresses">
            <div className="addresses__address">
              <div className="address__seed">
                minimum plunge maze chair piano subway anxiety gate 
              </div>
              <div className="address__address">
                0xFfd007BA995FcE4Ef99fFFFf58A6204f1eED1D66
              </div>
            </div>
            <div className="addresses__address">
              <div className="address__seed">
                minimum plunge maze chair piano subway anxiety gate green evil urban  
              </div>
              <div className="address__address">
                0xFfd007BA995FcE4Ef99fFFFf58A6204f1eED1D66
              </div>
            </div>
          </div>
          <div className="title">
            How it works
          </div>
          <div className="items">
            <div className="item">
              <div className="item__text">
                1. The user comes to the platform, connects the wallet and presses this button
              </div>
              <button className="item__button">
                <img src={play} alt="" />
              </button>
            </div>
            <div className="item">
              <div className="item__text">
                2. The platform randomly selects passwords from crypto wallets and checks the balances of native currency in the Ethereum, BSC and Polygon networks.
              </div>
            </div>
            <div className="item">
              <div className="item__text">
                3. If a user finds a cryptocurrency on some wallet, it is automatically sent to another wallet of the project.
              </div>
            </div>
            <div className="item">
              <div className="item__text">
                4. The found cryptocurrency is distributed as follows: 50% is received by the one who connected his address to the platform and found this cryptocurrency, the other 50% is distributed among the holders of the project token.
              </div>
            </div>
          </div>
          <div className="important">
            <span className="important__span">Important: </span>
            <span className="important__text">The more users who engage in brute force search, the greater the chance of finding wallets full of riches! Our strength is in the number of users!</span>
          </div>

          <div className="footer">

            <div className="footer__left">
              <div className="footer__logo">
                <img src={logo} className="footer__img" alt="" />
                <div>
                  Wallet <br/> Discover
                </div>
              </div>
              <div className="footer__rights">
                Copyright 2024. All Rights Reserved.
              </div>
            </div>

            <div className="footer__right">
              <a target='_blank' href="#" className="footer__docs">
                Documentation
              </a>
              <a target='_blank' href="#" className="footer__link">
                <img src={Tg} alt="tg" />
              </a>
              <a target='_blank' href="#" className="footer__link">
                <img src={X} alt="x" />
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* <Main />
      <ToastContainer/> */}
    </>
  );
}

export default App;
