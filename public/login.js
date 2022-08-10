function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    // db = db.getSiblingDB("myproject");
      
    function handleLogin() {
        //NO VALIDATION//
        // let user = db.getCollection("users").find({email});
        //     if (user.password !== password) alert('Invaid Password');
        //     else {
       const url = `account/login/${email}/${password}`;
       (async () => {
          var res = await fetch(url);
          var data = await res.json();
          console.log(data);
        })();
        console.log('Hello ' + email)
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
};