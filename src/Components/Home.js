import React,{useReducer} from 'react'; 
import Form from './Form'; 
//import ProfileView from './ProfileView';

const initState = {
  form: {
    username: '',
  },
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'form':
      return {
    ...state,
    form: {
      ...state.form,
      [action.payload.name]: action.payload.value,
    }
    };
    case 'errors':
      return {
    ...state,
    errors: {
      ...state.errors,
    }
    };
    default:
      throw new Error();
  }
}
 
const Home= () =>{
  const [state, dispatch] = useReducer(reducer, initState);
     
    const handlChange = (event) =>{ 
        const{target} = event;
        console.log(target.name)
    
    dispatch({type: 'form', action: {name: target.name, value: target.value}});
    }
 
    return( 
        <div> 
         <h1>Registro</h1> 
         <Form reduState={state} handlChange={handlChange} /> 
         {/*<ProfileView userName={userInfo.userName} userLast={userInfo.userLast} email={userInfo.email} password={userInfo.password} confirm={userInfo.confirm}/>*/}
        </div> 
    ) 
}




export default Home;


// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//            userName:'',
//            email: '',
//            password: '',
//         };
//         this.handlChange= this.handlChange.bind(this);
//     }

//      handlChange(event){
//         const{target} = event;
//         console.log(this.handlChange)
//         this.setState({ [target.name] : target.value})
//      }

//     render(){
//         const {userName, email, password}= this.state;
//         return(
//             <div>
//                 <h1>Registro</h1>
//                 <Form userName={userName} email={email} password={password} handlChange={this.handlChange.bind(this)} />
//                 <ProfileView userName={userName} email={email} password={password}/>
//             </div>
//         )
//     }
// }

// export default Home;


 // const[userName, setUsername]= useState('Gabriela');
    // const[email, setEmail]= useState('gaby@gmail.com');
    // const[password, setPassword]= useState();
    // const[confirmPassword, setConfirmpassword]= useState();