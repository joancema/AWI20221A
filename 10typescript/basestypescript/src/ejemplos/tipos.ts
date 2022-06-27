import './style.css'
type Hero ={
  name:string,
  age:number,
  powers:number[],
  getName?: ()=>string
}
const superman:Hero ={
  name:'Clark Kent',
  age:55,
  powers:[1,2],
  getName(){
    return this.name
  }
}
const flash:Hero ={
  name:'Barry Alen',
  age:26,
  powers:[1],
}


