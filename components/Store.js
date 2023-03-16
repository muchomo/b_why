
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useState, useEffect } from "react";



export const injected = new InjectedConnector({ supportedChainIds: [25,1,338]});
export default function Store() {

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


 
 return (
<>
<div style={{width:'100%',height:'100%'}}>
<div style={{width:'100%', height:'80%',display:'flex',backgroundColor:'#00f6fe'}}>
  <div id="ss1" style={{width:'45%',height:'100%', float:'left'}}>
  <div id="navigationMenu" style={{width:'100%',height:'15%'}}>
    <ul><a  href="/" rel="noopener noreferrer"><li style={{marginLeft:'16px',fontAlign:'center'}}>HOME</li></a>
    <a  href="https://opensea.io/collection/b-whystokendegenerates" target="_blank" rel="noopener noreferrer"><li>BUY MY NFT</li></a>
 
</ul>
  </div>
  <div id="fam" style={{width:'100%',height:'85%',backgroundColor:'#fff'}}></div>
  </div>

  <div id="ss2" style={{width:'55%',height:'auto',backgroundColor:'#fff', float:'left',paddingTop:'3%'}}>
    <div style={{display:'block',margin:'auto',width:'80%',height:'95%',borderRadius:'10px',paddingTop:'5%'}}>
      <div style={{display:'block',margin:'auto',width:'90%',height:'90%',borderRadius:'10px',padding: '32px 0 0 0',backgroundColor:'#00f6fe'}}>
       
        <div id="YTBY" style={{display:'block',margin:'auto',width:'90%',height:'auto',borderRadius:'10px',paddingBottom:'16px'}}>
         
          <p style={{textAlign:'center',marginBottom:'15px'}}> NEW MUSIC
            </p>
           
            <h2 style={{textAlign:'center',fontSize:'1.6rem',marginBottom:'16px'}}>LET THE GIRLS PLAY!</h2>
            <div style={{height:'100%'}}>
            <iframe  style={{maxHeight:'300px'}} width="100%" height="300px" src="https://www.youtube.com/embed/EWX1IBYh7k0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            
           
        </div>
       
          </div>
       
        
      
        
      </div>
    </div>
  </div>
  </div>
  <div style={{width:'100%',height:'20%',display:'block',backgroundColor:'#00f6fe',paddingTop:'50px'}}>
  <p style={{textAlign:'center',margin:'0 0 16px 0',fontSize:'1.2rem'}}>LIKE MY MUSIC?</p>
            <p style={{textAlign:'center',margin:'0 0 16px 0'}}>JOIN MY COMMUNITY!</p>
            <div className={styles.value_grid1} style={{display:'flex', margin:'auto'}}>
           <a  href="https://discord.gg/yV445wDcZD" target="_blank" rel="noopener noreferrer" style={{marginRight:'16px'}}> <p className={styles.socials} id="discordButton"></p></a>
   <a  href="https://twitter.com/CoachBWhyMusic" target="_blank" rel="noopener noreferrer" style={{marginRight:'16px'}}> <p className={styles.socials}  id="twitterButton"></p> </a>
    
    <a  href="https://www.youtube.com/channel/UC5jJmUGfwxlDEwROyrsT_6g" target="_blank" rel="noopener noreferrer"><p className={styles.socials} id="mintbutton" style={{float:'left'}}></p></a>
    </div>
  </div>

</div></>
  );
}
