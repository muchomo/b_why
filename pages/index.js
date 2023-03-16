import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Store from "../components/Store";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from '@ethersproject/providers';
import dynamic from "next/dynamic";
import { waitUntilSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Link from "next/link";
import { useToasts } from 'react-toast-notifications'
import { ToastContainer, toast } from 'react-toastify';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from "../components/Nav";
import Circles from '../components/balls';
import ReactPlayer from "react-player";
import { fetcher, shootFireworks } from '../components/config/utils';
import Router from "next/router";



// const {} = dynamic(import("tw-elements"), { ssr: false });

export const injected = new InjectedConnector({ supportedChainIds: [25,1,338]});

export default function Home() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 28000);
  });

  const [hasMetamask, setHasMetamask] = useState(false);
  const [amountToStake, setAmountToStake] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  
  const [userValuesLoading, setUserValuesLoading] = useState(false);

  const [chainID, setChainID] = useState('');




  const Web3 = require('web3');
  const web3 = new Web3('https://evm.cronos.org');
  const web4 = new Web3('https://mainnet.infura.io/v3/20302c8b5ba844cc9ad69a6a84f14807');

  const { addToast } = useToasts()
  
  var Eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser. set to cronos testnet
var eth = new Eth(Eth.givenProvider || 'https://evm.cronos.org');
var eth1 = new Eth(Eth.givenProvider || 'https://mainnet.infura.io/v3/20302c8b5ba844cc9ad69a6a84f14807');

const gasPrice = eth.getGasPrice()

var o = 0;
    var z  = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var profile = '';
    var se = 0;
    var oz = 0;
    var cro = '25';
    var plist = [];
    var id = 0;
    
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if(localStorage?.getItem('isWalletConnected') === 'true'){
        try {
          await activate(injected)
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          localStorage.setItem('isWalletConnected', true)
        .then(document.getElementById("walletAddy").innerHTML = (accounts[0]).slice(-6))
        } catch (ex) {
          console.log(ex)
        }
      }
      // if(sessionStorage.getItem('cbzApproved') === 'true'){
      //   try {
      //     setIsApproved(true);
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    }
    connectWalletOnPageLoad();
 if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
  
    gtag('config', 'G-7FK9RR12NT');

  }, []);

  const {
    active,
    activate,
    chainId,
    account,
    deactivate, 
    library: provider,
  } = useWeb3React();

 

  async function connect() {
 
    
    if (typeof window.ethereum !== "undefined") {
      try {
        setUserValuesLoading(true);
       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
       await activate(injected);
       setHasMetamask(true);
       setUserAccounts(accounts);
       myPromise
       .then(document.getElementById("walletAddy").innerHTML = 'Wallet : ' + (accounts[0]).slice(-6))
       .then(sessionStorage.setItem('isWalletConnected', true))
       .then(setUserValuesLoading(false))
        
      } catch (e) {
        console.log(e);
        if(e){
          try{initValues()}
          catch (e){
            console.log(e);
          }
        }
      }
    }
  }

  

  

  async function initValues(){
    try {
      loadValues();
    } catch (error) {
      console.log(error);
    }
    
  }
  async function disconnect() 
  {
      try {
        deactivate();
        localStorage.setItem('isWalletConnected', false)
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <>
     
      <Head>
        <title>B-WHY</title>
        <meta name="description" content="NEW MUSIC FROM COACH B-WHY" />
    <meta property="og:title" content="MUSIC FROM COACH B-WHY" />
        <meta property="og:image" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
        <link rel="icon" href="/logo.ico" />
      </Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7FK9RR12NT"></script>

      <div style={{height:'100vh'}}>
      {active ? (
        userValuesLoading ? (<div id="loadingSequence" className={styles.loading}></div>
        ) : (''
        )
      ) : (
        ""
      )}
  
    <Store />
    
       
         
          
<footer></footer>
    </div>
    </>
  );
}
