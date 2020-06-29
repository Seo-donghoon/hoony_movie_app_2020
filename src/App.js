import React from 'react';
import Proptypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQLhfuH62pe-O86fESYNo-Ug1H2hGv5QuoRw&usqp=CAU",
    rating: 5
  },
  {
    id: 2,
    name: "samgyeopsal",
    image: "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://lh3.googleusercontent.com/proxy/LI3lf2bI-wWl5Rp5gOiDDaGoW08hmT_3VbjrupZF6s9HmghAFNn4J8I9mdUroLtvbNYMSE2i8cZrKkN3YJPsU_9nDxiq-cqvGhfV8GCs2rRLjHdePw",
    rating:4.8
  }


];

function Food({ name, picture,rating }) {

  return (
    <div>
      <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
      <img src={picture} alt = {name} />

    </div>
  );
}

Food.propTypes = {
 name:Proptypes.string.isRequired,
 picture:Proptypes.string.isRequired,
 rating:Proptypes.number.isRequired
};
function App() {
  return (
      <div >
      {foodILike.map((dish => (
         <Food name={dish.name}  
               key={dish.id}
               picture={dish.image}
               rating={dish.rating}
               />
      )))}
    </div>
  );

}

export default App;
