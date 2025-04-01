import { useEffect } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { useCategory } from "./useCategory";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

const Category = ({ GetProduct, setFilteredProduct }) => {
  // const[categoryProduct, setCategoryProduct] = useState([]);
  const {categoryParams,setSearchParams, setCategoryProduct, setCatgLoading, setCatgError } = useCategory();

  const GetCategory = async (categoryValue) => {
    if (!categoryValue) return;
    setCatgLoading(true);
    setTimeout(async () => {
      try {
        let url = `https://dummyjson.com/products/category/${categoryValue}`;
        if (categoryValue === "AllProduct") {
          setFilteredProduct([])
          GetProduct();
          return;
        }
        let catg = await axios.get(url);
        setCategoryProduct(catg.data?.products);
      } catch (err) {
        setCatgError(`Error: ${err.message}`);
      } finally {
        setCatgLoading(false);
      }
    }, 1000);
  };
  const handleChange = (value) => {
    setFilteredProduct([])
    const selectedCategory = value;
    setSearchParams({ category: selectedCategory });
  };

  useEffect(() => {
    const debouncedCategory = debounce((value) => {
      GetCategory(value);
    }, 300);
    if (categoryParams) {
      debouncedCategory(categoryParams);
    }

    return () => debouncedCategory.cancel();
  }, [categoryParams]);

  return (
    <div>
      <div className="Category">
        <label>
          <DropdownMenuDemo handleChange={handleChange}/>
        </label>
      </div>
    </div>
  );
};

export default Category;


