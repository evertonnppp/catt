import './Main.css'
import React from'react'
import Header from'./Header'


export default props =>
<React.Fragment>
    <Header {...props} />
           <main className="content container">
               <div className="p-1 mt-1">
                   {props.children}

               </div>
           </main>

</React.Fragment>