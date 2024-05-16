const pago = document.querySelector("#btn-pago")

async function mercadoPago(){
    const llamado = await fetch("https://api.mercadopago.com/v1/payment_methods")
    console.log(llamado)
}

pago.addEventListener("click", mercadoPago)