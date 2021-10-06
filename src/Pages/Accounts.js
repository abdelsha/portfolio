import Aux from "../hoc/Aux";
import LoginForm from "../components/Forms/LoginForm";
import AccountPage from "../components/AccountPage/AccountPage";
import classes from './Accounts.module.css';
function Accounts(){
    return <Aux>
        <div className={classes.main}>
        <div className={classes.Layout}>
            <AccountPage/>    
        </div>
            
        </div>
    </Aux> 

}

export default Accounts;