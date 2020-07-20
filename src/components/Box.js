
// import React from 'react'
// import { Button } from 'react-bootdtrap'

// export default function Box(props) {
//     return (
//         <div class="box">
//             box{props.number}
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div className="box">
                {/* <img src={this.props.img}/> */}
                box{this.props.number}
            </div>
        )
    }
}



