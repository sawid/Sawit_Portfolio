import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { BeakerIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto">
          <div className="sm:text-center text-center">
            <h2 className="text-2xl font-semibold tracking-wide leading-8 text-sky-700 font-['Montserrat']">Full - Stack Developer</h2>
            <div className="mt-5">
              <div>
                <p className="mt-1 font-bold tracking-wide text-slate-50 text-6xl text">SAWIT</p>
              </div>
              <div>
                <p className="mt-1 font-bold tracking-wide text-slate-50 text-4xl text">LIMKIATSATAPORN</p>
              </div>
            </div>
            <div className='my-8 mx-auto flex w-64 content-start'>
              <Link href="https://www.facebook.com/folksawit/">
                <div className='border rounded-xl ml-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-16 h-8 my-4"><path fill="#FFFFFF" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/sawit-limkiatsataporn-135098248/">
                <div className='border rounded-xl ml-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-16 h-8 my-4"><path fill="#FFFFFF" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                </div>
              </Link>
              <Link href="https://github.com/sawid">
                <div className='border rounded-xl ml-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-16 h-8 my-4"><path fill="#FFFFFF" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                </div>
              </Link>
            </div>
            <div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </div>
        </div>
      </div>
      <div className="h-screen bg-white">
        <div className="container mx-auto">
          <div className="sm:text-center text-center">
            <h2 className="text-4xl py-16 font-semibold tracking-widest leading-8 text-neutral-900 font-['Montserrat']">MY WORKS</h2>
          </div>
          <div className='my-8 mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-5'>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">IN PROGRESS</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">AMSA-THAILAND WEBSITE TEAM</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">Working as a back-end developer for the Asian Medical Students' Association of Thailand's Website Team. </p>
            </div>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">IN PROGRESS</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">COFFEE CASHIER SYSTEM</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">This is my personal project to create a point of sale system in a coffee shop. </p>
              <Link href="https://github.com/sawid/LaiCoffeeCashier"><p className="mt-1 font-light tracking-wide text-neutral-400 text-md font-['Prompt']">See more on My Github </p></Link>
            </div>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">COMPLETED</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">MEDWARE</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">This is my project with a computer engineering student team to create a booking system in a hospital. </p>
              <Link href="https://github.com/sawid/medicare_backend_springboot"><p className="mt-1 font-light tracking-wide text-neutral-400 text-md font-['Prompt']">See more on My Github </p></Link>
            </div>
          </div>
          <div className='my-8 mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-5'>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">COMPLTETED</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">DORMITARY MANAGEMENT SYSTEM</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">This is my academic project with a team to create a dormitory management system. </p>
              <Link href="https://github.com/sawid/dorm_management"><p className="mt-1 font-light tracking-wide text-neutral-400 text-md font-['Prompt']">See more on My Github </p></Link>
            </div>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">COMPLTETED</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">TAFANG BOOK STORE</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">This is my project to create a book store on website of book store. </p>
              <Link href="https://github.com/sawid/TaFang_BookStore"><p className="mt-1 font-light tracking-wide text-neutral-400 text-md font-['Prompt']">See more on My Github </p></Link>
            </div>
            <div className='rounded-xl bg-slate-50 py-6 px-3 mx-2'>
              <h2 className="text-sm font-light tracking-widest leading-8 text-neutral-500 font-['Prompt']">COMPLTETED</h2>
              <h2 className="text-2xl font-medium tracking-widest leading-8 text-neutral-900 font-['Prompt']">YOUTUBE TRENDING ANALYSIS</h2>
              <p className="mt-1 font-semimedium tracking-wide text-neutral-400 text-xl font-['Prompt']">This is my project to create a YouTube video recommendation system based on the user's behavior. </p>
              <Link href="https://github.com/sawid/Linear_Project_Web_Application"><p className="mt-1 font-light tracking-wide text-neutral-400 text-md font-['Prompt']">See more on My Github </p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}