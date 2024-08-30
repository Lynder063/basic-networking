import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic41 from "../assets/PZ_img/image_41.png";
import pic42 from "../assets/PZ_img/image_42.png";
import pic43 from "../assets/PZ_img/image_43.png";
import pic44 from "../assets/PZ_img/image_44.png";
import pic45 from "../assets/PZ_img/image_45.png";
import pic46 from "../assets/PZ_img/image_46.png";

function SettingUpSpolecna() {
  return (
    <div>
      <Topbar number="#4" title={"Nasdílení složky (spolecne)"} />
      <Legal />
      <Infobox>
        Vytvořte složku společná na disku C:
        <br></br>
        C:/spolecne
      </Infobox>

      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic41}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic42}
          alt="Obrázek 41"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic43}
          alt="Obrázek 43"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Zákážeme dědičnost</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic44}
          alt="Obrázek 44"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>A přidáme pravomoce pro "Domain Users"</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic45}
          alt="Obrázek 45"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Překontrolujeme název skupiny</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic46}
          alt="Obrázek 46"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default SettingUpSpolecna;
