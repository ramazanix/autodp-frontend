interface Props {
  isLoading: boolean
}

export const UserProfileSkeleton: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? (
    <div className="mx-auto my-6 grid h-96 w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow">
      <div className="row-span-4 flex">
        <div className="m-10 w-full animate-pulse rounded-full bg-gradient-to-r from-red-500/90 to-amber-500/90"></div>
      </div>

      <div className="row-span-2 flex items-center justify-center ">
        <div className="h-1/4 w-2/3 animate-pulse rounded-full bg-gradient-to-r from-red-500/90 to-amber-500/90"></div>
      </div>

      <div className=" flex items-center justify-center ">
        <div className="h-1/3 w-2/5 animate-pulse rounded-full bg-gradient-to-r from-red-500/90 to-amber-500/90"></div>
      </div>

      <div className=" flex items-start justify-center">
        <div className="mx-4 h-1/3 w-full animate-pulse rounded-full bg-gradient-to-r from-red-500/90 to-amber-500/90"></div>
      </div>
    </div>
  ) : null
}
