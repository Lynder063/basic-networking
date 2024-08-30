import Topbar from "../components/Topbar";
import Legal from "../components/Legal";
import Infobox from "../components/Infobox";

import pic26 from "../assets/PZ_img/image_26.png";
import pic27 from "../assets/PZ_img/image_27.png";
import pic28 from "../assets/PZ_img/image_28.png";
import pic29 from "../assets/PZ_img/image_29.png";
import pic30 from "../assets/PZ_img/image_30.png";
import pic31 from "../assets/PZ_img/image_31.png";

function TerminalAccessForDomainUsers() {
  return (
    <div>
      <Topbar number="#8" title={"Terminálového serveru pro Domain Users"} />
      <Legal />
      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        Remote Desktop Services
      </Infobox>

      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic26}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic27}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        A pak přidáme třeba našeho vytvořeného uživatele do skupiny Remote
        Desktop Users
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic28}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Ověříme spojení a funkčnost</Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic29}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Zadáme IP server a uživatele pod kterým se chceme přihlásit{" "}
        <i>(Já vybral uživatele Administrator)</i>
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic30}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Dáme heslo uživatele, dáme Yes a mělo by nás to připojit
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic31}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default TerminalAccessForDomainUsers;
