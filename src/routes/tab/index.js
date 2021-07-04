import Home from '../../containers/Home';
import Chats from '../../containers/Chats';
import Bookmark from '../../containers/BookMark';

export default [
    {
        path: 'Home',
        name: 'Inicio',
        icon: 'https://image.flaticon.com/icons/png/512/748/748015.png',
        component: Home
    },
    {
        path: 'Chats',
        name: 'Chat',
        icon: 'https://image.flaticon.com/icons/png/512/589/589723.png',
        component: Chats
    },
    {
        path: 'Bookmark',
        name: 'Guardados',
        icon: 'https://image.flaticon.com/icons/png/512/748/748002.png',
        component: Bookmark
    },
    {
        path: 'Profile',
        name: 'Perfil',
        icon: 'https://image.flaticon.com/icons/png/512/860/860784.png',
        component: Home
    },
]