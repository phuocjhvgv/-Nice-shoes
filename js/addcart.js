if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){
    var removeCartItemButtons= document.getElementsByClassName("btn-danger")
    // console.log(removeCartItemButtons)
    for (var i=0; i<removeCartItemButtons.length; i++){
        var button= removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName("cart")
}

function removeCartItem{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
// btn-danger là nút xóa sản phẩm khỏi giỏ hàng

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total=0;
    for (var i=0; i<cartRows.length; i++){
        var cartRow= cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',' '))
        var quantity = quantityElement.value
        total= total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText='$ '+ total

}



// (function(){

//     $("#cart").on("click", function() {
//       $(".shopping-cart").fadeToggle( "fast");
//     });
    
//   })();