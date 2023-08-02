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
        <form method="post" onSubmit={handleLogin} >
        <h1>Login</h1>
        <div>
        <label className="form-element" htmlFor="name">Username:</label>
        <input className="form-element" type="text" id="name" name="name" required/>
        </div>
        <div>
        <label className="form-element" htmlFor="password">Password:</label>
        <input className="form-element" type="password" id="password" name="password" required/>
        </div>
        <div>
        <button className="form-element" type="submit">Login</button>
        </div>
        <div>
        <label  id="already" className="form-element" htmlFor="login">Dont have an account?</label>
        <button className="form-element" onClick={redirect} >Sign Up</button>
        </div>
    </form>
    )
}
export default Login;