import IsBalancedEnclosure from './App.js.js'

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
        console.log(true)
    }
    else {
        console.log(false)
    }
}
 IsBalancedEnclosure(s) 
 
 export default IsBalancedEnclosure