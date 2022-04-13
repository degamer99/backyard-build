import React, { useState} from "react";

const formArray =[
        [{
            id: 'create',
            h2: 'Create An Account',
            input: [
                {
                    nameId: 'first',
                    type: 'text',
                    placeholder: 'Enter First Name',
                    txt: 'First Name'
                },
                {
                    nameId: 'last',
                    type: 'text',
                    placeholder: 'Enter Last Name',
                    txt: 'Last Name'
                },
                {
                    nameId: 'email',
                    type: 'email',
                    placeholder: 'name@example.com',
                    txt: 'Email Address'
                },
                {
                    nameId: 'phone',
                    type: 'text',
                    placeholder: '09012345678',
                    txt: 'Phone Number'
                },
                {
                    nameId: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    txt: 'Password'
                },
                {
                    nameId: 'comfirm',
                    type: 'password',
                    placeholder: 'Confirm Password',
                    txt: 'Confirm Password'
                },
            ],
            btn: 'Register',
            footer: 'Already have an account?',
            a: 'Sign In',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }],
        [{
            id: 'login',
            h2: 'User Login',
            input: [
                {
                    nameId: 'email',
                    type: 'email',
                    placeholder: 'name@example.com',
                    txt: 'Email Address'
                },
                {
                    nameId: 'password',
                    type: 'password',
                    placeholder: '.........',
                    txt: 'Password'
                },
            ],
            btn: 'Log In',
            footer: 'Already have an account?',
            a: 'Sign Up',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }],
        [{
            id: 'reset',
            h2: 'Reset Password',
            input: [
                {
                    nameId: 'email',
                    type: 'email',
                    placeholder: 'name@example.com',
                    txt: 'Email Address'
                }
            ],
            btn: 'Reset',
            footer: 'Didnt Recieve?',
            a: 'Resend',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }]
    
    ];


function Form (){
    const [form, setForm] = useState(formArray[0]);
    const change = (id) => {switch (id){
        case "create":
            setForm(formArray[1])
            break;
        case "login":
            setForm(formArray[0])
            break;
        case "reset":
            setForm(formArray[1])
            break;
    }}
    console.log(form);
   
    
    return(<>
        <Heading />
        <Allform />
        </>
    );
}

              {/* dashboard logo  */}
export default Form;