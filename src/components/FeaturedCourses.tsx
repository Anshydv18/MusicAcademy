'use client'
import Link from 'next/link'
import data from '../data/music-courses.json'
import { BackgroundGradient } from './ui/background-gradient';

// here is a concept of typeScript
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
} 
export default function FeaturedCourses(){

   const courses = data.courses.filter((course:Course)=> course.isFeatured)

    return(
        <div className="py-12 bg-gray-900 w-full h-[110vh]">
            <div
            className='text-center'
            >
                <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
                <p className=' text-3xl font-extrabold tracking-wide text-white sm:text-4xl'>Learn with Best</p>
            </div>

            <div
            className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 justify-center mt-10'
            >
            {
              courses.map((course:Course)=>(
                <div className='flex justify-center items-center'>
                    <BackgroundGradient
                    className='flex flex-col rounded-3xl dark:bg-zinc-950 overflow-hidden h-full max-w-sm'
                    >
                      <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>

                        <p
                        className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200' 
                        >{course.title}</p>
                        <p
                        className=' text-sm text-black mt-4 mb-2 dark:text-neutral-200'
                        >{course.description}</p>

                        <Link href={`/courses/${course.slug}`}
                        className='border py-2 px-4 bg-white text-black rounded-xl mt-5'
                        >
                            Learn More
                        </Link>
                      </div>
                    </BackgroundGradient>
                </div>
              ))  
            }
            </div>
            <div className=' mt-16 text-center'>
                <Link href={"/button"}
                className='bg-white px-4 py-2 rounded-lg hover:bg-gray-300 text-black'
                >
                    View All courses
                </Link>
            </div>
        </div>
    )
}
