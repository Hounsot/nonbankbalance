import type { WalletShortcut } from "./wallet-quick-payment";
import { PaymentsPaySection } from "./payments-pay-section";
import type { ConnectionKind } from "./wallet-empty";
import type { WalletOverview } from "./payment-wallet-entries";
import { useRef } from "react";
import searchButton from "../../assets/payments/search-button.png?inline";
import "./payments-screen.css";

import imgLayout from "../../assets/payments/e1191.svg?inline";
import imgColor from "../../assets/payments/b042d.svg?inline";
import imgLayout1 from "../../assets/payments/183dd.svg?inline";
import imgLayout2 from "../../assets/payments/774cb.svg?inline";
import imgLayout3 from "../../assets/payments/1e2f3.svg?inline";
import imgLayout4 from "../../assets/payments/9c4da.svg?inline";
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

export function PaymentsScreen({onWallet,overview,shortcut,onLearn}:{shortcut:WalletShortcut;onLearn:(step?:number)=>void;onWallet:(tab?:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind,subscription?:number)=>void;overview:WalletOverview}) {
 const searchRef=useRef<HTMLInputElement>(null);
  return (
    <div className="payments-screen"><div className="payments-scroll"><div className="bg-[var(--background\/lower,#f2f3f7)] border border-[var(--background\/stroke,rgba(188,195,208,0.5))] border-solid content-stretch flex flex-col gap-[12px] isolate items-start relative size-full" data-node-id="40002004:4934" data-name="Main Full">
      <div className="absolute backdrop-blur-[20px] bg-[var(--background\/bar,rgba(255,255,255,0.88))] bottom-[-1px] content-stretch flex flex-col items-center justify-end left-[-1px] w-full z-[4]" data-node-id="40002022:3230" data-name="Tab Bar 2.0 Advanced">
        <div className="h-[52px] relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13297" data-name="Layout">
          <div className="absolute content-stretch flex items-center justify-center left-0 px-[var(--4,4px)] right-0 top-0" data-node-id="I40002022:3230;91327:13298" data-name="Tabs">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13299" data-name="Tab 1">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13299;96978:5347" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13299;96978:5348" data-name="Layout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout} />
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[10px] text-[color:var(--text\/inactive-tabbar,#6e7782)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I40002022:3230;91327:13299;96978:5351">
                  Главная
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13300" data-name="Tab 2">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13300;99326:322770" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13300;99326:322771" data-name="Layout">
                  <div className="absolute h-[19px] left-[3px] top-[3px] w-[17.396px]" data-node-id="I40002022:3230;91327:13300;99326:322772" data-name="Color">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColor} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[16px] p-px rounded-[100px] top-0" data-node-id="I40002022:3230;91327:13300;99326:322776" data-name="Counter">
                    <div className="bg-[var(--accent\/notification,#ff0032)] content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] relative rounded-[10px] shrink-0" data-node-id="I40002022:3230;91327:13300;99326:322777" data-name="Count Indicator">
                      <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40002022:3230;91327:13300;99326:322777;99326:322857" data-name="Spacing" />
                      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40002022:3230;91327:13300;99326:322777;99326:322858" data-name="Box">
                        <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--constant\/greyscale-0,white)] text-center whitespace-nowrap" data-node-id="I40002022:3230;91327:13300;99326:322777;99326:322859">
                          <p className="leading-[16px]">3</p>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40002022:3230;91327:13300;99326:322777;99326:322860" data-name="Spacing" />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--controls\/active-tabbar,#8f8fff)] text-center w-[min-content]" data-node-id="I40002022:3230;91327:13300;99326:322778">
                  Платежи
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13301" data-name="Tab 3">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13301;96978:5347" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13301;96978:5348" data-name="Layout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout1} />
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[10px] text-[color:var(--text\/inactive-tabbar,#6e7782)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I40002022:3230;91327:13301;96978:5351">
                  История
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13302" data-name="Tab 4">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13302;96978:5347" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13302;96978:5348" data-name="Layout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout2} />
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[10px] text-[color:var(--text\/inactive-tabbar,#6e7782)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I40002022:3230;91327:13302;96978:5351">
                  Витрина
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13303" data-name="Tab 5">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13303;96978:5347" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13303;96978:5348" data-name="Layout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout3} />
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[10px] text-[color:var(--text\/inactive-tabbar,#6e7782)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I40002022:3230;91327:13303;96978:5351">
                  Инвестиции
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-center justify-center min-w-px relative" data-node-id="I40002022:3230;91327:13343" data-name="Tab 6">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-node-id="I40002022:3230;91327:13343;96978:5347" data-name="Layout">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40002022:3230;91327:13343;96978:5348" data-name="Layout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout4} />
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[10px] text-[color:var(--text\/inactive-tabbar,#6e7782)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I40002022:3230;91327:13343;96978:5351">
                  Ещё
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--background\/stroke,rgba(188,195,208,0.5))] h-[0.5px] left-0 right-0 top-0" data-node-id="I40002022:3230;91327:13304" data-name="Separator" />
        </div>
        <div className="payments-system-space" aria-hidden="true" />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 z-[3]" data-node-id="40002151:23297" data-name="Navbar + card content">
        <div className="bg-[var(--background\/primary-elevated,white)] content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-node-id="40002151:23298" data-name="Navbar 2.0.1">
          <div className="content-stretch flex h-[44px] items-center justify-between max-h-[44px] min-h-[44px] pb-[8px] pt-[12px] px-[24px] relative shrink-0 w-full" data-node-id="I40002151:23298;91207:220222" data-name="Status Bar">
            <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-node-id="I40002151:23298;91207:220222;95459:27187" data-name="Time">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[21px] not-italic relative shrink-0 text-[12px] text-[color:var(--icons\/primary,#1d2023)] tracking-[-0.32px] whitespace-nowrap" data-node-id="I40002151:23298;91207:220222;95459:27188">
                12:38
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0" data-node-id="I40002151:23298;91207:220222;95459:30200" data-name="Icons">
              <div className="relative shrink-0 size-[14px]" data-node-id="I40002151:23298;91207:220222;95459:30201" data-name="network_wifi_3_bar_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNetworkWifi3Bar24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I40002151:23298;91207:220222;95459:30203" data-name="network_cell_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNetworkCell24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I40002151:23298;91207:220222;95459:30205" data-name="battery_5_bar_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery5Bar24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
            </div>
          </div>
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
              <div className="content-stretch flex flex-col gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009" data-name="Icon Button Set Item Custom" role="button" tabIndex={0} aria-label="Мой телефон — открыть кошелёк" onClick={()=>onWallet('balances')} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onWallet()}}}>
                <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[16px] shrink-0" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4015" data-name="Item/Emblem w Stroke">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4015;6695:12058" data-name="🔄Russia">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRussia} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center text-ellipsis w-[52px]" data-node-id="I40002151:23299;66039:29419;40002043:7451;40002043:4009;40002043:4016">
                  Мой телефон
                </p>
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
      <PaymentsPaySection overview={overview} onWallet={onWallet} shortcut={shortcut} onLearn={onLearn}/>
    </div></div></div>
  );
}
