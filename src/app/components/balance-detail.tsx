import { AutoTopup } from './auto-topup';
import { balanceLogos } from './balance-logos';
import { useId, useState } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import troikaIcon from '../../assets/balances-new/detail-troika.svg?inline';
import parkingIcon from '../../assets/balances-new/detail-parking.png?inline';
import autoIcon from '../../assets/balances-new/808fc.svg?inline';
import notificationIcon from '../../assets/balances-new/7a257.svg?inline';
import paymentChevron from '../../assets/balances-new/detail-chevron.svg?inline';
import paymentCard from '../../assets/balances-new/payment-card.png?inline';
import historyArrow from '../../assets/balances-new/eb47b.svg?inline';
import closeIcon from '../../assets/balances-new/b1498.svg?inline';
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

function TroikaAnalytics({ balance }: { balance: number }) {
 const gradientId = useId();
 const currentTrend = 'M 1 3 C 10 3, 10 9, 16 9 S 24 10, 28 15 S 36 16, 41 21 S 49 22, 53 26 Q 55 27, 57 27';
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
    <div className="troika-insight-trend" role="img" aria-label="Остаток на карте. Синяя линия — текущий период, серый пунктир — те же дни октября">
     <svg width="58" height="36" viewBox="0 0 58 36" aria-hidden="true">
      <defs>
       <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#3D9CFA" stopOpacity=".3"/>
        <stop offset="1" stopColor="#3D9CFA" stopOpacity="0"/>
       </linearGradient>
      </defs>
      <path d="M 1 3 C 8 4, 12 11, 19 15 S 28 18, 34 23 S 47 30, 57 33" fill="none" stroke="#9ca5b1" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round"/>
      <path d={`${currentTrend} V 36 H 1 Z`} fill={`url(#${gradientId})`}/>
      <path d={currentTrend} fill="none" stroke="#3D9CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    </div>
   </div>
  </section>
 );
}

export function BalanceDetail({index,name,value,settings,onSettings,onTopup,onClose,onHide,pinned=false,onTogglePin,startTopup=false,accountNote,serviceIndex=index}:{accountNote?:string;serviceIndex?:number;index:number;name:string;value:number;settings:BalanceSettings;onSettings:(s:BalanceSettings)=>void;onTopup:(amount:number)=>void;onClose:()=>void;onHide:()=>void;pinned?:boolean;onTogglePin?:()=>void;startTopup?:boolean}){
 const [screen,setScreen]=useState<'detail'|'topup'|'auto'|'notify'>(startTopup?'topup':'detail');
 const [amount,setAmount]=useState('500');
 const [threshold,setThreshold]=useState('500');
 const [creditedAmount,setCreditedAmount]=useState<number|null>(null);
 const backToDetails=()=>setScreen('detail');
 const openSettings=(kind:'auto'|'notify')=>{
  setThreshold(String((kind==='auto'?settings.autoThreshold:settings.notifyThreshold)??500));
  if(kind==='auto')setAmount(String(settings.autoAmount??500));
  setScreen(kind);
 };
 const openTopup=()=>{
  setAmount('500');
  setCreditedAmount(null);
  setScreen('topup');
 };
 const logo=serviceIndex===0?troikaIcon:serviceIndex===4?parkingIcon:balanceLogos[serviceIndex];
 const neutral=serviceIndex===3;
 const title=accountNote ? `${name} ${accountNote}` : (index===2||index===3)?'+7 966 127 60 08':index===4?'Парковки Москвы':`${name} ${identifiers[index]}`;
 if(screen==='auto'){
  return <AutoTopup index={serviceIndex} name={name} title={title} logo={logo} settings={settings} onBack={backToDetails} onSave={next=>{onSettings(next);backToDetails()}}/>;
 }
 if(screen!=='detail'){
  const topup=screen==='topup';
  const heading=topup?'Пополнение':'Сообщение о низком балансе';
  const amountValue=Number(amount);
  const thresholdValue=Number(threshold);
  const validAmount=amount!==''&&Number.isFinite(amountValue)&&amountValue>=10&&amountValue<=15000;
  const validThreshold=threshold!==''&&Number.isFinite(thresholdValue)&&thresholdValue>=0;
  const canSave=topup?validAmount:validThreshold;
  return <section className="balance-flow-screen" role="dialog" aria-modal="true" aria-labelledby="balance-flow-title" onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape')backToDetails()}}>
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
 return <section className="subscription-sheet balance-sheet balance-sheet-service" role="dialog" aria-modal="true" aria-label={name} onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')onClose()}}>
 <div className={"balance-service-header"+(neutral?" balance-service-neutral":"")}>
  <div className="balance-service-tint" aria-hidden="true"><img src={logo} alt=""/></div>
  <div className="subscription-grabber"/>
  <button type="button" className="balance-service-close" aria-label="Закрыть" onClick={onClose}><img src={closeIcon} alt=""/></button>
  <div className="balance-service-logo"><img src={logo} alt=""/></div>
  <h2>{title}</h2>
  <div className="balance-amount"><strong className={value<0?'negative':''}>{rub(value)}</strong></div>
 {creditedAmount!==null&&<div className="balance-success" role="status"><Check size={17}/>Зачислено {rub(creditedAmount)}</div>}
 <button type="button" className="bc-primary balance-topup" onClick={openTopup}>{creditedAmount!==null?'Пополнить ещё':'Пополнить'}</button>

 </div>
 {index===0 && <TroikaAnalytics balance={value} />}
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
