import { CgProfile } from 'react-icons/cg'

interface INavItem {
    title: string,
    link: string,
    icon?: React.ReactNode
}


export const NAV: INavItem[] = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Карта',
        link: '/map'
    },
    {
        title: 'Новости',
        link: '/news'
    },
    {
        title: 'Мероприятия',
        link: '/events'
    },
    // {
    //     title: 'Личный Кабинет',
    //     link: '/profile',
    //     icon: <CgProfile size={24}/>
    // },
]