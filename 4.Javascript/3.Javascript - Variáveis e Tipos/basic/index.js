var firstName = "João";
let lastName = "Sousa";

if(firstName === "João") {
    let lastName = "Rodrigues";
    var firstName = "Pedro";
    lastName = "Silva"; // pode reatribuir tirando o let 
    console.log(firstName, lastName);
}

console.log(firstName, lastName);