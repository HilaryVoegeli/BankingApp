function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = () => {
        const url = `/account/login/${email}/${password}`;
        (async () => {
          var res = await fetch(url);
          var data = await res.json();
        })();
        console.log('Hello ' + email);
        setShow(false);
        };

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
       <Card
        bgcolor="warning"
        header="Log In"
        status={status}
        body={show ? (
            <>
            Email<br/>
                <input placeholder="Enter Email" onChange={e => setEmail(e.target.value)} /><br/>
            Password<br/>
                <input placeholder="Enter Password" onChange={e => setPassword(e.target.value)} /><br/>
            <button disabled={!email || !password} onClick={login}>Log In</button><br/>
            </>
         ):(
            <>
            <h5>Success! You are now logged into your account.</h5>
            {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Go Back to the Form</button> */}
            </>
        )
    }
       />
    )
    };