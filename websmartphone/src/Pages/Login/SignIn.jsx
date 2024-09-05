import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import { memo, useState } from 'react';
import { connect } from "react-redux";
import { wait } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';
import storage from '../../API/Storage';
import loginAPI from '../../API/components/Login/LoginAPI';


function SignIn(props){
    const [email, setEmail] = useState("");
    const [checkRememberMe,setCheckRememberMe] = useState();
    const history = useNavigate();

    return(
        <Formik
            initialValues={
                {
                    username:'',
                    password:''
                }
            }
            onSubmit={ async (values)=>{
                const result = await loginAPI.login(
                    values.username,
                    values.password
                )
                
                storage.setToken(result.token)
                storage.setUserInfo(
                    result.username,
                    result.email,
                    result.name,
                    result.role
                )
                history("/")
                console.log(result);
            }}
        >
            {({isSubmitting})=>(
                <Form className=''>
                    <h2 className='title'>Sign In</h2>
                    <FastField name="username">
                        {({ field, form, meta }) => (
                            <div className="input-field">
                            <ion-icon name="person"></ion-icon>
                            <input type="text" placeholder="Username" {...field}/>
                            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                            </div>
                        )}
                    </FastField>
                    <FastField name="password">
                    {({ field, form, meta }) => (
                        <div className="input-field">
                        <ion-icon name="lock-closed"></ion-icon>
                        <input type="text" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type='submit' value="Login" className='btn' disabled={()=>isSubmitting}/>
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                    <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2" onClick={()=>props.SignUpBtn2()}>Sign Up</a></p>
                </Form>
            )}
        </Formik>
    )
}

export default SignIn;