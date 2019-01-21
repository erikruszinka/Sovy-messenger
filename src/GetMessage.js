import React, { Component } from "react";
import { Link } from "@reach/router";

class GetMessage extends Component {
    render() {
        return (
            <div className="">

                <Link to="/get-message">
                    <button>get</button>
                </Link>


            </div>
        );
    }
}

export default GetMessage;