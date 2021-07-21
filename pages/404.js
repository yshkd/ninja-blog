import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return ( 
    <div className="not-found">
      <h1>おっと・・・</h1>
      <h2>ページが見つかりません</h2>
      <p><Link href="/"><a>ホームページに戻る</a></Link></p>
    </div>
   );
}
 
export default NotFound;