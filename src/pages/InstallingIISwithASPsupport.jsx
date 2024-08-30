import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic17 from "../assets/PZ_img/image_17.png";
import pic18 from "../assets/PZ_img/image_18.png";
import pic19 from "../assets/PZ_img/image_19.png";
import pic20 from "../assets/PZ_img/image_20.png";
import pic21 from "../assets/PZ_img/image_21.png";

function InstallingIISwithASPsupport() {
  return (
    <div>
      <Topbar number="#5" title={"Instalace IIS s podporou ASP"} />
      <Legal />
      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        Web Server (IIS)
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic17}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic18}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic19}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic20}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Zde vytvoříme soubor index.asp a vložíme tam ten kod co nám byl
        poskytnut a pak na na adrese 127.0.0.1 můžeme ověřit jestli nám naše
        stránka funguje
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic21}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default InstallingIISwithASPsupport;
