// Modified Version of Wes Modes' "Clickbait Generator"
// https://wmodes.github.io/art101/experiments/tracery/story2.html

// BG: https://pin.it/5ZBbvIW

let bgNum = 0;

$(document).ready(function(){
	var words = 
		{

		story:{
			"origin":["#recipe#"],
			"recipe":[
					"#subject# #verb# #subject#",
					"#subject# will become #athingtobe#", 
					"#subject# may be #athingtobe#...", 
					"a #categoryofperson# will appear in your dreams...",
					"#dothisto# #thesethings# and you will become #athingtobe#",
					"a #categoryofperson# will make you #makeyou#...",
					"#subject# will make you #makeyou#...",
					"a #categoryofperson# has a secret to tell you...",
					"#subject# will create #reallygoodthing#, but it may be sabotaged by a #categoryofperson#...",
					"#subject# will cause #reallybadthing#... ",
					"#subject# belives #questionableassertion#, #dothisto# #thesethings# from a #categoryofperson# for it to come true",
					"#number# percent chance of you becoming #athingtobe#",
					"you will discover #number# ways to hide a hamster in your outfit",
					],
			"subject": ["your father", "the little old lady next door", "wes modes", "julie khou", "aaron",
					"anika", "justin", "graham", "eden", "jesse", "your therapist", "kyle",
					"a slimy banana slug", "a piece of salami", "post malone", "your childhood bestfriend",
					"ruben", "jack", "brandon", "you", "an orange gremlin that smells like pie"],
			"categoryofperson": ["barely surviving college student", "sad mother", 
					"discord mod", "smelly student with long, dirty toenails", "whiny squirrel", 
					"discord kitten", "weird looking sea creature", "2-month old baby",
					"lost sock", "legendary cat with a hat and sword", "santa cruzian"], 
			"dothisto": ["eat", "lick", "sit on", "smack", "touch", "create"],
			"thesethings": ["a smelly snot bubble", "#number# #things#"],
			"number": ["two", "three", "four", "five", "six", "seven", "eight", "nine", "101",
					"99", "100", "50", "80", "69", "33"],
			"things": ["balls", "dentures", "crystals", "foot massagers", "memories",
					"broken pinky promises", "lego builds", "pee puddles"],
			"athingtobe": ["a satanist", "a polygamist", "a money launderer", "a drug dealer", 
					"lactose intolerant", "a cake decorator", "a possum collector", "an actor",
					"a DDR god", "a botanist", "a plagarizer", "a sexist", "a pro skate boarder", 
					"the best hacker", "a spy", "a killer", "a misogynist"],
			"makeyou": ["change the way you look at your mom", "re-examine your childhood", 
					"start wearing diapers ", "stop your habit of procrastinating", "make you cry",
                    "suck the snot out of them", "clip your toenails", "do your laundry", ],
			"reallybadthing": ["a silent genocide", "another species extinction",
					"more exploitation of the working class", "starvation", "a disaster"],
			"reallygoodthing": ["an answer to world hunger", "the best ice cream flavor",
					"a vaccine for all cures", "an end to plastic waste",
					"a food generator", "laws to protect wild raccoons", 
					"the greatest thing to ever happen"],
			"questionableassertion": ["we're not in a housing bubble", 
					"we're living in post-racial America", "socialism is not so bad", 
					"#person# is not so bad", "you are not racist", "your education was worth it", 
					"the economy is in good shape", "you can find work easily", 
					"your kids will have it better than you do", "everything will be all right", 
					"there's light at the end of the tunnel", "there's life after death", 
					"there's no life after death", "you have untapped talent", "#person# sucks"],
            "verb" : ["will do a kick flip over", "will knock out", "will eat", "will throw", "will bring ice cream to", "will kiss",
                    "has a secret love affair with", "has a dog with", "will win the lottery with", "becomes a villain with",
                    "destroys santa cruz with", "will steal snacks from", "will commit horrendous crimes with", "may smooch"],
		}
	};

	$('#buttonTrigger').click(function(){
		loadGrammar();
        bgImg = document.getElementById("myBG").style.backgroundImage;
        console.log("img:" + bgImg);
        if (bgNum == 0){
            document.getElementById("myBG").style.backgroundImage = "url(strawbBG.jpeg)";
            bgNum ++;
        }  else if (bgNum == 1){
            document.getElementById("myBG").style.backgroundImage = "url(teddyBG.jpeg)";
            bgNum ++;
        } else if (bgNum == 2){
            document.getElementById("myBG").style.backgroundImage = "url(blueBG.jpeg)";
            bgNum ++;
        } else if (bgNum == 3){
            document.getElementById("myBG").style.backgroundImage = "url(purpBG.jpeg)";
            bgNum = 0;
        }      
	});
	
	function loadGrammar(){
		var grammar = tracery.createGrammar(words["story"]);
		$('#output').html("<div>"+grammar.flatten('#origin#')+"</div>");
		console.log("finished loading!");
	}

	setTimeout(function() {
        loadGrammar();
    }, 10);

    // document.getElementById("myBG").style.backgroundImage = "url(strawbBG.jpeg)";

});