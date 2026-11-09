import type { ReactNode } from "react";
import homeBackground from "../../assets/home/0634b.svg";
import type { WalletOverview } from "./payment-wallet-entries";
import "./main-screen.css";

import imgBox from "../../assets/home/c295f.svg";
import imgUsa from "../../assets/home/4b847.svg";
import imgBox1 from "../../assets/home/2c8a3.svg";
import imgBox2 from "../../assets/home/8975a.svg";
import imgBox3 from "../../assets/home/8f66e.svg";
import imgBox4 from "../../assets/home/9adf9.svg";
import imgBox5 from "../../assets/home/dab16.svg";
import imgImage from "../../assets/home/e06b6.png";
import imgImage1 from "../../assets/home/2b83f.png";
import imgCubik from "../../assets/home/8d666.png";
import imgCubik1 from "../../assets/home/cda37.png";
import imgImage2 from "../../assets/home/10f75.png";
import imgImage3 from "../../assets/home/8499e.png";
import imgImage4 from "../../assets/home/f945a.png";
import imgImage5 from "../../assets/home/d61a4.png";
import img21777V3AovCryptomatte1 from "../../assets/home/1bffd.png";
import img21777V3AovCryptomatte2 from "../../assets/home/d00e1.png";
import img21777V3AovCryptomatte3 from "../../assets/home/3f744.png";
import img21777V3AovCryptomatte4 from "../../assets/home/b4c8f.png";
import imgNetworkWifi3Bar24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/home/f3d34.svg";
import imgNetworkCell24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/home/b9e2c.svg";
import imgBattery5Bar24DpE3E3E3Fill0Wght400Grad0Opsz24 from "../../assets/home/184ec.svg";
import imgBox6 from "../../assets/home/5399a.svg";
import imgBox7 from "../../assets/home/59f16.svg";
import imgBox8 from "../../assets/home/17c9e.svg";
import imgSbp from "../../assets/home/88e9e.svg";
import imgBox9 from "../../assets/home/81bd0.svg";
import imgBox10 from "../../assets/home/1528f.svg";
import imgBox11 from "../../assets/home/bf0c5.svg";
import imgPlusCircle from "../../assets/home/928e4.svg";

type BuySellProps = {
  className?: string;
  sell?: "no";
  title?: boolean;
};

function BuySell({ className, sell = "no", title = true }: BuySellProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative"}>
      {title && (
        <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
          Покупка
        </p>
      )}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
        <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
          66,59
        </p>
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrencyWidget({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start pb-[20px] relative w-[380px]"}>
      <div className="content-stretch flex h-[64px] items-start pb-[var(--16,16px)] pt-[var(--24,24px)] px-[var(--20,20px)] relative shrink-0 w-full" />
      <div className="content-stretch flex gap-[var(--12,12px)] items-start overflow-x-auto overflow-y-clip px-[var(--20,20px)] py-[var(--0,0px)] relative shrink-0 w-full">
        <div className="bg-[white] content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] relative rounded-[20px] shrink-0">
          <div className="content-stretch flex gap-[var(--8,8px)] items-end pb-[var(--12,12px)] pt-[var(--16,16px)] px-[var(--16,16px)] relative shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUsa} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Regular'] leading-[24px] min-w-px not-italic relative text-[17px] text-[color:#1d2023]">
              USD
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-start pb-[var(--16,16px)] pt-[var(--0,0px)] px-[16px] relative shrink-0 w-full">
            <BuySell className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0" />
            <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0">
              <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
                Продажа
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
                  72,23
                </p>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[white] content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] relative rounded-[20px] shrink-0">
          <div className="content-stretch flex gap-[var(--8,8px)] items-end pb-[var(--12,12px)] pt-[var(--16,16px)] px-[var(--16,16px)] relative shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUsa} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Regular'] leading-[24px] min-w-px not-italic relative text-[17px] text-[color:#1d2023]">
              EUR
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-start pb-[var(--16,16px)] pt-[var(--0,0px)] px-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0">
              <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
                Покупка
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
                  78,56
                </p>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0">
              <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
                Продажа
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
                  77,31
                </p>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[white] content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] relative rounded-[20px] shrink-0">
          <div className="content-stretch flex gap-[var(--8,8px)] items-end pb-[var(--12,12px)] pt-[var(--16,16px)] px-[var(--16,16px)] relative shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUsa} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Regular'] leading-[24px] min-w-px not-italic relative text-[17px] text-[color:#1d2023]">
              CNY
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-start pb-[var(--16,16px)] pt-[var(--0,0px)] px-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0">
              <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
                Покупка
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
                  12,42
                </p>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-end justify-center p-[var(--0,0px)] relative shrink-0">
              <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:#626c77] w-[min-content]">
                Продажа
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[70px]">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] text-right whitespace-nowrap">
                  11,34
                </p>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox} />
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

type MyMoneyProps = {
  className?: string;
  loading?: "no";
};

function MyMoney({ className, loading = "no" }: MyMoneyProps) {
  return (
    <div className={className || "bg-[var(--background\/lower,#f2f3f7)] content-stretch flex flex-col gap-[var(--0,0px)] items-start overflow-clip p-[var(--0,0px)] relative w-[360px]"}>
      <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] shrink-0 sticky top-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox1} />
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative">
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] w-full">
                  Мои деньги
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--4,4px)] items-center overflow-clip p-[var(--0,0px)] relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[var(--24,8px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox2} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[0] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] whitespace-nowrap">
                  <span className="leading-[24px]">1 116 106</span>
                  <span className="leading-[24px] text-[#1d2023]">{` ₽`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApprovedRow() {
  return (
    <div className="relative rounded-t-[32px] bg-white">
        <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox3} />
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative">
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#1d2023] w-full">
                  Мне одобрено
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['MTS_Compact:Medium'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:#626c77] text-right whitespace-nowrap">
                  1 000 000 ₽
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

function SliceStack({ children }: { children: ReactNode }) {
  return (
    <div className="home-summary-stack" style={{ backgroundImage: "linear-gradient(133.74383214385387deg, rgb(177, 153, 255) 0%, rgb(181, 160, 255) 0%, rgb(152, 136, 255) 40.411%, rgb(149, 134, 255) 49.606%, rgb(149, 142, 255) 58.311%, rgb(152, 216, 255) 100%)" }}>
      <div className="relative w-full">
        <div className="relative w-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[52px] px-[20px] py-[10px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox4} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,8px)] items-center min-w-px overflow-clip p-[var(--0,0px)] relative">
                  <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:white] whitespace-nowrap">
                    Кешбэк в марте
                  </p>
                  <div className="bg-[#ff0032] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[10px] shrink-0">
                    <div className="h-px relative shrink-0 w-[8px]" />
                    <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:white] text-center whitespace-nowrap">
                      <p className="leading-[16px]">5</p>
                    </div>
                    <div className="h-px relative shrink-0 w-[8px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-account-stack">
        <ApprovedRow />
        {children}
      </div>
    </div>
  );
}

export function MainScreen({ overview, onBalances }: { overview: WalletOverview; onBalances: () => void }) {
  const formattedBalance = new Intl.NumberFormat("ru-RU").format(overview.balanceTotal);
  return (
    <div className="home-screen">
      <div className="home-scroll">
        <img className="home-background" src={homeBackground} alt="" />
        <div className="relative w-full shrink-0">
          <div className="content-stretch flex h-[44px] items-center justify-between max-h-[44px] min-h-[44px] pb-[8px] pt-[12px] px-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex h-[24px] items-center relative shrink-0">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[21px] not-italic relative shrink-0 text-[12px] text-[color:#fafafa] tracking-[-0.32px] whitespace-nowrap">
                12:38
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNetworkWifi3Bar24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNetworkCell24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery5Bar24DpE3E3E3Fill0Wght400Grad0Opsz24} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--4,4px)] items-center pb-[var(--12,12px)] pt-[var(--8,8px)] px-[var(--20,20px)] relative shrink-0 w-full">
            <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex items-center justify-center p-[10px] relative rounded-[var(--44,16px)] shrink-0">
              <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox6} />
                </div>
              </div>
              <div className="absolute bg-[#ff0032] right-px rounded-[100px] size-[6px] top-px" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,8px)] items-center justify-end min-w-px p-[var(--0,0px)] relative">
              <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "linear-gradient(19.919407387832052deg, rgb(155, 213, 255) 6.25%, rgb(155, 147, 255) 44.271%, rgb(154, 141, 255) 58.333%, rgb(124, 134, 254) 84.896%)" }}>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox7} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[color:white] whitespace-nowrap">
                    <p className="leading-[24px]">15 083</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-promo-strip">
            <div className="home-promo">
              <p>Кредитная карта МТС Деньги</p>
              <small>111 дней без процентов</small>
              <img src={img21777V3AovCryptomatte1} alt="" />
            </div>
          </div>
          </div>
          <div className="content-stretch flex h-[92px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--4,4px)] h-full items-start min-w-px px-[var(--20,20px)] py-[var(--8,8px)] relative">
              <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-center min-w-px px-[12px] py-[10px] relative rounded-[20px]">
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox8} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:white] text-center text-ellipsis w-[min-content] whitespace-pre-wrap">
                  {`Между `}
                  <br aria-hidden />
                  своими
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-center min-w-px px-[12px] py-[10px] relative rounded-[20px]">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[15px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSbp} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:white] text-center text-ellipsis w-[min-content]">
                  По номеру телефона
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-center min-w-px px-[12px] py-[10px] relative rounded-[20px]">
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox9} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[12px] text-[color:white] text-center text-ellipsis w-[min-content]">
                  Оплата
                  <br aria-hidden />
                  по QR
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--4,4px)] items-start pb-[var(--20,20px)] pt-[var(--8,8px)] px-[var(--20,20px)] relative shrink-0 w-full">
            <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--8,8px)] items-center min-w-px pl-[var(--8,8px)] pr-[var(--12,12px)] py-[var(--8,8px)] relative rounded-[20px]">
              <div className="bg-[#94c52d] content-stretch flex gap-[var(--0,0px)] items-center justify-center max-h-[36px] max-w-[36px] min-h-[36px] min-w-[36px] p-[var(--0,0px)] relative rounded-[12px] shrink-0 size-[36px]">
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox10} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px not-italic p-[var(--0,0px)] relative whitespace-nowrap">
                <p className="font-['MTS_Compact:Medium'] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:white] text-ellipsis w-full">
                  43 121 ₽
                </p>
                <p className="font-['MTS_Compact:Regular'] leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-[color:#bbc1c7] text-ellipsis w-full">
                  Расходы
                </p>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.28)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--8,8px)] items-center min-w-px pl-[var(--8,8px)] pr-[var(--12,12px)] py-[var(--8,8px)] relative rounded-[20px]">
              <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[var(--0,0px)] items-center justify-center max-h-[36px] max-w-[36px] min-h-[36px] min-w-[36px] overflow-clip p-[var(--0,0px)] relative rounded-[12px] shrink-0 size-[36px]">
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBox11} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px not-italic p-[var(--0,0px)] relative whitespace-nowrap">
                <p className="font-['MTS_Compact:Medium'] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:white] text-ellipsis w-full">
                  Оформить
                </p>
                <p className="font-['MTS_Compact:Regular'] leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-[color:#bbc1c7] text-ellipsis w-full">
                  Продукт
                </p>
              </div>
            </div>
          </div>
        <SliceStack>
        <div className="home-products">
          <MyMoney className=" content-stretch flex flex-col gap-[var(--0,0px)] items-start overflow-clip p-[var(--0,0px)] shrink-0 relative w-full" />
          <div className="w-full pb-[24px]">
            <div className="grid grid-cols-2 gap-2 px-5">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 p-[var(--0,0px)] relative">
                <div className="bg-[white] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[var(--16,16px)] relative rounded-[20px] w-full">
                  <div className="bg-[#f2f3f7] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                    <div className="relative shrink-0 size-[52px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage} width="52" />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--0,0px)] h-[40px] items-start justify-end leading-[20px] not-italic p-[var(--0,0px)] relative shrink-0 w-full whitespace-nowrap">
                    <div className="content-stretch flex font-['MTS_Compact:Regular'] gap-[var(--4,4px)] items-center relative shrink-0 text-[14px] w-full">
                      <p className="overflow-hidden relative shrink-0 text-[color:#1d2023] text-ellipsis">
                        Дебетовые карты
                      </p>
                      <p className="relative shrink-0 text-[color:#969fa8]">
                        1
                      </p>
                    </div>
                    <p className="font-['MTS_Compact:Medium'] overflow-hidden relative shrink-0 text-[17px] text-[color:#1d2023] text-ellipsis w-full">
                      16 106 ₽
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 p-[var(--0,0px)] relative">
                <div className="bg-[white] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[var(--16,16px)] relative rounded-[20px] w-full">
                  <div className="bg-[#f2f3f7] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                    <div className="relative shrink-0 size-[52px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage1} width="52" />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--0,0px)] h-[40px] items-start justify-end leading-[20px] not-italic p-[var(--0,0px)] relative shrink-0 w-full whitespace-nowrap">
                    <div className="content-stretch flex font-['MTS_Compact:Regular'] gap-[var(--4,4px)] items-center relative shrink-0 text-[14px] w-full">
                      <p className="overflow-hidden relative shrink-0 text-[color:#1d2023] text-ellipsis">
                        Кредитные карты
                      </p>
                      <p className="relative shrink-0 text-[color:#969fa8]">
                        1
                      </p>
                    </div>
                    <p className="font-['MTS_Compact:Medium'] overflow-hidden relative shrink-0 text-[17px] text-[color:#1d2023] text-ellipsis w-full">
                      532 144 ₽
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 relative">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px p-[var(--0,0px)] relative w-full">
                  <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 overflow-hidden">
                      <img alt="" className="absolute left-[-32.69%] max-w-none size-[178.85%] top-[-32.69%]" src={imgCubik} />
                    </div>
                    <img alt="" className="absolute max-w-none object-cover size-full" src={imgCubik1} />
                  </div>
                  <button type="button" onClick={onBalances} aria-label="Внешние балансы" className="bg-white text-left font-normal content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-4 relative rounded-[20px] w-full">
                    <div className="bg-[#f2f3f7] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                      <div className="relative shrink-0 size-[52px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage2} width="52" />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--0,0px)] h-[40px] items-start justify-end leading-[20px] not-italic p-[var(--0,0px)] relative shrink-0 w-full whitespace-nowrap">
                      <div className="content-stretch flex font-['MTS_Compact:Regular'] gap-[var(--4,4px)] items-center relative shrink-0 text-[14px] w-full">
                        <p className="overflow-hidden relative shrink-0 text-[color:#1d2023] text-ellipsis">
                          Внешние балансы
                        </p>
                        <p className="relative shrink-0 text-[color:#969fa8]">
                          {overview.balanceCount || null}
                        </p>
                      </div>
                      <p className="font-['MTS_Compact:Medium'] overflow-hidden relative shrink-0 text-[17px] text-[color:#1d2023] text-ellipsis w-full">
                        {formattedBalance} ₽
                      </p>
                    </div>
                    {Boolean(overview.attentionCount) && (
                      <span className="home-balance-badge">
                        <span>{overview.attentionCount}</span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 p-[var(--0,0px)] relative">
                <div className="bg-[rgba(188,195,208,0.25)] border border-[#f2f3f7] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[var(--16,16px)] relative rounded-[20px] w-full">
                  <div className="bg-[white] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                    <div className="relative shrink-0 size-[52px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage3} width="52" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:#1d2023] text-ellipsis whitespace-nowrap">
                        Кредиты и займы
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['MTS_Compact:Regular'] h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:#626c77] w-full">
                      до 5 000 000 ₽
                    </p>
                  </div>
                  <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[9px] rounded-[var(--32,12px)] top-[9.5px]">
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlusCircle} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-[163.5px]">
                <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 p-[var(--0,0px)] relative shrink-0 w-full">
                  <div className="bg-[rgba(188,195,208,0.25)] border border-[#f2f3f7] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[var(--16,16px)] relative rounded-[20px] w-full">
                    <div className="bg-[white] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                      <div className="relative shrink-0 size-[52px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage4} width="52" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0 w-full">
                        <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:#1d2023] text-ellipsis whitespace-nowrap">
                          Накопления
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['MTS_Compact:Regular'] h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:#626c77] w-full">
                        до 22%
                      </p>
                    </div>
                    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[9px] rounded-[var(--32,12px)] top-[9.5px]">
                      <div className="overflow-clip relative shrink-0 size-[24px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlusCircle} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[140px] items-start max-h-[140px] min-h-[140px] min-w-0 p-[var(--0,0px)] relative shrink-0 w-[163.5px]">
                <div className="bg-[rgba(188,195,208,0.25)] border border-[#f2f3f7] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[var(--16,16px)] relative rounded-[20px] w-full">
                  <div className="bg-[white] content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0">
                    <div className="relative shrink-0 size-[52px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage5} width="52" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['MTS_Compact:Regular'] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:#1d2023] text-ellipsis whitespace-nowrap">
                        Инвестиции
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['MTS_Compact:Regular'] h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:#626c77] w-full">
                      комиссия от 0,04%
                    </p>
                  </div>
                  <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[9px] rounded-[var(--32,12px)] top-[9.5px]">
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlusCircle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start pb-[var(--20,20px)] pt-[var(--0,0px)] relative shrink-0 w-full">
                <div className="content-stretch flex items-start pb-[12px] pt-[var(--36,36px)] px-[20px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Wide:Medium'] leading-[24px] min-w-px not-italic overflow-hidden relative text-[20px] text-[color:#1d2023] text-ellipsis whitespace-nowrap">
                        Открыть продукт
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[var(--20,20px)] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--8,8px)] items-start min-w-px relative">
                    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[8px] h-[120px] items-start max-w-[214px] min-w-[134px] overflow-clip p-[16px] relative rounded-[20px] shrink-0 w-full">
                      <div className="absolute bottom-0 overflow-clip right-[-0.5px] size-[80px]">
                        <div className="absolute inset-[10%_-26.67%_-36.67%_0]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[63.54%] left-[0.17%] max-w-none top-[7.85%] w-[98.87%]" src={img21777V3AovCryptomatte1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--2,2px)] items-start justify-center overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[var(--8,8px)] items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[18px] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:#1d2023] text-ellipsis">
                            Кредитные
                            <br aria-hidden />
                            карты
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[8px] h-[78px] items-start max-w-[214px] min-w-[134px] overflow-clip p-[16px] relative rounded-[20px] shrink-0 w-full">
                      <div className="absolute bottom-0 overflow-clip right-[-0.5px] size-[80px]">
                        <div className="absolute inset-[10%_-26.67%_-36.67%_0]">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21777V3AovCryptomatte2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--2,2px)] items-start justify-center overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[var(--8,8px)] items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[20px] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:#1d2023] text-ellipsis">
                            Вклады
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--8,8px)] items-start min-w-px relative">
                    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[8px] h-[78px] items-start max-w-[214px] min-w-[134px] overflow-clip p-[16px] relative rounded-[20px] shrink-0 w-full">
                      <div className="absolute bottom-0 overflow-clip right-[-0.5px] size-[80px]">
                        <div className="absolute inset-[10%_-26.67%_-36.67%_0]">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21777V3AovCryptomatte3} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--2,2px)] items-start justify-center overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[var(--8,8px)] items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[20px] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:#1d2023] text-ellipsis">
                            Кредиты
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--background,white)] content-stretch flex flex-col gap-[8px] h-[120px] items-start max-w-[214px] min-w-[134px] overflow-clip p-[16px] relative rounded-[20px] shrink-0 w-full">
                      <div className="absolute bottom-0 overflow-clip right-[-0.5px] size-[80px]">
                        <div className="absolute inset-[10%_-26.67%_-36.67%_0]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[62.02%] left-[-4.93%] max-w-none top-[9.33%] w-[96.45%]" src={img21777V3AovCryptomatte4} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--2,2px)] items-start justify-center overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[var(--8,8px)] items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Medium'] leading-[18px] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:#1d2023] text-ellipsis">
                            Дебетовые
                            <br aria-hidden />
                            карты
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start pb-[var(--0,0px)] pt-[var(--12,12px)] px-[var(--20,20px)] relative shrink-0 w-full">
                  <div className="bg-[#ff0032] content-stretch flex h-[52px] items-center justify-center p-[14px] relative rounded-[16px] shrink-0 w-full">
                    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:white] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">Все продукты</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CurrencyWidget className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" />
          </div>
        </div>
        </SliceStack>
      </div>
    </div>
  );
}
