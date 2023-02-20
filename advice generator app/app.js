const url = "https://api.quotable.io/random",
    // const url = "https://api.adviceslip.com/advice",
    quote_here = document.getElementById('quote_here'),
    quote_no = document.getElementById('quote_no'),
    genQuote = document.getElementById('genQuote');
window.onload = () => {
    quote_here.innerHTML = `Loading...`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const dta = data
            console.log(dta
            );
            quote_no.innerText = dta.tags[0]
            quote_here.innerHTML = `<i class="fa-solid fa-quote-left si"></i> ${dta.content} <i class="fa-solid fa-quote-right si"></i>`;
        })

    genQuote.addEventListener('click', () => {
        quote_here.innerHTML = `Loading...`;
        genQuote.classList.add('animate');
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const dta = data
                quote_no.innerText = dta.tags[0]
                quote_here.innerHTML = `<i class="fa-solid fa-quote-left si"></i> ${dta.content} <i class="fa-solid fa-quote-right si"></i>`;
                genQuote.classList.remove('animate');
            })

    })
}