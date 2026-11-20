import type { BalanceService, ConnectionKind } from './components/wallet-empty';

const services = ['card', 'mobile', 'parking', 'internet', 'avtodor'] as const;
const overviewSheets = ['attention', 'pin', 'autotopups', 'balance-notifications', 'summary', 'notifications'] as const;
export type AutoMode = 'monthly' | 'balance' | 'constant';
export type DetailScreen = 'detail' | 'topup' | 'auto' | 'notify';
export type WalletEntry = {
  tab: 'balances' | 'subscriptions';
  card?: number;
  topup?: boolean;
  add?: ConnectionKind;
  connect?: boolean;
  discovery?: boolean;
  cardAdded?: boolean;
  subscription?: number;
  overview?: typeof overviewSheets[number];
  detailScreen?: DetailScreen;
  autoMode?: AutoMode;
  topupSuccess?: boolean;
  autoTopupConnected?: boolean;
  naming?: boolean;
  manual?: boolean;
  sampleService?: BalanceService;
};

export function readPrototypeRoute(search: string) {
  const query = new URLSearchParams(search);
  const [page, section, action, service, step, mode] = (query.get('screen') ?? '').split('/');
  const empty = query.get('scenario') === 'empty';
  const entry: WalletEntry = { tab: section === 'subscriptions' ? 'subscriptions' : 'balances' };
  const screen = page === 'home' || page === 'wallet' ? page : !page && empty ? 'home' : 'payments';
  const onboardingMatch = /^step-([1-4])$/.exec(section ?? '');
  const onboarding = page === 'onboarding' && onboardingMatch ? Number(onboardingMatch[1]) - 1 : null;

  if (screen === 'wallet') {
    if (action === 'card-added') entry.cardAdded = true;
    if (action === 'discovered') entry.discovery = true;
    if (action === 'card' && (service === 'troika' || service === 'social-card')) {
      entry.card = service === 'troika' ? 0 : 1;
    }
    if (action === 'balance') {
      const index = ['mobile', 'internet', 'parking'].indexOf(service);
      if (index !== -1) entry.card = index + 2;
      else entry.sampleService = services.find(kind => kind === service);
    }
    if (entry.card !== undefined || entry.sampleService) {
      if (step === 'topup') entry.detailScreen = 'topup';
      if (step === 'low-balance-notification') entry.detailScreen = 'notify';
      if (step === 'auto-topup') {
        entry.detailScreen = 'auto';
        if (mode === 'monthly' || mode === 'balance' || mode === 'constant') entry.autoMode = mode;
      }
      entry.topupSuccess = step === 'topup-success';
      entry.autoTopupConnected = step === 'auto-topup-connected';
    }
    if (action === 'connect') {
      entry.connect = true;
      entry.add = services.find(kind => kind === service) ??
        (service === 'subscription' ? 'subscription' : service === 'balance' ? 'balance' : undefined);
      entry.naming = service === 'card' && step === 'name';
      entry.manual = service === 'subscription' && step === 'manual';
    }
    if (action === 'subscription') {
      entry.subscription = /^\d+$/.test(service ?? '') ? Number(service) : 0;
    }
    entry.overview = overviewSheets.find(sheet => sheet === action);
  }
  return { screen, empty, onboarding, entry } as const;
}
