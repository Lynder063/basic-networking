import Infobox from "../components/Infobox";
import Legal from "../components/Legal";
import Topbar from "../components/Topbar";
import pic1 from "../assets/PZ_img/001.png";
import pic2 from "../assets/PZ_img/002.png";
import pic3 from "../assets/PZ_img/003.png";
import pic4 from "../assets/PZ_img/004.png";
import pic5 from "../assets/PZ_img/005.png";
import pic6 from "../assets/PZ_img/006.png";

function InstallWindowsServer() {
  return (
    <div className="bg-gray-200">
      <Topbar number="#1" title="Instalace Windows serveru"></Topbar>
      <Legal />
      <Infobox>
        <strong>Name</strong> se musí rovnat určité kovenci pojmenovaní, která
        je ve stylu
        <br />
        <strong>PS2-(váš login)-Win_server_2019</strong>
        <br />
      </Infobox>
      <Infobox>
        Nesmíme zapomenout uložit VM na disk E: do složky PTPS a do svého loginu
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic1}
          alt="Obrázek 1"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Vybereme generace 2</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic2}
          alt="Obrázek 2"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Dáme VM 4G což je <strong>4096mb</strong> a nemusíme a nebo můžeme
        zakliknout Dynamic Memory
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic3}
          alt="Obrázek 3"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>Virtual switch nad I219V</Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic4}
          alt="Obrázek 4"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Vybereme, <strong>Use an existing virtual hard disk</strong> a uvedeme
        disk který nám byl poskytnut od učitele většinou se ukládá na disk{" "}
        <strong>E</strong>
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic5}
          alt="Obrázek 5"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
      <Infobox>
        Když nebudeme mít disk <italic>(což nepřepokládám)</italic> tak můžeme
        vytvořit disk možností <strong>Create a virtual hard disk</strong> a
        uložíme na disk E do své složky a dáme velikost <strong>127 GB</strong>.
        A v další sekci uvdeme cestu k ISO souboru co jsme dostali od učitele.
      </Infobox>
      <div className="p-4 mx-auto my-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={pic6}
          alt="Obrázek 6"
          className="object-cover h-auto rounded-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default InstallWindowsServer;
