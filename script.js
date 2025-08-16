document.addEventListener('DOMContentLoaded', () => {
    let inp = document.querySelector('input');
    let btn = document.querySelector('#generate');
    let div  = document.querySelector('#qrcode')
    let colorInput = document.querySelector('.color');
    btn.addEventListener('click',()=>{
    div.innerHTML = ''; // Clear previous QR code
        let qr = new QRCode( div,{
            text: inp.value,
            width:200,
            height:200,
            colorDark: colorInput.value
        }) 

        
    })
})
