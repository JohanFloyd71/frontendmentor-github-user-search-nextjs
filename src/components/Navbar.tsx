import SunIcon from "@/components/icons/SunIcon";

function Navbar() {
  return (
    <header className="mb-10 flex items-center space-x-3">
      <h1 className="flex-grow text-3xl font-bold text-white">Dev finder</h1>
      <span className="uppercase text-white">light</span>
      <button>
        <SunIcon className="fill-white" width={25} height={25} />
      </button>
    </header>
  );
}

export default Navbar;
