const initialValue = document.querySelector("#initial-price");
const quantityStock =document.querySelector("#quantity-stock");
const currentPrice = document.querySelector("#current-price");
const tellMeButton = document.querySelector("#btn-tell-me");
const output = document.querySelector("#output");


function calculateProfitLoss(initial, quantity, current){
   
        if(initial > 0 && quantity > 0 && current > 0){
            if(initial>current){
                const loss = (initial-current)*quantity;
                const lossPercentage = (loss/initial) * 100;
                output.innerHTML = `Loss is ${loss} and Percentage of Loss is ${lossPercentage}%`;
            }else if(current>initial){
                const profit = (current-initial)*quantity;
                const profitPercentage = (profit/initial) * 100;
                output.innerHTML = `Profit is ${profit} and Percentage of Profit is ${profitPercentage}% `;
            }else{
                output.innerHTML = "No Pain No Gain and No Gain No Pain!";
            }
        }
        else{
            alert("Please fill out all Fields...");
        }
    
}

function stockProfitLoss(){
        calculateProfitLoss( 
            Number(initialValue.value), 
            Number(quantityStock.value), 
            Number(currentPrice.value)
            );
}

tellMeButton.addEventListener('click', stockProfitLoss)
