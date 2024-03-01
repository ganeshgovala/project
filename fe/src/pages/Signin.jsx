
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { useState } from 'react'

export function Signin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    console.log(username)

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <div className="h-[70vh] w-10/12 border-2 border-black flex flex-col justify-evenly items-center">
                <Heading heading={"Sign In"} />
                <Input
                onChange = {(e) => setUsername(e.target.value)}
                username={"Username"} placeholder={"Email"} />
                <Input
                onChange = {(e) => setPassword(e.target.value)}
                username={"Password"} type={"password"} />
                <Button />
            </div>
        </div>
    )
}