
import './App.css';
import { createContext } from 'react';
import ComA from './ComA';

const ContextApi = createContext();
const LastName = createContext();

const App =()=>{

  return (<>
  <ContextApi.Provider value={'Marko_g'}>
    <h1>Context_Api Example</h1>
    <LastName.Provider value={'React Code'}>
    <ComA/>
    </LastName.Provider>
    </ContextApi.Provider>
    </>
  )
}
export default App;
export {ContextApi ,LastName}
