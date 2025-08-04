var scriptReturned = document.getElementById('scriptReturned')
var callrepButton = document.getElementById("callrepButton")


callrepButton.addEventListener("click", displayScript)


function displayScript (){
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    
    scriptReturned.innerHTML = "Hello. My name is " + name + " and I live in " + place + ". I am calling to ask you to please vote against any act to dismantle or defund the Department of Education. Many children in the United States signficantly benefit from the DOE -- especially those that are ESL (English as a Second Language), underserved, multilingual, or require special needs. Please stand up for not only our state but a country that values high quality education and equality for all ! Thank you for your attention.";
}

