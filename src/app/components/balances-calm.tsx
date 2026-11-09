import { BalancesNew } from "./balances-new";
import { WalletConnect, balanceServiceLogo, type BalanceService, type ConnectionKind, type NewBalance } from "./wallet-empty";
import type { WalletOverview } from "./payment-wallet-entries";
import { BalanceDetail, balanceSettings, type BalanceSettings } from "./balance-detail";
import { SubscriptionDetail, startingSubscriptions, type Subscription } from "./subscription-detail";
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { ChevronLeft, X } from 'lucide-react';
import './wallet-base.css';
import './balances-calm.css';
const initial: {name:string;note:string;value:number;service?:BalanceService}[] = [{name:'МТС', note:'·· 4218', value:56}, {name:'Домашний интернет',note:'МТС Home ·· 3341',value:-120}, {name:'Парковки Москвы',note:'А 777 ВС 77',value:520}];
const money=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
export function BalancesCalm({onBack,entry,onOverview,empty=false}:{empty?:boolean;onBack?:()=>void;entry?:{tab:'balances'|'subscriptions';card?:number;topup?:boolean;add?:ConnectionKind;subscription?:number};onOverview?:(overview:WalletOverview)=>void}){
 const [accountSettings,setAccountSettings]=useState<BalanceSettings[]>(()=>balanceSettings.map(s=>({...s,hidden:empty})));
 const [subscriptions,setSubscriptions]=useState<Subscription[]>(()=>startingSubscriptions.map(s=>({...s,hidden:empty,active:!empty})));
 const subscriptionTotal=subscriptions.reduce((sum,s)=>sum+(s.active&&!s.hidden?s.price:0),0);
 const subscriptionCount=subscriptions.filter(s=>!s.hidden&&s.active).length;
 const visibleBalanceCount=accountSettings.filter(s=>!s.hidden).length;
 const allEmpty=visibleBalanceCount===0;
 const [connectionKind,setConnectionKind]=useState<ConnectionKind|null>(null);
 const scrollRef=useRef<HTMLDivElement>(null);
 const [pinnedIndex,setPinnedIndex]=useState<number|null>(0);
 const [addProgress,setAddProgress]=useState(0);
 const updateBottom=()=>{
  const el=scrollRef.current;
  if(!el||el.clientHeight===0)return;
  const remaining=el.scrollHeight-el.scrollTop-el.clientHeight;
  const expansionDistance=80;
  setAddProgress(Math.max(0,Math.min(1,1-remaining/expansionDistance)));
 };
 const [tab,setTab]=useState<'balances'|'subscriptions'>('balances');
 useEffect(()=>{if(entry){setTab(entry.tab);setSheet(entry.add?{type:'connect'}:entry.subscription!==undefined?{type:'subscription',index:entry.subscription}:entry.card===undefined?null:{type:entry.card>=2?'balance':'card',index:entry.card>=2?entry.card-2:entry.card,topup:entry.topup});if(entry.add)setConnectionKind(entry.add);scrollRef.current?.scrollTo({top:0})}},[entry]);
 useLayoutEffect(()=>{updateBottom();const el=scrollRef.current;if(!el)return;const observer=new ResizeObserver(updateBottom);observer.observe(el);for(const child of el.children)observer.observe(child);return ()=>observer.disconnect()},[tab,allEmpty]);
 const [balances,setBalances]=useState(initial); const [cards,setCards]=useState([1340,480]);
 useEffect(()=>{onOverview?.({attentionCount:balances.filter((b,i)=>!accountSettings[i+2].hidden&&b.value<0).length,phoneBalance:accountSettings[2].hidden?undefined:balances[0].value,quickBalances:{troika:accountSettings[0].hidden?undefined:cards[0],social:accountSettings[1].hidden?undefined:cards[1],parking:accountSettings[4].hidden?undefined:balances[2].value},debt:balances.reduce((sum,b,i)=>sum+(accountSettings[i+2].hidden?0:Math.max(0,-b.value)),0),nextSubscription:subscriptions.map((s,index)=>({...s,index})).filter(s=>s.active&&!s.hidden).sort((a,b)=>a.days-b.days)[0],troika:accountSettings[0].hidden?0:cards[0],hasTroika:!accountSettings[0].hidden,subscriptionTotal,cards:cards.filter((_,i)=>!accountSettings[i].hidden),subscriptionCount,balanceCount:visibleBalanceCount,balanceTotal:cards.reduce((a,b,i)=>a+(accountSettings[i].hidden?0:b),0)+balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:b.value),0)})},[cards,balances,subscriptions,subscriptionTotal,subscriptionCount,accountSettings,onOverview]);
 const [sheet,setSheet]=useState<null|{type:string,index?:number,topup?:boolean}>(null);const [amount,setAmount]=useState(500);const [paid,setPaid]=useState(false);const [notifications,setNotifications]=useState(true);
 const open=(type:string,index?:number)=>{setSheet({type,index});setPaid(false);setAmount(500)};
 const debt=balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:Math.max(0,-b.value)),0);const total=cards.reduce((a,b,i)=>a+(accountSettings[i].hidden?0:b),0)+balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:b.value),0);
 const newCards=[cards[0]-1340+900,cards[1]];
 const newAccounts=balances.map((balance,index)=>({...balance,value:balance.value+(index===0?128:0)}));
 const displayedCards=newCards;
 const displayedBalances=newAccounts;
 const detailIndex=(sheet?.index??0)+(sheet?.type==='balance'?2:0);
 const name=sheet?.type==='card' ? ['Тройка','Социальная карта'][sheet.index||0] : balances[sheet?.index||0].name;
 const addedBalance=sheet?.type==='balance'&&balances[sheet.index??0]?.service?balances[sheet.index??0]:undefined;
 const addBalance=(balance:NewBalance)=>{
  setBalances(all=>[...all,balance]);
  setAccountSettings(all=>[...all,{auto:false,notify:false,history:[]}]);
  setTab('balances');
  setSheet(null);
  scrollRef.current?.scrollTo({top:0});
 };
 const beginConnect=(kind:ConnectionKind)=>{setConnectionKind(kind);open('connect')};
 const connect=(kind:ConnectionKind,index:number)=>{if(kind==='subscription'){setSubscriptions(all=>all.map((s,i)=>i===index?{...s,hidden:false,active:true}:s));setTab('subscriptions')}else{const key=kind==='card'?index:index+2;setAccountSettings(all=>all.map((s,i)=>i===key?{...s,hidden:false}:s));setTab('balances')}setSheet(null);scrollRef.current?.scrollTo({top:0})};
 const header=<header className="calm-header"><button className="wallet-back" aria-label="Назад" type="button" onClick={onBack}><ChevronLeft size={20}/></button><h1>{tab==='subscriptions'?'Подписки':'Внешние балансы'}</h1></header>;
 return <div className="bc calm segmented new-balances">
 <div className="bc-scroll" ref={scrollRef} onScroll={updateBottom}>
 {header}
 <BalancesNew pinnedIndex={pinnedIndex} onPin={setPinnedIndex} overviewSheet={sheet?.type==='attention'||sheet?.type==='pin'||sheet?.type==='autotopups'||sheet?.type==='balance-notifications'?sheet.type:null} onOverviewSheet={open} onCloseOverview={()=>setSheet(null)} cards={displayedCards} balances={displayedBalances} settings={accountSettings} onOpen={(type,index)=>open(type,index)} onConnect={beginConnect}/>
 </div>
 <div className="calm-add-dock"><button style={{
  width:`calc(${191*(1-addProgress)}px + ${100*addProgress}%)`,
  maxWidth:'100%',
  height:44+8*addProgress,
 }} onClick={()=>{setConnectionKind(tab==='subscriptions'?'subscription':null);open('connect')}}>Добавить баланс</button></div>
 {sheet&&['card','balance'].includes(sheet.type)&&<div className="bc-overlay" onClick={()=>setSheet(null)}><BalanceDetail accountNote={addedBalance?.note} serviceIndex={addedBalance?.service ? balanceServiceLogo(addedBalance.service) : undefined} pinned={pinnedIndex===detailIndex} onTogglePin={detailIndex===1?undefined:()=>setPinnedIndex(current=>current===detailIndex?null:detailIndex)} startTopup={sheet.topup} key={sheet.type+sheet.index+!!sheet.topup} name={name} index={sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2} value={sheet.type==='card'?displayedCards[sheet.index||0]:displayedBalances[sheet.index||0].value} settings={accountSettings[sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2]} onHide={()=>{const key=sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2;setAccountSettings(all=>all.map((s,i)=>i===key?{...s,hidden:true}:s));setSheet(null)}} onClose={()=>setSheet(null)} onSettings={next=>setAccountSettings(all=>all.map((s,i)=>i===(sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2)?next:s))} onTopup={amount=>{const key=sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2;if(sheet.type==='card')setCards(all=>all.map((v,i)=>i===sheet.index?v+amount:v));else setBalances(all=>all.map((v,i)=>i===sheet.index?{...v,value:v.value+amount}:v));setAccountSettings(all=>all.map((s,i)=>i===key?{...s,history:[{amount,date:'Сегодня'},...s.history].slice(0,3)}:s))}}/></div>}
 {sheet?.type==='connect'&&<WalletConnect onAddBalance={addBalance} onCustom={subscription=>{setSubscriptions(all=>[...all,subscription]);setTab('subscriptions');setSheet(null)}} kind={connectionKind} onKind={setConnectionKind} onChoose={connect} onClose={()=>setSheet(null)}/>}
 {sheet?.type==='subscription'&&<div className="bc-overlay" onClick={()=>setSheet(null)}><SubscriptionDetail key={sheet.index} subscription={subscriptions[sheet.index||0]} onHide={()=>{setSubscriptions(all=>all.map((s,i)=>i===sheet.index?{...s,hidden:true}:s));setSheet(null)}} onClose={()=>setSheet(null)} onUpdate={next=>setSubscriptions(all=>all.map((s,i)=>i===sheet.index?next:s))}/></div>}
 {sheet&& !['subscription','card','balance','connect','attention','pin','autotopups','balance-notifications'].includes(sheet.type)&&<div className="bc-overlay" onClick={()=>setSheet(null)}><section className="bc-sheet" role="dialog" aria-modal="true" aria-label="Подробности" onClick={e=>e.stopPropagation()}><button className="bc-close" aria-label="Закрыть" onClick={()=>setSheet(null)}><X size={20}/></button>
 {sheet.type==='summary'&&<><h2>В одном месте</h2><p>На картах и счетах · {money(total)}<br/>С учётом задолженности {money(debt)}</p><h3>Регулярные платежи</h3><div className="bc-choice">Мобильная связь <b>650 ₽</b></div><div className="bc-choice">Домашний интернет <b>750 ₽</b></div><div className="bc-choice">Подписки <b>{money(subscriptionTotal)}</b></div><p>{money(1400+subscriptionTotal)} в месяц по текущим тарифам. Разовые поездки и парковки не включены.</p></>}
 {sheet.type==='notifications'&&<><h2>Уведомления</h2><p>О низком балансе и предстоящих списаниях</p><button className="bc-primary" onClick={()=>setNotifications(!notifications)}>{notifications?'Включены · выключить':'Выключены · включить'}</button></>}
 </section></div>}
 </div>
}
