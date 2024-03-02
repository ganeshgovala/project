import { Button } from "./Button"


export function Navbar() {
    <>
        <div className="p-5">
      <div className="h-[95vh] rounded-3xl bg-[#1b1a55] w-[15vw] flex justify-around flex-col items-center">
        <div>
          <h1 className="text-4xl text-center text-semibold p-5 text-white">VLink</h1>
          <div className="h-44 w-44 rounded-3xl bg-[#9493ec18] mt-8 flex flex-col items-center justify-evenly">
            <img className='h-14' src=".\src\assets\react.svg" alt="" />
            <div>
              <h2 className="text-white text-center font-semibold">Student 1</h2>
              <p className="text-white">23PA1A0505</p>
            </div>
          </div>
        </div>
        <div>
            <Button />
        </div>
        
      </div>
    </div>
    </>
}