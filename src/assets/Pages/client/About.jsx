import { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleCard";
import axios from "axios";
import { MoonLoader } from "react-spinners";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products/category/groceries");
                setProducts(response.data.products);
                setFilteredData(response.data.products);
            } catch (error) {
                console.error("Məlumat alınarkən xəta baş verdi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = ["All", "Bakery", "Baverages", "Dairy & Eggs", "Deli", "Frozen Foods", "Frutis & Vegetables", "Healthcare", "Meat & Seafood", "Snacks"];

    const handleFilter = (categoryName) => {
        if (categoryName === "All") {
            setFilteredData(products);
        } else {
            const result = products.filter((item) => item.category === categoryName);
            setFilteredData(result);
        }
    };

    if (loading) return <div className="text-center mt-5 container d-flex justify-content-center"><MoonLoader
        color="#65a30d"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={1}
    /></div>;

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h4 className="ms-4">Product categories</h4>
                            <ul className="mt-3 ">
                                {categories.map((item, index) => (
                                    <li
                                        key={index}
                                        className="list-group-item list-group-item-action mt-1"
                                        style={{ cursor: "pointer", fontFamily: "sans-serif" }}
                                        onClick={() => handleFilter(item)}
                                    > <input type="checkbox" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* My cards */}
                    <div className="col-md-9">
                        <div className="row g-4">
                            {filteredData.map((item) => (
                                <SingleProduct
                                    key={item.id}
                                    price={item.price}
                                    title={item.title}
                                    image={item.thumbnail}
                                    rate={item.rating?.rate}
                                    category={item.category}
                                    des={item.description}
                                />
                            ))}
                        </div>

                        {filteredData.length === 0 && (
                            <div className="text-center mt-5">Bu kateqoriyada məhsul yoxdur.</div>
                        )}

                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Products;