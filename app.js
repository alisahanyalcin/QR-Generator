let generate = document.getElementById('generate');
let textarea = document.getElementById('textarea');

generate.addEventListener('click', (e) => {
    if (textarea.value !== "")
    {
        document.getElementById('result').innerHTML = '';
        console.log(encodeURI(textarea.value));
        let img = document.createElement('img');
        img.setAttribute('alt', 'QRGenerator');
        img.setAttribute('src', 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' + decodeURI(textarea.value));
        document.getElementById('result').appendChild(img);
    }
    else
    {
        const x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() {
            x.className = x.className.replace("show", "");
        }, 3000);

    }
});