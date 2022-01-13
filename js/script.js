$(document).ready(function(){
  $(".animals").click(function(){
    event.preventDefault();
     const selectedAnimal =$(this).attr("href");
     console.log(selectedAnimal);
     if (selectedAnimal === "Turtles")
     {
       $("div.snakes").hide(); 
       $("div.insects").hide(); 
       $("div.turtles").show();
     }
     else if (selectedAnimal === "Snakes")
     {
      $("div.turtles").hide(); 
      $("div.insects").hide(); 
       $("div.snakes").show();  
     }
     else{
      
      $("div.turtles").hide(); 
       $("div.snakes").hide(); 
       $("div.insects").show();  
     }
  });

});