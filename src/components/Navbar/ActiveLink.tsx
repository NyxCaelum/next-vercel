// import { useRouter } from 'next/router'
import '../../styles/Navbar.css'
import Link from 'next/link'

interface props {
    text: String,
    href: string
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({text, href }:props) => {

  // const {asPath} = useRouter()

  return (
    <Link href={href} >{text}</Link>
  )
}
