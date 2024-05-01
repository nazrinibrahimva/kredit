let emekhaqqi = 2500;
let meblegh = 21000;
let muddet = 7;
let faiz;
let ayligodenish;
if(meblegh > emekhaqqi*10){
    console.log('kredit ucun emekhaqqiniz kifayet deyil');
}
else{
    if(muddet>36){
        console.log('kredit elde ede bilmezsiz');
    }
    else{
        if(ayligodenish > emekhaqqi*0.45){
            console.log('kredit elde ede bilmezsiz');
        }
        else{
            if(0 < muddet && 12 > muddet){
                faiz = 13;
                ayligodenish = (meblegh +(meblegh*faiz)/100)/muddet;
            }
            if(12 < muddet && 24 > muddet){
                faiz = 15;
                ayligodenish = (meblegh +(meblegh*faiz)/100)/muddet;
            }
            if(24 < muddet && 36 > muddet){
                faiz = 17;
                ayligodenish = (meblegh +(meblegh*faiz)/100)/muddet;
            }
            console.log(meblegh + "azn mebleg size" + faiz + "faizle" + muddet + "ayligh" + ayligodenish + "odenisle verilir");
        }
    }
}