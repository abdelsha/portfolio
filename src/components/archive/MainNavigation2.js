import {Link} from 'react-router-dom';
import Aux from '../../hoc/Aux';
import classes from './MainNavigation2.module.css';

function MainNavigation(){
    return (
        <Aux  >
            <header className={classes.header}>
                
                <nav>
                    <ul>
                        <span className={classes.logo}>AS</span>

                        <li>
                            <Link to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link to ='/Skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to ='/Experience'>Experience</Link>
                        </li>
                        <li>
                            <Link to ='/Portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to ='/Contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to ='/Accounts'>Accounts</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </Aux>

        

    );
}

export default MainNavigation;