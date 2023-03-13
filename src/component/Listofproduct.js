import React from 'react'
import Products from './Products'
import  { useState } from 'react';
export const Listofproduct = () => {
    const[saman,setSaman]=useState(Products);
  return (
    <div>
         <div className='d-flex row align-items-center'>
          {
          saman.map((value, key) => {
            return (
            
                <div className="col-3">
                  <div class="card mx-auto mb-4 p-3" key={key}>
                  <img class="card-img-top" src={value.image} alt="Card image loading"/>
                    <div class="card-body">
                      <h5 class="card-title">{value.name}</h5>
                      <p class="card-text">{value.currencyType}</p>
                      <p class="card-text">{value.price}</p>
                      <a href="#" class="btn btn-primary">Visit</a>
                    </div>
                </div>
                </div>
  
            )
          })
        }
          </div>
    </div>
  )
}
