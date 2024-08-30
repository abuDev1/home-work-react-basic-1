// import "./styles.css";

//// Задания (массивы и стрелочные ф-ии)

//// Задача 1

// export default function App() {

// const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

// const positive = array.filter((arr) => arr > 0)
// const listArr = positive.map((list) => <li>{list}</li>)
//   return <div className="App">
//     <ul>
//       {listArr}
//     </ul>
//   </div>;
// }

//// Задача 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default function App() {
  const messages = [
    { message: "hello", error: true },
    { message: "javascript", error: false },
    { message: "lincode", error: true },
    { message: "react", error: true },
    { message: "angular", error: false },
    { message: "es6", error: false },
  ];

  // const maped = messages.map((message) => message.error);
  const filtered = messages.filter((item) => item.error === "false");
  const mapped = filtered.map((itemList) => <li> {itemList} </li>);

  return (
    <div className="App">
      <ul>{mapped}</ul>
    </div>
  );
}

//// Задача 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export default function App() {
//   const words = [
//     "lincode",
//     "js",
//     "react",
//     "css",
//     "angular",
//     "bootstrap",
//     "html",
//   ];

//   const filtered = words.filter((word) => word.length < 5);
//   const maped = filtered.map((word) => word);

//   return <div className="App">{maped}</div>;
//   // console.log(maped)
// }

//// Задача 4

//4.1

// const sendMessage = (message) => {

// }

//4.2

// const half = (number) => {
//   return number / 2;
// }

//4.3

// const showConsole = () => {
//   console.log("lincode");
// }

//4.4

// const concatWords = (first, second) => {
//   first + second;
// }

//// Задача 5

//5.1

// function justText() {
//   return "lincode";
// }

//5.2

// function logging (text) {
//   console.log(text);
// }

//5.3

// function add (x,y) {
//   const z = 3;
//   return z * x * y;
// }

//5.4

// function onlyPositive (number) {
//   if(number < 0) {
//     return false;
//   }
//   return true;
// }
