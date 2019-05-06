# **Programmering faget - Del 2**

**Varighed:** 6 dage<br>
**Start:** Fredag d. 3/5-2019 (starter i uge 18)<br>
**Slut:** Fredag d. 10/5-2019

## **GitHub repository**

* Opret repository "**programmering-fag-*fornavn-efternavn***".
* Opret undermappen **"Del 2"**.
* Sæt læreren på som **Collaborator**.
* **PUSH** HVER DAG

## **Emner**

* **Objekt-Orienteret Programmering (OOP) i Javascript**
	* Classes
	* Instances / Objects
	* Properties
	* Methods *(functions)*
	* Constructor *(method)*
	* "this" keyword
	* "new" operator

* **Kodestruktur**

* **Genbrug af kode**

* **Komponenter** <br>
*Komponenter er de mindre dele, som websiden består af, som f.eks. galleri-sliders, rating-systemer, colorpickers, osv.*

<br><br>

## **Undervisning**

Objekt-Orienteret Programmering (**OOP**) kan være et ret **svært** og **abstrakt** emne for nye programmører at sætte sig ind i og endnu sværer for lærere at forklare på skrift. Det er derfor utrolig vigtigt, at du er **tilstede, når der holdes oplæg** og at du sørger for at **tage en masse noter** efter du har fået lov at sidde selv med det.

Forvent IKKE, at lære stoffet ved bare at læse dette dokument. Du skal følge undervisningen.



<br><br>

## **Clone rts-cmk-wuhf01-repo**

Hvis du sørger for at klone vores **"rts-cmk-wuhf01-repo"**, så kan du nemt kopiere **udleverede filer**, når du bliver bedt om det (der kommer mere kode senere, som du kan/skal benytte dig af).

Husk at du ikke har rettigheder til at pushe til vores repository, så **lad være med at ændre i vores filer** ellers risikerer du, at miste dine ændringer, når vi opdaterer vores repository. Du kan blot se og kopiere indholdet.


<br><br>

## **Simple eksempler resulterer ofte i "bad practice" kode**

Når vi vælger at simplificere kode, for at give dig en blød introduktion, kan vi ikke undgå, at vise dig kode, som ikke er "best practice". Det skal vi nok løbende rette op på.


<br><br>

## **Simpelt OOP eksempel** *(kan bruges som skabelon)*

For at hjælpe dig i gang, har jeg gjort et supersimpelt eksempel klar. Dette kan du justere som du har lyst og bruge det fremover som skabelon, når du får brug for at "definere en ny class i JS" *(dette skal vi selvfølgelig nok forklare)*.

Kig i mappen **"Udleverede kode"** i nærheden af denne markdown fil.

Kopiér mappen **"Simple_OOP_example"** over til dit eget repository, så du frit kan rette i koden. <br>Kør derefter index.html i browseren og kig i konsollen.

Du finder informationer om eksemplet både på siden i browseren og i koden.

Eksemplet vil blive gennemgået på projektoren.


<br><br>

## **Hvad forventes der af dig**

Udover at du skal **lave de opgaver, vi løbende stiller**, kræver vi bl.a. at **du kan forklare følgende:**

* Hvad er forskellen mellem **classes** og **objects** (instances)?

* Hvad er formålet med **constructor** metoden?

* Hvordan definerer man **metoder**?

* Hvad bruger man "**this**" til?

* Hvad bruger man "**new**" til?

* Hvis **fordele** er der forbundet med OOP?

Tag ovenstående spørgsmål, indsæt dem i din notefil og skriv svarene så snart du har fundet dem.


<br><br>

## **Om opgaverne**

**Da dette er en introduktion til OOP**, skal du være opmærksom på, at dét du får udviklet ved at følge opgaverne, ikke nødvendigvis bliver et perfekt eksempel på **"hvordan man gør derude"** i forbindelse med webudvikling.

Ved at løse opgaverne, viser du at **du har forstået grundlæggende OOP** og at du forstår **fagudtrykkene**.

Kig på de **udleverede eksempler**, når du løser opgaverne, som f.eks. **CounterSystem eksemplet**, så giver det bedre mening, hvad det er du bliver bedt om at gøre.

Person- og CounterSystem-eksemplerne var IKKE opgaver og skal derfor ikke lægges i en mappe kaldet "opgave_xx".

Husk nu at skrive **noter** og **kodekommentarer**.


<br><br>

## **Opgave 1**

Opret **mappen "opgave_01"** til følgende.

* Indsæt følgende HTML:

```
	<div id="switchsystem-1" class="switchsystem">
		<button class=".switchsystem-state-off">Off</button>
	</div>

	<div id="switchsystem-2" class="switchsystem">
		<button class=".switchsystem-state-off">Off</button>
	</div>
```

* Opret selv tilhørende **CSS fil**.

* Definér **class**'en **SwitchSystem** i en separate JS fil.

* Opret følgende **egenskaber** tilhørende class'en: <br>
*(Det der står mellem parenteserne er **standardværdierne** i class'en)*

	* **state** (0)
	* **cssClassOff** (".switchsystem-state-off")
	* **cssClassOn** (".switchsystem-state-on")
	* **textOff** ("Off") -- *Gør det nemt at oversætte til andre sprog*
	* **textOn** ("On") <br><br>*Du kan få brug for flere egenskaber end nævnt her. Dem opretter du selv.*

* Definér **metoden attachToHTML**, som gør referencer til HTML elementer klar, opretter click-events, osv.

* Definér **metoden changeState**, som skifter værdien af **state egenskaben** og derefter kalder **updateUI metoden**.

* Definér **metoden updateUI**, som sørger for, at knappens **tekst** og **udseende** stemmer overens med værdien af **state egenskaben**, ved hjælp af CSS classes. **Inline styling er ikke tilladt**.


* I **index.js**, opret **2 instanser (objekter)** af SwitchSystem class'en.

* Der må maksimum være **2 linjer kode per switch system** i **index.js** (du kan sagtens klare det med én linje per switch system).

* Sørg for, at **opdatere brugerfladen, når siden er færdig med at loade**.<br>Dvs., der skal stadig stå On eller Off og knapperne skal have den korrekte css class, selv om HTML'en starter med at se således ud *(læg mærke til, at både class og tekst mangler)*:

```
	<div id="switchsystem-1" class="switchsystem">
		<button></button>
	</div>

	<div id="switchsystem-2" class="switchsystem">
		<button></button>
	</div>
```


**Ekstraopgave**

Mappe: **"opgave_01_ekstra1"**

*Du må IKKE overskrive den oprindelige opgave!*

• Slet **cssClassOff** og **cssClassOn** egenskaberne og brug et **array** i stedet, hvor index 0 indeholder CSS class'en til off-state og index 1 indeholder CSS class'en til on-state.


**Ekstraopgave**

Mappe: **"opgave_01_ekstra2"**

• Brug **data-attributter** til at bestemme knappens **state** via HTML'en.<br>Eksempel, hvor den første knap starter med at være Off og den anden er On:

```
	<div id="switchsystem-1" class="switchsystem">
		<button data-state="0"></button>
	</div>

	<div id="switchsystem-2" class="switchsystem">
		<button data-state="1"></button>
	</div>
```

Det er helt i orden, hvis data-attributten udelukkende bruges til at bestemme start-værdien.

Sagt på en anden måde: Det gør ikke noget, hvis knappen ikke skifter udseende, hvis man ændre data-attributten værdi via Developer Tools i browseren.
