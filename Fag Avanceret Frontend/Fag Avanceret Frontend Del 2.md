# **Avanceret Frontend faget - Del 2**

**Varighed:** 6 dage *(muligvis 7)*<br>
**Start:** Torsdag d. 21/3-2019 (starter i uge 12)<br>
**Slut:** Fredag d. 29/3-2019

## **GitHub Repository**

Brug din repository fra første del af faget.<br>Opret undermappen **"Del 2"**.

## **Overordnede emner**

Du vil få indflydelse på hvilke emner vi tager op udover nedenstående:

1. HTML partials vha. Fetch (for at undgå gentagende kode i HTML filerne, som f.eks. navigationen).

2. **```parentElement.querySelector```** i stedet for **```document.querySelector```**

3. cloneNode: Et alternativ til både createElement og innerHTML.

4. HTML attributten "data" -- **```<div data-test="10"></div>```**

5. Skift CSS class på elementer via Javascript i stedet for at bruge **```myELement.style```**

6. Indlæsning af ekstra CSS filer dynamisk (f.eks. for at skifte tema uden at genindlæse siden)

Der skal oprettes **undermapper** til de forskellige emner tilhørende del 2.


<br><br>

## **Emne 1: HTML partials**

Vi skal vha. Fetch indlæse noget HTML og indsætte det på siden. Filen vi indlæser skal altså indeholde HTML denne gang, IKKE JSON.

Dette kræver heldigvis ikke en masse ny kode. Det ligner faktisk rigtig meget dét du har gjort hidtil.

Opret undermappen **"emne1_html_partials"** inden du udfører nedenstående.

Prøv at se, om du kan regne det ud vha. følgende **hints**:

1. Sørg for, at HTML filen du indlæser (hva. Fetch) kun indeholder en smule HTML, som f.eks. **```<nav>```** elementets children.

2. I din Fetch kode, erstat **```.json()```** med **```.text()```**

3. Console Log den indlæste data, som sædvanligt.<br>Hele indholdet af filen skulle gerne blive logget. Intet er blevet parset. Altså er det på nuværende tidspunkt bare rå tekst.

4. Hvad mon det næste trin er?




<br><br>

## **Emne 2: parentElement.querySelector**

**```document.querySelector```** leder altid hele dokumentet igennem. Hvis du vil have fat i et par elementer, som har samme parent, så kan det betale sig først at bruge querySelector på parent-elementet og derefter bruge **```parentElement.querySelector```**

Opret undermappen **"emne2_parent_queryselector"**.

**Opgave:**

1. Indtast 3 HTML elementer direkte i "index.html". De skal have samme class, f.eks. **```class="item"```**

	1a. Hvert item skal indeholde mindst **2 underelementer**, der hver især har en class, f.eks. **```class="item-title"```** og **```class="item-description"```**.

	1b. Sørg for at **indholdet** af alle titles og descriptions er **unikt**, f.eks. ved at skrive "Title 1", "Title 2", "Desc 1", "Desc 2".

2. Brug **```querySelectorAll```** til at få en collection/array af **itemElements**.

3. Lav en **løkke** der løber alle itemElements igennem.<br>For hvert itemElement:
	
	3a. Brug **```itemElement.querySelector```** både på **item-title** og **item-description**.

	3b. Tilføj et X efter deres indhold således: <br>**```innerHTML += " X"```**<br>*Husk at skrive **plus** foran lighedstegnet.*
	
**Hvis du har gjort det korrekt**, bør alle titles og alle descriptions nu have et X efter indholdet.

Hvis det kun er første item's underelementer der blev påvirket, så tjek lige hvad der står før querySelector inden i løkken. Du er højst sandsynligt kommet til at skrive "document" foran "querySelector".

**Ekstraopgave:**

*Husk at commit og push først.*

4. Ved hjælp af førnævnte løkke, giv hvert **item** en **Click-event**.

	4a. Click-eventen skal tilføje et X i title elementet tilhørende det item, der blev klikket på.

5. Klik på alle items for at sikre dig, at de ikke påvirker hinanden.

6. Du skal stadig bruge itemElement.querySelector på title elementet i stedet for document.querySelector




<br><br>

## **Emne 3: cloneNode**

Dette emne gik ud på, at **klone et eksisterende element** via JS og rette oplysningerne inden i kopien.

På den måde kan man undgå, at oprette elementer via **createElement** og **innerHTML**.

Fordele:
* Det er hurtigere og nemmere for os udviklere, at omstrukturere elementerne. <br>createElement kan hurtigt blive uoverskuelig, da man ofte ender med at skulle holde styr på en masse variabler.

* Flere medlemmer af udviklingsteamet (bl.a. designere) kan være med til at udføre arbejdet, da de ikke behøver at lære Javascript. De fleste kan finde ud af HTML.



<br><br>

## **Emne 4: Data-attribut**

Opret undermappen **"emne4_data_attribut"**.

Du er vant til at gemme oplysninger i Javascript variabler. Du skal nu i stedet prøve at **gemme og tilgå oplysninger**, som er gemt i HTML'en i form af **attributter**. Syntaksen ser sådan ud: **```<div data-test="10"></div>```**

<br>

**Emne 4, Opgave 01: Produkter og priser**

Inden i mappen til dette emne, opret mappen **"01"**, da der også kommer en anden opgave i forbindelse med data-attributter.

*(Du bestemmer selvfølgelig selv, om du vil bruge danske eller engelske navne i koden)*

1. Opret en div direkte i HTML'en, som har class'en "product" og **attributten** **"data-price"** (se ovenstående eksempel). Giv attributten en værdi, som f.eks. 100.<br>
Elementets **indhold** kunne være "Test Produkt".<br>
Du kan give et element lige så mange data-attributter du ønsker.

2. I Javascript, skab en **reference til HTML elementet**, vha. f.eks. querySelector og elementets class. Læg referencen i en variabel kaldet **productElement**.

3. **productElement** er et Javascript **objekt**.

	* Objektet har en indbygget **egenskab** kaldet **"dataset"** *(vi bestemmer IKKE selv dette navn)*.

	* **dataset** er et objekt, som i vores tilfælde har en **egenskab** kaldet **"price"**.<br>
	Dette skyldes, at vi kaldte **attributten** **"data-price"**.<br>
	*Hvis vi havde kaldt attributten for "data-bamse", så havde dataset fået egenskaben "bamse".*

	* Hvis **productElement** og **dataset** er **objekter**, <br>hvordan får man fat i egenskaben **price**?<br>
	Husk at relationen ser sådan ud: productElement -> dataset -> price

4. Console log egenskaben **price**, som tilhører **dataset**.<br>
Kan du se prisen (som et tal) i konsollen?

5. Ret HTML'en, så der er **3 produkter**.<br>
De skal alle have **samme class**.<br>
Giv dem **priserne** 100, 200 og 300.<br>
Sæt **indholdet** af elementerne til "Produkt 1", "Produkt 2" og "Produkt 3".

6. Fjern dit gamle Javascript (udkommentér det gerne, så du kan genbruge koden).

7. querySelect alle produkterne i ét hug, så du får et **array**.

8. Brug en **løkke** til at løbe dit array igennem, og for hvert produkt, console log den tilhørende **pris** via **dataset**. Gå først videre, når dette fungerer som forventet.<br>
Udkommentér console log'en når det virker.

9. Ved hjælp af den samme løkke, giv hvert produkt en **Click-event**.<br>
Når der klikkes på et produkt, skal den tilhørende pris logges.

10. I HTML-filen, opret et tomt element i toppen, som har id'et "display-product-title".

11. Ret førnævnte Click-event: Når der klikkes på et produkt, vises den tilhørende pris som indhold til elementet "display-product-title".

12. Vis teksten "kr." efter prisen (du må selvfølgelig ikke skrive "kr" i data-attributten).

13. Opret et tomt HTML element over pris-elementet.<br>
Giv det nye element id'et "display-product-title".

14. Når der klikkes på et produkt, vises navnet på produktet i elementet "display-product-title".

<br>

**Emne 4, Opgave 02: Galleri**

Inden i mappen til dette emne, opret mappen **"02"**.

Når oplysninger gemmes i HTML'en, fremfor i Javascriptet, sker der bl.a. dét, at man gør det nemmere for medlemmer af et udviklingsteam (f.eks. designere) at ændre i koden, på trods af at de ikke er så gode til Javascript.

VI skal nu prøve at lave et simpelt galleri, hvor **billedstierne** gemmes som **data-attributter** i nogle usynlige elementer på siden. Hvis designerne f.eks. får brug for at tilføje billeder, kan de supernemt gøre dette ved at duplikere et eksisterende element og rette data-attributten.

Inden vi begynder at arbejde med usynlige objekter, lad os først indsætte rigtige billeder, der er synlige på siden.

1. Gør 3 tilfældige billeder klar i **mappen "02/images"** og opret 3 **img-tags** til dem.

2. Når billederne er blevet vist korrekt på siden, pak dem ind i et **parent element**, som har **id'et "gallery-data"**.

3. Vha. CSS, sæt "gallery-data" elementets **display** til **none**, så det bliver usynligt. De underliggende billeder skulle også gerne blive usynlige. Test før du går videre.

4. Lav **img**-tagsne om til **div**'er *(husk luk-tagget)*.<br>
Lav **src** attributterne om til **data-url** attributter og behold **billedstierne**.<br>
*Husk, at ordet **"data"** og **bindestregen** skal være der, men du bestemmer ordet der kommer efter.*<br><br>
OBS: Fremover, når jeg i opgaven nævner **"data-elementerne"**, så mener jeg div'erne, som har en data-url attribut.

5. Lav en **løkke**, der løber alle **data-elementerne** igennem og console logger værdien af deres **data-url** attribut. Den skulle gerne bare udskrive alle **billedstierne**.

6. Opret et **tomt array** før løkken. Kald variablen for **"dataArray"** *(du kan finde på et mere sigende navn senere)*.

7. Inden i løkken, push hver billedsti til dataArray.

8. Efter løkken, console log hele dataArray og sikr dig, at billedstierne er alle blevet gemt korrekt.

9. Efter løkken, console log billedsti nr. 2.

10. I toppen af Javascriptet, men inden for DOMContentLoaded eventen, **opret variablen imageIndex** og sæt dens værdi til 0.

11. Ret console loggen fra trin 9. I stedet for at den altid bruger et specifikt index, skal den nu bruge imageIndex variablen som index. Husk dette. Du får brug for det senere i opgaven.

12. I HTML-filen, opret et **img-tag** med en **tom src** attribut. Giv elementet id'et **"current-image"**.

13. Gør en **reference** klar (tidligt i dit Javascript) til **"current-image"** elementet.

14. Efter løkken, brug referencen fra trin 13 og overskriv objektets **src** egenskab. Værdien af src skal komme fra dét du kom frem til i trin 11 *(altså hvor man lader **imageIndex** variablen bestemme hvilken billedsti der skal bruges).*<br>
Blev det **første billede** vist på siden?<br>
Prøv evt. i HTML-filen at ændre **rækkefølgen på data-elementerne**. Har det nogen indflydelse på, hvilket billede der betragtes som værende det første?

15. Nu skal vi kunne skifte til **næste billede**.<br>
Opret en **knap**, som har id'et **"btn-next-image"** og en sigende tekst.

16. Giv knappen en **Click-event**. Når knappen trykkes, skal følgende ske:

	16a. Læg én til imageIndex's værdi.

	16b. Tjek om **imageIndex** er **større end eller lig** med 3 <br>
	*(fy fy... vi erstatter det hardcodede tal om lidt)*

	16c. Hvis if-sætningen er sand, så sæt **imageIndex** til **0**, for at loope galleriet *(der skal ikke være mere inden i if-sætningens krøllede parenteser)*

	16d. Opdatér img elementets **src** egenskab ved hjælp af **dataArray** og **imageIndex** (se trin 14).

	16e. Tryk en masse gange på knappen og hold øje med evt. fejlbeskeder i konsollen. Hvis alt er ok, så **erstat 3-tallet** med den kode, der giver dig **antallet af værdier** inden i dataArray. Så kan vi alle sove trygt i nat.

17. Test, at din kode selv holder styr på hvor mange billeder der er, ved at tilføje/fjerne data-elementer direkte i HTML'en.

18. Lav en **"btn-previous-image"** knap og tilhørende Click-event i stil med trin 16. Test grundigt.

19. **Udkommentér alle data-elementerne** i HTML'en og genindlæs siden.<br>
I konsollen vil den højst sandsynligt brokke sig over, at **billedfilen ikke kunne findes**, da src attributten jo er blevet sat til **undefined**.<br>
Hvordan kan vi mon forhindre den i, at forsøge at opdatere billedets src attribut, når vi ikke har nogen billedstier.<br><br>
Det er faktisk ikke kun src attributten vi bør undgå at arbejde med, når der ikke er nogen billedstier. Jeg nævner den som det første, da det nok er det eneste sted i koden, som kan give fejl i konsollen.



<br><br>

## **Emne 5: Skift CSS class via JS**

Der er selvfølgelig flere måder, hvorpå man kan tilføje og fjerne elementers classes.

Jeg vil råde dig til at bruge **```myElement.classList```** -- (Info: [W3 Schools](https://www.w3schools.com/jsref/prop_element_classlist.asp) / [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList))

**classList** er et objekt, der har nogle smarte **metoder** (dvs. **funktioner**), som f.eks.:
* add
* remove
* toggle
* contains

Lav et lille eksempel, som **demonstrerer** ovennævnte **funktioner**.<br>
Gør det nemt for dig selv, at genbruge koden. Tilføj evt. kommentarer.



<br><br>

## **Emne 6: Indlæsning af CSS filer dynamisk**

Vi gennemgik på tavlen, hvordan man via Javascript manipulerer med **```<link>```** tags i **```<head>```** og på den måde får den til at **skifte tema**.

Når man har fået querySelect'et sit link-element, kan man bare ændre værdien af objektets **href egenskab**: **```cssLinkElement.href = "css/style2.css";```**

Lav følgende eksempler.

<br>

**Eksempel 1:**

* Du har **ét link-tag** i head, der f.eks. indlæser **```"css/style1.css"```**.

* Du har en **knap 1**, som ændrer link-elementets **href** attribut til **```"css/style1.css"```**

* Du har en **knap 2**, som ændrer link-elementets **href** attribut til **```"css/style2.css"```**

<br>

**Eksempel 2:**

* Du har **2 link-tags**:
	
	* Ét hvor **href** peger på **```"css/default.css"```**.

	* Ét hvor **href** er tomt.<br>Giv elementet et **id**, som f.eks. **"extra-css"**, så du kan få fat i det i JS.


* Du har en **knap 1**, som ændrer "extra-css" link-elementets **href** attribut til **```""```**, så det kun er default css, der bliver brugt.

* Du har en **knap 2**, som ændrer link-elementets attribut til f.eks. **```"style2.css"```**

<br>

**Eksempel 3:**

* Du har **2 link-tags**:
	
	* Ét hvor **href** peger på **```"css/default.css"```**.

	* Ét hvor **href** er tomt.<br>Giv elementet et **id**, som f.eks. **"extra-css"**, så du kan få fat i det i JS.


* Du har **kun én knap**, som finder ud af om "extra-css" link-elementets **href** attribut skal sættes til **```""```**, så det kun er default css, der bliver brugt, eller til f.eks. **```"style2.css"```**

* Dette kan godt kræve, at du laver **din egen Javascript variabel**, der holder styr på hvilket tema der skal bruges. 