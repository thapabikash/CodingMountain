import Landingpage from './components/landingpage/Landing_page';
import Userprofilepage from './components/userprofile/profile_page'
import Contact from './components/pages/contactus';
import About from './components/pages/aboutus';

import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';

 function ServiceRouts(){

const inline_css={
    margin:'80px 0px 40px 0px',
    display:'block',
    textAlign:'center'
}

return( 
        <Switch>
            <Route exact path='/' component={Landingpage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/detail/:id' component={Userprofilepage}></Route>
            <Route path="*" 
            render={
                ()=>(
                            <div style={inline_css}>
                                <h3>Routs Un-match</h3>
                                <Link to="/">Back</Link>
                            </div>
                  )
            }
            ></Route>
        </Switch>
)
}
export default ServiceRouts