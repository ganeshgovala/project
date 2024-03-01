

export function Input({username, placeholder, type, onChange}) {
    return <div className="flex flex-col items-center w-[80%]">
        <label htmlFor={username} className="text-xl font-semibold mx-auto pb-2">{username}</label>
        <input onChange={onChange} className="border-2 border-black p-1 rounded-md text-black w-[100%]" placeholder={placeholder} id={username} type={type}></input>
    </div>
}