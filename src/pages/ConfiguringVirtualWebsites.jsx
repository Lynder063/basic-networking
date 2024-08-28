import Topbar from "../components/Topbar";
import Legal from "../components/Legal";
import Infobox from "../components/Infobox";

import pic22 from "../assets/PZ_img/image_22.png";
import pic23 from "../assets/PZ_img/image_23.png";
import pic24 from "../assets/PZ_img/image_24.png";
import pic25 from "../assets/PZ_img/image_25.png";

function ConfiguringVirtualWebsites() {
  return (
    <div>
      <Topbar number="#8" title={"Konfigurace virtualních webů"} />
      <Legal />
      <Infobox>Nastavená produkt produkt100.cz</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic22}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        A pak jsem jen šel do DNS udělal jsou novou zonu produkt100.cz nastavil
        jsem všude jen jméno a jinak jsem všude nechal defualtní hodnoty a pak
        jsem přidal záznam A
      </Infobox>
      <Infobox>
        A pro IP address jsem dal IP adresu serveru což v tomto případě je
        10.0.0.1
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic23}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic24}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        A pak jsem jen zadal do prohlížeče abych otestoval jestli funguje (ještě
        potřeba tam vytvořit nějaký dokument v té složce třema index.html a do
        toho napsat nějaký text)
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic25}
          alt="Obrázek 7"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>A tohle celé zopakovat jen pro Produkt200.cz</Infobox>
    </div>
  );
}

export default ConfiguringVirtualWebsites;
