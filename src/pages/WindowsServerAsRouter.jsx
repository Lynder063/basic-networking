import Topbar from "../components/Topbar";
import Legal from "../components/Legal";
import Infobox from "../components/Infobox";

import pic34 from "../assets/PZ_img/image_34.png";
import pic35 from "../assets/PZ_img/image_35.png";
import pic36 from "../assets/PZ_img/image_36.png";
import pic37 from "../assets/PZ_img/image_37.png";
import pic38 from "../assets/PZ_img/image_38.png";
import pic39 from "../assets/PZ_img/image_39.png";
import pic40 from "../assets/PZ_img/image_40.png";

function WindowsServerAsRouter() {
  return (
    <div>
      <Topbar number="#9" title={"Terminálového serveru pro Domain Users"} />
      <Legal />
      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        Remote Access
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic34}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Vybereme <strong>Routing</strong>
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic35}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Nastavíme "NAT Router", vybereme aplikaci{" "}
        <strong>Routing and Remote Access</strong>
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic36}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Klikneme pravým na náš server <i>(poznáme podle názvu)</i> a vybereme
        první možnost <s>Configure and Enable Routing and Remote Access</s>
      </Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic37}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Ve wizardu vybereme tuto možnost</Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic38}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>A vybereme síťovou kartu s přístupem na internet</Infobox>
      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic39}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        A klikneme na <s>Finish</s> počkáme na dokončení a pak rozklikneme{" "}
        <s>NAT</s> koukneme jestli se nám posílají nějaké packety
      </Infobox>
    </div>
  );
}

export default WindowsServerAsRouter;
