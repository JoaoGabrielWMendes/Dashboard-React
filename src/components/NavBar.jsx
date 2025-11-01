import Navbar from 'react-bootstrap/Navbar';

function NavegationBar(){
    return(
    <>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
    </>
    );
}

export default NavegationBar;
