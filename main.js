// var Name = 'Duy Khải';
// alert(Name);
var myInfo = {
    name: 'Duy Khai',
    age: 22,
    addDress: 'Quang Tri'
}
console.log(myInfo)

var inFo = {
    name: 'khai',
    age: 22
}

var result = inFo.age > 0 ? `${inFo.age} Tuổi` : '???'
console.log(result)

for (var i = 1; i <= 1; i++){
    console.log(i);
}

// var myArray = [
//     'JavaScript',
//     'Java',
//     'PHP',
//     'Python'
// ]
//  var arrayLength = myArray.length;

// for(var i = 0 ; i< arrayLength ;i++){
//     if(i%2===0){
//         console.log(myArray[i])
//     }
// }

// var language = {
//     language1: 'javascript',
//     language2: 'java',
//     language3: 'PHP',
//     language4: 'Ruby'
// };

// var language = [
//     'Java',
//     'PHP',
//     'Python',
//     'C'
// ];

// var language = 'JavaScript'

// for(var key in language){
//     console.log(language[key] + key);
// }


// var languageArray = Object.keys(language)

// for(var value of languageArray){
//     console.log(language[value])
// }

// var i = 0;
// while ( i < language.length){
//     console.log(language[i])
//     // i++
// }

var i = 0;
var SingIn = {
    useName: 'khai',
    passWord: '123'
};
var Login = false;

do{
    i++;

    var UserName = prompt("UserName")
    var PassWord = prompt("PassWord")

    if(SingIn.useName === UserName){
        if(SingIn.passWord === PassWord){
            Login = true
            alert('Thanh Cong!!!')
        }else{
            alert('Nhap Sai Mat Khau')
                do{
                    var PassWord = prompt("Nhap Lai Mat Khau Lan "+[i+1])
                    if(SingIn.passWord === PassWord){
                        Login = true
                        alert('Thanh Congg')
                    }
                    i++
                }while(!Login && i<3)
                if(i===3 && SingIn.passWord != PassWord){
                    alert('Nhap Sai Mat Khau Qua '+[i] +' Lan')
                    alert('Tai Khoan Bi Khoa')
                }
            }
    }else{
        alert('Nhap Sai UserName Qua '+[i])
        if(i===3 && SingIn.useName != UserName){
            alert('Tai Khoan Bi Khoa')
        }
    }

}while(!Login && i < 3)
