import type { WalletEntry } from "../prototype-route";
import { BalancesNew, accountLabels } from "./balances-new";
import { balanceLogos } from "./balance-logos";
import { BalanceGuide } from "./balance-guide";
import { FoundCheckbox } from "./found-checkbox";
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
export function BalancesCalm({onBack,entry,onOverview,empty=false}:{empty?:boolean;onBack?:()=>void;entry?:WalletEntry;onOverview?:(overview:WalletOverview)=>void}){
 const [accountSettings,setAccountSettings]=useState<BalanceSettings[]>(()=>[...balanceSettings.map((s,i)=>({...s,hidden:empty,...(entry?.autoTopupConnected&&i===(entry.card??0)?{auto:true,autoMode:'balance' as const,autoThreshold:200,autoAmount:500}:{})})), ...(entry?.sampleService||entry?.cardAdded?[{auto:false,notify:false,history:[]}]:[])]);
 const [subscriptions,setSubscriptions]=useState<Subscription[]>(()=>startingSubscriptions.map(s=>({...s,hidden:empty,active:!empty})));
 const subscriptionTotal=subscriptions.reduce((sum,s)=>sum+(s.active&&!s.hidden?s.price:0),0);
 const subscriptionCount=subscriptions.filter(s=>!s.hidden&&s.active).length;
 const visibleBalanceCount=accountSettings.filter(s=>!s.hidden).length;
 const allEmpty=visibleBalanceCount===0;
 const [connectStep,setConnectStep]=useState<Pick<WalletEntry,'naming'|'manual'>>({});
 const [connectionKind,setConnectionKind]=useState<ConnectionKind|null>(null);
 const [discoveryDismissed,setDiscoveryDismissed]=useState(false);
 const [discoveredSelection,setDiscoveredSelection]=useState<number[]>([2,3]);
 const [guide,setGuide]=useState<'add'|'choose'|'form'|'name'|'added'|null>(null);
 const [addedIndex,setAddedIndex]=useState<number|null>(null);
 const [cardAdded,setCardAdded]=useState(!!entry?.cardAdded);
 const rootRef=useRef<HTMLDivElement>(null);
 const scrollRef=useRef<HTMLDivElement>(null);
 const [pinnedIndex,setPinnedIndex]=useState<number|null>(empty?null:0);
 const [tab,setTab]=useState<'balances'|'subscriptions'>('balances');
 useLayoutEffect(() => {
  if (!entry) return;
  setTab(entry.tab);
  setConnectStep({ naming: entry.naming, manual: entry.manual });
  setConnectionKind(entry.add ?? null);
  if (entry.discovery) setSheet({ type: 'discovered' });
  else if (entry.add || entry.connect) setSheet({ type: 'connect' });
  else if (entry.overview) setSheet({ type: entry.overview });
  else if (entry.subscription !== undefined) {
   setSheet({ type: 'subscription', index: Math.min(entry.subscription, startingSubscriptions.length - 1) });
  } else if (entry.card !== undefined || entry.sampleService) {
   const card = entry.card ?? initial.length + 2;
   setSheet({ type: card >= 2 ? 'balance' : 'card', index: card >= 2 ? card - 2 : card,
    topup: entry.topup, detailScreen: entry.detailScreen, autoMode: entry.autoMode, topupSuccess: entry.topupSuccess });
  } else setSheet(null);
  scrollRef.current?.scrollTo({ top: 0 });
 }, [entry]);
 const [balances,setBalances]=useState(()=>entry?.cardAdded?[...initial,{name:'Транспортная карта',note:'·· 4328',value:0,service:'card' as BalanceService}]:initial); const [cards,setCards]=useState([1340,480]);
 useEffect(()=>{onOverview?.({items:[{name:'Тройка',note:'·· 4328',value:cards[0]-440,icon:balanceLogos[0],index:0},{name:'Мобильная связь',note:accountLabels.mobile.note,value:balances[0].value+128,icon:balanceLogos[2],index:2},{name:'Интернет',note:accountLabels.internet.note,value:balances[1].value,icon:balanceLogos[3],index:3},{name:'Парковки России',note:'А 777 ВС 77',value:balances[2].value,icon:balanceLogos[4],index:4},...balances.slice(3).map((b,i)=>({name:b.name,note:b.note,value:b.value,icon:balanceLogos[balanceServiceLogo(b.service!)],index:i+5}))].filter(item=>!accountSettings[item.index]?.hidden),attentionCount:balances.filter((b,i)=>!accountSettings[i+2].hidden&&b.value<0).length,phoneBalance:accountSettings[2].hidden?undefined:balances[0].value,quickBalances:{troika:accountSettings[0].hidden?undefined:cards[0],social:accountSettings[1].hidden?undefined:cards[1],parking:accountSettings[4].hidden?undefined:balances[2].value},debt:balances.reduce((sum,b,i)=>sum+(accountSettings[i+2].hidden?0:Math.max(0,-b.value)),0),nextSubscription:subscriptions.map((s,index)=>({...s,index})).filter(s=>s.active&&!s.hidden).sort((a,b)=>a.days-b.days)[0],troika:accountSettings[0].hidden?0:cards[0],hasTroika:!accountSettings[0].hidden,subscriptionTotal,cards:cards.filter((_,i)=>!accountSettings[i].hidden),subscriptionCount,balanceCount:visibleBalanceCount,balanceTotal:cards.reduce((a,b,i)=>a+(accountSettings[i].hidden?0:b-(i===0?440:0)),0)+balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:b.value+(i===0?128:0)),0)})},[cards,balances,subscriptions,subscriptionTotal,subscriptionCount,accountSettings,onOverview]);
 const [sheet,setSheet]=useState<null|({type:string,index?:number} & Pick<WalletEntry,'topup'|'detailScreen'|'autoMode'|'topupSuccess'>)>(null);const [amount,setAmount]=useState(500);const [paid,setPaid]=useState(false);const [notifications,setNotifications]=useState(true);
 const open=(type:string,index?:number,detailScreen?:'auto')=>{setCardAdded(false);if(guide==='added')setGuide(null);setConnectStep({});setSheet({type,index,detailScreen});setPaid(false);setAmount(500)};
 const debt=balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:Math.max(0,-b.value)),0);const total=cards.reduce((a,b,i)=>a+(accountSettings[i].hidden?0:b),0)+balances.reduce((a,b,i)=>a+(accountSettings[i+2].hidden?0:b.value),0);
 const newCards=[cards[0]-1340+900,cards[1]];
 const newAccounts=balances.map((balance,index)=>({...balance,value:balance.value+(index===0?128:0)}));
 const displayedCards=newCards;
 const displayedBalances=newAccounts;

 const detailIndex=(sheet?.index??0)+(sheet?.type==='balance'?2:0);
 const name=sheet?.type==='card' ? ['Тройка','Социальная карта'][sheet.index||0] : balances[sheet?.index||0].name;
 const addedBalance=sheet?.type==='balance'&&balances[sheet.index??0]?.service?balances[sheet.index??0]:undefined;
 const addBalance=(balance:NewBalance)=>{
  setCardAdded(balance.service==='card');
  const guided = guide==='form' || guide==='name';
  setAddedIndex(guided ? balances.length + 2 : null);
  setGuide(guided ? 'added' : null);
  setBalances(all=>[...all,balance]);
  setAccountSettings(all=>[...all,{auto:false,notify:false,history:[]}]);
  setTab('balances');
  setSheet(null);
  if(!guided) scrollRef.current?.scrollTo({top:0});
 };
 useLayoutEffect(() => {
  if (guide !== 'add' || sheet) return;
  const scroller = scrollRef.current;
  const target = scroller?.querySelector<HTMLElement>('.bn-offers .bn-grid');
  if (!scroller || !target) return;
  const scale = scroller.getBoundingClientRect().height / scroller.offsetHeight;
  if (scale > 0) {
   const offset = (target.getBoundingClientRect().top - scroller.getBoundingClientRect().top) / scale;
   scroller.scrollTop += offset - Math.max(0, (scroller.clientHeight - target.offsetHeight) / 2);
  }
 }, [guide, sheet]);
 useLayoutEffect(() => {
  if (guide !== 'added') return;
  const scroller = scrollRef.current;
  const target = scroller?.querySelector<HTMLElement>('[data-guide-added]');
  if (!scroller || !target) return;
  const scale = scroller.getBoundingClientRect().height / scroller.offsetHeight;
  if (scale > 0) {
   const offset = (target.getBoundingClientRect().top - scroller.getBoundingClientRect().top) / scale;
   scroller.scrollTop += offset - scroller.clientHeight / 2 + target.offsetHeight / 2;
  }
 }, [guide, balances.length]);
 const beginConnect=(kind:ConnectionKind)=>{setConnectionKind(kind);open('connect');if(guide==='add')setGuide('form')};
 const connect=(kind:ConnectionKind,index:number)=>{if(kind==='subscription'){setSubscriptions(all=>all.map((s,i)=>i===index?{...s,hidden:false,active:true}:s));setTab('subscriptions')}else{const key=kind==='card'?index:index+2;setAccountSettings(all=>all.map((s,i)=>i===key?{...s,hidden:false}:s));setTab('balances')}setSheet(null);scrollRef.current?.scrollTo({top:0})};
 const foundAccounts = discoveryDismissed
  ? [
    { ...accountLabels.mobile, icon: balanceLogos[2], amount: displayedBalances[0].value, index: 2, service: 'mobile' },
    { ...accountLabels.internet, icon: balanceLogos[3], amount: displayedBalances[1].value, index: 3, service: 'internet' },
   ].filter(account => accountSettings[account.index].hidden && !balances.slice(3).some(balance => balance.service === account.service))
  : [];
 const addFoundAccounts = (selected:number[]) => {
  const indexes = new Set(selected);
  setAccountSettings(all => all.map((settings, index) => indexes.has(index) ? { ...settings, hidden: false } : settings));
  setDiscoveryDismissed(foundAccounts.some(account=>!indexes.has(account.index)));
  setSheet(null);
  setGuide(null);
 };
 const header=<header className="calm-header"><button className="wallet-back" aria-label="Назад" type="button" onClick={onBack}><ChevronLeft size={20}/></button><h1>{tab==='subscriptions'?'Подписки':'Балансы в других сервисах'}</h1></header>;
 const service = sheet?.type === 'card'
  ? (sheet.index === 1 ? 'social-card' : 'troika')
  : addedBalance?.service ?? ['mobile', 'internet', 'parking'][sheet?.index ?? 0] ?? 'account';
 const walletScreen = ['wallet', tab, !sheet && cardAdded ? 'card-added' : sheet?.type,
  sheet?.type === 'card' || sheet?.type === 'balance' ? service : undefined,
  sheet?.type === 'subscription' ? sheet.index : undefined,
 ].filter(segment => segment !== undefined).join('/');
 return <div ref={rootRef} className="bc calm segmented new-balances" data-prototype-screen={walletScreen}>
 <div className="bc-scroll" ref={scrollRef}>
 {header}
 <BalancesNew addedIndex={addedIndex} pinnedIndex={pinnedIndex} onPin={setPinnedIndex} overviewSheet={sheet?.type==='attention'||sheet?.type==='pin'||sheet?.type==='autotopups'||sheet?.type==='balance-notifications'?sheet.type:null} onOverviewSheet={open} onCloseOverview={()=>setSheet(null)} cards={displayedCards} balances={displayedBalances} settings={accountSettings} onOpen={(type,index,detailScreen)=>open(type,index,detailScreen)} onConnect={beginConnect} onAdd={()=>{setConnectionKind(null);open('connect')}}/>
 </div>
 {sheet&&['card','balance'].includes(sheet.type)&&<div className="bc-overlay" onClick={()=>setSheet(null)}><BalanceDetail accountNote={addedBalance?.note} serviceIndex={addedBalance?.service ? balanceServiceLogo(addedBalance.service) : undefined} pinned={pinnedIndex===detailIndex} onTogglePin={detailIndex===1?undefined:()=>setPinnedIndex(current=>current===detailIndex?null:detailIndex)} startTopup={sheet.topup} initialScreen={sheet.detailScreen} initialAutoMode={sheet.autoMode} previewSuccess={sheet.topupSuccess} key={sheet.type+sheet.index+!!sheet.topup} name={name} index={sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2} value={sheet.type==='card'?displayedCards[sheet.index||0]:displayedBalances[sheet.index||0].value} settings={accountSettings[sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2]} onHide={()=>{const key=sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2;setAccountSettings(all=>all.map((s,i)=>i===key?{...s,hidden:true}:s));setSheet(null)}} onClose={()=>setSheet(null)} onSettings={next=>setAccountSettings(all=>all.map((s,i)=>i===(sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2)?next:s))} onTopup={amount=>{const key=sheet.type==='card'?(sheet.index||0):(sheet.index||0)+2;if(sheet.type==='card')setCards(all=>all.map((v,i)=>i===sheet.index?v+amount:v));else setBalances(all=>all.map((v,i)=>i===sheet.index?{...v,value:v.value+amount}:v));setAccountSettings(all=>all.map((s,i)=>i===key?{...s,history:[{amount,date:'Сегодня'},...s.history].slice(0,3)}:s))}}/></div>}
 {sheet?.type==='connect'&&<WalletConnect foundAccounts={foundAccounts} onAddFound={addFoundAccounts} onNamingChange={naming=>{if(guide==='form'||guide==='name')setGuide(naming?'name':'form')}} initialNaming={connectStep.naming} initialManual={connectStep.manual} onAddBalance={addBalance} onCustom={subscription=>{setSubscriptions(all=>[...all,subscription]);setTab('subscriptions');setSheet(null);setGuide(null)}} kind={connectionKind} onKind={kind=>{setConnectionKind(kind);if(guide==='choose')setGuide('form')}} onChoose={connect} onClose={()=>{setSheet(null);setGuide(null)}}/>}
 {sheet?.type==='discovered'&&<div className="bc-overlay discovered-overlay" onClick={()=>{setSheet(null);setDiscoveryDismissed(true);setGuide('add')}}>
 <section className="discovered-modal" role="dialog" aria-modal="true" aria-labelledby="discovered-title" aria-describedby="discovered-description" onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();setSheet(null);setDiscoveryDismissed(true);setGuide('add')}}}>
  <button type="button" className="discovered-close" aria-label="Закрыть" autoFocus onClick={()=>{setSheet(null);setDiscoveryDismissed(true);setGuide('add')}}><X size={20}/></button>
  <div className="discovered-art" aria-hidden="true"><span className="discovered-art-glow"/><span className="discovered-art-icon discovered-art-mobile"><img src={balanceLogos[2]} alt=""/></span><span className="discovered-art-icon discovered-art-internet"><img src={balanceLogos[3]} alt=""/></span><span className="discovered-art-sparkle">✦</span></div>
  <div className="discovered-body">
  <h2 id="discovered-title">Нашли два счёта</h2>
  <p id="discovered-description">По вашему номеру телефона нашли мобильную связь и домашний интернет. Добавить их в раздел?</p>
  <div className="discovered-accounts">
   {[{...accountLabels.mobile, icon:balanceLogos[2], index:2},
     {...accountLabels.internet, icon:balanceLogos[3], index:3}].map(account=>
    <button type="button" className="bn-row discovered-choice" role="checkbox" aria-checked={discoveredSelection.includes(account.index)} key={account.name} onClick={()=>setDiscoveredSelection(selected=>selected.includes(account.index)?selected.filter(index=>index!==account.index):[...selected,account.index])}>
     <span className={'bn-row-icon'+(account.index===3?' bn-row-icon-neutral':'')}><img src={account.icon} alt=""/></span>
     <span className="bn-row-info"><b>{account.name}</b><small>{account.note}</small></span>
     <FoundCheckbox selected={discoveredSelection.includes(account.index)}/>
    </button>)}
  </div>
  <div className="discovered-actions">
   <button type="button" className="discovered-add" disabled={!discoveredSelection.length} onClick={()=>{
    setAccountSettings(all=>all.map((settings,index)=>discoveredSelection.includes(index)?{...settings,hidden:false}:settings));
    setDiscoveryDismissed(discoveredSelection.length<2);
    setSheet(null);
    setGuide('add');
   }}>{discoveredSelection.length===2?'Добавить все':'Добавить'}</button>
  </div>
  </div>
 </section></div>}
 {sheet?.type==='subscription'&&<div className="bc-overlay" onClick={()=>setSheet(null)}><SubscriptionDetail key={sheet.index} subscription={subscriptions[sheet.index||0]} onHide={()=>{setSubscriptions(all=>all.map((s,i)=>i===sheet.index?{...s,hidden:true}:s));setSheet(null)}} onClose={()=>setSheet(null)} onUpdate={next=>setSubscriptions(all=>all.map((s,i)=>i===sheet.index?next:s))}/></div>}
 {sheet&& !['subscription','card','balance','connect','discovered','attention','pin','autotopups','balance-notifications'].includes(sheet.type)&&<div className="bc-overlay" onClick={()=>setSheet(null)}><section className="bc-sheet" role="dialog" aria-modal="true" aria-label="Подробности" onClick={e=>e.stopPropagation()}><button className="bc-close" aria-label="Закрыть" onClick={()=>setSheet(null)}><X size={20}/></button>
 {sheet.type==='summary'&&<><h2>В одном месте</h2><p>На картах и счетах · {money(total)}<br/>С учётом задолженности {money(debt)}</p><h3>Регулярные платежи</h3><div className="bc-choice">Мобильная связь <b>650 ₽</b></div><div className="bc-choice">Домашний интернет <b>750 ₽</b></div><div className="bc-choice">Подписки <b>{money(subscriptionTotal)}</b></div><p>{money(1400+subscriptionTotal)} в месяц по текущим тарифам. Разовые поездки и парковки не включены.</p></>}
 {sheet.type==='notifications'&&<><h2>Уведомления</h2><p>О низком балансе и предстоящих списаниях</p><button className="bc-primary" onClick={()=>setNotifications(!notifications)}>{notifications?'Включены · выключить':'Выключены · включить'}</button></>}
 </section></div>}
 {guide && sheet?.type!=='discovered' && <BalanceGuide rootRef={rootRef} step={guide} empty={allEmpty} onDismiss={()=>setGuide(null)}/>}
 </div>
}
