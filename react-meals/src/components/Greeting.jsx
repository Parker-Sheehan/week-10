import React from "react";
import Card from "../UI/Card";
import styles from "./Greeting.module.css"

const Greeting = () => {

    return(
        <React.Fragment>
            <img className={styles.Banner} src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="" />
            <Card className={styles.Greeting}>
                <h2>This food is the best ever you will eat it all</h2>
                <br />
                <p>welcome to hell baby boy today on the menu we have hell cakes with tartar sauce nothing else will be served and you must love it all</p>
                <br />
                <p>eat the meat or suffer the great wrath of the laviathan</p>
            </Card>
        </React.Fragment>
    )
}

export default Greeting