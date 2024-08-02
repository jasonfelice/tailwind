import './App.css';

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
            <i class="text-2xl fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-app-blue text-3xl md:text-4 lg:text-5px text-center lg:text-left mb-6">
              Locate Fun Places Fast
            </h2>
            <p className="text-app-grey text-lg text-center lg:text-left mb-6">
            Discover local businesses and fun spots with ease. Our tool helps you find the best places around you quickly and effortlessly, wherever you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
