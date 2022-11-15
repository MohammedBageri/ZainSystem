import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// import Control_Panel from '../views/Control_Panel.vue'
// import Account from '../views/Account.vue'
// import User from '../views/User.vue'
// import Bonds from '../views/Bonds.vue'
// import Entry from '../views/Entry.vue'
// import Currency from '../views/Currency.vue'
// import CurrencyValue from '../views/CurrencyValue.vue'
// import Profile from '../views/Profile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '#',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import ('../views/Login.vue')
    
  },
  {
    path: '/account',
    name: 'Account',
    component: ()=> import('../views/Account.vue')
    
  },
  {
    path: '/account_tree',
    name: 'AccountTree',
    component: ()=> import('../views/AccountTree.vue')
    
  },
  {
    path: '/control_panel',
    name: 'Control_Panel',
    component: ()=> import ('../views/Control_Panel.vue')
    
  },
  {
    path: '/user',
    name: 'User',
    component: ()=> import('../views/User.vue')
    
  },
  {
    path: '/bonds',
    name: 'Bonds',
    component: () => import('../views/Bonds.vue')
    
  },
  {
    path: '/entry',
    name: 'Entry',
    component: ()=> import('../views/Entry.vue')
    
  },
  {
    path: '/currency',
    name: 'Currency',
    component: ()=> import('../views/Currency.vue')
    
  },
  {
    path: '/currency_value',
    name: 'CurrencyValue',
    component: ()=> import('../views/CurrencyValue.vue')
    
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=> import('../views/Profile.vue')
     
  },
  {
    path: '/funds_guide',
    name: 'FundsGuide',
    component: ()=> import('../views/FundsGuide.vue') 
  },
  {
    path: '/accounts_guide',
    name: 'AccountsGuide',
    component: ()=> import('../views/AccountsGuide.vue') 
  },
  {
    path: '/exchange_rates',
    name: 'ExchangeRates',
    component: ()=> import('../views/ExchangeRates.vue') 
  },
  {
    path: '/currency_guide',
    name: 'CurrencyGuide',
    component: ()=> import('../views/CurrencyGuide.vue') 
  },
  {
    path: '/fund_cash_reports',
    name: 'FundCashReports',
    component: ()=> import('../views/FundCashReports.vue') 
  },
  {
    path: '/statement_of_account',
    name: 'StatementOfAccount',
    component: ()=> import('../views/StatementOfAccount.vue') 
  },
  {
    path: '/trial_balance',
    name: 'TrialBalance',
    component: ()=> import('../views/TrialBalance.vue') 
  },
  {
    path: '/bond_reports',
    name: 'BondReports',
    component: ()=> import('../views/BondReports.vue') 
  },
  {
    path: '/total_bond',
    name: 'TotalBond',
    component: ()=> import('../views/TotalBond.vue') 
  },
  {
    path: '/account_balances',
    name: 'AccountBalances',
    component: ()=> import('../views/AccountBalances.vue') 
  },
  {
    path: '/sub_entry/:entryId',
    name: 'SubEntry',
    component: ()=> import('../views/SubEntry.vue') 
  },
  {
    path: '/sub_account/:accountId',
    name: 'SubAccount',
    component: ()=> import('../views/SubAccount.vue') 
  },
  {
    path: '/sub_user/:userId',
    name: 'SubUser',
    component: ()=> import('../views/SubUser.vue') 
  },
  {
    path: '/sub_bond/:bondId',
    name: 'SubBond',
    component: ()=> import('../views/SubBond.vue') 
  },
  {
    path: '/sub_currency/:currncyId',
    name: 'SubCurrency',
    component: ()=> import('../views/SubCurrency.vue') 
  },
  {
    path: '/sub_currency_value/:CurrencyValueId',
    name: 'SubCurrencyValue',
    component: ()=> import('../views/SubCurrencyValue.vue') 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
});

export default router
