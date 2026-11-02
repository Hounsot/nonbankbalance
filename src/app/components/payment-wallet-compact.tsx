import { Plus, Radio, TramFront } from 'lucide-react';
import chevron from '../../assets/payments/wallet-chevron.svg?inline';
import troika from '../../assets/payments/wallet-troika.svg?inline';
import type { WalletOverview } from './payment-wallet-entries';
import type { ConnectionKind } from './wallet-empty';
import './payment-wallet-compact.css';
const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
export function PaymentWalletCompact({overview,onOpen}:{overview:WalletOverview;onOpen:(tab:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind,subscription?:number)=>void}){
 const next=overview.nextSubscription;
 return <section className="payment-wallet-section pw-compact" aria-labelledby="compact-wallet-title"><button className="payment-wallet-section-heading" onClick={()=>onOpen('balances')}><h2 id="compact-wallet-title">Кошелек</h2><img src={chevron} alt="" width={24} height={24}/></button>
 <div className="pw-compact-grid"><button className="pw-compact-total" onClick={()=>onOpen('balances')}><span>На балансах</span><strong>{rub(overview.balanceTotal+overview.debt)}</strong><small className={overview.debt>0?'pw-has-debt':''}>{overview.debt>0?'Долг '+rub(overview.debt):overview.balanceCount>0?overview.balanceCount+' счетов':'Нет счетов'}</small></button>
 {next?<button className="pw-compact-next" onClick={()=>onOpen('subscriptions',undefined,false,undefined,next.index)}><span className="pw-compact-label">Ближайшее списание</span><span className="pw-next-row"><img src={next.icon} alt=""/><span><b>{next.name}</b><small>{next.date}</small></span><strong>{rub(next.price)}</strong></span><small className="pw-monthly">Подписки · {rub(overview.subscriptionTotal)} / мес.</small></button>:<button className="pw-compact-next pw-no-payment" onClick={()=>onOpen('subscriptions',undefined,false,'subscription')}><span className="pw-compact-label">Ближайшее списание</span><span className="pw-next-empty"><Radio size={22} strokeWidth={1.5}/><span>Добавьте подписку</span></span><small className="pw-monthly">Напомним о следующем платеже</small></button>}
 </div>
 {overview.hasTroika?<div className="payment-wallet-troika"><button className="payment-wallet-troika-details" onClick={()=>onOpen('balances',0)}><span className="payment-wallet-troika-icon"><img src={troika} alt="" width={52} height={36}/></span><span className="payment-wallet-troika-text"><span className="payment-wallet-troika-name">Тройка ·· 7731</span><strong>{rub(overview.troika)}</strong></span></button><button className="payment-wallet-topup" onClick={()=>onOpen('balances',0,true)}>Пополнить</button></div>:<div className="we-widget-transport"><span><TramFront size={23} strokeWidth={1.5}/></span><span className="we-transport-description"><b>Транспортная карта</b><small>Баланс и пополнение под рукой</small></span><button className="payment-wallet-topup" onClick={()=>onOpen('balances',undefined,false,'card')}>Подключить</button></div>}
 </section>
}
