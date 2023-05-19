import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authntication/Authntication';

const Header = () => {
    const { users, singOut } = useContext(AuthContext)
    // console.log(users);


    const logOutUser = () => {
        singOut()
            .then(() => {
                alert('Logout Successfully')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className='bestW items-center'

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
                        label={<Avatar className='w-[100px]' alt="User settings" img={users?.photoURL || users?.image} rounded={true} />}

                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {
                                    users?.email
                                }
                            </span>
                        </Dropdown.Header>

                        <Dropdown.Item onClick={() => logOutUser()}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link
                        href="/"
                         
                        className='text-xl'
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link className='text-xl' href="/all_toys">
                        All Toys
                    </Navbar.Link>
                    <>
                        {
                            users ?
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
                            users ? <>

                                <Navbar.Link className='text-xl' onClick={() => logOutUser()}>
                                    LogOut
                                </Navbar.Link>

                            </> :
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