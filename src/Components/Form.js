import React from 'react';

const Form = (props) =>{
 
    const{userName, userLast, email, password, confirm, handlChange}= props;
    
    return(
        <form action="">
            <label htmlFor="userName">Nombre</label>
            <input type="text" placeholder="Ej Gabriela" name="userName" value={userName}onChange={handlChange} />
            <label htmlFor="userLast">Apellido</label>
            <input type="text" placeholder="Ej Carmona" name="userLast" value={userLast}onChange={handlChange} />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Ej gabriela@gmail.com" name="email" value={email}onChange={handlChange} />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" value={password} onChange={handlChange}/>
            <label htmlFor="confirm">Confirmar Contraseña</label>
            <input type="password" name="confirm" value={confirm} onChange={handlChange}/>
            <button type="submit">Enviar</button>
        
         </form>
    )

}

export default Form;

// class Form extends Component{
//     render(){
//         const{userName, email, password, handlChange}= this.props;
//         return(
//             <form action="">
//                 <label htmlFor="userName">Usuario</label>
//                 <input type="text" placeholder="Ej gabriela19" name="userName" value={userName}onChange={handlChange} />
//                 <label htmlFor="email">Email</label>
//                 <input type="email" placeholder="Ej gabriela@gmail.com" name="email" value={email}onChange={handlChange} />
//                 <label htmlFor="password">Contraseña</label>
//                 <input type="password" name="password" value={password} onChange={handlChange}/>
//                 <button type="submit">Enviar</button>

//             </form>
//         )
//     }
// }

// export default Form;