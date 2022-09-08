class Wallet{
    constructor(money) {
        let _money = money
        // pobieranie wartosci portfela
        this.getWalletValue = () => _money
        // walidacja czy odpowiednia ilosc srodkow
        this.checkCanPlay = (value) => {
            if (_money > value) return true;
            else return false;
        }
        this.changeWallet = (value, type="+") =>{
            if (typeof value === "number" && !isNaN(value)){
                if(type === "+"){
                    return _money += value;
                }
                else if (type === "-"){
                    return _money -= value;
                }
                else {
                    throw new Error("Nieprawidlowe dzialanie")
                }
            }else {
                console.log(typeof value);
                throw new Error("nieprawidlowa liczba")
            }
        }
    }
};

const wallet = new Wallet(200)
