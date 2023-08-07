import SearchIcon from "@/components/icons/SearchIcon";

function FormSearchUser() {
  return (
    <form className="mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-[#1f2a48] p-2">
      <span className="min-w-[20px]">
        <SearchIcon className="fill-[#0668d6]" />
      </span>
      <input
        className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white outline-none placeholder:text-white"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button className="rounded-lg bg-[#0079fe] px-4 py-2 font-bold text-white">
        Search
      </button>
    </form>
  );
}

export default FormSearchUser;
