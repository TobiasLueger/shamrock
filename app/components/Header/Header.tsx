import logo from "@/app/images/shamrock.png";
import Image from 'next/image'

function Header() {
    return (
      <header className="bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto px-5">
          <div className="py-28 flex flex-col lg:flex-row items-center">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                <Image
                src={logo}
                alt="Picture of the author"
                width={50}
                height={50}
                priority
                />
            </h3>
          </div>
        </div>
      </header>
    )
  }

  export default Header;