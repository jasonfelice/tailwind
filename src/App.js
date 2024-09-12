import './App.css';
import hero from './assets/hero.svg';
import feat1 from './assets/feat1.svg';
import feat2 from './assets/feat2.svg';
import feat3 from './assets/feat3.svg';

function App() {
  return (
    <div className="App font-Poppins">
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1 flex items-center gap-3 text-xl"><img width={40} src="https://www.svgrepo.com/show/513321/map.svg" alt="Logo" /> Lokate</div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-app-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <li>
              <button type="button" className="bg-app-red text-white rounded-md px-7 py-3 uppercase">Login</button>
            </li>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end ">
            <i className="text-2xl fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-app-blue text-3xl md:text-4 lg:text-5px text-center lg:text-left mb-6">
              Locate Fun Places Fast
            </h2>
            <p className="text-app-grey text-lg text-center lg:text-left mb-6">
            Discover local businesses and fun spots with ease. Our tool helps you find the best places around you quickly and effortlessly, wherever you are.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-blue flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Get it on Appstore</p>
                <i className="fab fa-app-store text-2xl"></i>
              </button>
              <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Get it on Playstore</p>
                <i className="fa-brands fa-google-play text-2xl"></i>
              </button>
            </div>
          </div>
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={hero} alt="Hero" />
            </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden md:block overflow-hidden bg-app-red rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28" />
      </section>
      {/* Features section */}
      <section className="bg-app-white py-20 mt-20 lg:mt60">
        {/* Heading */}
        <div classNmae="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-app-blue">Features</h1>
          <p className="text-center text-app-grey mt-4">
            Discover the best of your community with ease using our tool. Explore unique features designed to enhance your local adventures:
          </p>
        </div>
        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={feat1} alt="Hero" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-app-blue">Spotlight Stories</h1>
              <p className="text-app-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Enjoy exclusive insights and behind-the-scenes looks at your favorite local spots.
              </p>
              <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Learn More</p>
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-app-blue rounded-r-full absolute h-80 w-2/4 left-0 bottom-26" />
          </div>
        </div>
          {/* Feature #2 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={feat2} alt="Hero" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-app-blue">Live Local Events Calendar</h1>
              <p className="text-app-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Find and filter upcoming events to keep your social calendar full.
              </p>
              <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Learn More</p>
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-app-green rounded-l-full absolute h-80 w-2/4 right-0 bottom-26" />
          </div>
        </div>
         {/* Feature #3 */}
         <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={feat3} alt="Hero" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-app-blue">Customized Discovery Map</h1>
              <p className="text-app-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Save and organize your favorite places, and share your personalized map with friends.
              </p>
              <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Learn More</p>
              </button>
            </div>
            {/* Rounded Rectangle */}
            <div className="hidden lg:block overflow-hidden bg-app-red rounded-r-full absolute h-80 w-2/4 left-0 bottom-26" />
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section className="py-20 mt-20">
        {/* Heading */}
        <div classNmae="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-app-blue">Download the app</h1>
          <p className="text-center text-app-grey mt-4">
            Discover the best of your community with ease using our tool. Explore unique features designed to enhance your local adventures:
          </p>
        </div>
        {/* Cards */}
        <div className="container grid grid-col-1 mg:grid-col-2 lg:grid-col-3 gap-16 max-w-screen-lg mt-16">
          {/* Card 1 */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="" />
              <h3 className="mt-5 mb-2 text-app-blue text-lg">Add to Chrome</h3>
              <p className="mb-2 text-app-grey font-light"></p>
            </div>
            <hr className="border-b border-app-white" />
            <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
              Add to Chrome
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
