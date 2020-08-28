{
  const x = "blue";
  console.log(x);
}
console.log(typeof x); // undefined

{
  const x = 3;
  console.log(x);
}

console.log(typeof x); // undefined

{
  let x = "blue";
  console.log(x); // blue
  {
    let x = 3;
    console.log(x); // 3
  }
  console.log(x); // blue
}
console.log(typeof x); // undefined

{
  // 외부 블록
  let x = { color: "blue" };
  let y = x;
  let z = 3;
  {
    // 내부 블록
    let x = 5;
    console.log(x); // 5
    console.log(y.color); // blue
    y.color = "red";
    console.log(z); //3
  }
  console.log(x.color); //red
  console.log(y.color); //red
  console.log(z); //3
}
