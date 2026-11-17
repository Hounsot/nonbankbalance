import { WalletModal } from './wallet-modal';
import { BalanceOfferGrid } from './balance-offers';
import { TramFront, Radio, Wallet, Plus, ChevronRight, Smartphone, Wifi, ParkingCircle, Route } from 'lucide-react';
import { useCallback, useState } from 'react';
import { startingSubscriptions, type Subscription } from './subscription-detail';
import './wallet-empty.css';
export type BalanceService = "card" | "mobile" | "parking" | "internet" | "avtodor";
export type ConnectionKind = BalanceService | "balance" | "subscription";
export type FoundAccount = { name: string; note: string; icon: string; amount: number };
export type NewBalance = { service: BalanceService; name: string; note: string; value: number };

const services = {
  card: { name: "Транспортная карта", Icon: TramFront, logoIndex: 0 },
  mobile: { name: "Сотовая связь", Icon: Smartphone, logoIndex: 2 },
  parking: { name: "Парковки России", Icon: ParkingCircle, logoIndex: 4 },
  internet: { name: "Домашний интернет", Icon: Wifi, logoIndex: 3 },
  avtodor: { name: "Автодор", Icon: Route, logoIndex: 5 },
};

export function balanceServiceLogo(service: BalanceService) {
  return services[service].logoIndex;
}

function BalanceConnectionForm({ service, onAdd, onClose, initialNaming, onNamingChange, sharedHeight, onMeasureHeight }: {
  service: BalanceService;
  initialNaming?: boolean;
  onNamingChange?: (naming: boolean) => void;
  sharedHeight: number;
  onMeasureHeight: (height: number) => void;
  onAdd: (balance: NewBalance) => void;
  onClose: () => void;
}) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [naming, setNaming] = useState(initialNaming ?? false);
  const isCard = service === "card";
  const isAvtodor = service === "avtodor";
  const usesAccountNumber = isCard || isAvtodor;
  const digits = number.replace(/\D/g, "");
  const phone = digits.match(/^(?:[78])?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  const validNumber = usesAccountNumber ? /^\d{4,24}$/.test(digits) : phone !== null;
  const label = isCard ? "Номер транспортной карты"
    : isAvtodor ? "Номер лицевого счёта"
    : service === "internet" ? "Номер телефона, на который оформлен договор" : "Номер телефона";

  return (
    <WalletModal compact className="we-connect-modal" sharedHeight={sharedHeight} onMeasureHeight={onMeasureHeight} title={naming ? "Назовите карту" : services[service].name} onClose={onClose}>
      <form className="we-manual" data-prototype-screen={`${service}/${naming?'name':'identifier'}`} onSubmit={event => {
        event.preventDefault();
        if (!validNumber) return;
        if (isCard && !naming) {
          setNaming(true);
          onNamingChange?.(true);
          return;
        }
        if (isCard && !name.trim()) return;
        onAdd({
          service,
          name: isCard ? name.trim() : services[service].name,
          note: usesAccountNumber ? `·· ${digits.slice(-4)}` : `+7 ${phone?.slice(1).join(" ")}`,
          value: 0,
        });
      }}>
        {(!naming || initialNaming) && (
          <label>{label}<input key="number" required type={usesAccountNumber ? "text" : "tel"} inputMode={usesAccountNumber ? "numeric" : "tel"} value={number} onChange={event => setNumber(event.target.value.replace(/[^\d+() .-]/g, ""))} placeholder={isCard ? "Введите номер карты" : isAvtodor ? "Введите номер счёта" : "+7 900 000 00 00"} maxLength={32} /></label>
        )}
        {naming && <label>Название карты<input key="name" required maxLength={60} value={name} onChange={event => setName(event.target.value)} placeholder="Например, Тройка" /></label>}
        <button type="submit" disabled={!validNumber || (naming && !name.trim())}>{isCard && !naming ? "Продолжить" : "Добавить"}</button>
        {naming && !initialNaming && <button type="button" className="we-back" onClick={() => { setNaming(false); onNamingChange?.(false); }}>Изменить номер</button>}
      </form>
    </WalletModal>
  );
}
export function WalletEmpty({onAdd}:{onAdd:(kind:ConnectionKind)=>void}){return <section className="we-onboarding"><div className="we-illustration" aria-hidden="true"><span><Wallet size={30} strokeWidth={1.3}/></span><i><Plus size={16}/></i></div><h2>Соберите свой кошелёк</h2><p>Карты и внешние счета —<br/>всё, что вы пополняете и оплачиваете.</p><div className="we-start-options"><button onClick={()=>onAdd('card')}><span className="we-option-icon"><TramFront size={21}/></span><span><b>Транспортная карта</b><small>Проверяйте баланс и пополняйте за пару нажатий</small></span><ChevronRight size={15}/></button><button onClick={()=>onAdd('balance')}><span className="we-option-icon"><Wallet size={21}/></span><span><b>Внешний баланс</b><small>Телефон, домашний интернет или парковка</small></span><ChevronRight size={15}/></button></div></section>}
export function WalletCategoryEmpty({kind,onAdd}:{kind:'balances'|'subscriptions';onAdd:(kind:ConnectionKind)=>void}){return <section className="we-category"><span className="we-category-icon">{kind==='balances'?<Wallet size={27} strokeWidth={1.4}/>:<Radio size={27} strokeWidth={1.4}/>}</span><h2>{kind==='balances'?'Балансы ещё не добавлены':'Подписок пока нет'}</h2><p>{kind==='balances'?'Добавьте карту или внешний счёт, чтобы видеть остаток и пополнять его здесь.':'Добавьте сервис, чтобы видеть регулярные расходы и получать напоминания о списаниях.'}</p><button onClick={()=>onAdd(kind==='balances'?'balance':'subscription')}><Plus size={15}/>{kind==='balances'?'Добавить баланс':'Добавить подписку'}</button></section>}
export function WalletConnect({kind,onChoose,onKind,onClose,onCustom,onAddBalance,initialNaming,initialManual,foundAccounts=[],onAddFound,onNamingChange}:{initialNaming?:boolean;initialManual?:boolean;foundAccounts?:FoundAccount[];onAddFound?:()=>void;onNamingChange?:(naming:boolean)=>void;onAddBalance:(balance:NewBalance)=>void;kind:ConnectionKind|null;onCustom:(subscription:Subscription)=>void;onChoose:(kind:ConnectionKind,index:number)=>void;onKind:(kind:ConnectionKind)=>void;onClose:()=>void}){
 const [manual,setManual]=useState(initialManual??false);
 const [name,setName]=useState(''); const [price,setPrice]=useState(''); const [date,setDate]=useState('');
 const [sharedHeight,setSharedHeight]=useState(440);
 const measureHeight=useCallback((height:number)=>setSharedHeight(previous=>Math.max(previous,height)),[]);
 if (kind && kind !== "balance" && kind !== "subscription") {
  return <BalanceConnectionForm sharedHeight={sharedHeight} onMeasureHeight={measureHeight} initialNaming={initialNaming} onNamingChange={onNamingChange} key={kind} service={kind} onAdd={onAddBalance} onClose={onClose}/>;
 }
 if (kind !== 'subscription') {
  return <WalletModal compact className="we-connect-modal" sharedHeight={sharedHeight} onMeasureHeight={measureHeight} title="Добавить баланс" onClose={onClose}>
   <div className="we-connect-list" data-prototype-screen={kind === 'balance' ? 'balance/choose-service' : 'choose-service'}>
    {foundAccounts.length > 0 && <div className="we-found">
     <strong>Нашли по вашему номеру</strong>
     {foundAccounts.map(account => <div className="bn-row" key={account.name}>
      <span className="bn-row-icon"><img src={account.icon} alt=""/></span>
      <span className="bn-row-info"><b>{account.name}</b><small>{account.note}</small></span>
      <span className={account.amount < 0 ? 'bn-row-amount bn-negative' : 'bn-row-amount'}>{account.amount.toLocaleString('ru-RU')} ₽</span>
     </div>)}
     <button type="button" className="we-found-add" onClick={onAddFound}>Добавить найденные счета</button>
    </div>}
    <BalanceOfferGrid includeCards={kind !== 'balance'} onSelect={onKind}/>
   </div>
  </WalletModal>;
 }
 const title='Добавить подписку';
 return <WalletModal title={title} description="Выберите, что хотите видеть в кошельке." onClose={onClose}>{manual?<form className="we-manual" data-prototype-screen="subscription/manual" onSubmit={e=>{e.preventDefault();const d=new Date(date+'T00:00:00');const days=Math.max(0,Math.ceil((d.getTime()-new Date().setHours(0,0,0,0))/86400000));onCustom({name:name.trim(),price:Number(price),date:d.toLocaleDateString('ru-RU',{day:'numeric',month:'long'}),days,icon:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" rx="20" fill="%23e7e7eb"/%3E%3Cpath d="M13 15h14v10H13z" fill="none" stroke="%235b5b62" stroke-width="2"/%3E%3C/svg%3E',spent:0,payments:0,active:true,notify:false})}}><label>Название сервиса<input required maxLength={60} value={name} onChange={e=>setName(e.target.value)} placeholder="Например, онлайн-кинотеатр"/></label><label>Стоимость в месяц, ₽<input required type="number" min="1" step="0.01" value={price} onChange={e=>setPrice(e.target.value)} /></label><label>Следующее списание<input required type="date" value={date} onChange={e=>setDate(e.target.value)} /></label><button type="submit" disabled={!name.trim()}>Добавить подписку</button></form>:<div className="we-connect-list" data-prototype-screen="subscription/choose-service"><button onClick={()=>setManual(true)}><Plus size={21}/><b>Добавить вручную</b><ChevronRight size={15}/></button>{startingSubscriptions.map((s,i)=><button key={s.name} onClick={()=>onChoose(kind,i)}><img src={s.icon} alt=""/><span><b>{s.name}</b><small>{s.price.toLocaleString('ru-RU')} ₽ / месяц</small></span><Plus size={17}/></button>)}</div>}</WalletModal>
}
