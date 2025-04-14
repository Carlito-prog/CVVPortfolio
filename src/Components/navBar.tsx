import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import computerPhoto from "../assets/computerPic.jpeg"

function NavBar() {
    const [show, setShow] = useState(true);
    const [previousScrollPos, setPreviousScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // current scroll position on the Y axis
            const currentScrollPos = window.scrollY;

            // Determine scroll direction
            const visible =
                previousScrollPos > currentScrollPos || currentScrollPos < 10;

            // Update state
            setShow(visible);
            setPreviousScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [previousScrollPos]);

    const handleClick = (id: string) => {
        //scroll to id
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className={`navBar ${show ? '' : 'hide'}`}>
            <NavLink to="/" onClick={() => handleClick('#home')}>
                <img src={computerPhoto} alt="CarlVLogo" />
            </NavLink>
            <div className='navBar-links'>
                <div>
                    <NavLink className={({ isActive, }) => isActive ? 'active' : ''} to="/skills" onClick={() => handleClick('skills')}>
                        Skills
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive, }) => isActive ? 'active' : ''} to="/projects" onClick={() => handleClick('projects')}>
                        Projects
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive, }) => isActive ? 'active' : ''} to="/footer" onClick={() => handleClick('footer')}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar