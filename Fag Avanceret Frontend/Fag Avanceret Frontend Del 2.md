# **Avanceret Frontend faget - Del 2**

**Varighed:** 6 dage *(muligvis 7)*<br>
**Start:** Torsdag d. 21/3-2019 (starter i uge 12)<br>
**Slut:** Onsdag d. 29/3-2019

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

* Indtast 3 HTML elementer direkte i "index.html". De skal have samme class, f.eks. **```class="item"```**

	* Hvert item skal indeholde mindst **2 underelementer**, der hver især har en class, f.eks. **```class="item-title"```** og **```class="item-description"```**.

	* Sørg for at **indholdet** af alle titles og descriptions er **unikt**, f.eks. ved at skrive "Title 1", "Title 2", "Desc 1", "Desc 2".

* Brug **```querySelectorAll```** til at få en collection/array af **itemElements**.

* Lav en **løkke** der løber alle itemElements igennem.<br>For hvert itemElement:
	
	* Brug **```itemElement.querySelector```** både på **item-title** og **item-description**.

	* Tilføj et X efter deres indhold således: <br>**```innerHTML += " X"```**<br>*Husk at skrive **plus** foran lighedstegnet.*
	
**Hvis du har gjort det korrekt**, bør alle titles og alle descriptions nu have et X efter indholdet.

Hvis det kun er første item's underelementer der blev påvirket, så tjek lige hvad der står før querySelector inden i løkken. Du er højst sandsynligt kommet til at skrive "document" foran "querySelector".

**Ekstraopgave:**

*Husk at commit og push først.*

* Ved hjælp af førnævnte løkke, giv hvert **item** en **Click-event**.

	* Click-eventen skal tilføje et X i title elementet tilhørende det item, der blev klikket på.

* Klik på alle items for at sikre dig, at de ikke påvirker hinanden.

* Du skal stadig bruge itemElement.querySelector på title elementet i stedet for document.querySelector




<br><br>
## **Emne 3: cloneNode**

*(kommer snart)*



<br><br>
## **Emne 4: Data-attribut**

*(kommer snart)*



<br><br>
## **Emne 5: Skift CSS class via JS**

*(kommer snart)*



<br><br>
## **Emne 6: Indlæsning af CSS filer dynamisk**

*(kommer snart)*