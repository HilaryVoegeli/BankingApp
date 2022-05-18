function AllData(){
  const ctx = React.useContext(UserContext);
  const data = JSON.stringify(ctx);
  const data1 = JSON.parse(data);

  const displayData = data1.users.map((info)=>{
      return(
        <tr key={info.name}>
          <td>{info.name}</td>
          <td>{info.email}</td>
          <td>{info.password}</td>
          <td>{info.balance.toFixed(2)}</td>
        </tr>
      )
    }
  )

  return (
    <><h1>All Data</h1>
    <div className="card text-white bg-secondary mb-3" style={{ width: 50 + 'rem', marginLeft: "20px", marginTop: "10px"}}>
      <div className="card-header">User Information</div>
      <table className="table" style={{ color: "whitesmoke" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {displayData}
        </tbody>
      </table>
    </div></>
  );
}