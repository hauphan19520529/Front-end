import React, {useState} from 'react';

var lp = window.location.pathname.slice(1)
lp = lp.replace(/%20/g, " ")

function Taoanhtren (propz) {
    var srcc = "/img/" + lp + "/" + propz.hinh + ".jpg"
    return <img className = "slidetren" src = {srcc}></img>
 
    
}
function Taoanhduoi (propz) {
    var srcc = "/img/" + lp + "/" + propz.hinh + ".jpg"
    return <img className = "slideduoi" src = {srcc}></img>
 
    
}

export default Taoanhtren
export {Taoanhduoi}