import React from "react";

function Table ({children}){
    return(
        <table class="table table-striped table-hover" id="main">
            {children}
        </table>

    )
}


export default Table