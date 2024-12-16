import Logo from '../assets/images/logo.svg'

export default function Header() {
    return (
       <>
        <header>
        <a href=""><img src={Logo} alt="React Logo" width={192.86} height={36}/></a>
        </header>
        </>
    )
  }