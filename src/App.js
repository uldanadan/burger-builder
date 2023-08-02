import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";
import { getIngredients } from "./store/ingredients.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AddIngredient from "./containers/AddIngredient/AddIngredient";
import Ingredients from "./containers/Ingredients/Ingredients";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIngredients())
  }, [])
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<BurgerBuilder/>} />
                <Route path='/checkout' element={<Checkout />}>
                    <Route path='contact-data' element={<ContactData />} />
                </Route>
                <Route path={'/orders'} element={<Orders />} />
                <Route path={'/add-ingredient'} element={<AddIngredient />} />
                <Route path={'/ingredients'} element={<Ingredients />} />
                <Route path='*' element={<div>NOT FOUND</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
