import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [Catgloading, setCatgLoading] = useState(false);
    const [Catgerror, setCatgError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParams = searchParams.get("category") || "";
  
    return (
        <CategoryContext.Provider value={{ categoryParams,setSearchParams, categoryProduct, setCategoryProduct, Catgloading, setCatgLoading, Catgerror, setCatgError }}>
            {children}
        </CategoryContext.Provider>
    );
};
