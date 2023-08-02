import Storage from "./Storage";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css'
export default function Signup() {
    const navigateTo = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    
        const handleSubmit = async(e) => {
            e.preventDefault()
            const data = await Storage.getItems('users');
            const username = e.target[0].value;
            const user = data.find((item) => item.username === username);
            if (user) {
                alert('User already exists! Please register with a different username or Login!');
            }
            else{
            const newItem = {username,email,password,contactNumber};
            const response = await Storage.setItem('users',newItem)
            if(response){
            setUsername('');
            setEmail('');
            setPassword('');
            alert('User registered successfully! Please login to continue!');
            navigateTo('/Login');
            }
            }
    }
    function redirect() {
        navigateTo('/Login');
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div>
            <label className="form-element" htmlFor="name">Username:</label>
            <input className="form-element" type="text" id="name" name="name" 
            value= {username} required
            onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            <label className="form-element" htmlFor="email">Email:</label>
            <input className="form-element" type="email" id="email" name="email" 
            value= {email} required
            onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            <label className="form-element" htmlFor="contactNumber">Contact Number:</label>
            <input className="form-element" type="number" id="contactNumber" name="contactNumber" 
            value= {contactNumber} required
            onChange={(e) => setContactNumber(e.target.value)} />

            </div>
            <div>
            <label className="form-element" htmlFor="password">Password:</label>
            <input className="form-element" type="password" id="password" name="password"
            value= {password} required
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <button className="form-element" type="submit">Sign Up</button>
            </div>
            <div>
            <label  id="already" className="form-element" htmlFor="login">Already have an account?</label>
            <button className="form-element" onClick={redirect} >Login</button>
            </div>
            
        
        </form>
    )
}