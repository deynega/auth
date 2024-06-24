import Auth from '@/components/Pages/AuthPage.vue'
import AccountSettings from '@/components/Pages/AccountSettingsPage.vue'

const routes = [
  { path: '/', name: 'Auth', component: Auth },
  { path: '/account-settings', name: 'AccountSettings', component: AccountSettings },
  { path: '*', redirect: '/' }
]
  
export default routes
