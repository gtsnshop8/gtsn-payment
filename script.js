document.addEventListener("DOMContentLoaded", () => {

const upload = document.getElementById("receipt");
const preview = document.getElementById("preview");
const submit = document.getElementById("submitBtn");
const reference = document.getElementById("reference");
const qr = document.getElementById("qrImage");

qr.addEventListener("click", () => {
    qr.style.transform = "scale(1.8)";
    qr.style.transition = ".3s";

    setTimeout(()=>{
        qr.style.transform="scale(1)";
    },500);
});

upload.addEventListener("change", function(){

const file=this.files[0];

if(file){

preview.src=URL.createObjectURL(file);

preview.style.display="block";

}

});

submit.addEventListener("click",()=>{

if(reference.value.trim()==""){

alert("Please enter your Reference ID.");

return;

}

if(upload.files.length===0){

alert("Please upload your payment screenshot.");

return;

}

const username="YOUR_TELEGRAM_USERNAME";

const text=
`Hello GTSNSHOP Support!

Reference ID: ${reference.value}

I already completed my payment.

I will send my payment screenshot after this message.`;

window.open(`https://t.me/${username}?text=${encodeURIComponent(text)}`,"_blank");

});

});
