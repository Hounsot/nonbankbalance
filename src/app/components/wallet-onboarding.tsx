import { useEffect, useRef, useState } from 'react';
import { Bell, Check, Smartphone, Wifi, RefreshCw } from 'lucide-react';
import { ShortcutIcon, walletShortcuts, type WalletShortcut } from './wallet-quick-payment';
import back from '../../assets/onboarding/back.svg?inline';
import wifi from '../../assets/onboarding/wifi.svg?inline';
import signal from '../../assets/onboarding/signal.svg?inline';
import battery from '../../assets/onboarding/battery.svg?inline';
import './wallet-onboarding.css';

const slides=[
 {title:'Балансы под рукой',description:'Проверяйте остаток и пополняйте\nтелефон, интернет и карты.'},
 {title:'Всё под контролем',description:'Уведомления о низком балансе.\nАвтопополнение при низком остатке.'},
 {title:'Настройте под себя',description:'Закрепите нужный счёт, чтобы\nбыстро проверять и пополнять его.'},
];
export function WalletOnboarding({initialStep=0,choice,onSelect,onClose,onConnect}:{initialStep?:number;choice:WalletShortcut;onSelect:(value:WalletShortcut)=>void;onClose:()=>void;onConnect:()=>void}){
 const [step,setStep]=useState(initialStep);
 const heading=useRef<HTMLHeadingElement>(null);
 const dialog=useRef<HTMLElement>(null);
 useEffect(()=>{heading.current?.focus()},[step]);
 useEffect(()=>{const previous=document.activeElement as HTMLElement;return()=>previous?.focus()},[]);
 const slide=slides[step];
 return <section ref={dialog} className="wo" role="dialog" aria-modal="true" aria-labelledby="wo-title" onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();onClose()}if(event.key==='Tab'){const buttons=Array.from(dialog.current?.querySelectorAll<HTMLButtonElement>('button')??[]);const first=buttons[0],last=buttons[buttons.length-1];if(event.shiftKey&&(document.activeElement===first||document.activeElement===heading.current)){event.preventDefault();last?.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}}}}>
 <div className="wo-status" aria-hidden="true"><span>9:41</span><span><img src={wifi} width={17} height={17} alt=""/><img src={signal} width={17} height={17} alt=""/><img src={battery} width={8} height={15} alt=""/></span></div>
 <div className="wo-content"><header><h1 id="wo-title" ref={heading} tabIndex={-1}>{slide.title}</h1><p>{slide.description}</p></header>
 <div className={'wo-visual wo-step-'+step} key={step}>
 {step===0&&<><div className="wo-demo"><small>На картах и счетах</small><strong>2 276 ₽</strong><div className="wo-demo-row"><Smartphone size={22}/><span>Мобильная связь<small>Можно пополнить в пару нажатий</small></span><b>56 ₽</b></div><div className="wo-demo-row"><Wifi size={22}/><span>Домашний интернет<small>Нужно пополнить</small></span><b>−120 ₽</b></div></div></>}
 {step===1&&<div className="wo-demo"><div className="wo-demo-row"><Bell size={22}/><span>Уведомления<small>Сообщим, когда баланс станет низким</small></span></div><div className="wo-demo-row"><RefreshCw size={22}/><span>Автопополнение<small>Когда баланс опустится ниже порога</small></span></div></div>}
 {step===2&&<><div className="wo-choices" role="group" aria-label="Что показывать внизу">{walletShortcuts.map(item=><button key={item.id} aria-pressed={choice===item.id} onClick={()=>onSelect(item.id)}><ShortcutIcon choice={item.id}/><span>{item.name}</span><i>{choice===item.id?<Check size={15}/>:null}</i></button>)}</div></>}
 </div></div>
 <footer className="wo-footer"><div>{step>0&&<button className="wo-back" aria-label="Предыдущий шаг" onClick={()=>setStep(s=>s-1)}><img src={back} width={24} height={24} alt=""/></button>}<button className="wo-next" onClick={()=>step<slides.length-1?setStep(s=>s+1):onConnect()}>{step<slides.length-1?'Далее':'Подключить выбранное'}</button></div><span className="wo-indicator"/></footer>
 </section>
}
