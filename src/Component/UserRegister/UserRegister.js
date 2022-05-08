import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './UserRegister.css'
import { auth, provider } from '../../Firebase/Firebase';

function UserRegister() {
    const history=useHistory();
    const [uname,setUname]=useState();
    const [upswd,setUpswd]=useState();
    const [loginname,setLogingname]=useState();
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(uname, upswd).then((auth)=>{
            if(auth){
                console.log(auth)
                history.push('/')
                window.location.href="/"
                return auth.user.updateProfile({
                  displayName:loginname
                  
                })
            }
        })
        .catch(error => alert(error.message))
    }
    const onGoogle=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((result) => {
        
            history.push('/')
                window.location.href="/"
          })
            .catch((error) => {
              alert(error.message)
            })

    }
  return (
    <div className='LoginContainer'>
    <div className="Content">
    <div className='LoginLogo'>
    <Link onClick={() => {window.location.href="/"}} style={{ textDecoration: 'none' ,color:'white'}}><img className='logo' src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="not" /></Link> 
    </div>
    <div className='SignInContainer'>
     <p style={{fontSize:'30px',marginLeft:'12px',marginTop:'10px'}}>Create account</p>
     <div class="InputContainer">
     <label for="uname" style={{marginTop:'20px'}} className="inputs"><b>Your name</b></label>
<input type="text" placeholder="Enter Username" required className="inputs" value={loginname} onChange={(e)=>setLogingname(e.target.value)}/>
<label for="uname" style={{marginTop:'20px'}} className="inputs"><b>Email or mobile phone number</b></label>
<input type="text" placeholder="Enter Username" required className="inputs" value={uname} onChange={(e)=>setUname(e.target.value)}/>

<label for="psw" className="inputs"><b>Password</b></label>
<input type="password" placeholder="Enter Password"  required className="inputs" value={upswd} onChange={(e)=>setUpswd(e.target.value)}/>


<small className="inputs" >By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
<label>
  <input type="checkbox" checked="checked" name="remember"  className="inputs"/> Keep me signed in. 
</label>
<button type="submit" className="inputs" onClick={register}>Create your Amazon account</button>
<small className='google' onClick={onGoogle}>Create with Google</small>
</div>
    
    </div>
    </div>
</div>
  )
}

export default UserRegister