import React from 'react';

export default class Calc extends React.Component {

    render() {

        return(

            <div>
                <button onClick={this.props.setValue}>
                    Wprowadź liczbę

                </button>

                <button onClick={this.props.reset}>
                    Resetuj
                </button>


            </div>
        );
    }


}