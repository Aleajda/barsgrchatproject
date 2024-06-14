import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { connect } from "react-redux";
import Header from "../header/Header";

const Main = () =>{
    return(
        <div>
            <Header/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    
})

export default compose(connect(mapStateToProps, null), withAuthRedirect)(Main);