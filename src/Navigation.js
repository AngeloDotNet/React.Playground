import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            //                 Home Page
            //             </NavLink>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/clienti">
            //                 Clienti
            //             </NavLink>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                {/* <a class="navbar-brand" asp-controller="Home" asp-action="Index"><img src="~/logo.svg" height="30" alt="Logo MyCourse"></a> */}
                <button class="navbar-toggler" data-target="#navbar" data-toggle="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a className="nav-link" to="/">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a className="nav-link" to="/clienti">Catalogo corsi</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}