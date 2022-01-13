$(document).ready(function(){
  $(".animals").click(function(){
    event.preventDefault();
     const selectedAnimal =$(this).attr("href");
     console.log(selectedAnimal);
     if (selectedAnimal === "Turtles")
     {
       $("div.turtles").show();
     }
});

});