import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authntication/Authntication';

const Header = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className='bestW'
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src={'/src/assets/Logo/logo.png'}
                        className="mr-3 h-[150px]  w-auto "
                        
                    />
                     
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar  className='w-[100px]' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                       
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link 
                        href="/"
                        active={true}
                        className='text-xl'
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link className='text-xl' href="/all_toys">
                        All Toys
                    </Navbar.Link>
                    <>
                    {
                        user ? 
                        <> 
                        <Navbar.Link className='text-xl' href="/my_toys">
                        My Toys
                     </Navbar.Link>
                     <Navbar.Link className='text-xl' href="/add_toys">
                         Add Toys
                     </Navbar.Link>
                        </>  
                        :
                        <>
                        </>
                    }
                    </>
                    <Navbar.Link className='text-xl' href="/contact">
                        Contact
                    </Navbar.Link>
                    <Navbar.Link className='text-xl' href="/blog">
                        Blog
                    </Navbar.Link>
                    
                    <>
                    {
                        user ? <>
                        
                    <Navbar.Link className='text-xl' href="/login">
                        LogOut
                    </Navbar.Link>
                    
                        </>:
                        <>
                        <Navbar.Link className='text-xl' href="/register">
                        Register
                    </Navbar.Link>
                        <Navbar.Link className='text-xl' href="/login">
                        Login
                    </Navbar.Link>
                        </>
                    }
                    </>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;