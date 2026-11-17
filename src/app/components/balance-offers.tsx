import type { ConnectionKind } from './wallet-empty';
import placeholder from '../../assets/balances-new/983da.png?inline';

const options = [
  { title: 'Транспортные карты', note: 'Тройка, подорожник, социальные карты', kind: 'card', cls: 'transport' },
  { title: 'Сотовая связь', note: 'Номера МТС, билайн, мегафон, теле2 и т‑мобайл', kind: 'mobile', cls: 'mobile' },
  { title: 'Парковки России', note: '', kind: 'parking', cls: 'parking' },
  { title: 'Домашний интернет', note: 'МТС / МГТС', kind: 'internet', cls: 'internet' },
  { title: 'Автодор', note: '', kind: 'avtodor', cls: 'avtodor' },
] as const;

export function BalanceOfferGrid({ onSelect, includeCards = true }: {
  onSelect: (kind: ConnectionKind) => void;
  includeCards?: boolean;
}) {
  return <div className="bn-grid">
    {options.filter(option => includeCards || option.kind !== 'card').map(option =>
      <button type="button" key={option.kind} className={'bn-offer ' + option.cls} onClick={() => onSelect(option.kind)}>
        <span><b>{option.title}</b>{option.note && <small>{option.note}</small>}</span>
        <img src={placeholder} alt=""/>
      </button>
    )}
  </div>;
}
