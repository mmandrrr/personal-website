import { useEffect } from "react";

import Content from "./Content/Content";
import Design from "./Design/Design";


const Main = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded')
    },[])

    return (
        <main className="main">
            <Design />
            <Content />
        </main>       
    )
}

export default Main