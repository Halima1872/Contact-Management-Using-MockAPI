import { useNavigate } from 'react-router-dom';
import Storage from './Storage';
const Login = () => {
    const navigateTo = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault()
        const username = e.target[0].value;
        const password = e.target[1].value;
        const data = await Storage.getItems('users');
        const user = data.find((item) => item.username === username && item.password === password);
        if (user) {
            alert('Login successful');
            console.log(user.id);
            navigateTo('/Welcome', { state: { userId: user.id } });
        }
        else {
            alert('Invalid Credentials');
        }
        

    }
    function redirect() {
        navigateTo('/');
    }

    return (
        <form method="post" onSubmit={handleLogin}>
            <h2 className="mt-3">Login</h2>
            <div className="mb-3 container">
            <label className="form-label" htmlFor="name">Username:</label>
            <input className="form-element form-control" type="text" id="name" name="name"  required />
            </div>
            
            <div className="mb-3 container">
            <label className="form-element form-label" htmlFor="password">Password:</label>
            <input className="form-element form-control"  aria-describedby="passwordHelpBlock" type="password" id="password" name="password" required />
            </div>
            <div className="mb-3 container">
            <button className="form-element btn btn-primary mb-3" type="submit">Login</button>
            </div>
            <div className="mb-3 ">
            <label  id="already" className="form-label mb-3" htmlFor="login">Dont have an account?</label>
            <button className="form-element btn btn-primary mb-3 ms-3 mt-2" onClick={redirect} >Sign Up</button>
            </div>
            
        
        
        </form>
    )
}
export default Login;