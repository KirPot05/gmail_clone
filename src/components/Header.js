import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material';
import '../styles/Header.css';


function Header() {
  return (
    <div className='header'>
        <div class="header__left">

            <IconButton>
                <Menu/>    
            </IconButton>

            {/* GMAIL Logo Image */}
            {/* <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt=""/>     */}
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>

        </div>



        <div class="header__middle">
            <Search/>
            <input type="text" placeholder='Search mail'/>
            <ArrowDropDown/>
        </div>



        <div class="header__right">
            <IconButton >
                <Apps/>
            </IconButton>

            <IconButton >
                <Notifications/>
            </IconButton>

            <Avatar/>
        </div>

    </div>
  )
}

export default Header