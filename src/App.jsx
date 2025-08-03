
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



// react fragment --- parent dinu parda 
function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
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