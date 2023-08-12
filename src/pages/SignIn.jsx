import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email);
                localStorage.setItem('user', JSON.stringify(user))
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });

        setEmail('')
        setPassword('')

    }

    return (
        <>
            <h1>SignIn</h1>
            <form action="" onSubmit={submitHandler}>
                <label>Email</label>
                <input type="email" placeholder='' onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default SignIn