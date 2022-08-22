function numbers(var1, var2){
    let dodawanie = var1+var2;
    let odejmowanie = var1-var2;
    let mnozenie = var1*var2;
    console.log('Twój wynik dodawania wynosi '+ dodawanie);
    console.log('Twój wynik odejmowania wynosi '+ odejmowanie);
    console.log('Twój wynik mnożenia wynosi '+ mnozenie);
    if ((dodawanie < 0) || (odejmowanie < 0) || (mnozenie < 0)){
        return console.log("Twój wynik jest nieprawidłowy");
    }
}
numbers(1,2)
