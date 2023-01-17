




var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if (itemval.value <= 0) {
        itemval.value = 0;

        alert('Negative quantity not allowed');

    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max quantity not allowed');
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);


    }
}

const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if (discountCode.value === 'malik') {
        let newtotalamt = totalamtcurr - 15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurray! code is valid";
    } else {
        error_trw.innerHTML = "Try Again! Valid code is malik";
    }
}

let del =document.getElementById("delete");
let prod=document.getElementById("prod")

del.addEventListener("click",()=>
{
    alert("are you sure to delete");
    prod.style.display="none";

})


let img = document.getElementById("image")

img.addEventListener("click",()=>
{
    console.log("you click iyt");
    img.style.width="1000px";
    img.style.height="1000px";
})

