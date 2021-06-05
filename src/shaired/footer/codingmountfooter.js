import './codingmountfooter.css';
function Codingmountfooter() {
  const company=`Coding Mountain`;
  const date=new Date().getFullYear();
  return (
   <>
      <section className="footersection">
            <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© {date} Copyright:
                        <a href="https://codingmountain.com/"> {company}</a>
                    </div>
            </footer>
    </section>
   </>
  );
}

export default Codingmountfooter;
