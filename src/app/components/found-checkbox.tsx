import unchecked from '../../assets/checkbox/unselected.svg?inline';
import checked from '../../assets/checkbox/selected.svg?inline';
import check from '../../assets/checkbox/check.svg?inline';

export function FoundCheckbox({ selected }: { selected: boolean }) {
 return <span className="found-checkbox" aria-hidden="true"><span className="found-checkbox-box"><img src={selected ? checked : unchecked} alt=""/>{selected && <img className="found-checkbox-mark" src={check} alt=""/>}</span></span>;
}
