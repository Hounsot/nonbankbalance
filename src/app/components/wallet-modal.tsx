import { useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import closeIcon from '../../assets/balances-new/b1498.svg?inline';
import './wallet-modal.css';

export function WalletModal({title,description,onClose,children,compact=false,className='',sharedHeight,onMeasureHeight}:{title:string;description?:string;onClose:()=>void;children:ReactNode;compact?:boolean;className?:string;sharedHeight?:number;onMeasureHeight?:(height:number)=>void}){
  const titleId=useId();
  const descriptionId=useId();
  const sectionRef=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    const section=sectionRef.current;
    const header=section?.querySelector<HTMLElement>('.wallet-modal-header');
    const content=section?.querySelector<HTMLElement>('.wallet-modal-content');
    if(!section||!header||!content||!onMeasureHeight)return;
    const measure=()=>onMeasureHeight(header.offsetHeight+content.scrollHeight);
    const observer=new ResizeObserver(measure);
    observer.observe(header);
    observer.observe(content);
    if(content.firstElementChild)observer.observe(content.firstElementChild);
    measure();
    return()=>observer.disconnect();
  },[onMeasureHeight,children]);
  return (
    <div className={`bc-overlay wallet-modal-overlay${compact?' wallet-modal-overlay-compact':''} ${className}`} onClick={onClose}>
      <div className="wallet-modal-position" style={sharedHeight?{height:`min(${sharedHeight}px, calc(100% - 86px))`}:undefined}>
        <div className="wallet-modal-grabber" aria-hidden="true"/>
        <section ref={sectionRef} className={`wallet-modal${sharedHeight?' wallet-modal-shared-height':''}`} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description?descriptionId:undefined} onClick={event=>event.stopPropagation()} onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();onClose()}}}>
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
