import { createContext, useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [products, setproducts] = useState({})
    const getProducts = async(url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_PRODUCTS_DATA", payload: products });
        } catch (error) {
            dispatch({type:"PRODUCTS_ERROR"});
        }
    };

    //Data for SingleProduct

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLEPRODUCT", payload: singleProduct});
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        const getProducts = async(req, res) => {
            try{

                const response = await axios.get("http://localhost:3001/products")   
                .then((res) => {
                    setproducts(res.data)
                })
            }
            catch(e){
                console.log("Couldn't fetch products")
            }
        };
        getProducts();
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
};

//custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext};