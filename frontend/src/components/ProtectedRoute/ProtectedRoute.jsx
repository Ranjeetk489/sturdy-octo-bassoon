import {Outlet} from 'react-router';
import {useSelector} from 'react-redux';
import Login from '../../pages/Authentication/Login/Login';

const ProtectedRoute = () => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const token = localStorage.getItem('user');
    return isLoggedIn && token ? <Outlet /> : <Login/>
}

export default ProtectedRoute