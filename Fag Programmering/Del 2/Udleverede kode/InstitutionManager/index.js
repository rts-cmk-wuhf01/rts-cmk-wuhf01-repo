// An example of how the Institution Manager could be used.


// Creates the Manager
let institutionManager = new InstitutionManager ();

// Creates the Institutions
let institution1 = new Institution ("RTS");
let institution2 = new Institution ("KTS");

// Manager >> Adds references to the newly created Institutions
institutionManager.addInstitution (institution1);
institutionManager.addInstitution (institution2);

// Outputs the name of the first institution using the Manager
console.log (institutionManager.institutions[0].name);
