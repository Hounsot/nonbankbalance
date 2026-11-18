import type { AutoMode, DetailScreen } from "../prototype-route";
import { AutoTopup } from './auto-topup';
import { balanceLogos } from './balance-logos';
import { useId, useState } from 'react';
import { Check, ChevronLeft, ChevronDown } from 'lucide-react';
import parkingIcon from '../../assets/balances-new/detail-parking.png?inline';
import autoIcon from '../../assets/balances-new/808fc.svg?inline';
import notificationIcon from '../../assets/balances-new/7a257.svg?inline';
import paymentChevron from '../../assets/balances-new/detail-chevron.svg?inline';
import paymentCard from '../../assets/balances-new/payment-card.png?inline';
import historyArrow from '../../assets/balances-new/eb47b.svg?inline';
import closeIcon from '../../assets/balances-new/b1498.svg?inline';
import backspaceIcon from '../../assets/balances-new/topup-backspace.svg?inline';
import './balance-detail.css';
export type BalanceSettings={auto:boolean;notify:boolean;autoMode?:'monthly'|'balance'|'constant';autoName?:string;autoDay?:number;autoLimit?:number;autoThreshold?:number;autoAmount?:number;notifyThreshold?:number;hidden?:boolean;history:{amount:number;date:string}[]};
export const balanceSettings:BalanceSettings[]=[1340,480,650,750,500].map((amount,i)=>({auto:false,notify:true,history:[{amount,date:'24 октября'},{amount:amount+(i%2?100:0),date:'12 октября'},{amount,date:'1 октября'}]}));
const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
const identifiers=['·· 7731','·· 0842','·· 8006','·· 3341','А 777 ВС 77'];
// Prototype travel history and fare; replace with provider data when available.
const tripFare = 75;
const recentTrips = [1, 2, 1, 1];
const dayFormat = new Intl.NumberFormat('ru-RU', { style: 'unit', unit: 'day', unitDisplay: 'long' });
const tripCount = (value: number) => `${value} ${value % 10 === 1 && value % 100 !== 11 ? 'поездку' : value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 12 || value % 100 > 14) ? 'поездки' : 'поездок'}`;

function ServiceAnalytics({ title, description }: { title: string; description: string }) {
 const headingId = useId();
 return (
  <section className="troika-insight" aria-labelledby={headingId}>
   <h3 id={headingId}>Аналитика</h3>
   <div className="troika-insight-row">
    <div className="troika-insight-status">
     <strong>{title}</strong>
     <span>{description}</span>
    </div>
   </div>
  </section>
 );
}

// Sample parking costs for the seven days ending on the prototype date.
const parkingSessionCosts = [80, 240, 160];
const parkingDateFormat = new Intl.DateTimeFormat('ru-RU', {
 day: 'numeric', month: 'long', timeZone: 'UTC',
});

function BalanceTrend({ label, similarPeriods = false }: { label: string; similarPeriods?: boolean }) {
 const gradientId = useId();
 const currentTrend = 'M 1 3 C 10 3, 10 9, 16 9 S 24 10, 28 15 S 36 16, 41 21 S 49 22, 53 26 Q 55 27, 57 27';
 return (
    <div className="troika-insight-trend" role="img" aria-label={label}>
     <svg width="58" height="36" viewBox="0 0 58 36" aria-hidden="true">
      <defs>
       <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#3D9CFA" stopOpacity=".3"/>
        <stop offset="1" stopColor="#3D9CFA" stopOpacity="0"/>
       </linearGradient>
      </defs>
      <path d={similarPeriods
       ? 'M 1 3 C 9 4, 13 13, 22 14 S 34 16, 41 23 S 51 26, 57 27'
       : 'M 1 3 C 8 4, 12 11, 19 15 S 28 18, 34 23 S 47 30, 57 33'}
       fill="none" stroke="#9ca5b1" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round"/>
      <path d={`${currentTrend} V 36 H 1 Z`} fill={`url(#${gradientId})`}/>
      <path d={currentTrend} fill="none" stroke="#3D9CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    </div>
 );
}

function ParkingAnalytics({ balance }: { balance: number }) {
 const headingId = useId();
 const dailySpend = parkingSessionCosts.reduce((sum, cost) => sum + cost, 0) / 7;
 const days = Math.floor(Math.max(0, balance) / dailySpend);
 const estimatedDate = parkingDateFormat.format(Date.UTC(2026, 10, 11 + days));

 return (
  <section className="troika-insight parking-insight" aria-labelledby={headingId}>
   <h3 id={headingId}>Аналитика</h3>
   <div className="troika-insight-row">
    <div className="troika-insight-status">
     <strong>Траты как обычно</strong>
     <span>Как в октябре</span>
    </div>
    <BalanceTrend similarPeriods label="Динамика остатка. Синяя линия — текущий период, серый пунктир — те же дни октября"/>
   </div>
   <div className="troika-insight-row">
    <div className="troika-insight-status">
     <strong>{balance <= 0 ? 'Пополните баланс' : days === 0 ? 'Баланс скоро закончится' : `Хватит примерно до ${estimatedDate}`}</strong>
     {days > 0 && <span>При обычных тратах</span>}
    </div>
   </div>
  </section>
 );
}

function TroikaAnalytics({ balance }: { balance: number }) {
 const trips = Math.floor(Math.max(0, balance) / tripFare);
 const dailyTrips = recentTrips.reduce((sum, count) => sum + count, 0) / recentTrips.length;
 const days = Math.floor(trips / dailyTrips);

 return (
  <section className="troika-insight" aria-labelledby="troika-insight-title">
   <h3 id="troika-insight-title">Аналитика</h3>
   <dl className="troika-insight-stats">
    <div><dt>Баланс на</dt><dd>≈ {tripCount(trips)}</dd></div>
    <div><dt>В вашем темпе</dt><dd>≈ {dayFormat.format(days)}</dd></div>
   </dl>
   <div className="troika-insight-row">
    <div className="troika-insight-status">
     <strong>На 20% меньше поездок</strong>
     <span>Чем за те же дни октября</span>
    </div>
    <BalanceTrend label="Остаток на карте. Синяя линия — текущий период, серый пунктир — те же дни октября"/>
   </div>
  </section>
 );
}

export function BalanceDetail({index,name,value,settings,onSettings,onTopup,onClose,onHide,pinned=false,onTogglePin,startTopup=false,initialScreen,initialAutoMode,previewSuccess=false,accountNote,serviceIndex=index}:{accountNote?:string;serviceIndex?:number;index:number;name:string;value:number;settings:BalanceSettings;onSettings:(s:BalanceSettings)=>void;onTopup:(amount:number)=>void;onClose:()=>void;onHide:()=>void;pinned?:boolean;onTogglePin?:()=>void;startTopup?:boolean;initialScreen?:DetailScreen;initialAutoMode?:AutoMode;previewSuccess?:boolean}){
 const [screen,setScreen]=useState<DetailScreen>(initialScreen??(startTopup?'topup':'detail'));
 const [amount,setAmount]=useState(initialScreen==='topup'||startTopup?'':'500');
 const [threshold,setThreshold]=useState(String(settings.notifyThreshold??500));
 const [showPreviewSuccess,setShowPreviewSuccess]=useState(previewSuccess);
 const [autoModeOverride,setAutoModeOverride]=useState(initialAutoMode);
 const [creditedAmount,setCreditedAmount]=useState<number|null>(null);
 const backToDetails=()=>setScreen('detail');
 const openSettings=(kind:'auto'|'notify')=>{
  setShowPreviewSuccess(false);
  setAutoModeOverride(undefined);
  setThreshold(String((kind==='auto'?settings.autoThreshold:settings.notifyThreshold)??500));
  if(kind==='auto')setAmount(String(settings.autoAmount??500));
  setScreen(kind);
 };
 const openTopup=()=>{
  setShowPreviewSuccess(false);
  setAmount('');
  setCreditedAmount(null);
  setScreen('topup');
 };
 const logo=serviceIndex===4?parkingIcon:balanceLogos[serviceIndex];
 const neutral=serviceIndex===3;
 const title=accountNote ? `${name} ${accountNote}` : (index===2||index===3)?'+7 966 127 60 08':index===4?'Парковки Москвы':`${name} ${identifiers[index]}`;
 if(screen==='auto'){
  return <AutoTopup initialMode={autoModeOverride} index={serviceIndex} name={name} title={title} logo={logo} settings={settings} onBack={backToDetails} onSave={next=>{onSettings(next);backToDetails()}}/>;
 }
 if(screen==='topup'){
  const amountValue=Number(amount.replace(',','.'));
  const validAmount=amount!==''&&Number.isFinite(amountValue)&&amountValue>=10&&amountValue<=1000000;
  const destination=accountNote || (index===2?'+7 966 127 60 08':index===3?'МГТС ·· 4218':index===4?'А 777 ВС 77':index===0?'·· 4328':identifiers[index]);
  const enterKey=(key:string)=>setAmount(previous=>{
   if(key==='backspace')return previous.slice(0,-1);
   if(key===',')return previous.includes(',')?previous:(previous||'0')+',';
   const [whole,decimal]=previous.split(',');
   if(decimal!==undefined&&decimal.length>=2)return previous;
   if(whole.length>=7&&decimal===undefined)return previous;
   return previous==='0'?key:previous+key;
  });
  return <section className="balance-flow-screen topup-screen" data-prototype-screen="topup" role="dialog" aria-modal="true" aria-labelledby="topup-title" onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape')backToDetails()}}>
   <header className="balance-flow-header topup-header"><button type="button" aria-label="Назад" onClick={backToDetails}><ChevronLeft size={24}/></button><h2 id="topup-title">Пополнение</h2></header>
   <form className="topup-form" onSubmit={event=>{event.preventDefault();if(!validAmount)return;onTopup(amountValue);setCreditedAmount(amountValue);backToDetails()}}>
    <div className="topup-accounts">
     <div className="topup-account topup-source"><img className="topup-card-image" src={paymentCard} alt=""/><span><small>С МТС Деньги ·· 4417</small><strong>32 587,56 ₽</strong></span><ChevronDown size={22} aria-hidden="true"/></div>
     <div className="topup-account"><img className={"topup-service-image"+(serviceIndex===0?" troika-bevel":"")} src={logo} alt=""/><span><small>{index===2?'Мобильная связь':name}</small><strong>{destination}</strong></span></div>
    </div>
    <div className="topup-amount"><label className="topup-amount-input"><span className="sr-only">Сумма пополнения</span><input aria-label="Сумма пополнения" inputMode="none" value={amount} placeholder="0" style={{width:`${Math.max(1,amount.length)}ch`}} onChange={event=>setAmount(event.target.value.replace(/[^0-9,.]/g,'').replace('.',','))}/><span>₽</span></label></div>
    <div className="topup-bottom"><div className="topup-chips" aria-label="Добавить к сумме">{[500,1000,2000,5000,10000].map(option=><button type="button" key={option} onClick={()=>setAmount(String(Math.min(1000000,Math.round((amountValue+option)*100)/100)).replace('.',','))}>+{rub(option)}</button>)}</div>
     <div className="topup-keyboard"><div className="topup-key-grid">{['1','2','3','4','5','6','7','8','9',',','0','backspace'].map(key=><button type="button" key={key} aria-label={key==='backspace'?'Удалить цифру':key===','?'Запятая':key} onClick={()=>enterKey(key)}>{key==='backspace'?<img src={backspaceIcon} alt=""/>:key}</button>)}</div><button type="submit" className="topup-submit" disabled={!validAmount}>Пополнить</button></div>
    </div>
   </form>
  </section>;
 }
 if(screen!=='detail'){
  const topup=false;
  const heading=topup?'Пополнение':'Сообщение о низком балансе';
  const amountValue=Number(amount);
  const thresholdValue=Number(threshold);
  const validAmount=amount!==''&&Number.isFinite(amountValue)&&amountValue>=10&&amountValue<=15000;
  const validThreshold=threshold!==''&&Number.isFinite(thresholdValue)&&thresholdValue>=0;
  const canSave=topup?validAmount:validThreshold;
  return <section className="balance-flow-screen" data-prototype-screen={topup?'topup':'low-balance-notification'} role="dialog" aria-modal="true" aria-labelledby="balance-flow-title" onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape')backToDetails()}}>
   <header className="balance-flow-header">
    <button type="button" aria-label="Назад" onClick={backToDetails}><ChevronLeft size={22}/></button>
    <h2 id="balance-flow-title">{heading}</h2>
   </header>
   <form className="balance-flow-form" onSubmit={event=>{
    event.preventDefault();
    if(!canSave)return;
    if(topup){
     onTopup(amountValue);
     setCreditedAmount(amountValue);
    }else{
     onSettings({...settings,notify:true,notifyThreshold:thresholdValue});
    }
    backToDetails();
   }}>
    <div className="balance-flow-body">
     <div className="balance-flow-account"><img src={logo} alt=""/><div><strong>{name}</strong><small>{title}</small></div></div>
     {!topup&&<label className="balance-flow-field">
      Уведомить, если баланс ниже
      <span><input type="number" min="0" step="0.01" inputMode="decimal" value={threshold} onChange={event=>setThreshold(event.target.value)} required/> ₽</span>
     </label>}
     {topup&&<label className="balance-flow-field">
      Сумма пополнения
      <span><input type="number" min="10" max="15000" step="0.01" inputMode="decimal" value={amount} onChange={event=>setAmount(event.target.value)} required/> ₽</span>
     </label>}
     {topup&&<div className="balance-flow-presets" aria-label="Готовые суммы пополнения">
      {[300,500,1000].map(option=><button type="button" key={option} aria-pressed={amountValue===option} onClick={()=>setAmount(String(option))}>{rub(option)}</button>)}
     </div>}
     {topup&&<div className="balance-flow-account"><img src={paymentCard} alt=""/><div><strong>С карты ·· 4417</strong><small>Без комиссии</small></div></div>}
    </div>
    <footer className="balance-flow-footer">
     <button type="submit" disabled={!canSave}>{topup&&validAmount?`Пополнить на ${rub(amountValue)}`:topup?'Пополнить':'Сохранить'}</button>
     {!topup&&settings.notify&&<button type="button" className="balance-flow-disable" onClick={()=>{
      onSettings({...settings,notify:false});
      backToDetails();
     }}>Отключить</button>}
    </footer>
   </form>
  </section>
 }
 return <section className="subscription-sheet balance-sheet balance-sheet-service" data-prototype-screen={(creditedAmount!==null||showPreviewSuccess)?'topup-success':'details'} role="dialog" aria-modal="true" aria-label={name} onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')onClose()}}>
 <div className={"balance-service-header"+(neutral?" balance-service-neutral":"")}>
  <div className="balance-service-tint" aria-hidden="true"><img src={logo} alt=""/></div>
  <div className="subscription-grabber"/>
  <button type="button" className="balance-service-close" aria-label="Закрыть" onClick={onClose}><img src={closeIcon} alt=""/></button>
  <div className={"balance-service-logo"+(serviceIndex===0?" troika-bevel":"")}><img className={serviceIndex===0?'troika-emblem':''} src={logo} alt=""/></div>
  <h2>{title}</h2>
  <div className="balance-amount"><strong className={value<0?'negative':''}>{rub(value)}</strong></div>
 {showPreviewSuccess&&<div className="balance-success" role="status"><Check size={17}/>Пополнение выполнено</div>}
 {creditedAmount!==null&&<div className="balance-success" role="status"><Check size={17}/>Зачислено {rub(creditedAmount)}</div>}
 <button type="button" className="bc-primary balance-topup" onClick={openTopup}>{creditedAmount!==null?'Пополнить ещё':'Пополнить'}</button>

 </div>
 {index===0 && <TroikaAnalytics balance={value} />}
 {index===2 && <ServiceAnalytics title="Связь оплачена до 15 ноября" description="Тариф — 650 ₽ в месяц"/>}
 {index===3 && <ServiceAnalytics title="Следующее списание 15 ноября" description="Тариф — 750 ₽ в месяц"/>}
 {serviceIndex===4 && <ParkingAnalytics balance={value} />}
 <section className="balance-management" aria-label="Управление">
  <h3>Управление</h3>
  <button type="button" className="balance-management-row" onClick={()=>openSettings('auto')}>
   <span className="balance-history-icon"><img src={autoIcon} alt=""/></span>
   <span>Автопополнение<small>{settings.auto?(settings.autoMode==='monthly'?`${settings.autoDay??11}-го числа · ${rub(settings.autoAmount??500)}`:settings.autoMode==='constant'?`Поддерживать ${rub(settings.autoThreshold??500)}`:`${rub(settings.autoAmount??500)}, если баланс ниже ${rub(settings.autoThreshold??500)}`):'Выберите остаток для пополнения'}</small></span>
   <img src={paymentChevron} alt=""/>
  </button>
  <button type="button" className="balance-management-row" onClick={()=>openSettings('notify')}>
   <span className="balance-history-icon"><img src={notificationIcon} alt=""/></span>
   <span>Уведомление о балансе<small>{settings.notifyThreshold!==undefined&&settings.notify?`Пуш, если баланс ниже ${rub(settings.notifyThreshold)}`:'Выберите остаток для уведомления'}</small></span>
   <img src={paymentChevron} alt=""/>
  </button>
  {onTogglePin&&<div className="balance-management-row">
   <span className="balance-history-icon"><img src={notificationIcon} alt=""/></span>
   <span>Закрепить на главной<small>Выведем в начале раздела</small></span>
   <button type="button" className="subscription-switch" role="switch" aria-label="Закрепить на главной" aria-checked={pinned} onClick={onTogglePin}><i/></button>
  </div>}
 </section>

 <div className="balance-history"><h3>Последние пополнения</h3>{settings.history.slice(0,3).map((item,i)=><div className="balance-history-row" key={i}><span className="balance-history-icon"><img src={historyArrow} alt=""/></span><span>С карты ·· 4417<small>{item.date}</small></span><strong>+{rub(item.amount)}</strong></div>)}</div>
 <button className="subscription-hide" onClick={onHide}>Удалить из «Внешние балансы»</button>
 </section>
}
