import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"
export default function HoverSection(){
    const data =[
        {
          "title": "Introduction to Music Theory",
          "description": "Join us for an introductory webinar on music theory essentials. Learn about notes, scales, chords, and basic harmony to build a solid foundation for your musical journey.",
          "link": "https://example.com/intro-music-theory"
        },
        {
          "title": "Mastering Piano Techniques",
          "description": "Enhance your piano skills with this webinar series. Explore advanced techniques such as arpeggios, trills, and pedal techniques, and take your playing to the next level.",
          "link": "https://example.com/mastering-piano-techniques"
        },
        {
          "title": "Songwriting Workshop",
          "description": "Unlock your creativity with this interactive songwriting workshop. Discover tips, tricks, and exercises to overcome writer's block and craft compelling songs that resonate with your audience.",
          "link": "https://example.com/songwriting-workshop"
        },
        {
          "title": "Introduction to Music Production Software",
          "description": "Learn the basics of music production software in this hands-on webinar. Explore popular DAWs (Digital Audio Workstations) and get started on producing your own music tracks.",
          "link": "https://example.com/music-production-software"
        },
        {
          "title": "Exploring World Music Traditions",
          "description": "Dive into the diverse world of music traditions in this fascinating webinar series. Discover the rich cultural heritage of different regions through their unique musical expressions.",
          "link": "https://example.com/world-music-traditions"
        },
        {
          "title": "Career Opportunities in the Music Industry",
          "description": "Explore various career paths in the music industry in this informative webinar. Learn about roles in performance, production, education, and more, and gain insights into building a successful career in music.",
          "link": "https://example.com/music-career-opportunities"
        }
      ]
      
    return(
        <div className="w-full h-[120vh] mt-10">
            <div
            className='text-center mt-10'
            >
                <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED WEBINARS</h2>
                <p className=' text-3xl font-extrabold tracking-wide text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={data} />
            </div>
            <div className=' mt-5 text-center'>
                <Link href={"/button"}
                className='bg-white px-4 py-2 rounded-lg hover:bg-gray-300 text-black'
                >
                    View All webinars
                </Link>
            </div>
        </div>
    )
}