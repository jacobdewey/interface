input.onButtonPressed(Button.A, function () {
    interfaces.BuyFromShop("Emoji")
})
input.onButtonPressed(Button.B, function () {
    interfaces.addToShop(interfaces.ShopProduct("Emoji", 100.5))
})
