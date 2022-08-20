exports.action = function(data){

var motspeak=""
var phrase = ClaraIA.reco.trim().split(" ")
var mot=phrase[phrase.length-1]
console.log(phrase,mot)

for (var i=0;i<mot.length;i++){motspeak=motspeak+mot[i]+" . "}

ClaraIASpeech(mot+" en "+mot.length+" lettres . "+motspeak+mot)
return
}