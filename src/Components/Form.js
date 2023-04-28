import React from 'react'; 
 
const Form = ({reduState, handleChange}) =>{
  const { userName, userLast, email, password, confirm } = reduState.form;
     
    return( 
        <form action=""> 
            <label htmlFor="userName">Nombre</label> 
            <input type="text" placeholder="Ej Gabriela" name="userName" value={userName} onChange={handleChange} /> 
            <label htmlFor="userLast">Apellido</label> 
            <input type="text" placeholder="Ej Carmona" name="userLast" value={userLast} onChange={handleChange} /> 
            <label htmlFor="email">Email</label> 
            <input type="email" placeholder="Ej gabriela@gmail.com" name="email" value={email}onChange={handleChange} /> 
            <label htmlFor="password">Contraseña</label> 
            <input type="password" name="password" value={password} onChange={handleChange}/> 
            <label htmlFor="confirm">Confirmar Contraseña</label> 
            <input type="password" name="confirm" value={confirm} onChange={handleChange}/> 
            <button type="submit">Enviar</button>
         </form> 
    )
}
export default Form;





// class Form extends Component{
//     render(){
//         const{userName, email, password, handleChange}= this.props;
//         return(
//             <form action="">
//                 <label htmlFor="userName">Usuario</label>
//                 <input type="text" placeholder="Ej gabriela19" name="userName" value={userName}onChange={handleChange} />
//                 <label htmlFor="email">Email</label>
//                 <input type="email" placeholder="Ej gabriela@gmail.com" name="email" value={email}onChange={handleChange} />
//                 <label htmlFor="password">Contraseña</label>
//                 <input type="password" name="password" value={password} onChange={handleChange}/>
//                 <button type="submit">Enviar</button>

//             </form>
//         )
//     }
// }

// export default Form;