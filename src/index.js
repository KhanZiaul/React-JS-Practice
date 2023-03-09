import React from 'react';
import ReactDOM from 'react-dom';

// const elements = (
//   <h1 className="heading">
//     <span className="text">Hellow React</span>
//     <img src=""/>  
//     </h1>
// );

// console.log(elements);

// const elements = (
//   <h1 className="heading">
//     <span className="text">Hellow React</span>
//     <img src=""/>  
//     </h1>
// );

// ReactDOM.render(elements,document.getElementById('root'))

//react element ------------------------------

//setInterval(()=>{
//   const elements = (
//     <h1 className="heading">
//       <span className="text">Hellow {new Date().toLocaleTimeString()}</span>
//       <img src=""/>  
//       </h1>
//   );
  
//   ReactDOM.render(elements,document.getElementById('root'));

// },1000)


//react component ----------------------------------------

// functional component --------------


//   function Clock({ locale }){  
//     return (
//       <h1 className="heading">
//       <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//       <img src=""/>  
//       </h1>
//   );
// }
  
// ReactDOM.render(< Clock locale="bn-BD" />,document.getElementById('root'));


// class component ----------------

  class Clock extends React.Component{
    
    render() {
      return (
        <h1 className="heading">
        <span className="text">Hellow {new Date().toLocaleTimeString(this.props.locale)}</span>
        <img src=""/>  
        </h1>
    );
    }
   
}
  
ReactDOM.render(< Clock locale="bn-BD" />,document.getElementById('root'));