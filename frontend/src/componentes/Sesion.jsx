import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Sesion extends Component{

  constructor(props){
    super(props);
    this.state={
      dataUser: [],
      formInsertar: false,
      form: {
        correoElectronico:'',
        contraseña:"",
      }
    };
  }
peticionGet=()=>{
  axios.get('https://Servicios.melani2003a.repl.co/api/usuario')
  .then(res=>{
    console.los(res.data)
   this.setState({
     dataUser: res.data
   })

  }).catch(error=>{
    console.log(error.message)
  })

}

 formularioInsertar= ()=>{
  this.setState({  
    formInsertar: !this.state.formInsertar
  })
 }
 
 handleChange=async(e)=>{
   e.persist();
   await this.setState({
     form:{
       ...this.state.form,
      [e.target.name]: e.target.value
     }
   })
   console.log(this.state.form)
  }
 
    componentDidMount (){
      this.peticionGet();
    }
 
 
   render () {
     console.log(this.state.dataUser);
     console.log(this.props.numero);
     const datosForm = this.state.form

     return(
      <div className="">
              
        <form className="Formulario">
        <h3 className="text-center pb-3 text-primary"> Iniciar Sesion</h3>
        <div className="mx-auto">
              
        <label For="Type">correoElectronico:<span className="obligate text-primary">*</span></label>
        <input type="email" className="form-control "  required=""  name="correo" id="exampleInputEmail1" onChange={this.handleChange} value={datosForm.correo}
         />
        
          <label htmlFor="Contraseña">contraseña: <span className="obligate text-primary">*</span></label>
          <input type="password" className="form-control " id="password"  name="password" onChange={this.handleChange} value={datosForm.contraseña}
             />
         
          
        </div>
          


        <Link to="/roles">
             <button name="Submit" type="submit" className="btn-1 " onClick={()=>this.peticionPost()}>
                  Iniciar Sesion</button>
                  </Link>
                  
         
                      </form>
                            </div>
     )
   }

  }
   
  

  export default Sesion;
      








