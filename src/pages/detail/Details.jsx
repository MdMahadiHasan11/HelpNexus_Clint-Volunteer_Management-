import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();
    console.log(id);

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data);

            })
    }, [id])



    return (
        <div>
            products={products.Title}

        </div>
    );
};

export default Details;