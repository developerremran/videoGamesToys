import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../Authntication/Authntication';
import {   FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';




const Register = () => {
  const { registerUser,googleNewUser} = useContext(AuthContext)


   const submitHandeler = event =>{
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const repeatPassword = from.repeat-password.value;
    const image = from.image.value;

    const info = {name,email, password, repeatPassword, image}
    console.log(info);
    from.reset()

    registerUser(email, password)
    .then(result =>{
       const user = result.user;
       console.log(user);
       alert('success register')
    
    })
    .catch(error => console.log(error))
    

   }

//    google user register 
 const googleNewUserH = () =>{
    googleNewUser()
    .then(
        (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }
    )
    .catch(error => console.log(error))
 }
   

    return (
        <div className='bestW'>
            <h2 className='text-center text-4xl font-bold mt-24 mb-5'>
                Please Register Now
            </h2>

            <div className='w-1/3 mx-auto shadow-lg p-10 border  h-[650px]'>
                <form onSubmit={submitHandeler} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name='name'
                            placeholder="Enter Your  Name"
                            required={true}
                            shadow={true}
                        />
                    </div>
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
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            id="repeat-password"
                            type="password"
                            name='repeat-password'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="text"
                                value=" Photo URL"
                            />
                        </div>
                        <TextInput
                            id="text"
                            type="text"
                            name='image'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree">
                            I agree with the
                            <a
                                href="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button type="submit">
                        Register new account
                    </Button>
                   <div  className='flex gap-5'>
                   <Button onClick={()=> googleNewUserH()} className='w-1/2 bg-orange-400' type="submit">
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

export default Register;