function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    
    function handleLogin() {
        console.log(users);
        const userData = users.find((el)=> {
            if(el.email.toLowerCase() === email.toLowerCase()) {
                return el;
            }
        });
            if (userData == null) alert('Invaid Email');
            if (userData.password !== password) alert('Invaid Password')
            else {
                userData.value = !userData.value;
                console.log(userData);
                setShow(false);
            }
        };

    function clearForm(){
        setEmail('');
        setPassword('');
        const userData = users.find((el)=> {
            if(el.email.toLowerCase() === email.toLowerCase()) {
                return el;
            }
        });
        setShow(true);
    }

    return(
       <Card
        bgcolor="warning"
        header="Log In/Log Out"
        status={status}
        body={show ? (
            <>
            Email<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e=> setEmail(e.currentTarget.value)} /><br/>
            Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e=> setPassword(e.currentTarget.value)} /><br/>
            <button disabled={!email || !password} type="submit" className="btn btn-light" onClick={handleLogin}>Log In/Log Out</button>
            </>
         ):(
            <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Go Back to the Form</button>
            </>
        )}
       />
    )
}