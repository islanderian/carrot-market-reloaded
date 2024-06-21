export default function Home() {
  return (
    <main>
      {/* Card Component */}
      <div className="flex items-center justify-center p-5 bg-gray-300">
        <div className="w-full max-w-screen-sm p-5 bg-white shadow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="-mb-1 font-semibold text-gray-600">
                In transit
              </span>
              <span className="text-4xl font-semibold">Coolblue</span>
            </div>
            <div className="bg-orange-300 rounded-full size-12" />
          </div>
          <div className="flex items-center gap-2 my-2">
            <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full">
              Today
            </span>
            <span>9:30-10:30u</span>
          </div>
          <div className="relative">
            <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
            <div className="absolute w-2/3 h-2 bg-green-500 rounded-full" />
          </div>
          <div className="flex items-center justify-between mt-5 text-gray-600">
            <span>Expected</span>
            <span>Sorting center</span>
            <span>In transit</span>
            <span className="text-gray-400">Delivered</span>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="flex items-center justify-center p-5 bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
        <div className="bg-white  shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none has-[:invalid]:ring-red-100 ring ring-transparent transition-all">
          <input
            className="w-full h-12 pl-5 transition-shadow bg-gray-200 rounded-full ring ring-transparent focus:ring-green-500 focus:ring-offset-2 placeholder:drop-shadow invalid:focus:ring-red-500 peer"
            type="text"
            placeholder="Email address"
            required
          />
          <span className="hidden font-medium text-red-500 peer-invalid:block">
            Email is required.
          </span>
          <button className="py-2 font-medium text-white transition-transform bg-black rounded-full active:scale-90 md:px-10">
            Log in
          </button>
        </div>
      </div>
      {/* List */}
      <div className="flex items-center justify-center p-5 bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
        <div className="flex flex-col w-full max-w-screen-sm gap-3 p-5 bg-white shadow-lg rounded-3xl">
          {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
            <div
              key={index}
              className="flex items-center gap-5 last:border-0 last:pb-0 group"
            >
              <div className="bg-blue-400 rounded-full size-10" />
              <span className="text-lg font-medium empty:w-24 empty:h-5 empty:bg-gray-300 empty:rounded-full empty:animate-pulse group-hover:text-red-500">
                {person}
              </span>
              <div className="relative flex items-center justify-center text-white bg-red-500 rounded-full size-6 animate-bounce">
                <span className="z-10">{index}</span>
                <div className="absolute bg-red-500 rounded-full size-6 animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* JIT */}
      <div className="flex items-center justify-center p-5 bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
        <div className="flex flex-col w-full max-w-screen-sm gap-3 p-5 bg-white shadow-lg rounded-sexy-name"></div>
      </div>
    </main>
  );
}
