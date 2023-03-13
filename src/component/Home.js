import React from 'react'
// import Products from './Products';
import Form from './Form'
import './Styleforproduct.css';
export default function Home() {

  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src="https://media.istockphoto.com/id/1359570633/photo/shopping-cart-on-white.jpg?s=612x612&w=is&k=20&c=1PtkVr9njSwCGortLhHP7zpeNIzPT6tVErLxPBnBQy4=" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://media.istockphoto.com/id/1320617333/photo/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-concept.jpg?s=612x612&w=is&k=20&c=CBswXJJEpOEEGfzBKyR7yujDcnOxmfAcGPqNp2WI9ZU=" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img src="https://media.istockphoto.com/id/521811679/photo/close-up-of-full-shopping-cart-in-grocery-store.jpg?s=2048x2048&w=is&k=20&c=ZkadXbndR4snKVww36rj3VJQ0AH-9LH5ww0cirfetbU=" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Form />
    </div>
  )
}
