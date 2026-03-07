import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from "./Router.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/reset.css";
import { CartProvider } from 'react-use-cart';
import configureStore from './tools/store/configureStore.js';
import { Provider } from 'react-redux';
import { getProductAction, productAddAction } from './tools/actions/productActions.js';
import supabase from './utils/supabase.js';
import { getCategoryAction } from './tools/actions/categoryActions.js';


const mystore = configureStore();

mystore.subscribe(() => {
  console.log(mystore.getState());
})

const fetchData = async () => {
  const { data, error } = await supabase.from('product').select();
  if (error) {
    console.log(error);
  } else {
    mystore.dispatch(getProductAction(data))
  }
}

fetchData();


const fetchDataCategory = async () => {
  const { data, error } = await supabase.from('category').select();
  if (error) {
    console.log(error);
  } else {
    mystore.dispatch(getCategoryAction(data))
  }
}

fetchDataCategory();



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={mystore}>
      <CartProvider>

        <Router />

      </CartProvider>
    </Provider>
  </StrictMode>
)
