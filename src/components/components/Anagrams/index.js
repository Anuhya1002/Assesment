import IsAnagram from './App.js.js'

function IsAnagram(s1, s2) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 IsAnagram(s1, s2)
 
 export default IsAnagram