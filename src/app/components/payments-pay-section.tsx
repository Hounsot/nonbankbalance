import { Radio } from "lucide-react";
import { WalletQuickPayment, type WalletShortcut } from "./wallet-quick-payment";
import type { WalletOverview } from "./payment-wallet-entries";
import type { ConnectionKind } from "./wallet-empty";
import "./payments-pay-section.css";
import imgImage from "../../assets/payments/38a06.png?inline";
import imgImage1 from "../../assets/payments/49745.png?inline";
import imgBox from "../../assets/payments/d069b.svg?inline";
import imgBox1 from "../../assets/payments/8f906.svg?inline";
import imgBox2 from "../../assets/payments/6b095.svg?inline";
import imgSteam from "../../assets/payments/1424f.svg?inline";
import imgPlaystation from "../../assets/payments/95a53.svg?inline";
import imgBox3 from "../../assets/payments/0c88c.svg?inline";
import imgBox4 from "../../assets/payments/df4de.svg?inline";
import imgSpotify from "../../assets/payments/ab364.svg?inline";
import imgSpotify1 from "../../assets/payments/9385f.svg?inline";
import imgTinkoffBank from "../../assets/payments/e63f7.svg?inline";
import imgSberbank from "../../assets/payments/344e3.svg?inline";
import imgAlfaBank from "../../assets/payments/b5dde.svg?inline";
import imgBox5 from "../../assets/payments/c7ea2.svg?inline";
import imgBox6 from "../../assets/payments/c7be6.svg?inline";
import imgBox7 from "../../assets/payments/a7999.svg?inline";
import imgBox8 from "../../assets/payments/d7ff9.svg?inline";
import imgBox9 from "../../assets/payments/afc79.svg?inline";
import imgBox10 from "../../assets/payments/28c23.svg?inline";
import imgBox11 from "../../assets/payments/70cc1.svg?inline";
import imgBox12 from "../../assets/payments/2fa80.svg?inline";
import imgBox13 from "../../assets/payments/05107.svg?inline";
import imgBox14 from "../../assets/payments/c51e7.svg?inline";
import imgBox15 from "../../assets/payments/ee91e.svg?inline";
import imgBox16 from "../../assets/payments/f2479.svg?inline";
import imgBox17 from "../../assets/payments/e9db6.svg?inline";
import imgBox18 from "../../assets/payments/310a2.svg?inline";
import imgBox19 from "../../assets/payments/d6802.svg?inline";
import imgBox20 from "../../assets/payments/f7607.svg?inline";
import imgBox21 from "../../assets/payments/3fcdf.svg?inline";
import imgBox22 from "../../assets/payments/996c6.svg?inline";

export function PaymentsPaySection({overview,onWallet,shortcut,onLearn}:{overview:WalletOverview;shortcut:WalletShortcut;onLearn:(step?:number)=>void;onWallet:(tab?:'balances'|'subscriptions',card?:number,topup?:boolean,add?:ConnectionKind)=>void}) {
  const money=(value:number)=>value.toLocaleString('ru-RU')+' ₽';
  const activate=(action:()=>void)=>({role:'button',tabIndex:0,onClick:action,onKeyDown:(event:React.KeyboardEvent)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();action()}}});

  return (
    <div className="bg-[var(--background\/primary-elevated,white)] content-stretch flex flex-col items-start overflow-clip pb-[var(--16,16px)] pt-[var(--0,0px)] relative rounded-[var(--radius\/32,32px)] shrink-0 w-full" data-node-id="40009188:55614" data-name="Card Content">
      <div className="content-stretch flex items-start overflow-clip pb-[12px] pt-[var(--20,20px)] px-[20px] relative shrink-0 w-full" data-node-id="40009188:55619" data-name="Primary Title 2.0">
        <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-node-id="I40009188:55619;76647:297694" data-name="Typeface=MTS Compact">
          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-node-id="I40009188:55619;76647:297694;118857:13490" data-name="Title">
            <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[24px] min-w-px not-italic overflow-hidden relative text-[20px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40009188:55619;76647:297694;76641:297465">
              Оплатить
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-node-id="40009188:56073" data-name="Сustom content 1.2">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[var(--0,0px)] px-[var(--20,20px)] relative shrink-0 w-full" data-node-id="40009188:56074" data-name="Container">
          <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-node-id="40009188:56629">
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56075" data-name="Payment Card">
              <div className="bg-[var(--brand\/mts-red,#8f8fff)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56075;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56075;40002004:8166;40002004:8182" data-name="Size=24, Style=Outline">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56075;40002004:8166;40002004:8182;4791:6831" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56075;40002004:8167">
                <p className="leading-[16px] mb-0">Оплата по QR</p>
                <p className="leading-[16px]">с кешбэком</p>
              </div>
              <div className="absolute content-stretch flex items-center justify-center overflow-clip right-[12px] rounded-[8px] top-[12px] w-[24px]" data-node-id="I40009188:56075;40002004:8168" data-name="Size=24, Style=Fill">
                <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56075;40002004:8168;51137:425" data-name="Box">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox1} />
                </div>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56076" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56076;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56076;40002004:8166;11582:41373" data-name="Size=24, Style=Fill">
                  <div className="flex items-center justify-center relative shrink-0" data-node-id="I40009188:56076;40002004:8166;11582:41373;6260:6766">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[24px]" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56076;40002004:8167">
                <p className="leading-[16px]">
                  Мобильная
                  <br aria-hidden />
                  связь
                </p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56077" data-name="Payment Card">
              <div className="content-stretch flex h-[32px] isolate items-baseline relative shrink-0" data-node-id="I40009188:56077;40002004:8166" data-name="Card/Emblem">
                <div className="content-stretch flex items-start mr-[-14px] relative shrink-0 z-[3]" data-node-id="I40009188:56077;40002004:8166;6217:6599" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56077;40002004:8166;6217:6599;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56077;40002004:8166;6217:6599;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSteam} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56077;40002004:8166;6217:6599;6217:6542" data-name="Stroke" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 z-[2]" data-node-id="I40009188:56077;40002004:8166;6217:6600" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56077;40002004:8166;6217:6600;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56077;40002004:8166;6217:6600;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlaystation} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56077;40002004:8166;6217:6600;6217:6542" data-name="Stroke" />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56077;40002004:8167">
                <p className="leading-[16px]">
                  Игровые
                  <br aria-hidden />
                  сервисы
                </p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56078" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56078;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56078;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56078;40002004:8166;40002004:8182;75382:3370" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox3} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56078;40002004:8167">
                <p className="leading-[16px]">Услуги ЖКХ</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56079" data-name="Payment Card">
              <div className="bg-[var(--icon-on-background,white)] overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56079;40002004:8166" data-name="Card/Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56079;40002004:8166;40002004:8182" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56079;40002004:8166;40002004:8182;42603:2054" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox4} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56079;40002004:8167">
                <p className="leading-[16px] mb-0">Госуслуги</p>
                <p className="leading-[16px]">и штрафы</p>
              </div>
            </div>
            <div className="bg-[var(--card,#f2f3f7)] content-stretch flex flex-col gap-[var(--8,8px)] items-start justify-self-stretch min-w-[92px] p-[var(--12,12px)] relative rounded-[var(--radius\/20,20px)] self-stretch shrink-0" data-node-id="40009188:56080" data-name="Payment Card">
              <div className="content-stretch flex h-[32px] isolate items-start justify-center relative shrink-0" data-node-id="I40009188:56080;40002004:8166" data-name="Card/Emblem">
                <div className="border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid content-stretch flex items-start mr-[-14px] overflow-clip relative rounded-[11px] shrink-0 size-[32px] z-[3]" data-node-id="I40009188:56080;40002004:8166;6217:6599" data-name="ChatGPT">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40009188:56080;40002004:8166;6217:6599;11301:11274" data-name="Image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage} width="52" />
                  </div>
                </div>
                <div className="border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid content-stretch flex items-start mr-[-14px] overflow-clip relative rounded-[11px] shrink-0 size-[32px] z-[2]" data-node-id="I40009188:56080;40002004:8166;6217:6600" data-name="Midjourney">
                  <div className="relative shrink-0 size-[52px]" data-node-id="I40009188:56080;40002004:8166;6217:6600;11301:11276" data-name="Image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage1} width="52" />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-node-id="I40009188:56080;40002004:8166;6217:6610" data-name=".Emblem">
                  <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56080;40002004:8166;6217:6610;6217:6551" data-name="Container">
                    <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56080;40002004:8166;6217:6610;6217:6541" data-name="🔄Russia">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpotify} />
                    </div>
                  </div>
                  <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56080;40002004:8166;6217:6610;6217:6542" data-name="Stroke" />
                  <div className="absolute bg-[var(--choice-card\/sbp-logo,white)] bottom-[-4px] overflow-clip right-[-4px] rounded-[var(--radius\/80,80px)] size-[16px]" data-node-id="I40009188:56080;40002004:8166;6217:6610;6217:10742" data-name=".SBP">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-node-id="I40009188:56080;40002004:8166;6217:6610;6217:10742;100865:6966" data-name="Payment Systems">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpotify1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Regular'] h-[32px] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] w-[min-content]" data-node-id="I40009188:56080;40002004:8167">
                <p className="leading-[16px] mb-0">Зарубежные</p>
                <p className="leading-[16px]">программы</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start relative shrink-0 w-full" data-node-id="40009188:56658">
            <div className="content-start flex flex-wrap gap-[8px_8px] items-start pb-[var(--0,0px)] px-[var(--0,0px)] relative shrink-0 w-full" data-node-id="40009188:56500" data-name="Container">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] content-stretch flex w-[103px] flex-none flex-col justify-between h-[96px] items-start min-w-px p-[var(--12,12px)] relative rounded-[var(--20,20px)]" aria-label="Подписки" {...activate(()=>onWallet('subscriptions'))} data-node-id="40009188:56501"  data-name="Widget">
                <div style={{order:1}} className="content-stretch flex flex-col gap-[var(--0,0px)] items-start justify-end p-[var(--0,0px)] relative shrink-0 w-full" data-node-id="40009188:56502" data-name=".Widget Text">
                  <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0 w-full" data-node-id="I40009188:56502;99193:16928" data-name="Row">
                    <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40009188:56502;99193:16929">
                      Подписки
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex h-[32px] isolate items-baseline relative shrink-0" data-node-id="40009188:56503" data-name="Card/Emblem">{overview.subscriptionCount===0?<span style={{width:32,height:32,background:'white',borderRadius:10,display:'grid',placeItems:'center',color:'#8c959f'}}><Radio size={22}/></span>:<>
                  <div className="content-stretch flex items-start mr-[-14px] relative shrink-0 z-[3]" data-node-id="I40009188:56503;6217:6599" data-name=".Emblem">
                    <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56503;6217:6599;6217:6551" data-name="Container">
                      <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56503;6217:6599;6217:6541" data-name="🔄Russia">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTinkoffBank} />
                      </div>
                    </div>
                    <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56503;6217:6599;6217:6542" data-name="Stroke" />
                  </div>
                  <div className="content-stretch flex items-start mr-[-14px] relative shrink-0 z-[2]" data-node-id="I40009188:56503;6217:6600" data-name=".Emblem">
                    <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56503;6217:6600;6217:6551" data-name="Container">
                      <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56503;6217:6600;6217:6541" data-name="🔄Russia">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSberbank} />
                      </div>
                    </div>
                    <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56503;6217:6600;6217:6542" data-name="Stroke" />
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-node-id="I40009188:56503;6217:6610" data-name=".Emblem">
                    <div className="overflow-clip relative rounded-[10px] shrink-0 size-[32px]" data-node-id="I40009188:56503;6217:6610;6217:6551" data-name="Container">
                      <div className="absolute left-0 size-[32px] top-0" data-node-id="I40009188:56503;6217:6610;6217:6541" data-name="🔄Russia">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlfaBank} />
                      </div>
                    </div>
                    <div className="absolute border border-[var(--constant\/greyscale-100,#f2f3f7)] border-solid inset-[-1px] rounded-[11px]" data-node-id="I40009188:56503;6217:6610;6217:6542" data-name="Stroke" />
                  </div>
                </>}</div>
              </div>
              <div className="bg-[var(--background\/secondary,#f2f3f7)] content-stretch flex flex-col h-[96px] items-start justify-between p-[var(--12,12px)] relative rounded-[var(--20,20px)] min-w-0 flex-1 shrink-0" aria-label="Внешние балансы" {...activate(()=>onWallet('balances'))} data-node-id="40009188:56505"  data-name="Widget">
                <div style={{order:1}} className="content-stretch flex flex-row gap-[4px] items-center justify-between p-[var(--0,0px)] relative shrink-0 w-full" data-node-id="40009188:56506" data-name=".Widget Text">
                  <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="I40009188:56506;99193:16928" data-name="Row">
                    <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40009188:56506;99193:16929">
                      Внешние балансы
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] text-ellipsis whitespace-nowrap" data-node-id="I40009188:56506;99193:16931">
                      {money(overview.balanceTotal)}
                    </p>
                </div>
                <div className="content-stretch flex isolate items-start relative shrink-0" data-node-id="40009188:56507">
                  <div className="bg-[var(--icon-on-background,white)] border-2 border-[#f2f3f7] border-solid mr-[-8px] overflow-clip relative rounded-[10px] shrink-0 size-[32px] z-[4]" data-node-id="40009188:56508" data-name="Card/Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[var(--0,0px)] items-center justify-center left-1/2 overflow-clip p-[var(--0,0px)] size-[24px] top-1/2" data-node-id="I40009188:56508;11582:41373" data-name="Size=24, Style=Fill">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56508;11582:41373;552:206153" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox5} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--icon-on-background,white)] border-2 border-[#f2f3f7] border-solid mr-[-8px] overflow-clip relative rounded-[10px] shrink-0 size-[32px] z-[3]" data-node-id="40009188:56509" data-name="Card/Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56509;11582:41373" data-name="Size=24, Style=Fill">
                      <div className="flex items-center justify-center relative shrink-0" data-node-id="I40009188:56509;11582:41373;6260:6766">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="relative size-[24px]" data-name="Box">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--icon-on-background,white)] border-2 border-[#f2f3f7] border-solid mr-[-8px] overflow-clip relative rounded-[10px] shrink-0 size-[32px] z-[2]" data-node-id="40009188:56510" data-name="Card/Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[var(--0,0px)] items-center justify-center left-1/2 overflow-clip p-[var(--0,0px)] size-[24px] top-1/2" data-node-id="I40009188:56510;11582:41373" data-name="Size=24, Style=Fill">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56510;11582:41373;9678:312008" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox6} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--icon-on-background,white)] border-2 border-[#f2f3f7] border-solid overflow-clip relative rounded-[10px] shrink-0 size-[32px] z-[1]" data-node-id="40009188:56511" data-name="Card/Icon on Background">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[var(--0,0px)] items-center justify-center left-1/2 overflow-clip p-[var(--0,0px)] size-[24px] top-1/2" data-node-id="I40009188:56511;11582:41373" data-name="Size=24, Style=Fill">
                      <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56511;11582:41373;547:206551" data-name="Box">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox7} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[var(--background\/secondary-elevated,white)] content-stretch flex flex-col h-[16px] items-center justify-center right-[12px] px-[4px] rounded-[10px] top-[12px]" style={{display:overview.balanceCount?undefined:"none"}} data-node-id="40009188:56513" data-name="Count Indicator">
                  <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40009188:56513;156047:166470" data-name="Spacing" />
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I40009188:56513;156047:166471" data-name="Box">
                    <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d2023)] text-center whitespace-nowrap" data-node-id="I40009188:56513;156047:166472">
                      <p className="leading-[16px]">{overview.balanceCount}</p>
                    </div>
                  </div>
                  <div className="h-px relative shrink-0 w-[8px]" data-node-id="I40009188:56513;156047:166473" data-name="Spacing" />
                </div>
              </div>
            </div>
            <WalletQuickPayment choice={shortcut} overview={overview} onOpen={onWallet}/>
            {overview.balanceCount===0&&overview.subscriptionCount===0&&<button className="pay-wallet-learn" onClick={()=>onLearn(0)}>Как работает кошелёк</button>}
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[var(--8,8px)] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="40009188:56081" data-name="Payments cells">
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56082" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56082;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56082;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56082;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56082;41573:266817;41573:266637;547:206741" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56082;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56082;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56082;41573:266819;41573:266650">
                    Интернет и ТВ, Телефония
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56082;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56082;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56082;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56083" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56083;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56083;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56083;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56083;41573:266817;41573:266637;39584:1086" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox10} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56083;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56083;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56083;41573:266819;41573:266650">
                    Погашение кредитов
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56083;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56083;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56083;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56084" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56084;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56084;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2" data-node-id="I40009188:56084;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56084;41573:266817;41573:266637;4259:6789" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox11} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56084;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56084;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56084;41573:266819;41573:266650">
                    Электронные деньги
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56084;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56084;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56084;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56085" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56085;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56085;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56085;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56085;41573:266817;41573:266637;547:206551" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox12} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56085;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56085;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56085;41573:266819;41573:266650">
                    Транспорт
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56085;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56085;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56085;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56086" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56086;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56086;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56086;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56086;41573:266817;41573:266637;65338:1659" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox13} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56086;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56086;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56086;41573:266819;41573:266650">
                    Переводы в СНГ и за рубеж
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56086;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56086;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56086;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56087" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56087;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56087;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56087;41573:266817;41573:266637" data-name="🔄Icon">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56087;41573:266817;41573:266637;51137:510" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox14} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56087;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56087;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56087;41573:266819;41573:266650">
                    Зарубежные операторы
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56087;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56087;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56087;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56088" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56088;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56088;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-1/2" data-node-id="I40009188:56088;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56088;41573:266817;41573:266637;42576:633" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox15} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56088;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56088;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56088;41573:266819;41573:266650">
                    Образование
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56088;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56088;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56088;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56089" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56089;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56089;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56089;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56089;41573:266817;41573:266637;547:206876" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox16} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56089;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56089;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56089;41573:266819;41573:266650">
                    Интернет-магазины
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56089;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56089;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56089;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56090" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56090;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56090;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56090;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56090;41573:266817;41573:266637;16153:8378" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox17} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56090;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56090;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56090;41573:266819;41573:266650">
                    Путешествие
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56090;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56090;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56090;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56091" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56091;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56091;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56091;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56091;41573:266817;41573:266637;547:206610" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox18} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56091;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56091;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56091;41573:266819;41573:266650">
                    Страхование
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56091;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56091;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56091;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56092" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56092;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56092;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56092;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56092;41573:266817;41573:266637;547:206597" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox19} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56092;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56092;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56092;41573:266819;41573:266650">
                    Охранные системы
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56092;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56092;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56092;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56093" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56093;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56093;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56093;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56093;41573:266817;41573:266637;547:208350" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56093;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56093;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56093;41573:266819;41573:266650">
                    Пожертвования
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56093;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56093;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56093;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56094" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56094;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56094;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56094;41573:266817;41573:266637" data-name="Size=24, Style=Fill">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56094;41573:266817;41573:266637;547:206857" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox21} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56094;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56094;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56094;41573:266819;41573:266650">
                    Свободные реквизиты
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56094;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56094;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56094;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="40009188:56095" data-name="Cell">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I40009188:56095;41573:266817" data-name="Cell Left/Icon on Background">
              <div className="bg-[var(--background\/secondary,#f2f3f7)] relative rounded-[16px] shrink-0 size-[52px]" data-node-id="I40009188:56095;41573:266817;41573:266636" data-name="Icon on Background">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-node-id="I40009188:56095;41573:266817;41573:266637" data-name="Size=24, Style=Outline">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56095;41573:266817;41573:266637;547:207171" data-name="Box">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox22} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I40009188:56095;41573:266818">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-node-id="I40009188:56095;41573:266819" data-name="Cell Text">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d2023)] w-full" data-node-id="I40009188:56095;41573:266819;41573:266650">
                    Разное
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I40009188:56095;41573:266820" data-name="Cell Right/Icon">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-node-id="I40009188:56095;41573:266820;41573:266653" data-name="Icon">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I40009188:56095;41573:266820;41573:266653;547:207741" data-name="Box">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
