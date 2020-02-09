import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            surname: '',
            age: null,
            sex: "",
            errormessage: '',
            errormessage1: '',
            errormessage2: '',
            errormessage3: '',
            errormessage4: '',
            errormessage5: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let errAge = '';
        let errName = '';
        let errSurname = '';
        let errSex = '';
        let errCapital = '';


        if (nam === "age") {
            if (val !=="" && !Number(val)) {
                errAge = <strong>Wiek musi być liczbą</strong>;

            }
            this.setState({errormessage: errAge});
        }


        if (nam === "username"){
            if (val.length <= 2){
                errName = <strong>Imię musi mieć przynajmniej dwie litery</strong>;
            }
            this.setState({errormessage1: errName});
        }

        if (nam === "sex"){
            if (val !== "m" && val !=="k"){
                errSex = <strong>podaj płeć k/m
                </strong>;
            }
            this.setState({errormessage2: errSex});
        }

        if (nam === "surname"){
            if (val.length <= 2){
                errSurname = <strong>Nazwisko musi mieć przynajmniej dwie litery</strong>;
            }
            this.setState({errormessage3: errSurname});
        }

        if (nam === "username") {
            if (val[0] !== val[0].toUpperCase()){
                errCapital = <strong>Zacznij imię od wielkiej litery</strong>
            }
            this.setState({errormessage4: errCapital});
        }
        if (nam === "surname") {
            if (val[0] !== val[0].toUpperCase()){
                errCapital = <strong>Zacznij nazwisko od wielkiej litery</strong>
            }
            this.setState({errormessage5: errCapital});
        }

        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.surname} lat {this.state.age} płci {this.state.sex}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your surname:</p>
                <input
                    type='text'
                    name='surname'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />

                <p>Enter your sex:</p>
                <input
                    type='text'
                    name='sex'
                    onChange={this.myChangeHandler}
                />

                <br/> <br/> {this.state.errormessage} <br/>
                {this.state.errormessage2}<br/>
                {this.state.errormessage3}<br/>
                {this.state.errormessage4}<br/>
                {this.state.errormessage5}<br/>
                {this.state.errormessage1}
            </form>
        );
    }
}