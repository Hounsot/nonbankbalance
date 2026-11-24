import paymentChevron from "../../assets/payments/afc79.svg?inline";
import { balanceLogos } from "./balance-logos";
import troikaTemplate from "../../assets/balances-new/troika-emblem.png";
import type { WalletShortcut } from "./wallet-quick-payment";
import { PaymentsPaySection } from "./payments-pay-section";
import type { ConnectionKind } from "./wallet-empty";
import type { WalletOverview } from "./payment-wallet-entries";
import { useLayoutEffect, useRef, useState } from "react";
import searchButton from "../../assets/payments/search-button.png?inline";
import "./payments-screen.css";

import imgBox from "../../assets/payments/aef2c.svg?inline";
import imgNetworkWifi3Bar24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/payments/fbd01.svg?inline";
import imgNetworkCell24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/payments/b8182.svg?inline";
import imgBattery5Bar24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/payments/27e70.svg?inline";
import imgBox1 from "../../assets/payments/6848d.svg?inline";
import imgBox2 from "../../assets/payments/d069b.svg?inline";
import imgBox3 from "../../assets/payments/4c6a9.svg?inline";
import imgRussia from "../../assets/payments/ad78e.svg?inline";
import imgBox4 from "../../assets/payments/9dba5.svg?inline";
import imgRussia1 from "../../assets/payments/91527.svg?inline";
import imgRussia2 from "../../assets/payments/5b8d7.svg?inline";
import imgBox5 from "../../assets/payments/25c96.svg?inline";
import imgBox6 from "../../assets/payments/c57f4.svg?inline";
import imgBox7 from "../../assets/payments/f2e37.svg?inline";
import imgTinkoffBank from "../../assets/payments/17238.svg?inline";
import imgSberbank from "../../assets/payments/94acc.svg?inline";
import imgAlfaBank from "../../assets/payments/48303.svg?inline";
import imgBox8 from "../../assets/payments/05107.svg?inline";
import imgBox9 from "../../assets/payments/daef6.svg?inline";
import imgBox10 from "../../assets/payments/3fcdf.svg?inline";
import imgBox11 from "../../assets/payments/df4de.svg?inline";
import imgBox12 from "../../assets/payments/2e7c1.svg?inline";

function BalanceText({children,variant='name'}:{children:string;variant?:'name'|'note'|'amount'|'negative'}) {
 const ref=useRef<HTMLSpanElement>(null);
 const [overflow,setOverflow]=useState(false);
 useLayoutEffect(()=>{const el=ref.current;if(!el)return;let alive=true;const measure=()=>{if(alive)setOverflow(el.scrollWidth>el.clientWidth+1)};const observer=new ResizeObserver(measure);observer.observe(el);measure();document.fonts?.ready.then(measure);return()=>{alive=false;observer.disconnect()}},[children]);
 return <span ref={ref} className={`payments-balance-text ${variant}${overflow?' has-overflow':''}`}>{children}</span>;
}

export function PaymentsScreen({onWallet,overview,shortcut,onLearn}:{shortcut:WalletShortcut;onLearn:(step?:number)=>void;onWallet:(tab?:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind,subscription?:number)=>void;overview:WalletOverview}) {
 const searchRef=useRef<HTMLInputElement>(null);
  return (
    <div className="payments-screen"><div className="payments-scroll"><div className="bg-[var(--background\/lower,#f2f3f7)] border border-[var(--background\/stroke,rgba(188,195,208,0.5))] border-solid content-stretch flex flex-col gap-[12px] isolate items-start relative size-full" data-node-id="40002004:4934" data-name="Main Full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 z-[3]" data-node-id="40002151:23297" data-name="Navbar + card content">
        <div className="bg-[var(--background\/primary-elevated,white)] content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-node-id="40002151:23298" data-name="Navbar 2.0.1">
          <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start pb-[var(--16,16px)] pt-[var(--12,12px)] relative shrink-0 w-full" data-node-id="I40002151:23298;91207:227847" data-name="Container">
            <div className="content-stretch flex gap-[var(--16,16px)] items-center max-h-[44px] min-h-[44px] px-[var(--20,20px)] py-[6px] relative shrink-0 w-full" data-node-id="I40002151:23298;89276:9139" data-name="Content">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['MTS_Wide:Medium'] justify-end leading-[0] min-w-px not-italic overflow-hidden relative text-[24px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40002151:23298;89276:9140">
                <p className="leading-[28px] overflow-hidden text-ellipsis">Платежи</p>
              </div>
              <div className="content-stretch flex gap-[var(--8,8px)] items-center justify-end relative shrink-0" data-node-id="I40002151:23298;93167:15609" data-name="Right Buttons">
                <div className="bg-[var(--controls\/tertiary-active,#f2f3f7)] content-stretch flex items-center justify-center p-[10px] relative rounded-[var(--44,16px)] shrink-0" data-node-id="I40002151:23298;93167:15610" data-name="Icon Button" role="button" tabIndex={0} aria-label="Поиск" onClick={()=>searchRef.current?.focus()} onKeyDown={e=>{if(e.key==='Enter')searchRef.current?.focus()}}>
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40002151:23298;93167:15610;22411:232422" data-name="🔄Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40002151:23298;93167:15610;22411:232422;552:206129" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox1} />
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--controls\/primary-active,#8f8fff)] content-stretch flex items-center justify-center p-[10px] relative rounded-[var(--44,16px)] shrink-0" data-node-id="I40002151:23298;93167:15611" data-name="Icon Button">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40002151:23298;93167:15611;22411:232406" data-name="🔄Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40002151:23298;93167:15611;22411:232406;4791:6831" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--background\/primary-elevated,white)] content-stretch flex flex-col items-start pb-[var(--8,8px)] pt-[var(--0,0px)] relative rounded-bl-[var(--radius\/32,32px)] rounded-br-[var(--radius\/32,32px)] shrink-0 w-full" data-node-id="40002151:23299" data-name="Card Content">
          <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-node-id="I40002151:23299;66039:29419" data-name="Сustom content 1.0">
            <div className="content-stretch flex gap-[12px] items-start pb-[var(--8,8px)] pt-[var(--4,4px)] px-[var(--20,20px)] relative shrink-0 w-full" data-node-id="I40002151:23299;66039:29419;40002007:5642" data-name="Secondary Title 2.0">
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-end min-w-px overflow-clip pt-[4px] relative" data-node-id="I40002151:23299;66039:29419;40002007:5642;76647:297951" data-name="🔄Secondary Title">
                <p className="[word-break:break-word] font-['MTS_Text:Medium'] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#626c77)] uppercase whitespace-nowrap" data-node-id="I40002151:23299;66039:29419;40002007:5642;76647:297951;76647:297926">
                  Шаблоны и автоплатежи
                </p>
              </div>
              <div className="content-stretch flex items-start relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002007:5642;76647:297953" data-name="Action">
                <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary-link,#0070e5)] text-right whitespace-nowrap" data-node-id="I40002151:23299;66039:29419;40002007:5642;76647:297953;76641:297592">
                  <p className="leading-[24px]">Все</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[14px] items-start px-[var(--20,20px)] py-[var(--8,8px)] relative shrink-0 w-full" data-node-id="I40002151:23299;66039:29419;40002043:7451" data-name="Icon Button Set">
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008" data-name="Icon Button Set Item Custom">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4015" data-name="Item/Icon on Background">
                  <div className="bg-[var(--form\/background,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4015;40002043:4118" data-name="Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4015;40002043:4119" data-name="Size=24, Style=Fill">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4015;40002043:4119;547:207282" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox3} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis whitespace-nowrap" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4016">
                  Счета
                  <br aria-hidden />
                  на оплату
                </p>
                <div className="absolute content-stretch flex flex-col items-start left-[38px] top-[-6px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4017" data-name=".Top Indicator">
                  <div className="bg-[var(--accent\/notification,#ff0032)] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[10px] shrink-0 w-full" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4017;40002043:4110" data-name="Count Indicator">
                    <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4017;40002043:4110;253362:18506" data-name="Spacing" />
                    <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--constant\/greyscale-0,white)] text-center whitespace-nowrap" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4017;40002043:4110;253362:18507">
                      <p className="leading-[16px]">3</p>
                    </div>
                    <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4008;40002043:4017;40002043:4110;253362:18508" data-name="Spacing" />
                  </div>
                </div>
              </div>
              {overview.hasTroika&&<button style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4,flexShrink:0}} onClick={()=>onWallet('balances',0)}><img src={troikaTemplate} width={52} height={36} alt="" style={{height:52,objectFit:'cover',borderRadius:16}} className="troika-bevel"/><span style={{fontFamily:'MTS Compact, Arial, sans-serif',fontSize:12,lineHeight:'16px',fontWeight:400,textAlign:'center',width:52}}>Тройка</span><span style={{fontFamily:'MTS Compact, Arial, sans-serif',fontSize:11,lineHeight:'16px',fontWeight:400,color:'#626c77'}}>{overview.troika.toLocaleString('ru-RU')} ₽</span></button>}
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009" data-name="Icon Button Set Item Custom" role="button" tabIndex={0} aria-label="Мой телефон — открыть баланс" onClick={()=>overview.phoneBalance!==undefined?onWallet('balances',2):onWallet('balances',undefined,false,'balance')} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();overview.phoneBalance!==undefined?onWallet('balances',2):onWallet('balances',undefined,false,'balance')}}}>
                <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[16px] shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4015" data-name="Item/Emblem w Stroke">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4015;6695:12058" data-name="🔄Russia">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRussia} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis w-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4016">
                  Мой телефон
                </p>{overview.phoneBalance!==undefined&&<span style={{fontFamily:'MTS Compact, Arial, sans-serif',fontSize:11,lineHeight:'16px',fontWeight:400,color:'#626c77',whiteSpace:'nowrap'}}>{overview.phoneBalance.toLocaleString('ru-RU')} ₽</span>}
                <div className="absolute bg-[var(--constant\/dark-blueberry,#007cff)] content-stretch flex flex-col items-center justify-center left-[38px] p-[var(--2,2px)] rounded-[10px] top-[-6px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4017" data-name=".Top Indicator">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4017;6695:12352" data-name="Size=16, Style=Outline">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4017;6695:12352;547:208154" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4010" data-name="Icon Button Set Item Custom">
                <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[16px] shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4010;40002043:4015" data-name="Item/Emblem w Stroke">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4010;40002043:4015;6695:12058" data-name="🔄Russia">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRussia1} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis w-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4010;40002043:4016">
                  Мегафон
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4011" data-name="Icon Button Set Item Custom">
                <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[16px] shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4011;40002043:4015" data-name="Item/Emblem w Stroke">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4011;40002043:4015;6695:12058" data-name="🔄Russia">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRussia2} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis w-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4011;40002043:4016">
                  Yota
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012" data-name="Icon Button Set Item Custom">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012;40002043:4015" data-name="Item/Icon on Background">
                  <div className="bg-[var(--form\/background,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012;40002043:4015;40002043:4118" data-name="Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012;40002043:4015;40002043:4119" data-name="Size=24, Style=Outline">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012;40002043:4015;40002043:4119;547:208297" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox5} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis w-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4012;40002043:4016">
                  Создать новый
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--background\/primary-elevated,white)] content-stretch flex flex-col items-start pb-[var(--20,20px)] pt-[var(--0,0px)] relative rounded-[var(--radius\/32,32px)] shrink-0 w-full z-[2]" data-node-id="40002004:4937" data-name="Card Content">
        <div className="content-stretch flex items-start overflow-clip pb-[12px] pt-[var(--20,20px)] px-[20px] relative shrink-0 w-full" data-node-id="I40002004:4937;66039:29418" data-name="Primary Title 2.0">
          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-node-id="I40002004:4937;66039:29418;76647:297694" data-name="Typeface=MTS Compact">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-node-id="I40002004:4937;66039:29418;76647:297694;118857:13490" data-name="Title">
              <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[24px] min-w-px not-italic overflow-hidden relative text-[20px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40002004:4937;66039:29418;76647:297694;76641:297465">
                Перевести
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[20px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="I40002004:4937;66039:29419" data-name="Сustom content 1.1">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I40002004:4937;66039:29419;40002051:35136" data-name="Input Field">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I40002004:4937;66039:29419;40002051:35936" data-name="Text L">
              <div className="border border-[var(--background\/stroke,rgba(188,195,208,0.5))] border-solid content-stretch flex h-[52px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I40002004:4937;66039:29419;40002051:35938" data-name="Field">
                <div className="bg-[var(--background\/secondary,#f2f3f7)] flex-[1_0_0] h-full min-w-px relative" data-node-id="I40002004:4937;66039:29419;40002051:35939" data-name="Input Background" />
                <div className="absolute content-stretch flex items-center justify-center left-[-1px] overflow-clip px-[12px] py-[14px] right-[-1px] top-[-1px]" data-node-id="I40002004:4937;66039:29419;40002051:35940" data-name="Text">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-node-id="I40002004:4937;66039:29419;40002129:19138" data-name="Text">
                    <input ref={searchRef} aria-label="Имя или номер телефона" placeholder="Имя или номер телефона" className="payments-search-input" style={{paddingLeft:36}}/>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002051:35942" data-name="Info">
                    <img src={searchButton} alt="Найти контакт" width="32" height="32"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[32px] size-[24px] top-[13px]" data-node-id="I40002004:4937;66039:29419;40002009:6820" data-name="Box">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox6} />
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6822" data-name="Row">
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6824" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6824;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:6824;40002004:8166;40002004:8182" data-name="Size=24, Style=Outline">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:6824;40002004:8166;40002004:8182;547:207636" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox7} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:6824;40002004:8167">
                <p className="leading-[16px]">Между счетами</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6823" data-name="Payment Card">
              <div className="content-stretch flex h-[32px] isolate items-baseline relative shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166" data-name="Card/Emblem">
                <div className="content-stretch flex items-start mr-[-14px] relative shrink-0 z-[3]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6599" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6599;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6599;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTinkoffBank} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6599;6217:6542" data-name="Stroke" />
                </div>
                <div className="content-stretch flex items-start mr-[-14px] relative shrink-0 z-[2]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6600" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6600;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6600;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSberbank} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6600;6217:6542" data-name="Stroke" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6610" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6610;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6610;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlfaBank} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8166;6217:6610;6217:6542" data-name="Stroke" />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:6823;40002004:8167">
                <p className="leading-[16px]">Из другого банка</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6826" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6826;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:6826;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:6826;40002004:8166;40002004:8182;65338:1659" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox8} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:6826;40002004:8167">
                <p className="leading-[16px] mb-0">Переводы</p>
                <p className="leading-[16px]">за рубеж</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:6825" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:6825;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:6825;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:6825;40002004:8166;40002004:8182;552:206153" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:6825;40002004:8167">
                <p className="leading-[16px]">По номеру карты</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:9551" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:9551;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:9551;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:9551;40002004:8166;40002004:8182;547:206857" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox10} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:9551;40002004:8167">
                <p className="leading-[16px] mb-0">По</p>
                <p className="leading-[16px]">реквизитам</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:9658" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:9658;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:9658;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:9658;40002004:8166;40002004:8182;42603:2054" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox11} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:9658;40002004:8167">
                <p className="leading-[16px] mb-0">Переводы</p>
                <p className="leading-[16px]">{`в бюджет `}</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I40002004:4937;66039:29419;40002009:9742" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40002004:4937;66039:29419;40002009:9742;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40002004:4937;66039:29419;40002009:9742;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40002004:4937;66039:29419;40002009:9742;40002004:8166;40002004:8182;547:207412" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox12} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40002004:4937;66039:29419;40002009:9742;40002004:8167">
                <p className="leading-[16px]">В валюте через SWIFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="payments-my-balances"><button className="payments-my-balances-head" onClick={()=>onWallet('balances')}><strong>Балансы в других сервисах</strong><img src={paymentChevron} alt="" aria-hidden="true"/></button><div className="payments-my-balances-list">{overview.items?.length?<>{overview.items.map(item=><button key={item.index} className="payments-my-balance" onClick={()=>onWallet('balances',item.index)}><span className={"payments-my-balance-icon"+(item.icon===balanceLogos[3]?" is-neutral":"")+(item.icon===balanceLogos[0]?" troika-bevel":"")}><img src={item.icon} alt=""/></span><BalanceText>{item.name}</BalanceText><BalanceText variant="note">{item.note}</BalanceText><BalanceText variant={item.value<0?'negative':'amount'}>{item.value.toLocaleString('ru-RU')+' ₽'}</BalanceText></button>)}<button className="payments-my-balance payments-my-balance-add" onClick={()=>onWallet('balances',undefined,false,'balance')}><span className="payments-my-balance-plus" aria-hidden="true">+</span><span className="payments-my-balance-add-label">Добавить<br/>баланс</span></button></>:<button className="payments-balances-empty" onClick={()=>onWallet('balances')}><span className="payments-balances-empty-icon" aria-hidden="true">+</span><span className="payments-balances-empty-copy"><strong>Добавить баланс</strong><small>Транспортные карты, связь и другие счета</small></span><span className="payments-balances-empty-action">Добавить</span></button>}</div></section>
      <PaymentsPaySection overview={overview} onWallet={onWallet} shortcut={shortcut} onLearn={onLearn}/>
    </div></div></div>
  );
}
