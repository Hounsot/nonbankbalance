import { CreditCard, ParkingCircle } from 'lucide-react';
import type { WalletOverview } from './payment-wallet-entries';
import type { ConnectionKind } from './wallet-empty';
import troika from '../../assets/payments/wallet-troika.svg?inline';
import './wallet-quick-payment.css';

export type WalletShortcut='troika'|'social'|'parking';
export const walletShortcuts=[
 {id:'troika' as const,name:'Тройка',number:'·· 7731',index:0,kind:'card' as const},
 {id:'social' as const,name:'Социальная карта',number:'·· 0842',index:1,kind:'card' as const},
 {id:'parking' as const,name:'Парковки Москвы',number:'А 777 ВС 77',index:4,kind:'balance' as const},
];
export function ShortcutIcon({choice}:{choice:WalletShortcut}){return choice==='troika'?<img src={troika} width={52} height={36} alt=""/>:choice==='social'?<span className="wq-social"><CreditCard size={25}/></span>:<span className="wq-parking"><ParkingCircle size={30}/></span>}
export function WalletQuickPayment({choice,overview,onOpen}:{choice:WalletShortcut;overview:WalletOverview;onOpen:(tab?:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind)=>void}){
 const item=walletShortcuts.find(s=>s.id===choice)!;
 const value=overview.quickBalances?.[choice]??(choice==='troika'&&overview.hasTroika?overview.troika:undefined);
 const connected=value!==undefined;
 const noQuickAccounts=!overview.hasTroika&&overview.quickBalances?.social===undefined&&overview.quickBalances?.parking===undefined;
 if(noQuickAccounts)return <button className="wq wq-empty" onClick={()=>onOpen('balances',undefined,false,'card')}><img src={troika} width={52} height={36} alt=""/><span><b>Транспортная карта</b><small>Тройка, социальная карта</small></span></button>;
 return <div className="wq"><button className="wq-account" aria-label={'Открыть '+item.name} onClick={()=>connected?onOpen('balances',item.index):onOpen('balances',undefined,false,item.kind)}><ShortcutIcon choice={choice}/><span><small>{item.name}{connected?' '+item.number:''}</small><b>{connected?value.toLocaleString('ru-RU')+' ₽':'Подключите счёт'}</b></span></button><button className="wq-topup" onClick={()=>connected?onOpen('balances',item.index,true):onOpen('balances',undefined,false,item.kind)}>{connected?'Пополнить':'Подключить'}</button></div>
}
