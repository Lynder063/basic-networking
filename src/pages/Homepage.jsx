import Title from "../components/Title";
import Titlebar from "../components/Titlebar";
import Legal from "../components/Legal";
function Homepage() {
  return (
    <div className="bg-gray-200">
      <Titlebar></Titlebar>
      <Legal></Legal>
      <Title
        link="/instalace-windows-serveru"
        number="#1"
        title="Instalace Windows server"
      />
      <Title number="#2" title="Nastavení síťových karet" />
      <Title number="#3" title="Instalace AD včetně DNS" />
      <Title number="#4" title="Nasdílení složky (home)" />
      <Title number="#5" title="Nasdílení složky (spolecna)" />
      <Title number="#6" title="Instalace IIS s podporou ASP" />
      <Title number="#7" title="Konfigurace DHCP serveru" />
      <Title number="#8" title="Konfigurace virtualních webů" />
      <Title number="#9" title="Terminálového serveru pro Domain Users" />
      <Title number="#10" title="Windows server jako router" />
    </div>
  );
}

export default Homepage;
