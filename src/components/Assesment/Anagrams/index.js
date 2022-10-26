import IsAnagram from './app.js'

function IsAnagram(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    if(len1 !== len2){
       return
    }
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 IsAnagram(s1, s2)
 
 export default IsAnagram