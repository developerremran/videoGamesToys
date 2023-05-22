import React, { useContext } from 'react';
import { AuthContext } from '../Authntication/Authntication';
import { Button, Label, TextInput } from 'flowbite-react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginUser, googleNewUser} = useContext(AuthContext)
    const navigate = useNavigate()
  const location = useLocation()

  console.log(location);
  const from = location.state?.from?.pathname;


    const googleNewUserL = () =>{
        googleNewUser()
        .then(
            (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                navigate(from)
                // ...
              }
        )
        .catch(error => console.log(error))
     }

 
     const loginHandeler =event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const logInfo={email, password}

        console.log(logInfo);

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            
            console.log(user);
            navigate(from)
            
        })
        .catch(error => {
            console.log(error)
        alert('check again Email & Password')})
     }

     

    return (
        <div className='bestW'>
        <h2 className='text-center text-4xl font-bold mt-24 mb-5'>
            Please Register Now
        </h2>

        <div className='w-1/3 mx-auto shadow-lg p-10 border  h-[350px]'>
            <form onSubmit={loginHandeler} className="flex flex-col gap-4">
            
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        name='password'
                        required={true}
                        shadow={true}
                    />
                </div>
         
               

                <Button type="submit">
                    Login
                </Button>
                <div  className='flex gap-5'>
                   <Button onClick={()=> googleNewUserL()} className='w-1/2 bg-orange-400' type="submit">
                    <FaGoogle className='mr-5'></FaGoogle> 
                       Google Register
                    </Button>
                    <Button className='w-1/2 bg-orange-400' type="submit">
                    <FaGoogle className='mr-5'></FaGoogle> 
                       Google Register
                    </Button>
                   </div>

            </form>
        </div>
    </div>
    );
};

export default Login;