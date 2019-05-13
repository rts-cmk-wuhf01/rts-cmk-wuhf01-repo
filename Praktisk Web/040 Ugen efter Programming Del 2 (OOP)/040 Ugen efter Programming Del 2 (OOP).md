# **Praktik uge 20, 2019 - Ugen efter Programmering Del 2 (OOP)**

**Start:** Mandag d. 13/5-2019 (starter i uge 20)<br>
**Slut:** Fredag d. 24/5-2019

## **GitHub Repository**

Opret repository **"praktik-uge20-2019-fornavn-efternavn"**.<br>
Sæt læreren på som **collaborator**.


<br><br>

## **Formål**

Formålet med projektet er, at træne nogle af de ting du har lært inden for **Objekt-Orienteret Programmering** og lidt **"avanceret" CSS** (som badges, transitions og hvad du ellers kan finde på).


<br><br>

## **Hvad behøver du IKKE at lave**

Jeg vil starte med at nævne de ting, som du ikke behøver at lave, så du ikke ender med at spilde din tid.

Har du lyst til at lave disse alligevel, er du velkommen til det, men kun hvis det ikke afholder dig fra at opfylde de andre krav.

* Du behøver ikke at **designe den lækreste webside**. <br>Brug nogle bahagelige farver, og sørg for at siden er **lettilgængelig** og **brugervenlig**.

* Siden behøver ikke at være **responsive**.

* Der behøver ikke at være en **burgermenu**.

* Du behøver ikke at **validere formular-elementer**, hvis det tager for meget af din tid.

<br><br>

## **Opgavebeskrivelse**

Hvis du ønsker lidt **inspiration til layout/design**, så se de udleverede [**skærmbilleder**](./Screenshots/). Bare husk, at du ikke behøver at få det til at ligne præcist.

<br>

### **ALLE UNDERSIDER**

Følgende skal være på alle undersider.<br>

**Navigation**

* Links: **"Home"**, **"Show"**, **"Edit"**.

* Der skal bruges **font-ikoner** til linksne.<br>
F.eks. disse font-awesome ikoner: [Home](https://fontawesome.com/icons/home?style=solid), [Show](https://fontawesome.com/icons/list?style=solid), [Edit](https://fontawesome.com/icons/edit?style=regular)

* Linksne skal **vise og skjule side-sektioner**. De skal helst ikke sende brugeren til en ny HTML fil ellers er du tvunget til at bruge LocalStorage, Cookies, Database eller lignende.

* Se om du ikke kan lave en **NavManager class** til at håndtere disse. Dette er **ikke et krav**.

**Statistik**

I headeren vises **antallet** af Institutions, Educations, Classes og Students i alt.

Antallet skal vises som [**badges**](https://www.cssportal.com/blog/create-css-notification-badge/).<br>Dvs. tallene skal stikke lidt udover parent-elementet.

Disse skal altid være **up-to-date**. Hvis du f.eks. på **Edit siden** tilføjer/fjerner noget, så skal statistikkerne opdateres.

Se om du ikke kan lave en **StatsManager class** til at håndtere disse. Dette er **ikke et krav**.

<br>

### **FORSIDEN**

* Forsiden skal blot **byde brugeren velkommen** og fortælle lidt om, **hvad man kan på siden**, specielt hvis du har valgt at tilføje elementer, som ikke var et krav.

<br>

### **SHOW DATA** _(underside)_

Siden skal **liste** alle Institutions, Educations, Classes og Students som et **hierarki**. Dvs. man skal tydeligt kunne se, hvordan de relaterer til hinanden. Se evt. de udleverede [**skærmbilleder**](./Screenshots/).

Oplysningerne skal komme fra dine **Javascript objekter**, som du arbejdede med i **Programmering Del 2**.

Jeg vil råde dig til at lave en **PageShowData class**, så du slipper for variabler og funktioner i DOMContentLoaded, som kun hører til denne underside.

<br>

### **EDIT DATA** _(underside)_

På denne side skal man vha. **formular-elementer** og links/knapper kunne **administrere dataen**, som ligger i dine **Javascript objekter**.

**Vælg et godt sted at starte**, som f.eks. administration af Classes og Students.

Få det til at virke rigtigt godt, **før du begynder at genbruge** HTML og Javascript til de andre oplysninger.

Vi bliver ikke sure, **hvis du ikke får udviklet hele administrationsdelen**... med mindre det skyldes dovenskab, selvfølgelig.

Tænk rigtig meget over **brugervenligheden**. Bed holdkammeraterne om at teste dit system og komme med feedback.

Du er velkommen til at **nedprioritere validering** af formular-elementer, hvis du føler, at det tager for meget af din tid.

Jeg vil råde dig til at lave en **PageEditData class**, så du slipper for variabler og funktioner i DOMContentLoaded, som kun hører til denne underside.

