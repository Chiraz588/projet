import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import { logout } from '../../redux/Actions/useractions'
import "./Navbar.css"
function Navbar() {
    const auth = useSelector(state => state.UserReducer.auth)
    const dispatch= useDispatch()
    return (
        <div>
              <nav class="navMenu">

                  {auth ?  <div>
                    <Link  to='/Home' >  <a href="#">Home</a> </Link>
                    <Link  to='/SignIn' >  <a href="#" onClick={()=>dispatch(logout())}  >LOGOUT</a> </Link>
                  </div> :
                  <div>
              <Link  to='/Home' >  <a href="#">Home</a> </Link>      
          <Link  to='/SignUp' >   <a href="#">Sign Up</a></Link>
          <Link  to='/SignIn' >   <a href="#">Sing In</a></Link>
          <Link  to='/invited' >   <a href="#">Invited</a></Link>
          <Link  to='/ContactPage' >   <a href="#">contact</a></Link>
                      </div>  }
    
    
      <div class="dot"></div>
    </nav>
        </div>
    )
}

export default Navbar
