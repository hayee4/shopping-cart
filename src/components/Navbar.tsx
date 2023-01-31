import { Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export function Navbar() {
    return (
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <ShoppingCartOutlinedIcon>
                    
                </ShoppingCartOutlinedIcon>
                <div className='rounded-circle bg-danger d-flex justify-content-center' style={{color: "white", width: "1.5rem"}} >3</div>
            </Container>
        </NavbarBs>
    )
}