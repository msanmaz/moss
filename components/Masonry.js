import FeaturesGallery from './FeaturesAbout';


function Masonry() {
  return (
    <>
    <section className="my-16 flex justify-between ">
      <div className="mx-2 w-5/12">
        <img class="w-full cursor-pointer rounded-lg transform transition duration-500 hover:scale-110 shadow-2xl" src="/attilahomes.png" alt="Mountain" />
        <header>
          <h3 className="h4 font-red-hat-display my-4">
            <a href="#0">Launched Appy Business</a>
          </h3>
        </header>
        <div className="text-gray-600 dark:text-gray-400 flex-grow">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
          <span>Learn more</span>
          <svg className="w-3 h-3 flex-shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
          </svg>
        </a>
      </div>


      <div className="mx-2 w-5/12">
        <img class="w-full cursor-pointer rounded-lg transform transition duration-500 hover:scale-110 shadow-2xl" src="/jospa.png" alt="Mountain" />
        <header>
                      <h3 className="h4 font-red-hat-display my-4">
                        <a href="#0">Launched Appy Business</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 flex-grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 flex-shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
      </div>

    </section>
          <FeaturesGallery/>
</>

  )
}


export default Masonry