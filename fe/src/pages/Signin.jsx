
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import React,{ useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export function Signin() {

    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const Signin = (e) => {
        // todo: sign in
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert("Sign in successfull");
            // navigate('/')
        }).catch((error) => {
            console.log(error);
            alert("please check your email and password")
        })
    }


    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <div className="h-[70vh] w-10/12 border-2 border-black flex flex-col justify-evenly items-center">
                <Heading heading={"Sign In"} />
                <Input
                value={email} onChange = {(e) => setUsername(e.target.value)}
                username={"Email"} placeholder={"Email"} />
                <Input
                value={password} onChange = {(e) => setPassword(e.target.value)}
                username={"Pass=word"} type={"password"} />
                <Button onclick={Signin} />
            </div>
        </div>
    )
}
