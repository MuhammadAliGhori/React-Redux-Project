import "./App.css";
import Todo from './components/Todo';
import {Provider} from 'react-redux';
import store from "./components/store";
function App() {

  return (
   <div>
    <Provider store={store}>
    <Todo />
    </Provider>
   </div>
  );
}

export default App;
