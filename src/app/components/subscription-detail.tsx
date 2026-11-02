import { serviceIcons } from "./service-icons";
import { CreditCard, X } from 'lucide-react';
import './subscription-detail.css';
export type Subscription = {name:string;icon:string;price:number;date:string;days:number;spent:number;payments:number;active:boolean;notify:boolean;hidden?:boolean};
export const startingSubscriptions: Subscription[] = [
 {name:'Кинопоиск',icon:serviceIcons.kinopoisk,price:299,date:'2 ноября',days:3,spent:3588,payments:12,active:true,notify:true},
 {name:'Яндекс Музыка',icon:serviceIcons.music,price:349,date:'12 ноября',days:13,spent:2094,payments:6,active:true,notify:false},
 {name:'Spotify',icon:serviceIcons.spotify,price:999,date:'7 ноября',days:8,spent:2997,payments:3,active:true,notify:true},
 {name:'ChatGPT',icon:serviceIcons.chatgpt,price:1990,date:'18 ноября',days:19,spent:7960,payments:4,active:true,notify:true},
];
const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
export function SubscriptionDetail({subscription:s,onUpdate,onClose,onHide}:{subscription:Subscription;onUpdate:(next:Subscription)=>void;onClose:()=>void;onHide:()=>void}){
 return <section className="subscription-sheet" role="dialog" aria-modal="true" aria-label={s.name} onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')onClose()}}>
 <div className="subscription-grabber"/>
 <div className="subscription-toolbar"><button aria-label="Закрыть" onClick={onClose}><X size={18}/></button></div>
 <div className="subscription-hero"><div className="subscription-logo"><img src={s.icon} alt={s.name}/></div><h2>{s.name}</h2><p>Ежемесячно</p></div>
 <div className="subscription-facts">
 <div className="subscription-fact"><span>Стоимость</span><strong>{rub(s.price)}<small>в месяц</small></strong></div>
 <div className="subscription-fact"><span>Следующее списание</span><strong>{s.active?s.date:'Отключено'}<small>{s.active?`Через ${s.days} ${s.days===3?'дня':'дней'}`:'Доступ до '+s.date}</small></strong></div>
 <div className="subscription-fact"><span>Потрачено всего</span><strong>{rub(s.spent)}<small>За {s.payments} {s.payments<5?'платежа':'платежей'}</small></strong></div>
 <div className="subscription-fact"><span>Уведомления<small>За день до списания</small></span><button role="switch" aria-label="Напомнить о списании" aria-checked={s.notify} className="subscription-switch" onClick={()=>onUpdate({...s,notify:!s.notify})}><i/></button></div>
 </div>
 <div className="subscription-payment"><CreditCard size={20}/><span>Оплата с карты</span><strong>Мир ·· 4417</strong></div>
 <button className="subscription-hide" onClick={onHide}>Не показывать подписку</button>
 </section>
}
