# Hvad er SASS?

SASS er en alternativ måde, at skrive CSS på.

Der findes **2 syntakser**:
* **SASS** (første udgave)
* **SCSS** (Sassy CSS, som er anden udgave. Ligner almindeligt CSS).

Hvad kan man gøre i SASS?:<br>
https://sass-lang.com/guide

**SASS er ikke understøttet i browseren**. Vi er derfor nødt til at **konvertere** SASS til CSS ved hjælp af en **compiler/preprocessor**.



<br><br>
# Installation af SASS compiler i terminalen (standalone)

Man kan sagtens nøjes med at bruge en CSS compiler. Det er ikke nødvendigt, at bruge Webpack, Gulp, Grunt eller lignende [automatiseringsværktøjer](https://hackernoon.com/javascript-build-tools-and-automation-systems-9589c5c91ebe).

Nedenstående kommandoer kan bl.a. eksekveres via **VSCode** ved at åbne terminalen (Menu > View > Terminal).

Følgende kommando **installerer sass compileren** globalt (-g betyder global), så du kan kalde den fra hvilken som helst mappe. For at køre denne kommando, kræver det at man har **NPM** (Node Package Manager) installeret. NPM følger med [Node](https://nodejs.org/en/download/).

	npm install -g sass

Følgende kommando får sass til at **holde øje med ændringer** i mappen **"src/sass"**. <br>Så snart en fil bliver oprettet eller gemt, konverterer den sass koden og lægger den i en almindelig css-fil i mappen **"dist/css"**

	sass --watch src/sass:dist/css	

Eksempel på en filstruktur ifm. ovenstående eksempel:<br>
*("dist" betyder "distribution",  "src" betyder "source")*
```
dist
|    css
|    |   style.css  (oprettes automatisk af sass compileren)
|    index.html

src
|    sass
|    |   style.scss
```

Så længe `sass --watch` kører, kan du ikke eksekvere andre kommandoer i samme terminal. Du bliver nødt til enten at **afbryde** den ved at trykke CTRL+C i VSCode eller åbne en [ny terminal](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals).

Man kan få sass compileren til at **minify/komprimere** CSS'en (fjerner mellemrum, tabs og linjeskift), hvilket kan nedsætte tiden det tager browseren at downloade CSS-filen. Dette gør man ved at tilføje `--style=compressed` ([Læs mere](https://web-design-weekly.com/2014/06/15/different-sass-output-styles/))

	sass --watch src/sass:dist/css --style=compressed



<br><br>
# SASS grafisk brugerflade (compiler uden terminal)

I stedet for at skrive kommandoer i terminalen, kan man benytte sig af en **GUI** (grafisk brugerflade) til at konvertere SASS til CSS. Jeg vil dog fraråde dig, at blive for afhængig af dette. Jeg er overbevist om, at de fleste udviklingsteams derude bruger terminalen.

**10+ Best Tools and Resources to Compile & Manage SASS, LESS, and Stylus**<br>
https://graygrids.com/best-tools-resources-compile-manage-sass-less-stylus-css-preprocessors/

*(Jeg har aldrig brugt ovennævnte GUIs. Brug dem på eget ansvar)*


<br><br>
# Test SASS online (uden installation)

Der findes mange websites, hvor man kan afvikle SASS kode direkte i browseren, uden at installere noget. Dette gør man typisk for hurtigt at teste koden eller for at dele med andre.

Her er et par websites:

* [CodePen](https://codepen.io)
* [JSFiddle](https://jsfiddle.net/)
* [SassMeister](https://www.sassmeister.com/)

Nyttige søgekriterier (klik for at søge på Google):
* [sass online compiler](https://www.google.com/search?q=sass+online+compiler)
* [sass playground](https://www.google.com/search?q=sass+playground)

<br><br>
*(Skrevet af Ady d. 5/2-2019)*