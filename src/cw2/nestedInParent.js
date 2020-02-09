import React from 'react';
import LowestChild from "./LowestChild";

export default class NestedInParent extends React.Component {
    render() {
        return (
              <div>
            <LowestChild display2={this.props.display}/>
    </div>
        );

    }
}