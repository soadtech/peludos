import InfoPet from '../../containers/InfoPet'
import Chat from '../../containers/Chat';
import Login from '../../containers/Login'

export default [
    {
        path: 'InfoPet',
        name: 'InfoPet',
        component: InfoPet
    },
    {
        path: 'Chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: 'Login',
        name: 'Login',
        component: Login
    },
]