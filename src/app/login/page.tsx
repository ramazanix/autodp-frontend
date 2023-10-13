import AutoDP from "../../../public/autodp.svg";

export default function LoginPage() {
  return (
    // <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div className="shrink-0">
    //     <Image className="h-12 w-12" src="/autodp.ico" alt="AutoDP Logo" width={50} height={50}/>
    //   </div>
    //   <div>
    //     <div className="text-xl font-medium text-black">AutoChat</div>
    //     <p className="text-slate-500">You have a new message!</p>
    //   </div>
    // </div>
    <>
      <header className="container mx-auto text-2xl font-bold max-w-full">
        <nav className="py-1 flex flex-row flex-wrap rounded-b-lg max-h-20 justify-start bg-[#273043]/90 text-[#EFF6EE]">
          <div className="flex flex-row basis-1/4">
            <a
              href="#"
              className="group/logo flex flex-row transition transform hover:-translate-y-0.5 duration-300"
            >
              <AutoDP className="fill-[#EFF6EE] group-hover/logo:fill-[#CACEC9] duration-300" />
              <span className="m-auto group-hover/logo:text-[#CACEC9] duration-300">
                AutoDP
              </span>
            </a>
          </div>
          <div className="flex flex-row basis-2/4 text-xl font-semibold">
            <div className="flex flex-row basis-1/2">
              <div className="m-auto">
                <a
                  href="#"
                  className="flex transition transform hover:-translate-y-0.5 duration-300"
                >
                  <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-violet-800 via-red-500 to-amber-500 duration-300">
                    Users
                  </span>
                </a>
              </div>
              <div className="m-auto">
                <a
                  href="#"
                  className="flex transition transform hover:-translate-y-0.5 duration-300"
                >
                  <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-violet-800 via-red-500 to-amber-500 duration-300">
                    Posts
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*<body className="container min-h-screen bg-[#9197AE] text-[#EFF6EE]">*/}
      {/*<div>*/}
      {/*    <p>123</p>*/}
      {/*</div>*/}
      {/*</body>*/}
    </>
  );
}
