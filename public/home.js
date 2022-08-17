function Home() {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetch(`/account/loggedin`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          });
      }, []);

    let name = data.name;
    let status = `Hello ${name},`;

    return(
        <Card
            bgcolor="info"
            txtcolor="black"
            header={status}
            title="Welcome to the Bank"
            text="Log In to Begin"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            />
    );
}