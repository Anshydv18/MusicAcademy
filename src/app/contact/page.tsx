
import { Meteors } from '@/components/ui/meteors'
export default function page(){
    return(
        <div
        className="h-screen w-full bg-black py-12 pt-36"
        >
            <h1
            className='text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white'
            >Contact Us</h1>
            <div className='w-full flex  justify-center items-center'>
                <form 
                className='flex flex-col justify-center items-center space-y-10 border px-10 py-5 rounded-lg bg-slate-900'
                >
                    <div
                    >
                        <input type="email" name="" id=""
                        placeholder='enter your email'
                        className='px-4 py-2 rounded-xl'
                         />
                    </div>
                    <div>
                        <input type="text" name="" id=""
                        placeholder='input your query'
                        className='px-4 py-2 rounded-xl'
                         />
                    </div>
                    <button className='bg-gray-200 px-3 py-1 rounded-md text-bold '>Submit</button>
                </form>
            </div>
            <Meteors number={200} />
        </div>
    )
}