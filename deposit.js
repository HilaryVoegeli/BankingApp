function Deposit() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] = React.useState('');
    
    const userData = users.find((el)=> {
        if(el.value === true) {
            return el;
        }
    });

    const header = `${userData.name}, Make A Deposit`;
    
    function validate(deposit){
        if (deposit <= 0) {
            setStatus('Please deposit a positive value');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } if (!/^[0-9\.\b]+$/.test(deposit)) {
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

    function handleDeposit() {
        let initial = userData.balance;
        if (!validate(deposit)) return;
        let deposit1 = Number(deposit);
        setBalance(initial += deposit1);
        setUserBalance(initial, deposit);
        console.log('New Balance: ' + userData.balance);
        setShow(false);
    }   

    function clearForm(){
        setDeposit('');
        setShow(true);
    }

    return(
       <Card
        bgcolor="primary"
        header={header}
        status={status}
        body={show ? (
            <>
            Balance: 
            <div key="balance" className="balance" id="balance" value={userData.balance.toFixed(2)}>{userData.balance.toFixed(2)}</div><br/>
            Deposit<br/>
            <input type="input" className="form-control" id="deposit" placeholder="0" value={deposit} onChange={e=> setDeposit(e.currentTarget.value)} /><br/>
            <button disabled={!deposit} type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
            </>
         ):(
            <>
            Balance: 
            <div key="balance" className="balance" id="balance" value={userData.balance.toFixed(2)}>{userData.balance.toFixed(2)}</div><br/>
            Deposit<br/>
            <h5>Your deposit has been made.</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}> Make Another Deposit</button>
            </>
        )}
       />
    )
}