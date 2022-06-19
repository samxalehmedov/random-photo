let form = document.querySelector('form');

form.addEventListener('submit', getir);


function getir(e){
    e.preventDefault();
    let inp1 = document.querySelector('#inp1').value;
    let img = document.querySelector('#img1');
    let msg = document.querySelector('#msg');

    img.src = "https://deltassis.com.br/assets/img/loading_icon.gif"

    fetch(`https://source.unsplash.com/random/900×700/?${inp1}`)
    .then(({url}) =>{
        img.src = url;
        // msg.innerHTML = `https://api.openweathermap.org/data/2.5/weather?q=${inp1.value}&appid={API key}`

    }).catch(err =>{
        msg.innerHTML = err;
    })
}