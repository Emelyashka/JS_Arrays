function task1()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log (arr.toString());

    let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
    console.log(sum);
}

function task2 ()
{
 let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
 console.log(arr.toString());
 
 let sum=arr.filter(elem=>elem>0 && elem<10).reduce((sum,elem)=>sum+elem,0);
 console.log(sum);
}

function isChetn(arr)
{
    return arr.every((elem)=>elem%2==0);
}

function calcFive(arr)
{
    let newArr=arr.filter((elem)=>elem%5==0);
    return newArr;
}
let arrAverage=function(arr)
{
    let summa=arr.reduce((sum,elem)=>sum+elem,0);
    return summa/arr.length
}

function task6()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let elem=arr.shift();
    arr.push(elem);
    console.log(arr.toString());
}

function task7()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let summaChetn=arr.reduce((sum,elem,index)=>{if (index%2==0)sum=sum+elem; return sum;},0);
    let summaNechetn=arr.reduce((sum,elem,index)=>{if (index%2!=0) sum=sum+elem; return sum;},0);
    console.log(summaChetn/summaNechetn);
}

function increaseDigitsByOne(number) {
    let newNumber='';
    let digits=number.toString();
    for (let i = 0; i < digits.length; i++) {
      let digit=parseInt(digits[i]);
  
      if (digit===9) {
        newNumber+='10';
      } else {
        newNumber+=(digit + 1).toString();
      }
    }
    return parseInt(newNumber);
  }
  
  function task9()
  {
    let arr=["http://vk.com","youtube.com","http://yahoo.com","dzen.ru"];
    arr=arr.filter(elem=>elem.startsWith("http://"));
    console.log(arr.toString());
  }
  function task10()
  {
    let data=[
        {
            1: 11,
            2: 12,
            3: 13,
        },
        {
            1: 21,
            2: 22,
            3: 23,
        },
        {
            1:24,
            2:25,
            3:26,
        },
    ];
    let sum=0;
    data.forEach(elem=>{for([key,value]of Object.entries(elem)){sum+=value;}});
    console.log(sum);
  }