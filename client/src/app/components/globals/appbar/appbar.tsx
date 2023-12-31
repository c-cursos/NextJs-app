

import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import "./appbar.css";


export default function Appbar() {
   const 
      [ open, setopen ] = useState( false );

   return( <appbar>
      <appbar-body>
         <appbar-brand
            visible={ `${ open && "active" }` }
            onClick={ () => setopen( !open ) } >
                ceo
         </appbar-brand>
         <appbar-menu>
            <menu className={ `${ open && "is-active" }` }>
               <Link to="/">Home</Link>
               <Link to="/users-add" >Users</Link>
               <Link to="/about" >About</Link>
               <Link to="/teste" >Teste</Link>
            </menu>
         </appbar-menu>
         <appbar-options>
                menu
         </appbar-options>
      </appbar-body>
   </appbar> );
}


