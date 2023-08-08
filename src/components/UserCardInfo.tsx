import Image from "next/image";
import GithubLogo from "@/assets/images/github-logo.png";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildIcon from "@/components/icons/BuildIcon";
import { User } from "@/interfaces/user";

interface Props {
  user: User;
}

function UserCardInfo({ user }: Props) {
  return (
    <article className="grid-areas rounded-2xl bg-[#1f2a48] p-6 text-white md:p-8 lg:p-8">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto">
        <Image
          className="rounded-full"
          src={user.avatar_url}
          width={96}
          height={96}
          alt="Logo User"
        />
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p>@{user?.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || "").toLocaleDateString("es", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "This profile has no bio"}
      </p>
      <div className="section-number mt-6 flex justify-around rounded-xl bg-[#141c2f] p-8 text-center">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user.following}</p>
        </article>
      </div>
      <div className="section-social mt-4 space-y-3 md:grid md:grid-cols-2">
        <article className="flex items-center space-x-2">
          <i>
            <LocationIcon className="h-7 w-7 fill-white" width={"1rem"} />
          </i>
          <span>{user.location || "Not Available"}</span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon className="h-7 w-7 fill-white" width={"1rem"} />
          </i>
          <a className="truncate" href={user.html_url}>
            github.com/{user.login || "Not Available"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon className="h-7 w-7 fill-white" width={"1rem"} />
          </i>
          <a href={`https://www.twitter.com/${user?.twitter_username}`}>
            {user?.twitter_username || "Not Available"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildIcon className="h-7 w-7 fill-white" width={"1rem"} />
          </i>
          <span>{`${
            user.company ? `@${user.company}` : "Not Available"
          }`}</span>
        </article>
      </div>
    </article>
  );
}

export default UserCardInfo;
