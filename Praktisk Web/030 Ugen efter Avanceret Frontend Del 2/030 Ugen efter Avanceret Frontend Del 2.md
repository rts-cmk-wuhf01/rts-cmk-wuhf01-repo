# **Praktik uge 14, 2019 - Ugen efter Avanceret Frontend Del 2**

**Varighed:** 5 dage<br>
**Start:** Mandag d. 1/4-2019 (starter i uge 14)<br>
**Slut:** Fredag d. 5/4-2019

## **GitHub Repository**

Opret repository **"praktik-uge14-2019-fornavn-efternavn"**.<br>
Sæt læreren på som **collaborator**.


<br><br>

## **Formål**

Formålet med projektet er, at træne nogle af de ting I har lært inden for **Javascript**.

**HTML, CSS og projekorganisering** er derfor blevet **nedprioriteret**. Læs næste afsnit grundigt, som omhandler hvad du ikke behøver at lave.

<br><br>

## **Hvad behøver du IKKE at lave**

Jeg vil starte med at nævne de ting, som du ikke behøver at lave, så du ikke ender med at spilde din tid.

Har du lyst til at lave disse alligevel, er du velkommen til det, men kun hvis det ikke afholder dig fra at opfylde de andre krav.

* Du behøver ikke at lave en **tidsplan**, Gannt, osv.

* Du behøver ikke at bruge GitHub's planlægningsværktøjer, som **GitHub Projects**, **Issues**, osv,<br>men lav alligevel én eller anden form for TODO liste, som du nu foretrækker at gøre det.

* Du behøver ikke at **designe en flot side**. <br>Den skal blot være **lettilgængelig** og **brugervenlig**.

* Siden behøver ikke at være **responsive**.

* Der behøver ikke at være en **burgermenu**.

<br><br>

## **Opgavebeskrivelse**

### **ALLE UNDERSIDER**

Følgende skal være på alle undersider.<br>
Har du lyst til at lave flere **HTML partials** end dem der er påkrævet her, så gør gerne dét.

**Navigation** og **Footer**

* Skal laves som en **HTML parital**, for at undgå, at have en en kopi på hver underside.

* Navigationen skal selvfølgelig linke til alle undersider.

* Javascriptet der indlæser disse to partials skal være i en fil for sig selv.

* Se om du kan undgå, at siden hopper pga. den forsinkede indlæsning af HTML partials (brug f.eks. nogle faste højder).

**Tema-knap**

* Der skal være en knap på alle undersider til at **skifte tema** (uden at genindlæse siden).

* Indstillingen skal **gemmes i LocalStorage**.

* Indstillingen skal **hentes fra LocalStorage** hver gang siden indlæses. <br>Hvis du oplever, at siden blinker, fordi dit script er for længe om at skifte til det andet tema, så overvej om scriptet skal køres tidligt på siden (og uden DOMContentLoaded). <br>Det er IKKE et krav, at du løser dette problem.

* Jeg vil ikke råde dig til at **transition** fra det ene tema til det andet, når temaet skiftes ved geninlæsning af siden. Det giver kun mening, når man klikker på knappen.<br>Er du i tvivl? Så drop transition.

<br>

### **FORSIDEN**

* Forsiden skal blot **byde gæsten velkommen** og fortælle lidt om, **hvad man kan på side**, specielt hvis du har valgt at tilføje elementer, som ikke var et krav.

* Formålet med forsiden er også at tjekke, hvordan jeres HTML partials og tema-skift kode fungerer, uden alt muligt andet Javascript oveni, der kan drille.

<br>

### **GALLERI** _(underside)_

Siden skal vise et **simpelt galleri** i stil med dét du lavede i Del 2 af Avanceret Frontend faget.

* Der skal mimimum være **3 billeder**.

* **Billedstierne** skal gemmes i form af **data-attributter**.

* **Korte titler** til billederne skal også gemmes i form af **data-attributter** og vises på siden under billedet.

* Den skal vise **hvilket billednr**, man er nået til således: 1 / 3.

	* Dette skal du gøre uden ekstra data-attributter.

	* Den må ikke skrive 0 / 2, når der f.eks. er 3 billeder (altså må den ikke vises index'et).

* Der skal være en **"Forrige"** og **"Næste"** **knap** *(engelsk også tilladt, selvfølgelig)*<br><br>**For at undgå, at knapperne flytter sig**, når man skifter billede, gør følgende:

	* Hvis du har placeret knapperne **over/under** billedet, <br>så giv billedet en **fast højde**.

	* Hvis du har placeret knapperne **ved siden ad** billedet, <br>så giv billedet en **fast bredde**.

* Der skal være en **"Auto" knap**

	* Når der klikkes første gang, begynder den **automatisk at skifte billede** ca. hvert andet sekund. Klikker man på knappen.

	* Når knappen trykkes igen, **stopper den**.

	* Knappen skal skifte **udseende**, når der trykkes på den.<br>Gør dette ved at **ændre class'en**, ikke vha. style egenskaben i Javascript.

* Javascriptet skal selv **holde styr på, hvor mange billeder der er**. <br>**Den må ikke vise fejl**, hvis man senere går ind og tilføjer/fjerner billedstier i HTML'en.

* Den må hellere ikke vise fejl, hvis der ikke er nogen billedstier.

* **Hele galleriet** (billedet, titlen og knapperne) skal sættes til **display: none**, hvis der ikke er nogen billedstier i HTML'en, og den skal **vise beskeden** _**"Der er desværre ingen billeder."**_

* Få den til at **huske, hvilket billedet, man var nået til**, så man har mulighed for at hoppe til andre undersider og komme tilbage og fortsætte. <br>Her ville det være oplagt at bruge **LocalStorage**.

<br>

### **Medarbejdere** _(underside)_

Denne side skal vise en fake medarbejderside.

* Gør nogle **tilfældige billeder** klar.

* I en **JSON**-fil, indsæt følgende om **minimum 3 medarbejdere**:
	* **Navn**
	* **Stilling**
	* **Kort tekst** om medarbejderen *(gerne mumletekst)*.
	* **Billedets** filnavn

* Indlæs JSON-filen og **udskriv oplysningerne** på siden ved hjælp af **HTML templates** og **cloneNode**.

* Hvis JSON-filen ikke indeholder nogen medarbejdere, så skal du vise følgende besked på siden: _**"Medarbejderlisten kommer snart"**_.

<br>

### **Gæstebog** _(underside)_

Siden skal vise en **fake gæstebog**. Dvs, indlæggene **huskes kun på den computer, du sidder ved**. De skal ikke være tilgængelige online.

* Der skal være en **formular** med følgende felter:

	* **Navn**  *(påkrævet)*
	* **Email**  *(valgfri)*
	* **Besked**  *(påkrævet)*
	* **Submit-knap**

* Under formularen skal den **vise alle indlæg** (navn og besked, nyeste først) eller, hvis der endnu ikke er nogen, så vises beskeden _**"Gæstebogen er tom. Vær den første til at skrive!"**_.

* Når der trykkes på **submit-knappen**:

	* **Validér** navn og besked.

		* Vis **fejlbeskeder/feedback** hvis nødvendigt.

		* Forsøg at vise alle fejl samtidig. Dvs. få den ikke til at brokke sig over ét felt ad gangen, men alle påkrævedede felter, der ikke er udfyldt korrekt.

	* Hvis felterne er i orden, indsæt navn, email og besked i et **array** i **LocalStorage**.

	* **Skjul formularen**.
	
	* Vis beskeden _**"Tak for besøget"**_.

	* **Vis den indtastede besked** som den første i ovennævnte liste og helst uden at genindlæse siden.<br>
	Hvis dette driller dig, så indlæs gerne siden.

**Ekstraopgave** (Gæstebog)

* Få den til at gemme de rigtige **datoer** og **tidspunkter**.

