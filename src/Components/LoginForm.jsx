import React, { useRef, useState } from 'react'
import { Form, Button,Alert } from "react-bootstrap"
import {useAuth} from "../contexts/Auth"
import {Link, useHistory} from 'react-router-dom'
import '../App.css'
export default function LoginForm() { 
        const emailRef = useRef()      
        const passwordRef = useRef()
        const [error, setError] = useState(' ')
        const [loading, setLoading] = useState(false)
        const {login} = useAuth()
        const history = useHistory()

        async function handleSubmit(e) {
            e.preventDefault()

            try {
                setError("")
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                history.push('/')
            }
            catch {
                setError('Không thể đăng nhập vào tài khoản')
            }
            setLoading(false)
        }
        return ( 
        <div className='login'>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form className='form' onSubmit={handleSubmit}>
                    
                    <input  type="text"
                            placeholder="Email"
                            ref={emailRef} 
                            ></input>
                    <input  type="password"
                            placeholder="Mật khẩu"
                            ref={passwordRef}
                            ></input>
                    <Button className='btn_login' disabled={loading} type='submit'>Đăng nhập </Button>
                    <div>
                    <Link to="/Reset_password" className='register-text2'> Quên mật khẩu?</Link>
                    </div>
                </Form>
                <div>
                            <p className='register-text1'> Chưa có tài khoản? 
                            <Link to='/Signup' className='register-text2'> Đăng ký</Link></p>
                </div>       
        </div>
         );
    }
