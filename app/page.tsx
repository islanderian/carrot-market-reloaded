export default function Home() {
  return (
    <main>
      {/* Card Component */}
      <div className="bg-gray-300 h-screen flex items-center justify-center p-5">
        <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-gray-600 font-semibold -mb-1">
                In transit
              </span>
              <span className="text-4xl font-semibold">Coolblue</span>
            </div>
            <div className="size-12 bg-orange-300 rounded-full" />
          </div>
          <div className="my-2 flex items-center gap-2">
            <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full">
              Today
            </span>
            <span>9:30-10:30u</span>
          </div>
          <div className="relative">
            <div className="bg-gray-200 w-full h-2 rounded-full absolute" />
            <div className="bg-green-500 w-2/3 h-2 rounded-full absolute" />
          </div>
          <div className="flex justify-between items-center mt-5 text-gray-600">
            <span>Expected</span>
            <span>Sorting center</span>
            <span>In transit</span>
            <span className="text-gray-400">Delivered</span>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="bg-gray-100 h-screen flex items-center justify-center p-5">
        <div className="bg-white  shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
          <input
            className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
            type="text"
            placeholder="Search here..."
          />
          <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
