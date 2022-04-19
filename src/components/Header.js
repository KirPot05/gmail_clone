import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser, logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import {auth} from '../firebase';
import '../styles/Header.css';


function Header() {

    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutUser = async () => {
        dispatch(logout());
        await signOut(auth);
    }

    return (
        <div className='header'>
            <div class="header__left">

                <IconButton>
                    <Menu />
                </IconButton>

                {/* GMAIL Logo Image */}
                {/* <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt=""/>     */}
                <img
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt=""
                    onClick={() => navigate('/')}
                />

            </div>



            <div class="header__middle">
                <Search />
                <input type="text" placeholder='Search mail' />
                <ArrowDropDown />
            </div>



            <div class="header__right">
                <IconButton >
                    <Apps />
                </IconButton>

                <IconButton >
                    <Notifications />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={logoutUser}/>
            </div>

        </div>
    )
}

export default Header