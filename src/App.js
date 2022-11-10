import Pass from "./components/Pass";
import {lowercase, uppercase, number,symbols} from "./components/PassG"

function App() {
  return (
   <>
   <Pass lowercase={lowercase} uppercase={uppercase} number={number} symbols={symbols}/>
   </>
  );
}

export default App;