'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
export default function MovingCards(){
    const data =[
        {
          "quote": "The only truth is music. Music is the truth of the universe. It is the sound of life itself, the heartbeat of existence. Through music, we find solace, understanding, and beauty beyond words.",
          "name": "Jack Kerouac",
          "title": "Writer"
        },
        {
          "quote": "Music is the shorthand of emotion. It is the language of the soul, expressing feelings too deep for words. In its melodies and harmonies, we find the echoes of our own joys and sorrows, hopes and fears.",
          "name": "Leo Tolstoy",
          "title": "Writer"
        },
        {
          "quote": "Music produces a kind of pleasure which human nature cannot do without. It is the essence of joy, the catalyst for happiness, and the bridge that connects us all. In its rhythms and melodies, we find our common humanity.",
          "name": "Confucius",
          "title": "Philosopher"
        },
        {
          "quote": "Music is a higher revelation than all wisdom and philosophy. It is the voice of the divine, speaking directly to the soul. In its transcendent beauty, we glimpse the mysteries of the cosmos and our place within it.",
          "name": "Ludwig van Beethoven",
          "title": "Composer"
        },
        {
          "quote": "Music is the divine way to tell beautiful, poetic things to the heart. It is the language of love, the song of the soul, and the melody of the universe. Through music, we find meaning in chaos and beauty in despair.",
          "name": "Pablo Casals",
          "title": "Cellist and Conductor"
        },
        {
          "quote": "To play a wrong note is insignificant; to play without passion is inexcusable. Music demands our utmost devotion, our deepest emotions, and our fullest expression. In its performance, we lay bare our souls for all to hear.",
          "name": "Ludwig van Beethoven",
          "title": "Composer"
        },
        {
          "quote": "Music is the universal language of mankind. It is the bond that unites us across cultures, continents, and centuries. In its melodies, we find the echoes of our shared humanity and the promise of a better world.",
          "name": "Henry Wadsworth Longfellow",
          "title": "Poet"
        },
        {
          "quote": "Without music, life would be a mistake. It is the soundtrack of our existence, the rhythm of our hearts, and the melody of our souls. In its absence, we would be adrift in a sea of silence, lost and alone.",
          "name": "Friedrich Nietzsche",
          "title": "Philosopher and Composer"
        },
        {
          "quote": "To stop the flow of music would be like the stopping of time itself, incredible and inconceivable. Music is the pulse of the universe, the heartbeat of creation, and the echo of eternity. In its ceaseless motion, we find the essence of life itself.",
          "name": "Aaron Copland",
          "title": "Composer"
        },
        {
          "quote": "Music can change the world because it can change people. It has the power to inspire, uplift, and transform us. In its melodies and lyrics, we find the courage to speak out, the strength to stand up, and the hope to carry on.",
          "name": "Bono",
          "title": "Musician and Philanthropist"
        }
      ]
      
    return(
        
        <div className="h-screen flex flex-col justify-center  items-center w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
            <h2 className="text-3xl mb-10">
                Hear our Harmony :Voices of Sucess
            </h2>
            <div className="h-[20rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
          items={data}
          direction="right"
           speed="slow"
           pauseOnHover={true}
           />
         </div>
        </div>
    )
}