import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Form_denuncia extends Component{

    constructor(props){
      super(props);
      this.state={
        dataUser: [],
        formInsertar: false,
        form: {
          id: '',
          descripcion_denuncia: '',
          correoElectronico:'',
          telefono:'',
          id_Usuario:'',
        }
      };
    }
  peticionGet=()=>{
    axios.get('https://oav-back.herokuapp.com/denuncias/getdenuncia')
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
    await axios.post('https://oav-back.herokuapp.com/api/denuncias/nueva', this.state.form)
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
       console.log(this.state.dataPet);
       console.log(this.props.numero);
       const datosForm = this.state.form

       return(
        <div className="">
        
          <form className="Formulario_1" action="mailto:melodialvarez18@gmail.com">
          <h3 className="text-center pb-3 text-primary"> Denuncia</h3>
          <div className="mx-auto">

            <label htmlFor="ID">ID: <span className="obligate text-primary">*</span></label>
            <input type="text" className="form-control mb-2"  required=""  name="id" id="id" onChange={this.handleChange} value={this.state.dataUser.length+1}
              />
           <label htmlFor="Name">descripcion_denuncia:<span className="obligate text-primary">*</span></label>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  required=""  name="descripcion_denuncia"  onChange={this.handleChange} value={datosForm.descripcion_denuncia}
               />
        
           <label For="Type">correoElectronico:<span className="obligate text-primary">*</span></label>
           <input type="email" className="form-control "  required=""  name="correo" id="exampleInputEmail2" onChange={this.handleChange} value={datosForm.correo}
           />
          
            <label htmlFor="Telefono">telefono: <span className="obligate text-primary">*</span></label>
            <input type="zip" className="form-control mb-2" id="zip"  name="telefono" onChange={this.handleChange} value={datosForm.telefono}
               />
             <label htmlFor="ID">id_usuario: <span className="obligate text-primary">*</span></label>
            <input type="zip" className="form-control mb-2"  required=""  name="id_Usuario" onChange={this.handleChange} value={datosForm.id_Usuario}
              />
           
           
            
          </div>
            

               <button name="Submit" type="submit" className="btn btn-primary btn-s btn-block mx-auto col-4 mt-4 mb-5" onClick={()=>this.peticionPost()}>
                    Denunciar</button>
                    
           
                        </form>
                              </div>
       )
     }

    }
     
    

    export default Form_denuncia;
        
