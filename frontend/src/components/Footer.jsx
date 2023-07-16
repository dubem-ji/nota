import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';


const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            console.log(route, location.pathname)
            return true
        }
    };

    return (
        <>
            <footer className="footer">
                <nav className='navBar'>
                    <ul className="navBarListItems">
                        <li className="navBarListItem" onClick={() => navigate('/')}>
                            <NotesIcon sx={{ color: pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f' }}/>
                            <p className={pathMatchRoute('/') ? 'navBarListItemNameActive' : 'navBarListItemName'}>Notes</p>
                        </li>
                         <li className="navBarListItem" onClick={() => navigate('/profile')}>
                            <Person2OutlinedIcon sx={{ color: pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f' }}/>
                            <p className={pathMatchRoute('/profile') ? 'navBarListItemNameActive' : 'navBarListItemName'}>John</p>
                        </li>
                        <li className="navBarListItem" onClick={() => navigate('/folders')}>
                            <FolderOpenOutlinedIcon sx={{ color: pathMatchRoute('/folders') ? '#2c2c2c' : '#8f8f8f' }}/>
                            <p className={pathMatchRoute('/folders') ? 'navBarListItemNameActive' : 'navBarListItemName'}>Folders</p>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Footer;