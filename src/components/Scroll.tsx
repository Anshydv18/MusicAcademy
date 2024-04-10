'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"
export default function Scroll(){
    const data =[
        {
          "title": "Für Elise",
          "description": "Für Elise is one of Ludwig van Beethoven's most famous compositions for the piano. It was likely composed around 1810 and was not published until after Beethoven's death in 1827. The piece is known for its simple yet charming melody and is a popular choice for piano students and performers worldwide."
        },
        {
          "title": "Symphony No. 9",
          "description": "Symphony No. 9 in D minor, Op. 125, also known as the 'Choral' Symphony, is one of Ludwig van Beethoven's most celebrated works. Completed in 1824, it is one of the first examples of a symphony incorporating vocal soloists and chorus in the final movement. The symphony's final movement features the famous 'Ode to Joy' theme, setting Friedrich Schiller's poem to music."
        },
        {
          "title": "Piano Concerto No. 5",
          "description": "Piano Concerto No. 5 in E-flat major, Op. 73, also known as the 'Emperor' Concerto, is one of Ludwig van Beethoven's most well-known piano concertos. Completed in 1811, it was premiered by Beethoven himself as the soloist. The concerto is characterized by its grandeur, virtuosity, and innovative approach to the piano concerto genre."
        },
        {
          "title": "Symphony No. 6",
          "description": "Symphony No. 6 in F major, Op. 68, also known as the 'Pastoral' Symphony, is one of Ludwig van Beethoven's symphonic masterpieces. Completed in 1808, it is a programmatic work depicting scenes of countryside life. The symphony consists of five movements, each portraying different aspects of nature, such as a joyful gathering of villagers and a thunderstorm."
        },
        {
          "title": "Symphony No. 7",
          "description": "Symphony No. 7 in A major, Op. 92, is one of Ludwig van Beethoven's most exuberant and energetic symphonies. Completed in 1812, it is known for its rhythmic vitality and powerful orchestration. The symphony's second movement, Allegretto, is particularly famous and has been used in various films, television shows, and other media."
        }
      ]
      
    return(
       <div
       className="w-full"
       >
        <StickyScroll content={data} />
       </div>
    )
}