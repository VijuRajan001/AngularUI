export const navigation = [
    {
        'id'       : 'applications',
        'title'    : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
            {
                'id'       : 'dashboards',
                'title'    : 'Dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type'     : 'collapse',
                'icon'     : 'dashboard',
                'children' : [

                    {
                        'id'        : 'products',
                        'title'     : 'Requests',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/products',
                        'exactMatch': true
                    },
                    {
                        'id'        : 'productDetail',
                        'title'     : 'Request Detail',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/products/1/printed-dress',
                        'exactMatch': true
                    },
                    {
                        'id'        : 'orders',
                        'title'     : 'Reimbursement',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/orders',
                        'exactMatch': true
                    },
                    {
                        'id'        : 'orderDetail',
                        'title'     : 'Reimbursement Detail',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/orders/1',
                        'exactMatch': true
                    },
                    {
                        'id'   : 'analytics',
                        'title': 'Analytics',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/analytics'
                    },
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                    
                ]
            },
            {
                'id'       : 'calendar',
                'title'    : 'Calendar',
                'translate': 'NAV.CALENDAR',
                'type'     : 'item',
                'icon'     : 'today',
                'url'      : '/apps/calendar'
            },
            {
                'id'       : 'mail-ngrx',
                'title'    : 'Mail Ngrx',
                'translate': 'NAV.MAIL_NGRX.TITLE',
                'type'     : 'item',
                'icon'     : 'email',
                'url'      : '/apps/mail-ngrx',
                'badge'    : {
                    'title'    : 13,
                    'translate': 'NAV.MAIL_NGRX.BADGE',
                    'bg'       : '#EC0C8E',
                    'fg'       : '#FFFFFF'
                }
            },
            {
                'id'       : 'file-manager',
                'title'    : 'File Manager',
                'translate': 'NAV.FILE_MANAGER',
                'type'     : 'item',
                'icon'     : 'folder',
                'url'      : '/apps/file-manager'
            },
            {
                'id'       : 'contacts',
                'title'    : 'Contacts',
                'translate': 'NAV.CONTACTS',
                'type'     : 'item',
                'icon'     : 'account_box',
                'url'      : '/apps/contacts'
            },
            {
                'id'       : 'to-do',
                'title'    : 'To-Do',
                'translate': 'NAV.TODO',
                'type'     : 'item',
                'icon'     : 'check_box',
                'url'      : '/apps/todo',
                'badge'    : {
                    'title': 3,
                    'bg'   : '#FF6F00',
                    'fg'   : '#FFFFFF'
                }
            }
            
        ]
    },
    {
        'id'      : 'pages',
        'title'   : 'Pages',
        'type'    : 'group',
        'icon'    : 'pages',
        'children': [
            {
                'id'      : 'authentication',
                'title'   : 'Authentication',
                'type'    : 'collapse',
                'icon'    : 'lock',
                'badge'   : {
                    'title': 10,
                    'bg'   : '#525e8a',
                    'fg'   : '#FFFFFF'
                },
                'children': [
                    {
                        'id'   : 'login',
                        'title': 'Login',
                        'type' : 'item',
                        'url'  : '/pages/auth/login'
                    },
                    {
                        'id'   : 'login-v2',
                        'title': 'Login v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/login-2'
                    },
                    {
                        'id'   : 'register',
                        'title': 'Register',
                        'type' : 'item',
                        'url'  : '/pages/auth/register'
                    },
                    {
                        'id'   : 'register-v2',
                        'title': 'Register v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/register-2'
                    },
                    {
                        'id'   : 'forgot-password',
                        'title': 'Forgot Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password'
                    },
                    {
                        'id'   : 'forgot-password-v2',
                        'title': 'Forgot Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password-2'
                    },
                    {
                        'id'   : 'reset-password',
                        'title': 'Reset Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password'
                    },
                    {
                        'id'   : 'reset-password-v2',
                        'title': 'Reset Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password-2'
                    },
                    {
                        'id'   : 'lock-screen',
                        'title': 'Lock Screen',
                        'type' : 'item',
                        'url'  : '/pages/auth/lock'
                    },
                    {
                        'id'   : 'mail-confirmation',
                        'title': 'Mail Confirmation',
                        'type' : 'item',
                        'url'  : '/pages/auth/mail-confirm'
                    }
                ]
            },
            {
                'id'      : 'errors',
                'title'   : 'Errors',
                'type'    : 'collapse',
                'icon'    : 'error',
                'children': [
                    {
                        'id'   : '404',
                        'title': '404',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-404'
                    },
                    {
                        'id'   : '500',
                        'title': '500',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-500'
                    }
                ]
            },
            
            {
                'id'   : 'maintenance',
                'title': 'Maintenance',
                'type' : 'item',
                'icon' : 'build',
                'url'  : '/pages/maintenance'
            },
            {
                'id'   : 'profile',
                'title': 'Profile',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/pages/profile'
            },
            {
                'id'   : 'search',
                'title': 'Search',
                'type' : 'item',
                'icon' : 'search',
                'url'  : '/pages/search'
            },
            {
                'title': 'Faq',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/pages/faq'
            },
            {
                'title': 'Knowledge Base',
                'type' : 'item',
                'icon' : 'import_contacts',
                'url'  : '/pages/knowledge-base'
            }
        ]
    },
    
    {
        'id'      : 'services',
        'title'   : 'Services',
        'type'    : 'group',
        'icon'    : 'settings',
        'children': [
            {
                'id'   : 'config',
                'title': 'Config',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/config'
            },
            {
                'id'   : 'splash-screen',
                'title': 'Splash Screen',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/splash-screen'
            }
        ]
    },
    
    
];
