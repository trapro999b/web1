import React, { useRef, useState } from 'react'
import { Form, Button,Alert } from "react-bootstrap"
import {useAuth} from "../contexts/Auth"
import {Link} from 'react-router-dom'
export default function ResetPass() { 
        const emailRef = useRef()      
        const [error, setError] = useState(' ')
        const [message, setMessage] = useState(' ')
        const [loading, setLoading] = useState(false)
        const {resetPassword} = useAuth()
        async function handleResetPass(e) {
            e.preventDefault()
            try {
                    setError('')
                    await resetPassword(emailRef.current.value)
                    setMessage('Check your inbox')
            } catch {
                    setError('Failed to reset password')
            }
        }
        return ( 
        <div className='login'>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form className='form' onSubmit={handleResetPass}>
                    
                    <input  type="text"
                            placeholder="Email"
                            ref={emailRef} 
                            ></input>
                    <Button className='btn_login' disabled={loading} type='submit'> Reset </Button>
                </Form>
                <div>
                    <Link to='/Login' className='register-text2'> Quay trở lại đăng nhập</Link>
                </div>       
        </div>
         );
    }
