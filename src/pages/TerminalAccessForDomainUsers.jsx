import Topbar from "../components/Topbar";
import Legal from "../components/Legal";
import Infobox from "../components/Infobox";

function TerminalAccessForDomainUsers() {
  return (
    <div>
      <Topbar number="#9" title={"Terminálového serveru pro Domain Users"} />
      <Legal />
      <Infobox>
        Server manager -{">"} Manage (vlaječka) -{">"} Add roles features -{">"}{" "}
        Remote Desktop Services
      </Infobox>
    </div>
  );
}

export default TerminalAccessForDomainUsers;
