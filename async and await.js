console.log('person1:show ticket');
console.log('person2:show ticket');
const premovie = async () => {
 const promiswifebringingticket = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('ticket');
    }, 3000);
}); 

const getpopcorn = new Promise((resolve, reject)=>resolve('popcorn'));
const getbutter = new Promise((resolve, reject)=>resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=>resolve('colddrinks'));
let[popcorn,butter,colddrinks] = await Promise.all([getpopcorn,getbutter,getColdDrinks]);
console.log(`${popcorn}, ${butter}, ${colddrinks}`);
let ticket;
try{
 ticket = await promiswifebringingticket;
}catch
{
    ticket = 'sad face'
}

// console.log(`wife: i have the ${ticket}`);
// console.log('husbsnd:we should go');
// console.log('wife: no i am hungry');
// let popcorn = await getpopcorn;
// console.log(`husband: i got some ${popcorn}`);
// console.log(`husband:we should go in`);
// console.log(`wife: i need butter in my popcorn`);

// let butter = await getbutter;
// console.log(`husband:i got some ${butter} on popcorn`);
//     console.log('husband: anything else darling ?');
//     console.log('wife: lets got we are getting late');
//     console.log('husband: thank you for remind me *grins*');
// let colddrinks = await getColdDrinks;
//     console.log(`wife: lets got we are getting ${colddrinks}`);
//     console.log('husband: thank you for remind me *grins*');
return ticket;
}
premovie().then((m) => console.log(`person 3:show ${m}`));
// const getpopcorn = promiswifebringingticket.then((t)=>{
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>{
//         resolve('${t} popcorn')
//     })
// })
//  const getbutter=getpopcorn.then((t)=>{
//     console.log('husband:we should go in');
//     console.log('wife: i need butter in my popcorn');
//     return new Promise((resolve,reject)=>{
//         resolve('${t} butter')
//     })
// })
console.log('person4:show ticket');
console.log('person5:show ticket');

