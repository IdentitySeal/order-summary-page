


import React, { useState, useEffect } from 'react';
const url = 'https://indapi.kumba.io/webdev/assignment';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [orderFrom, setOrderFrom] = useState();
  

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
      .then((orderFrom) => {
        const { restaurant } = orderFrom;
        setOrderFrom(restaurant);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

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
  const {name,street,state,city,zipcode}= orderFrom;
  return (
<div>
    <div className="text-center" >
    
    <h1>{name}</h1>
      <p>{street},{state} {city}, India.</p>
      <p>zipcode, {zipcode}</p>

      
    </div>
    </div>
  );
};

export default MultipleReturns;
