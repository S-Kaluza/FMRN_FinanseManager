import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen/AnalyticsScreen';
import CurrencyConverterScreen from '../screens/CurrencyConverterScreen/CurrencyConverterScreen';
import DevScreen from '../screens/DevScreen/DevScreen';
import InflationMonitorScreen from '../screens/InflationMonitorScreen/InflationMonitorScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';

export const navigationConfig = [
  {
    name: 'Dashboard',
    options: { title: 'MainPage' },
    nested: [],
    component: DashboardScreen,
    isProtected: false,
  },
  {
    name: 'Analytics',
    options: { title: 'Analytics' },
    nested: [],
    component: AnalyticsScreen,
    isProtected: false,
  },
  {
    name: 'CurrencyConverter',
    options: { title: 'Converter' },
    nested: [],
    component: CurrencyConverterScreen,
    isProtected: false,
  },
  {
    name: 'DevScreen',
    options: { title: 'DevScreen' },
    nested: [],
    component: DevScreen,
    isProtected: false,
  },
  {
    name: 'InflationMonitor',
    options: { title: 'InflationMonitor' },
    nested: [],
    component: InflationMonitorScreen,
    isProtected: false,
  },
  {
    name: 'LoginScreen',
    options: { title: 'Login' },
    nested: [],
    component: LoginScreen,
    isProtected: false,
  },
  {
    name: 'RegisterScreen',
    options: { title: 'Register' },
    nested: [],
    component: RegisterScreen,
    isProtected: false,
  },
];
