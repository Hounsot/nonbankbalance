import { useState } from 'react';
import { ChevronRight, Wallet, Repeat2, X, CircleAlert } from 'lucide-react';
import type { Subscription } from './subscription-detail';
import './wallet-analytics.css';
const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
const history=[{label:'Май',value:1840},{label:'Июнь',value:2120},{label:'Июль',value:1600},{label:'Август',value:2480},{label:'Сентябрь',value:2280},{label:'Октябрь',value:0}];
export function WalletAnalytics({total,debt,subscriptionTotal,subscriptions,balances,hidden,onOpen,onSubscription,shortcutsOnly=false}:{shortcutsOnly?:boolean;total:number;debt:number;subscriptionTotal:number;subscriptions:Subscription[];balances:{name:string;value:number}[];hidden:boolean[];onOpen:(index:number)=>void;onSubscription:(index:number)=>void}){
 const [selected,setSelected]=useState(5);
 const [attentionOpen,setAttentionOpen]=useState(false);
 const [showBalances,setShowBalances]=useState(true);const [showSubscriptions,setShowSubscriptions]=useState(true);
 const spending=[1648,1648,2647,3637,3637,subscriptionTotal];
 const months=history.map((m,i)=>({...m,value:i===5?total+debt:m.value}));
 const upcoming=subscriptions.map((s,index)=>({...s,index})).filter(s=>s.active&&!s.hidden).sort((a,b)=>a.days-b.days).slice(0,1);
 const alerts=balances.map((b,index)=>({...b,index})).filter(b=>!hidden[b.index+2]&&(b.value<0||(b.index===0&&b.value<500)));
 const max=Math.max(...(showBalances?months.map(m=>m.value):[]),...(showSubscriptions?spending:[]),1);
 return <div className={"wa"+(shortcutsOnly?" wa-only":"")}>{!shortcutsOnly&&<section className="wa-card" aria-label="Сводка кошелька">
 <div className="wa-card-head"><div><strong>{rub(showBalances?months[selected].value:showSubscriptions?spending[selected]:0)}</strong><span>{showBalances?'На балансах':showSubscriptions?'Траты на подписки':'Выберите данные'}</span></div><span className="wa-year">{months[selected].label}</span></div>
 <div className="wa-chart" role="group" aria-label="Балансы и траты на подписки по месяцам">{months.map((m,i)=><button key={m.label} onClick={()=>setSelected(i)} aria-pressed={selected===i} aria-label={`${m.label}: ${showBalances?'балансы '+rub(m.value):''}${showBalances&&showSubscriptions?', ':''}${showSubscriptions?'подписки '+rub(spending[i]):''}`}><span className="wa-column"><span className="wa-bar-pair">{showBalances&&<i className="wa-balance-bar" style={{height:Math.max(4,m.value/max*54)}}/>}{showSubscriptions&&<i className="wa-spending-bar" style={{height:Math.max(4,spending[i]/max*54)}}/>}</span></span><span>{m.label.slice(0,3).toLowerCase()}</span></button>)}</div>
 <div className="wa-filters" role="group" aria-label="Данные на графике"><button aria-pressed={showBalances} onClick={()=>setShowBalances(!showBalances)}><Wallet size={13}/><span>Балансы <b>{rub(months[selected].value)}</b></span></button><button aria-pressed={showSubscriptions} onClick={()=>setShowSubscriptions(!showSubscriptions)}><Repeat2 size={13}/><span>Подписки <b>{rub(spending[selected])}</b></span></button></div>
 </section>}<div className="wa-shortcuts">
 {upcoming[0]?<button className="wa-shortcut" onClick={()=>onSubscription(upcoming[0].index)}><span className="wa-shortcut-label">Ближайшее списание<ChevronRight size={11}/></span><span className="wa-shortcut-main"><img src={upcoming[0].icon} alt={upcoming[0].name}/><span className="wa-shortcut-payment"><b>{rub(upcoming[0].price)}</b><small>{upcoming[0].date}</small></span></span></button>:<div className="wa-shortcut"><span className="wa-shortcut-label">Ближайшее списание</span><b>Нет списаний</b></div>}
 <button className="wa-shortcut wa-shortcut-attention" onClick={()=>setAttentionOpen(true)}><span className="wa-shortcut-label">Требует внимания<ChevronRight size={11}/></span><span className="wa-shortcut-main"><CircleAlert size={21}/><b>{alerts.length} {alerts.length===1?'счёт':alerts.length>=2&&alerts.length<=4?'счёта':'счетов'}</b></span></button>
 </div>
 {attentionOpen&&<div className="bc-overlay" onClick={()=>setAttentionOpen(false)}><section className="subscription-sheet wa-attention-sheet" role="dialog" aria-modal="true" aria-label="Требует внимания" onClick={e=>e.stopPropagation()}><div className="subscription-grabber"/><div className="subscription-toolbar"><button aria-label="Закрыть" onClick={()=>setAttentionOpen(false)}><X size={18}/></button></div><h2>Требует внимания</h2>{alerts.length===0?<p>Все балансы в порядке</p>:alerts.map(b=><button className="wa-attention-row" key={b.name} onClick={()=>{setAttentionOpen(false);onOpen(b.index)}}><span><b>{b.name}</b><small>{b.value<0?'Задолженность':'Низкий баланс'}</small></span><span>{b.value<0?rub(-b.value):rub(b.value)}</span><ChevronRight size={15}/></button>)}</section></div>}
 </div>
}
