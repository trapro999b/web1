import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from "react-bootstrap"
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from "../contexts/Auth"
export default function SignUpForm() { 
        const emailRef = useRef()      
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const [error, setError] = useState(' ')
        const [loading, setLoading] = useState(false)
        const {signup} = useAuth()
        const history = useHistory()
        async function handleSubmit(e) {
            e.preventDefault()

            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                    return setError('Mật khẩu không khớp')
                }
            try {
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                history.push('/')
            }
            catch {
                setError('Không tạo được tài khoản')
            }
            setLoading(false)
        }
        return ( 
        <>
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
                    <input  type="password"
                            placeholder="Nhập lại mật khẩu"
                            ref={passwordConfirmRef}
                            ></input>
                    <Button className='btn_login' type='submit' disabled={loading}>Đăng ký </Button>
                </Form>
                <div>
                            <p className='register-text1'> Đã có tài khoản? 
                            <Link to='/Login' className='register-text2'> Đăng nhập </Link> </p>
                </div>       
        </div>
        </>
         );
    }
