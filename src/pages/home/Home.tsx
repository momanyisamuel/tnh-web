import { FC } from 'react'
import { Link } from 'react-router'

type HomeProps = object

const Home: FC<HomeProps> = () => {
  return <div>
    <Link to="/about">About</Link>
    Home
    </div>
}

export default Home