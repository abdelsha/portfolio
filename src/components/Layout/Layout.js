import React from "react";
import Aux from "../../hoc/Aux";
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

function Layout(props) {
    return (
        <Aux >
            <MainNavigation/>
            <main className={classes.body}>
                {props.children}
            </main>

        </Aux>
    );
}

export default Layout;