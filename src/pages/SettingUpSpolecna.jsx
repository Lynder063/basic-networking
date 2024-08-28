import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic41 from "../assets/PZ_img/image_41.png";
import pic42 from "../assets/PZ_img/image_42.png";

function SettingUpSpolecna() {
  return (
    <div>
      <Topbar number="#5" title={"Nasdílení složky (spolecne)"} />
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
    </div>
  );
}

export default SettingUpSpolecna;
