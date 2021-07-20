import './App.css';
import InfoBoxes from './InfoBoxes';
import countryData from "./data/countryData.json";
import worldwideStats from "./data/worldwideStats.json";
import casesTimeline from "./data/casesTimeline.json";
import RecoveredGraph from "./RecoveredGraph.js";
import Footer from './Footer';
import Header from './Header';
import Modal from 'react-modal';

Modal.setAppElement('#root')
function App() {

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (    
    <div className='app'>
      <div className="header"><Header countries={countryData}/></div>

      <div className="siteData">
    
        <div className='column1'>

          <div className='infoBoxes'>
            <InfoBoxes 
              lastUpdatedTime = {time}
              total = {worldwideStats.cases}
              dTotal = {worldwideStats.todayCases}
              active = {worldwideStats.active}
              recovered = {worldwideStats.recovered}
              dRecovered = {worldwideStats.todayRecovered}
              deaths = {worldwideStats.deaths}
              dDeaths = {worldwideStats.todayDeaths}
            />
          </div>

        </div>

        <div className='column2'>
          <h3 className='trends'>Trends:</h3>
            <div className='recoveredGraph'>
              <RecoveredGraph data={casesTimeline} height={600} width={600} options={{ maintainAspectRatio: false }} />
            </div>
          
        </div>
      
      </div>

      <div className='footer'><Footer /></div>
    </div>
  );
}

export default App;
