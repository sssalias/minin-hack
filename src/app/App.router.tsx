import { Route, Routes } from 'react-router-dom'
import { EventsInfoPage, EventsPage, HomePage, MapPage, NewsPage } from 'src/pages'
import { NewsInfoPage } from 'src/pages/news-page'
import ProfilePage from 'src/pages/profile-page/profile-page'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [
    {
        path: '/',
        page: <HomePage/>
    },
    {
        path: '/map',
        page: <MapPage/>
    },
    {
        path: '/news',
        page: <NewsPage/>
    },
    {
        path: '/news/:id',
        page: <NewsInfoPage/>
    },
    {
        path: '/events',
        page: <EventsPage/>
    },
    {
        path: '/events/:id',
        page: <EventsInfoPage/>
    },
    {
        path: '/profile',
        page: <ProfilePage/>
    }
]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter