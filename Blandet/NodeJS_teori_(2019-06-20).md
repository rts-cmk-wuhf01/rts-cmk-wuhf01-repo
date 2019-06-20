
* NodeJS + ExpressJS  (Server)

* Routes svarer til handlinger vi kan bede serveren om at udføre.<br>
De er interfacet mellem browseren og serveren.<br>
Eksempel:
	```
	app.get ("/articles", (req, res) => { ... })
	```

* req  (Request) - Indeholder oplysninger om/fra klienten (browseren).
	* req.params   (URL parameter)<br>
	Eksempel:
		```
		URL:  localhost:3000/articles/3

		app.get("/articles/:category_id", (res, req) => {
			console.log(req.params.category_id)
		})
		```

* req.body - Indeholder data, som f.eks. er sendt via en formular.<br>
Eksempel:
	```
	console.log (req.body.email)
	```

* res (Response) - Bruges til at kommunikere med browseren.

	* res.send() - Giver et svar til browseren (client) og sender evt. en besked med.<br>
	Eksempel:
		```
		res.send ("Min route virker!");  // Dette vises direkte i browseren
		```

	* res.redirect (route) - Sender brugeren videre til en specifik route.<br>
	Eksempel:
		```
		res.redirect ("/login");  // Sender brugeren til login siden
		```

* View Engine  (EJS) - Gør det nemt at sammensætte og sende HTML til browseren.<br>
	* res.render (fil, data) - Indlæser en EJS fil og sender evt. data til EJS filen<br>
	Eksempel:<br>
		```
		res.render ("articles", {      // Indlæser "articles.ejs"
			"articles":  articles  // Sender et articles array til EJS filen
		});
		```

	* Partials er EJS filer, som indeholder små HTML stumper, som f.eks. Nav, Footer, Sidebar

	* Server tags i EJS:
		```
		<%   %>
		```

	* Udskriver indholdet af variablen title:
		```
		<%=  title %>
		```

	* Tjekker om variablen articles eksisterer:
		```
		<% if (typeof articles != "undefined") { %>
		```

	* Når vi er i gang med at udskrive f.eks. artikler fra en database,
	så er det kolonne-navnene i databasen, der bestemmer, hvad
	der skal stå efter "article."  (efter punktummet).<br>
	<br>
	Eksempel:<br>
		```
		<% articles.forEach (article => { %>
			<%= article.article_id  %>
		<% }) %>
		```


* MySQL (DB) - (Structured Query Language)
	
	* Eksempel, som henter alle artikler:<br>
		```
		SELECT * FROM articles
		```
		I ovennævnte eksempel, hvordan kan man se, at den henter ALLE artikler?<br>
		Svar: Der er ingen begrænsning, som f.eks. WHERE.<br>
		Det er IKKE stjernen, der gør, at alle artikler bliver hentet.<br>
		Stjernen betyder bare alle kolonner, som f.eks. article_id,  article_title, osv.
	
* BodyParser - Gør det nemt at arbejde med data, som f.eks. er blevet sendt via en formular.
	
	* Eksempel:
		```
		console.log (req.body.emne)
		```
		Ovenstående kode kræver attributten ```name="emne"``` på f.eks. ```<input>``` feltet i formularen.



