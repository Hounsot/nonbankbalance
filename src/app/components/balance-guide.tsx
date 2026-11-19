import { useId, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { X } from 'lucide-react';
import arrow from '../../assets/balances-new/guide-arrow.svg?inline';
import './balance-guide.css';

type Area = { top: number; left: number; width: number; height: number; containerWidth: number; containerHeight: number };
type Step = 'add' | 'choose' | 'form' | 'name' | 'added';

const content: Record<Step, { title: string; description: string }> = {
  add: { title: 'Добавьте баланс', description: 'Подключите транспортную карту, связь, парковку или другой счёт.' },
  choose: { title: 'Выберите тип счёта', description: 'Укажите, какой баланс хотите добавить.' },
  form: { title: 'Введите данные', description: 'Заполните данные счёта и продолжите подключение.' },
  name: { title: 'Назовите карту', description: 'Придумайте название, чтобы легко найти её в разделе.' },
  added: { title: 'Баланс добавлен', description: 'Теперь он отображается в разделе «Ваши балансы».' },
};

export function BalanceGuide({ rootRef, step, onDismiss, empty = false }: {
  rootRef: RefObject<HTMLDivElement | null>;
  step: Step;
  onDismiss: () => void;
  empty?: boolean;
}) {
  const [area, setArea] = useState<Area | null>(null);
  const [phase, setPhase] = useState<'waiting' | 'visible' | 'leaving'>('waiting');
  const previousStep = useRef<Step | null>(null);
  const maskId = useId();
  useLayoutEffect(() => {
    const isFirstStep = previousStep.current === null;
    previousStep.current = step;
    if (isFirstStep) {
      const timer = window.setTimeout(() => setPhase('visible'), 1000);
      return () => window.clearTimeout(timer);
    }
    setPhase('leaving');
    const hideTimer = window.setTimeout(() => setPhase('waiting'), 180);
    const showTimer = window.setTimeout(() => setPhase('visible'), 1180);
    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(showTimer);
    };
  }, [step]);
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const selector = step === 'added' ? '[data-guide-added]'
      : step === 'add' ? (empty ? '.bn-offers .bn-grid' : '.calm-add-dock button')
      : step === 'choose' ? '.wallet-modal .we-connect-list'
      : '.wallet-modal .we-manual';
    let observer: ResizeObserver | undefined;
    let frame = 0;
    const update = () => {
      const target = root.querySelector<HTMLElement>(selector);
      if (!target) { setArea(null); return; }
      const container = root.getBoundingClientRect();
      const bounds = target.getBoundingClientRect();
      const scaleX = container.width / root.offsetWidth;
      const scaleY = container.height / root.offsetHeight;
      if (!scaleX || !scaleY) return;
      const left = Math.max(0, (bounds.left - container.left) / scaleX - 4);
      const top = Math.max(0, (bounds.top - container.top) / scaleY - 4);
      const right = Math.min(root.offsetWidth, (bounds.right - container.left) / scaleX + 4);
      const bottom = Math.min(root.offsetHeight, (bounds.bottom - container.top) / scaleY + 4);
      const next = { left, top, width: right - left, height: bottom - top, containerWidth: root.offsetWidth, containerHeight: root.offsetHeight };
      setArea(previous => previous && Object.keys(next).every(key => previous[key as keyof Area] === next[key as keyof Area]) ? previous : next);
    };
    frame = requestAnimationFrame(() => {
      update();
      const target = root.querySelector<HTMLElement>(selector);
      observer = new ResizeObserver(update);
      observer.observe(root);
      if (target) observer.observe(target);
    });
    root.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      root.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [rootRef, step, empty]);

  if (phase === 'waiting' || !area || area.width <= 0 || area.height <= 0) return null;
  const bubbleWidth = Math.min(300, area.containerWidth - 40);
  const bubbleLeft = Math.max(20, Math.min(area.left + area.width / 2 - bubbleWidth / 2, area.containerWidth - bubbleWidth - 20));
  const bubbleBelow = area.top < 125;
  const bubbleStyle = bubbleBelow
    ? { left: bubbleLeft, top: area.top + area.height + 8, width: bubbleWidth }
    : { left: bubbleLeft, bottom: area.containerHeight - area.top + 8, width: bubbleWidth };
  const message = step === 'add' && empty
    ? { title: 'Выберите, что добавить', description: 'Нажмите на нужную категорию, чтобы подключить первый баланс.' }
    : content[step];
  return (
    <div className={`balance-guide ${phase === 'leaving' ? 'balance-guide-leaving' : 'balance-guide-intro'}`} role="region" aria-label="Подсказка по добавлению баланса">
      <svg className="balance-guide-dim" width={area.containerWidth} height={area.containerHeight} aria-hidden="true">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={area.containerWidth} height={area.containerHeight}>
            <rect width={area.containerWidth} height={area.containerHeight} fill="white"/>
            <rect x={area.left} y={area.top} width={area.width} height={area.height} rx="18" fill="black"/>
          </mask>
        </defs>
        <rect width={area.containerWidth} height={area.containerHeight} fill="rgba(29, 32, 35, .72)" mask={`url(#${maskId})`}/>
      </svg>
      <div className="balance-guide-block" style={{ left: 0, top: 0, width: area.containerWidth, height: area.top }}/>
      <div className="balance-guide-block" style={{ left: 0, top: area.top, width: area.left, height: area.height }}/>
      <div className="balance-guide-block" style={{ left: area.left + area.width, top: area.top, right: 0, height: area.height }}/>
      <div className="balance-guide-block" style={{ left: 0, top: area.top + area.height, right: 0, bottom: 0 }}/>
      <div className="balance-guide-ring" style={{ left: area.left, top: area.top, width: area.width, height: area.height }}/>
      <div className={`balance-guide-popover ${bubbleBelow ? 'balance-guide-popover-below' : 'balance-guide-popover-above'}`} style={bubbleStyle} role="status">
        <img className="balance-guide-arrow" src={arrow} alt=""/>
        <button type="button" className="balance-guide-close" aria-label="Закрыть подсказки" onClick={onDismiss}><X size={18}/></button>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
        {step === 'added' && <button type="button" className="balance-guide-done" onClick={onDismiss}>Понятно</button>}
      </div>
    </div>
  );
}
