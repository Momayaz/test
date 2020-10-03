'use strict';
let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let locationName = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
function Store(location, minCust, maxCust, avgCookies){
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.custPerHour = [];
}
Store.prototype.getCustPerHour = function(){
    for(let k=0; k<workHours.length; k++){
    this.custPerHour.push(Math.ceil(getRandomNumber(this.minCust,this.maxCust)* this.avgCookies));
}
}

let tableEl = document.getElementById('table');
function render(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.innerHTML= ``;
    for(let l=0; l<workHours.length; l++){
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.innerHTML=`${workHours[l]}`;
    }
}
Store.prototype.createTable = function(){
    let trEl2 = document.createElement('tr');
    tableEl.appendChild(trEl2);
    let tdEl2 = document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.innerHTML= `${this.location}`;
    // let tdEl3 = document.createElement('td');
    // trEl2.appendChild(tdEl3);
    // tdEl3.innerHTML= `${this.minCust}`;
    // let tdEl4 = document.createElement('td');
    // trEl2.appendChild(tdEl4);
    // tdEl4.innerHTML= `${this.maxCust}`;
    // let tdEl5 = document.createElement('td');
    // trEl2.appendChild(tdEl5);
    // tdEl5.innerHTML= `${this.avgCookies}`;
    for(let h=0; h<workHours.length; h++){
    let tdEl6 = document.createElement('td');
    trEl2.appendChild(tdEl6);
    tdEl6.innerHTML= `${this.custPerHour[h]}`;
}
}
render();

let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getCustPerHour();
seattle.createTable();
console.log(seattle);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.getCustPerHour();
tokyo.createTable();
console.log(tokyo);
let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.getCustPerHour();
dubai.createTable();
console.log(dubai);
let paris = new Store('Paris', 20, 38, 2.3);
paris.getCustPerHour();
paris.createTable();
console.log(paris);
let lima = new Store('Lima', 2, 16, 4.6);
lima.getCustPerHour();
lima.createTable();
console.log(lima);




































































function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// let seattle = {
//     name: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     cookiesPerHour: [],
//     total:0,
//     getAvgCookiesForEachCust: function () {
//         for (let m = 0; m < workHours.length; m++) {
//             this.cookiesPerHour.push(Math.ceil(getRandomNumber(this.minCust, this.maxCust) * this.avgCookies));
//             this.total+=this.cookiesPerHour[m];
//         }
//     },
//     render: function () {
//         let sectionEl = document.getElementById('seattle');
//         let h1El = document.createElement('h1')
//         sectionEl.appendChild(h1El);
//         h1El.textContent = `${this.name}`;
//         let ulEl = document.createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for (let o = 0; o < workHours.length; o++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHours[o]}:${this.cookiesPerHour[o]}`;
//         }
//         let liEl=document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent=`Total:${this.total}`;

//     },
// };
// seattle.getAvgCookiesForEachCust();
// console.log(seattle.cookiesPerHour);
// seattle.render();
// console.table(seattle.render);
// let tokyo= {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust:24,
//     avgCookies: 1.2,
//     cookiesPerHour: [],
//     total:0,
//     getAvgCookiesPerHour: function(){
//         for(let y=0; y<workHours.length; y++){
//         this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)* this.avgCookies));
//         this.total+=this.cookiesPerHour[y];
//         }
//     },
//     render: function(){
//         let sectionEl = document.getElementById('tokyo');
//         let h1El = document.createElement('h1');
//         sectionEl.appendChild(h1El);
//         h1El.textContent= `${this.name}`;
//         let ulEl = document.createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for(let a= 0; a<workHours.length; a++){
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent= `${workHours[a]}:${this.cookiesPerHour[a]}`;
//         }
//         let liEl=document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent=`Total:${this.total}`;

//     },
// };
// tokyo.getAvgCookiesPerHour();
// tokyo.render();

// let dubai={
//     name:'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgSales: 3.7,
//     cookiesPerHour: [],
//     total:0,
//     getcookiesPerHour: function(){
//         for(let L=0; L<workHours.length; L++){
//         this.cookiesPerHour.push(Math.ceil(getRandomNumber(this.minCust, this.maxCust)* this.avgSales));
//         this.total+=this.cookiesPerHour[L];
//     }
//     },
//     render: function(){
//         let sectionEl = document.getElementById('tokyo');
//         let h1El = document.createElement('h1');
//         sectionEl.appendChild(h1El);
//         h1El.textContent= `${this.name}`;
//         let ulEl= document. createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for(let z=0; z<workHours.length; z++){
//         let liEl= document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent= `${workHours[z]}:${this.cookiesPerHour[z]}`;
//         }
//         let liEl=document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent=`Total:${this.total}`;
//     },
// };
// dubai.getcookiesPerHour();
// dubai.render();
// console.table(dubai.cookiesPerHour);
// let paris={
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgSales: 2.3,
//     cookiesPerHour:[],
//     total:0,
//     getCookiesPerHour: function(){
//         for(let r=0; r<workHours.length; r=r+1){
//             this.cookiesPerHour.push(Math.ceil(getRandomNumber(this.minCust,this.maxCust)* this.avgSales));
//             this.total+=this.cookiesPerHour[r]
//         }
//     },
//     show: function(){
//         let sectionEl = document.getElementById('paris');
//         let h1El = document.createElement('h1');
//         sectionEl.appendChild(h1El);
//         h1El.textContent= `${this.name}`;
//         let ulEl= document.createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for(let q=0; q<workHours.length; q++){
//             let liEl= document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent= `${workHours[q]}:${this.cookiesPerHour[q]}`;
//         }
//         let liEl=document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent=`Total:${this.total}`;
//     },
// };
// paris.getCookiesPerHour();
// paris.show();
// console.log(paris.total);
// let lima={
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgSales: 4.6,
//     cookiesPerHour:[],
//     total:0,
//     getCookiesPerHour: function(){
//         for(let f=0; f<workHours.length; f++){
//             this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)* this.avgSales));
//             this.total+=this.cookiesPerHour[f];
//         }
       
//     },
//     show: function(){
//         let sectionEl= document.getElementById('lima');
//         let h1El= document.createElement('h1');
//         sectionEl.appendChild(h1El);
//         h1El.textContent= `${this.name}`;
//         let ulEl= document.createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for(let c=0; c<workHours.length; c++){
//         let liEl= document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent= `${workHours[c]}:${this.cookiesPerHour[c]}`;
//         }
//         let liEl=document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent=`Total:${this.total}`;
//     },
// };
// lima.getCookiesPerHour();
// lima.show();
// console.table(lima.cookiesPerHour);

