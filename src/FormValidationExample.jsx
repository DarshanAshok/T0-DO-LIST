import React , {useState} from 'react';

function FormValidationExample(){
    const[email, setEmail] = useState('');
    const[password , setPassword]=useState('');
    const[isEmailValid , setIsEmailValid]=useState(true);
    const[ispasswordValid , setIsPasswordValid]=useState(true);

    const handleEmailChange =(e) => { 
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(/^[A-Z a-z 0-9 . _ % + -]+@[A-Z a-z 0-9.-]+\.[A-Z a-z]{2,}$/.test(emailValue)); //Simple regex valisation
    };

    const handlePasswordChange = (e) => {
        const PasswordValue = e.target.value;
        setPassword(PasswordValue);

        setIsPasswordValid(PasswordValue.length>=8); // password must be atleast 8 characters
    };

    return(
        <div>
            <form><div>
        <label>Email:</label>
        <input 
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{borderColor:isEmailValid?'black':'red'}}/>

        {!isEmailValid && <p style={{color:'red'}} >Invalid email</p>}
        </div>
        <div>
            <label>Password:</label>
            <input type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{borderColor:ispasswordValid? 'black':'red'}}/>

            {!ispasswordValid && <p style={{color:'red'}}>passwordmust be atleast 8 characters</p>}
        </div>
        <button type="submit" disabled={!isEmailValid || !ispasswordValid}>Submit</button>
        </form>
        </div>
    );
    }

    export default FormValidationExample;

