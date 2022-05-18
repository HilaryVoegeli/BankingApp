function Home() {
    return(
        <Card
            bgcolor="info"
            txtcolor="black"
            header="BadBank Home Page"
            title="Welcome to the Bank!"
            text="Log In to Begin"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            />
    );
}