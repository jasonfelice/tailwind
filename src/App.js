import './App.css';

function App() {
  return (
    <div className="App font-Poppins">
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1 flex items-center gap-3 text-xl"><img width={40} src="https://www.svgrepo.com/show/6972/pointer-advice.svg" alt="Logo" /> Lokate</div>
          <ul className="hidden sm:flex flex-1 justify-end item-center gap-12 text-app-blue uppercase text-xs">
            <li>Features</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
