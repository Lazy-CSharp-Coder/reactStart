import { myImage} from "./images/testreact.jpg";

function Hello()
{
    const userName = "Harald";
    
    return( 
        <>
            <h1>Velkommen {userName}</h1>
            <img src={myImage} alt="fant ikke img"/>
        </>
    );
}

export { Hello }