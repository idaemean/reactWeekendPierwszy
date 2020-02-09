import React from 'react';

export default class LowestLowestChild extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.author.name}, Nazwisko: {this.props.author.surname}</p>
            </div>
        );
    }
}
