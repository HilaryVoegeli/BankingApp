function userProfile() {
    const [show, setShow] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        fetch(`/account/loggedin`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
            setEmail(data.email);
          });
      }, []);

    let status = `Hello ${data.name},`;

    const profile = () => {
        const url = `/account/profile/${email}/${password}`;
        (async () => {
          var res = await fetch(url);
          var data = await res.json();
        })();
        setShow(false);
        };

    return(
       <Card
        bgcolor="dark"
        header={status}
        body={show ? (
            <>
                Change your password here.<br/>
                New Password:<br/>
                    <input type="input" className="form-control" id="password" value={password} placeholder="Enter Password" onChange={e => setPassword(e.currentTarget.value)} />
                    <br/>
                <button disabled={!password} onClick={profile}>Update</button><br/>
                </>
             ):(
                <>
                    <h5>Success! You have updated your password.</h5>
                </>
        )}/>
    );
};