import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
  // useSelector to access State from the redux store
  // takes argument of the state
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // useDispatch to dispath an action

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

    // after getting data from the server
    // dispatch action to update the redux store
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
