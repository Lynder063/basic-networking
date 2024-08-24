function Legal() {
  return (
    <div className="grid grid-cols-6 p-4 m-4 bg-white rounded-lg border-2 border-red-600">
      <span className="col-span-1 text-center text-red-600 material-symbols-outlined">
        warning
      </span>
      <div className="col-span-4 text-lg font-bold text-center text-red-600">
        Právní upozornění
      </div>
      <span className="col-span-1 text-center text-red-600 material-symbols-outlined">
        warning
      </span>
      <div className="col-span-6 text-xs">
        Obsah na této webové stránce je poskytován výhradně pro edukativní
        účely. Informace zde uvedené nemusí nutně odrážet skutečnou realitu a
        mohou obsahovat vymyšlené nebo smyšlené prvky. Jakákoli podobnost s
        reálnými osobami, událostmi nebo místy je čistě náhodná. Autor a
        provozovatel této stránky nepřebírá žádnou zodpovědnost za správnost,
        úplnost ani aktuálnost informací uvedených na této stránce. Jakékoliv
        kroky podniknuté na základě informací z této stránky jsou výhradně na
        vlastní riziko návštěvníka. Doporučujeme si před podniknutím jakéhokoliv
        kroku ověřit informace z důvěryhodných zdrojů. Použitím této stránky
        berete na vědomí a souhlasíte s těmito podmínkami.
      </div>
    </div>
  );
}

export default Legal;
