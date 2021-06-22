import './App.css';

import { BSdropdown, BSModal } from './bootstrap';
import RSelect from './Select/index';

function App() {
  return (
    <div className="container">
      {/* <BSvmodal/> */}
      <div className="row gy-3 h-100">
        <div>
          <BSModal />
        </div>
        <BSdropdown />

        <RSelect />
      </div>
    </div>
  );
}

export default App;
