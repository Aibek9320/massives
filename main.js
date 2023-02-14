// let car = {
//     color: 'blue',
//     size: 25,
//     year: 1993,
// }
// console.log(car)
//  let cars = Object.assign({},car)
//  console.log(cars)

//  let days = ['mon', 'tue', 'wed', 'thur', 'fr', 'sat', 'sun']
//  console.log(days[0])
let mas = [-2,7,9,5,8,1,12,15,17,3]
for(let elem of mas){
    if ( elem < 10  ){
        console.log(elem)
    }
}

//Задание 2
let st = [-2, 7, '9б', 'Beka', 1, 12, 15, 'Daulet', 17, 3]
st = st.filter(function(item){
    return typeof item === 'string';
})
console.log(st)



// //Задание 4
 for(let i = 2; i < 11 ; i++ ){
    console.log(5 + 'x' + i + '=' + 5 * i )
 }