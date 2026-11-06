import { Plus, Radio, Wallet, TramFront, ChevronRight } from "lucide-react";
import type { ConnectionKind } from "./wallet-empty";
import chevron from '../../assets/payments/wallet-chevron.svg?inline';
import tbank from '../../assets/payments/wallet-tbank.svg?inline';
import sber from '../../assets/payments/wallet-sber.svg?inline';
import alfa from '../../assets/payments/wallet-alfa.svg?inline';
import troika from '../../assets/payments/wallet-troika.svg?inline';
import './payment-wallet-entries.css';
export type WalletOverview={attentionCount?:number;phoneBalance?:number;quickBalances?:Partial<Record<'troika'|'social'|'parking',number>>;troika:number;subscriptionTotal:number;cards:number[];subscriptionCount:number;balanceTotal:number;balanceCount:number;hasTroika:boolean;debt:number;nextSubscription?:{index:number;name:string;price:number;date:string;icon:string}};
const money=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
const emblems=[{name:'Т-Банк',src:tbank},{name:'Сбербанк',src:sber},{name:'Альфа-Банк',src:alfa}];
function Emblems(){return <span className="payment-wallet-logos" aria-hidden="true">{emblems.map((item,i)=><span className="payment-wallet-emblem" style={{zIndex:3-i}} key={item.name}><img src={item.src} alt="" width={32} height={32}/></span>)}</span>}
export function PaymentWalletEntries({overview,onOpen}:{overview:WalletOverview;onOpen:(tab:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind)=>void}){
 return <section className="payment-wallet-section" aria-labelledby="payment-wallet-title"><button className="payment-wallet-section-heading" onClick={()=>onOpen('balances')}><h2 id="payment-wallet-title">Кошелек</h2><img src={chevron} alt="" width={24} height={24}/></button>
 <div className="payment-wallet-entries">
 <button className="payment-wallet-entry" onClick={()=>onOpen('subscriptions')}><span className="payment-wallet-tile"><span className="payment-wallet-text"><span className="payment-wallet-topline">Подписки {overview.subscriptionCount>0&&<small>{overview.subscriptionCount}</small>}</span><strong>{money(overview.subscriptionTotal)}</strong></span>{overview.subscriptionCount>0?<Emblems/>:<span className="payment-wallet-empty-symbol" aria-hidden="true"><Radio size={22} strokeWidth={1.5}/></span>}</span></button>
 <button className="payment-wallet-entry" onClick={()=>onOpen('balances')}><span className="payment-wallet-tile"><span className="payment-wallet-text"><span className="payment-wallet-topline">Балансы {overview.balanceCount>0&&<small>{overview.balanceCount}</small>}</span><strong>{money(overview.balanceTotal)}</strong></span>{overview.balanceCount>0?<Emblems/>:<span className="payment-wallet-empty-symbol" aria-hidden="true"><Wallet size={22} strokeWidth={1.5}/></span>}</span></button>
 </div>
 {overview.hasTroika? <div className="payment-wallet-troika"><button className="payment-wallet-troika-details" onClick={()=>onOpen('balances',0)}><span className="payment-wallet-troika-icon"><img src={troika} alt="" width={52} height={36}/></span><span className="payment-wallet-troika-text"><span className="payment-wallet-troika-name">Тройка ·· 7731</span><strong>{money(overview.troika)}</strong></span></button><button className="payment-wallet-topup" onClick={()=>onOpen('balances',0,true)}>Пополнить</button></div>:<div className="we-widget-transport"><span><TramFront size={23} strokeWidth={1.5}/></span><span className="we-transport-description"><b>Транспортная карта</b><small>Баланс и пополнение под рукой</small></span><button className="payment-wallet-topup" onClick={()=>onOpen('balances',undefined,false,'card')}>Подключить</button></div>}</section>
}
