import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    
    <div id= 'card'>
      <div id='card-content'>
        <div id ="card-title">
          <h2>Login</h2>
        </div>
        <form className="form">
          <label id="labelEmail">Email</label>
          <input id="user-email" className="form-content" type="email"/>
          <div className="form-border"></div>
          <label id="labelPass">Password</label>
          <input id="user-password" className="form-content" type="password" name="password" required />
          <div className='form-border'></div>
          <legend id="forgot-pass">Forgot password?</legend>
        
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  );
}

export default Login;
