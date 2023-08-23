import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
      <div className="w-full  shadow-lg ">
        
          <div className="relative h-16 ml-10 w-24 md:w-36">
              <Link href={"/"}>
                  <Image
                    src="https://i.ibb.co/WtbFpmR/logo.png"
                    layout="fill"
                    objectFit="cover"
                    alt="HatMart Logo"
                  />
              </Link>
          </div>      
      </div>
  )
}

export default Nav
