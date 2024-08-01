import './App.css';

function App() {
  return (
    <div className="App font-Poppins">
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1 flex items-center gap-3 text-xl"><img width={40} src="https://www.svgrepo.com/show/6972/pointer-advice.svg" alt="Logo" /> Lokate</div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-app-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <li>
              <button type="button" className="bg-app-red text-white rounded-md px-7 py-3 uppercase">Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
