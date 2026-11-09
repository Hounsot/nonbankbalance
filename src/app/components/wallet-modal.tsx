import { useId, type ReactNode } from 'react';
import closeIcon from '../../assets/balances-new/b1498.svg?inline';
import './wallet-modal.css';

export function WalletModal({title,description,onClose,children}:{title:string;description?:string;onClose:()=>void;children:ReactNode}){
  const titleId=useId();
  const descriptionId=useId();
  return (
    <div className="bc-overlay wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal-position">
        <div className="wallet-modal-grabber" aria-hidden="true"/>
        <section className="wallet-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description?descriptionId:undefined} onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();onClose()}}}>
          <header className="wallet-modal-header">
            <div className="wallet-modal-heading">
              <h2 id={titleId} className="wallet-modal-title">{title}</h2>
              <button type="button" className="wallet-modal-close" aria-label="Закрыть" autoFocus onClick={onClose}><img src={closeIcon} alt=""/></button>
            </div>
            {description&&<p id={descriptionId}>{description}</p>}
          </header>
          <div className="wallet-modal-content">{children}</div>
        </section>
      </div>
    </div>
  );
}
