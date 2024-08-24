import Infobox from "../components/Infobox";
import Topbar from "../components/Topbar";

function InstallWindowsServer() {
  return (
    <div>
      <Topbar number="#1" title="Instalace Windows serveru"></Topbar>
      <Infobox>
        Name se musí rovnat určité kovenci pojmenovaní, která je ve stylu
        <br />
        <strong>PS2-(váš login)-Win_server_2019</strong>
        <br />
      </Infobox>

      <Infobox>
        Nesmíme zapomenout uložit VM na disk E: do složky PTPS a do svého loginu
      </Infobox>
    </div>
  );
}

export default InstallWindowsServer;
