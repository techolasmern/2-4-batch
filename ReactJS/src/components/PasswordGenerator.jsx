import { Component } from "react";

class PasswordGenerator extends Component{

    state = {
        password: "",
        responseMessage: "",
        c: 0
    }

    generatePassword = (length = 0) => {
        if (length < 8 || length > 16) {
            return { ok: false, message: "Length: 8-16"};
        }
        const string = "0123456789abcdefABCDEF~`!@#$%^&*()_+|?,.";
        const arr = [];
        while (arr.length < length) {
            const rIdx = Math.floor(Math.random() * string.length);
            const char = string[rIdx];
            arr.push(char);
        }
        console.log(arr.join(""));
        return { ok: true, pass: arr.join(""), message: "Password generated" };
    }

    getPassword = () => {
        const gPass = this.generatePassword(16);
        if (gPass.ok) {
            this.setState(pState => {
                return {
                    ...pState, password: gPass.pass
                }
            })
        }
        return this.setState(pState => {
            return {
                ...pState,
                responseMessage: gPass.message
            }
        })
    }

    inc = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                c: prevState.c + 1
            }
        });
        this.setState((prevState) => {
            return {
                ...prevState,
                c: prevState.c + 1
            }
        });
        this.setState((prevState) => {
            return {
                ...prevState,
                c: prevState.c + 1
            }
        });
        this.setState((prevState) => {
            return {
                ...prevState,
                c: prevState.c + 1
            }
        });
        this.setState((prevState) => {
            return {
                ...prevState,
                c: prevState.c + 1
            }
        });
    }

    render() {
        return <div>
            <div>Generated (New) Password: {this.state.password}</div>
            <br />
            <button onClick={this.getPassword}>Generate Password</button>
            <div>{this.state.responseMessage}</div>
            <br /><br />
            c: {this.state.c}
            <button onClick={this.inc}>inc</button>
        </div>
    }
}

export default PasswordGenerator;