var arr=[
    [
        '刘超',12,'男'
    ],
    [
        '朱亚茹',14,'男'
    ],
    [
        '崔浩然',22,'男'
    ],
];
// var arr=[
//     [1,2,3,4,5],
//     [1,23,4,45,5],
//     [1,21,31,31,31],
// ];
var arr1=[];
arr.forEach((item,index)=>{
    console.log(item);
    arr1.push({
        name:item[0],
        age:item[1],
        sex:item[2],
    })
});
console.log(arr1);
// for (item of arr){
//     console.log(item.name,item.age,item.sex);
// }
