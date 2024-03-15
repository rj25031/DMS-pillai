import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <React.Fragment>
        <div className='Filter-main'>
        
    <div class="wrapper">
      <div class="container">
        <i class="fas fa-utensils"></i>
        <span class="num" data-val="400">000</span>
        <span class="text">Meals Delivered</span>
      </div>

      <div class="container">
        <i class="fas fa-smile-beam"></i>
        <span class="num" data-val="340">000</span>
        <span class="text">Happy Customers</span>
      </div>

      <div class="container">
        <i class="fas fa-list"></i>
        <span class="num" data-val="225">000</span>
        <span class="text">Menu Items</span>
      </div>

      <div class="container">
        <i class="fas fa-star"></i>
        <span class="num" data-val="280">000</span>
        <span class="text">Five Stars</span>
      </div>
    </div>


    {/* let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}); */}
</div>
  
    </React.Fragment>
  )
}

export default Filter