function configureListeners() {
    let images =[document.getElementById('pn1'),document.getElementById('pn2'),document.getElementById('pn3'),document.getElementById('pn4'),document.getElementById('pn5'),document.getElementById('pn6'),document.getElementById('pn7'),document.getElementById('pn8'),document.getElementById('pn9')] // select img elements  


     for (var i = 0; i < images.length; i++) {        
    images[i].addEventListener('mouseover',addOpacity(images[i]), false)  // iterate over images and add mouseover event listeners      
    
    } 
    console.log(images[0])
}

function addOpacity(event) {
    // add appropriate CSS class
    event.className += 'dim'

    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     event.className -= 'dim'

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
        price ="$14.99"
        colorName = "Lime Green"
        updatePrice(colorName, price)          
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = "$11.14"
            colorName = "Medium Brown"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = "$22.99"
            colorName = "Royal Blue"
            updatePrice(colorName, price)          


            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = "$13.42"
            colorName = "Solid Red"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = "$21.98"
            colorName = "Solid White"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = "$4.99"
            colorName = "Solid Black"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = "$8.22"
            colorName = "Solid Cyan"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = "$11.99"
            colorName = "Solid Purple"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = "$14.99"
            colorName = "Solid Yellow"
            updatePrice(colorName, price)          

            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = price // select element with corresponding id
        // display price
        colorPrice.getElementById('priceDiv').style.display ='block'
        
        let color = colorName // select element with corresponding id
        //display color name
    }
    
}