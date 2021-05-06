let dictionary = [[],[],[],[],[],[],[],[]];
dictionary[1] = ["a", "the", "my", "of", "true", "false", "love", "heart", "pain", "grow", "hate",
    "through", "war","soul","spring","fall"];
dictionary[2] = ["over", "under","around", "table", "romance","unjust","soda","tonic","carpet", "triumph",
    "oven", "summer", "autumn","winter"];
dictionary[3] = ["victory","computer","elusive","triumphant","increasing","telephone","strategy"];
dictionary[4] = ["elevator","degenerate","copulation","execution","dictionary","indecisive"];
dictionary[5] = ["enthusiastic","subterranean","excruciating","terminology","choreography","teleportation"];
dictionary[6] = ["intelligentsia","humanitarian","characterization","identification","accountability"];
dictionary[7] = ["establishmentarian","onomatopoetic", "perpendicularity"]
$(document).ready(function(){
    $("#submitWord").on("click",addWord);
    $("#haikuGenerate").on("click",generateHaiku);
})

function addWord(event){
    event.preventDefault();
    let splitWord=$("#wordEntry").val();
    let wordArray = splitWord.split('-');
    let wordSyllables = wordArray.length;
    if(wordSyllables>7){
        $("#wordEntryCorrection").text("The maximum number of syllables permitted is seven.");
    }
    else{
        $("#wordEntryCorrection").text("");
        let newWord = wordArray.join("");
        dictionary[wordSyllables].push(newWord);

        $("#wordEntry").val("");
    }

}

function generateHaiku(){
    $("#haikuLineOne").empty();
    $("#haikuLineTwo").empty();
    $("#haikuLineThree").empty();
    let line1 = generateLine(5);
    let line2 = generateLine(7);
    let line3 = generateLine(5);
    $("#haikuLineOne").text(line1);
    $("#haikuLineTwo").text(line2);
    $("#haikuLineThree").text(line3);
}

function generateLine(syllables){
    let remainingSyllables = syllables;
    let wordLength;
    let output="";
    let selectIndex;
    while (remainingSyllables>0){
        wordLength = Math.floor((Math.random()*remainingSyllables)+1);
        selectIndex= Math.floor(Math.random()*dictionary[wordLength].length);
        output += `${dictionary[wordLength][selectIndex]} `;
        remainingSyllables -= wordLength;
    }
    return output;
}