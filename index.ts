function data<T, keyType extends keyof T>(items:T[],key:keyType){
    return items.map(i => i[key])
}
/*
    items is of type T[] means it is the array of type T.
    key is of type keyType and this keyType is extending the keyof type T.
    means here in this example, dogs is array of objects and keyType will be
    only keys of the objects in the dogs array. means keyType only allows the 
    keys of objects of dogs array.

    items.map means 'dogs.map'
    i => i[key] means for every object, i[key] here means key is the object's key 
    that means key can be name or age. So, i[name] or i[age] will give us the values and we are mapping on them.
    it will return us a new array with the values.
*/
const dogs = [
    { name: "ksk", age: 12 },
    {name:"psk",age:15}
]

console.log(data(dogs,"age"))  // dogs is the array and age will be the key
console.log(data(dogs,"name"))