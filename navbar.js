function tooltip () {
    $('[data-toggle="tooltip"]').tooltip();
}

function NavBar () {
    const [active, setActive] = React.useState('#/');
    const setClass = (element) => (event) => {
       let link = element.href;
       setActive(link);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <a onClick={setClass({href:"#/"})} data-toggle="tooltip" data-placement="bottom" title="BadBank Home Page" className={"#/" === active ? 'nav-link active' : 'nav-link'} href="#/">BadBank</a>
                    </li>
                </ul>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a data-toggle="tooltip" data-placement="bottom" title="Create Account" className={"#/CreateAccount/" === active ? 'nav-link active' : 'nav-link'} onClick={setClass({href: "#/CreateAccount/"})} href='#/CreateAccount/'>Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="tooltip" data-placement="bottom" title="Login/Logout" className={"#/Login" === active ? 'nav-link active' : 'nav-link'} onClick={setClass({href:"#/Login"})} href='#/Login/'>Log In/Log Out</a>
                        </li>
                        {loggedin && <><li className="nav-item">
                            <a data-toggle="tooltip" data-placement="bottom" title="Made a deposit" className={"#/deposit/" === active ? 'nav-link active' : 'nav-link'} onClick={setClass({ href: "#/deposit/" })} href='#/deposit/'>Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="tooltip" data-placement="bottom" title="Make a withdraw" className={"#/withdraw/" === active ? 'nav-link active' : 'nav-link'} onClick={setClass({ href: "#/withdraw/" })} href='#/withdraw/'>Withdraw</a>
                        </li></>}

                        <li className="nav-item">
                            <a data-toggle="tooltip" data-placement="bottom" title="All Data" className={"#/alldata/" === active ? 'nav-link active' : 'nav-link'} onClick={setClass({href:"#/alldata/"})} href='#/alldata/'>All Data</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}