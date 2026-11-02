import { WalletOnboarding } from "./components/wallet-onboarding";
import { walletShortcuts, type WalletShortcut } from "./components/wallet-quick-payment";
import type { WalletOverview } from "./components/payment-wallet-entries";
import type { ConnectionKind } from "./components/wallet-empty";
import { PaymentsScreen } from "./components/payments-screen";
import { useState } from 'react';
import { BalancesCalm } from './components/balances-calm';
import { PhoneFrame } from './components/phone-frame';
import './components/wallet-light.css';
export default function App(){
 const [screen,setScreen]=useState<'wallet'|'payments'>('payments');
 const [empty,setEmpty]=useState(false);
 const [onboarding,setOnboarding]=useState<number|null>(null);
 const [shortcut,setShortcut]=useState<WalletShortcut>('troika');
 const [onboardingSeen,setOnboardingSeen]=useState(false);
 const [entry,setEntry]=useState<{tab:'balances'|'subscriptions';card?:number;topup?:boolean;add?:ConnectionKind;subscription?:number}>({tab:'balances'});
 const [overview,setOverview]=useState<WalletOverview>({troika:1340,subscriptionTotal:3637,cards:[1340,480],subscriptionCount:4,balanceTotal:2404,balanceCount:5,hasTroika:true,debt:120});
 const openWallet=(tab:'balances'|'subscriptions'='balances',card?:number,topup?:boolean,add?:ConnectionKind,subscription?:number)=>{if(empty&&!onboardingSeen&&!add){setOnboarding(0);return}setEntry({tab,card,topup,add,subscription});setScreen('wallet')};
 const [analytics,setAnalytics]=useState(true);
 return <main className="min-h-screen w-full px-4 py-8" style={{background:'#e9e9eb'}}>
 <nav aria-label="Варианты прототипа" style={{display:'flex',justifyContent:'center',gap:8,marginBottom:22}}>{[{label:'С аналитикой',value:true},{label:'С картами',value:false}].map(v=><button key={v.label} onClick={()=>setAnalytics(v.value)} aria-pressed={analytics===v.value} style={{padding:'9px 15px',borderRadius:20,fontSize:12,background:analytics===v.value?'#303036':'#ffffff70',color:analytics===v.value?'#fff':'#71717a'}}>{v.label}</button>)}</nav>
 <nav aria-label="Наполнение кошелька" style={{display:'flex',justifyContent:'center',gap:7,marginTop:-12,marginBottom:20}}>{[{label:'С данными',value:false},{label:'Пустой кошелёк',value:true}].map(v=><button key={v.label} aria-pressed={empty===v.value} onClick={()=>{setEmpty(v.value);setEntry({tab:'balances'});setScreen('payments');setOnboardingSeen(false);setOnboarding(v.value?0:null)}} style={{padding:'8px 13px',borderRadius:18,fontSize:11,background:empty===v.value?'#fff':'transparent',color:'#6e6e7a',boxShadow:empty===v.value?'0 1px 5px #00000009':undefined}}>{v.label}</button>)}</nav>
 <div className="flex justify-center"><PhoneFrame showStatus={screen==='wallet'&&onboarding===null}><div style={{height:"100%",display:screen==='wallet'?"block":"none"}}><BalancesCalm key={String(empty)} empty={empty} analytics={analytics} entry={entry} onOverview={setOverview} onBack={()=>setScreen('payments')}/></div>{screen==='payments'&&<PaymentsScreen onWallet={openWallet} overview={overview} shortcut={shortcut} onLearn={(step=0)=>setOnboarding(step)}/>}{onboarding!==null&&<WalletOnboarding initialStep={onboarding} choice={shortcut} onSelect={setShortcut} onClose={()=>{setOnboarding(null);setOnboardingSeen(true)}} onConnect={()=>{const item=walletShortcuts.find(s=>s.id===shortcut)!;setOnboarding(null);setOnboardingSeen(true);const connected=overview.quickBalances?.[shortcut]!==undefined;setEntry(connected?{tab:'balances',card:item.index}:{tab:'balances',add:item.kind});setScreen('wallet')}}/>}</PhoneFrame></div>
 <p style={{textAlign:'center',fontSize:12,color:'#76767c',marginTop:24}}>Данные демонстрационные · реальные платежи не выполняются</p>
 </main>
}
