
import {BrowserRouter,Routes,Route} from 'react-router-dom' 

// react fragment --- parent dinu parda 
function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>This is home page</h1>} />
      <Route path='/about' element={<h2>This is about page</h2>} />
      <Route path='/contact' element={<h1>This is contage page hoooo. </h1>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App

// jsx ==> html + js
// Q :  name is Manish and age is 22 
// component -->

/*

function sayHello(){
console.log("Hello world")
return "manish"
} ---> function 

function sayHello(){
return (
<h1>Hello Manish </h1>
)
} --> component

// component - type of function but can return JSX code 
*/