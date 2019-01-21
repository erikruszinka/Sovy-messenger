import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            logged: false,
            data:[],
            token: '',
            messages: [],
            message: [],
            user: ''
        };
        this.loginRequest = this.loginRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            login: event.target.value,
            message: event.target.value,
            user: event.target.value
        });
    }

    // componentDidMount() {
    //     axios.post('http://itsovy.sk:1201/getmessages', {
    //         "login": "ruszinkae",
    //         "token":"e4205d2388e3e37b2bbb60bec6f6cd"
    //     })
    //         .then(response => {
    //             this.setState({
    //                 data: response
    //             })
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //
    // }


    handleSubmit(event) {
        event.preventDefault();
    }

    loginRequest=()=> {
        axios.post('http://itsovy.sk:1201/login', {
            "login": this.state.login,
            "password": "secret"
        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true, token: response.data.token });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    logoutRequest=()=>{
            axios.post('http://itsovy.sk:1201/logout', {
                "login": this.state.login,
                "token": this.state.token
            })
                .then(response=> {
                    console.log(response);
                    this.setState({ data: response.data, isLoading: false, logged:false });
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    sendMessageRequest=()=>{
        axios.post('http://itsovy.sk:1201/sendmessage', {
            "login": this.state.login,
            "token":this.state.token,
            "user": this.state.user,
            "message": this.state.message
        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getMessageRequest=()=>{
        axios.post('http://itsovy.sk:1201/getmessages', {
            "login": this.state.login,
            "token": this.state.token,

        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true, messages: response.data.messages });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <div className=''>
                <form onSubmit={this.handleSubmit}>

                        <p>Login</p><input type="text" login={this.state.login} onChange={this.handleChange}/>
                        <p>Message</p><textarea messagesend={this.state.message} onChange={this.handleChange}></textarea>
                        <p>User</p><input user={this.state.user} onChange={this.handleChange} type="text"/>
                    <br/><br/><button type="submit" onClick={this.loginRequest}>Login</button>
                        <button type="submit" onClick={this.logoutRequest}>Logout</button>
                        <button type="submit" onClick={this.getMessageRequest}>Get Messages</button>
                        <button type="submit" onClick={this.sendMessageRequest}>Send Message</button>

                    <br/>
                </form>
                {this.state.messages.map(message=>{
                    return <p key={message.message}>{message.message}</p>
                })}



            </div>
        );
    }
}

export default Home;