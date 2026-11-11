import { WalletModal } from './wallet-modal';
import { balanceLogos } from './balance-logos';
import { ChevronRight } from 'lucide-react';
import { balanceServiceLogo, type BalanceService, type ConnectionKind } from './wallet-empty';
import placeholder from '../../assets/balances-new/983da.png?inline';
import warning from '../../assets/balances-new/978a1.svg?inline';
import chevron from '../../assets/balances-new/9afb3.svg?inline';
import pinnedTroika from '../../assets/balances-new/f00dd.svg?inline';
import pinIcon from '../../assets/balances-new/864f9.svg?inline';
import './balances-new.css';

type Balance={name:string;note:string;value:number;service?:BalanceService};
type Settings={hidden?:boolean;auto?:boolean;notify?:boolean};
export type BalanceOverviewSheet="attention"|"pin"|"autotopups"|"balance-notifications";
export function BalancesNew({cards,balances,settings,pinnedIndex,onPin,onOpen,onConnect,overviewSheet,onOverviewSheet,onCloseOverview}:{cards:number[];balances:Balance[];settings:Settings[];pinnedIndex:number|null;onPin:(index:number)=>void;overviewSheet:BalanceOverviewSheet|null;onOverviewSheet:(sheet:BalanceOverviewSheet)=>void;onCloseOverview:()=>void;onOpen:(type:'card'|'balance',index:number)=>void;onConnect:(kind:ConnectionKind)=>void}){
 const rows=[
  {name:'Мобильная связь',note:'МТС +7 966 127 60 08',amount:balances[0].value,icon:balanceLogos[2],hidden:settings[2].hidden,type:'balance' as const,index:0},
  {name:'Тройка',note:'·· 4328',amount:cards[0],icon:balanceLogos[0],hidden:settings[0].hidden,type:'card' as const,index:0},
  {name:'Парковки России',note:'А 777 ВС 77',amount:balances[2].value,icon:balanceLogos[4],hidden:settings[4].hidden,type:'balance' as const,index:2},
  {name:'Интернет',note:'МГТС ·· 4218',amount:balances[1].value,icon:balanceLogos[3],hidden:settings[3].hidden,type:'balance' as const,index:1},
  ...balances.slice(3).map((balance, offset) => ({
   name: balance.name, note: balance.note, amount: balance.value,
   icon: balanceLogos[balanceServiceLogo(balance.service!)],
   hidden: settings[offset+5].hidden, type: 'balance' as const, index: offset+3,
  })),
 ];
 const options=[{title:'Транспортные карты',note:'Тройка, подорожник, социальные карты',kind:'card' as const,cls:'transport'}, {title:'Сотовая связь',note:'Номера МТС, билайн, мегафон, теле2 и т‑мобайл',kind:'mobile' as const,cls:'mobile'}, {title:'Парковки России',note:'',kind:'parking' as const,cls:'parking'}, {title:'Домашний интернет',note:'МТС / МГТС',kind:'internet' as const,cls:'internet'}, {title:'Автодор',note:'',kind:'avtodor' as const,cls:'avtodor'}];
 const visibleRows=rows.filter(row=>!row.hidden);
 const accountIndex=(row:typeof rows[number])=>row.type==='card'?row.index:row.index+2;
 const isNeutral=(row:typeof rows[number])=>row.type==='balance'&&row.index===1;
 const pinned=visibleRows.find(row=>accountIndex(row)===pinnedIndex);
 const automaticRows=visibleRows.filter(row=>settings[row.type==='card'?row.index:row.index+2].auto);
 const notifiedRows=visibleRows.filter(row=>settings[row.type==='card'?row.index:row.index+2].notify);
 const lowRows=visibleRows.filter(row=>row.amount<0);
 const attentionLabel=lowRows.length===1?'Один счёт требует внимания':`${lowRows.length} счёта требуют внимания`;
 const sheetTitle=overviewSheet==='pin'?'Закрепить баланс':overviewSheet==='autotopups'?'Автопополнения':overviewSheet==='balance-notifications'?'Уведомления':'Требует внимания';
 const sheetRows=overviewSheet==='attention'?lowRows:visibleRows;
 const renderRow=(row:typeof rows[number],onClick=()=>onOpen(row.type,row.index))=><button key={accountIndex(row)} className="bn-row" onClick={onClick}><span className={"bn-row-icon"+(isNeutral(row)?" bn-row-icon-neutral":"")}><img src={row.icon} alt=""/></span><span className="bn-row-info"><b>{row.name}</b><small>{row.note}</small></span><span className={row.amount<0?'bn-negative':''}>{row.amount.toLocaleString('ru-RU')} ₽</span><ChevronRight size={20}/></button>;
 return <div className="bn">
  <div className="bn-overview">
   <div className="bn-overview-grid">
    <div className="bn-overview-pin">
     {pinned&&<img className={"bn-pin-icon"+(isNeutral(pinned)?" bn-pin-icon-neutral":pinned.icon===balanceLogos[2]?" bn-pin-icon-square":"")} src={pinned.type==='card'&&pinned.index===0?pinnedTroika:pinned.icon} alt=""/>}
     <button className="bn-pin-select" type="button" onClick={()=>onOverviewSheet('pin')} aria-haspopup="dialog" aria-label={pinned?'Изменить закреплённый баланс':undefined}><img src={pinIcon} alt=""/>{!pinned&&'Закрепить баланс'}</button>
     {pinned&&<button className="bn-pin-account" type="button" onClick={()=>onOpen(pinned.type,pinned.index)}><span>{pinned.name}{pinned.type==='card'?' '+pinned.note:''}</span><strong>{pinned.amount.toLocaleString('ru-RU')} ₽</strong></button>}
    </div>
    <button className="bn-auto-tile" type="button" onClick={()=>onOverviewSheet('autotopups')} aria-haspopup="dialog"><strong>Автопополнения</strong><small>{automaticRows.length? automaticRows.length+' подключено':'Настроить'}</small></button>
    <button className="bn-auto-tile" type="button" onClick={()=>onOverviewSheet('balance-notifications')} aria-haspopup="dialog">

     <strong>Уведомления</strong>
     <small>{notifiedRows.length?notifiedRows.length+' подключено':'Настроить'}</small>
    </button>
   </div>
   {lowRows.length>0&&<button className="bn-status-banner" aria-haspopup="dialog" onClick={()=>onOverviewSheet('attention')}><img src={warning} alt=""/><span>{attentionLabel}</span><img src={chevron} alt=""/></button>}
  </div>
  <section className="bn-list"><h2>Ваши балансы</h2>{visibleRows.length?visibleRows.map(row=>renderRow(row)):<p className="bn-empty">Добавьте карту или счёт, чтобы видеть баланс здесь.</p>}</section>
<section className="bn-offers"><h2>Ваши балансы в одном месте</h2><div className="bn-grid">{options.map(option=><button key={option.cls} className={'bn-offer '+option.cls} onClick={()=>onConnect(option.kind)}><span><b>{option.title}</b>{option.note&&<small>{option.note}</small>}</span><img src={placeholder} alt=""/></button>)}</div><div className="bn-add-slot" aria-hidden="true"/></section>
  {overviewSheet&&<WalletModal title={sheetTitle} onClose={onCloseOverview} description={
    overviewSheet==='autotopups'&&automaticRows.length===0?'Выберите счёт для настройки автопополнения':
    overviewSheet==='balance-notifications'&&notifiedRows.length===0?'Выберите счёт для подключения уведомления':undefined
  }>
    {sheetRows.length?sheetRows.map(row=>overviewSheet==='pin'?renderRow(row,()=>{onPin(accountIndex(row));onCloseOverview()}):renderRow(overviewSheet==='autotopups'?{...row,note:automaticRows.includes(row)?'Автопополнение включено':'Автопополнение выключено'}:overviewSheet==='balance-notifications'?{...row,note:notifiedRows.includes(row)?'Уведомления включены':'Уведомления выключены'}:row)):<p className="bn-empty">{overviewSheet==='attention'?'Все балансы в порядке':'Нет подключённых счетов'}</p>}
  </WalletModal>}
 </div>
}
