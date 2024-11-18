import './NavBar.scss';
import background from '../../Images/background.jpg'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link, Outlet} from "react-router-dom";

const NavBar = ()=>{
    return(
        <div className='navbar'>
            <div className='left'>
                <Link to='/' style={{textDecoration: "none"}}>
                <span className='appname'>Spark Soul</span>
                </Link> 
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className='search'>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search' className='searchbar'/>
                </div>
            </div>


            <div className='right'>
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className='user' >
                    <img src={background} alt='image' className='image' />
                    <span> Username</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar