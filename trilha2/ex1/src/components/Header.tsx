import './Header.css'

function Header() {
  return (
    <nav>
        <img src="../public/f1Old_logo.png" alt="" />
        <div className='headerInfos'>
          <a href="/">Home</a>
          <a href="/">Historias</a>
          <a href="/">Sobre</a>
          <a href="/contact">Contato</a>
        </div>
    </nav>
  );
}   
export default Header;