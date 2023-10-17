import './App.css';
import Right from './Right';
import Side from './Sidebar';

const App=()=>{
  return<div class="">
    <div class="row">
      <div class='col-sm-3'>
        <Side/>
      </div>
      <div class='col-sm-9'>
        <Right/>
      </div>
    </div>
  </div>
}

export default App;
