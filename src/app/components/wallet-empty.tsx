import { WalletModal } from './wallet-modal';
import { TramFront, Radio, Wallet, Plus, ChevronRight, Smartphone, Wifi, ParkingCircle } from 'lucide-react';
import { useState } from 'react';
import { startingSubscriptions, type Subscription } from './subscription-detail';
import './wallet-empty.css';
export type BalanceService = "card" | "mobile" | "parking" | "internet";
export type ConnectionKind = BalanceService | "balance" | "subscription";
export type NewBalance = { service: BalanceService; name: string; note: string; value: number };

const services = {
  card: { name: "Транспортная карта", Icon: TramFront, logoIndex: 0 },
  mobile: { name: "Сотовая связь", Icon: Smartphone, logoIndex: 2 },
  parking: { name: "Парковки России", Icon: ParkingCircle, logoIndex: 4 },
  internet: { name: "Домашний интернет", Icon: Wifi, logoIndex: 3 },
};

export function balanceServiceLogo(service: BalanceService) {
  return services[service].logoIndex;
}

function BalanceConnectionForm({ service, onAdd, onClose }: {
  service: BalanceService;
  onAdd: (balance: NewBalance) => void;
  onClose: () => void;
}) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [naming, setNaming] = useState(false);
  const isCard = service === "card";
  const digits = number.replace(/\D/g, "");
  const phone = digits.match(/^(?:[78])?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  const validNumber = isCard ? /^\d{4,24}$/.test(digits) : phone !== null;
  const label = isCard ? "Номер транспортной карты"
    : service === "internet" ? "Номер телефона, на который оформлен договор" : "Номер телефона";

  return (
    <WalletModal title={naming ? "Назовите карту" : services[service].name} onClose={onClose}>
      <form className="we-manual" onSubmit={event => {
        event.preventDefault();
        if (!validNumber) return;
        if (isCard && !naming) {
          setNaming(true);
          return;
        }
        if (isCard && !name.trim()) return;
        onAdd({
          service,
          name: isCard ? name.trim() : services[service].name,
          note: isCard ? `·· ${digits.slice(-4)}` : `+7 ${phone!.slice(1).join(" ")}`,
          value: 0,
        });
      }}>
        {naming ? (
          <label>Название карты<input key="name" required maxLength={60} value={name} onChange={event => setName(event.target.value)} placeholder="Например, Тройка" /></label>
        ) : (
          <label>{label}<input key="number" required type={isCard ? "text" : "tel"} inputMode={isCard ? "numeric" : "tel"} value={number} onChange={event => setNumber(event.target.value.replace(/[^\d+() .-]/g, ""))} placeholder={isCard ? "Введите номер карты" : "+7 900 000 00 00"} maxLength={32} /></label>
        )}
        <button type="submit" disabled={!validNumber || (naming && !name.trim())}>{isCard && !naming ? "Продолжить" : "Добавить"}</button>
        {naming && <button type="button" className="we-back" onClick={() => setNaming(false)}>Изменить номер</button>}
      </form>
    </WalletModal>
  );
}
export function WalletEmpty({onAdd}:{onAdd:(kind:ConnectionKind)=>void}){return <section className="we-onboarding"><div className="we-illustration" aria-hidden="true"><span><Wallet size={30} strokeWidth={1.3}/></span><i><Plus size={16}/></i></div><h2>Соберите свой кошелёк</h2><p>Карты и внешние счета —<br/>всё, что вы пополняете и оплачиваете.</p><div className="we-start-options"><button onClick={()=>onAdd('card')}><span className="we-option-icon"><TramFront size={21}/></span><span><b>Транспортная карта</b><small>Проверяйте баланс и пополняйте за пару нажатий</small></span><ChevronRight size={15}/></button><button onClick={()=>onAdd('balance')}><span className="we-option-icon"><Wallet size={21}/></span><span><b>Внешний баланс</b><small>Телефон, домашний интернет или парковка</small></span><ChevronRight size={15}/></button></div></section>}
export function WalletCategoryEmpty({kind,onAdd}:{kind:'balances'|'subscriptions';onAdd:(kind:ConnectionKind)=>void}){return <section className="we-category"><span className="we-category-icon">{kind==='balances'?<Wallet size={27} strokeWidth={1.4}/>:<Radio size={27} strokeWidth={1.4}/>}</span><h2>{kind==='balances'?'Балансы ещё не добавлены':'Подписок пока нет'}</h2><p>{kind==='balances'?'Добавьте карту или внешний счёт, чтобы видеть остаток и пополнять его здесь.':'Добавьте сервис, чтобы видеть регулярные расходы и получать напоминания о списаниях.'}</p><button onClick={()=>onAdd(kind==='balances'?'balance':'subscription')}><Plus size={15}/>{kind==='balances'?'Добавить баланс':'Добавить подписку'}</button></section>}
export function WalletConnect({kind,onChoose,onKind,onClose,onCustom,onAddBalance}:{onAddBalance:(balance:NewBalance)=>void;kind:ConnectionKind|null;onCustom:(subscription:Subscription)=>void;onChoose:(kind:ConnectionKind,index:number)=>void;onKind:(kind:ConnectionKind)=>void;onClose:()=>void}){
 const [manual,setManual]=useState(false);
 const [name,setName]=useState(''); const [price,setPrice]=useState(''); const [date,setDate]=useState('');
 if (kind && kind !== "balance" && kind !== "subscription") {
  return <BalanceConnectionForm key={kind} service={kind} onAdd={onAddBalance} onClose={onClose}/>;
 }
 const title=kind==='subscription'?'Добавить подписку':'Что добавить?';
 const choices=kind==='balance'?(['mobile','parking','internet'] as const):(['card','mobile','parking','internet'] as const);
 return <WalletModal title={title} description={kind==='subscription'?'Выберите, что хотите видеть в кошельке.':'Выберите, что хотите добавить.'} onClose={onClose}>{kind!=='subscription'?<div className="we-connect-list">{choices.map(service=>{const {name,Icon}=services[service];return <button type="button" key={service} onClick={()=>onKind(service)}><Icon size={21}/><b>{name}</b><ChevronRight size={15}/></button>})}</div>:manual?<form className="we-manual" onSubmit={e=>{e.preventDefault();const d=new Date(date+'T00:00:00');const days=Math.max(0,Math.ceil((d.getTime()-new Date().setHours(0,0,0,0))/86400000));onCustom({name:name.trim(),price:Number(price),date:d.toLocaleDateString('ru-RU',{day:'numeric',month:'long'}),days,icon:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" rx="20" fill="%23e7e7eb"/%3E%3Cpath d="M13 15h14v10H13z" fill="none" stroke="%235b5b62" stroke-width="2"/%3E%3C/svg%3E',spent:0,payments:0,active:true,notify:false})}}><label>Название сервиса<input required maxLength={60} value={name} onChange={e=>setName(e.target.value)} placeholder="Например, онлайн-кинотеатр"/></label><label>Стоимость в месяц, ₽<input required type="number" min="1" step="0.01" value={price} onChange={e=>setPrice(e.target.value)} /></label><label>Следующее списание<input required type="date" value={date} onChange={e=>setDate(e.target.value)} /></label><button type="submit" disabled={!name.trim()}>Добавить подписку</button></form>:<div className="we-connect-list"><button onClick={()=>setManual(true)}><Plus size={21}/><b>Добавить вручную</b><ChevronRight size={15}/></button>{startingSubscriptions.map((s,i)=><button key={s.name} onClick={()=>onChoose(kind,i)}><img src={s.icon} alt=""/><span><b>{s.name}</b><small>{s.price.toLocaleString('ru-RU')} ₽ / месяц</small></span><Plus size={17}/></button>)}</div>}</WalletModal>
}
