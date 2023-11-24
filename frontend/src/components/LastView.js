import React from 'react';
import LastProductUser from './LastProductUSer';
import { useState, useEffect } from 'react';

/*  Cada set de datos es un objeto literal */

function LastView(){

    let [products, setProducts] = useState({})
    let [users, setUsers] = useState({})

    useEffect(() => {
        (
            async function(){
                try {
                    let response = await fetch('/api/products');
                    let data = await response.json();
                    console.log(data);
                    setProducts(data)
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);
    

    useEffect(() => {
        (
            async function(){
                try {
                    let response = await fetch('/api/users');
                    let data = await response.json();
                    console.log(data);
                    setUsers(data)
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);

/* <!-- totals in db --> */

///////////// PRODUCTOS /////////////

let product = {
    grantitle:"ULTIMO PRODUCTO",
    title: `Nombre: ${products.data ? products.data[products.data.length - 1].name : ''}`,
    description:  `Descripcion: ${products.data ? products.data[products.data.length - 1].description : ''}`,
    urlImage: products.data ? products.data[products.data.length - 1].urlImage : ''
}

console.log(product);

///////////// USUARIOS /////////////

let user = {
    grantitle:"ULTIMO USUARIO",
    title: `Nombre: ${users.data ? users.data[users.data.length - 1].first_name : ''}`, 
    description: `Email: ${users.data ? users.data[users.data.length - 1].email : ''}`,
    urlImage: users.data ? users.data[users.data.length - 1].urlImage : ''
}

/* <!-- totals in db --> */

let newDate = [product, user];

    return (
    
        <div className="row">
            
            {newDate.map( (movie, i) => {
            return <LastProductUser {...movie} key={i}/>
     
            })}

        </div>
    )
}

export default LastView;