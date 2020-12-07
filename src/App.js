import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import OrderFrom from "./components/OrderFrom"
import UserOrder from './components/UserOrder'
import OrderedItems from './components/OrderedItems'



function App() {
  return (
    <div className="App">
      <OrderFrom/>
        <div className="container-fluid-sm container-md ">
          <div className="row">
            <div className=" col-md-4 mt-5">  
              <UserOrder/>
            </div>
            <div className=" col-md-8 mt-5 ">
              <OrderedItems/>
            </div>
          </div>
        </div>
    </div>
  );
}
// 3. Explain how your code would change if the order that has more items (say 7 items)?
// It would dynamically change the total amount of order,tax,total bil and outputs the required value
export default App;
