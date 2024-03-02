
<<<<<<< HEAD

export function Button() {

    return (
        <div className="logout">
          <button className="bg-orange-500 px-6 py-2 rounded-xl text-white font-semibold">Logout</button>
        </div>
    )
=======
export function Button(e) {
    return <div>
        <button onClick={e.onclick} className="px-4 py-2 bg-slate-500 rounded-md text-white">Click me</button>
    </div>
>>>>>>> 7176336dd26ba283b2194d14e11d5873c9f9015b
}