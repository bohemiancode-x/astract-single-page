import './App.css';
import FilterBar from './components/FilterBar';
import Map from './components/Map';
import Statistics from './components/Statistics';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="h-full relative font-jost px-3 md:px-8 text-white bg-bgColor">
      <FilterBar />
      <span className='border-[#393c4a] border-[0.5px] opacity-50 w-full flex my-4'></span>
      <Map />
      <Statistics />
    </div>
  );
}

export default App;
