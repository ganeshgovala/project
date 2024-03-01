import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function Signup() {

    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")   

    console.log(firstname)
    console.log(secondname)
    console.log(email)
    console.log(password)

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <div className="h-[80vh] max-h-[800px] w-10/12 border-2 border-black flex flex-col justify-evenly items-center">
                <Heading heading={"Sign Up"} />
                <Input
                onChange={(e)=> setFirstname(e.target.value)}
                username={"First Name"} placeholder={"David"} />
                <Input
                onChange = {(e) => setSecondname(e.target.value)}
                username={"Second Name"} placeholder={"John"} />
                <Input
                onChange = {(e) => setEmail(e.target.value)}
                username={"Email"} type={"email"} placeholder={"xyz@email.com"} />
                <Input
                onChange = {(e) => setPassword(e.target.value)}
                username={"Password"} type={"password"} />
                <Button />
            </div>
        </div>
    )
}