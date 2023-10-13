import AutoDP from "../../public/autodp.svg";

export default function Header() {
  return (
    <>
      <header className="container mx-auto text-2xl font-bold max-w-full">
        <nav className="py-1 flex flex-row flex-wrap rounded-b-lg max-h-20 justify-start bg-[#273043]/90 text-[#EFF6EE]">
          <div className="flex flex-row basis-1/4">
            <a
              href="#"
              className="group/logo flex flex-row transition transform hover:-translate-y-0.5 duration-300"
            >
              <div className="bg-clip-text flex bg-gradient-to-r from-red-500 to-amber-500">
                <AutoDP className="fill-[#EFF6EE] group-hover/logo:fill-orange-400 transform transition duration-500" />
                <span className="m-auto group-hover/logo:text-transparent duration-300">
                  AutoDP
                </span>
              </div>
            </a>
          </div>
          <div className="flex flex-row basis-2/4 text-xl font-semibold">
            <div className="flex flex-row basis-1/2">
              <div className="m-auto">
                <a
                  href="#"
                  className="flex transition transform hover:-translate-y-0.5 duration-300"
                >
                  <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-red-500 to-amber-500 duration-300">
                    Users
                  </span>
                </a>
              </div>
              <div className="m-auto">
                <a
                  href="#"
                  className="flex transition transform hover:-translate-y-0.5 duration-300"
                >
                  <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-red-500 to-amber-500 duration-300">
                    Posts
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
