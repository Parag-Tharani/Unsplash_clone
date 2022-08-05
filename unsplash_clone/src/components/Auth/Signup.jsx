import React from "react";
import "../Auth/Auth.css"
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { formSchema } from "./SignupSchema";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../Redux/action";
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import GoogleIcon from '@mui/icons-material/Google';

export const SignUp = () => {
    const [State, setState] = React.useState(true)
    const [googleState, setGoogleState] = React.useState(true)
    const [googleData, setGoogleData] = React.useState({})
    const [msg, setMsg] = React.useState(false)
    const defaultProfile = "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = () => {
        
        fetch(`http://localhost:8080/usersData`)
        .then((res) => (res.json()))
        .then((res) => res.forEach(items => {
            if(items.email === values.email){
                setMsg(true)
                setState(true)
            }
        },
        setState(false)
        ))
    }

    React.useEffect(() => {

        const payload = {
            firstname:values.firstname,
            lastname: values.lastname,
            email:values.email,
            username:values.username,
            password:values.password,
            profilepic: defaultProfile,
            token: uuid()
        }

        if(State === false){
            fetch(`http://localhost:8080/usersData`,{
                method:"POST",
                body: JSON.stringify(payload),
                headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then((res) => res.json())
                .then(() => setMsg(false), dispatch(isLogin(true)), localStorage.setItem("AuthToken", JSON.stringify(payload.token)), setState(true), navigate("/"))
                .catch((err) => console.log(err))
                // navigate("/")
        }
        // eslint-disable-next-line
    },[State])




    const {values, touched, errors, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit
    })



    const clientId = "975974025399-697jnr8632c8q8v0kfdg8efsr0u0grmm.apps.googleusercontent.com"
    const onSuccess = (res) => {

        const payload = {
            firstname:res.profileObj.name,
            lastname: res.profileObj.familyName,
            email:res.profileObj.email,
            username:res.profileObj.givenName,
            password:"",
            profilepic: res.profileObj.imageUrl,
            token: uuid()
        }
        setGoogleData(payload)

        fetch(`http://localhost:8080/usersData`)
        .then((response) => (response.json()))
        .then((response) => response.forEach(items => {
            if(items.email === res.profileObj.email){
                localStorage.setItem("AuthToken", JSON.stringify(items.token))
                setGoogleState(true)
                dispatch(isLogin(true))
                navigate("/")
            }
        },
        setGoogleState(false)
        ))
    }

    React.useEffect(() => {

    if(googleState === false){
        fetch(`http://localhost:8080/usersData`,{
            method:"POST",
            body: JSON.stringify(googleData),
            headers:{
                    "Content-Type":"application/json"
            }
           })
            .then((res) => res.json())
            .then(() => dispatch(isLogin(true)), localStorage.setItem("AuthToken", JSON.stringify(googleData.token)), navigate("/"))
            .catch((err) => console.log(err))
    }
    // eslint-disable-next-line
    },[googleState])

    const onFailure = (res) => {
        console.log("Login Failed, res:", res)
    }

    React.useEffect(() => {
        function start(){
            gapi.client.init({
                clientId:clientId,
                cookiepolicy: 'single_host_origin',
                scope:""
            })
        }

        gapi.load("client:auth2", start)
    },[])




    return (
        <Box id="signupContainer" sx={{display:"flex"}}>

            <Box className="imgPart" sx={{display:"flex", flexDirection:"column", color:"white", padding: "5%"}}>
                <img alt="Logo" style={{boxSizing:"border-box",marginBottom:"10%", width:40}} src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg" />
                <h1 style={{fontSize:"48px"}}>Creation Starts Here</h1>
                <h2>Access 4,005,353 free, high-resolution photos you can’t find anywhere else</h2>
            </Box>



            <Box className="formPart" sx={{boxSizing:"border-box", display:"flex", height:"100vh", padding:"400px 10% 10% 10%", overflowY:"scroll", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

            <h1 style={{fontSize:48}}>Join Unsplash</h1>
            <p style={{marginTop:-10}}>Already have an Account? <Link className="onHover" to="/login" style={{marginLeft:-8, textDecoration:"underline"}}>Login</Link> </p>
            


            <Box>
                <GoogleLogin
                clientId={ clientId }
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="googleLogin"><GoogleIcon sx={{marginRight:2}}/>Signup with Google</button>
                  )}
                buttonText="Login"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={'single_host_origin'}
                />
            </Box>
            <p style={{fontSize:"14px", color:"grey", marginTop:10}}> OR </p>

            <Box id="msg">
                {msg? <p>This Email is already Registered.<Link className="onHover" to="/login" style={{color:"rgb(36, 36, 36)", textDecoration:"underline"}}>Login?</Link> </p>:null}
            </Box>


            <Box sx={{width:"100%", marginTop:-1}}>
            <form onSubmit={handleSubmit}>

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <div>
            <label className={values.firstname === "" && touched.firstname?"inputErrorLabel":"inputLabel"} htmlFor='firstname'>First Name</label><br />
            <input
            id='firstname'
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'text'}
            className={values.firstname === "" && touched.firstname?"inputError":"inputValue"}/>
            </div>

            <div>
            <label className={values.lastname === "" && touched.lastname?"inputErrorLabel":"inputLabel"} htmlFor='lastname'>Last Name</label><br />
            <input id='lastname'
            type={'text'}
            value={values.lastname}
            className={values.lastname === "" && touched.lastname?"inputError":"inputValue"}
            onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
            </Box>

            <div>
            <label className={((values.email === "" || errors.email) && touched.email)?"inputErrorLabel":"inputLabel"} htmlFor='email'>Email</label><br />
            <input
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type={"email"} 
            className={((values.email === "" || errors.email) && touched.email)?"inputError":"inputValue"}/>
            </div>

            <div>
            <label className={values.username === "" && touched.username?"inputErrorLabel":"inputLabel"} htmlFor='username'>Username</label><br />
            <input id='username'
            type={"text"}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={values.username === "" && touched.username?"inputError":"inputValue"}/>
            </div>

            
            <div>
            <label className={((values.password === "" || errors.password) && touched.password)?"inputErrorLabel":"inputLabel"} htmlFor='password'>Password</label><br />
            <input id='password'
            type={"password"}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={((values.password === "" || errors.password) && touched.password)?"inputError":"inputValue"}/>
            </div>
            <br />

            <input type={"submit"} id="submit" className="join"/>
        </form>
        </Box>
        </Box>
        </Box>
    )
}