import { WalletModal } from './wallet-modal';
import { BalanceOfferGrid } from './balance-offers';
import { FoundCheckbox } from './found-checkbox';
import { TramFront, Radio, Wallet, Plus, ChevronRight, Smartphone, Wifi, ParkingCircle, Route } from 'lucide-react';
import { useCallback, useState } from 'react';
import { startingSubscriptions, type Subscription } from './subscription-detail';
import './wallet-empty.css';
export type BalanceService = "card" | "mobile" | "parking" | "internet" | "avtodor";
export type ConnectionKind = BalanceService | "balance" | "subscription";
export type FoundAccount = { name: string; note: string; icon: string; amount: number; index: number };
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

function formatIdentifier(value: string, service: BalanceService) {
  const digits = value.replace(/\D/g, '');
  if (service === 'card') return (digits.slice(0, 24).match(/.{1,4}/g) ?? []).join(' ');
  if (service !== 'mobile' && service !== 'parking' && service !== 'internet') return value.replace(/[^\d+() .-]/g, '');
  const local = (digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits).slice(0, 10);
  if (!local) return digits ? '+7 ' : '';
  return '+7 ' + [local.slice(0, 3), local.slice(3, 6), local.slice(6, 8), local.slice(8, 10)].filter(Boolean).join(' ');
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
  const [numberFocused, setNumberFocused] = useState(false);
  const [internetAccount, setInternetAccount] = useState(false);
  const [name, setName] = useState("");
  const [naming, setNaming] = useState(initialNaming ?? false);
  const isCard = service === "card";
  const isAvtodor = service === "avtodor";
  const usesAccountNumber = isCard || isAvtodor;
  const digits = number.replace(/\D/g, "");
  const phone = digits.match(/^(?:[78])?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  const validNumber = usesAccountNumber || internetAccount ? /^\d{4,24}$/.test(digits) : phone !== null;
  const label = isCard ? "Номер транспортной карты"
    : isAvtodor ? "Номер лицевого счёта"
    : internetAccount ? "Номер лицевого счёта" : "Номер телефона";
  const description = isCard ? 'Номер указан на обратной стороне транспортной карты.'
    : isAvtodor ? 'Укажите номер транспондера или лицевого счёта Автодора.'
    : service === 'internet' ? 'Укажите номер телефона, к которому привязан интернет, или номер лицевого счёта.' : undefined;
  const mask = isCard ? '0000 0000 00' : isAvtodor ? '0000000000' : internetAccount ? '' : '+7 000 000 00 00';
  const maskRemainder = numberFocused && number && mask && number.length < mask.length ? mask.slice(number.length) : '';

  return (
    <WalletModal compact className="we-connect-modal" sharedHeight={sharedHeight} onMeasureHeight={onMeasureHeight} title={naming ? "Назовите карту" : services[service].name} onClose={onClose} onBack={naming ? () => { setNaming(false); onNamingChange?.(false); } : undefined}>
      <form className="we-manual we-balance-form" data-prototype-screen={`${service}/${naming?'name':'identifier'}`} onSubmit={event => {
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
          name: isCard ? name.trim() : service === 'internet' ? 'Интернет' : service === 'mobile' ? 'Мобильная связь' : services[service].name,
          note: usesAccountNumber || internetAccount ? `·· ${digits.slice(-4)}` : `+7 ${phone?.slice(1).join(" ")}`,
          value: 0,
        });
      }}>
        {(!naming || initialNaming) && (
          <div className="we-astra-field"><label className="we-astra-input"><span>{label}</span><div className="we-masked-input">{maskRemainder && <div className="we-mask-hint" aria-hidden="true"><span>{number}</span>{maskRemainder}</div>}<input key="number" required type={usesAccountNumber || internetAccount ? "text" : "tel"} inputMode={usesAccountNumber || internetAccount ? "numeric" : "tel"} value={number} onFocus={()=>setNumberFocused(true)} onBlur={()=>setNumberFocused(false)} onChange={event => setNumber(internetAccount ? event.target.value.replace(/\D/g, '').slice(0, 24) : formatIdentifier(event.target.value, service))} placeholder={numberFocused && mask ? mask : label} maxLength={32} aria-describedby={description?'balance-field-description':undefined} /></div></label>{description&&<p id="balance-field-description" className="we-astra-description">{description}</p>}{service==='internet'&&<button type="button" className="we-identifier-switch" onClick={()=>{setInternetAccount(!internetAccount);setNumber('')}}>{internetAccount?'Указать номер телефона':'Указать лицевой счёт'}</button>}</div>
        )}
        {naming && <label className="we-astra-input"><span>Название карты</span><input key="name" required maxLength={60} value={name} onChange={event => setName(event.target.value)} placeholder="Название карты" /></label>}
        <button type="submit" disabled={!validNumber || (naming && !name.trim())}>{isCard && !naming ? "Продолжить" : "Добавить"}</button>
      </form>
    </WalletModal>
  );
}
export function WalletEmpty({onAdd}:{onAdd:(kind:ConnectionKind)=>void}){return <section className="we-onboarding"><div className="we-illustration" aria-hidden="true"><span><Wallet size={30} strokeWidth={1.3}/></span><i><Plus size={16}/></i></div><h2>Соберите свой кошелёк</h2><p>Карты и внешние счета —<br/>всё, что вы пополняете и оплачиваете.</p><div className="we-start-options"><button onClick={()=>onAdd('card')}><span className="we-option-icon"><TramFront size={21}/></span><span><b>Транспортная карта</b><small>Проверяйте баланс и пополняйте за пару нажатий</small></span><ChevronRight size={15}/></button><button onClick={()=>onAdd('balance')}><span className="we-option-icon"><Wallet size={21}/></span><span><b>Внешний баланс</b><small>Телефон, домашний интернет или парковка</small></span><ChevronRight size={15}/></button></div></section>}
export function WalletCategoryEmpty({kind,onAdd}:{kind:'balances'|'subscriptions';onAdd:(kind:ConnectionKind)=>void}){return <section className="we-category"><span className="we-category-icon">{kind==='balances'?<Wallet size={27} strokeWidth={1.4}/>:<Radio size={27} strokeWidth={1.4}/>}</span><h2>{kind==='balances'?'Балансы ещё не добавлены':'Подписок пока нет'}</h2><p>{kind==='balances'?'Добавьте карту или внешний счёт, чтобы видеть остаток и пополнять его здесь.':'Добавьте сервис, чтобы видеть регулярные расходы и получать напоминания о списаниях.'}</p><button onClick={()=>onAdd(kind==='balances'?'balance':'subscription')}><Plus size={15}/>{kind==='balances'?'Добавить баланс':'Добавить подписку'}</button></section>}
export function WalletConnect({kind,onChoose,onKind,onClose,onCustom,onAddBalance,initialNaming,initialManual,foundAccounts=[],onAddFound,onNamingChange}:{initialNaming?:boolean;initialManual?:boolean;foundAccounts?:FoundAccount[];onAddFound?:(selected:number[])=>void;onNamingChange?:(naming:boolean)=>void;onAddBalance:(balance:NewBalance)=>void;kind:ConnectionKind|null;onCustom:(subscription:Subscription)=>void;onChoose:(kind:ConnectionKind,index:number)=>void;onKind:(kind:ConnectionKind)=>void;onClose:()=>void}){
 const [manual,setManual]=useState(initialManual??false);
 const [selectedFound,setSelectedFound]=useState<number[]>(()=>foundAccounts.map(account=>account.index));
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
     {foundAccounts.map(account => <button type="button" className="bn-row we-found-choice" role="checkbox" aria-checked={selectedFound.includes(account.index)} key={account.name} onClick={()=>setSelectedFound(selected=>selected.includes(account.index)?selected.filter(index=>index!==account.index):[...selected,account.index])}>
      <span className="bn-row-icon"><img src={account.icon} alt=""/></span>
      <span className="bn-row-info"><b>{account.name}</b><small>{account.note}</small></span>
      <FoundCheckbox selected={selectedFound.includes(account.index)}/>
     </button>)}
     <button type="button" className="we-found-add" disabled={!selectedFound.length} onClick={()=>onAddFound?.(selectedFound)}>{selectedFound.length===foundAccounts.length?'Добавить все':'Добавить'}</button>
    </div>}
    <BalanceOfferGrid onSelect={onKind}/>
   </div>
  </WalletModal>;
 }
 const title='Добавить подписку';
 return <WalletModal title={title} description="Выберите, что хотите видеть в кошельке." onClose={onClose}>{manual?<form className="we-manual" data-prototype-screen="subscription/manual" onSubmit={e=>{e.preventDefault();const d=new Date(date+'T00:00:00');const days=Math.max(0,Math.ceil((d.getTime()-new Date().setHours(0,0,0,0))/86400000));onCustom({name:name.trim(),price:Number(price),date:d.toLocaleDateString('ru-RU',{day:'numeric',month:'long'}),days,icon:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" rx="20" fill="%23e7e7eb"/%3E%3Cpath d="M13 15h14v10H13z" fill="none" stroke="%235b5b62" stroke-width="2"/%3E%3C/svg%3E',spent:0,payments:0,active:true,notify:false})}}><label>Название сервиса<input required maxLength={60} value={name} onChange={e=>setName(e.target.value)} placeholder="Например, онлайн-кинотеатр"/></label><label>Стоимость в месяц, ₽<input required type="number" min="1" step="0.01" value={price} onChange={e=>setPrice(e.target.value)} /></label><label>Следующее списание<input required type="date" value={date} onChange={e=>setDate(e.target.value)} /></label><button type="submit" disabled={!name.trim()}>Добавить подписку</button></form>:<div className="we-connect-list" data-prototype-screen="subscription/choose-service"><button onClick={()=>setManual(true)}><Plus size={21}/><b>Добавить вручную</b><ChevronRight size={15}/></button>{startingSubscriptions.map((s,i)=><button key={s.name} onClick={()=>onChoose(kind,i)}><img src={s.icon} alt=""/><span><b>{s.name}</b><small>{s.price.toLocaleString('ru-RU')} ₽ / месяц</small></span><Plus size={17}/></button>)}</div>}</WalletModal>
}
