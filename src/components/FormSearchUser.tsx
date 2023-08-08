import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

function FormSearchUser({ getUser }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-wrap items-center gap-1 rounded-2xl bg-[#1f2a48] px-2 py-1"
    >
      <span className=" ml-2 min-w-[20px] ">
        <SearchIcon className=" h-6 w-6 fill-[#0668d6]" />
      </span>
      <input
        name="username"
        className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white outline-none placeholder:text-white"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button className="rounded-lg bg-[#0079fe] px-4 py-3 font-bold text-white">
        Search
      </button>
    </form>
  );
}

export default FormSearchUser;
