import { ReactNode } from "react";

export function PhoneFrame({ children, label }: { children: ReactNode; label?: string }) {
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
