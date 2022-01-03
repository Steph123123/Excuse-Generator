

window.onload = () => {

    
    
    document.querySelector("#button").addEventListener("click", () =>{
        document.querySelector("#excuse").innerHTML = excuseGenerator();
    });
    console.log("Hello Steph from the console!!");

}

let excuseGenerator = () => {

    let pronoun = ["A big","The great", "My", "The", "A"];
    let  who = ["T Rex", "Estegosaurus", "Carnotaurus", "Velociraptor", "Braquiosaurus"];
    let  action = ["eat ", "hug", "stole my", "bited ","took"];
    let what = ["my puddin", "my homework", "my heart", "my shoes", "my bag" ]
    let where = ["in the park", "in the church", "in the mall","in the neighbor", " in the classroom"];

let proIndex = Math.floor(Math.random() * pronoun.length);
let whoIndex = Math.floor(Math.random() * who.length);
let actionIndex = Math.floor(Math.random() * action.length);
let whatIndex = Math.floor(Math.random() * what.length);
let whereIndex = Math.floor(Math.random() * where.length);


    return pronoun[proIndex] + " " + who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + where[whereIndex] ;
}