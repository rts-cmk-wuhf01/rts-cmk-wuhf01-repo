# Avanceret CSS faget


### **Node, NPM, Webpack, Præprocessorer (LESS, SASS, SCSS, osv)**

*(NPM står for Node Package Manager)*

* Download og installér Node.js:<br>
[WUHF01 / Node](/Blandet/Node.md)

* Clone følgende repository i en ny mappe på harddisken:
https://github.com/NielsHarbo/Webpack-med-Babel-Sass-og-BEMSkel

* Åbn `dist/index.html` i browseren, som viser en vejledning.

* Opret en ny test mappe på harddisken kaldet f.eks. "test-webpack".

* Følg ovennævnte vejledning, der viser hvordan du arbejder med Webpack, Babel, præprocessorer (LESS, SASS, SCSS, osv).

**Hvis det går galt**, kan du altid bare oprette en **ny test mappe** og følge vejledningen fra toppen igen.



---



### **GitHub: Node og gitignore**

Når du arbejder med Node projekter, så får du en mappe som hedder **"node_modules"**. Mappen indeholder moduler, som projektet har brug for, som f.eks. præprocessorer (så man bl.a. kan bruge LESS, SASS, SCSS, osv), MySQL database interface, og lignende.

Mappen indeholder typisk flere tusinde elementer (mapper og filer), som vi IKKE ønsker at pushe til GitHub. Derfor er det vigtigt, at du altid husker at lave en **gitignore til Node**, når du opretter repositories på GitHub.

Du skal nu teste om du kan få den til at ignorere "node_modules" mappen, når du pusher til GitHub.

* På GitHub, opret et nyt repository: "test-gitignore"

* Clone dette repository til din harddisk.

* Åbn mappen i VSCode.

* Åbn terminalen (se ovenstående instruktioner vedrørende terminalen)

* Skriv: `npm init -y`<br>
Dette skulle gerne oprette en `package.json` fil i mappen og ikke andet.

* Skriv: `npm install money --save`<br>
Dette er et modul, som bl.a. kan gøre det nemt at konvertere fra én valuta til en anden. Vi skal ikke rigtig bruge det til noget. Vi har bare brug for et tilfældigt modul.

* Højre-klik på `package.json` i VSCode og vælg **"Reveal in Explorer"** (i **Windows**) eller "Reveal in Finder" (på **Mac**).

* Du skulle gerne se mappen **"node_modules"**.<br>
Få dit operativsystem til at tjekke hvor mange undermapper og filer den indeholder. I Windows kan man **højre-klikke** på mappen og vælge **"Egenskaber"** (Properties).<br>
Efter at have installeret `money` modulet, siger min 5 filer og 1 mappe, hvilket slet ikke er slemt.

* Skriv: `npm install webpack webpack-cli --save`<br>
Tjek antallet af undermapper og filer igen. Min siger nu ca. **3400 filer** og **700 mapper**.

* Åbn GitHub Desktop, commit og push til GitHub.

* Åbn dit repository på GitHub's hjemmeside, sørg for at siden er genindlæst efter din Commit og bekræft, at **"node_modules"** mappen IKKE ligger på GitHub. <br>Hvis du kan se mappen på GitHub, så mangler du højst sandsynligt din **gitignore**.<br>
Det er muligt, at kopiere en gitignore fil fra et tidligere projekt.




---



### **Skriv noter!**

Husk at skrive en masse noter. Opsætning af websites er jo ikke noget man gør så ofte på uddannelsen, hvilket gør det svært at huske proceduren.