import { useRouter } from 'next/router'

const SelectedClientProjectPage = (): JSX.Element => {
  const { query } = useRouter()
  console.log(query)
  return <div>Some client project</div>
}

export default SelectedClientProjectPage
