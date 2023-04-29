import React, { useReducer } from "react";
import Form from "./Form";
import reducer from "./reducers";
import ProfileView from './ProfileView';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    form: {
      userName: '',
      userLast: '',
      email: '',
      password: '',
      confirm:'',
      send: 'no',
    },
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    
    
    if (name === 'userName') {
      // Limpiar errores anteriores
      dispatch({
        type: 'reset_errors',
        payload: { name }
      });

      // Nombre
      if (value.length <= 2) {
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campos "Nombre" tiene que tener mínimo 2 carácteres.' }
        })
      }
    }

   
   
   
    if (name === 'userLast') {
      // Limpiar errores anteriores
      dispatch({
        type: 'reset_errors',
        payload: { name }
      });

      // Nombre
      if (value.length <= 2) {
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campos "Apellido" tiene que tener mínimo 2 carácteres.' }
        })
      }
    }
    

    if (name === 'email') {
      // Limpiar errores anteriores
      dispatch({
        type: 'reset_errors',
        payload: { name }
      });

      // Nombre
      if (value.length <= 5) {
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campos "Correo" tiene que tener mínimo 5 carácteres.' }
        })
      }
    }


    if (name === 'password') {
      // Limpiar errores anteriores
      dispatch({
        type: 'reset_errors',
        payload: { name }
      });

      // Nombre
      if (state.form.confirm !== value) {
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campo "Contraseña" no es igual a "Confirmar Contraseña".' }
        })

    
      }else if (value.length <= 7){
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campo "Contraseña" debe tener al menos 8 caracteres".' }
        })
      }
    }


    if (name === 'confirm') {
      // Limpiar errores anteriores
      dispatch({
        type: 'reset_errors',
        payload: { name }
      });

      // FIX ERROR
      if (state.form.password === value) {
        dispatch({
          type: 'reset_errors',
          payload: { name: 'password' }
        });
      }

      // Nombre
      if (state.form.password !== value) {
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campo "confirmar contraseña" no es igual a "contraseña".' }
        })

    
      }else if (value.length <= 7){
        dispatch({
          type: 'errors',
          payload: { name, value: 'El campo "Confirmar contraseña" debe tener al menos 8 caracteres".' }
        })
      }
    }

    
    
    dispatch({
      type: "form",
      payload: { name, value },
    });
  };

  
  
  return (
    <div>
      <h1>Registro</h1>
      <Form reduState={state} dispatch={dispatch} handleChange={handleChange} />
      <ProfileView formState={state.form}/>
    </div>
  );
};

export default Home;