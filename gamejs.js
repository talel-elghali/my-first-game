var arr=[];
var object={fname:'#fname',lname:'#lname'};
var array = [".down1",".down9",".down2",".down5",".down11",".down6",".down7",".down3",".down4",".down8",".down10",".down12"];
  $(document).ready(function(){
    $(".front").click(function(){
     var i = Math.floor(Math.random()*11);
if(arr.includes(i)===false && array.length !== 1 ){
    $(this).replaceWith("");
    $(array[i]).css('background-color', 'red');
    array.splice(i,1);
    arr.push(i);
   
}else if (array.length ===1){
        alert($('#fname')+''+$('#lname') + "you win this card ");

}
 })

});
