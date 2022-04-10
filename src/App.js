import React from 'react';
import FunCompo from './Components/FunCompo'
import ClassCompo  from './Components/ClassCompo'
// import React, { useState } from 'react';
const styling= {
  textAlign: 'center'
}




//  USING CLASS COMPONENT

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      funComp:false,
      classComp:false

    }
  }
  render(){
    return(
      <div style={styling}>
      <h1>Conditinal Rendering</h1>

      <button onClick={()=>{this.setState({funComp: ! this.state.funComp})}}>Function</button>

      <button onClick={()=> {this.setState({classComp: ! this.state.classComp})}}>Class</button>

      <br></br>
      {this.state.funComp === true ? <FunCompo /> : null}
      {this.state.classComp === true ? <ClassCompo /> : null}


      </div>
    )
  }
}
export default App





// USING FUNCTIONAL COMPONENT 

// function App (){
//   const [funC, setfunC] = useState()
//   const [classC, setclassC] = useState()


//   return(
//     <div style={styling}>
//     <h1>Conditional Rendering</h1>

//     <button onClick={() => setfunC( ! funC)}>Functional</button>
//     <button onClick={ () => setclassC ( ! classC )}>Class</button>
//     <br></br>
//     <div>
//     {funC === true ? <FunCompo/> : null}
//     {classC === true ? <ClassCompo/> : null}
//     </div>


    

//     </div>
//   )
// }
// export default App



