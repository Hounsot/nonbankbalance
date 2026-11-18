import type { ConnectionKind } from './wallet-empty';
import transport from '../../assets/balances-new/offer-transport.png';
import mobile from '../../assets/balances-new/offer-mobile.png';
import parking from '../../assets/balances-new/offer-parking.png';
import internet from '../../assets/balances-new/offer-internet.png';
import avtodor from '../../assets/balances-new/offer-avtodor.png';

const options = [
  { title: 'Транспортные карты', note: 'Тройка, Подорожник, социальные и другие карты', kind: 'card', cls: 'transport', image: transport },
  { title: 'Сотовая связь', note: 'МТС, Beeline, Мегафон и другие', kind: 'mobile', cls: 'mobile', image: mobile },
  { title: 'Парковки России', note: '', kind: 'parking', cls: 'parking', image: parking },
  { title: 'Домашний интернет', note: 'МТС / МГТС', kind: 'internet', cls: 'internet', image: internet },
  { title: 'Автодор', note: '', kind: 'avtodor', cls: 'avtodor', image: avtodor },
] as const;

export function BalanceOfferGrid({ onSelect, includeCards = true }: {
  onSelect: (kind: ConnectionKind) => void;
  includeCards?: boolean;
}) {
  return <div className="bn-grid">
    {options.filter(option => includeCards || option.kind !== 'card').map(option =>
      <button type="button" key={option.kind} className={'bn-offer ' + option.cls} onClick={() => onSelect(option.kind)}>
        <span><b>{option.kind === 'parking' ? <>Парковки<br/>России</> : option.title}</b>{option.note && <small>{option.kind === 'mobile' ? <>МТС, Beeline,<br/>Мегафон<br/>и другие</> : option.note}</small>}</span>
        <img src={option.image} alt=""/>
      </button>
    )}
  </div>;
}
