class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "usa.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "mexico.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "white", "red"], "algeria.jpg")
let egypt = new Country("Egypt", "Arabic", "We got the pyramids!", ["black", "white", "red"], "Egypt_flag.gif")
let germany = new Country("Germany", "German", "Come check out our cars!", ["black", "red", "gold"], "germany.jpg")
let ecuador = new Country("Ecuador", "Spanish", "We are near the equator.", ["yellow","blue","red"], "ecuador-flag.jpg")


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;
    if (input === "USA") {
        //set country to usa 
        country = usa;
       
    }
    else if (input === "Mexico") {
        country = mexico;
       
    }
    else if (input === "Algeria") {
        country = algeria;
      
    }
    else if (input === "Egypt"){
        country = egypt;
    }
    else if(input === "Germany"){
        country = germany;
        
    }
    else if(input === "Ecuador"){
        country = ecuador;
       
    }
document.getElementById("CountryName").innerText = country.name;
document.getElementById("OfficialLanguage").innerText = country.lang;
document.getElementById("HelloWorld").innerText = country.greeting;
document.getElementById("flag").src = country.flag;
DisplayColors(country.colors);
}

function DisplayColors(colors){
let color1 = document.getElementById("Color1");
color1.style.backgroundColor = colors[0];
let color2 = document.getElementById("Color2");
color2.style.backgroundColor = colors[1];
let color3 = document.getElementById("Color3");
color3.style.backgroundColor = colors[2];

}
