import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { decrease, increase } from './store/slices/ecommerceSlice';

function App() {
  const state = useSelector(state=>state)
  console.log(state)
  const dispatch = useDispatch()
  
  const handleIncrease = ()=>{
    dispatch(increase())
  }
  const handleDecrease = ()=>{
    dispatch(decrease())
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg  w-25 bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E Commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page text-white">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page text-white">Basket {state.ecommerce.basket}</a>
        </li>
    </ul>
    </div>
  </div>
</nav>
<main>
<div class="card" style={{width: "18rem"}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">delicious strawberries</p>
     <p> Price: 1.49 </p>
     <p>Total price: {state.ecommerce.price}</p>
  </div>
  <div>
    <button onClick={handleDecrease} className='m-4'>-</button>
   
    {state.ecommerce.basket}

    <button onClick={handleIncrease} className='m-4'>+</button>
  </div>
</div>
</main>
    
    </div>
  );
}

export default App;
