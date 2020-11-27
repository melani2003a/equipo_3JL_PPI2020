import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state={
      dataUser: [],
      formInsertar: false,
      form: {
        id: '',
        rol_usuario: '',
        nombre: '',
        apellidos: '',
        correoElectronico:'',
        contraseña:'',
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
peticionPost= async ()=>{
  delete this.state.form.id;
  await axios.post('https://Servicios.melani2003a.repl.co/api/nuevo-registro', this.state.form)
  .then(res=>{
    //this.formularioInsertar();
    this.peticionGet(); 
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
      <form className="Formulario" >
        <h3 className="text-center pb-3 text-primary"> Registro</h3>
        <div className="mx-auto">
          <label htmlFor="ID">ID: <span className="obligate text-primary">*</span></label>
          <input type="text" className="form-control mb-2"  required=""  name="id" id="id" onChange={this.handleChange} value={this.state.dataUser.length+1}
            />
         <label htmlFor="Name">rol_Usuario:<span className="obligate text-primary">*</span></label>
          <input type="text" className="form-control mb-2"  required=""  name="rol_Usuario"  onChange={this.handleChange} value={datosForm.rol_Usuario}
             />
      
          <label htmlFor="Name">nombre:<span className="obligate text-primary">*</span></label>
          <input type="text" className="form-control mb-2"  required=""  name="nombre"  onChange={this.handleChange} value={datosForm.nombre}
             />
         
          <label htmlFor="Lats name">apellidos:<span className="obligate text-primary">*</span></label>
          <input type="text" className="form-control mb-2"  required=""  name="apellidos"  onChange={this.handleChange} value={datosForm.apellidos}
             />

         <label For="Type">correoElectronico:<span className="obligate text-primary">*</span></label>
         <input type="email" className="form-control "  required=""  name="correo" id="exampleInputEmail" onChange={this.handleChange} value={datosForm.correo}
          />
        
          <label htmlFor="Description">contraseña: <span className="obligate text-primary">*</span></label>
          <input type="password" className="form-control mb-2" id="password"  name="contraseña" onChange={this.handleChange} value={datosForm.contraseña}
             />
         
          
        </div>
    
        
                 <Link to="/roles">
                 <button className="btn-26 btn-primary btn-s btn-block mx-auto col-4 mt-4 mb-5" onClick={()=>this.peticionPost()}>
                  Registrarse</button>
                  </Link>
         
        
    
      </form>
    </div>
    
        )
      }
    }
    
    
    
    export default  Registro;
     


