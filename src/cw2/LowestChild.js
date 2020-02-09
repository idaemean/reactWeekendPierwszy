import React from 'react';
import LowestLowestChild from "./LowestLowestChild";

export default class NestedInParent extends React.Component {
    render() {
        return (
            <div>
                <LowestLowestChild author={this.props.display2}/>
            </div>
        );

    }
}