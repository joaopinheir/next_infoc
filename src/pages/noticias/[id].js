import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>id: {router.query.id}</p>
}