function remove(){
    var element = document.getElementById("elementToRemove");
    element.parentNode.removeChild(element);
}
function removeBootstrapClass() {
    var element = document.getElementById("nav");
    // Remove the Bootstrap class
    element.style.backgroundColor="black";
    element.classList.add("d-sm-flex");
    var container = document.getElementById("search");

    // Create a new element
    container.classList.add("d-flex");

}
function addBootstrapClass(){
    var element = document.getElementById("nav");
    element.style.backgroundColor="transparent";
    element.classList.add("d-sm-none");
    element.classList.add("d-lg-flex");
    var container = document.getElementById("search");
    container.classList.remove("d-flex");
    container.classList.add("d-none");
}

let cities={
    UK : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859391/london_mn4pzj.png","London"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859643/leistar_kqe0du.png","Bhirmingam"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859653/bhirmingam_ozqmzd.png","Leicester"]
    ],
    Australia : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859846/melbourn_yth5ag.png","Melbourne"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859909/brisbane_o5jjs3.png","Brisbane"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704859959/sedney_ig8avf.png","Sydney"]
    ],
    Ireland : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704864636/dublin_m2bwvm.png","Dublin"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704864641/cork_dba5pi.png","Cork"]
    ],
    US : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704864866/Newyork_nvywif.png","New York"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704864871/chicago_cr66bw.png", "Chicago"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704864876/austin_lfzbrf.png", "Austin"],
    ],
    Canada : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865111/toronto_lns4m2.png","Toronto"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865126/montreal_ioga4e.png","Montreal"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865141/vancouver_os9vqv.png","Vancouver"]
    ],
    Germany : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865474/francfurt_lmfxa7.png","Francfurt"],
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865479/Hamburg_ekldkn.png","Hamburg"]
    ],
    Spain : [
        ["https://res.cloudinary.com/dkredoejm/image/upload/v1704865622/barcelona_f0mhut.png" ,"Barcelona"]
    ]
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('section3-item')) {
      // Access the id of the clicked button
      var id = event.target.id;
      

      // Display the result
      console.log('Clicked button ID:', id);
      console.log(id);
      let data=(cities[id]);
      console.log(data);
      let citiesContainer=document.getElementById("cities");
      citiesContainer.innerHTML='';
      console.log(citiesContainer);
      for(i=0;i<data.length;i++){
        let section3Item=document.createElement('div');
        section3Item.style.backgroundImage=`url(${data[i][0]})`;
        section3Item.style.backgroundSize="cover";
        section3Item.classList.add("section3-content");
        let content=document.createElement('p');
        content.textContent=data[i][1];
        content.classList.add("section3-content-subpara");
        section3Item.appendChild(content);
        citiesContainer.appendChild(section3Item);
      }
    }
  });




