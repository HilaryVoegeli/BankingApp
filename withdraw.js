function Withdraw() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [withdraw, setWithdraw] = React.useState('');
    
    const userData = users.find((el)=> {
        if(el.value === true) {
            return el;
        }
    });

    const header = `${userData.name}, Make A Withdraw`;

    function validate(withdraw){
        if(userData.balance < withdraw) {
            alert ('Inadequate Funds Available');
            return false;
        } if (userData.balance < 0) {
            alert('No funds available.');
            return false;
        } if (withdraw <= 0) {
            setStatus('Please enter a positive value');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } if (!/^[0-9\.\b]+$/.test(withdraw))  {
            setStatus('Enter a Number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function setUserBalance (initial){
        userData.balance = initial;
        return userData.balance;
    }

    function handleWithdraw() {
        let initial = userData.balance;
        if (!validate(withdraw)) return;
        let withdraw1 = Number(withdraw);
        setBalance(initial -= withdraw1);
        setUserBalance(initial, withdraw);
        if(userData.balance < 0) {
            setStatus('Your account has been overdrawn.')
        }
        console.log("New Balance: " + userData.balance);
        setShow(false);
    }   

    function clearForm(){
        setWithdraw('');
        setShow(true);
    }

    return(
       <Card
        bgcolor="danger"
        header={header}
        status={status}
        body={show ? (
            <>
            Balance: 
            <div key="balance" className="balance" id="balance" value={userData.balance.toFixed(2)}>{userData.balance.toFixed(2)}</div><br/>
            Withdraw<br/>
            <input type="input" className="form-control" id="withdraw" placeholder="0" value={withdraw} onChange={e=> setWithdraw(e.currentTarget.value)} /><br/>
            <button disabled={!withdraw} type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
            </>
         ):(
            <>
            Balance: 
            <div key="balance" className="balance" id="balance" value={userData.balance.toFixed(2)}>{userData.balance.toFixed(2)}</div><br/>
            Withdraw<br/>
            <h5>Your withdraw has been made.</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}> Make Another Withdraw</button>
            </>
        )}
       />
    )
}