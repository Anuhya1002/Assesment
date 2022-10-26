import IsBalancedEnclosure from './app.js'

function IsBalancedEnclosure(s) {
    let length_1 = s.length
    for (let each in s) {
        if (each % 2 === 0){
            return each
        }}
    for (let item in s){
        if (item % 2 !== 0){
            return item
        }
    }

    if (each === item) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}
 IsBalancedEnclosure(s) 
 
 export default IsBalancedEnclosure