import React, { useState, useEffect } from 'react';

function CategoryInDb() {
    const [categorys, setCategorys] = useState({});

    useEffect(() => {
        (async function() {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                console.log(data);
                setCategorys(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const categorysArray = categorys.countByCategory || [];

    // Mapeo de categorías
    const categoryMapping = {
        sale: "En oferta",
        lastAdd: "Último agregado",
    };

    return (
        <React.Fragment>
            {/* Categories in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {categorysArray.map((category, index) => (
                                <div key={index} className="col-lg-6 mb-4">
                                    {Object.keys(category).map((key, i) => (
                                        <div className="card bg-dark text-white shadow" key={i}>
                                            <div className="card-body">
                                                {`${categoryMapping[key]}: ${category[key]}`}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CategoryInDb;
