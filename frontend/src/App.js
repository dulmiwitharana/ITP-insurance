import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import Addtourists from './components/Addtourists';
import Insurancefirst from './components/Insurancefirst';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Displaytourist from './components/Displaytourist';
import Updatetourist from './components/Updatetourist';
import PricingCard from './components/PricingCard';
import Calculation from './components/Calculation';
import InsuranceManager from './components/InsuranceManager';

function App() {
  return (
    
      <Router>
        
        <div>
          <Header/>
          <Routes>
          <Route path='/first' element={<Insurancefirst/>}/>
          <Route path='/add' element={<Addtourists />} />
          <Route path='/dis' element={<Displaytourist/>}/>
          <Route path='/update/:id' element={<Updatetourist/>}/>
          <Route path='/pricing' element={<PricingCard />} />
          <Route path='/cal' element={<Calculation />} />
          <Route path='/admin' element={<InsuranceManager />} />
          </Routes>
         
        </div>
        
        
      </Router>
    
     
      
  );
}

export default App;
