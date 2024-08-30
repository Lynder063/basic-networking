import Title from "../components/Title";
import Titlebar from "../components/Titlebar";
import Legal from "../components/Legal";

function Homepage() {
  return (
    <div className="p-4 bg-gray-200">
      <Titlebar />
      <Legal />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:mx-52">
        <Title
          link="/instalace-windows-serveru"
          number="#1"
          title="Instalace Windows server"
        />
        <Title
          link="/nastavovani-sitovych-karet"
          number="#2"
          title="Nastavení síťových karet"
        />
        <Title
          link="/instalace-active-directory-s-dns"
          number="#3"
          title="Instalace AD včetně DNS"
        />
        <Title
          link="/nastaveni-sdilene-slozky-spolecne"
          number="#4"
          title="Nasdílení složky (spolecna)"
        />
        <Title
          link="/instalace-iis-s-podporou-asp"
          number="#5"
          title="Instalace IIS s podporou ASP"
        />
        <Title
          link="/konfigurace-dhcp-serveru"
          number="#6"
          title="Konfigurace DHCP serveru"
        />
        <Title
          link="/konfigurace-virtualnich-webu"
          number="#7"
          title="Konfigurace virtualních webů"
        />
        <Title
          link="/terminalovy-pristup-pro-domenove-uzivatele"
          number="#8"
          title="Terminálového serveru pro Domain Users"
        />
        <Title
          link="/windows-server-jako-router"
          number="#9"
          title="Windows server jako router"
        />
      </div>
    </div>
  );
}

export default Homepage;
