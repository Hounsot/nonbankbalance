import { useState } from 'react';
import { CalendarDays, ChevronDown, ChevronLeft } from 'lucide-react';
import type { BalanceSettings } from './balance-detail';
import paymentCard from '../../assets/balances-new/payment-card.png?inline';
import mts from '../../assets/balances-new/830a2.svg?inline';
import './auto-topup.css';

type Mode = 'monthly' | 'balance' | 'constant';
const modes: {value: Mode; label: string}[] = [
  {value:'monthly', label:'Раз в месяц'},
  {value:'balance', label:'По балансу'},
  {value:'constant', label:'Постоянный баланс'},
];

export function AutoTopup({index,name,title,logo,settings,onBack,onSave}:{index:number;name:string;title:string;logo:string;settings:BalanceSettings;onBack:()=>void;onSave:(settings:BalanceSettings)=>void}){
  const [mode,setMode]=useState<Mode>(settings.autoMode??'balance');
  const [label,setLabel]=useState(settings.autoName??(index===2?'Мой телефон':name));
  const [day,setDay]=useState(String(settings.autoDay??11));
  const [threshold,setThreshold]=useState(settings.autoThreshold?.toString()??'');
  const [amount,setAmount]=useState(settings.autoAmount?.toString()??'');
  const [limited,setLimited]=useState(settings.autoLimit!==undefined);
  const [limit,setLimit]=useState(settings.autoLimit?.toString()??'');
  const [showCard,setShowCard]=useState(false);
  const positive=(value:string)=>value!==''&&Number.isFinite(Number(value))&&Number(value)>0;
  const valid=label.trim()!==''&&
    (mode==='monthly'?Number.isInteger(Number(day))&&Number(day)>=1&&Number(day)<=31:threshold!==''&&Number.isFinite(Number(threshold))&&Number(threshold)>=(mode==='constant'?10:0))&&
    (mode==='constant'||positive(amount)&&Number(amount)>=10&&Number(amount)<=15000)&&
    (mode==='monthly'||!limited||positive(limit));

  return <section className="balance-flow-screen auto-screen" data-prototype-screen={`auto-topup/${mode}`} role="dialog" aria-modal="true" aria-labelledby="auto-title" onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape')onBack()}}>
    <header className="auto-header">
      <div className="auto-status" aria-hidden="true"><span>12:38</span><span>▰ ▴ ▮</span></div>
      <div className="balance-flow-header"><button type="button" aria-label="Назад" onClick={onBack}><ChevronLeft size={22}/></button><h2 id="auto-title">Автопополнение</h2></div>
    </header>
    <form className="auto-form" onSubmit={event=>{
      event.preventDefault();
      if(!valid)return;
      onSave({...settings,auto:true,autoMode:mode,autoName:label.trim(),
        autoDay:mode==='monthly'?Number(day):settings.autoDay,
        autoThreshold:mode==='monthly'?settings.autoThreshold:Number(threshold),
        autoAmount:mode==='constant'?settings.autoAmount:Number(amount),
        autoLimit:mode!=='monthly'&&limited?Number(limit):undefined});
    }}>
      <div className="auto-scroll">
        <button type="button" className="auto-account auto-source" aria-expanded={showCard} onClick={()=>setShowCard(value=>!value)}>
          <img src={paymentCard} alt=""/><span><small>с МТС Деньги ·· 4433</small><strong>32 587,56 ₽</strong></span><ChevronDown size={20}/>
        </button>
        {showCard&&<div className="auto-card-caption">МТС Деньги ·· 4433 — карта списания</div>}
        <div className="auto-account"><img src={index===2?mts:logo} alt=""/><span><small>{index===2?'Мобильный телефон':name}</small><strong>{title}</strong></span></div>
        <div className="auto-fields">
          <label className="auto-field"><span>Название автопополнения</span><input value={label} onChange={event=>setLabel(event.target.value)} required/></label>
          <div className="auto-mode-label">Тип автопополнения</div>
          <div className="auto-modes" aria-label="Тип автопополнения">
            {modes.map(option=><button type="button" key={option.value} aria-pressed={mode===option.value} onClick={()=>setMode(option.value)}>{option.label}</button>)}
          </div>
          {mode==='monthly'?<label className="auto-field"><span>Число месяца</span><input type="number" min="1" max="31" value={day} onChange={event=>setDay(event.target.value)} required/><CalendarDays size={21}/></label>:<>
            <p className="auto-help">{mode==='balance'?'Пополнять, когда баланс на карте ниже или равен указанному':'Пополнять до указанного баланса'}</p>
            <label className="auto-field"><input type="number" min={mode==='constant'?10:0} step="0.01" inputMode="decimal" aria-label={mode==='balance'?'Баланс, при котором пополнять':'Целевой баланс'} placeholder={mode==='balance'?'Баланс, при котором пополнять':'Целевой баланс'} value={threshold} onChange={event=>setThreshold(event.target.value)} required/></label>
          </>}
          {mode!=='constant'&&<label className="auto-field"><input type="number" min="10" max="15000" step="0.01" inputMode="decimal" aria-label="Сумма пополнения" placeholder="Сумма пополнения" value={amount} onChange={event=>setAmount(event.target.value)} required/></label>}
          {mode!=='monthly'&&<div className="auto-limit"><span>Установить лимит в месяц</span><button className="auto-switch" type="button" role="switch" aria-label="Установить лимит в месяц" aria-checked={limited} onClick={()=>setLimited(value=>!value)}><i/></button></div>}
          {mode!=='monthly'&&limited&&<label className="auto-field"><input type="number" min="1" step="0.01" inputMode="decimal" aria-label="Лимит в месяц" placeholder="Лимит в месяц" value={limit} onChange={event=>setLimit(event.target.value)} required/></label>}
        </div>
      </div>
      <footer className="auto-footer"><button type="submit" disabled={!valid}>{settings.auto?'Сохранить':'Подключить'}</button>{settings.auto&&<button className="auto-disable" type="button" onClick={()=>onSave({...settings,auto:false})}>Отключить</button>}</footer>
    </form>
  </section>;
}
