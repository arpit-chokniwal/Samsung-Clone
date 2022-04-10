
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollToTop } from './Component/ScrollToTop/ScrollToTop';
import { Rout } from './Component/HomePage/Routes/Rout';

function App() {
  return (
    <div className="App">
      <Rout/>
      <ScrollToTop />
    </div>
  );
}

export default App;
