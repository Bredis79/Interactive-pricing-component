const range = document.getElementById('range2');
const toggle = document.getElementById('toggle');
const totalPriceOutput = document.getElementById('total-price');
const sliderValue = document.querySelector(".value2")
let pageviews = document.querySelector(".main__pageviews")
let month = document.querySelector(".main__month")


//slider left side background after load page
window.addEventListener("load", (event) => {
    range.style.background = `linear-gradient(to right, #a5f3eb 50%, #eaeefb 50% )`;
  });


// Function to update the total price based on quantity and discount toggle state
function updateTotalPrice() {
  const quantity = parseInt(range.value);
  const discountApplied = toggle.checked;
   let newCena = 16
  let cena = newCena.toFixed(2)

  if(quantity === 0){
   cena = 8
   pageviews.textContent = "10K pageviews"
 } else if (quantity === 25) {
   cena = 12
   pageviews.textContent = "50K pageviews"
 } else if (quantity === 50) {
   cena = 16
   pageviews.textContent = "100K pageviews"
 } else if (quantity === 75) {
   cena = 24
   pageviews.textContent = "500K pageviews"
   month.style.flexBasis = "40.4%"
 } else if (quantity === 100) {
   cena = 36
   pageviews.textContent = "1M pageviews"
   month.style.flexBasis = "40.4%"
 }
  
  let price = cena; // Basic price
    
  if (discountApplied) {
    price *= 0.75; // Applying a 25% discount if toggle is checked
  }
  let newPrice = parseFloat(price).toFixed(2)
  totalPriceOutput.textContent = `$${newPrice}`;
}

// Event listeners to update the quantity and total price when range or toggle changes
range.addEventListener('input', function(e) {

  const tempSliderValue = e.target.value; 
  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / range.max) * 100;
  range.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;



  updateTotalPrice();
});

toggle.addEventListener('change', updateTotalPrice);

// Initial update of total price
updateTotalPrice();


 



