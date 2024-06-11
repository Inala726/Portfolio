import { FaSquarespace } from "react-icons/fa"


const Sidebar = () => {
  return (
    <>
        <div className="w-[250px] h-[90vh] bg-white text-black border-black sticky top-0">
            <div className="top flex w-[100%]">
                <div className="logo flex items-center justify-between ">
                <FaSquarespace/>
                LOGO
                </div>
                <p>&times;</p>
            </div>
        </div>
    </>
  )
}

export default Sidebar