import { FC } from 'react'
import { Link } from 'react-router'

type AboutProps = object

const About: FC<AboutProps> = () => {
  return (<div>
    <Link to="/">Home</Link>
    About
    </div>)
}

export default About