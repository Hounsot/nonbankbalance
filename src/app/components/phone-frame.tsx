import { ReactNode } from "react";

export function PhoneFrame({ children, label, showStatus=true }: { children: ReactNode; label?: string; showStatus?:boolean }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-[380px] h-[780px] rounded-[58px] p-[7px]"
        style={{
          background:
            "linear-gradient(145deg, #f4f5f7 0%, #c9ccd3 22%, #8a8d96 50%, #c9ccd3 78%, #f4f5f7 100%)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.7) inset, 0 -2px 0 rgba(0,0,0,0.15) inset",
        }}
      >
        <div
          className="relative w-full h-full rounded-[52px] overflow-hidden bg-white"
          style={{
            boxShadow:
              "inset 0 0 0 2px #e1e1e5, inset 0 0 0 3px rgba(255,255,255,0.05)",
          }}
        >
          {showStatus&&<div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 pt-3.5 text-[#202024]">
            <span style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}>9:41</span>
            <div className="w-[108px] h-[33px] rounded-full" style={{ background: "#000" }} />
            <div className="flex items-center gap-1.5">
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                <path d="M1 7.5L1 9.5M4.5 5.5L4.5 9.5M8 3.5L8 9.5M11.5 1.5L11.5 9.5" stroke="#202024" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M8 3.5C9.5 3.5 11 4 12 5M8 0.5C10.5 0.5 13 1.5 14.5 3M8 6.5C8.8 6.5 9.5 6.8 10 7.3" stroke="#202024" strokeWidth="1.3" strokeLinecap="round" opacity="0.95"/>
                <circle cx="8" cy="9.5" r="1.2" fill="#202024"/>
              </svg>
              <svg width="26" height="11" viewBox="0 0 26 11" fill="none">
                <rect x="0.5" y="0.5" width="21" height="10" rx="2.5" stroke="#202024" opacity="0.5"/>
                <rect x="2" y="2" width="18" height="7" rx="1.2" fill="#202024"/>
                <rect x="22.5" y="3.5" width="1.5" height="4" rx="0.6" fill="#202024" opacity="0.5"/>
              </svg>
            </div>
          </div>
          }
          {children}
          <div aria-hidden="true" className="prototype-home-indicator" />
        </div>
      </div>
      {label && (
        <div className="text-[#5a5d66]" style={{ fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500 }}>
          {label}
        </div>
      )}
    </div>
  );
}
