// 1

// function bot(a) {
//     let s = 1;
//     let p = a.split(",");
//     for (let i = 0; i <= p.length-1; i++){
//         s *= Number(p[i]);
        
//     }
//     return s;
// }
// console.log(bot("1,2,3"));




// 2

// function bot(a) {
//     let k = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if(a.at(i)=="-"){
//             k++;
//         }
//     }
//     return k + 1;
// }
// console.log(bot("Ali-sheri-bot"));




// 3

// function bot(a,b) {
//     return a.includes(b);
// }
// console.log(bot("Alisheribot","bot"));




// 4


// function bot(a) {
//     return a.includes(" ");
// }
// console.log(bot("Alisheribot"));




// 5


// function bot(a) {
//     let b="Hello"
//     return b.concat(" ",a);
// }
// console.log(bot("Alisheribot"));





// 6


// function bot(a) {
//     if (a.length % 2 == 0) {
//         let b = a.at(a.length / 2-1);
//         let c = a.at(a.length / 2);
//         return b + c;
//     }
//     else {
//         return a.at(Math.floor(a.length / 2));
//     }
// }
// console.log(bot("botocl"));




// 7

// function bot(a){
//     let splitted = a.split("")
//     let n = ''
//     for (let i = 0 ; i < splitted.length ; i ++ )
//     {
//         if (splitted[i] == splitted[i+1]){
//             n=  'true'
//             break
//         }
//         else {n = 'false'}
//     }
//     return n
// }
// console.log(bot("ssalom"));




// 8

// function bot(a) {
//     let b=a.split(" ")
//     let k = b.indexOf("Nemo")+1;
//     let s= "I found Nemo at "
//     return s.concat(k, " !");
// }
// console.log(bot("I am finding Nemo !"));





// 9

// function bot(a) {
//     let splitted = a.split(" ")
//     for (let i = 0 ; i < splitted.length ; i ++){
//         let spl = splitted[i].split("")
//         if (spl.length >= 5)[
//             spl.bot()
//         ]
//         splitted[i] = spl.join("")
//     }
//     let text = splitted.join(" ")
//   return text
    
// }
// console.log(bot("Salom se aleykum du"));






// 10

// function bot(a) {
//     let k = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == "a" || a.at(i) == "A" || a.at(i) == "e" || a.at(i) == "E" || a.at(i) == "i" || a.at(i) == "I" || a.at(i) == "u" || a.at(i) == "U" || a.at(i) == "o" || a.at(i) == "O") {
//             k = k + "-" + a.at(i) + "-";
//         }
//         else {
//             k += a.at(i);
//         }
//     }
//     return k;
// }
// console.log(bot("edabit"));




// 11

// function  bot(a){
//      let num = Number(a)
//      let res = ""
//      for (let i = 1 ; i <= num-1 ; i ++){
//         res += i + "-"
//      }
//      return res + a
// }
// console.log(bot(10));





// 12

// function  bot(a){
//     let revers =a.split('').reverse().join('')
//     return a == revers
// }
// console.log(bot('nvan'));






// 13

// function bot(b,a) {
//     let k = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if (a.at(i) == b) {
//             k++;
//         }
//     }
//     return k;
// }
// console.log(bot("m","Salom se aleykum du"));






// 14

// function bot(a) {
//     let k = "";
//     let s = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == a.at(i).toUpperCase()) {
//             k += a.at(i);
//         }
//         else {
//             s += a.at(i);
//         }
//     }
//     return k + s;
// }
// console.log(bot('nVAn'));







// 15

// function  bot(a){
//      let str =a.toString()
//     let revers = str.split("").reverse().join("")
//     return revers + a
// }
// console.log(bot(123));
