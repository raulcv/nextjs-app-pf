import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
  return (
    <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>
      <h1 style={{textAlign: 'center', paddingTop: '50px'}}>404 - Page Not Found</h1>
      <Image
        src="/vercel.svg"
        width="400"
        height="150"
        layout="responsive"
      style={{textAlign: 'center'}}></Image>
      <Link href='/'><a style={{paddingTop: '2rem', fontSize: '1.5rem'}}>Volver al Home</a></Link>
    </div>
  );
}
