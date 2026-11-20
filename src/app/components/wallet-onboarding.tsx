import { useEffect, useRef, useState } from 'react';
import { BalancesCalm } from './balances-calm';
import type { WalletEntry } from '../prototype-route';
import back from '../../assets/onboarding/back.svg?inline';
import wifi from '../../assets/onboarding/wifi.svg?inline';
import signal from '../../assets/onboarding/signal.svg?inline';
import battery from '../../assets/onboarding/battery.svg?inline';
import demoPhonePhoto from '../../assets/onboarding/demo-phone-photo.png';
import './wallet-onboarding.css';

const slides = [
  { title: 'Все балансы под\u00a0рукой', description: 'Смотрите и пополняйте балансы транспортных карт, связи, интернета, парковок и других счетов в одном месте.' },
  { title: 'Пополняйте за пару нажатий', description: 'Откройте нужный счёт, укажите сумму и подтвердите пополнение.' },
  { title: 'Держите расходы под контролем', description: 'Смотрите, когда спишется плата за связь или на сколько примерно хватит баланса «Тройки».' },
  { title: 'Всегда оставайтесь в плюсе', description: 'Настройте автопополнение по расписанию или когда баланс снизится до выбранной суммы.' },
];

type Demo = { entry: WalletEntry; target?: string; targetInset?: number };
const coverDemo: Demo = { entry: { tab: 'balances' } };

const demos: Demo[] = [
  { entry: { tab: 'balances', card: 0, detailScreen: 'topup' }, target: '.balance-flow-field' },
  { entry: { tab: 'balances', card: 2 }, target: '.troika-insight' },
  { entry: { tab: 'balances', card: 3, detailScreen: 'auto', autoMode: 'monthly' }, target: '.auto-modes' },
];

type IntroMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string };

function IntroVisual({ media }: { media?: IntroMedia }) {
  return (
    <div className="wo-media">
      {media?.type === 'image' && <img src={media.src} alt={media.alt}/>}
      {media?.type === 'video' && <video src={media.src} poster={media.poster} autoPlay muted loop playsInline aria-hidden="true"/>}
    </div>
  );
}

function FeatureDemo({ demo }: { demo: Demo }) {
  const preview = useRef<HTMLDivElement>(null);
  const popout = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selector = demo.target;
    if (!selector) return;
    const frame = requestAnimationFrame(() => {
      const root = preview.current;
      const target = root?.querySelector<HTMLElement>(selector);
      const layer = popout.current;
      if (!target || !layer) return;

      const scroller = target.closest<HTMLElement>('.subscription-sheet, .balance-flow-body, .auto-scroll, .bc-scroll');
      if (scroller) {
        // The preview is scaled, so translate screen coordinates back to scroll units.
        const bounds = scroller.getBoundingClientRect();
        const scale = bounds.height / scroller.offsetHeight;
        if (scale > 0) scroller.scrollTop += (target.getBoundingClientRect().top - bounds.top) / scale - (demo.targetInset ?? 16);
      }
      const copy = target.cloneNode(true) as HTMLElement;
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
      // Keep the selector context that gives cards their original padding.
      const context = document.createElement('div');
      context.className = 'wo-demo-popout-content';
      if (target.closest('.balance-sheet-service')) context.classList.add('balance-sheet-service');
      context.style.fontFamily = getComputedStyle(target).fontFamily;
      context.append(copy);
      layer.replaceChildren(context);
      const stage = layer.parentElement!.getBoundingClientRect();
      const source = target.getBoundingClientRect();
      const height = layer.getBoundingClientRect().height;
      const top = source.top - stage.top + (source.height - height) / 2;
      layer.style.top = `${Math.max(42, Math.min(top, stage.height - height - 12))}px`;
      layer.classList.add('wo-demo-popout-visible');
    });
    return () => cancelAnimationFrame(frame);
  }, [demo]);

  return (
    <div className="wo-demo-stage" aria-hidden="true" inert data-prototype-inactive>
      <div className="wo-demo-phone">
        <img className="wo-demo-photo" src={demoPhonePhoto} alt=""/>
        <div className="wo-demo-interface" ref={preview}>
          <BalancesCalm entry={demo.entry}/>
        </div>
        <img className="wo-demo-photo-top" src={demoPhonePhoto} alt=""/>
      </div>
      {demo.target && <div className="wo-demo-popout bc calm" ref={popout}/>}
    </div>
  );
}

type WalletOnboardingProps = {
  introMedia?: IntroMedia;
  initialStep?: number;
  onClose: () => void;
  onConnect: () => void;
};

export function WalletOnboarding({ initialStep = 0, introMedia, onClose, onConnect }: WalletOnboardingProps) {
  const [step, setStep] = useState(initialStep);
  const heading = useRef<HTMLHeadingElement>(null);
  const dialog = useRef<HTMLElement>(null);
  const slide = slides[step];
  const cover = step === 0;
  const lastStep = step === slides.length - 1;

  useEffect(() => {
    const previous = document.activeElement;
    return () => {
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, []);
  useEffect(() => heading.current?.focus(), [step]);

  return (
    <section ref={dialog} className={cover ? 'wo wo-cover-step' : 'wo wo-demo-step'} data-prototype-screen={`onboarding/step-${step + 1}`}
      role="dialog" aria-modal="true" aria-labelledby="wo-title"
      onKeyDown={event => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          onClose();
        }
        if (event.key !== 'Tab') return;
        const buttons = dialog.current?.querySelectorAll('button:not([inert] button)');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}>
      {cover && <IntroVisual media={introMedia}/>}
      <div className="wo-content" key={step}>
        <header>
          <h1 id="wo-title" ref={heading} tabIndex={-1}>
            {step === 1 ? <>Пополняйте<br/>за пару нажатий</> : slide.title}
          </h1>
          <p>{slide.description}</p>
        </header>
        <FeatureDemo demo={cover ? coverDemo : demos[step - 1]}/>

      </div>
      <footer className="wo-footer">
        <div>
          {step > 0 && <button type="button" className="wo-back" aria-label="Предыдущий шаг" onClick={() => setStep(step - 1)}>
            <img src={back} width={24} height={24} alt=""/>
          </button>}
          <button type="button" className="wo-next" onClick={() => lastStep ? onConnect() : setStep(step + 1)}>
            Далее
          </button>
        </div>
        <span className="wo-indicator" aria-hidden="true"/>
      </footer>
    </section>
  );
}
