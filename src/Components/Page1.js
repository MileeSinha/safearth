import React from 'react';
import {Link} from "react-router-dom";
 
function Page1()
{
    return(
        <div>
        <p>this is page 1</p>
        <br/>
        <p>click the button below</p>
        <Link to="./Components/Page2">
            <button>go to page 2</button>
        </Link>
        </div>
    )
}
export default Page1;