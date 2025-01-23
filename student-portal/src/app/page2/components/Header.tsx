import Image from "next/image";
import logo from '../../../../public/images/Asset 1 1.png'
import logo2 from '../../../../public/images/right-logo.png'
import logo3 from '../../../../public/images/right-logo2.png'

export default function Header() {
    return (
      <header className="bg-white p-4 text-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src={logo} width={150} height={150} alt="logo"/>
          <div className="flex">
          <Image src={logo2} width={80} height={80} alt="logo" className="mr-5"/>
          <Image src={logo3} width={80} height={80} alt="logo"/>
          </div>
        </div>
      </header>
    );
  }
  