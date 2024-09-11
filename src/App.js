import './App.css';
import hero from './assets/hero.svg';

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente totam corporis non, voluptatem inventore labore! Enim sit maiores quibusdam!
          </p>
        </div>
        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={hero} alt="Hero" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-app-blue">First</h1>
              <p className="text-app-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eius, adipisci animi autem beatae saepe   ducimus similique provident odio iusto?
              </p>
              <button type="button" className="btn btn-green flex items-center gap-3 hover:bg-app-white hover:text-black">
                <p>Get it on Playstore</p>
                <i className="fa-brands fa-google-play text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
