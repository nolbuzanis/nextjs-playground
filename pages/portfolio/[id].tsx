import { useRouter } from 'next/router'

const PortfolioProjectPage = (): JSX.Element => {
  const {
    query: { id },
  } = useRouter()

  return <div>Portfolio Project with id: {id}</div>
}

export default PortfolioProjectPage
