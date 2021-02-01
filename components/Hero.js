import React from 'react';
import FeaturesAnimation from '../components/FeaturesAnimation'

function HeroHome() {


  return (
    <section>

      <div className=" max-w-full mx-auto px-4 sm:px-6" >

        <div className="pt-24  md:pt-2 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-6 lg:col-span-6 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold dark:text-white">Hi there,I'm Mert<br/> Front-End<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-500"> Developer </span>Student</h1>
              <p className="text-xl text-gray-600 dark:text-white" data-aos="fade-down" data-aos-delay="150">I'm a 25-year-old student at Griffith College currently studying Computer Science</p>

              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>
            

            {/* Mobile mockup */}
            <div className="md:col-span-6 lg:col-span-6" >
              <FeaturesAnimation/>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;