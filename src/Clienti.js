import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Clienti extends Component{

    constructor(props){
        super(props);

        this.state={
            clienti:[],
            modalTitle:"",
            ClienteId:0,
            Cognome:"",
            Nome:"",
            Telefono:"",
            Email:""
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Clienti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({clienti:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeCognome =(e)=>{
        this.setState({Cognome:e.target.value});
    }

    changeNome =(e)=>{
        this.setState({Nome:e.target.value});
    }

    changeTelefono =(e)=>{
        this.setState({Telefono:e.target.value});
    }

    changeEmail =(e)=>{
        this.setState({Email:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Cliente",
            ClienteId:0,
            Cognome:"",
            nome:"",
            Telefono:"",
            Email:""
        });
    }

    editClick(emp){
        this.setState({
            modalTitle:"Edit Cliente",
            ClienteId:emp.ClienteId,
            Cognome:emp.Cognome,
            Nome:emp.Nome,
            Telefono:emp.Telefono,
            Email:emp.Email
        });
    }

    createClick(){
        fetch(variables.API_URL+'Clienti',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Cognome:this.state.Cognome,
                Nome:this.state.Nome,
                Telefono:this.state.Telefono,
                Email:this.state.Email
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            //alert(result);
            this.refreshList();
        // },(error)=>{
        //     alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'Clienti',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ClienteId:this.state.ClienteId,
                Cognome:this.state.Cognome,
                Nome:this.state.Nome,
                Telefono:this.state.Telefono,
                Email:this.state.Email
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            //alert(result);
            this.refreshList();
        // },(error)=>{
        //     alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Clienti/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            //alert(result);
            this.refreshList();
        // },(error)=>{
        //     alert('Failed');
        })
        }
    }

    render(){
        const {
            clienti,
            modalTitle,
            ClienteId,
            Cognome,
            Nome,
            Telefono,
            Email
        }=this.state;

        return(
            <div>
                <div class="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2 mt-3">
                        <button type="button" className="btn btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.addClick()}>Nuovo</button>
                    </div>
                </div>
                <div className="row titolo">
                    <div className="col-md-2">Cognome</div>
                    <div className="col-md-2">Nome</div>
                    <div className="col-md-2">Telefono</div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-2"></div>
                </div>
                {clienti.map(emp=>
                    <div className="row cliente" key={emp.ClienteId}>
                        <div className="col-md-2">{emp.Cognome}</div>
                        <div className="col-md-2">{emp.Nome}</div>
                        <div className="col-md-2">{emp.Telefono}</div>
                        <div className="col-md-3">{emp.Email}</div>
                        <div className="col-md-3">
                            <button type="button" className="btn btn-outline-warning mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.editClick(emp)}>Modifica</button>
                            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.deleteClick(emp.ClienteId)}>Cancella</button>
                        </div>
                    </div>
                )}

                <div class="modal fade" id="exampleModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">{modalTitle}</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <span className="input-group-text">Cognome</span>
                                            <input type="text" className="form-control" value={Cognome} onChange={this.changeCognome}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <span className="input-group-text">Nome</span>
                                            <input type="text" className="form-control" value={Nome} onChange={this.changeNome}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <span className="input-group-text">Telefono</span>
                                            <input type="text" className="form-control" value={Telefono} onChange={this.changeTelefono}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <span className="input-group-text">Email</span>
                                            <input type="text" className="form-control" value={Email} onChange={this.changeEmail}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {ClienteId==0 ? <button type="button" className="btn btn-primary" onClick={()=>this.createClick()}>Create</button> : null}
                                {ClienteId!=0 ? <button type="button" className="btn btn-warning" onClick={()=>this.updateClick()}>Update</button> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}