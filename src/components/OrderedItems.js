


import React, { useState, useEffect } from 'react';
const url = 'https://indapi.kumba.io/webdev/assignment';
const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
    fetch(url)
        .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
            return resp.json();
        } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(resp.statusText);
        }
        })
        .then((orderItems) => {
        const { items } = orderItems;
        setOrderItems(items);
        setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);
//
    if (isLoading) {
    return (
        <div>
        <h1>Loading...</h1>
        </div>
    );
    }
    if (isError) {
    return (
        <div>
        <h1>Error....</h1>
        </div>
    );
    }
//   Sum of price by Quantity
  const sum = orderItems.reduce(function(prev, cur) { return prev +(cur.price * cur.quantity); }, 0);
    console.log(sum)

const total_tax_percentage = orderItems.length * 2.5
const tax_percentage  = (total_tax_percentage/100) * sum ;
console.log(tax_percentage)

    return (

            <div>
                    <h2 className="text-center pb-4">Your Order</h2>
                        <table class="table table-hover table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">s/n</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Currency</th>
                                <th scope="col">Tax</th>
                                <th scope="col">Quantity</th>


                                </tr>
                            </thead>

                                {
                                    orderItems.map((order,i)=>{
                                                const {name,category,price,currency,tax_pct,quantity} = order
                                            return(
                                                <>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">{ i + 1 }</th>
                                                            <td>{name}</td>
                                                            <td>{category}</td>
                                                            <td>{price}</td>
                                                            <td>{currency}</td>
                                                            <td>{tax_pct}%</td>
                                                            <td>{quantity}</td>
                                                        </tr>
                                                    </tbody>
                                                    
                                                </>
                                            )
                                        }
                                    )

                                }
                        </table>
                
                <h4><small>Total :</small> ₹{ sum } </h4>
                <h4><small>Tax({total_tax_percentage}%) :</small> ₹{tax_percentage}</h4>
                <h3><small>Total Bill :</small> ₹{sum + tax_percentage}</h3>
            </div> 
    );
};

export default MultipleReturns;
