import React from "react";
import {Outlet} from "react-router-dom"

export class Navigation extends React.Component {

    pageStyles = {display: "flex", justifyContent: "center", alignContent: "center", border: "1px solid black", width: "100vw", height: "100vh"}

    render() {
        return <div>
            <nav>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/cart">Cart</a>
                </div>
            </nav>
            <div style={this.pageStyles}>
                <Outlet/>
            </div>
            <footer>
                <div>Footer link 1</div>
                <div>Footer link 2</div>
                <div>Footer link 3</div>
                <div>Footer link 4</div>
            </footer>
        </div>
    }
}