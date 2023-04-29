import React from "react";

const ProfileView= ({ formState }) =>{
  const {userName, userLast, email, password, confirm} = formState;

  return(
    <div>
      <h3>Nombre:{userName}</h3>
      <h3>Apellido:{userLast}</h3>
      <h3>Email:{email}</h3>
      <h3>Contraseña:{password}</h3>
      <h3>Confirmar Contraseña:{confirm}</h3>
    </div>
  )
}

export default  ProfileView;

// class ProfileView extends Component{
//     render(){
//         const {userName, email, password} = this.props
        
//         return(
//           <div>
//             <h1>{userName}</h1>
//             <h3>{email}</h3>
//             <h3>{password}</h3>
//           </div>
//         )
//     }
// }

// export default ProfileView;