import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic10 from "../assets/PZ_img/image_10.png";
import pic11 from "../assets/PZ_img/image_11.png";
import pic12 from "../assets/PZ_img/image_12.png";
import pic13 from "../assets/PZ_img/image_13.png";
import pic14 from "../assets/PZ_img/image_14.png";
import pic15 from "../assets/PZ_img/image_15.png";
import pic16 from "../assets/PZ_img/image_16.png";
import pic8 from "../assets/PZ_img/image_8.png";
import pic9 from "../assets/PZ_img/image_9.png";

function ConfiguringDHCPserver() {
  return (
    <div>
      <Topbar number="#6" title={"Konfigurace DHCP server"} />
      <Legal />
      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        DHCP Server
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic8}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic9}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic10}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>A teď vyplníme požadovaný rozsah IP adres</Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic11}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic12}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic13}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic14}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>A teď upravíme nastavení síťové karty na klientovi</Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic15}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        A teď v CMD zkontrolujeme jestli jsem dostali IP adresu z rozhasu adres
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic16}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ConfiguringDHCPserver;
