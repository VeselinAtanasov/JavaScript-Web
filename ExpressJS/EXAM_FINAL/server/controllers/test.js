let data ='Sun Jun 17 2018 12:36:46 GMT+0300 (FLE Daylight Time)'
let desired = '01:14, 31 May 2018‎';

let res = data.split('GMT').shift().split(' ').filter(e => e!=='')
res.shift();
let hours = res.pop().substring(0,5)
 
let currentDate =hours +', '+res[1]+' '+res[0]+ ' '+res[2];
console.log(currentDate)