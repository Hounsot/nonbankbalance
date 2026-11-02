import { useState } from 'react';
import { X, CreditCard, TramFront, Smartphone, Wifi, ParkingCircle, Plus, ArrowDownLeft, Check } from 'lucide-react';
import './balance-detail.css';
export type BalanceSettings={auto:boolean;notify:boolean;hidden?:boolean;history:{amount:number;date:string}[]};
export const balanceSettings:BalanceSettings[]=[1340,480,650,750,500].map((amount,i)=>({auto:false,notify:true,history:[{amount,date:'24 октября'},{amount:amount+(i%2?100:0),date:'12 октября'},{amount,date:'1 октября'}]}));
const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
const identifiers=['·· 7731','·· 0842','+7 916 555-42-18','·· 3341','А 777 ВС 77'];
const icons=[TramFront,CreditCard,Smartphone,Wifi,ParkingCircle];
export function BalanceDetail({index,name,value,settings,onSettings,onTopup,onClose,onHide,startTopup=false}:{index:number;name:string;value:number;settings:BalanceSettings;onSettings:(s:BalanceSettings)=>void;onTopup:(amount:number)=>void;onClose:()=>void;onHide:()=>void;startTopup?:boolean}){
 const [paying,setPaying]=useState(startTopup);const [amount,setAmount]=useState(500);const [paid,setPaid]=useState(false);const Icon=icons[index];
 return <section className="subscription-sheet balance-sheet" role="dialog" aria-modal="true" aria-label={name} onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')onClose()}}>
 <div className="subscription-grabber"/><div className="subscription-toolbar"><button aria-label="Закрыть" onClick={onClose}><X size={18}/></button></div>
 <div className="subscription-hero"><div className="subscription-logo balance-logo"><Icon size={33} strokeWidth={1.5}/></div><h2>{name} <span className="balance-identifier">{identifiers[index]}</span></h2></div>
 <div className="balance-amount"><strong className={value<0?'negative':''}>{rub(value)}</strong></div>
 {paid?<div className="balance-success" role="status"><Check size={17}/>Зачислено {rub(amount)}</div>:paying?<div className="balance-pay"><label htmlFor="balance-topup">Сумма пополнения</label><div className="balance-input"><input id="balance-topup" type="number" min="10" max="15000" value={amount} onChange={e=>setAmount(Number(e.target.value))}/><span>₽</span></div><div className="bc-amounts">{[300,500,1000].map(n=><button key={n} className={amount===n?'active':''} onClick={()=>setAmount(n)}>{rub(n)}</button>)}</div><button className="bc-primary" disabled={!Number.isFinite(amount)||amount<10||amount>15000} onClick={()=>{onTopup(amount);setPaid(true);setPaying(false)}}>Пополнить на {rub(amount)}</button><p>С карты ·· 4417 · без комиссии</p></div>:<button className="bc-primary balance-topup" onClick={()=>{setPaying(true);setPaid(false)}}><Plus size={17}/>Пополнить</button>}
 {paid&&<button className="balance-again" onClick={()=>{setPaid(false);setPaying(true)}}>Пополнить ещё</button>}
 <div className="subscription-facts balance-settings"><div className="subscription-fact"><span>Автопополнение<small>500 ₽, когда баланс ниже 500 ₽</small></span><button className="subscription-switch" role="switch" aria-label="Автопополнение" aria-checked={settings.auto} onClick={()=>onSettings({...settings,auto:!settings.auto})}><i/></button></div><div className="subscription-fact"><span>Сообщить о низком балансе<small>Push, когда баланс меньше 500 ₽</small></span><button className="subscription-switch" role="switch" aria-label="Сообщить о низком балансе" aria-checked={settings.notify} onClick={()=>onSettings({...settings,notify:!settings.notify})}><i/></button></div></div>
 <div className="subscription-payment"><CreditCard size={20}/><span>Оплата с карты</span><strong>Мир ·· 4417</strong></div>
 <div className="balance-history"><h3>История пополнений</h3>{settings.history.slice(0,3).map((item,i)=><div className="balance-history-row" key={i}><span className="balance-history-icon"><ArrowDownLeft size={18}/></span><span>С карты ·· 4417<small>{item.date}</small></span><strong>+{rub(item.amount)}</strong></div>)}</div>
 <button className="subscription-hide" onClick={onHide}>Спрятать из раздела «Кошелёк»</button>
 </section>
}
