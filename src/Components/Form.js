import React from 'react'; 
 
const Form = ({reduState, handleChange, dispatch}) => {
  const { userName, userLast, email, password, confirm, send } = reduState.form;
  const { errors } = reduState;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'send',
      payload: { value: 'no' }
    });
    
    // Validar Errores
    if (Object.keys(errors).length !== 0) {
      dispatch({
        type: 'send',
        payload: { value: 'error' }
      });
      return null;
    }

    // Success
    dispatch({
      type: 'send',
      payload: { value: 'si' }
    });
  }

  return(
    <form action="" onSubmit={handleSubmit} autoComplete='off'>
      { send === 'no' && (<h1>No se ha enviado el formulario</h1>) }
      { send === 'si' && (<h1>Gracias por enviarnos sus datos!!</h1>) }
      { send === 'error' && (<h1>Hay errores en el formulario</h1>) }
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
      <br />
      
      
      <span>Errores encontrados en el formulario:</span>
      <ul>
        {Object.keys(errors).map((key,i) => (
          <li key={i}>{errors[key]}</li>
        ))}
      </ul> 
      <button type="submit">Enviar</button>
    </form> 
  )
}

export default Form;