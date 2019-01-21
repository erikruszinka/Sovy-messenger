import React, { Component } from "react";
import { Link } from "@reach/router";

class SendMessage extends Component {
    render() {
        return (
            <div className="">

                <Link to="/send-message">
                    <button>send</button>
                </Link>


            </div>
        );
    }
}

export default SendMessage;