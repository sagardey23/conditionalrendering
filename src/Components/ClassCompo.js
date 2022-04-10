import React from 'react';

class ClassCompo extends React.Component{
    render(){
        return(
            <>
            <h1>This is Class Component</h1>
            </>
        )
    }
}
export default ClassCompo

































// import React from 'react';

// class ClassCompo extends React.Component {
//     constructor(){
//         super();
//         this.state ={
//             condition : true
//             // count:0
//         };
//         this.change=this.change.bind(this);
//         console.log(this.state.condition);
//     }

//     change(){
//         this.setState({condition : false})
//         // this.setState({count : this.state.count +1 })

//     }
//     render(){
//         return(
//             <>
//             {/* <h1>welcome{this.state.count}</h1> */}
//             {/* <h1>welcome{this.state.condition}</h1> */}

//             <h1>This is class Component</h1>


            


//             {/* <button onClick={this.change}> Click</button> */}
//             </>
//         )
//     }
// }
// export default ClassCompo