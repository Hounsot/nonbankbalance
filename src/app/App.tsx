import { BankingTabBar } from "./components/banking-tab-bar";
import { MainScreen } from "./components/main-screen";
import { WalletOnboarding } from "./components/wallet-onboarding";
import type { WalletShortcut } from "./components/wallet-quick-payment";
import type { WalletOverview } from "./components/payment-wallet-entries";
import type { ConnectionKind } from "./components/wallet-empty";
import { PaymentsScreen } from "./components/payments-screen";
import { useRef, useState } from 'react';
import { BalancesCalm } from './components/balances-calm';
import { PhoneFrame } from './components/phone-frame';
import './components/wallet-light.css';
import { usePrototypeUrl } from './prototype-url';
import { readPrototypeRoute, type WalletEntry } from './prototype-route';
export default function App(){
 const rootRef=useRef<HTMLElement>(null);
 usePrototypeUrl(rootRef);
 const [initialRoute]=useState(()=>readPrototypeRoute(window.location.search));
 const [screen,setScreen]=useState<'wallet'|'payments'|'home'>(initialRoute.screen);
 const [walletOrigin,setWalletOrigin]=useState<'payments'|'home'>('payments');
 const [empty,setEmpty]=useState(initialRoute.empty);
 const [onboarding,setOnboarding]=useState<number|null>(initialRoute.onboarding);
 const shortcut: WalletShortcut = 'troika';
 const [onboardingSeen,setOnboardingSeen]=useState(false);
 const [entry,setEntry]=useState<WalletEntry>(initialRoute.entry);
 const [overview,setOverview]=useState<WalletOverview>({troika:1340,subscriptionTotal:3637,cards:[1340,480],subscriptionCount:4,balanceTotal:2276,attentionCount:1,balanceCount:5,hasTroika:true,debt:120});
 const openWallet=(tab:'balances'|'subscriptions'='balances',card?:number,topup?:boolean,add?:ConnectionKind,subscription?:number)=>{if(screen!=='wallet')setWalletOrigin(screen);if(empty&&!onboardingSeen&&!add){setOnboarding(0);return}setEntry({tab,card,topup,add,subscription});setScreen('wallet')};
 return <main ref={rootRef} data-prototype-page={screen} data-prototype-scenario={empty?'empty':'filled'} className="min-h-screen w-full px-4 py-8" style={{background:'#242426'}}>
 <nav aria-label="Наполнение кошелька" style={{display:'flex',justifyContent:'center',gap:7,marginTop:-12,marginBottom:20}}>{[{label:'С данными',value:false},{label:'Пустой кошелёк',value:true}].map(v=><button key={v.label} aria-pressed={empty===v.value} onClick={()=>{setEmpty(v.value);setWalletOrigin('payments');setEntry({tab:'balances'});setScreen('payments');setOnboardingSeen(false);setOnboarding(v.value?0:null)}} style={{padding:'8px 13px',borderRadius:18,fontSize:11,background:empty===v.value?'#414144':'transparent',color:empty===v.value?'#f5f5f5':'#bdbdc2'}}>{v.label}</button>)}</nav>
 <div className="flex justify-center"><PhoneFrame showStatus={screen==='wallet'&&onboarding===null}><div data-prototype-inactive={screen!=='wallet'||onboarding!==null?true:undefined} style={{height:"100%",display:screen==='wallet'?"block":"none"}}><BalancesCalm key={String(empty)} empty={empty} entry={entry} onOverview={setOverview} onBack={()=>setScreen(walletOrigin)}/></div>{screen==='payments'&&<PaymentsScreen horizontal={false} onWallet={openWallet} overview={overview} shortcut={shortcut} onLearn={(step=0)=>{setWalletOrigin('payments');setOnboarding(step)}}/>}{screen==='home'&&<MainScreen overview={overview} onBalances={()=>openWallet()}/>}{screen!=='wallet'&&onboarding===null&&<BankingTabBar active={screen} onChange={setScreen}/>} {onboarding!==null&&<WalletOnboarding initialStep={onboarding} onClose={()=>{setOnboarding(null);setOnboardingSeen(true)}} onConnect={()=>{setOnboarding(null);setOnboardingSeen(true);setEntry({tab:'balances',discovery:true});setScreen('wallet')}}/>}</PhoneFrame></div>
 </main>
}
