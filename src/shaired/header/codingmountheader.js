import './codingmountheader.css';
import  Itempage from './navitem';
function Codingmountheader() {
  const navItem=[
        {
            type: "Home",
            path:"/"
        },
        {
            type:  "User List",
            path:"/list"
        },
        {
            type: "About Us",
            path:"/about"
        },
        {
            type:"Contact Us",
            path:"/contact"
        }
  ];
  return (
    <section className="codingmountheader">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">Coding Mountain -Assessment Bikash Thapa(Node)</a>
                  </div>
                  <ul className="nav navbar-nav">
                      {navItem.map((item,i)=>
                      < Itempage page={item} key={i}/>
                      )}
                  </ul>
                </div>
           </nav>
    </section>
  );
}

export default Codingmountheader;
