//Allows the search button to retrieve the data 
const search = document.getElementById('searchbtn')
console.log(search)
//adding an event listener to display the result when clicked
search.addEventListener("click", e => {
 //allows the page to not reload first until all content is retrieved
    e.preventDefault()

    //retrieves the data and displays the meaning
const searchValue = document.getElementById("searchinput").value 
    console.log(searchValue)
//creating a variable for the fetching the data in the api using get
const options = {
    method: 'GET',
    headers: {
         'X-RapidAPI-Key': 'e604fb0240msh461221651dc6dc9p17195ejsn8bb344e2f7fc',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }};
//fetches data from the server
fetch ('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + searchValue ,options)
     .then (response => response.json())
     .then (data => {
        //data  of the result is appended to the screen
        wordheading.innerHTML = "Here is the meaning of:" + data.word
        definition.innerHTML = data.definition.replace("2." , "<br>2.").replace("3." , "<br>3.") .replace("3." , "<br>3.").replace("4." , "<br>4.").replace("5." , "<br>5.").replace("5." , "<br>5.").replace("6." , "<br>6.").replace("7." , "<br>7.").replace("8." , "<br>8.").replace("9." , "<br>9.")
         })
    
})




