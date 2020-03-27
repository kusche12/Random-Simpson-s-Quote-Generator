document.addEventListener('DOMContentLoaded', function(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response => response.json())
        .then(data => {
            const quote = JSON.stringify(data[0].quote);
            let cleaned = '';
            for (let i = 0; i < quote.length; i++) {
                console.log(quote[i]);
                if (quote[i] != '"' && quote[i] != '\\') {
                    cleaned += quote[i]
                }
            }
            document.getElementById('text').innerHTML = "<i class='fas fa-quote-left fa-sm'></i> " + cleaned;
            document.getElementById('author').innerHTML = JSON.stringify(data[0].character).substring(1, data[0].character.length + 1);
        })
        
    document.getElementById('new-quote').onclick= () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response => response.json())
        .then(data => {
            const quote = JSON.stringify(data[0].quote);
            let cleaned = '';
            for (let i = 0; i < quote.length; i++) {
                console.log(quote[i]);
                if (quote[i] != '"' && quote[i] != '\\') {
                    cleaned += quote[i]
                }
            }
            document.getElementById('text').innerHTML = "<i class='fas fa-quote-left fa-sm'></i> " + cleaned;
            document.getElementById('author').innerHTML = JSON.stringify(data[0].character).substring(1, data[0].character.length + 1);
        })

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            }
        var color = getRandomColor();
        document.getElementById('page-wrap').style.backgroundColor = color;
        document.getElementById('text-wrap').style.color = color;                    
    };
});
