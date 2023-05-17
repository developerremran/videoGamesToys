import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../Authntication/Authntication';




const Register = () => {
//   const { registerUser } = useContext(AuthContext)


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

    // registerUser(email, password)
    // .then(result =>{
    //    const user = result.user;
    //    console.log(user);
    // })
    // .catch(error => console.log(error))
    

   }

    return (
        <div className='bestW'>
            <h2 className='text-center text-4xl font-bold mt-24 mb-5'>
                Please Register Now
            </h2>

            <div className='w-1/3 mx-auto shadow-lg p-10 border  h-[600px]'>
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
                </form>
            </div>
        </div>
    );
};

export default Register;