var numberOfDrumButton = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onButtonPress)
    
    function onButtonPress() {
        alert("i got clicked!")
    }
}