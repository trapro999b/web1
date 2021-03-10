import React from 'react';
import {useAuth} from "../contexts/Auth";
import '../App.css'
import pepe from '../images/pepe_king.jpg'
function NavBar() {
    const {logout} = useAuth()
    async function handleLogouts() {
        try {
            await logout()
        }
        catch {
            alert('Không thể đăng xuất')
        }
    }
        return (         
        <React.Fragment>
            <header>
                <span>
                     <img src={pepe} className="user-avt" alt="pepe" />
                </span>
                <nav >
                    <ul className='nav_link'>
                        <li><a href='#'>Trang chủ</a></li>
                        <li><a href='#'>Dịch vụ</a></li>
                        <li><a href='#'>Giới thiệu</a></li>
                    </ul>
                </nav>  
                        <a className='signButton' onClick={handleLogouts} >Đăng xuất</a> 
            </header>
        </React.Fragment> );
    }
export default NavBar;
