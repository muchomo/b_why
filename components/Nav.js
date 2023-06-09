
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useState, useEffect } from "react";



export const injected = new InjectedConnector({ supportedChainIds: [25,1,338]});
export default function Nav() {

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 28000);
  });

  const {
    active,
    activate,
    chainId,
    account,
    deactivate, 
    library: provider,
  } = useWeb3React();

  const [hasMetamask, setHasMetamask] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  const [userValuesLoading, setUserValuesLoading] = useState(false);

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if(localStorage?.getItem('isWalletConnected') === 'true'){
        try {
          await activate(injected)
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          localStorage.setItem('isWalletConnected', true)
        
        } catch (ex) {
          console.log(ex)
        }
      }
   
    }
    connectWalletOnPageLoad();
 if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  }, []);

  async function connect() {
 
    
    if (typeof window.ethereum !== "undefined") {
      try {
        setUserValuesLoading(true);
       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
       await activate(injected);
       setUserAccounts(accounts);
       myPromise
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
  <nav className={styles.nav_grid}>
 
<div class="circle-wrapper">
<div class="warning circle"></div>
<div class="icon">
</div>
</div>

    <a
      className={styles.connect_button} 
    >
{hasMetamask ? (
  active ? (<></>
  ) : (<>
    <button className={styles.button} id="connectbutton" onClick={() => connect()} style={{ transition: 'all 300ms'}}>CONNECT</button>
    </>
  )
) : (
  <button className={styles.button} id="connectbutton" onClick={() => window.location.href='https://metamask.io/download/'}>ADD METAMASK</button>
)}
{active ? <><button id="connectbutton" className={styles.connect_button} onClick={() => disconnect()}>DISCONNECT</button>
</>:""} 

    </a>
    
</nav>
  );
}
