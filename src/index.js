import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
//import Appheader from './components/app';

// class WhoAmI extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     years: 26
//   //   }

//     // this.nextYear = () => {
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // }
//     state = {
//       years: 26
//     }
// //}

// nextYear = () => {
//   this.setState(state => ({
//     years: ++state.years
//   }))
// }

  //   this.nextYear = this.nextYear.bind(this);
  // }
  
  // nextYear() {
  //   console.log(1);
  //   // this.state.years++
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <React.Fragment>
//         <button onClick = {this.nextYear} > ++ </button>
//         <h1> 
//           My name is {name}, 
//           surname - {surname}, years = {years}
//         </h1>
//         <a href={link}>My profile</a>
//      </React.Fragment>
//     )
//   }
// } 

// function WhoAmI({name, surname, link}) {
//   return (
//     <React.Fragment>
//         <h1> 
//           My name is {name}, 
//           surname - {surname} 
//         </h1>
//         <a href={link}>My profile</a>
//     </React.Fragment>
//   )
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="https://facebook.com"/>
//       <WhoAmI name="Ivan" surname="Ivanov" link="https://vk.com"/>
//       <WhoAmI name="Anarbek" surname="Sultan" link="https://google.com"/>


//     </>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 