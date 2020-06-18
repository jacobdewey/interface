input.onButtonPressed(Button.A, function () {
    interfaces.BuyFromShop("Emoji")
})
input.onButtonPressed(Button.B, function () {
    interfaces.addToShop(interfaces.ShopProduct(
    "Emoji",
    0,
    "Emoji",
    0
    ))
})
