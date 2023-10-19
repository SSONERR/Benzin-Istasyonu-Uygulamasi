//Benzin İstasyonu
/*
1-Dizel  : 41.53
2-Benzin : 40.25
3-LPG    : 17.56  */

let yeniSatir = "\n"
let dizel = 41.53
let benzin = 40.25
let lpg = 17.56
let bakiye = 1000
let fiyat = 0


alert("Benzin İstasyonu Uygulamasına Hoşgeldiniz ! " + yeniSatir + "Bakiyeniz : " + bakiye + " TL")
let yakıtTipi = Number(prompt("Lütfen almak istediğiniz yakıt tipini(numarasını) giriniz : " + yeniSatir + "1-Dizel  :  41.53 TL" + yeniSatir + "2-Benzin : 40.25 TL" + yeniSatir + "3-LPG    : 17.56 TL"))
yakıtTipi.toUpperCase


if (yakıtTipi < 4 && yakıtTipi > 0) {
    let litre = prompt("Lütfen almak istediğiniz yakıt miktarını(litre) giriniz : ")
    if (litre > 0) {
        if (yakıtTipi == 1) {
            //Dizel
            fiyat += dizel * litre
            if (bakiye > fiyat) {
                //Bakiye yeterli:

                alert("Yakıt başarıyla alındı !" + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Kalan bakiye : " + (bakiye - fiyat))
                //Bakiye yetersiz:

            } else { alert("Bakiye yetersiz ! " + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Bakiye : " + bakiye) }

        } else if (yakıtTipi == 2) {
            //Benzin
            fiyat += benzin * litre
            if (bakiye > fiyat) {
                //Bakiye yeterli:

                alert("Yakıt başarıyla alındı !" + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Kalan bakiye : " + (bakiye - fiyat))
                //Bakiye yetersiz:

            } else { alert("Bakiye yetersiz ! " + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Bakiye : " + bakiye) }

        } else if (yakıtTipi == 3) {
            //LPG
            fiyat += lpg * litre
            if (bakiye > fiyat) {
                //Bakiye yeterli:

                alert("Yakıt başarıyla alındı !" + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Kalan bakiye : " + (bakiye - fiyat))
                //Bakiye yetersiz:

            } else { alert("Bakiye yetersiz ! " + yeniSatir + "Tutar : " + fiyat + yeniSatir + "Bakiye : " + bakiye) }
            //Yanlış yakıt tipi veya litre:

        }
    }else{
        alert("Lütfen litreyi doğru giriniz !")
    }

} else { alert("Lütfen yakıt tipini doğru giriniz !") }
