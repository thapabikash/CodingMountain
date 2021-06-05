/**
 * @type {function} 
 */
import Codingmountheader from './shaired/header/codingmountheader';
import Codingmountfooter from './shaired/footer/codingmountfooter';
import ServiceRouts from './routs'

import { BrowserRouter as Router } from 'react-router-dom';

function CodingMountain() {
  return (
   <>
   <Router>
          <Codingmountheader/>


           <ServiceRouts/>


        <Codingmountfooter/>
    </Router>
   </>
  );
}

export default CodingMountain;
