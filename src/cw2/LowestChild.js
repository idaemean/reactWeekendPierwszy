import React from 'react';

export default class LowestChild extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.display2.name}, Nazwisko: {this.props.display2.surname}</p>
            </div>
        );
    }
}
