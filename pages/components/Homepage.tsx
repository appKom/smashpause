import React, {FC, useState} from "react";
import Button from "./atoms/Button";


const Homepage: FC = () => {
    const [showMatch, setShowMatch] = useState(false);
    const [create, setCreate] = useState(false);
    const [back, setBack] = useState(false);
   

    



    const log = () => {
        console.log("hei")
    }

    const joinMatch = () => {
       

    }

    const changeMatchVisibility = () => {

        if (showMatch) setShowMatch(false)
        else setShowMatch(true)
    }

    const crMatch = () => {

        if (create) setCreate(false)
        else setCreate(true)
    }

    return (
        <div>
            

            <h1>Smashpause</h1>
            <Button name="Bli med i kamp" func={changeMatchVisibility} />
            <Button name="Opprett kamp" func={crMatch} />
            <Button name="Gå tilbake" func={changeMatchVisibility}/>


            {showMatch ? <div id="joinMatch">
                Det er x aktive kamper
            </div>: null}

           

            {create ? <div id="createMatch" >
                Offentlig eller privat?
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>: null}

        </div>


    );

}



export default Homepage;

