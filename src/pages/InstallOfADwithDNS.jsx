import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic10 from "../assets/PZ_img/010.png";
import pic11 from "../assets/PZ_img/011.png";
import pic12 from "../assets/PZ_img/012.png";
import pic13 from "../assets/PZ_img/013.png";
import pic14 from "../assets/PZ_img/014.png";
import image_2 from "../assets/PZ_img/image_2.png";
import image_3 from "../assets/PZ_img/image_3.png";
import image_4 from "../assets/PZ_img/image_4.png";
import image_5 from "../assets/PZ_img/image_5.png";

function InstallOfADwithDNS() {
  return (
    <div>
      <Topbar number="#3" title={"Instalace AD včetně DNS"} />
      <Legal />

      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        doinstalovat AD a DNS
      </Infobox>

      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic10}
          alt="Obraázek 10"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic11}
          alt="Obraázek 11"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic12}
          alt="Obraázek 12"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Teď musíme nastavit <strong>Active Directory</strong>
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic13}
          alt="Obraázek 13"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        <strong>Add new forest</strong>, a jako{" "}
        <strong>Root Domain name</strong> nastavíme podle potřeby
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic14}
          alt="Obraázek 14"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Zde musíme nastavit heslo abychom mohli pokračovat v instalaci, nejlepší
        je zvolit <strong>Password1*</strong>
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={image_2}
          alt="Obraázek 14"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        V této části se náma NetBios vytvoří sam tak necháme defaultní hodnotu,
        A projedem zbytek wizardu a nainstalujeme!{" "}
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={image_3}
          alt="Obraázek 15"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Půjdeme do Tools -{">"} Active Directory Users and Computers
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={image_4}
          alt="Obraázek 16"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Teď si rozjedeme složku <strong>Users</strong> přidáme nového uživatele
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={image_5}
          alt="Obraázek 17"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default InstallOfADwithDNS;
