import React,{useState} from 'react';
import Form from './Form';
import ProfileView from './ProfileView';

const Home= () =>{
 
   
    const [userInfo, setUserInfo] = useState({

        userName: 'Gabriela',
        userLast: 'Carmona',
        email: 'gaby@gmail.com',
        password: '',
        confirm: '',
    });

    
    const handlChange = (event) =>{
        const{target} = event;
        console.log(target.name)
      
        setUserInfo({
            ...userInfo,
            [target.name] : target.value,
        })
    }

    return(
        <div>
         <h1>Registro</h1>
         <Form userName={userInfo.userName} userLast={userInfo.userLast} email={userInfo.email} password={userInfo.password} confirmPassword={userInfo.confirm} handlChange={handlChange}  />
         <ProfileView userName={userInfo.userName} userLast={userInfo.userLast} email={userInfo.email} password={userInfo.password} confirm={userInfo.confirm}/>
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