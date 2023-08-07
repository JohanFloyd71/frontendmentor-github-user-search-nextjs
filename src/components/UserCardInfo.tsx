import Image from "next/image";
import GithubLogo from "@/assets/images/github-logo.png";

function UserCardInfo() {
  return (
    <article className="grid-areas rounded-xl bg-[#1f2a48] p-2 text-white">
      <div className="section-logo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1">
        <Image src={GithubLogo} alt="Logo User" />
      </div>
      <div className="section-title">
        <h2>The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 Jan 2011</p>
      <p className="section-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        aperiam a repellendus dolorem voluptatibus, minima ducimus obcaecati
        vero illum eligendi commodi mollitia possimus, autem nulla nesciunt
        molestiae atque facere sit!
      </p>
      <div className="section-number flex justify-around bg-[#141c2f]">
        <article>
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3938</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>
      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
      </div>
    </article>
  );
}

export default UserCardInfo;
