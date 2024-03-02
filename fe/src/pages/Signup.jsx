import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import React,{ useState } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDocs, addDoc, collection, where, query} from "firebase/firestore"

export function Signup() {

    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [metch, setmetch] = useState([])   

    const dbref = collection(db, "Users")

    const Signup = async (e) => {
        // todo: sign in
        e.preventDefault();
        const matchEmail = query(dbref, where('Email', '==', email))
        try {
            const snapshot = await getDocs(matchEmail)
            const emailMatchingArray = snapshot.docs.map((doc) => doc.data())
            if (emailMatchingArray.length > 0) {
                alert("This Email Address Already exsists")
            } else {
                await addDoc(dbref, {Firstname: firstname, Secondname: secondname, Email: email, Password: password})
            }
        } catch (error) {
            alert(error)
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(userCredential);
            alert("signup successfull");     
        }).catch((error) => {
            console.log(error);
            alert("user is already existed")
        })
    }

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
                username={"email"} type={"email"} placeholder={"xyz@email.com"} />
                <Input
                onChange = {(e) => setPassword(e.target.value)}
                username={"Password"} type={"password"} />
                <Button onclick={Signup}/>
            </div>
        </div>
    )
}
