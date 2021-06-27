import './App.css';

import { BSdropdown, BSModal } from './bootstrap';
import Grid from './Grid';
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
      <Grid direction="row" alignItems="center" justify="center" container space={4}>
        <Grid md={5} />
      </Grid>
    </div>
  );
}

export default App;
