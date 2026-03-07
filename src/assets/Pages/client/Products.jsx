import SingleProduct from "../../components/SingleCard";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import "../../css/products.css"
import { useSelector } from "react-redux";
import { DotLoader } from "react-spinners";

const Products = () => {
    // const [products, setProducts] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const product = useSelector(p => p.product);
    const category = useSelector(p => p.category);

    // useEffect(() => {

    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get("https://dummyjson.com/products/category/groceries");
    //             setProducts(response.data.products);
    //             setFilteredData(response.data.products);
    //         } catch (error) {
    //             console.error("Məlumat alınarkən xəta baş verdi:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts();
    // }, []);


    const handleFilter = (categoryName) => {
        if (categoryName === "All") {
            setFilteredData(product);
        } else {
            const result = product.filter((item) => item.category === categoryName);
            setFilteredData(result);
        }
    };

    // if (loading) return <div className="loader-container">
    //     <DotLoader color="#15803D" size={60} />
    // </div>;

    return (
        <>


            <div className="container mt-4">
                <div className="col d-flex ">


                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h4 className="ms-4">Product categories</h4>
                            <ul className="mt-3 ">
                                {category.map(item => (
                                    <li
                                        key={item.id}
                                        className="list-group-item list-group-item-action mt-1"
                                        style={{ cursor: "pointer", fontFamily: "sans-serif",fontSize:"20px" }}
                                        onClick={() => handleFilter(item)}
                                    > <input type="checkbox" /> {item.category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="d-flex flex-column gap-5">
                        <div className="d-flex justify-content-end" id="sorting-tab">

                            <p>Showing 1-16 of 48 results</p>
                            <div className="d-flex align-items-center">
                                <div className="d-flex gap-3">
                                    <div className="grid">
                                        <IoGridOutline />
                                    </div>
                                    <div className="list-view">
                                        <CiBoxList />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 p-4">
                                    <div className="default-sorting"> Default Sorting <FiChevronDown /></div>
                                    <div className="items">16 Items <FiChevronDown /> </div>
                                </div>
                            </div>



                        </div>

                        {/* My cards */}
                        <div className="col-md-12 mx-5">
                            <div className="row g-4 d-flex gap-5 ms-4">
                                {product && product.length > 0 ? (
                                    product.map(item => (
                                        <SingleProduct key={item.id} items={item} />
                                    ))
                                ) : (
                                    <div className="loader-container">
                                        <DotLoader color="#15803D" size={60} />
                                    </div>
                                )}
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Products;