import homeActive from "../../assets/home/d69c4.svg";
import homeInactive from "../../assets/payments/e1191.svg";
import paymentsInactive from "../../assets/home/b4792.svg";
import historyIcon from "../../assets/home/77ba4.svg";
import productsIcon from "../../assets/home/24737.svg";
import moreIcon from "../../assets/home/94143.svg";
import "./banking-tab-bar.css";

type BankingTab = "home" | "payments";

export function BankingTabBar({ active, onChange }: {
  active: BankingTab;
  onChange: (tab: BankingTab) => void;
}) {
  const tabs = [
    { id: "home", label: "Главная", icon: active === "home" ? homeActive : homeInactive },
    { id: "payments", label: "Платежи", icon: paymentsInactive },
    { id: "history", label: "История", icon: historyIcon },
    { id: "products", label: "Продукты", icon: productsIcon },
    { id: "more", label: "Ещё", icon: moreIcon },
  ] as const;

  return (
    <nav className="banking-tab-bar" aria-label="Разделы приложения">
      {tabs.map(({ id, label, icon }) => {
        const content = (
          <>
            <span className="banking-tab-icon">
              {id === "payments" && active === id
                ? <span aria-hidden="true" className="banking-tab-active-icon" style={{ maskImage: `url("${icon}")` }} />
                : <img src={icon} alt="" />}
              {id === "payments" && <span className="banking-tab-badge" aria-label="3 счёта к оплате">3</span>}
            </span>
            <span>{label}</span>
          </>
        );
        return id === "home" || id === "payments" ? (
          <button key={id} type="button" className="banking-tab" data-tab={id}
            aria-current={active === id ? "page" : undefined} onClick={() => onChange(id)}>
            {content}
          </button>
        ) : <div key={id} className="banking-tab">{content}</div>;
      })}
    </nav>
  );
}
