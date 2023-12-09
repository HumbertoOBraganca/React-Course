import React from 'react'
import ReactDom from 'react-dom'
import {books} from './books'
// CSS
import './index.css';
import Book from './book';

// stateless functional componet
// always return JSX
// JSX Rules
// return single elemnt
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// const Greeting = () =>{
//   return React.createElement('div',
//   {},
//   React.createElement('h1',{},'hello world'))
// }

function Separation() {
  return (
    <React.Fragment>
      <div>
        <p>----------------------------------------------------------------------------------------------------------</p>
      </div>
    </React.Fragment>
  )
}

function Greeting(){
  return (
  <React.Fragment>
    <div>
      <h3>Hello world!</h3>
      <ul>
        <li>
          <a href='#'>Hello world</a>
        </li>
        <img src='' alt=''/>
      </ul>
    </div>;
  </React.Fragment>  
  )    
}

// ---------------------------------------------------------------//

// Nested Components, Reat Tools

function Greeting2 () {
  return (
    <div>
      <Person/>
      <Message/>     
    </div>
  )
}

const Person = () => <h2>humberto</h2>
const Message = () => <p>this is my message</p>

// ---------------------------------------------------------------//

// Nested Components, Reat Tools

/*

const Book = () => {
  return (
  <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
  )
}
const Image = ()=><img src="https://m.media-amazon.com/images/I/81h4CdNxdgL._SY466_.jpg"/>
const Title = () => <h1>O Principe</h1>
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem'}}>Maquiavel</h4>
// using this style directly in JSX prevents css effect. So this is interesintg
// if you want to a specific element to be different

*/

function BookList () {
  return( 
  <section className='booklist'>
    {books.map((book)=>{
      return <Book key={book.id} {...book}></Book>;
    })}
  </section>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'))

