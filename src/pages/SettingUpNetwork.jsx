import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";

import pic7 from "../assets/PZ_img/007.png";
import pic8 from "../assets/PZ_img/008.png";
import pic9 from "../assets/PZ_img/009.png";

function SettingUpNetwork() {
  return (
    <div>
      <Topbar number="#2" title={"Nastavení síťových karet"} />
      <Legal />

      <Infobox>
        <b>Virtual switch síťová karta</b>
        <hr></hr>
        <br></br>
        <b>Statická IPv4 adresa:</b> <br></br>192.168.60.100+X/24{" "}
        <italic>(X je číslo tvého PC)</italic> <br></br> <b>Gateway:</b>{" "}
        192.168.60.254
        <br></br>
        <b>DNS1:</b> 192.168.50.165
      </Infobox>

      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic7}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>

      <Infobox>
        <b>Internal síťová karta</b>
        <hr></hr>
        <br></br>
        <b>Statická IPv4 adresa:</b> <br></br>10.0.0.1/8{" "}
      </Infobox>

      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic8}
          alt="Obrázek 8"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        <b>Stanice Windows 10</b>
        <hr></hr>
        <br></br>
        <b>Statická IPv4 adresa:</b> <br></br>10.0.0.2/8{" "}
      </Infobox>

      <div className="w-full p-4 mx-auto my-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic9}
          alt="Obrázek 8"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        <b>Maska</b>
        <hr></hr>
        <br></br>
        /8 {">"} 255.0.0.0 -internal /24 {">"} 25.255.255.0 - virtual switch
      </Infobox>
    </div>
  );
}

export default SettingUpNetwork;
