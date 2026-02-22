

const convertbutton = document.querySelector("#convertbutton");
const currencyselect = document.querySelector(".currency-select");
const moedaescolhida = document.querySelector("#moedaescolhida");


convertbutton.addEventListener("click", convertValues);
currencyselect.addEventListener("change", changeCurrency);
moedaescolhida.addEventListener("change", trocarbandeira);
convertbutton.addEventListener("click", trocarbandeira);

function changeCurrency() {
    const currencyname = document.querySelector("#currencyname");
    const imagemconvertida = document.querySelector("#imagemconvertida");


    if (currencyselect.value === "real") {
        currencyname.innerHTML = "Real Brasileiro";
        imagemconvertida.src = "./img/brasil.png";
        convertValues()


    }


    if (currencyselect.value === "dolar") {
        currencyname.innerHTML = "Dólar";
        imagemconvertida.src = "./img/eua.png";
        convertValues()


    }

    if (currencyselect.value === "euro") {
        currencyname.innerHTML = "Euro";
        imagemconvertida.src = "./img/euro.png";
        convertValues()


    }

    if (currencyselect.value === "libra") {
        currencyname.innerHTML = "Libra Esterlina";
        imagemconvertida.src = "./img/libra.png";
        convertValues()

    }




}



/*volte aqui */


function convertValues() {
    
    
    const moedaescolhida = document.querySelector("#moedaescolhida");
    const inputvalue = document.querySelector("#inputvalue").value;
    const dolartaxa = 5.4;
    const eurotaxa = 6.2;
    const dolarconvertido = inputvalue / dolartaxa;
    const euroconvertido = inputvalue / eurotaxa;
    const valorconvertido = document.querySelector("#valorconvertido");
    

    if (moedaescolhida.value === "real" && currencyselect.value === "real") {
        const taxa = 1;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "real" && currencyselect.value === "dolar") {
        const taxa = 5.4;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "real" && currencyselect.value === "euro") {
        const taxa = 6.2;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "real" && currencyselect.value === "libra") {
        const taxa = 7.2;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertido);
        
    }
    
    if (moedaescolhida.value === "dolar" && currencyselect.value === "dolar") {
        const taxa = 1;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "dolar" && currencyselect.value === "euro") {
        const taxa = 1.19;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertido);
        
    }

     if (moedaescolhida.value === "dolar" && currencyselect.value === "libra") {
        const taxa = 1.37;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertido);
        
    }


if (moedaescolhida.value === "dolar" && currencyselect.value === "real") {
        const taxa = 0.185;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertido);
        
    }
        


if (moedaescolhida.value === "euro" && currencyselect.value === "dolar") {
        const taxa = 0.84;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertido);
        
    }


    if (moedaescolhida.value === "euro" && currencyselect.value === "euro") {
        const taxa = 1;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertido);
        
    }


    
    if (moedaescolhida.value === "euro" && currencyselect.value === "libra") {
        const taxa = 1.15;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "euro" && currencyselect.value === "real") {
        const taxa = 0.16;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertido);
        
    }


     if (moedaescolhida.value === "libra" && currencyselect.value === "dolar") {
        const taxa = 0.735;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertido);
        
    }


    
     if (moedaescolhida.value === "libra" && currencyselect.value === "euro") {
        const taxa = 0.87;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertido);
        
    }

    if (moedaescolhida.value === "libra" && currencyselect.value === "libra") {
        const taxa = 1;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertido);
        
    }


    if (moedaescolhida.value === "libra" && currencyselect.value === "real") {
        const taxa = 0.138;
        const convertido = inputvalue / taxa;
        valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertido);
        
    }

        
    }


   


    

    

   
    
function trocarbandeira() {
    const inputvalue = document.querySelector("#inputvalue").value;
    const imagemdigitada = document.querySelector("#imagemdigitada");
    const moedaescolhida = document.querySelector("#moedaescolhida");
    const valordigitado = document.querySelector("#valordigitado");
    const moedasuperior = document.querySelector("#moedasuperior");

    if (moedaescolhida.value === "real") {
        imagemdigitada.src = "./img/brasil.png";
        moedasuperior.innerHTML = "Real Brasileiro";        valordigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue);
        convertValues()

    }

    if (moedaescolhida.value === "dolar") {
        imagemdigitada.src = "./img/eua.png";
        moedasuperior.innerHTML = "Dólar Americano";
        valordigitado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue);
        convertValues()
    }

    if (moedaescolhida.value === "euro") {
        imagemdigitada.src = "./img/euro.png";
        moedasuperior.innerHTML = "Euro";
        valordigitado.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
             currency: "EUR"
        }).format(inputvalue);
        convertValues()
    }

    if (moedaescolhida.value === "libra") {
        imagemdigitada.src = "./img/libra.png";
        moedasuperior.innerHTML = "Libra Esterlina";
        valordigitado.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue);
        convertValues()
    }     

}
