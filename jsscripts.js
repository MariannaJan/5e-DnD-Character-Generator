var firstAbil=true;

function checkRun() {

	if (document.getElementById("al").checked == true) { 
		if (document.getElementById("genMethod").value == "0") {
			alert("Sorry, but you cannot roll abilities for Adventurer's League characters!");
			document.getElementById("genMethod").selectedIndex = "1";
			document.getElementById("buyDropdowns").style.display="none";	
			document.getElementById("selAbil").style.display="none";
			document.getElementById("ro").style.display="inline";

		} 
		if (document.getElementById("selLevel").selectedIndex != 0) {
			alert("Sorry, but your Adventurer's League character must start at 1st level!");
			document.getElementById("selLevel").selectedIndex = "0";	
		}
		if (document.getElementById("selRace").value == "21") {
			alert("Sorry, but Aarakocra aren't allowed in Adventurer's League play.")
			document.getElementById("selRace").selectedIndex = "0";	
		}
	}

	if (((document.getElementById("genMethod").value == "2") || (document.getElementById("genMethod").value == "3")) && (addAbils(true) == true)) {
		run();
	} 
	if ((document.getElementById("genMethod").value == "0") || (document.getElementById("genMethod").value == "1")) {
		run();
	}
}

function aLeague() {
	if (document.getElementById("al").checked == true) {
		document.getElementById("selLevel").selectedIndex = "0";
		if (document.getElementById("genMethod").value == "0")  {
			document.getElementById("genMethod").selectedIndex = "2";
			document.getElementById("buyDropdowns").style.display="inline";		
			document.getElementById("selAbil").style.display="none";
			document.getElementById("ro").style.display="none";
		}
	if (firstAbil == true) {
		setStandardArray();
		firstAbil=false;
	}
	addAbils(false);

	} 
}

function switchBuy() {
	if (document.getElementById("genMethod").value == "0") {
		document.getElementById("buyDropdowns").style.display="none";
		document.getElementById("selAbil").style.display="inline";
		document.getElementById("ro").style.display="inline";
	}

	if (document.getElementById("genMethod").value == "2") {
		document.getElementById("buyDropdowns").style.display="inline";		
		document.getElementById("selAbil").style.display="none";
		document.getElementById("ro").style.display="none";
		var x = document.getElementsByClassName("detailed");
		for(i=0;i<x.length;i++) {
			x[i].style.display="none";	
		}
		

		//.style.display="inline";
		if (firstAbil == true) {
			setStandardArray();
			firstAbil=false;
		}
		addAbils(false);
	}

	if (document.getElementById("genMethod").value == "3") {
		document.getElementById("buyDropdowns").style.display="inline";		
		document.getElementById("selAbil").style.display="none";
		document.getElementById("ro").style.display="none";
		var x = document.getElementsByClassName("detailed");
		for(i=0;i<x.length;i++) {
			x[i].style.display="inline";	
		}
		if (firstAbil == true) {
			setStandardArray();
			firstAbil=false;
		}
		addAbils(false);
	}


	if (document.getElementById("genMethod").value == "1") {
		document.getElementById("buyDropdowns").style.display="none";	
		document.getElementById("selAbil").style.display="none";
		document.getElementById("ro").style.display="inline";
	}
}


function selectClass() {
	if (document.getElementById("selClass").value == 1) {
		clearClassOptions();
		document.getElementById("barbarianOptions").style.display="inline";
		document.getElementById("selBarbarian").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 2) {
		clearClassOptions();
		document.getElementById("bardOptions").style.display="inline";
		document.getElementById("selBard").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 5) {
		clearClassOptions();
	} else if ((document.getElementById("selClass").value == 6) || (document.getElementById("selClass").value == 7)) {
		clearClassOptions();
		document.getElementById("fighterOptions").style.display="inline";
		document.getElementById("selFighter").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 8) {
		clearClassOptions();
		document.getElementById("monkOptions").style.display="inline";
		document.getElementById("selMonk").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 9) {
		clearClassOptions();
		document.getElementById("paladinOptions").style.display="inline";
		document.getElementById("selPaladin").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 10) {
		clearClassOptions();
		document.getElementById("rangerOptions").style.display="inline";
		document.getElementById("selRanger").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 11)  {
		clearClassOptions();
		document.getElementById("rogueOptions").style.display="inline";
		document.getElementById("selRogue").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 12) {
		clearClassOptions();
	} else if (document.getElementById("selClass").value == 13) {
		clearClassOptions();
		document.getElementById("sorcererOptions").style.display="inline";
		document.getElementById("selSorcerer").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 14) {
		clearClassOptions();
		document.getElementById("warlockOptions").style.display="inline";
		document.getElementById("selWarlock").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 3) {
		clearClassOptions();
		document.getElementById("clericOptions").style.display="inline";
		document.getElementById("selCleric").selectedIndex = "initial";	
	} else if (document.getElementById("selClass").value == 4) {
		clearClassOptions();
		document.getElementById("druidOptions").style.display="inline";
		document.getElementById("selDruid").selectedIndex = "initial";	
	} 
	else if (document.getElementById("selClass").value == 15) {
		clearClassOptions();
		document.getElementById("wizardOptions").style.display="inline";
		document.getElementById("selWizard").selectedIndex = "initial";	
	} 
}


// give it false if you don't want an alert.  true if you want to shout at the user!
function addAbils(bool) {
	var ptAbil = [];
	ptAbil.unshift(document.getElementById("a1").value * 1);
	ptAbil.unshift(document.getElementById("a2").value * 1);
	ptAbil.unshift(document.getElementById("a3").value * 1);
	ptAbil.unshift(document.getElementById("a4").value * 1);
	ptAbil.unshift(document.getElementById("a5").value * 1);
	ptAbil.unshift(document.getElementById("a6").value * 1);
	y=0;
	for (i=0;i<6;i++) {
		x=0;
		if (ptAbil[i] < 14) 
			x =  ptAbil[i] - 8;
	 	else if (ptAbil[i] == 14)
			x=7;
		else if (ptAbil[i] == 15)
			x=9;
		y += x;
	}
	var ptOutput = 27 - y + " points";
	document.getElementById("points").innerHTML = ptOutput;
	if (y > 27) {
		if (bool==true) {
			alert("You cannot afford those abilities.");
		}
		document.getElementById("points").style.color = "red";
		return false;
	} else {
		document.getElementById("points").style.color = "initial";
		return true;
	}

}

function clearClassOptions() {
	document.getElementById("wizardOptions").style.display="none";
	document.getElementById("druidOptions").style.display="none";
	document.getElementById("clericOptions").style.display="none";
	document.getElementById("fighterOptions").style.display="none";
	document.getElementById("rangerOptions").style.display="none";
	document.getElementById("bardOptions").style.display="none";
	document.getElementById("barbarianOptions").style.display="none";
	document.getElementById("rogueOptions").style.display="none";
	document.getElementById("sorcererOptions").style.display="none";
	document.getElementById("warlockOptions").style.display="none";
	document.getElementById("monkOptions").style.display="none";
	document.getElementById("paladinOptions").style.display="none";
}

function reset() {
	document.getElementById("selLevel").selectedIndex = "0";
	document.getElementById("selClass").selectedIndex = "0";
	document.getElementById("selRace").selectedIndex = "0";
	document.getElementById("selBg").selectedIndex = "0";
	document.getElementById("selAbil").selectedIndex = "0";
	document.getElementById("selGender").selectedIndex = "0";
	clearClassOptions();
}


function resetAbil() {
	document.getElementById("a1").selectedIndex = "0";
	document.getElementById("a2").selectedIndex = "0";
	document.getElementById("a3").selectedIndex = "0";
	document.getElementById("a4").selectedIndex = "0";
	document.getElementById("a5").selectedIndex = "0";
	document.getElementById("a6").selectedIndex = "0";
	addAbils(false);
}

function setStandardArray() {
	document.getElementById("a1").selectedIndex = "7";
	document.getElementById("a2").selectedIndex = "6";
	document.getElementById("a3").selectedIndex = "5";
	document.getElementById("a4").selectedIndex = "4";
	document.getElementById("a5").selectedIndex = "2";
	document.getElementById("a6").selectedIndex = "0";
	addAbils(false);
}





function run() {
console.log("-------------------------starting--------------------------------");
			
if ((document.getElementById("genMethod").value == "2") || (document.getElementById("genMethod").value == "3")) {
	document.getElementById("buyDropdowns").style.display="inline";		
}

if (document.getElementById("genMethod").value == "3") {
	var detailedStats = document.getElementsByClassName("detailed");
	for(i=0;i<detailedStats.length;i++) {
		detailedStats[i].style.display="inline";	
	}

}



if (document.getElementById("genMethod").value != "0") {
	document.getElementById("selAbil").style.display="none";		
}
if (document.getElementById("selClass").value == 15) {
	document.getElementById("wizardOptions").style.display="inline";		
}
if (document.getElementById("selClass").value == 3) {
	document.getElementById("clericOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 4) {
	document.getElementById("druidOptions").style.display="inline";		
}
if (document.getElementById("selClass").value == 1) {
	document.getElementById("barbarianOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 2) {
	document.getElementById("bardOptions").style.display="inline";	
}
if ((document.getElementById("selClass").value == 6) || (document.getElementById("selClass").value == 7)) {
	document.getElementById("fighterOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 8) {
	document.getElementById("monkOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 9) {
	document.getElementById("paladinOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 10) {
	document.getElementById("rangerOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 11) {
	document.getElementById("rogueOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 13) {
	document.getElementById("sorcererOptions").style.display="inline";	
}
if (document.getElementById("selClass").value == 14) {
	document.getElementById("warlockOptions").style.display="inline";	
}


var al=false;
if (document.getElementById("al").checked == true) 
	al=true;


var gender=-1;
var forceGender =0;
forceGender = document.getElementById("selGender").value * 1;

var forceCl =0;
forceCl = document.getElementById("selClass").value * 1;

var forceRace =0;
forceRace = document.getElementById("selRace").value * 1;

var forceBg =0;
forceBg = document.getElementById("selBg").value * 1;

var forceAbil =0;
forceAbil = document.getElementById("selAbil").value * 1;

var forceDomain =0;
forceDomain = document.getElementById("selCleric").value * 1;

var forceSchool =0;
forceSchool = document.getElementById("selWizard").value * 1;

var forceCircle =0;
forceCircle = document.getElementById("selDruid").value * 1;

var forceBarb = document.getElementById("selBarbarian").value * 1;
var forceBard =document.getElementById("selBard").value * 1;
var forceFigh =document.getElementById("selFighter").value * 1;
var forceMonk =document.getElementById("selMonk").value * 1;
var forcePala =document.getElementById("selPaladin").value * 1;
var forceRang =document.getElementById("selRanger").value * 1;
var forceRogu =document.getElementById("selRogue").value * 1;
var forceSorc =document.getElementById("selSorcerer").value * 1;
var forceWarl =document.getElementById("selWarlock").value * 1;
var forceWarlPact =document.getElementById("selWarlockPact").value * 1;

var x = 0;
var y = 0;
var z = 0;
var xx =0;
var yy =0;
var i = 0;
var q = 0;
var whichMagic = -1;
var whichMagicArmor = -1;
var magicArrowPlus=0;
var magicArrows=0;
var magicArrowType="";
var magicArrowDisplay=false;
var rangedWeapons =[];
var mod = [0,0,0,0,0,0];
var abil = [0,0,0,0,0,0];
var abilNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
var firstIncrease = -1;
var output="";
var hp=0;
var initiative;
var ac=0;
var hd=0;
var gold=0;
var platinum=0;
var forceLvl =0;
forceLvl = document.getElementById("selLevel").value * 1;

var level = Math.floor((Math.random() * 10) + 1); 
if (forceLvl > 0)
	level =forceLvl;
if (forceLvl == 21) 
	level = Math.floor((Math.random() * 4) + 1); 
if (forceLvl == 22) 
	level = Math.floor((Math.random() * 6) + 5); 
if (forceLvl == 23) 
	level = Math.floor((Math.random() * 4) + 8); 
if (forceLvl == 24) 
	level = Math.floor((Math.random() * 4) + 12); 
if (forceLvl == 25) 
	level = Math.floor((Math.random() * 4) + 17); 




var prof=2;
if (level > 4)
	prof=3;
if (level > 8)
	prof=4;
if (level > 12)
	prof=5;
if (level > 16)
	prof=6;


var languageOutput = "";
var moreLang=0;
// var skills = 
var speed=0;
var size = "Medium";
var factions = ["Harpers","Order of the Gauntlet","Emerald Enclave","Lords' Alliance","Zhentarim"];
var myFaction = -1;
var lifestyles = ["Wretched","Squalid","Poor","Modest","Comfortable","Wealthy","Artistocratic"];
var myLifestyle = -1;
var skills = ["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Perform","Persuasion","Religion","Sleight of Hand","Stealth","Survival"];

var patronSpells1=[];
var patronSpells2=[];
var patronSpells3=[];
var patronSpells4=[];
var patronSpells5=[];
var pa1 = ["Bless","Command","Compelled Duel","Cure Wounds","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Divine Favor","Heroism","Protection from Evil and Good","Purify Food and Drink","Searing Smite","Shield of Faith","Thunderous Smite","Wrathful Smite"];
var pa2 = ["Aid","Branding Smite","Find Steed","Lesser Restoration","Locate Object","Magic Weapon","Protection from Poison","Zone of Truth"];

var pa3 = ["Aura of Vitality","Blinding Smite","Create Food and Water","Crusader's Mantle","Daylight","Dispel Magic","Elemental Weapon"];
var ra1 = ["Absorb Elements","Beast Bond","Alarm","Animal Friendship","Cure Wounds","Detect Magic","Detect Poison and Disease","Ensnaring Strike","Fog Cloud","Goodberry","Hail of Thorns","Hunter's Mark","Jump","Longstrider","Speak with Animals"];
//var ra1 = ["Alarm","Animal Friendship","Cure Wounds","Detect Magic","Detect Poison and Disease","Ensnaring Strike","Fog Cloud","Goodberry","Hail of Thorns","Hunter's Mark","Jump","Longstrider","Speak with Animals"];
var ra2 = ["Animal Messenger","Barkskin","Beast Sense","Cordon of Arrows","Darkvision","Find Traps","Lesser Restoration","Locate Animals or Plants","Locate Object","Pass without Trace","Protection from Poison","Silence","Spike Growth"];
var ra3 = ["Flame Arrows","Conjure Animals","Conjure Barrage","Daylight","Lightning Arrow","Nondetection","Plant Growth","Protection from Energy","Speak with Plants","Water Breathing","Water Walk","Wind Wall"];
//var ra3 = ["Conjure Animals","Conjure Barrage","Daylight","Lightning Arrow","Nondetection","Plant Growth","Protection from Energy","Speak with Plants","Water Breathing","Water Walk","Wind Wall"];


var clCantrip = ["Guidance","Light","Mending","Resistance","Sacred Flame","Spare the Dying","Thaumaturgy"];
var cl1 = ["Bane","Bless","Command","Create or Destroy Water","Cure Wounds","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Guiding Bolt","Healing Word","Inflict Wounds","Protection from Evil and Good","Purify Food and Drink","Sanctuary","Shield of Faith"];
var cl2 = ["Aid","Augury","Blindness/Deafness","Calm Emotions","Continual Flame","Enhance Ability","Find Traps","Gentle Repose","Hold Person","Lesser Restoration","Locate Object","Prayer of Healing","Protection from Poison","Silence","Spiritual Weapon","Warding Bond","Zone of Truth"];
//var baCantrip = ["Blade Ward","Dancing Lights","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Prestidigitation","True Strike","Vicious Mockery"];
var cl3 = ["Animate Dead","Beacon of Hope","Bestow Curse","Clairvoyance","Create Food and Water","Daylight","Dispel Magic","Feign Death","Glyph of Warding","Magic Circle","Mass Healing Word","Meld into Stone","Protection from Energy","Remove Curse","Revivify","Sending","Speak with Dead","Spirit Guardians","Tongues","Water Walk"];
var cl4 = ["Banishment","Control Water","Death Ward","Divination","Freedom of Movement","Guardian of Faith","Locate Creature","Stone Shape"];
var cl5 = ["Commune","Contagion","Dispel Evil and Good","Flame Strike","Geas","Greater Restoration","Hallow","Insect Plague","Legend Lore","Mass Cure Wounds","Planar Binding","Raise Dead","Scrying"];

var baCantrip = ["Blade Ward","Dancing Lights","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Prestidigitation","Thunderclap","True Strike","Vicious Mockery"];
var ba1 = ["Animal Friendship","Bane","Charm Person","Comprehend Languages","Cure Wounds","Detect Magic","Disguise Self","Dissonant Whispers","Earth Tremor","Faerie Fire","Feather Fall","Healing Word","Heroism","Identify","Illusory Script","Longstrider","Silent Image","Sleep","Speak with Animals","Tasha's Hideous Laughter","Thunderwave","Unseen Servant"];
var ba2 = ["Animal Messenger","Blindness/Deafness","Calm Emotions","Cloud of Daggers","Crown of Madness","Detect Thoughts","Enhance Ability","Enthrall","Heat Metal","Hold Person","Invisibility","Knock","Lesser Restoration","Locate Animals or Plants","Locate Object","Magic Mouth","Phantasmal Force","Pyrotechnics","See Invisibility","Shatter","Silence","Skywrite","Suggestion","Warding Wind","Zone of Truth"];
var ba3 = ["Bestow Curse","Clairvoyance","Dispel Magic","Fear","Feign Death","Glyph of Warding","Hypnotic Pattern","Leomund’s Tiny Hut","Major Image","Nondetection","Plant Growth","Sending","Speak with Dead","Speak with Plants","Stinking Cloud","Tongues"];
//var ba1 = ["Animal Friendship","Bane","Charm Person","Comprehend Languages","Cure Wounds","Detect Magic","Disguise Self","Dissonant Whispers","Faerie Fire","Feather Fall","Healing Word","Heroism","Identify","Illusory Script","Longstrider","Silent Image","Sleep","Speak with Animals","Tasha's Hideous Laughter","Thunderwave","Unseen Servant"];
//var ba2 = ["Animal Messenger","Blindness/Deafness","Calm Emotions","Cloud of Daggers","Crown of Madness","Detect Thoughts","Enhance Ability","Enthrall","Heat Metal","Hold Person","Invisibility","Knock","Lesser Restoration","Locate Animals or Plants","Locate Object","Magic Mouth","Phantasmal Force","See Invisibility","Shatter","Silence","Suggestion","Zone of Truth"];
var ba4 = ["Compulsion","Confusion","Dimension Door","Freedom of Movement","Greater Invisibility","Hallucinatory Terrain","Locate Creature","Polymorph"];
var ba5 = ["Animate Objects","Awaken","Dominate Person","Dream","Geas","Greater Restoration","Hold Monster","Legend Lore","Mass Cure Wounds","Mislead","Modify Memory","Planar Binding","Raise Dead","Scrying","Seeming","Teleportation Circle"];

var drCantrip = ["Create Bonfire","Control Flames","Druidcraft","Frostbite","Guidance","Gust","Magic Stone","Mending","Mold earth","Poison Spray","Produce Flame","Resistance","Shillelagh","Shape Water","Thorn Whip","Thunderclap"];
var dr1 = ["Absorb Elements","Beast Bond","Ice Knife","Earth Tremor","Animal Friendship","Charm Person","Create or Destroy Water","Cure Wounds","Detect Magic","Detect Poison and Disease","Entangle","Faerie Fire","Fog Cloud","Goodberry","Healing Word","Jump","Longstrider","Purify Food and Drink","Speak with Animals","Thunderwave"];
var dr2 = ["Dust Devil","Earthbind","Skywrite","Warding Wind","Animal Messenger","Barkskin","Beast Sense", "Darkvision", "Enhance Ability", "Find Traps", "Flame Blade", "Flaming Sphere", "Gust of Wind", "Heat Metal", "Hold Person","Lesser Restoration","Locate Object", "Moonbeam", "Pass without Trace", "Protection from Poison","Spike Growth"];
//var drCantrip = ["Druidcraft","Guidance","Mending","Poison Spray","Produce Flame","Resistance","Shillelagh","Thorn Whip"];
//var dr1 = ["Animal Friendship","Charm Person","Create or Destroy Water","Cure Wounds","Detect Magic","Detect Poison and Disease","Entangle","Faerie Fire","Fog Cloud","Goodberry","Healing Word","Jump","Longstrider","Purify Food and Drink","Speak with Animals","Thunderwave"];
//var dr2 = ["Animal Messenger","Barkskin","Beast Sense", "Darkvision", "Enhance Ability", "Find Traps", "Flame Blade", "Flaming Sphere", "Gust of Wind", "Heat Metal", "Hold Person","Lesser Restoration","Locate Object", "Moonbeam", "Pass without Trace", "Protection from Poison","Spike Growth"];
var dr3 = ["Erupting Earth","Flame Arrows","Tidal Wave","Wall of Water","Call Lightning","Conjure Animals","Daylight","Dispel Magic","Feign Death","Meld into Stone","Plant Growth","Protection from Energy","Sleet Storm","Speak with Plants","Water Breathing","Water Walk","Wind Wall"];
//var dr3 = ["Call Lightning","Conjure Animals","Daylight","Dispel Magic","Feign Death","Meld into Stone","Plant Growth","Protection from Energy","Sleet Storm","Speak with Plants","Water Breathing","Water Walk","Wind Wall"];


var dr4 = ["Elemental Bane","Watery Sphere","Blight","Confusion","Conjure Minor Elementals","Conjure Woodland Beings","Control Water","Dominate Beast","Freedom of Movement","Giant Insect","Grasping Vine","Hallucinatory Terrain","Ice Storm","Locate Creature","Polymorph","Stone Shape","Stoneskin","Wall of Fire"];
var dr5 = ["Control Winds","Maelstrom","Transmute Rock","Antilife Shell","Awaken","Commune with Nature","Conjure Elemental","Contagion","Geas","Greater Restoration","Insect Plague","Mass Cure Wounds","Planar Binding","Reincarnate","Scrying","Tree Stride","Wall of Stone"];

//var dr4 = ["Blight","Confusion","Conjure Minor Elementals","Conjure Woodland Beings","Control Water","Dominate Beast","Freedom of Movement","Giant Insect","Grasping Vine","Hallucinatory Terrain","Ice Storm","Locate Creature","Polymorph","Stone Shape","Stoneskin","Wall of Fire"];
//var dr5 = ["Antilife Shell","Awaken","Commune with Nature","Conjure Elemental","Contagion","Geas","Greater Restoration","Insect Plague","Mass Cure Wounds","Planar Binding","Reincarnate","Scrying","Tree Stride","Wall of Stone"];


var soCantrip = ["Create Bonfire","Control Flames","Frostbite","Gust","Mold Earth","Shape Water","Thunderclap","Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];
var so1 = ["Catapult","Ice Knife","Earth Tremor","Burning Hands","Burning Hands","Charm Person","Chromatic Orb","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Fog Cloud","Jump","Magic Missile","Magic Missile","Mage Armor","Ray of Sickness","Shield","Silent Image","Sleep","Thunderwave","Witch Bolt"];
var so2 = ["Aganazzar's Scorcher","Dust Devil","Earthbind","Maximilian's Earthen Grasp","Pyrotechnics","Snilloc's Snowball Swarm","Warding Wind","Alter Self","Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enhance Ability","Enlarge/Reduce","Gust of Wind","Hold Person","Invisibility","Knock","Levitate","Mirror Image","Misty Step","Phantasmal Force","Scorching Ray","See Invisibility","Shatter","Spider Climb","Suggestion","Web"];
var so3 = ["Erupting Earth","Flame Arrows","Melf's Minute Meteors","Wall of Water","Blink","Clairvoyance","Counterspell","Daylight","Dispel Magic","Fear","Fireball","Fly","Gaseous Form","Haste","Hypnotic Pattern","Lightning Bolt","Major Image","Protection from Energy","Sleet Storm","Slow","Stinking Cloud","Tongues","Water Breathing","Water Walk"];
var so4 = ["Storm Sphere","Vitriolic Sphere","Watery Sphere","Banishment","Blight","Confusion","Dimension Door","Dominate Beast","Greater Invisibility","Ice Storm","Polymorph","Stoneskin","Wall of Fire"];
var so5 = ["Control Winds","Immolation","Animate Objects","Cloudkill","Cone of Cold","Creation","Dominate Person","Hold Monster","Insect Plague","Seeming","Telekinesis","Teleportation Circle","Wall of Stone"];

//var soCantrip = ["Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];
//var so1 = ["Burning Hands","Burning Hands","Charm Person","Chromatic Orb","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Fog Cloud","Jump","Magic Missile","Magic Missile","Mage Armor","Ray of Sickness","Shield","Silent Image","Sleep","Thunderwave","Witch Bolt"];
//var so2 = ["Alter Self","Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enhance Ability","Enlarge/Reduce","Gust of Wind","Hold Person","Invisibility","Knock","Levitate","Mirror Image","Misty Step","Phantasmal Force","Scorching Ray","See Invisibility","Shatter","Spider Climb","Suggestion","Web"];
//var so3 = ["Blink","Clairvoyance","Counterspell","Daylight","Dispel Magic","Fear","Fireball","Fly","Gaseous Form","Haste","Hypnotic Pattern","Lightning Bolt","Major Image","Protection from Energy","Sleet Storm","Slow","Stinking Cloud","Tongues","Water Breathing","Water Walk"];
//var so4 = ["Banishment","Blight","Confusion","Dimension Door","Dominate Beast","Greater Invisibility","Ice Storm","Polymorph","Stoneskin","Wall of Fire"];
//var so5 = ["Animate Objects","Cloudkill","Cone of Cold","Creation","Dominate Person","Hold Monster","Insect Plague","Seeming","Telekinesis","Teleportation Circle","Wall of Stone"];



var waCantrip = ["Create Bonfire","Frostbite","Magic Stone","Thunderclap","Blade Ward","Chill Touch","Eldritch Blast","Friends","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","True Strike"];
//var waCantrip = ["Blade Ward","Chill Touch","Eldritch Blast","Friends","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","True Strike"];
var wa1 = ["Armor of Agathys","Arms of Hadar","Charm Person","Comprehend Languages","Expeditious Retreat","Hellish Rebuke","Hex","Illusory Script","Protection from Good and Evil","Unseen Servant","Witch Bolt"];
var wa2 = ["Earthbind","Cloud of Daggers","Crown of Madness","Darkness","Enthrall","Hold Person","Invisibility","Mirror Image","Misty Step","Ray of Enfeeblement","Shatter","Spider Climb","Suggestion"];
//var wa2 = ["Cloud of Daggers","Crown of Madness","Darkness","Enthrall","Hold Person","Invisibility","Mirror Image","Misty Step","Ray of Enfeeblement","Shatter","Spider Climb","Suggestion"];
var wa3 = ["Counterspell","Dispel Magic","Fear","Fly","Gaseous Form","Hunger of Hadar","Hypnotic Pattern","Magic Circle","Major Image","Remove Curse","Tongues","Vampiric Touch"];

var wa4 = ["Elemental Bane","Banishment","Blight","Dimension Door","Hallucinatory Terrain"];
//var wa4 = ["Banishment","Blight","Dimension Door","Hallucinatory Terrain"];
var wa5 = ["Contact Other Plane","Dream","Hold Monster","Scrying"];

var tomeRituals = ["Illusory Script","Identify","Identify","Identify","Find Familiar","Detect Disease and Poison","Detect Magic","Detect Magic","Detect Magic","Comprehend Languages","Unseen Servant","Tenser's Floating Disk","Speak with Animals","Speak with Animals","Purify Food and Drink","Alarm","Alarm"];



var wiCantrip = ["Create Bonfire","Control Flames","Frostbite","Gust","Mold Earth","Shape Water","Thunderclap","Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];
//var wiCantrip = ["Acid Splash","Blade Ward","Chill Touch","Dancing Lights","Fire Bolt","Friends","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];
//NOT ENOUGH FAMILIARS. therefore, 2 find familiar spells
var wi1 = ["Absorb Elements","Catapult","Ice Knife","Earth Tremor","Alarm","Burning Hands","Charm Person","Chromatic Orb","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Find Familiar","Find Familiar","Fog Cloud","Grease","Identify","Illusory Script","Jump","Longstrider","Mage Armor","Magic Missile","Protection from Good and Evil","Ray of Sickness","Shield","Silent Image","Sleep","Tasha's Hideous Laughter","Tenser's Floating Disk","Thunderwave","Unseen Servant","Witch Bolt"];
var wi2 = ["Aganazzar's Scorcher","Dust Devil","Earthbind","Maximilian's Earthen Grap","Pyrotechnics","Skywrite","Snilloc's Snowball Swarm","Alter Self","Arcane Lock","Blindness/Deafness","Blur","Cloud of Daggers","Continual Flame","Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enlarge/Reduce","Flaming Sphere","Gentle Repose","Gust of Wind","Hold Person","Invisibility","Knock","Levitate","Locate Object","Magic Mouth","Magic Weapon","Melf's Acid Arrow","Mirror Image","Misty Step","Nystul's Magic Aura","Phantasmal Force","Ray of Enfeeblement","Rope Trick","Scorching Ray","See Invisibility","Shatter","Spider Climb","Suggestion","Web"];
var wi3 = ["Erupting Earth","Flame Arrows","Melf's Minute Meteors","Tidal Wave","Wall of Sand","Wall of Water","Animate Dead","Bestow Curse","Blink","Clairvoyance","Counterspell","Dispel Magic","Fear","Feign Death","Fireball","Fly","Gaseous Form","Glyph of Warding","Haste","Hypnotic Pattern","Leomund’s Tiny Hut","Lightning Bolt","Magic Circle","Major Image","Nondetection","Phantom Steed","Protection from Energy","Remove Curse","Sending","Sleet Storm","Slow","Stinking Cloud","Tongues","Vampiric Touch","Water Breathing"];
var wi4 = ["Elemental Bane","Storm Sphere","Vitriolic Sphere","Watery Sphere","Arcane Eye","Banishment","Blight","Confusion","Conjure Minor Elementals","Control Water","Dimension Door","Evard's Black Tentacles","Fabricate","Fire Shield","Greater Invisibility","Hallucinatory Terrain","Ice Storm","Leomund’s Secret Chest","Locate Creature","Mordenkainen’s Faithful Hound","Mordenkainen’s Private Sanctum","Otiluke’s Resilient Sphere","Phantasmal Killer","Polymorph","Stone Shape","Stoneskin","Wall of Fire"];
var wi5 = ["Control Winds","Immolation","Transmute Rock","Animate Objects","Bigby’s Hand","CloudkilI","Cone of Cold","Conjure Elemental","Contact Other Plane","Creation","Dominate Person","Dream","Geas","Hold Monster","Legend Lore","Mislead","Modify Memory","Passwall","Planar Binding","Rary’s Telepathic Bond","Scrying","Seeming","Telekinesis","Teleportation Circle","Wall of Force","Wall of Stone"];

//var wi1 = ["Alarm","Burning Hands","Charm Person","Chromatic Orb","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Find Familiar","Find Familiar","Fog Cloud","Grease","Identify","Illusory Script","Jump","Longstrider","Mage Armor","Magic Missile","Protection from Good and Evil","Ray of Sickness","Shield","Silent Image","Sleep","Tasha's Hideous Laughter","Tenser's Floating Disk","Thunderwave","Unseen Servant","Witch Bolt"];
//var wi2 = ["Alter Self","Arcane Lock","Blindness/Deafness","Blur","Cloud of Daggers","Continual Flame","Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enlarge/Reduce","Flaming Sphere","Gentle Repose","Gust of Wind","Hold Person","Invisibility","Knock","Levitate","Locate Object","Magic Mouth","Magic Weapon","Melf's Acid Arrow","Mirror Image","Misty Step","Nystul's Magic Aura","Phantasmal Force","Ray of Enfeeblement","Rope Trick","Scorching Ray","See Invisibility","Shatter","Spider Climb","Suggestion","Web"];
//var wi3 = ["Animate Dead","Bestow Curse","Blink","Clairvoyance","Counterspell","Dispel Magic","Fear","Feign Death","Fireball","Fly","Gaseous Form","Glyph of Warding","Haste","Hypnotic Pattern","Leomund’s Tiny Hut","Lightning Bolt","Magic Circle","Major Image","Nondetection","Phantom Steed","Protection from Energy","Remove Curse","Sending","Sleet Storm","Slow","Stinking Cloud","Tongues","Vampiric Touch","Water Breathing"];
//var wi4 = ["Arcane Eye","Banishment","Blight","Confusion","Conjure Minor Elementals","Control Water","Dimension Door","Evard's Black Tentacles","Fabricate","Fire Shield","Greater Invisibility","Hallucinatory Terrain","Ice Storm","Leomund’s Secret Chest","Locate Creature","Mordenkainen’s Faithful Hound","Mordenkainen’s Private Sanctum","Otiluke’s Resilient Sphere","Phantasmal Killer","Polymorph","Stone Shape","Stoneskin","Wall of Fire"];
//var wi5 = ["Animate Objects","Bigby’s Hand","CloudkilI","Cone of Cold","Conjure Elemental","Contact Other Plane","Creation","Dominate Person","Dream","Geas","Hold Monster","Legend Lore","Mislead","Modify Memory","Passwall","Planar Binding","Rary’s Telepathic Bond","Scrying","Seeming","Telekinesis","Teleportation Circle","Wall of Force","Wall of Stone"];


var scrollBardUnc = ["Cure Wounds","Speak with Dead","Fear","Invisibility","Dispel Magic","Polymorph","Major Image"];
var scrollBardRare = ["Animate Objects","Hold Monster","Guards and Wards","Raise Dead"];
var scrollBardVery = ["Teleport","Power Word Kill","Power Word Stun"];

var scrollClerUnc = ["Prayer of Healing","Prayer of Healing","Magic Circle","Aid","Tongues","Mass Healing Word","Revivify","Revivify","Guardian of Faith"];
var scrollClerRare = ["Flame Strike","Mass Cure Wounds","Blade Barrier","Raise Dead","Heal"];
var scrollClerVery = ["Control Weather","Regenerate","Heal","True Resurrection","Gate"];

var scrollDruiUnc = ["Cure Wounds","Conjure Animals","Conjure Minor Elementals","Hold Person","Water Breathing"];
var scrollDruiRare = ["Mass Cure Wounds","Scrying","Dominate Beast","Heal"];
var scrollDruiVery = ["Heal","Wall of Thorns","Earthquake","True Resurrection","Tsunami"];

var scrollPalaUnc = ["Cure Wounds","Blinding Smite","Dispel Magic","Aura of Life","Detect Magic","Aid"];
var scrollPalaRare = ["Raise Dead","Geas","Banishing Smite"];
var scrollPalaVery = ["Raise Dead","Geas","Banishing Smite"];

var scrollRangUnc = ["Cure Wounds","Lightning Arrow","Conjure Barrage","Water Breathing"];
var scrollRangRare = ["Conjure Volley","Swift Quiver"];
var scrollRangVery = ["Conjure Volley","Swift Quiver"];

var scrollWarlUnc = ["Vampiric Touch","Tongues","Gaseous Form","Fear","Spider Climb","Comprehend Languages","Shatter"];
var scrollWarlRare = ["Blight","Scrying","Hold Monster","Conjure Fey",];
var scrollWarlVery = ["Mass Suggestion","Finger of Death","Power Word Stun"];

var scrollWizaUnc = ["Fireball","Haste","Slow","Fly","Knock","Lightning Bolt","Water Breathing","Dispel Magic"];
var scrollWizaRare = ["Greater Invisibility","Wall of Fire","Ice Storm"];
var scrollWizaVery = ["Mass Suggestion","Plane Shift","Delayed Blast Fireball"];




//var scrollSpells =["Fireball","Haste","Slow","Fly","Revivify","Prayer of Healing","Raise Dead","Knock","Magic Circle","Comprehend Languages","Lightning Bolt","Silence","Water Breathing","Dispel Magic"];
//var scrollSpells =["Fireball"];
//var scrollSpellLevels =[3,3,3,3,3,2,5,2,3,1,3,2,3,3];
//var scrollSpellCasters = [[14,15]];
//var scrollSpellCastLvl = [5];



var ci0 = ["Hold Person","Spike Growth","Sleet Storm","Slow"];
var ci1 = ["Mirror image","Misty Step","Water Breathing","Water Walk"];
var ci2 = ["Blur","Silence","Create Food and Water","Protection from Energy"];
var ci3 = ["Barkskin","Spider Climb","Call Lightning","Plant Growth"];
var ci4 = ["Invisibility","Pass Without Trace","Daylight","Haste"];
var ci5 = ["Spider Climb","Spike Growth","Lightning Bolt","Meld into Stone"];
var ci6 = ["Darkness","Melf’s Acid Arrow","Water Walk","Stinking Cloud"];
var ci7 = ["Spider Climb","Web","Gaseous Form","Stinking Cloud"];


var spellAbility = -1;
var raceSpellAbility = -1;
var raceSpells = [];
var wiSchool =-1;
var waPatron=-1;
var soOrigin=-1;
var clDomain=-1;
var drCircle=-1;
var ciSpells =[];
var oaSpells =[];
var doSpells =[];
var loSpells =[];
var waSpells =[];
var wiz1 = 0;
var wiz2 = 0;
var wiz3 = 0;
var wiz4 = 0;
var wiz5 = 0;
var wiz1Prepared = [];
var wiz2Prepared = [];
var wiz3Prepared = [];
var wiz4Prepared = [];
var wiz5Prepared = [];
var tempTxt = "";

var exotic=0;
var land="";
var fiStyle = -1;
var fiStyle2 = -1;

var ki=0;
var ss1=0;
var ss2=0;
var ss3=0;
var ss4=0;
var ss5=0;
var sp=0;
var hasShield=false;
var hasArmor = -1;
//  show numbers of all 1st level spells

var skLearn = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
allArrays=[[15,15,15,8,8,8],[15,15,14,10,8,8],[15,15,14,9,9,8],[15,15,13,12,8,8],[15,15,13,11,9,8],[15,15,13,10,10,8],[15,15,13,10,9,9],[15,15,12,12,9,8],[15,15,12,11,10,8],[15,15,12,11,9,9],[15,15,12,10,10,9],[15,15,11,11,11,8],[15,15,11,11,10,9],[15,15,11,10,10,10],[15,14,14,12,8,8],[15,14,14,11,9,8],[15,14,14,10,10,8],[15,14,14,10,9,9],[15,14,13,13,9,8],[15,14,13,12,10,8],[15,14,13,12,9,9],[15,14,13,11,11,8],[15,14,13,11,10,9],[15,14,13,10,10,10],[15,14,12,12,11,8],[15,14,12,12,10,9],[15,14,12,11,11,9],[15,14,12,11,10,10],[15,14,11,11,11,10],[15,13,13,13,11,8],[15,13,13,13,10,9],[15,13,13,12,12,8],[15,13,13,12,11,9],[15,13,13,12,10,10],[15,13,13,11,11,10],[15,13,12,12,12,9],[15,13,12,12,11,10],[15,13,12,11,11,11],[15,12,12,12,12,10],[15,12,12,12,11,11],[14,14,14,13,9,8],[14,14,14,12,10,8],[14,14,14,12,9,9],[14,14,14,11,11,8],[14,14,14,11,10,9],[14,14,14,10,10,10],[14,14,13,13,11,8],[14,14,13,13,10,9],[14,14,13,12,12,8],[14,14,13,12,11,9],[14,14,13,12,10,10],[14,14,13,11,11,10],[14,14,12,12,12,9],[14,14,12,12,11,10],[14,14,12,11,11,11],[14,13,13,13,13,8],[14,13,13,13,12,9],[14,13,13,13,11,10],[14,13,13,12,12,10],[14,13,13,12,11,11],[14,13,12,12,12,11],[14,12,12,12,12,12],[13,13,13,13,13,10],[13,13,13,13,12,11],[13,13,13,12,12,12]];
var skAbil = [1,4,3,0,5,3,4,5,3,4,3,4,5,5,3,1,1,4];
var skOutput = "";
var abOutput = "";
var abilIncrease = [0,0,0,0,0,0];

var mySkills = [];
var expertise = [];

var armors = ["Shield","Padded","Leather","Studded Leather","Hide","Chain shirt","Scale mail","Breastplate","Half plate","Ring mail","Chain mail","Splint mail","Plate mail"];
var armorAC = [2,11,11,12,12,13,14,14,15,14,16,17,18];
var weapons = ["Dagger","Mace","Spear","Handaxe","Javelin","Light crossbow","Heavy crossbow","Hand crossbow","Short bow","Long bow","Throwing hammer","Battleaxe","Greatsword","Halberd","Longsword","Morning Star","Rapier","Scimitar","Shortsword","Warhammer","Great Axe","Dart","Quarterstaff", "Unarmed Strike","Sling"];
var wpDam = ["1d4","1d6","1d6(1d8)","1d6","1d6","1d8","1d10","1d6","1d6","1d8","1d4","1d8(1d10)","2d6","1d10","1d8(1d10)","1d8","1d8","1d6","1d6","1d8(1d10)","1d12","1d4","1d6(1d8)", "1d4","1d4"];
var wpType = ["piercing", "bludgeoning", "piercing", "slashing", "piercing", "piercing","piercing","piercing","piercing","piercing", "bludgeoning", "slashing", "slashing", "slashing", "slashing", "piercing", "piercing", "slashing", "piercing", "bludgeoning", "slashing","piercing","bludgeoning","bludgeoning","bludgeoning"];
var wpRange = [4,0,3,3,3,2,2,2,2,2,3,0,0,0,0,0,1,1,1,0,0,2,0,1,2];
var wpDistance = ["20/60","","20/60","20/60","30/120","80/320","100/400","30/120","80/320","150/600","20/60","","","","","","","","","","","20/60","","","30/120"];
var wpNum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maneuvers = ["Commander's Strike","Disarming Attack","Distracting Strike","Evasive Footwork","Feinting Attack","Goading Attack","Lunging Attack","Maneuvering Attack","Menacing Attack","Parry","Precision Attack","Pushing Attack","Rally","Riposte","Sweeping Attack","Trip Attack"];
var meta =["Careful Spell","Distant Spell","Empowered Spell", "Extended Spell","Heightened Spell","Quickened Spell","Subtle Spell", "Twinned Spell"];
var eldritch = ["Agonizing Blast","Armor of Shadows","Beast Speech","Beguiling Influence","Devil's Sight","Eldritch Sight","Eldritch Spear","Eyes of the Rune Keeper","Fiendish Vigor","Gaze of Two Minds","Mask of Many Faces","Misty Visions","Repelling Blast","Thief of Five Fates"];
var tome = false;
var waTome = [];
var waTomeRituals = [];
var artisans = ["Alchemist","Armorer","Brewer","Calligrapher","Carpenter","Cartographer","Cobbler","Cook","Glassblower","Jeweler","Leatherworker","Mason","Painter","Potter","Shipwright","Smith","Tinker","Wagon-maker","Weaver","Woodcarver"];
eblast = false;
familiar = "";
var familiars = ["Bat","Bat","Cat","Cat","Cat","Crab","Frog (toad)","Hawk","Hawk","Lizard","Octopus","Owl","Owl","Owl","Poisonous Snake","Fish (quipper)","Rat","Rat","Rat","Raven","Raven","Raven","Sea Horse","Spider","Weasel","Weasel"];
var enemies = ["Aberrations","Beasts","Celestials","Constructs","Dragons","Elementals","Fey","Fiends","Giants","Monstrosities","Oozes","Plants","Undead"];
var enLangs = ["","","Celestial","","Draconic","Primordial","Sylvan","","Giant","","","",""];
var humanoids = ["Orcs","Goblins","Kobolds","Bugbears","Hobgoblins","Gnolls"];
var humLangs = ["Orc","Goblin","Draconic","Goblin","Goblin","Gnoll"];
var companions = ["Boar","Panther","Wolf","Giant Badger","Giant Poisonous Snake"];
var companionsStats = ["<i>Charge, Relentless</i>, Tusk +","<i>Keen Smell, Pounce,</i> Bite +","<i>Keen Hearing and Smell, Pack Tactics,</i> Bite +","<i>Keen Smell, Multiattack,</i> Bite +","<i>Blindsight 10 ft,</i> Bite +"];
var companionshp = [11, 13, 11, 13, 11];
var companionsAC = [11, 12, 13, 10, 14];
var companionsAttack1 = [3,4,4,3,6];
var companionsDamage1 = ["1d6","1d6","2d4","1d6","1d4"];
var companionsDamageBonus = [1,2,2,1,4];
var companionsDamageExtra = ["",""," and roll to  knock prone",""," and 3d6 poison dmg"];
var companionsAttack2 = [0,4,0,3,0];
var companionsAttackText2 = ["","Claw","","Claws",""];
var companionsAttackDamage2 = ["","1d4","","2d4",""];
var companionsDamageBonus2 = [0,2,0,1,0];



var music = ["Lute", "Flute","Harp", "Fiddle","Pipes", "Drums", "Bagpipes","Dulcimer","Lyre","Horn","Guitar","Pan flute","Shawm","Viol"];
var gaming = ["Dice games", "Dragonchess","Playing cards","Three-Dragon Ante"];
var valuables = ["Gold Nugget","Gold Figurine","Silver Cutlery","Bag of Gold Dust","Jeweled Helmet","Jeweled Dagger","Rare Book","Rare Map","Silver Wand","Jeweled Copper Helmet", "Silver Ring", "Silver Jewelry Box","Jeweled Copper Bracelet","Finely-crafted Copper Necklace","Rare Hunting Trophy","Engraved Silver Plate","Engraved Silver Holy Symbol","Jeweled Copper Holy Symbol","Silver Tobacco Box","Silver and Leather Bound Book","Gold and Leather Bound Book","Pieces of Plate Mail","Silver Chain","Finely-crafted Silk Robe","Silver Dice","Golden Dice","Finely-crafted Silver and Leather Shoes","Bottle of Rare Wine","Leather and Silver Quiver","Gold Belt Buckle","Dragonchess Set with Silver Pieces","Gold Dragonchess Pieces","Finely-crafted Viol","Finely-crafted Lute","Collection of Rare Coins","Exceptional Painting","Pearl","Pearl","Rare Gold and Silk Military Medal","Finely-crafted Crystal Slop Bucket","Silver Ceremonial Dagger","Half of a severely burned, barely legible spellbook","Silver and Wood Ceremonial Mask", "Gold and Wood Longstemmed Pipe","Small Gold Bell","Arrow Made of Gold","Silver Clockwork Toy","Small gem","Small gem","Small gem","Diamond","Bag of Very Rare Herbs","Small Gold Framed Mirror"];
var jewelry = ["Ring","Necklace","Pendant","Bracelets","Bracers","Tiara","Earrings","Amulet","Chalice","Ornamental Dagger","Bowl","Statuette","Goblet","Crown","Flute","Holy Symbol","and Wood Hand Crossbow","Ceremonial Saber","and Wood Lute", "and Wood Staff","and Wood Dragonchess Set","Hourglass","Pitcher","Medallion","Harp","Scepter","Drinking Horn","Gnome Music Box"];
var jewelryAdjectives = ["Finely-crafted Gold","Gold","Jeweled Gold","Finely-crafted Silver","Jeweled Copper","Jeweled Silver","Jeweled Electrum","Silver and Ivory"];
var jewelryRare = ["Ring","Necklace","Amulet","Chalice","Crown","Tiara","Goblet","Pendant","Ornamental Dagger","Scepter"];
var jewelryAdjectivesRare = ["Platinum","Jeweled Gold","Jeweled Platinum","Diamond and Silver","Platinum and Ruby","Gold and Ruby","Gold and Sapphire"];
var magicUncommon = ["Bag of Holding","Boots of Striding and Springing","Cloak of Elvenkind","Gloves of Swimming and Climbing","Goggles of Night","Keoghtom's Ointment","Wand of Magic Detection (3 charges)","Wand of Magic Missiles (7 charges)"];
//"Gauntlets of Ogre Power","Headband of Intellect",
var magicRare = ["Ring of Evasion (3 charges)","Ring of Protection","Ring of Resistance"];
//"Amulet of Health",
var magicVeryRare = ["Potion of Flying","Potion of Invisibility","Potion of Vitality"];
poisonUncommon = ["Assassin’s blood (Ingested)","Carrion crawler mucus  (Contact)","Drow poison  (Injury)","Essence of ether  (Inhaled)","Malice  (Inhaled)","Pale tincture  (Ingested)","Serpent venom  (Injury)","Truth serum  (Ingested)"];
Rare = ["Torpor  (Ingested)","Burnt othur fumes  (Inhaled)","Oil of taggit  (Contact)"];
VeryRare =["Wyvern  poison (Injury)","Purple worm poison (Injury)","Midnight tears  (Ingested)"]

//var magicUncommon = ["","","","","","","","","","","","","","","","","","","","","","",]

var magicWeapon =0;
var bootsOfSS = false;
var magicArmor =0;
var ringStone = ["Pearl","Tourmaline","Garnet","Sapphire","Citrine","Jet","Amethyst","Jade","Topaz","Spinel"];
var ringResistance  = ["Acid","Cold","Fire","Force","Lightning","Necrotic","Poison","Psychic","Radiant","Thunder"];
var ringProtection =0;
companion =-1;
var myMusic = [];
var myInstrument = "";
favored = "";
aarName=["Aera","Aial","Aur","Deekek","Errk","Heehk","Ikki","Kleeck","Oorr","Ouss","Quaf","Quierk","Salleek","Urreek","Zeed"];
gnomeNameM=["Alston","Alvyn","Boddynock","Brocc","Burgell","Dimble","Eldon","Erky","Fonkin","Frug","Gerbo","Gimble","Glim","Jebeddo","Kellen","Namfoodle","Orryn","Roondar","Seebo","Sindri","Warryn","Wrenn","Zook"];
gnomeNameF=["Bimpnottin","Breena","Caramip","Carlin","Donella","Duvamil","Ella","Ellyjobell","Ellywick","Lilli","Loopmottin","Lorilla","Mardnab","Nissa","Nyx","Oda","Orla","Roywyn","Shamil","Tana","Waywocket","Zanna"];
gnomeNameLast=["Beren","Daergel","Folkor","Garrick","Nackle","Murnig","Ningel","Raulnor","Scheppen","Timbers","Turen"];
gnomeNicknames=["Aleslosh","Ashhearth","Badger","Cloak","Doublelock","Filchbatter","Fnipper","Ku","Nim","Oneshoe","Pock","Sparklegem","Stumbleduck"];
deepGnomeNameM=["Belwar","Brickers","Durthmeck","Firble","Krieger","Kronthud","Schneltheck","Schnicktick","Thulwar","Walschud"];
deepGnomeNameF=["Beliss","Durthee","Frickarti","Ivridda","Krivi","Lulthiss","Nalvarti","Schnella","Thulmarra","Wirsidda"];
deepGnomeNameLast=["Crystalfist","Gemcutter","Ironfoot","Rockhewer","Seamfinder","Stonecutter"];
goliathNameBirth=["Aukan","Eglath","Gae-Al","Gauthak","Ilikan","Keothi","Kuori","Lo-Kag","Manneo","Maveith","Nalla","Orilo","Paavu","Pethani","Thalai","Thotham","Uthal","Vauea","Vimak"];
goliathNameNick=["Bearkiller","Dawncaller","Fearless","Flintfinder","Horncarver","Keeneye","Lonehunter","Longleaper","Rootsmasher","Skywatcher","Steadyhand","Threadtwister","Twice-Orphaned","Twistedlimb","Wordpainter"];
goliathNameClan=["Anakalathai","Elanithino","Gathakanathi","Kalagiano","Katho-Olavi","Kolae-Gileana","Ogolakanu","Thuliaga","Thunukalathi","Vaimei-Laga"];
humanNameM=["Ander","Blath","Bran","Frath","Geth","Lander","Luth","Malcer","Stor","Taman","Urth","Aseir","Bardeid","Haseid","Khemed","Mehmen","Sudeiman","Zasheir","Bor","Fodel","Glar","Grigor","Igan","Ivor","Kosef","Mival","Orel","Pavel","Sergor"];
humanNameF=["Amafrey","Betha","Cefrey","Kethra","Mara","Olga","Silifrey","Westra","Atala","Ceidil","Hama","Jasmal","Meilil","Seipora","Yasheira","Zasheida","Alethra","Kara","Katernin","Mara","Natali","Olma","Tana","Zora"];
humanNameLast=["Brightwood","Helder","Hornraven","Lackman","Stormwind","Windrivver","Basha","Dumein","Jassan","Khalid","Mostana","Pashar","Rein","Bersk","Chernin","Dotsk","Kulenov","Marsk","Nemetsk","Shemov","Starag"];
orcNameM=["Dench","Feng","Gell","Henk","Holg","Imsh","Keth","Krusk","Mhurren","Ront","Shump","Thokk"];
orcNameF=["Baggi","Emen","Engong","Kansif","Myev","Neega","Ovak","Ownka","Shautha","Sutha","Vola","Volen","Yevelda"];
tieflingNameM=["Akmenos","Amnon","Barakas","Damakos","Ekemon","Iados","Kairon","Leucis","Melech","Mordai","Morthos","Pelaios","Skamos","Therai"];
tieflingNameF=["Akta","Anakis","Bryseis","Criella","Damaia","Ea","Kallista","Lerissa","Makaria","Nemeia","Orianna","Phelaia","Rieta"];
tieflingNameLast=["Art","Carrion","Chant","Creed","Despair","Excellence","Fear","Glory","Hope","Ideal","Music","Nowhere","Open","Poetry","Quest","Random","Reverence","Sorrow","Temerity","Torment","Weary"];
dragonNameM=["Arjhan","Balasar","Bharash","Donaar","Ghesh","Heskan","Kriv","Medrash","Mehen","Nadarr","Pandjed","Patrin","Rhogar","Shamash","Shedinn","Tarhun","Torinn"];
dragonNameF=["Akra","Biri","Daar","Farideh","Harann","Flavilar","Jheri","Kava","Korinn","Mishann","Nala","Perra","Raiann","Sora","Surina","Thava","Uadjit"];
dragonNameLast=["Clethtinthiallor","Daardendrian","Delmirev","Drachedandion","Fenkenkabradon","Kepeshkmolik","Kerrhylon","Kimbatuul","inxakasendalor","Myastan","Nemmonis","Norixius","Ophinshtalajiir","Prexijandilin","Shestendeliath","Turnuroth","Verthisathurgiesh","Yarjerit"];
halfNameM=["Alton","Ander","Cade","Corrin","Eldon","Errich","Finnan","Garret","Lindal","Lyle","Merric","Milo","Osborn","Perrin","Reed","Roscoe","Wellby"];
halfNameF=["Andry","Bree","Callie","Cora","Euphemia","Jillian","Kithri","Lavinia","Lidda","Merla","Nedda","Paela","Portia","Seraphina","Shaena","Trym","Vani","Verna"];
halfNameLast=["Brushgather","Goodbarrel","Greenbottle","High-hill","Hilltopple","Leagallow","Tealeaf","Thorngage","Tosscobble","Underbough"];
elfNameM=["Adran","Aelar","Aramil","Arannis","Aust","Beiro","Berrian","Carric","Enialis","Erdan","Erevan","Galinndan","Hadarai","Heian","Himo","Immeral","Ivellios","Laucian","Mindartis","Paelias","Peren","Quarion","Riardon","Rolen","Soveliss","Thamior","Tharivol","Theren","Varis"];
elfNameF=["Adrie","Althaea","Anastrianna","Andraste","Antinua","Bethrynna","Birel","Caelynn","Drusilia","Enna","Felosial","Ielenia","Jelenneth","Keyleth","Leshanna","Lia","Meriele","Mialee","Naivara","Quelenna","Quillathe","Sariel","Shanairra","Shava","Silaqui","Theirastra","Thia","Vadania","Valanthe","Xanaphia"];
elfNameLast=["Amakiir (Gemflower)","Amastacia (Starflower)","Galanodel (Moonwhisper)","Holimion (Diamonddew)","Ilphelkiir (Gemblossom)","Liadon (Silverfrond)","Meliamne (Oakenheel)","Nai'lo (Nightbreeze)","Siannodel (Moonbrook)","Xiloscient (Goldpetal)"];
dwarfNameM=["Adrik","Alberich","Baern","Barendd","Brottor","Bruenor","Dain","Darrak","Delg","Eberk","Einkil","Fargrim","Flint","Gardain","Harbek","Kildrak","Morgran","Orsik","Oskar","Rangrim","Rurik","Taklinn","Thoradin","Thorin","Tordek","Traubon","Travok","Ulfgar","Veit","Vondal"];
dwarfNameF=["Amber","Artin","Audhild","Bardryn","Dagnal","Diesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","Ilde","Liftrasa","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra"];
dwarfNameLast=["Balderk","Battlehammer","Brawnanvil","Dankil","Fireforge","Frostbeard","Gorunn","Holderhek","Ironfist","Loderr","Lutgehr","Rumnaheim","Strakeln","Torunn","Ungart"];
name="";
gender=-1;

/*
for (x=0;x < wi2.length;x++) {
	console.log(x + wi2[x]);
}


for (x=0;x < weapons.length;x++) {
	console.log(x + weapons[x] + wpDam[x] + wpType[x] + wpRange[x]);
}
*/
/*
for (x=0;x < armors.length;x++) {
	console.log(x + armors[x] + armorAC[x]);
}
*/

var myWp = [];
var myAr = [];
var wpOutput = "";
var wrOutput = "";
var arOutput = "";
var spOutput = "";
var cOutput = "";
var bgOutput = "";
var toOutput = "";
var mySpells = [];
var myCantrips = [];
var bg=0;
var eqOutput = "";
var weOutput = "";
var maOutput = "";
var poOutput = "";
var temp = "";
var tempSpells =[];
var sp1=0;
var sp2=0;
var sp3=0;
var sp4=0;
var sp5=0;
var tempAr = [];
var st=[];
var saves=[];
var bool=false;


function pickSome(z) {
	bool=false;
	i=0
	while (bool == false) {
		i++;
		y = z[Math.floor(Math.random() * z.length)];
		if (i > 500) {
			z=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
			console.log("500 tries already.  Allowing any skills.");
		}
		if (skLearn[y] != true) {
			skLearn[y] = true;
			bool=true;
			return y;
		}
	}
}






function upgrade() {
//	lvl 2-30, 3-50, 4 70, 5 90 6+ automatic
	x=0.3 + ((level-2) * .2);
	if (level ==1)
		x=0;
	if (Math.random() < x)
		return true;
	else
		return false;
}

function upgradeUncommon() {
	// 2-10, 3-17, 4-25, 6-40, 8-55, 10-70
	x=0.1 + ((level-2) * 0.075);
	if (level ==1)
		x=0;
	if (Math.random() < x)
		return true;
	else
		return false;
}

function upgradeRare() {
	// 2-2, 4-8, 6-18, 8-32, 10-50
	x=((level * level) / 2) * .01;
	if (level ==1)
		x=0;
	if (Math.random() < x)
		return true;
	else
		return false;
}


function upgradeVeryRare() {
	// half as likely as upgraderare
	x=((level * level) / 4) * .01;
	if (level < 5)
		x=0;
	if (Math.random() < x)
		return true;
	else
		return false;
}



function warriorArmor() {
	if (mod[1] >3) {
		if ((upgrade() == true) && (level>1)) {
				myAr.push(armors[3]);
		} else {
				myAr.push(armors[2]);
		}
	} else if ((mod[1] > 0) && (level > 1) && (upgrade() == true)) {
	
		if (upgrade() == true)  {
			if (upgrade() == true)  {
				myAr.push(armors[8]);
			}
			else {
				myAr.push(armors[7]);
			}
		} else 
			myAr.push(armors[6]);
	} else {
	
		if ((upgradeUncommon() == true) && (abil[0] > 14) && (level > 1))  {
			if (upgradeUncommon() == true)  {
				myAr.push(armors[12]);
			} else {
				myAr.push(armors[11]);
			}
		} else if (abil[0] > 12) {
			myAr.push(armors[10]);
		} else {
			myAr.push(armors[9]);
		}
	}
}



function dwarfMagicArmor() {
	if ((level > 1) && (racetxt == "Mountain Dwarf")) {
		if (mod[1] > 2) {
			if (upgrade() == true) {
				myAr.push(armors[3]);
				return true;
			} else {
				myAr.push(armors[2]);
				return true;
			}

		} else {
			if (upgradeUncommon() == true) {
				myAr.push(armors[7]);
				return true;
			} else {
				myAr.push(armors[5]);
				return true;
			}

		}
	} else {
		return false;
	}

}




function pickManeuvers(z) {
	var answers = [];
	for (i=0; i < z;) {
		x = maneuvers[Math.floor(Math.random() * maneuvers.length)];
		if (answers.indexOf(x) > -1) {
			}	

		else 	{
			answers.push(x);	
			i++;
			}
		}
	answers.sort();
	for (i=0;i < answers.length;i++) {
		if (i==0) 
			abOutput += "(" + answers[i];
		else
			abOutput += ", " + answers[i];
	}

	abOutput += ")";
}




function pickMeta() {
	z=2;
	if (level > 9)
		z=3;
	var answers = [];
	for (i=0; i < z;) {
		x = meta[Math.floor(Math.random() * meta.length)];
		if (answers.indexOf(x) > -1) {
			}	

		else 	{
			answers.push(x);	
			i++;
			}
		}
	answers.sort();
	for (i=0;i < answers.length;i++) {
		if (i==0) 
			abOutput += "(" + answers[i];
		else
			abOutput += ", " + answers[i];
	}

	abOutput += ")";
}

function pickEldritch() {
	var answers = [];
	y=2;
	if (level > 4)
		y=3;
	if (level > 6)
		y=4;
	if (level > 8)
		y=5;

	if (level > 4) {
		eldritch.push("One with Shadows");
		eldritch.push("Sign of Ill Omen");
		eldritch.push("Mire the Mind");
	}
	if (level > 6) {
		eldritch.push("Sculptor of Flesh");
		eldritch.push("Bewitching Whispers");
		eldritch.push("Dreadful Word");
		eldritch.push("Sculptor of Flesh");

	}
	if (level > 8) {
		eldritch.push("Ascendant Flesh");
		eldritch.push("Minions of Chaos");
		eldritch.push("Otherworldly Leap");
		eldritch.push("Whispers of the Grave");
	}

	for (i=0; i < y;) {
		x = eldritch[Math.floor(Math.random() * eldritch.length)];	
		if ((level > 4) && (tempTxt.indexOf("Pact of the Blade") > -1) && (Math.random() > 0.67)) {
			x="Thirsting Blade";
		}
		if (((tempTxt.indexOf("Pact of the Chain")) > -1) && (Math.random() > 0.67)) {
			x="Voice of the Chain Master";
		}
		if (((tempTxt.indexOf("Pact of the Tome")) > -1) && (Math.random() > 0.67)) {
			x="Book of Ancient Secrets";
			
		}
		if (answers.indexOf(x) == -1) {
			answers.push(x);	
			i++;
		}
	}
	answers.sort()

	for (i=0;i < answers.length;i++) {
		if (i==0) 
			abOutput += "(" + answers[i];
		else
			abOutput += ", " + answers[i];
	}

	abOutput += ")";
	return answers;

}


function pickWeap(z) {
	x = z[Math.floor(Math.random() * z.length)];
	return x;
}

 
function dragon() {
	x = Math.floor(Math.random() * 10); 
	switch (x) {
		case (0):
			tempAr =["Black","Acid","5 x 30 ft. line"];
			break;
		case (1):
			tempAr=["Blue","Lightning","5 x 30 ft. line"];
			break;
		case (2):
			tempAr=["Brass","Fire","5 x 30 ft. line"];
			break;
		case (3):
			tempAr=["Bronze","Lightning","5 x 30 ft. line"];
			break;
		case (4):
			tempAr=["Copper","Acid","5 x 30 ft. line"];
			break;
		case (5):
			tempAr=["Gold","Fire","15 ft. cone"];
			break;
		case (6):
			tempAr=["Green","Poison","15 ft. cone"];
			break;
		case (7):
			tempAr=["Red","Fire","15 ft. cone"];
			break;
		case (8):
			tempAr=["Silver","Cold","15 ft. cone"];
			break;
		case (9):
			tempAr=["White","Cold","15 ft. cone"];
			break;
		
		}
return tempAr;
}

 
// put a plus sign ona positive number
function showPlus(x) {
	if (x > -1) 
		return "+" + x;
	else
		return x;
}


//show char sheet
function showAbil () {

//determine passive perception
	passive = 10 + mod[4];
	if (skLearn[11]==true) {
		passive += prof;
		//if expert in perception give extra bonus
		if (expertise.indexOf(11) > -1) 
			passive += prof;
	} else if (abOutput.indexOf("Jack of all") > -1) {
		passive += Math.floor(prof/2);
	}

	output += "Ability scores:   &nbsp; STR:  " + abil[0] + " (" + showPlus( mod[0] ) + ") &nbsp; DEX:  " + abil[1] + " (" + showPlus( mod[1] ) + ") &nbsp; CON: " + abil[2]  + " ("+ showPlus( mod[2] ) +
		") &nbsp; INT: " + abil[3] + " ("+showPlus ( mod[3] )+") &nbsp;  WIS: " + abil[4] + " ("+showPlus ( mod[4] )+") &nbsp; CHA: " + abil[5] + " ("+showPlus ( mod[5] )+
		")<br>Saving throws:  &nbsp; STR:  " + showPlus( saves[0] ) + " &nbsp; DEX:  " + showPlus( saves[1] ) + "  &nbsp; CON: " +  showPlus( saves[2] ) + " &nbsp; INT: " + showPlus ( saves[3] )+" &nbsp;  WIS: " + showPlus ( saves[4] )+" &nbsp; CHA: " +showPlus ( saves[5] )+
		"<br>Initiative:  " + showPlus( initiative ) + " &nbsp; Speed:  " + speed;

		//show bonus for boots of striding and sprinigng
		if ((bootsOfSS == true) && (speed < 30)) 
			output += " (30 with boots)";
		if (racetxt == "Aarakocra") {
			output += " (50 flying speed)"
		}
		
		output += " &nbsp; Passive perception:  " + passive +" &nbsp; Size:  " + size+" &nbsp; Proficiency bonus:  " + showPlus(prof);

	if (gender==2) {
		output += " &nbsp; Gender: Female";
	} else {
		output += " &nbsp; Gender: Male";
	}
	output += "<br>";
}


function elfWeapon() {
	if ((racetxt=="High Elf") || (racetxt=="Wood Elf"))  {
		if (mod[1] >  mod[0])
			myWp.push(weapons[18]);
		else
			myWp.push(weapons[14]); 
		return true;
	} else if (racetxt=="Drow Elf") {
		if (mod[1] > mod[0]) {
			myWp.push(weapons[16]);
			return true;
		} else
		return false;
	} else
		return false;
}



function elfBow() {
	if (((racetxt=="High Elf") || (racetxt=="Wood Elf")) && (level > 1)) {
		myWp.push(weapons[9]);
		return true;
	} else {
		return false;
	}
}



function dwarfWeapon() {
	if ((racetxt=="Hill Dwarf") || (racetxt=="Mountain Dwarf")) {
		if ((Math.random() > 0.5) && (cl != 3))
			myWp.push(weapons[11]);
		else 
			myWp.push(weapons[19]);

		return true;
	} else
		return false;
}


function genAbil () {
d1 = Math.floor((Math.random() * 6) + 1); 
d2 = Math.floor((Math.random() * 6) + 1); 
d3 = Math.floor((Math.random() * 6) + 1); 
d4 = Math.floor((Math.random() * 6) + 1); 
total = d1+d2+d3+d4 - Math.min(d1,d2,d3,d4);
return total;
}

function modNum(x) {
switch (x) {
	case 1:
		return -5;
	case 2:
		return -4;
	case 3:
		return -4;
	case 4:
		return -3;
	case 5:
		return -3;
	case 6:
		return -2;
	case 7:
		return -2;
	case 8:
		return -1;
	case 9:
		return -1;
	case 10:
		return 0;
	case 11:
		return 0;
	case 12:
		return 1;
	case 13:
		return 1;
	case 14:
		return 2;
	case 15:
		return 2;
	case 16:
		return 3;
	case 17:
		return 3;
	case 18:
		return 4;
	case 19:
		return 4;
	case 20:
		return 5;	
	}
}


gender = Math.floor(Math.random() * 2) +1;
if (forceGender > 0) {
	gender=forceGender;
}

var rollOutput = "";
var abilRaw = [0,0,0,0,0,0];
var lowest = -1;
bool=false;
var sum=0;

//buy points or roll

if (document.getElementById("genMethod").value == "1") {
	abilRaw = [];
	x=Math.floor(Math.random() * allArrays.length);
	abilRaw = allArrays[x];
	console.log("Array picked = "+abilRaw);
	rollOutput += "Random array:  " + abilRaw;
} else if (document.getElementById("genMethod").value == "2") {
	abilRaw = [];
	abilRaw.unshift(document.getElementById("a1").value * 1);
	abilRaw.unshift(document.getElementById("a2").value * 1);
	abilRaw.unshift(document.getElementById("a3").value * 1);
	abilRaw.unshift(document.getElementById("a4").value * 1);
	abilRaw.unshift(document.getElementById("a5").value * 1);
	abilRaw.unshift(document.getElementById("a6").value * 1);
	abilRaw.sort(function(a,b){return b-a});
} else if (document.getElementById("genMethod").value == "3") {
	abil[0]=document.getElementById("a1").value * 1;
	abil[1]=document.getElementById("a2").value * 1;
	abil[2]=document.getElementById("a3").value * 1;
	abil[3]=document.getElementById("a4").value * 1;
	abil[4]=document.getElementById("a5").value * 1;
	abil[5]=document.getElementById("a6").value * 1;
	
} else {

	rollOutput += "Ability rolls:  ";
	y=0;
	z=65;
	if (forceAbil > 0)
		z=forceAbil;
	while (bool==false)	{
		y++;
		i=0;
		for (x=0;x<6;x++) {
			abilRaw[x] = genAbil();
			i += abilRaw[x];
		}
		sum += i;
		abilRaw.sort(function(a,b){return b-a});

		
		if (i>z) {
			bool=true;

		} else
			rollOutput += "adds up to " +i + " (" + abilRaw+ ")!  Starting over!  ";
	} 
	rollOutput = "Rolls: " + abilRaw + "=" +i + " total";
	console.log(rollOutput);
	console.log(y + " rolls to get an acceptable sum");
	console.log("average roll = " + (sum/y));
}

exotic = Math.floor((Math.random() * 4) + 1); 

if ((forceRace >9) && (forceRace < 21)) {
	exotic =0;
} else if (forceRace > 0) {
	exotic=1;
}

racetxt = "";
// 	1 in 4 chance of non-elf/dwarf/half/hum
//exotic=1;
if (exotic == 1) {
	abOutput+="<b>Racial Traits:</b> ";

	ra = Math.floor((Math.random() * 14) + 1); 
	if (ra > 7) {
		ra += 13;
	}

	if (forceRace > 0)
		ra=forceRace;
//	ra=1;
	switch (ra) {
	case (1):
		racetxt="Dragonborn";
		abil[0] += 2;
		abil[5] += 1;
		languageOutput = "Common, Draconic";
		
		speed=30;
		var dragType = "";
		var elemType = "";
		tempAr = dragon();
		dragType = tempAr[0];
		elemType = tempAr[1];
		breathType = tempAr[2];
		abOutput += "Draconic Ancestry (" + dragType +  "), Breath Weapon (" + elemType + " damage in a "+breathType+"), Damage Resistance (" + elemType + ")"; 
		if (gender==2) {
			name = dragonNameF[Math.floor(Math.random() * dragonNameF.length)];
		} else {
			name = dragonNameM[Math.floor(Math.random() * dragonNameM.length)];
		}
		name += " " + dragonNameLast[Math.floor(Math.random() * dragonNameLast.length)];
		break;
	
	case (2):
		racetxt="Forest Gnome";
		abil[3] += 2;
		abil[1] += 1;
		languageOutput = "Common, Gnomish";
		speed=25;
		size="Small";
		abOutput += "Darkvision, Gnome Cunning, Natural Illusionist, Speak with Small Animals";
		raceSpells.push("Minor Illusion");	
		raceSpellAbility=3;
		if (gender==2) {
			name = gnomeNameF[Math.floor(Math.random() * gnomeNameF.length)];
		} else {
			name = gnomeNameM[Math.floor(Math.random() * gnomeNameM.length)];
		}
		name += " \"" + gnomeNicknames[Math.floor(Math.random() * gnomeNicknames.length)] +"\" "+ gnomeNameLast[Math.floor(Math.random() * gnomeNameLast.length)];
		break;
	
	case (3):
		racetxt="Half-Elf";

		abil[5] += 2;
		languageOutput = "Common, Elvish";
		speed=30;
		moreLang = 1;
		abOutput += "Darkvision, Fey Ancestry, 2 skills";
		mySkills = [];
		if (Math.random() > 0.5) {
			if (gender==2) {
				name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
			} else {
				name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
			}
			name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		} else {
			if (gender==2) {
				name = elfNameF[Math.floor(Math.random() * elfNameF.length)];
			} else {
				name = elfNameM[Math.floor(Math.random() * elfNameM.length)];
			}
			name += " " + elfNameLast[Math.floor(Math.random() * elfNameLast.length)];
		}

		break;
	
	case (4):
		racetxt="Half-Orc";
		abil[0] += 2;
		abil[2] += 1;
		speed=30;
		languageOutput = "Common, Orc";
		skLearn[7] = true;
		mySkills.push(7);

		abOutput += "Darkvision, Menacing (Intimidate skill), Relentless Endurance, Savage Attack";
		if (Math.random() > 0.5) {
			if (gender==2) {
				name = orcNameF[Math.floor(Math.random() * orcNameF.length)];
			} else {
				name = orcNameM[Math.floor(Math.random() * orcNameM.length)];
			}
		} else {
			if (gender==2) {
				name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
			} else {
				name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
			}
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;

	case (5):
		racetxt="Tiefling";
		abil[3] += 1;
		abil[5] += 2;
		speed=30;
		languageOutput = "Common, Infernal";
		abOutput += "Darkvision, Hellish Resistance, Infernal Legacy";
		raceSpellAbility=5;	
		raceSpells.push("Thaumaturgy");	
		if (level > 2) 
			raceSpells.push("Hellish Rebuke (once a day)");
		if (level > 4)
			raceSpells.push("Darkness (once a day)");

		if (gender==2) {
			name = tieflingNameF[Math.floor(Math.random() * tieflingNameF.length)];
		} else {
			name = tieflingNameM[Math.floor(Math.random() * tieflingNameM.length)];
		}
		name += " " + tieflingNameLast[Math.floor(Math.random() * tieflingNameLast.length)];
		break;
	
	case (6):
		racetxt="Drow Elf";
		abil[5] += 1;
		abil[1] += 2;
		skLearn[11] = true;
		mySkills.push(11);

		raceSpellAbility = 5;
		speed=30;
		languageOutput = "Common, Elvish";
		abOutput += "Superior Darkvision (120 ft), Sunlight sensitivity, Drow Magic, Keen Senses, Fey Ancestry, Trance";
		raceSpells.push("Dancing Lights");
		if (level > 2) 
			raceSpells.push("Faerie Fire (once a day)");
		if (level > 4)
			raceSpells.push("Darkness (once a day) ");
		if (gender==2) {
			name = elfNameF[Math.floor(Math.random() * elfNameF.length)];
		} else {
			name = elfNameM[Math.floor(Math.random() * elfNameM.length)];
		}
		name += " " + elfNameLast[Math.floor(Math.random() * elfNameLast.length)];

		break;
	case (7):
		racetxt="Rock Gnome";
		abil[3] += 2;
		speed=25;
		abil[2] += 1;
		size="Small";
		languageOutput = "Common, Gnomish";
		if (gender==2) {
			name = gnomeNameF[Math.floor(Math.random() * gnomeNameF.length)];
		} else {
			name = gnomeNameM[Math.floor(Math.random() * gnomeNameM.length)];
		}
		name += " " + gnomeNameLast[Math.floor(Math.random() * gnomeNameLast.length)];
		abOutput += "Darkvision, Gnome Cunning, Artificer's Lore";
		toOutput += ", Tinker's tools";
		break;
	case (21):
		racetxt="Aarakocra";
		abil[1] += 2;
		speed=25;
		abil[4] += 1;
		size="Medium";
		languageOutput = "Common, Aarakocra, Auran";
		abOutput += "Flight, Talons";
		name = aarName[Math.floor(Math.random() * aarName.length)];
		break;	
	case (22):
		racetxt="Deep Gnome (Svirfneblin)";
		abil[3] += 2;
		speed=25;
		abil[1] += 1;
		size="Small";
		languageOutput = "Common, Gnomish, Undercommon";
		if (gender==2) {
			name = deepGnomeNameF[Math.floor(Math.random() * deepGnomeNameF.length)];
		} else {
			name = deepGnomeNameM[Math.floor(Math.random() * deepGnomeNameM.length)];
		}
		name += " " + deepGnomeNameLast[Math.floor(Math.random() * deepGnomeNameLast.length)];
		abOutput += "Superior Darkvision (120 ft), Gnome Cunning, Stone Camouflage";
		break;
	case (23):
		racetxt="Air Genasi";
		abil[1] += 1;
		abOutput += "Unending Breath, Mingle with the Wind";
		raceSpells.push("Levitate (once per long rest)");
		raceSpellAbility = 2;
		abil[2] += 2;
		speed=30;
		size="Medium";
		languageOutput = "Common, Primordial";
		if (gender==2) {
			name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
		} else {
			name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;
	case (24):
		racetxt="Earth Genasi";
		abil[1] += 0;
		abOutput += "Earth Walk, Merge with Stone";
		raceSpells.push("Pass Without Trace (once per long rest)");
		raceSpellAbility = 2;
		abil[2] += 2;
		speed=30;
		size="Medium";
		languageOutput = "Common, Primordial";
		if (gender==2) {
			name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
		} else {
			name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;
	case (25):
		racetxt="Fire Genasi";
		abil[3] += 1;
		abOutput += "Darkvision, Fire Resistance, Reach to the Blaze";
		raceSpells.push("Produce Flame");
		if (level > 2) 
			raceSpells.push("Burning Hands (as a 1st level spell once per long rest)");
		raceSpellAbility = 2;
		abil[2] += 2;
		speed=30;
		size="Medium";
		languageOutput = "Common, Primordial";
		if (gender==2) {
			name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
		} else {
			name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;
	case (26):
		racetxt="Water Genasi";
		abil[4] += 1;
		abOutput += "Acid Resistance, Amphibious, Swim, Call to the Wave";
		raceSpells.push("Shape Water");
		if (level > 2) 
			raceSpells.push("Create or Destroy Water (as a 2nd level spell once per long rest)");
		raceSpellAbility = 2;
		abil[2] += 2;
		speed=30;
		size="Medium";
		languageOutput = "Common, Primordial";
		if (gender==2) {
			name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
		} else {
			name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;
	case (27):
		racetxt="Goliath";
		abil[2] += 1;
		abOutput += "Natural Athlete (Athletics skill), Stone's Endurance, Powerful Build, Mountain Born";
		
		abil[0] += 2;
		mySkills.push(3);
		skLearn[3] = true;
		speed=30;
		size="Medium";
		languageOutput = "Common, Giant";
		name = goliathNameBirth[Math.floor(Math.random() * goliathNameBirth.length)] + "  \"" + goliathNameNick[Math.floor(Math.random() * goliathNameNick.length)] + "\" " + goliathNameClan[Math.floor(Math.random() * goliathNameClan.length)];
		break;



	}

}
else	{
	ra = Math.floor((Math.random() * 7) + 1); 

	if (forceRace > 10)
		ra = forceRace-10;

	if (ra != 3)
		abOutput+="<b>Racial Traits:</b> ";

	switch (ra) {
	case (1):
		racetxt="Hill Dwarf";
		abil[2] += 2;
		abil[4] += 1;
		languageOutput = "Common, Dwarvish";
		speed=25;
		abOutput += "Darkvision, Dwarven Resilience";

		x = Math.floor(Math.random() * 3); 
		switch (x) {
			case (0):
				toOutput +=", Smith's tools";
				break;
			case (1):
				toOutput +=", Brewer's tools";
				break;
			case (2):
				toOutput +=", Mason's tools";
				break;
			}
		abOutput += ", Stonecunning, Dwarven toughness"

		if (gender==2) {
			name = dwarfNameF[Math.floor(Math.random() * dwarfNameF.length)];
		} else {
			name = dwarfNameM[Math.floor(Math.random() * dwarfNameM.length)];
		}
		name += " " + dwarfNameLast[Math.floor(Math.random() * dwarfNameLast.length)];
		break;
	
	case (2):
		racetxt="Mountain Dwarf";
		abil[0] += 2;
		abil[2] += 2;
		languageOutput = "Common, Dwarvish";
		speed=25;
		abOutput += "Darkvision, Dwarven Resilience";
		
		x = Math.floor(Math.random() * 3); 
		switch (x) {
			case (0):
				toOutput +=", Smith's tools";
				break;
			case (1):
				toOutput +=", Brewer's tools";
				break;
			case (2):
				toOutput +=", Mason's tools";
				break;
			}
		abOutput += ", Stonecunning"
		if (gender==2) {
			name = dwarfNameF[Math.floor(Math.random() * dwarfNameF.length)];
		} else {
			name = dwarfNameM[Math.floor(Math.random() * dwarfNameM.length)];
		}
		name += " " + dwarfNameLast[Math.floor(Math.random() * dwarfNameLast.length)];
		break;
	
	case (3):
		racetxt="Human";
		for (x=0;x<6;x++)
			abil[x] += 1;
		languageOutput = "Common";
		speed=30;
		moreLang += 1;
		if (gender==2) {
			name = humanNameF[Math.floor(Math.random() * humanNameF.length)];
		} else {
			name = humanNameM[Math.floor(Math.random() * humanNameM.length)];
		}
		name += " " + humanNameLast[Math.floor(Math.random() * humanNameLast.length)];
		break;
	
	case (4):
		racetxt="High Elf";
		abil[1] += 2;
		abil[3] += 1;
		languageOutput = "Common, Elvish";
		raceSpellAbility=3;
		speed=30;
		moreLang += 1;
		skLearn[11] = true;
		mySkills.push(11);

		abOutput += "Darkvision, Keen senses, Fey ancestry, Trance, Cantrip, Extra Language";
		if (gender==2) {
			name = elfNameF[Math.floor(Math.random() * elfNameF.length)];
		} else {
			name = elfNameM[Math.floor(Math.random() * elfNameM.length)];
		}
		name += " " + elfNameLast[Math.floor(Math.random() * elfNameLast.length)];
		break;

	case (5):
		racetxt="Wood Elf";
		abil[1] += 2;
		abil[4] += 1;
		speed=35;
		languageOutput = "Common, Elvish";
		abOutput += "Darkvision, Keen senses, Fey ancestry, Trance, Mask of the Wild";
		skLearn[11] = true;
		mySkills.push(11);
		if (gender==2) {
			name = elfNameF[Math.floor(Math.random() * elfNameF.length)];
		} else {
			name = elfNameM[Math.floor(Math.random() * elfNameM.length)];
		}
		name += " " + elfNameLast[Math.floor(Math.random() * elfNameLast.length)];
		break;
	
	case (6):
		racetxt="Stout Halfling";
		abil[1] += 2;
		abil[2] += 1;
		size="Small";
		languageOutput = "Common, Halfling";
		abOutput += "Lucky, Brave, Halfling Nimbleness, Stout Resilience";
		speed=25;
		if (gender==2) {
			name = halfNameF[Math.floor(Math.random() * halfNameF.length)];
		} else {
			name = halfNameM[Math.floor(Math.random() * halfNameM.length)];
		}
		name += " " + halfNameLast[Math.floor(Math.random() * halfNameLast.length)];
		break;
	case (7):
		racetxt="Lightfoot Halfling";
		abil[1] += 2;
		abil[5] += 1;
		size="Small";
		languageOutput = "Common, Halfling";
		abOutput += "Lucky, Brave, Halfling Nimbleness, Naturally Stealthy";
		speed=25;
		if (gender==2) {
			name = halfNameF[Math.floor(Math.random() * halfNameF.length)];
		} else {
			name = halfNameM[Math.floor(Math.random() * halfNameM.length)];
		}
		name += " " + halfNameLast[Math.floor(Math.random() * halfNameLast.length)];
		break;

	}

}


if (racetxt != "Human")
	abOutput += "<br>"

abOutput += "<b>Abilities:</b> ";

console.log("Racial bonuses:");
for (i=0;i<6;i++)
	console.log(abilNames[i] + ": " + abil[i]);


cl = Math.floor((Math.random() * 15) + 1); 
classtxt = "";
ab1=0;
ab2=0;
ab3=-1;
hd=8;
//cl=9;
if (forceCl >0 )
	cl=forceCl;
switch (cl) {

	case 1:
		classtxt = "Barbarian";

		bg=9;
		ab1=0;
		ab2=2;
		ab3=1;
		hd=12;
		st=[0,2];
		x =2;
		if (level >2)
			x=3;
		if (level >5)
			x=4;
		if (level > 11)
			x=5;
		if (level > 16)
			x=6;

		y=2;
		if (level > 8)
			y=3;
		if (level > 15)
			y=4;
		
		abOutput += "Rage (" + x + " Rages, "+ showPlus( y ) + " damage), Unarmored Defense";

		if (level >1)
			abOutput += ", Reckless Attack, Danger Sense";			
		if (level >2) {
			x=Math.random();
			if (forceBarb==0) {
				x=0;
			} else if (forceBarb>0) {
				x=1;
			}
			abOutput += ", Primal Path";			
			if (x < 0.5) {
				classtxt += " (Path of the Berserker)";
				abOutput += " (Path of the Berserker)";

				abOutput += ", Frenzy";
			} else {
				classtxt += " (Path of the Totem Warrior &mdash; ";
				abOutput += " (Path of the Totem Warrior)";
				abOutput += ", Spirit Seeker, Totem Spirit";
				x=Math.floor(Math.random() * 3); 	
				
				if (forceBarb>1)
					x=forceBarb-2;

				if (x==0) {
					abOutput += " (Bear)";
					classtxt += "Bear)";
				}
				if (x==1) {
					abOutput += " (Eagle)";
					classtxt += "Eagle)";
				}
				if (x==2) {
					abOutput += " (Wolf)";
					classtxt += "Wolf)";
				}
			}
		}
		if (level >4) {
			abOutput += ", Extra Attack, Fast Movement";
			speed += 10;
		}
		if (level >5) {
			abOutput += ", Path Feature";
		}
		if (level >6) {
			abOutput += ", Feral Instinct";
		}
		if (level >8) {
			abOutput += ", Brutal Critical";
		}
		if (level >9) {
			abOutput += ", Spirit Walker";
		}

		eqOutput += ", Explorer's pack"
		break;


	case 2:
		classtxt = "Bard";
		spellAbility = 5;
		ab1=5;
		ab2=1;
		bg=4;	
		st=[1,5];	
		abOutput += "Spellcasting, Bardic Inspiration (";		
		if (level > 9) {
			abOutput += "d10)";
		} else if (level > 4) {
			abOutput += "d8)";
		} else {
			abOutput += "d6)";
		}
//		abOutput += mod[5] + " uses)"

		//Can play 3 musical instruments,
		for (i=0;i < 3;i++) {
			temp = music[Math.floor(Math.random() * music.length)];
			//bards prefer lutes
			if (Math.random() < 0.5)
				temp = music[0];


			while (myMusic.indexOf(temp) > -1) {
				temp = music[Math.floor(Math.random() * music.length)];
			}
			myMusic.push(temp);
			
		}
		myInstrument = myMusic[0];
		myMusic.sort();
		for (i=0;i < 3;i++) {
			toOutput += ", " + myMusic[i];
		}


		if (level > 1) {
				abOutput += ", Jack of all trades, Song of Rest (d";
				if (level >8 ) {
					abOutput += "8)";
				} else {
					abOutput += "6)";
				}
		}

		if (level > 2) {
			x=Math.random();
			if (forceBard == 0) 
				x=1;
			else if (forceBard==1)
				x=0;

			
			if (x > 0.5) {
				abOutput += ", Bard College (Lore), Bonus proficiencies, Cutting words";
				classtxt += " (College of Lore)";
				if (level>5)  {
					abOutput += ", Additional Magical Secrets";
				}
			} else {
				abOutput += ", Bard College (Valor), Bonus proficiencies (arms), Combat inspiration";
				classtxt += " (College of Valor)";
				if (level >5) {
					abOutput += ", Extra Attack";
				}
			}
			abOutput += ", Expertise";
		}
		if (level > 4) {
			abOutput += ", Font of Inspiration";
		}
		if (level > 5) {
			abOutput += ", Countercharm";
		}
		if (level > 9) {
			abOutput += ", Magical Secrets";
			
		}

		break;
	case 3:
		classtxt = "Cleric (";
		spellAbility = 4;
		ab1=4;
		ab2=0;
		ab3=2;
		bg=1;
		st=[4,5];
		abOutput += "Spellcasting, Divine Domain";				
		clDomain = Math.floor(Math.random() * 8); 
		if ((forceDomain > -1) && (document.getElementById("selClass").value == 3)) {
			clDomain = forceDomain;
		}

		//clDomain=0;
		switch (clDomain) {
			case 0:
				classtxt += "Knowledge";
				abOutput += ", Blessings of Knowledge";
				moreLang += 2;

				for (x=2;x > 0;x--) {
					y = pickSome([2,5,10,14]);
					mySkills.push(y);
					expertise.push(y);
				}
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Knowledge of the Ages";				
				if (level > 5) {
					abOutput += ", Channel Divinity: Read Thoughts";
				}
				if (level > 7) {
					abOutput += ", Potent Spellcasting";
				}
				break;
			case 1:
				classtxt += "Life";

				abOutput += ", Bonus proficiency, Discipline of Life";
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Preserve Life (heals " + (5*level) + " hp)";				
				if (level > 5) {
					abOutput += ", Blessed Healer";
				}

				if (level > 7) {
					abOutput += ", Divine Strike +1d8 Radiant dmg";
				}

				break;
			case 2:
				classtxt += "Light";
				abOutput += ", Bonus proficiency, Warding Flare";
				myCantrips.unshift("Light");	
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Radiance of the Dawn";				
				if (level > 5) {
					abOutput += ", Improved Flare";
				}
				if (level > 7) {
					abOutput += ", Potent Spellcasting";
				}


				break;
			case 3:
				classtxt += "Nature";
				abOutput += ", Acolyte of Nature, Bonus proficiency";
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Charm Animals and Plants";				
				if (level > 5) {
					abOutput += ", Dampen Elements";
				}

				if (level > 7) {
					abOutput += ", Divine Strike - 1d8 Cold, Fire, or Lighting dmg";
				}

				break;
			case 4:
				classtxt += "Tempest";
				abOutput += ", Bonus proficiency, Wrath of the Storm";
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Destructive Wrath";				
				if (level > 5) {
					abOutput += ", Thunderbolt Strike";
				}

				if (level > 7) {
					abOutput += ", Divine Strike - 1d8 Thunder dmg";
				}

				break;
			case 5:
				classtxt += "Trickery";
				abOutput += ", Blessing of the Trickster";
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Invoke Duplicity";				
				if (level > 5) {
					abOutput += ", Channel Divinity: Cloak of Shadows";
				}
				if (level > 7) {
					abOutput += ", Divine Strike - 1d8 Poison dmg";
				}



				break;
			case 6:
				classtxt += "War";
				abOutput += ", Bonus proficiency, War Priest";
				if (level > 1)
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Guided Strike";				
				if (level > 5) {
					abOutput += ", Channel Divinity: War God's Blessing";
				}
				if (level > 7) {
					abOutput += ", Divine Strike (1d8 Extra Weapon dmg)";
				}


				break;
			case 7:
				classtxt += "Death";
				abOutput += ", Bonus proficiency, Reaper";
				if (level > 1) {
					x=5 + (level * 2);
					abOutput += ", Channel Divinity: Turn Undead, Channel Divinity: Touch of Death " + showPlus( x ) + "  necrotic damage";				
				}
				if (level > 5) {
					abOutput += ", Inescapable Destruction";
				}
				if (level > 7) {
					abOutput += ", Divine Strike +1d8 necrotic damage";
				}
				break;			
		}
		classtxt += " domain)";
		if (level > 7) {
			abOutput += ", Destroy Undead (CR 1)"

		} else if (level >4) {
			abOutput += ", Destroy Undead (CR 1/2)"	
		}
		if (level > 9) {
			abOutput += ", Divine Intervention"

		} 
		break;

	case 4:
		classtxt = "Druid";
		spellAbility = 4;
		ab1=4;
		ab2=2;
		bg=6;
		st=[3,4];
		toOutput += ", Herbalism kit";
		languageOutput += ", Druidic";
		abOutput += "Spellcasting";
		xx = -1;
		if ((forceCircle > -1) && (document.getElementById("selClass").value == 4)) {
			xx = forceCircle;
		}
		
		x = Math.random();
		//if player chose circle of moon then don't allow him to randomly get cirlce of land
		if (xx == 0) {
			x=1;
		}

		
		if (level > 1) {
			abOutput += ", Wild Shape";				

			//choose cirlce of moon or circle of land.  
			// circle of land 1st
			if ((x < 0.5) || (xx > 0)) {

				//show 2nd levl abilities to wild shape
				if (level < 4) {
					abOutput += " (CR 1/4 creature - No flying or swimming speed)";
				} else if (level < 8) {
					abOutput += " (CR 1/2 creature - No flying speed)";
				} else if (level >7) {
					abOutput += " (CR 1 creature)";
				}



				drCircle = 0;
				x=Math.floor(Math.random() * 8); 	

				//set circle of land to user's choice
				if (xx > 0)
					x = xx-1;

				if (x==0) {
					land += "Arctic";
					if (level >2) {
						ciSpells.push("Hold Person");
						ciSpells.push("Spike Growth");					
				}
					if (level > 4) {
						ciSpells.push("Sleet Storm");
						ciSpells.push("Slow");					
					}
					if (level > 6) {
						ciSpells.push("Freedom of Movement");
						ciSpells.push("Ice Storm");						
					}
					if (level > 8) {
						ciSpells.push("Commune with Nature");
						ciSpells.push("Cone of Cold");						
					}


				}
				if (x==1) {
					land += "Coast";
					if (level >2) {
					ciSpells.push("Mirror Image");
					ciSpells.push("Misty Step");					
					}	
					if (level > 4) {
						ciSpells.push("Water Breathing");
						ciSpells.push("Water Walk");					
					}
					if (level > 6) {
						ciSpells.push("Control Water");
						ciSpells.push("Freedom of Movement");						
					}
					if (level > 8) {
						ciSpells.push("Conjure Elemental");
						ciSpells.push("Scrying");						
					}

				}
				if (x==2) {
					land += "Desert";
					if (level >2) {
					ciSpells.push("Blur");
					ciSpells.push("Silence");					

					}
					if (level > 4) {
						ciSpells.push("Create Food and Water");
						ciSpells.push("Protection from Energy");					
					}
					if (level > 6) {
						ciSpells.push("Blight");
						ciSpells.push("Hallucinatory Terrain");						
					}
					if (level > 8) {
						ciSpells.push("Insect Plague");
						ciSpells.push("Wall of Stone");						
					}
				}
				if (x==3) {
					land += "Forest";
					if (level >2) {
					ciSpells.push("Barkskin");
					ciSpells.push("Spider Climb");					
						
					}
					if (level > 4) {
						ciSpells.push("Call Lightning");
						ciSpells.push("Plant Growth");					
					}
					if (level > 6) {
						ciSpells.push("Divination");
						ciSpells.push("Freedom of Movement");						
					}
					if (level > 8) {
						ciSpells.push("Commune with Nature");
						ciSpells.push("Tree Stride");						
					}

				}
				if (x==4) {
					land += "Grassland";
					if (level >2) {
						ciSpells.push("Invisibility");
						ciSpells.push("Pass without Trace");					
						
					}
					if (level > 4) {
						ciSpells.push("Daylight");
						ciSpells.push("Haste");
					}
					if (level > 6) {
						ciSpells.push("Divination");
						ciSpells.push("Freedom of Movement");						
					}
					if (level > 8) {
						ciSpells.push("Dream");
						ciSpells.push("Insect Plague");						
					}

				}
				if (x==5) {
					land += "Mountain";
					if (level >2) {
						ciSpells.push("Spider Climb");
						ciSpells.push("Spike Growth");					
						
					}
					if (level > 4) {
						ciSpells.push("Lightning Bolt");
						ciSpells.push("Meld into Stone");					
					}
					if (level > 6) {
						ciSpells.push("Stone Shape");
						ciSpells.push("Stoneskin");						
					}
					if (level > 8) {
						ciSpells.push("Passwall");
						ciSpells.push("Wall of Stone");						
					}

					}
				if (x==6) {
					land += "Swamp";
						if (level >2) {
						ciSpells.push("Darkness");
						ciSpells.push("Melf's Acid Arrow");					
						
					}

					if (level > 4) {
						ciSpells.push("Water Walk");
						ciSpells.push("Stinking Cloud");					
					}

					if (level > 6) {
						ciSpells.push("Freedom of Movement");
						ciSpells.push("Locate Creature");						
					}
					if (level > 8) {
						ciSpells.push("Insect Plague");
						ciSpells.push("Scrying");						
					}

				}
				if (x==7) {
					land += "Underdark";
					if (level >2) {
					ciSpells.push("Spider Climb");
					ciSpells.push("Web");					
						
					}
					if (level > 4) {
						ciSpells.push("Gaseous Form");
						ciSpells.push("Stinking Cloud");					
					}
					if (level > 6) {
						ciSpells.push("Greater Invisibility");
						ciSpells.push("Stone Shape");						
					}
					if (level > 8) {
						ciSpells.push("Cloudkill");
						ciSpells.push("Insect Plague");						
					}

				}
					
				classtxt += " (Circle of the Land  &mdash; "+land+")";
				abOutput += ", Druid Circle (" + land + "), Bonus Cantrip, Natural Recovery";
				if (level > 5)
						abOutput += ", Land's Stride";
				if (level > 9)
						abOutput += ", Nature's Ward";

			} else {
				// circle of the moon
				drCircle = 1;
				classtxt += " (Circle of the Moon)";
				abOutput += ", Combat Wild Shape, Circle Forms (CR ";
				tempTxt = "1";
				if (level > 5)
					tempTxt = "2";
				if (level > 8)
					tempTxt = "3";
				tempTxt += " creature";

				if (level < 4) {
					tempTxt += " - No flying or swimming speed)";
				} else if (level > 7) {
					tempTxt += ")";
				} else if (level >3) {
					tempTxt += " - No flying speed)";
				}
				abOutput += tempTxt;
				if (level > 5) {
					abOutput += ", Primal Strike";
				}
				if (level > 9) {
					abOutput += ", Elemental Wild Shape";
				}



			}
		}
		
		break;


	case 5:
	// eldritch knight
		classtxt = "Fighter";
		spellAbility = 3;
		ab1=0;
		ab2=3;
		ab3=1;
		hd=10;
		bg=12;
		st=[0,2];
		fiStyle=Math.floor(Math.random() * 6); 	
		switch (fiStyle) {
			case 0:
				temp = "Archery";
				break;
			case 1:
				temp = "Defense";
				break;
			case 2:
				temp = "Dueling";
				break;
			case 3:
				temp = "Great Weapon Fighting";
				break;
			case 4:
				temp = "Protection";
				break;
			case 5:
				temp = "Two-Weapon Fighting";
				break;
		}

		abOutput += "Fighting Style ("+temp+"), Second Wind";				

		if (level > 1)
			abOutput += ", Action Surge";				

		if (level > 2) {
			abOutput += ", Martial Archetype (Eldritch Knight), Spellcasting, Weapon Bond";				
			classtxt += " (Eldritch Knight)"
			}
		if (level > 4) {
			abOutput += ", Extra Attack";				
		}
		if (level > 7) {
			abOutput += ", War Magic";				
		}
		if (level > 8) {
			abOutput += ", Indomitable (one use)";				
		}
		if (level > 9) {
			abOutput += ", Eldritch Strike";				
		}
		
		break;
	case 6:
		// finesse fighter
		classtxt = "Fighter";
		ab1=1;
		ab2=2;
		ab3=0;
		hd=10;
		bg=12;
		st=[0,2];

		x=Math.floor(Math.random() * 4); 	
		
		fiStyle=Math.floor(Math.random() * 6); 	
		while (fiStyle==3) {
			fiStyle=Math.floor(Math.random() * 6); 	
		}
//
//				temp = "Great Weapon Fighting"; doesn't work well for a finesse fighter

		switch (fiStyle) {
			case 0:
				temp = "Archery";
				break;
			case 1:
				temp = "Defense";
				break;
			case 2:
				temp = "Dueling";
				break;
			case 4:
				temp = "Protection";
				break;
			case 5:
				temp = "Two-Weapon Fighting";
				break;
		}

		abOutput += "Fighting Style ("+temp+"), Second Wind";				

		if (level > 1)
			abOutput += ", Action Surge";				


		if (level > 2) {
			x=Math.random();
			if (forceFigh > -1) {
				x=forceFigh;
			} 

			if (x < 0.5) {
				classtxt += " (Champion)";
				abOutput += ", Martial Archetype (Champion), Improved Critical";				
				if (level > 6) {
					abOutput += ", Remarkable Athlete";									
				}
				if (level > 9) {
					abOutput += ", Additional Fighting Style (";									
					x=fiStyle;
					while ((x==fiStyle) || (x==3)) {
						x=Math.floor(Math.random() * 6); 	
					}

					switch (x) {
						case 0:
							temp = "Archery";
							fiStyle2=0;
							break;
						case 1:
							temp = "Defense";
							fiStyle2=1;
							break;
						case 2:
							temp = "Dueling";
							fiStyle2=2;
							break;
						case 4:
							temp = "Protection";
							fiStyle2=4;
							break;
						case 5:
							temp = "Two-Weapon Fighting";
							fiStyle2=5;
							break;
					}
					abOutput += temp + ")";
				}


			} else {
				classtxt += " (Battle Master)";
				x=8;
				if (level > 9)
					x=10;

				y=4;
				if (level > 6)
					y=5;

				z=3;
				if (level > 6)
					z+=2;
				if (level > 9)
					z+=2;

				abOutput += ", Martial Archetype (Battle Master), "+y+" Superiority Dice (d"+x+"), "+z+" Maneuvers ";
				pickManeuvers(z);

				z = Math.floor(Math.random() * artisans.length);
				while (toOutput.indexOf(artisans[z]) > -1 ) {
					z = Math.floor(Math.random() * artisans.length);					
				}
				toOutput += ", " + artisans[z] +"'s tools";

				
				if (level > 6) {
					abOutput += ", Know Your Enemy";		
				}
				if (level > 9) {
					abOutput += ", Improved Combat Superiority";		
				}

			}
		}			
		if (level > 4) {
			abOutput += ", Extra Attack";				
		}
		if (level > 8) {
			abOutput += ", Indomitable (one use)";				
		}
			
		break;
	case 7:
		// brawn fighter
		classtxt = "Fighter";
		ab1=0;
		ab2=2;
		ab3=1;
		hd=10;
		bg=12;
		st=[0,2];

		//archery unlikely to be style
		if (Math.random() > 0.93) {
			temp = "Archery";
			fiStyle = 0;
		} else {

			fiStyle=Math.floor(Math.random() * 5) +1; 	
			switch (fiStyle) {
				case 0:
					temp = "Archery";
					break;
				case 1:
					temp = "Defense";
					break;
				case 2:
					temp = "Dueling";
					break;
				case 3:
					temp = "Great Weapon Fighting";
					break;
				case 4:
					temp = "Protection";
					break;
				case 5:
					temp = "Two-Weapon Fighting";
					break;
			}
		}


		abOutput += "Fighting Style ("+temp+"), Second Wind";				

		if (level > 1)
			abOutput += ", Action Surge";				


		if (level > 2) {
			temp="";
			x=Math.random();
			if (forceFigh > -1) {
				x=forceFigh;
			} 
			
			if (x < 0.5) {

				classtxt += " (Champion)";
				abOutput += ", Martial Archetype (Champion), Improved Critical";				
				if (level > 6) {
					abOutput += ", Remarkable Athlete";									
				}


				if (level > 9) {
					abOutput += ", Additional Fighting Style (";									

					fiStyle2=fiStyle;
					while (fiStyle2==fiStyle) {
						fiStyle2=Math.floor(Math.random() * 5)+1; 	
					}
					
					switch (fiStyle2) {
						case 0:
							temp = "Archery";
							break;
						case 1:
							temp = "Defense";
							break;
						case 2:
							temp = "Dueling";
							break;
						case 3:
							temp = "Great Weapon Fighting";
							break;
						case 4:
							temp = "Protection";
							break;
						case 5:
							temp = "Two-Weapon Fighting";
							break;
					}
					abOutput += temp + ")";
				}
			} else {


				classtxt += " (Battle Master)";
				x=8;
				if (level > 9)
					x=10;

				y=4;
				if (level > 6)
					y=5;

				z=3;
				if (level > 6)
					z+=2;
				if (level > 9)
					z+=2;

				abOutput += ", Martial Archetype (Battle Master), "+y+" Superiority Dice (d"+x+"), "+z+" Maneuvers ";
				pickManeuvers(z);

				z = Math.floor(Math.random() * artisans.length);
				while (toOutput.indexOf(artisans[z]) > -1 ) {
					z = Math.floor(Math.random() * artisans.length);					
				}
				toOutput += ", " + artisans[z] +"'s tools";

				
				if (level > 6) {
					abOutput += ", Know Your Enemy";		
				}
				if (level > 9) {
					abOutput += ", Improved Combat Superiority";		
				}


			}
		}			

		if (level > 4) {
			abOutput += ", Extra Attack";				
		}
		if (level > 8) {
			abOutput += ", Indomitable (one use)";				
		}
		
		break;

	case 8:
		classtxt = "Monk";
		spellAbility = 4;
		ab1=1;
		ab2=4;
		bg=6;
		st=[1,0];

		// artisans tools or music
		if (Math.random() > 0.5) {

			temp = music[Math.floor(Math.random() * music.length)];
			while (myMusic.indexOf(temp) > -1) 
				temp = music[Math.floor(Math.random() * music.length)];
			myMusic.push(temp);
			
			toOutput += ", " + myMusic[0];
		} else {

			z = Math.floor(Math.random() * artisans.length);
			while (toOutput.indexOf(artisans[z]) > -1 ) {
				z = Math.floor(Math.random() * artisans.length);					
			}
			toOutput += ", " + artisans[z] +"'s tools";

		}

		abOutput += "Unarmored Defense, Martial Arts";				
		if (level > 1) {
			ki=level;
			abOutput += ", Ki (" + ki + " points), Unarmored Movement (+";				
			x=10;

			if (level >5)
				x += 5;
			if (level >9)
				x += 5;
			abOutput += x +" speed)"
			speed += x;
			}
		if (level > 2) {
			abOutput += ", Deflect Missiles, Monastic Tradition (";				
			x=Math.floor(Math.random() * 3); 	

			if (forceMonk > -1) {
				x=forceMonk;
			} 
			
			switch (x) {
				case 0:
					abOutput += "Way of the Open Hand), Open Hand Technique";
					classtxt += " (Way of the Open Hand)";

					break;
				case 1:
					abOutput += "Way of Shadow), Shadow Arts";
					myCantrips.unshift("Minor Illusion");						
			
					classtxt += " (Way of Shadow)";
					break;
				case 2:
					abOutput += "Way of the Four Elements), Disciple of the Elements (Elemental Attunement";
					classtxt += " (Way of the Four Elements)";
					i=1;
					if (level >5)
						i++;
					while (i > 0) {
						tempTxt="";
						y=Math.floor(Math.random() * 7); 	
						if (level > 5)
							y=Math.floor(Math.random() * 9); 	

						
						if (y==0)
							tempTxt += ", Fangs of the Fire Snake";
						if (y==1)
							tempTxt += ", Fist of Four Thunders";
						if (y==2)
							tempTxt += ", Fist of Unbroken Air";
						if (y==3)
							tempTxt += ", Rush of the Gale Spirits";
						if (y==4)
							tempTxt += ", Shape of the Flowing River";
						if (y==5)
							tempTxt += ", Sweeping Cinder Strike";
						if (y==6)
							tempTxt += ", Water Whip";
						if (y==7)
							tempTxt += ", Clench of the North Wind";
						if (y==8)
							tempTxt += ", Gong of Summit";


						if (abOutput.indexOf(tempTxt) == -1) {
							abOutput += tempTxt;
							i--;
						}

					}
					abOutput += ")";

					break;

			}
		}
		if (level > 3)
			abOutput += ", Slow Fall";				
		if (level > 4)
			abOutput += ", Extra Attack, Stunning Strike";				
		if (level > 5)
			abOutput += ", Ki-empowered Strikes";				
		if ((level >5) && (x==0)) {
			abOutput += ", Wholeness of Body (" + (level*3) + " hit points)";				
		}
		if ((level >5) && (x==1)) {
			abOutput += ", Shadow Step";							
		}
		if (level > 6)
			abOutput += ", Evasion";				
		if (level > 6)
			abOutput += ", Stillness of Mind";				
		if (level > 8)
			abOutput += ", Unarmored Movement Improvement";				
		if (level > 9)
			abOutput += ", Purity of Body";				


 		break;
	case 9:
		classtxt = "Paladin";
		spellAbility = 5;
		ab1=0;
		ab2=5;
		bg=8;
		hd=10;
		st=[4,5];
		abOutput += "Divine Sense, Lay on Hands ("  + (level * 5) + " hp)";
		if (level > 1){
			
			x=Math.floor(Math.random() * 4); 	


			switch (x) {
				case 0:
					temp = "Protection";
					fiStyle=4;
					break;
				case 1:
					temp = "Defense";
					fiStyle=1;
					break;
				case 2:
					temp = "Dueling";
					fiStyle=2;
					break;
				case 3:
					temp = "Great Weapon Fighting";
					fiStyle=3;
					break;
			}

			abOutput += ", Fighting Style (" + temp + "),  Spellcasting, Divine Smite";
		}
		if (level > 2) {
			abOutput += ", Divine Health, Sacred Oath (Oath of ";
			x=Math.floor(Math.random() * 3); 	


			if (forcePala > -1) {
				x=forcePala;
			} 
			


			switch (x) {
				case 0:
					abOutput +=  "Devotion), Sacred Weapon, Turn the Unholy";
					oaSpells.push("Protection from Evil and Good");
					oaSpells.push("Sanctuary");
					if (level >4) {
						oaSpells.push("Lesser Restoration");
						oaSpells.push("Zone of Truth");
					}
					if (level > 6) {
						abOutput +=  ", Aura of Devotion";						
					}
					if (level >8) {
						oaSpells.push("Beacon of Hope");
						oaSpells.push("Dispel Magic");
					}


					classtxt += " (Oath of Devotion)";
					break;
				case 1:
					abOutput +=  "the Ancients), Nature's Wrath, Turn the Faithless";
					oaSpells.push("Ensnaring Strike");
					oaSpells.push("Speak with Animals");
					if (level >4) {
						oaSpells.push("Moonbeam");
						oaSpells.push("Misty Step");
					}
					if (level > 6) {
						abOutput +=  ", Aura of Warding";						
					}

					if (level >8) {
						oaSpells.push("Plant Growth");
						oaSpells.push("Protection from Energy");
					}
					classtxt += " (Oath of the Ancients)";					
					break;
				case 2:
					abOutput +=  "Vengeance), Abjure Enemy, Vow of Enmity";
					oaSpells.push("Bane");
					oaSpells.push("Hunter's Mark");
					if (level >4) {
						oaSpells.push("Hold Person");
						oaSpells.push("Misty Step");
					}
					if (level > 6) {
						abOutput +=  ", Relentless Avenger";						
					}
					if (level >8) {
						oaSpells.push("Haste");
						oaSpells.push("Protection from Energy");
					}
					classtxt += " (Oath of Vengeance)";
					break;
			}
		}
		if (level > 4) {
			abOutput +=  ", Extra Attack";
		}
		if (level > 5) {
			abOutput +=  ", Aura of Protection";
		}

		if (level > 9) {
			abOutput +=  ", Aura of Courage";
		}

		break;
	case 10:
		classtxt = "Ranger";
		spellAbility = 4;
		ab1=1;
		ab2=4;
		bg=9;
		hd=10;
		st=[1,0];
		i=1;
		if (level >5)
			i=2;
		while (i>0) {
			//66% chance to add 2 humanoid races
			if (Math.random() > 0.33) {
				//pick humanoids
				x=Math.floor(Math.random() * humanoids.length); 	
				while (favored.indexOf(humanoids[x]) > -1)
					x=Math.floor(Math.random() * humanoids.length); 	

				favored += humanoids[x] +", ";
				y=Math.floor(Math.random() * humanoids.length); 	
				while (favored.indexOf(humanoids[y]) > -1) {
					y=Math.floor(Math.random() * humanoids.length); 	
				}

				favored += humanoids[y];
				if (i==2) 
					favored += ", ";

				//add languages
				if (languageOutput.indexOf(humLangs[x]) == -1) {
					languageOutput += ", " + humLangs[x];
					}
				else if (languageOutput.indexOf(humLangs[y]) == -1) {
					languageOutput += ", " + humLangs[y];
					}
				
				i--;

			} else {
				x=Math.floor(Math.random() * enemies.length); 	
				while (favored.indexOf(enemies[x]) > -1) {
					x=Math.floor(Math.random() * enemies.length); 	
				}
				favored += enemies[x]; 	
				if (favored.length > 0) {
					if (languageOutput.indexOf(enLangs[x]) == -1) {
						languageOutput += ", " + enLangs[x];
					}
				}
				if (i==2) 
					favored += ", "
				i--;
			}
		}


		i=1;
		if (level >5) {
			i=2;
		}
		if (level >9) {
			i=3;
		}
		while (i>0) {
			x=Math.floor(Math.random() * 8); 	
			if (x==0) {
				tempTxt = "Arctic";
				}
			if (x==1) {
				tempTxt = "Coast";
				}
			if (x==2) {
				tempTxt = "Desert";
				}
			if (x==3) {
				tempTxt = "Forest";
				}
			if (x==4) {
				tempTxt = "Grassland";
				}
			if (x==5) {
				tempTxt = "Mountain";
				}
			if (x==6) {
				tempTxt = "Swamp";
				}
			if (x==7) {
				tempTxt = "Underdark";
				}

			if (land.indexOf(tempTxt) == -1) {

				land += tempTxt;
				
				i--;
				if (i > 0) 
					land += ", ";

			}
		}

		abOutput += "Favored Enemy ("+ favored +"), Natural Explorer (" + land + ")";				
		if (level > 1) {
			x=Math.floor(Math.random() * 4); 	
			switch (x) {
				case 0:
					temp = "Archery";
					fiStyle=0;
					break;
				case 1:
					temp = "Defense";
					fiStyle=1;
					break;
				case 2:
					temp = "Dueling";
					fiStyle=2;
					break;
				case 3:
					temp = "Two-weapon Fighting";
					fiStyle=5;
					break;
			}
			abOutput += ", Fighting Style (" + temp + "), Spellcasting";				
		}
		if (level  > 2) {
			x=Math.random();
			if (forceRang > -1) {
				x=forceRang;
			} 
			
			if (x < 0.5) {
				classtxt += " (Hunter)";
				temp="Hunter),  ";
				x=Math.floor(Math.random() * 3); 	

				if (x==0) {
					temp += "Colossus Slayer";
					}
				if (x==1) {
					temp += "Giant Killer";
					}
				if (x==2) {
					temp += "Horde Breaker";
					}

				if (level > 6) {
					x=Math.floor(Math.random() * 3); 	

					if (x==0) {
						temp += ", Escape the Hoard";
						}
					if (x==1) {
						temp += ", Multiattack Defense";
						}
					if (x==2) {
						temp += ", Steel Will";
						}
				}



			} else {
				classtxt += " (Beast Master)";
				companion = Math.floor(Math.random() * companions.length);
				companion = companion * 1;
				temp="Beast Master)";
				if (level > 6) {
					temp+=", Exceptional Training";
				}
			}
			abOutput += ", Ranger Archetype (" + temp+ ", Primeval Awareness";				
		}	
		if (level > 4) {
			abOutput +=  ", Extra Attack";
		}

		if (level > 7) {
			abOutput +=  ", Land's Stride";
		}

		if (level > 9) {
			abOutput +=  ", Hide in Plain Sight";
		}




		break;
	case 11:
		classtxt = "Rogue";
		ab1=1;
		st=[1,3];
		// does the rogue rely on charisma or int?
		if ( Math.random() > 0.5 ) { 
			ab2=5;
			
			}
		else {
			ab2=3;
			ab3=5;
		}
		x = Math.random();
		if (x < 0.33) 
			bg=2;
		else if (x < 0.66)
			bg=3;
		else
			bg=13;

		if (Math.random() < 0.5) {
			var burglar = true;
		} 
		x=1;
		if (level >2) 
			x=2;
		if (level > 4)
			x=3;
		if (level > 6)
			x=4;
		if (level > 8)
			x=5;


		abOutput += "Expertise, Sneak Attack ("+ x + "d6), Thieves' Cant";				
		languageOutput += ", Thieves' Cant";
		if (level > 1) {
			abOutput += ", Cunning Action";				
		}
		if (level > 2) {
			x=Math.floor(Math.random() * 2); 	
			x=Math.random();
			if (forceRogu > -1) {
				x=forceRogu;
			} 
			
			if (x==0) {
				temp += "Thief), Fast Hands, Second-Story Work";
				classtxt += " (Thief)";
				if (level > 8) 
					temp += ", Supreme Sneak";
				}
			if (x==1) {
				temp += "Assassin), Assassinate";
				toOutput += ", Disguise kit, Poisoner's kit";
				classtxt += " (Assassin)";

				if (level > 8) 
					temp += ", Infiltration Expertise";

				}

			abOutput += ", Roguish Archetype (" + temp;				
		}
		if (level >4)
			abOutput += ", Uncanny Dodge";				
		if (level >5)
			abOutput += ", Expertise";				
		if (level >6)
			abOutput += ", Evasion";				
		break;
	case 12: 
		classtxt = "Rogue";
		spellAbility = 3;
		ab1=1;
		ab2=3;
		bg=2;
		st=[1,3];
		if (Math.random() < 0.5) {
			var burglar = true;
		} 

		x=1;
		if (level >2) 
			x=2;
		if (level > 4)
			x=3;
		if (level > 6)
			x=4;
		if (level > 8)
			x=5;


		abOutput += "Expertise, Sneak Attack ("+ x + "d6), Thieves' Cant";				
		languageOutput += ", Thieves' Cant";


		if (level > 1) {
			abOutput += ", Cunning Action";				
		}
		if (level > 2) {
			classtxt += " (Arcane Trickster)";
			abOutput += ", Roguish Archetype (Arcane Trickster), Spellcasting";				
			if (level >8) 
				abOutput += ", Magical Ambush"
		}
		if (level >4)
			abOutput += ", Uncanny Dodge";				
		if (level >5)
			abOutput += ", Expertise";				
		if (level >6)
			abOutput += ", Evasion";				
		
		break;
	case 13:
		classtxt = "Sorcerer (";
		ab1=5;
		spellAbility = 5;
		ab2=2;
		bg=6;
		hd=6;
		st=[5,2];
		abOutput += "Spellcasting";
		soOrigin=Math.floor(Math.random() * 2);

		if (forceSorc > -1) {
			soOrigin=forceSorc;
		} 
		
		switch (soOrigin) {
			case 0:
				classtxt += "Draconic Bloodline)";
				// don't erase our ancestry if we already determined it
				if (racetxt != "Dragonborn") {
					tempAr = dragon();
					dragType = tempAr[0];
					elemType = tempAr[1];
					abOutput += ", Draconic Ancestry (" + dragType + ", " + elemType + " damage)";
				}
				abOutput += ", Draconic Resilience";
				languageOutput += ", Draconic";
				if (level > 5) {
					abOutput += ", Elemental Affinity";
				}
				break;
			case 1:
				classtxt += "Wild Magic)";
				abOutput += ", Wild Magic Surge, Tides of Chaos";				
				if (level > 5) {
					abOutput += ", Bend Luck";
				}
				break;
		}
		if (level >1)
			abOutput += ", Font of Magic";
		if (level >2) {
			abOutput += ", Metamagic ";
			pickMeta();
			}
		if (level >1)
			abOutput += ", " + level + " sorcery points";				
		break;
	case 14:
		classtxt = "Warlock (";
		ab1=5;
		spellAbility = 5;
		if (Math.random() < 0.5)
			ab3=1;
		else
			ab3=0;
		ab2=2;
		bg=2;
		st=[4,5];

		abOutput += "Otherworldly Patron (";

		waPatron=Math.floor(Math.random() * 3);
		
		if (forceWarl > -1) {
			waPatron=forceWarl;
		} 
			
		switch (waPatron) {
			case 0:
				classtxt += "Archfey";
				patronSpells1.push("Faerie Fire");
				patronSpells1.push("Sleep");
				patronSpells2.push("Calm Emotions");
				patronSpells2.push("Phantasmal Force");
				patronSpells3.push("Blink");
				patronSpells3.push("Plant Growth");
				patronSpells4.push("Dominate Beast");
				patronSpells4.push("Greater Invisibility");
				patronSpells5.push("Dominate Person");
				patronSpells5.push("Seeming");

				patronSpells1.push("Faerie Fire");
				patronSpells1.push("Sleep");
				patronSpells2.push("Calm Emotions");
				patronSpells2.push("Phantasmal Force");
				patronSpells3.push("Blink");
				patronSpells3.push("Plant Growth");
				patronSpells4.push("Dominate Beast");
				patronSpells4.push("Greater Invisibility");
				patronSpells5.push("Dominate Person");
				patronSpells5.push("Seeming");

				abOutput += "Archfey), Fey Presence";
				if (level > 5) {
					abOutput += ", Misty Escape";
				}
				if (level > 9) {
					abOutput += ", Beguiling Defenses";
				}

				break;
			case 1:
				classtxt += "Fiend";
				patronSpells1.push("Burning Hands");
				patronSpells1.push("Command");
				patronSpells2.push("Blindness/Deafness");
				patronSpells2.push("Scorching Ray");
				patronSpells3.push("Fireball");
				patronSpells3.push("Stinking Cloud");
				patronSpells4.push("Fire Shield");
				patronSpells4.push("Wall of Fire");
				patronSpells5.push("Flame Strike");
				patronSpells5.push("Hallow");

				patronSpells1.push("Burning Hands");
				patronSpells1.push("Command");
				patronSpells2.push("Blindness/Deafness");
				patronSpells2.push("Scorching Ray");
				patronSpells3.push("Fireball");
				patronSpells3.push("Stinking Cloud");
				patronSpells4.push("Fire Shield");
				patronSpells4.push("Wall of Fire");
				patronSpells5.push("Flame Strike");
				patronSpells5.push("Hallow");


				abOutput += "Fiend), Dark One's Blessing";				
				if (level > 5) {
					abOutput += ", Dark One's Own Luck";
				}
				if (level > 9) {
					abOutput += ", Fiendish Resilience";
				}


				break;


			case 2:
				classtxt += "Great Old One";
				patronSpells1.push("Dissonant Whispers");
				patronSpells1.push("Tasha's Hideous Laughter");
				patronSpells2.push("Detect Thoughts");
				patronSpells2.push("Phantasmal Force");
				patronSpells3.push("Clairvoyance");
				patronSpells3.push("Sending");
				patronSpells4.push("Dominate Beast");
				patronSpells4.push("Evard's Black Tentacles");
				patronSpells5.push("Dominate Person");
				patronSpells5.push("Telekinesis");

				patronSpells1.push("Dissonant Whispers");
				patronSpells1.push("Tasha's Hideous Laughter");
				patronSpells2.push("Detect Thoughts");
				patronSpells2.push("Phantasmal Force");
				patronSpells3.push("Clairvoyance");
				patronSpells3.push("Sending");
				patronSpells4.push("Dominate Beast");
				patronSpells4.push("Evard's Black Tentacles");
				patronSpells5.push("Dominate Person");
				patronSpells5.push("Telekinesis");


				abOutput += "Great Old One), Awakened Mind";
				if (level > 5) {
					abOutput += ", Entropic Ward";
				}
				if (level > 9) {
					abOutput += ", Thought Shield";
				}
				break;

		}
		classtxt += " Patron";
		abOutput += ", Pact Magic"


		if (level > 2) {
			tempTxt += ", Pact Boon (Pact of the ";				
			x=Math.floor(Math.random() * 3);
			if (forceWarlPact > -1) {
				x=forceWarlPact;
			} 
			
			switch (x) {
				case 0:
					classtxt += ", Chain Pact";
					tempTxt += "Chain)";
					if (waPatron ==0) {
						if (Math.random() < 0.5)
							familiar = "Sprite &mdash; 2 hit points, 15 AC, <i>Heart Sight, Invisibility</i>, Longsword +2 to hit (1 dmg), Shortbow +6 to hit (1 dmg, check if poisoned) Range 40/160";
						else 
							familiar = "Pseudodragon &mdash; 7 hit points, 13 AC, <i>Keen Senses, Magic Resistance, Limited Telepathy</i>, Bite +4 to hit (1d4 +2 dmg), Sting +4 to hit (1d4 +2 dmg, check if poisoned)";
					}
					if (waPatron ==1) {
						if (Math.random() < 0.5)
							familiar = "Quasit &mdash; 7 hit points, 13 AC, <i>Shapechanger, Magic Resistance, Scare, Invisibility,</i> Claws +4 to hit (1d4+3 dmg, check if poisoned)";
						else 
							familiar = "Imp  &mdash; 10 hit points, 13 AC, <i>Shapechanger, Devil's Sight, Magic Resistance, Invisibility</i>, Sting +5 to hit (1d4 +3 dmg, check for 3d6 poison dmg)";
					}
					if (waPatron ==2) {
					y=Math.floor(Math.random() * 4);
					if (y==0)
						familiar = "Imp  &mdash; 10 hit points, 13 AC, <i>Shapechanger, Devil's Sight, Magic Resistance, Invisibility</i>, Sting +5 to hit (1d4 +3 dmg, check for 3d6 poison dmg)";
					if (y==1)
						familiar =  "Pseudodragon &mdash; 7 hit points, 13 AC, <i>Keen Senses, Magic Resistance, Limited Telepathy</i>, Bite +4 to hit (1d4 +2 dmg), Sting +4 to hit (1d4 +2 dmg, check if poisoned)";
					if (y==2)
						familiar = "Quasit &mdash; 7 hit points, 13 AC, <i>Shapechanger, Magic Resistance, Scare, Invisibility,</i> Claws +4 to hit (1d4+3 dmg, check if poisoned)";
					if (y==3)
						familiar =  "Sprite &mdash; 2 hit points, 15 AC, <i>Heart Sight, Invisibility</i>, Longsword +2 to hit (1 dmg), Shortbow +6 to hit (1 dmg, check if poisoned) Range 40/160";
					}
					mySpells.push("Find Familiar");
					break;
				case 1:
					classtxt += ", Blade Pact";
					tempTxt += "Blade)";				
					break;
				case 2:
					classtxt += ", Tome Pact";
					tempTxt += "Tome)";
					tome = true;
					break;
			}
		}
		classtxt += ")";

		if (level > 1) {
			abOutput += ", Eldritch Invocations ";				
			tempAr = pickEldritch();
				if (tempAr.indexOf("Beguiling Influence") > -1) {
					skLearn[4] = true;
					mySkills.push(4);
					mySkills.push(13);
					skLearn[13] = true;
				}	
				if (tempAr.indexOf("Eldritch Sight") > -1) {
					waSpells.push("Detect Magic");
				}	
				if (tempAr.indexOf("Armor of Shadows") > -1) {
					waSpells.push("Mage Armor");
				}	
				if (tempAr.indexOf("Agonizing Blast") > -1) {
					eblast = true;
				}	
				if (tempAr.indexOf("Eldritch Spear") > -1) {
					eblast = true;
				}	
				if (tempAr.indexOf("Repelling Blast") > -1) {
					eblast = true;
				}	
				if (tempAr.indexOf("Beast Speech") > -1) {
					waSpells.push("Speak with Animals");
				}	
				if (tempAr.indexOf("Fiendish Vigor") > -1) {
					waSpells.push("False Life");
				}	
				if (tempAr.indexOf("Many Faces") > -1) {
					waSpells.push("Disguise Self");
				}	
				if (tempAr.indexOf("Misty Visions") > -1) {
					waSpells.push("Silent Image");
				}	
				if (tempAr.indexOf("Whispers of the Grave") > -1) {
					waSpells.push("Speak with Dead");
				}	

				if (tempAr.indexOf("Otherworldly Leap") > -1) {
					waSpells.push("Jump");
				}
				if (tempAr.indexOf("Ascendant Step") > -1) {
					waSpells.push("Levitate (on self)");
				}	

				if (tempAr.indexOf("Thief of Five Fates") > -1) {
					waSpells.push("Bane (once per long rest)");
				}	
				if (tempAr.indexOf("Mire the Mind") > -1) {
					waSpells.push("Slow (once per long rest)");
				}	
				if (tempAr.indexOf("Ill Omen") > -1) {
					waSpells.push("Bestow Curse (once per long rest)");
				}	
				if (tempAr.indexOf("Bewitching Whispers") > -1) {
					waSpells.push("Compulsion (once per long rest)");
				}	
				if (tempAr.indexOf("Dreadful Word") > -1) {
					waSpells.push("Confusion (once per long rest, uses a spell slot)");
				}	
				if (tempAr.indexOf("Minions of Chaos") > -1) {
					waSpells.push("Conjure Elemental (once per long rest, uses a spell slot)");
				}	
					
				if (tempAr.indexOf("Sculptor of Flesh") > -1) {
					waSpells.push("Polymorph (once per long rest, uses a spell slot)");
				}	

			abOutput += tempTxt;
			}

		break;
	case 15:
		classtxt = "Wizard";
		spellAbility = 3;
		ab1=3;
		ab2=1;
		hd=6;
		bg=10;
		st=[3,4];
		abOutput += "Spellcasting, Arcane Recovery";

		if (level > 1) {
			var schools = ["Abjuration","Conjuration","Divination","Enchantment","Evocation","Illusion","Necromancy","Transmutation"]
			var wiSchool = Math.floor((Math.random() * schools.length));

			//alert(document.getElementById("selClass").value +"/"+forceSchool )
			if ((forceSchool > -1) && (document.getElementById("selClass").value == 15)) {

				wiSchool = forceSchool;
			}



			classtxt += " (" + schools[wiSchool] + " school)";
			abOutput += ", Arcane Tradition (" + schools[wiSchool] +" school)"
			switch(wiSchool) {
				case 0:
					abOutput += ", Abjuration Savant, Arcane Ward";
					if (level >5) {
						abOutput += ", Projected Ward";
					}
					if (level >9) {
						abOutput += ", Improved Abjuration";
					}
					break;
				case 1:
					abOutput += ", Conjuration Savant, Minor Conjuration";
					if (level >5) {
						abOutput += ", Benign Transposition";
					}
					if (level >9) {
						abOutput += ", Focused Conjuration";
					}
					break;
				case 2:
					abOutput += ", Divination Savant, Portent";
					if (level >5) {
						abOutput += ", Expert Divination";
					}
					if (level >9) {
						abOutput += ", The Third Eye";
					}
					break;
				case 3:
					abOutput += ", Enchantment Savant, Hypnotic Gaze";
					if (level >5) {
						abOutput += ", Instinctive Charm";
					}
					if (level >9) {
						abOutput += ", Split Enchantment";
					}
					break;
				case 4:
					abOutput += ", Evocation Savant, Sculpt Spells";
					if (level >5) {
						abOutput += ", Potent Cantrip";
					}
					if (level >9) {
						abOutput += ", Empowered Evocation";
					}
					break;
				case 5:
					abOutput += ", Illusion Savant, Improved Minor Illusion";
					mySpells.unshift("Minor Illusion");						
					if (level >5) {
						abOutput += ", Malleable Illusions";
					}
					if (level >9) {
						abOutput += ", Illusory Self";
					}
					break;
				case 6:
					abOutput += ", Necromancy Savant, Grim Harvest";
					if (level >5) {
						abOutput += ", Undead Thralls";
					}
					if (level >9) {
						abOutput += ", Inured to Undeath";
					}
					break;
				case 7:
					abOutput += ", Transmutation Savant, Minor Alchemy";
					if (level >5) {
						abOutput += ", Transmuter's Stone";
					}
					if (level >9) {
						abOutput += ", Shapechanger";
					}
					break;
				}
			}
			
		break;
		
}



//assign abilities
if (document.getElementById("genMethod").value != "3") {
	abil[ab1] += abilRaw.shift();
	abil[ab2] += abilRaw.shift();
	// if char has a 3rd preference for high ability
	if (ab3 > -1)  
		abil[ab3] += abilRaw.shift();
	// give good score to CON
	if (abil[2] < 3)
		abil[2] += abilRaw.shift();
	// randomly assign the rest of the numbers
	while (abilRaw.length > 0) {
		x = Math.floor((Math.random() * 6)); 
		// if a number isn't assigned already then assign one!
		if (abil[x] < 3) {
			abil[x] += abilRaw.shift();
			}
	}

}


console.log("1st level abilities before any increases:");
for (i=0;i<6;i++)
	console.log(abilNames[i] + ": " + abil[i]);

//console.log(abilIncrease);
i=0;
// +2 ability points for level 4
if (level > 3) {
	abOutput += ", Ability Score Improvement (4th";
	console.log("4th level ability bonus +2");
	x=2;
	
	if ((cl==5) || (cl==6) || (cl==7)) {
		if (level > 7) {
			abOutput +=", 6th and 8th levels";
		} else if (level > 5) {
			abOutput +=" and 6th levels";
		} else {
			abOutput +=" level";			
		}
	} else if ((cl==11) || (cl==12)) {
		if (level >9) {
			abOutput +=", 8th and 10th levels";
		} else if (level >7) {
			abOutput +=" and 8th levels";			
		} else {
			abOutput +=" level";
		}
	} else {
		if (level >7) {
			abOutput +=" and 8th levels";			
		}
		else {
			abOutput +=" level";	
		}
	}

	if ((level > 5) && ((cl==5) || (cl==6) || (cl==7))) {
		x=x+2;
	}
	if (level > 7) {
		x=x+2;
	}
	if ((level > 9) && ((cl==11) || (cl==12))) {
		x=x+2;
	}
	

	abOutput +=" ";
	while (x > 0) {
		i++;
		if (i>500) {
			alert("500 tries adding  ability bonus");
		}

		xx=0;
		if ((abil[ab1] %2) ==1) {
			xx=1;
		} else if ((abil[ab2] %2) ==1) {
			xx=2;
		} else if ((abil[2] %2) ==1) {
			xx=3;
		} else if (Math.random() > 0.6) {
			//% chance of improving lowest odd # score under 10
			xx=5;
		} else if ((abil[ab3] %2) ==1) {
			xx=6;
		} else if (abil[ab1] < 20) {
			xx=1;
		} else if (abil[ab2] < 20) {
			xx=2;
		} else {
			xx=4;
		}

		if (xx==1) {
			//alert("before increase:  " + x + " " +abil[ab1]);
			abil[ab1] = abil[ab1] + 1;
			x--;	
			console.log("primary class abil, " + abilNames[ab1] + " +1 point");
			//alert("primary class abil, " + abilNames[ab1] + " +1 point");
			abilIncrease[ab1] = abilIncrease[ab1] + 1;
			//alert("after increase:  " + x + " " + abil[ab1]);
		} else if (xx==2) {
			abil[ab2] = abil[ab2] +1;
			x--;	
			console.log("secondary class abil, " + abilNames[ab2] + "+1 point");
			//alert("secondary class abil, " + abilNames[ab2] + "+1 point");
			abilIncrease[ab2] = abilIncrease[ab2] + 1;
		} else if (xx==3) {
			abil[2] = abil[2] +1;	
			x--;
			console.log("constitution, " + abilNames[2] + "+1 point");
			//alert("secondary class abil, " + abilNames[ab2] + "+1 point");
			abilIncrease[2] = abilIncrease[2] + 1;
		} else if (xx==4) {
			y=20;
			for (z=0;z<6;z++) {
				if (abil[z] < y)
					y=abil[z];
			}
			
			console.log("lowest score = " + y);
			bool=false;
			z=0;
			while (bool == false) {
				//if it's the lowest score improve it
				if (abil[z] == y) {
					abil[z] = abil[z] + 1;
					console.log(abilNames[z] + " +1 point");
					abilIncrease[z]++;
					bool=true;
					x--;
				}
				z++;
			}

		} else if (xx==5) {
			y=10;
			for (z=0;z<6;z++) {
				if ((abil[z] < y) && (((abil[z]) % 2) ==1)) {
					y=abil[z];
					yy=z;
				}			
			}
			console.log("lowest odd # score = " + y);
			if (y < 10) {
				abil[yy] = abil[yy] + 1;
				console.log(abilNames[yy] + " +1 point");
				abilIncrease[yy]++;
				x--;
			}


		} else if (xx==6) {
			abil[ab3] = abil[ab3] + 1;
			x--;	
			console.log("third class abil because it was odd, " + abilNames[ab3] + " +1 point");
			abilIncrease[ab3] = abilIncrease[ab3] + 1;
		}

	}


	bool=false;
	for (x=0;x<6;x++) {
		if (abilIncrease[x] > 0) {
			if (bool==true) {
				abOutput += ", ";
			}
			abOutput += showPlus( abilIncrease[x] ) + " " + abilNames[x];
			bool=true;
		}

	}
	abOutput += ")"
}
console.log(abilIncrease);



//abil = [20,20,8,11,7,20];
// +2 ability points for half elves
if (racetxt == "Half-Elf") {
	console.log("Half elf ability bonus +2");

	i=0;
	x=2;
	
	while (x > 0) {
		i++;
		if (i>500)
			alert("500 tries adding half elf ability bonus");

		if ((abil[ab1] < 20) && (ab1 != 5) && (firstIncrease != ab1)) {
			abil[ab1] = abil[ab1]+1;
			x--;	
//			alert("main class ability, " + abilNames[ab1] + " +1 point");
			console.log("main class ability, " + abilNames[ab1] + " +1 point");
			abilIncrease[ab1]++;
			firstIncrease = ab1;
		} else if ((abil[ab2] < 20) && (ab2 != 5) && (firstIncrease != ab2)) {
			abil[ab2] = abil[ab2] +1;
			x--;	
//			alert("secondary class ability, " + abilNames[ab2] + " +1 point");
			console.log("secondary class ability, " + abilNames[ab2] + " +1 point");
			abilIncrease[ab2]++;
			firstIncrease = ab2;
		} else {
//			alert("helping lowest ability");

			y=20;
			for (z=0;z<6;z++) {
				if (abil[z] < y)
					y=abil[z];
			}
			
			console.log("lowest score = " + y);
			bool=false;
			z=0;
			while (bool == false) {
				//if it's the lowest score improve it
				if (abil[z] == y) {
					abil[z] = abil[z] + 1;
					console.log(abilNames[z] + " +1 point");
					abilIncrease[z]++;
					bool=true;
					x--;
				}
				z++;
			}


		}
	}
	console.log("half elf increases:  "+abilIncrease);
}



// calculate modifiers
for (x=0;x<6;x++) {
	mod[x] = modNum(abil[x]);

}







/*
for (x=0;x<6;x++)
	mod[x] = modNum(abil[x]);
*/


output += "<span style=\"font-size:large; font-weight: bold;\">" + name +  " &mdash; Level " + level + " " + racetxt + " " + classtxt + "</span><br>";

// 1st level hps
hp=hd+mod[2];
console.log("1st level hp:  " + hp);
// above 1st level hps
if (level > 1) {
	var hpgain = 0;
	switch (hd) {
		case 6:
			hpgain=4;
			break;
		case 10:
			hpgain=6;
			break;
		case 12:
			hpgain=7;
			break;
		default:
			hpgain=5;
			break;
		}
	hp += (level - 1) * hpgain;

	// con bonus
	hp += (level - 1) * mod[2];
}
console.log("levels & con bonus:  " + hp);



// hill dwarvs +1 hp per level
if (racetxt.indexOf("Hill Dwarf") > -1) {
	hp += level;
}
	

// draconic sorcerers +1 hp per level
if ((cl==13) && (soOrigin==0))
	hp += level;

console.log("grand total hp:  " + hp);



//alert("before background!");



//background!!
x = Math.floor(Math.random() * 10); 
// 40% chance of not taking the suggested bg
if (x < 4) {
bg = Math.floor((Math.random() * 13) +1); 
}
if (forceBg > 0)
	bg=forceBg;
var personality=Math.floor((Math.random() * 8) +1);
var ideal=Math.floor((Math.random() * 6) +1);
var bond=Math.floor((Math.random() * 6) +1);
var flaw=Math.floor((Math.random() * 6) +1);
var bgText="";
bgOutput += "<b style=\"font-size: large;\">Background: ";

switch (bg) {
			
	case(1):
		skLearn[6] = true;
		skLearn[14] = true;
		mySkills.push(6);
		mySkills.push(14);
		moreLang += 2;
		bgOutput += "Acolyte";
		myLifestyle = 3;
		bgOutput += "</b>"
		if (eqOutput.indexOf("Holy symbol") == -1) 
			eqOutput += ", Holy symbol";

		eqOutput += ", Prayer book, Common clothes";
		abOutput += "";
		gold += 15;

		bgText += "<br><span class=\"bg\">Personality:</span> ";


		i=0;
		x=personality;
		while (i < 2) {
		

			if (personality==1)
				bgText += "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example. ";
			if (personality==2)
				bgText += "I can find common ground between the fiercest enemies, empathizing with them and always working towards peace. ";
			if (personality==3)
				bgText += "I see omens in every event and action. The gods try to speak to us, we just need to listen. ";
			if (personality==4)
				bgText += "Nothing can shake my optimistic attitude. ";
			if (personality==5)
				bgText += "I quote (or misquote) sacred texts and proverbs in almost every situation. ";

			if (personality==6)
				bgText += "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods. ";
			if (personality==7)
				bgText += "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me. ";
			if (personality==8)
				bgText += "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world. ";
		

			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
			i++;
			if (i==1) 
				bgText += "<br>";
		}
		
		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)<br>";
		if (ideal==2)
			bgText += "Charity. I always try to help those in need, no matter what the personal cost. (Good)<br>";
		if (ideal==3)
			bgText += "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)<br>";
		if (ideal==4)
			bgText += "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)<br>";
		if (ideal==5)
			bgText += "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)<br>";
		if (ideal==6)
			bgText += "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)<br>";
		
		
		bgText += "<span class=\"bg\">Bond:</span>  ";
		if (bond==1)
			bgText += "I would die to recover an ancient relic of my faith that was lost long ago.<br>";
		if (bond==2)
			bgText += "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.<br>";
		if (bond==3)
			bgText += "I owe my life to the priest who took me in when my parents died.<br>";
		if (bond==4)
			bgText += "Everything I do is for the common people.<br>";
		if (bond==5)
			bgText += "I will do anything to protect the temple where I served.<br>";
		if (bond==6)
			bgText += "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.<br>";
		

		bgText += "<span class=\"bg\">Flaw:</span>  ";
		if (flaw==1)
			bgText += "I judge others harshly, and myself even more severely.";
		if (flaw==2)
			bgText += "I put too much trust in those who wield power within my temple’s hierarchy.";
		if (flaw==3)
			bgText += "My piety sometimes leads me to blindly trust those that profess faith in my god.";
		if (flaw==4)
			bgText += "I am inflexible in my thinking.";
		if (flaw==5)
			bgText += "I am suspicious of strangers and expect the worst of them.";
		if (flaw==6)
			bgText += "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.";

		break;
	case(2):
		skLearn[15] = true;
		skLearn[4] = true;
		mySkills.push(15);
		mySkills.push(4);
		myLifestyle = 4;
		bgOutput += "Charlatan ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 6);
		if (x==0)
			bgOutput += "(I cheat at games of chance.)";
		if (x==1)
			bgOutput += "(I shave coins or forge documents.)";
		if (x==2)
			bgOutput += "(I insinuate myself into people’s lives to prey on their weakness and secure their fortunes.)";
		if (x==3)
			bgOutput += "(I put on new identities like clothes.)";
		if (x==4)
			bgOutput += "(I run sleight-of-hand cons on street corners.)";
		if (x==5)
			bgOutput += "(I convince people that worthless junk is worth their hard-earned money.)";

		eqOutput += ", Fine clothes, Disguise kit, Weighted dice";
		toOutput += ", Disguise kit, Forgery kit";
		gold += 15;
		bgText += "<br><span class=\"bg\">Personality:</span> ";
	
		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I fall in and out of love easily, and am always pursuing someone. ";
			if (personality==2)
				bgText += "I have a joke for every occasion, especially occasions where humor is inappropriate. ";
			if (personality==3)
				bgText += "Flattery is my preferred trick for getting what I want. ";
			if (personality==4)
				bgText += "I’m a born gambler who can't resist taking a risk for a potential payoff. ";
			if (personality==5)
				bgText += "I lie about almost everything, even when there’s no good reason to. ";
			if (personality==6)
				bgText += "Sarcasm and insults are my weapons of choice. ";
			if (personality==7)
				bgText += "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment. ";
			if (personality==8)
				bgText += "I pocket anything I see that might have some value. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
			

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Independence. I am a free spirit— no one tells me what to do. (Chaotic)";
		if (ideal==2)
			bgText += "Fairness. I never target people who can’t afford to lose a few coins. (Lawful)";
		if (ideal==3)
			bgText += "Charity. I distribute the money I acquire to the people who really need it. (Good)";
		if (ideal==4)
			bgText += "Creativity. I never run the same con twice. (Chaotic)";
		if (ideal==5)
			bgText += "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)";
		if (ideal==6)
			bgText += "Aspiration. I’m determined to make something of myself. (Any)";
		

		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I owe everything to my mentor—a horrible person who’s probably rotting in jail somewhere.";
		if (bond==2)
			bgText += "Somewhere out there, I have a child who doesn’t know me. I’m making the world better for him or her.";
		if (bond==3)
			bgText += "I come from a noble family, and one day I’ll reclaim my lands and title from those who stole them from me.";
		if (bond==4)
			bgText += "A powerful person killed someone I love. Some day soon, I’ll have my revenge.";
		if (bond==5)
			bgText += "I swindled and ruined a person who didn’t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.";
		if (bond==6)
			bgText += "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.";
		

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I can’t resist a pretty face.";
		if (flaw==2)
			bgText += "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in..";
		if (flaw==3)
			bgText += "I’m convinced that no one could ever fool me the way I fool others.";
		if (flaw==4)
			bgText += "I’m too greedy for my own good. I can’t resist taking a risk if there’s money involved.";
		if (flaw==5)
			bgText += "I can’t resist swindling people who are more powerful than me.";
		if (flaw==6)
			bgText += "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.";

		break;
	case(3):
		skLearn[4] = true;
		skLearn[16] = true;
		mySkills.push(4);
		mySkills.push(16);
		myLifestyle = 2;
		eqOutput += ", Crowbar, Dark common clothes";
		tempTxt = gaming[Math.floor(Math.random() * gaming.length)];
		toOutput += ", Thieves' tools, " + tempTxt;
		gold += 15;
		bgOutput += "Criminal ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 8);
		if (x==0)
			bgOutput += "(Blackmailer)";
		if (x==1)
			bgOutput += "(Burglar)";
		if (x==2)
			bgOutput += "(Enforcer)";
		if (x==3)
			bgOutput += "(Fence)";
		if (x==4)
			bgOutput += "(Highway robber)";
		if (x==5)
			bgOutput += "(Hired Killer)";
		if (x==6)
			bgOutput += "(Pickpocket)";
		if (x==7)
			bgOutput += "(Smuggler)";


		bgText += "<br><span class=\"bg\">Personality:</span> ";
		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I always have a plan for what to do when things go wrong. ";
			if (personality==2)
				bgText += "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me. ";
			if (personality==3)
				bgText += "The first thing I do in a new place is note the locations of everything valuable - or where such things could be hidden ";
			if (personality==4)
				bgText += "I would rather make a new friend than a new enemy. ";
			if (personality==5)
				bgText += "I am incredibly slow to trust. Those who seem the fairest often have the most to hide. ";
			if (personality==6)
				bgText += "I don't pay attention to the risks in a situation. Never tell me the odds. ";
			if (personality==7)
				bgText += "The best way to get me to do something is to tell me I can't do it. ";
			if (personality==8)
				bgText += "I blow up at the slightest insult. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
		
		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Honor. I don’t steal from others in the trade. (Lawful)";
		if (ideal==2)
			bgText += "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)";
		if (ideal==3)
			bgText += "Charity. I steal from the wealthy so that I can help people in need. (Good)";
		if (ideal==4)
			bgText += "Greed.  I will do whatever it takes to become wealthy. (Evil)";
		if (ideal==5)
			bgText += "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)";
		if (ideal==6)
			bgText += "Redemption. There’s a spark of good in everyone. (Good)";
		
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I’m trying to pay off an old debt I owe to a generous benefactor.";
		if (bond==2)
			bgText += "My ill-gotten gains go to support my family.";
		if (bond==3)
			bgText += "Something important was taken from me, and I aim to steal it back.";
		if (bond==4)
			bgText += "I will become the greatest thief that ever lived.";
		if (bond==5)
			bgText += "I’m guilty of a terrible crime. I hope I can redeem myself for it.";
		if (bond==6)
			bgText += "Someone I loved died because of a mistake I made. That will never happen again.";
		
		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "When I see something valuable, I can’t think about anything but how to steal it.";
		if (flaw==2)
			bgText += "When faced with a choice between money and my friends, I usually choose the money.";
		if (flaw==3)
			bgText += "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.";
		if (flaw==4)
			bgText += "I have a “tell” that reveals when I'm lying.";
		if (flaw==5)
			bgText += "I turn tail and run when things look bad.";
		if (flaw==6)
			bgText += "An innocent person is in prison for a crime that I committed. I’m okay with that.";
		break;
	case(4):
		skLearn[0] = true;
		skLearn[12] = true;
		mySkills.push(0);
		mySkills.push(12);
		myLifestyle = 3;
		temp = music[Math.floor(Math.random() * music.length)];

		while (myMusic.indexOf(temp) > -1) {
				temp = music[Math.floor(Math.random() * music.length)];
			}

		toOutput += ", " + temp + ", Disguise kit";
		eqOutput += ", "+ temp + ", Costume";
		gold += 15;
		bgOutput += "Entertainer";
		bgOutput += "</b>"
		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I know a story relevant to almost every situation. ";
			if (personality==2)
				bgText += "Whenever I come to a new place, I collect local rumors and spread gossip. ";
			if (personality==3)
				bgText += "I’m a hopeless romantic, always searching for that “special someone.” ";
			if (personality==4)
				bgText += "Nobody stays angry at me or around me for long, since I can defuse any amount of tension. ";
			if (personality==5)
				bgText += "I love a good insult, even one directed at me. ";
			if (personality==6)
				bgText += "I get bitter if I’m not the center of attention. ";
			if (personality==7)
				bgText += "I’ll settle for nothing less than perfection. ";
			if (personality==8)
				bgText += "I change my mood or my mind as quickly as I change key in a song. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
		
		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Beauty. When I perform, I make the world better than it was. (Good)";
		if (ideal==2)
			bgText += "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)";
		if (ideal==3)
			bgText += "Creativity. The world is in need of new ideas and bold action. (Chaotic)";
		if (ideal==4)
			bgText += "Greed. I’m only in it for the money and fame. (Evil)";
		if (ideal==5)
			bgText += "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)";
		if (ideal==6)
			bgText += "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)";

		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "My instrument is my most treasured possession, and it reminds me of someone I love.";
		if (bond==2)
			bgText += "Someone stole my precious instrument, and someday I’ll get it back.";
		if (bond==3)
			bgText += "I want to be famous, whatever it takes.";
		if (bond==4)
			bgText += "I idolize a hero of the old tales and measure my deeds against that person’s.";
		if (bond==5)
			bgText += "I will do anything to prove myself superior to my hated rival.";
		if (bond==6)
			bgText += "I would do anything for the other members of my old troupe.";
		  
		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I’ll do anything to win fame and renown.";
		if (flaw==2)
			bgText += "I’m a sucker for a pretty face.";
		if (flaw==3)
			bgText += "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.";
		if (flaw==4)
			bgText += "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.";
		if (flaw==5)
			bgText += "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.";
		if (flaw==6)
			bgText += "Despite my best efforts, I am unreliable to my friends.";

		break;
	case(5):
		skLearn[6] = true;
		skLearn[13] = true;
		mySkills.push(6);
		mySkills.push(13);
		myLifestyle = 4;
		temp = artisans[Math.floor(Math.random() * artisans.length)];
		
		//check if we already know that skill.  if we do, don't add to our tool proficiencies
		if (toOutput.indexOf(temp) > -1) {
			eqOutput += ", " +temp+ "'s tools, Guild letter, Traveler's clothes";	
			
		} else {
			eqOutput += ", " +temp+ "'s tools, Guild letter, Traveler's clothes";
			toOutput += ", " + temp+ "'s tools";
		}
		moreLang += 1;
		gold += 15;
		bgOutput += "Guild Artisan ("+temp+")";
		bgOutput += "</b>"
		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I  believe that anything worth doing is worth doing right. I can’t help it— I’m a perfectionist. ";
			if (personality==2)
				bgText += "I’m a snob who looks down on those who can’t appreciate fine art. ";
			if (personality==3)
				bgText += "I always want to know how things work and what makes people tick. ";
			if (personality==4)
				bgText += "I’m full of witty aphorisms and have a proverb for every occasion. ";
			if (personality==5)
				bgText += "I’m rude to people who lack my commitment to hard work and fair play. ";
			if (personality==6)
				bgText += " I like to talk at length about my profession. ";
			if (personality==7)
				bgText += " I don’t part with my money easily and will haggle tirelessly to get the best deal possible. ";
			if (personality==8)
				bgText += "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me. ";
			
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}


		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)";
		if (ideal==2)
			bgText += "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)";
		if (ideal==3)
			bgText += "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)";
		if (ideal==4)
			bgText += "Greed. I’m only in it for the money. (Evil)";
		if (ideal==5)
			bgText += "People. I’m committed to the people I care about, not to ideals. (Neutral)";
		if (ideal==6)
			bgText += "Aspiration. I work hard to be the best there is at my craft.";
		


 


		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "The workshop where I learned my trade is the most important place in the world to me.";
		if (bond==2)
			bgText += "I created a great work for someone, and then found them unworthy to receive it. I’m still looking for someone worthy.";
		if (bond==3)
			bgText += "I owe my guild a great debt for forging me into the person I am today.";
		if (bond==4)
			bgText += "I pursue wealth to secure someone’s love.";
		if (bond==5)
			bgText += "One day I will return to my guild and prove that I am the greatest artisan of them all.";
		if (bond==6)
			bgText += "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.";

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I’ll do anything to get my hands on something rare or priceless.";
		if (flaw==2)
			bgText += "I’m quick to assume that someone is trying to cheat me.";
		if (flaw==3)
			bgText += "No one must ever learn that I once stole money from guild coffers.";
		if (flaw==4)
			bgText += "I’m never satisfied with what I have— I always want more.";
		if (flaw==5)
			bgText += "I would kill to acquire a noble title.";
		if (flaw==6)
			bgText += "I’m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I’m surrounded by rivals.";

		break;

	case(6):
		skLearn[9] = true;
		skLearn[14] = true;
		mySkills.push(9);
		mySkills.push(14);
		myLifestyle = 2;
		if (toOutput.indexOf("Herbalism kit") == -1) 
			toOutput += ", Herbalism kit";

		eqOutput += ", Record of Hermit studies, Common clothes, Herbalism kit";
		gold += 5;
		moreLang += 1;
		bgOutput += "Hermit ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 8);
		if (x==0)
			bgOutput += "(I was searching for spiritual enlightenment.)";
		if (x==1)
			bgOutput += "(I was partaking of communal living in accordance with the dictates of a religious order.)";
		if (x==2)
			bgOutput += "(I was exiled for a crime I didn’t commit.)";
		if (x==3)
			bgOutput += "(I retreated from society after a life-altering event.)";
		if (x==4)
			bgOutput += "(I needed a quiet place to work on my art, literature, music, or manifesto.)";
		if (x==5)
			bgOutput += "(I needed to commune with nature, far from civilization.)";
		if (x==6)
			bgOutput += "(I was the caretaker of an ancient ruin or relic.)";
		if (x==7)
			bgOutput += "(I was a pilgrim in search of a person, place, or relic of spiritual significance.)";


		bgText += "<br><span class=\"bg\">Personality:</span> ";


		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt. ";
			if (personality==2)
				bgText += "I am utterly serene, even in the face of disaster. ";
			if (personality==3)
				bgText += "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom. ";
			if (personality==4)
				bgText += "I feel tremendous empathy for all who suffer. ";
			if (personality==5)
				bgText += "I’m oblivious to etiquette and social expectations. ";
			if (personality==6)
				bgText += "I connect everything that happens to me to a grand, cosmic plan. ";
			if (personality==7)
				bgText += "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings. ";
			if (personality==8)
				bgText += "I am working on a grand philosophical theory and love sharing my ideas. ";
			
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}


		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)";
		if (ideal==2)
			bgText += "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)";
		if (ideal==3)
			bgText += "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)";
		if (ideal==4)
			bgText += "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)";
		if (ideal==5)
			bgText += "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)";
		if (ideal==6)
			bgText += "Self-Knowledge. If you know yourself, there’s nothing left to know. (Any)";
		

 
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "Nothing is more important than the other members of my hermitage, order, or association.";
		if (bond==2)
			bgText += "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.";
		if (bond==3)
			bgText += "I’m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.";
		if (bond==4)
			bgText += "I entered seclusion because I loved someone I could not have.";
		if (bond==5)
			bgText += "Should my discovery come to light, it could bring ruin to the world.";
		if (bond==6)
			bgText += "My isolation gave me great insight into a great evil that only I can destroy.";
		

 		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "Now that I've returned to the world, I enjoy its delights a little too much.";
		if (flaw==2)
			bgText += "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.";
		if (flaw==3)
			bgText += "I am dogmatic in my thoughts and philosophy.";
		if (flaw==4)
			bgText += "I let my need to win arguments overshadow friendships and harmony.";
		if (flaw==5)
			bgText += "I’d risk too much to uncover a lost bit of knowledge.";
		if (flaw==6)
			bgText += "I like keeping secrets and won’t share them with anyone.";

		break;
	case(7):
		skLearn[1] = true;
		skLearn[17] = true;
		mySkills.push(1);
		mySkills.push(17);
		myLifestyle = 3;
		temp = artisans[Math.floor(Math.random() * artisans.length)];
		toOutput += ", " + temp+ "'s tools, Land vehicles";
		eqOutput += ", " + temp+ "'s tools, Common clothes";
		gold += 10;
		bgOutput += "Folk Hero ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 10);
		if (x==0)
			bgOutput +="(I stood up to a tyrant’s agents.)";
		if (x==1)
			bgOutput += "(I saved people during a natural disaster.)";
		if (x==2)
			bgOutput += "(I stood alone against a terrible monster.)";
		if (x==3)
			bgOutput += "(I stole from a corrupt merchant to help the poor.)";
		if (x==4)
			bgOutput += "(I led a militia to fight off an invading army.)";
		if (x==5)
			bgOutput += "(I broke into a tyrant’s castle and stole weapons to arm the people.)";
		if (x==6)
			bgOutput += "(I trained the peasantry to use farm implements as weapons against a tyrant’s soldiers.)";
		if (x==7)
			bgOutput += "(A lord rescinded an unpopular decree after I led a symbolic act of protest against it.)";
		if (x==8)
			bgOutput += "(A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.)";
		if (x==9)
			bgOutput += "(Recruited into a lord’s army, I rose to leadership and was commended for my heroism.)";


		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I judge people by their actions, not their words. ";
			if (personality==2)
				bgText += "If someone is in trouble, I’m always ready to lend help. ";
			if (personality==3)
				bgText += "When I set my mind to something, I follow through no matter what gets in my way. ";
			if (personality==4)
				bgText += "I have a strong sense of fair play and always try to find the most equitable solution to arguments. ";
			if (personality==5)
				bgText += "I’m confident in my own abilities and do what I can to instill confidence in others. ";
			if (personality==6)
				bgText += "Thinking is for other people. I prefer action. ";
			if (personality==7)
				bgText += "I misuse long words in an attempt to sound smarter. ";
			if (personality==8)
				bgText += "I get bored easily. When am I going to get on with my destiny? ";
			
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Respect. People deserve to be treated with dignity and respect. (Good)";
		if (ideal==2)
			bgText += "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)";
		if (ideal==3)
			bgText += "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)";
		if (ideal==4)
			bgText += "Might. If I become strong, I can take what I want— what I deserve. (Evil)";
		if (ideal==5)
			bgText += "Sincerity. There’s no good in pretending to be something I’m not. (Neutral)";
		if (ideal==6)
			bgText += "Destiny. Nothing and no one can steer me away from my higher calling. (Any)";
		

		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I have a family, but I have no idea where they are. One day, I hope to see them again.";
		if (bond==2)
			bgText += "I worked the land, I love the land, and I will protect the land.";
		if (bond==3)
			bgText += "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.";
		if (bond==4)
			bgText += "My tools are symbols of my past life, and I carry them so that I will never forget my roots.";
		if (bond==5)
			bgText += "I protect those who cannot protect themselves.";
		if (bond==6)
			bgText += "I wish my childhood sweetheart had come with me to pursue my destiny.";
		

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "The tyrant who rules my land will stop at nothing to see me killed.";
		if (flaw==2)
			bgText += "I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.";
		if (flaw==3)
			bgText += "The people who knew me when I was young know my shameful secret, so I can never go home again.";
		if (flaw==4)
			bgText += "I have a weakness for the vices of the city, especially hard drink.";
		if (flaw==5)
			bgText += "Secretly, I believe that things would be better if I were a tyrant lording over the land.";
		if (flaw==6)
			bgText += "I have trouble trusting in my allies.";

		break;
	case(8):
		skLearn[5] = true;
		skLearn[13] = true;
		mySkills.push(5);
		mySkills.push(13);
		myLifestyle = 5;
		tempTxt = gaming[Math.floor(Math.random() * gaming.length)];
		toOutput += ", " + tempTxt;
		eqOutput += ", Fine clothes, Signet ring, Scroll of pedigree";
		gold += 25;
		moreLang += 1;
		bgOutput += "Noble";
		bgOutput += "</b>"

		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world. ";
			if (personality==2)
				bgText += "The common folk love me for my kindness and generosity. ";
			if (personality==3)
				bgText += "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses. ";
			if (personality==4)
				bgText += "I take great pains to always look my best and follow the latest fashions. ";
			if (personality==5)
				bgText += "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations. ";
			if (personality==6)
				bgText += "Despite my noble birth, I do not place myself above other folk. We all have the same blood. ";
			if (personality==7)
				bgText += "My favor, once lost, is lost forever. ";
			if (personality==8)
				bgText += "If you do me an injury, I will crush you, ruin your name, and salt your fields. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
			

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.  (Good)";
		if (ideal==2)
			bgText += "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.  (Lawful)";
		if (ideal==3)
			bgText += "Independence. I must prove that I can handle myself without the coddling of my family.  (Chaotic)";
		if (ideal==4)
			bgText += "Power. If I  can attain more power, no one will tell me what to do.  (Evil)";
		if (ideal==5)
			bgText += "Family. Blood runs thicker than water.  (Any)";
		if (ideal==6)
			bgText += "Noble Obligation. It is my duty to protect and care for the people beneath me.  (Good)";
		

 
 
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I will face any challenge to win the approval of my family.";
		if (bond==2)
			bgText += "My house’s alliance with another noble family must be sustained at all costs.";
		if (bond==3)
			bgText += "Nothing is more important than the other members of my family.";
		if (bond==4)
			bgText += "I am in love with the heir of a family that my family despises.";
		if (bond==5)
			bgText += "My loyalty to my sovereign is unwavering.";
		if (bond==6)
			bgText += "The common folk must see me as a hero of the people.";
		

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I secretly believe that everyone is beneath me.";
		if (flaw==2)
			bgText += "I hide a truly scandalous secret that could ruin my family forever.";
		if (flaw==3)
			bgText += "I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.";
		if (flaw==4)
			bgText += "I  have an insatiable desire for carnal pleasures.";
		if (flaw==5)
			bgText += "In fact, the world does revolve around me.";
		if (flaw==6)
			bgText += "By my words and actions,  I often bring shame to my family.";

		break;
	case(9):
		skLearn[3] = true;
		skLearn[17] = true;
		mySkills.push(3);
		mySkills.push(17);
		myLifestyle = 2;
		temp = music[Math.floor(Math.random() * music.length)];
		while ((myMusic.indexOf(temp)) > -1) {
				temp = music[Math.floor(Math.random() * music.length)];
		}

		toOutput += ", " + temp;
		eqOutput += ", Hunting trap, Animal trophy, Traveler's clothes";
		gold += 10;
		moreLang += 1;
		bgOutput += "Outlander ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 10);
		if (x==0)
			bgOutput += "(Forester)";
		if (x==1)
			bgOutput += "(Trapper)";
		if (x==2)
			bgOutput += "(Homesteader)";
		if (x==3)
			bgOutput += "(Guide)";
		if (x==4)
			bgOutput += "(Exile or outcast)";
		if (x==5)
			bgOutput += "(Bounty hunter)";
		if (x==6)
			bgOutput += "(Pilgrim)";
		if (x==7)
			bgOutput += "(Tribal nomad)";
		if (x==8)
			bgOutput += "(Hunter-gatherer)";
		if (x==9)
			bgOutput += "(Tribal marauder)";

		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I’m driven by a wanderlust that led me away from home. ";
			if (personality==2)
				bgText += "I watch over my friends as if they were a litter of newborn pups. ";
			if (personality==3)
				bgText += "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I’d do it again if I had to. ";
			if (personality==4)
				bgText += "I place no stock in wealthy or well-mannered folk. Money and manners won’t save you from a hungry owlbear. ";
			if (personality==5)
				bgText += "I have a lesson for every situation, drawn from observing nature. ";
			if (personality==6)
				bgText += "I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them. ";
			if (personality==7)
				bgText += "I feel far more comfortable around animals than people. ";
			if (personality==8)
				bgText += "I was, in fact, raised by wolves. ";

			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
 
		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)";
		if (ideal==2)
			bgText += "Greater Good. It is each person’s responsibility to make the most happiness for the whole tribe. (Good)";
		if (ideal==3)
			bgText += "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)";
		if (ideal==4)
			bgText += "Might. The strongest are meant to rule. (Evil)";
		if (ideal==5)
			bgText += "Nature. The natural world is more important than all the constructs of civilization. (Neutral)";
		if (ideal==6)
			bgText += "Glory. I must earn glory in battle, for myself and my clan. (Any)";
		

		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "My family, clan, or tribe is the most important thing in my life, even when they are far from me.";
		if (bond==2)
			bgText += "An injury to the unspoiled wilderness of my home is an injury to me.";
		if (bond==3)
			bgText += "I will bring terrible wrath down on the evildoers who destroyed my homeland.";
		if (bond==4)
			bgText += "I am the last of my tribe, and it is up to me to ensure their names enter legend.";
		if (bond==5)
			bgText += "I suffer awful visions of a coming disaster and will do anything to prevent it.";
		if (bond==6)
			bgText += "It is my duty to provide children to sustain my tribe.";
		

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I am too enamored of ale, wine, and other intoxicants.";
		if (flaw==2)
			bgText += "There’s no room for caution in a life lived to the fullest.";
		if (flaw==3)
			bgText += "I remember every insult I’ve received and nurse a silent resentment toward anyone who’s ever wronged me.";
		if (flaw==4)
			bgText += "I am slow to trust members of other races, tribes, and societies.";
		if (flaw==5)
			bgText += "Violence is my answer to almost any challenge.";
		if (flaw==6)
			bgText += "Don’t expect me to save those who can’t save themselves. It is nature’s way that the strong thrive and the weak perish.";

		break;
	case(10):
		skLearn[2] = true;
		skLearn[5] = true;
		mySkills.push(2);
		mySkills.push(5);
		myLifestyle = 3;
		eqOutput += ", Black ink, Quill, Colleague's letter, Common clothes";
		moreLang += 2;
		gold += 10;
		bgOutput += "Sage ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 8);
		if (x==0)
			bgOutput += "(Alchemist)";
		if (x==1)
			bgOutput += "(Astronomer)";
		if (x==2)
			bgOutput += "(Discredited academic)";
		if (x==3)
			bgOutput += "(Librarian)";
		if (x==4)
			bgOutput += "(Professor)";
		if (x==5)
			bgOutput += "(Researcher)";
		if (x==6)
			bgOutput += "(Wizard's apprentice)";
		if (x==7)
			bgOutput += "(Scribe)";




		bgText += "<br><span class=\"bg\">Personality:</span> ";


		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I use polysyllabic words that convey the impression of great erudition. ";
			if (personality==2)
				bgText += "I've read every book in the world’s greatest libraries—or I like to boast that I have. ";
			if (personality==3)
				bgText += "I'm used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others. ";
			if (personality==4)
				bgText += "There’s nothing I like more than a good mystery. ";
			if (personality==5)
				bgText += "I’m willing to listen to every side of an argument before I make my own judgment. ";
			if (personality==6)
				bgText += "I . . . speak . . . slowly .  . . when talking .  .  . to idiots, . . . which . . . almost . . . everyone . .  . is . . . compared . . . to me. ";
			if (personality==7)
				bgText += "I am horribly, horribly awkward in social situations. ";
			if (personality==8)
				bgText += "I’m convinced that people are always trying to steal my secrets. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
		

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)";
		if (ideal==2)
			bgText += "Beauty. What is beautiful points us beyond itself toward what is true. (Good)";
		if (ideal==3)
			bgText += "Logic. Emotions must not cloud our logical thinking. (Lawful)";
		if (ideal==4)
			bgText += "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)";
		if (ideal==5)
			bgText += "Power. Knowledge is the path to power and domination. (Evil)";
		if (ideal==6)
			bgText += "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)";
		

		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "It is my duty to protect my students.";
		if (bond==2)
			bgText += "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.";
		if (bond==3)
			bgText += "I work to preserve a library, university, scriptorium, or monastery.";
		if (bond==4)
			bgText += "My life’s work is a series of tomes related to a specific field of lore.";
		if (bond==5)
			bgText += "I've been searching my whole life for the answer to a certain question.";
		if (bond==6)
			bgText += "I sold my soul for knowledge. I hope to do great deeds and win it back.";
		
		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I am easily distracted by the promise of information.";
		if (flaw==2)
			bgText += "Most people scream and run when they see a demon. I stop and take notes on its anatomy.";
		if (flaw==3)
			bgText += "Unlocking an ancient mystery is worth the price of a civilization.";
		if (flaw==4)
			bgText += "I overlook obvious solutions in favor of complicated ones.";
		if (flaw==5)
			bgText += "I speak without really thinking through my words, invariably insulting others.";
		if (flaw==6)
			bgText += "I can’t keep a secret to save my life, or anyone else’s.";

		break;
	case(11):
		skLearn[3] = true;
		skLearn[11] = true;
		mySkills.push(3);
		mySkills.push(11);
		myLifestyle = 3;		
		toOutput += ", Navigator's tools, Water vehicles";
		eqOutput += ", 50 feet silk rope, Lucky charm, Trinket, Common clothes";
		gold += 10;
		bgOutput += "Sailor";
		bgOutput += "</b>"
		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "My friends know they can rely on me, no matter what. ";
			if (personality==2)
				bgText += "I work hard so that I can play hard when the work is done. ";
			if (personality==3)
				bgText += "I enjoy sailing into new ports and making new friends over a flagon of ale. ";
			if (personality==4)
				bgText += "I stretch the truth for the sake of a good story. ";
			if (personality==5)
				bgText += "To me, a tavern brawl is a nice way to get to know a new city. ";
			if (personality==6)
				bgText += "I never pass up a friendly wager. ";
			if (personality==7)
				bgText += "My language is as foul as an otyugh nest. ";
			if (personality==8)
				bgText += "I like a job well done, especially if I can convince someone else to do it. ";
		
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)";
		if (ideal==2)
			bgText += "Fairness. We all do the work, so we all share in the rewards. (Lawful)";
		if (ideal==3)
			bgText += "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)";
		if (ideal==4)
			bgText += "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)";
		if (ideal==5)
			bgText += "People. I’m committed to my crewmates, not to ideals. (Neutral)";
		if (ideal==6)
			bgText += "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any)";
		
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I’m loyal to my captain first, everything else second.";
		if (bond==2)
			bgText += "The ship is most important—crewmates and captains come and go.";
		if (bond==3)
			bgText += "I’ll always remember my first ship.";
		if (bond==4)
			bgText += "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.";
		if (bond==5)
			bgText += "I was cheated out of my fair share of the profits, and I want to get my due.";
		if (bond==6)
			bgText += "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.";
		

		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "I follow orders, even if I think they’re wrong.";
		if (flaw==2)
			bgText += "I’ll say anything to avoid having to do extra work.";
		if (flaw==3)
			bgText += "Once someone questions my courage, I never back down no matter how dangerous the situation.";
		if (flaw==4)
			bgText += "Once I start drinking, it’s hard for me to stop.";
		if (flaw==5)
			bgText += "I can’t help but pocket loose coins and other trinkets I come across.";
		if (flaw==6)
			bgText += "My pride will probably lead to my destruction.";

		break;
	case(12):
		skLearn[3] = true;
		skLearn[7] = true;
		mySkills.push(3);
		mySkills.push(7);
		myLifestyle = 3;
		tempTxt = gaming[Math.floor(Math.random() * gaming.length)];
		toOutput += ", " + tempTxt +", Land vehicles";
		eqOutput += ", Insignia of rank, War trophy, Bone dice, Common clothes";
		gold += 10;
		bgOutput += "Soldier ";
		bgOutput += "</b>"
		x=Math.floor(Math.random() * 8);
		if (x==0)
			bgOutput += "(Officer)";
		if (x==1)
			bgOutput += "(Scout)";
		if (x==2)
			bgOutput += "(Infantry)";
		if (x==3)
			bgOutput += "(Cavalry)";
		if (x==4)
			bgOutput += "(Healer)";
		if (x==5)
			bgOutput += "(Quartermaster)";
		if (x==6)
			bgOutput += "(Standard bearer)";
		if (x==7)
			bgOutput += "(Support staff)";

		bgText += "<br><span class=\"bg\">Personality:</span> ";

		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I'm always polite and respectful. ";
			if (personality==2)
				bgText += "I’m haunted by memories of war. I can’t get the images of violence out of my mind. ";
			if (personality==3)
				bgText += "I’ve lost too many friends, and I’m slow to make new ones. ";
			if (personality==4)
				bgText += "I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation. ";
			if (personality==5)
				bgText += "I can stare down a hell hound without flinching. ";
			if (personality==6)
				bgText += "I enjoy being strong and like breaking things. ";
			if (personality==7)
				bgText += "I have a crude sense of humor. ";
			if (personality==8)
				bgText += "I face problems head-on. A simple, direct solution is the best path to success. ";
			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}
		

		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Greater Good. Our lot is to lay down our lives in defense of others. (Good)";
		if (ideal==2)
			bgText += "Responsibility. I do what I must and obey just authority. (Lawful)";
		if (ideal==3)
			bgText += "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)";
		if (ideal==4)
			bgText += "Might. In life as in war, the stronger force wins. (Evil)";
		if (ideal==5)
			bgText += "Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)";
		if (ideal==6)
			bgText += "Nation. My city, nation, or people are all that matter. (Any)";
		 
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "I would still lay down my life for the people I served with.";
		if (bond==2)
			bgText += "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.";
		if (bond==3)
			bgText += "My honor is my life.";
		if (bond==4)
			bgText += "I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.";
		if (bond==5)
			bgText += "Those who fight beside me are those worth dying for.";
		if (bond==6)
			bgText += "I fight for those who cannot fight for themselves.";
		 
 
		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "The monstrous enemy we faced in battle still leaves me quivering with fear.";
		if (flaw==2)
			bgText += "I have little respect for anyone who is not a proven warrior.";
		if (flaw==3)
			bgText += "I made a terrible mistake in battle cost many lives— and I would do anything to keep that mistake secret.";
		if (flaw==4)
			bgText += "My hatred of my enemies is blind and unreasoning.";
		if (flaw==5)
			bgText += "I obey the law, even if the law causes misery.";
		if (flaw==6)
			bgText += "I’d rather eat my armor than admit when I’m wrong.";


		break;
	case(13):
		
		skLearn[15] = true;
		skLearn[16] = true;
		mySkills.push(15);
		mySkills.push(16);
		myLifestyle = 3;
		toOutput += ",  Disguise kit,  Thieves' tools";
		eqOutput += ", Token, Common clothes";
		gold += 10;
		bgOutput += "Urchin";
		bgOutput += "</b>"
		bgText += "<br><span class=\"bg\">Personality:</span> ";
		
		i=0;
		x=personality;
		while (i < 2) {


			if (personality==1)
				bgText += "I hide scraps of food and trinkets away in my pockets. ";
			if (personality==2)
				bgText += "I ask a lot of questions. ";
			if (personality==3)
				bgText += "I like to squeeze into small places where no one else can get to me. ";
			if (personality==4)
				bgText += "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms. ";
			if (personality==5)
				bgText += "I eat like a pig and have bad manners. ";
			if (personality==6)
				bgText += "I think anyone who’s nice to me is hiding evil intent. ";
			if (personality==7)
				bgText += "I don’t like to bathe. ";
			if (personality==8)
				bgText += "I bluntly say what other people are hinting at or hiding. ";

			while (x==personality) {
				personality=Math.floor((Math.random() * 8) +1);
			}
						i++;
			if (i==1) 
				bgText += "<br>";
		}

		
		bgText += "<br><span class=\"bg\">Ideal:</span> ";
		if (ideal==1)
			bgText += "Respect. All people, rich or poor, deserve respect. (Good)";
		if (ideal==2)
			bgText += "Community. We have to take care of each other, because no one else is going to do it. (Lawful)";
		if (ideal==3)
			bgText += "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)";
		if (ideal==4)
			bgText += "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)";
		if (ideal==5)
			bgText += "People. I help the people who help me—that’s what keeps us alive. (Neutral)";
		if (ideal==6)
			bgText += "Aspiration. I'm going to prove that I'm worthy of a better life.";
		
		bgText += "<br><span class=\"bg\">Bond:</span> ";
		if (bond==1)
			bgText += "My town or city is my home, and I’ll fight to defend it.";
		if (bond==2)
			bgText += "I sponsor an orphanage to keep others from enduring what I was forced to endure.";
		if (bond==3)
			bgText += "I owe my survival to another urchin who taught me to live on the streets.";
		if (bond==4)
			bgText += "I owe a debt I can never repay to the person who took pity on me.";
		if (bond==5)
			bgText += "I escaped my life of poverty by robbing an important person, and I’m wanted for it.";
		if (bond==6)
			bgText += "No one else should have to endure the hardships I’ve been through.";
		
		bgText += "<br><span class=\"bg\">Flaw:</span> ";
		if (flaw==1)
			bgText += "If I'm outnumbered, I will run away from a fight.";
		if (flaw==2)
			bgText += "Gold seems like a lot of money to me, and I’ll do just about anything for more of it.";
		if (flaw==3)
			bgText += "I will never fully trust anyone other than myself.";
		if (flaw==4)
			bgText += "I’d rather kill someone in their sleep then fight fair.";
		if (flaw==5)
			bgText += "It’s not stealing if I need it more than someone else.";
		if (flaw==6)
			bgText += "People who can't take care of themselves get what they deserve.";
		break;


}

bgOutput += bgText;

//Adventurer's League chars have a trinket
if (al==true)
	eqOutput += ", Trinket";


//set true to all the skills we learned
/*
mySkills.sort(function(a,b){return a-b});
for (x=0;x < mySkills.length;x++)		{
	// current = ;
	skLearn[mySkills[x]] = true;
}
*/








//alert("Before we give class skills");

// give class skills
switch (cl) {
	case 1: 
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([1,3,7,10,11,17]));
		}
		break;
	case 2:
		x=3;
		// 6 skills if you're from the college of lore
		if (classtxt.indexOf("Lore") > -1)
			x=6;
		for (;x > 0;x--) {

			if (Math.random() < 0.7) {
				// medicien and perception addeed to prevent infinit loop
				mySkills.push(pickSome([0,4,7,11,9,12,13,15,16]));
				}
			else {
				mySkills.push(pickSome([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));
				}
		}
		// pick expertises


		if (level >2) {
			y=2;
			if (level > 9) {
				y+=2
				if (mySkills.length < 4) {
					y=3;
				}
			}
			while (y > 0) {
				x= Math.floor(Math.random() * mySkills.length); 

				if (expertise.indexOf(mySkills[x]) == -1) {
					expertise.push(mySkills[x]); 
					console.log("expertise:"+ x); 
					y--;
				}
			}
		}

		break;
	case 3:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([5,6,9,13,14]));

		}
		break;
	case 4:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([1,6,9,10,11,14,17]));
		}
		break;
	case 5:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([0,1,3,5,6,7,11,17]));
		}
		break;
	case 6:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([0,1,3,5,6,7,11,17]));
		}
		break;
	case 7:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([0,1,3,5,6,7,11,17]));
		}
		break;
	case 8:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([0,3,5,6,14,16]));
		}
		break;
	case 9:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([0,6,7,9,13,14]));
		}
		break;
	case 10:
		for (x=3;x > 0;x--) {
			mySkills.push(pickSome([1,3,6,8,10,11,16,17]));
		}
		
		break;
	case 11:
		for (x=4;x > 0;x--) {

			y=Math.floor(Math.random() * 10) +1; 
			if (y < 9) {
				tempAr=[0,11,11,15,16,16,16,16];
				if (mod[3] > 0) {
					tempAr.push(8);
				}
				if (mod[5] > 0) {
					tempAr.push(4,7,12,13);
				}

				mySkills.push(pickSome(tempAr));
			} else

			mySkills.push(pickSome([0,3,4,6,7,8,11,12,13,15,16]));
		}

		z=2;
		if (level > 5) {
			z=4;
		}
		
		// if one expertise is thieves tools deduct 1 expertise
		if (burglar==true) {
			z--;
			console.log("expertise: thieves tools");
		} 

		while (z > 0) { 
			//pick expertise skills
			x= Math.floor(Math.random() * mySkills.length); 
		
			//50% chance specialize in stealth
			if ((Math.random() < 0.5) && (expertise.indexOf(16) > -1))
				x=mySkills.indexOf(16);
			
			while (expertise.indexOf(mySkills[x]) > -1) {
				x= Math.floor(Math.random() * mySkills.length); 		
			}
			expertise.push(mySkills[x]); 
			z--;
			console.log("expertise:  " + expertise);
		}
		break;
	case 12:
		for (x=4;x > 0;x--) {
			mySkills.push(pickSome([0,3,4,6,7,8,11,12,13,15,16,16,16]));
		}


		z=2;
		if (level > 5) {
			z=4;
		}
		
		// if one expertise is thieves tools deduct 1 expertise
		if (burglar==true) {
			z--;
			console.log("expertise: thieves tools");
		} 

		while (z > 0) { 
			//pick expertise skills
			x= Math.floor(Math.random() * mySkills.length); 
		
			//50% chance specialize in stealth
			if ((Math.random() < 0.5) && (expertise.indexOf(16) > -1))
				x=mySkills.indexOf(16);
			
			while (expertise.indexOf(mySkills[x]) > -1) {
				x= Math.floor(Math.random() * mySkills.length); 		
			}
			expertise.push(mySkills[x]); 
			z--;
			console.log("expertise:  " + expertise);
		}

		break;
	case 13:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([2,4,6,7,13,14]));
		}
		break;
	case 14:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([2,4,5,7,8,10,14]));
		}
		break;
	case 15:
		for (x=2;x > 0;x--) {
			mySkills.push(pickSome([2,5,6,8,9,14]));
		}
		break;
		
	}


//if it's a half-elf then add race skills after everything else  (prevents infinite loop)
if (racetxt == "Half-Elf") {
	for (x=2;x > 0;x--) {
		mySkills.push(pickSome([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));
	}
}



//calculate and display skills
mySkills.sort(function(a,b){return a-b});
first=false;
for (x=0;x < 18;x++)		{

	if (skLearn[x] == true) {
		// no comma if it's our first time printing!
		if (first == false) {

		} else {
			skOutput += ", "
		}

		console.log("skills:" + mySkills + " /expertise:" + expertise);
		// check if it's our expertise
		if (expertise.indexOf(x) == -1) {
			skOutput +=  skills[x] + " " + showPlus( (mod[skAbil[x]] + prof) );
		} else{
			skOutput +=  "<i>" + skills[x] + " " + showPlus( (mod[skAbil[x]] + (prof*2)) ) + " (Expertise)</i>";
		}
		first=true;
	}

}
if (burglar==true) 
	skOutput += ", <i>Expert with Thieves' Tools</i>"

first=false;
skOutput += "<br><b>Non-proficient skills:</b> ";
//non-proficient skills
for (x=0;x < 18;x++) {
	if (skLearn[x] == false) {
		// no comma if it's our first time printing!
		if (first == false) {

		} else {
			skOutput += ", "
		}
		//console.log("skills:" + mySkills + " /expertise:" + expertise);
		skOutput +=  skills[x] + " " + showPlus( (mod[skAbil[x]] ) );
		first=true;
	}

}


// alert ("finished skills");


i=0;
// get extra languages
while (moreLang > 0) {
	i++;
	//alert("searching for language" + moreLang + "/ try #" + i);
	var newLang = "";

	exotic = Math.floor(Math.random() * 9); 
	
// 1 in 9 chance of exotic language
	if (exotic == 0) {

		x = Math.floor((Math.random() * 8) +1); 
		switch (x) {
			case (1):
				newLang="Abyssal";
				break;
			case (2):
				newLang="Celestial";
				break;
			case (3):
				newLang="Draconic";
				break;
			case (4):
				newLang="Deep Speech";
				break;
			case (5):
				newLang="Infernal";
				break;
			case (6):
				newLang="Primordial";
				break;
			case (7):
				newLang="Sylvan";
				break;
			case (8):
				newLang="Undercommon";
				break;
			
			}
// if we already know the language don't add it
		if (languageOutput.indexOf(newLang) == -1) {
			languageOutput += ", " + newLang;
			moreLang--;
		}



	} else {
		x = Math.floor(Math.random() * 7); 
		switch (x) {
			case (1):
				newLang="Dwarvish";
				break;
			case (2):
				newLang="Elvish";
				break;
			case (3):
				newLang="Giant";
				break;
			case (4):
				newLang="Goblin";
				break;
			case (5):
				newLang="Gnomish";
				break;
			case (6):
				newLang="Halfling";
				break;
			case (7):
				newLang="Orc";
				break;
			}
// if we already know th elanguage don't add it
		if (languageOutput.indexOf(newLang) == -1) {
			languageOutput += ", " + newLang;
			moreLang--;
		}

	}

}


//alert("finished lang");




// add spells
//High elf cantrip
if (racetxt == "High Elf") {
	x=1;
	while (x > 0) {

		if (Math.random() < 0.5) {
			tempAr = ["Acid Splash","Blade Ward","Chill Touch","Fire Bolt","Minor Illusion","Poison Spray","Ray of Frost","Shocking Grasp","True Strike"];
		} else {
			tempAr = wiCantrip;
		}
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
		// check if we already know spell
		if (mySpells.indexOf(temp) == -1) {
			// add cantrip
			raceSpells.push(temp);				
			x--;
		}
	}		
}



//BARD
if (cl==2) {
	ss1=level +1;
	ss2=0;


	if (level>2)
		ss2=2;
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level==5) 
		ss3 = 2;
	if (level > 5)
		ss3=3;
	if (level > 6)
		ss4=(level - 6);
	if (level > 8) {
		ss4=3;
		ss5=level-8;
	}

	
	sp1=4;
	sp2=0;
	if (level > 1)
		sp1=5;
	if (level > 2)
		sp2= level-2;
	if (level > 4) {
		sp2 = 2;
		sp3 = level-4;
	}
	if (level > 6) {
		sp3 = 2;
		sp4 = level-6;
	}
	if (level > 8) {
		sp4 = 2;
		sp5 = 1;
	}
	//14 spells at level 10
	if (level > 9) {
		sp5=3;
	}
	console.log("spellsknown:  "+sp1+"/"+sp2+"/"+sp3+"/"+sp4+"/"+sp5+"/");
	//alert("spellsknown:  "+sp1+"/"+sp2+"/"+sp3+"/"+sp4+"/"+sp5+"/");

	sp=sp1+sp2+sp3+sp4+sp5;

	//cantrips
	x=2;
	if (level >3)
		x=3;
	if (level >9)
		x=4;
	while (x > 0) {
		tempAr = baCantrip;
		if (Math.random() < 0.66)
			tempAr=["Blade Ward","Minor Illusion","True Strike","Vicious Mockery"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 
		}		
	//put in alphabetical order
	myCantrips.sort();
	
	tempSpells=[];

	

	x=sp1;
	while (x > 0) {
		tempAr = ba1;
		if (Math.random() < 0.66)
			tempAr=["Charm Person","Cure Wounds","Cure Wounds","Dissonant Whispers","Dissonant Whispers","Healing Word","Healing Word","Silent Image","Sleep","Tasha's Hideous Laughter","Thunderwave","Thunderwave"];



		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//2nd level
	tempSpells=[];
	x=sp2;
	
	while (x > 0) {
		tempAr = ba2;
		if (Math.random() < 0.66)
			tempAr= ["Blindness/Deafness","Cloud of Daggers","Crown of Madness","Enhance Ability","Heat Metal","Hold Person","Invisibility","Phantasmal Force","Shatter","Suggestion"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


//3rd level
	tempSpells=[];
	x=sp3;
	
	while (x > 0) {
		tempAr = ba3;
		if (Math.random() < 0.5)
			tempAr=["Bestow Curse","Clairvoyance","Dispel Magic","Fear","Glyph of Warding","Hypnotic Pattern","Leomund’s Tiny Hut","Major Image","Stinking Cloud"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


//4th level
	tempSpells=[];
	x=sp4;
	while (x > 0) {
		tempAr = ba4;
		if (Math.random() < 0.5)
			tempAr=["Compulsion","Confusion","Dimension Door","Greater Invisibility","Polymorph"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


//5th level
	tempSpells=[];
	x=sp5;
	
	while (x > 0) {
		tempAr = ba5;
		if (Math.random() < 0.5)
			tempAr=["Animate Objects","Dominate Person","Geas","Greater Restoration","Hold Monster","Legend Lore","Mass Cure Wounds","Mass Cure Wounds","Mislead","Modify Memory","Planar Binding","Raise Dead","Seeming","Teleportation Circle"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

	// 6th level bard lore spells
	if (abOutput.indexOf("Additional Magic") > -1) {
		tempSpells=[];
		x=2;
		while (x>0) {
			tempAr=["Fireball","Lightning Bolt","Fly","Gaseous Form","Mass Healing Word","Revivify","Call Lightning","Conjure Animals","Wind Wall","Blinding Smite","Lightning Arrow","Conjure Barrage","Aura of Vitality"];
			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
			if (tempSpells.indexOf(temp) == -1) {
				tempSpells.push(temp);				
				x--;
			}
		
		}
		tempSpells.sort();
		loSpells = loSpells.concat(tempSpells);
	}


		//10th level secrets
	if (level > 9) {
		tempSpells=[];
		x=2;
		while (x>0) {
			tempAr=["Ice Storm","Bigby’s Hand","CloudkilI","Cone of Cold","Conjure Elemental","Passwall","Wall of Force","Wall of Stone","Antilife Shell","Contagion","Insect Plague","Flame Strike","Death Ward","Conjure Volley","Conjure Woodland Beings","Banishing Smite"];

			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
			if (tempSpells.indexOf(temp) == -1) {
				tempSpells.push(temp);				
				x--;
			}
		
		}
		tempSpells.sort();
		loSpells = loSpells.concat(tempSpells);
	}

}	








//clerics
if (cl==3) {
	ss1=level +1;
	ss2=0;
	if (level>2)
		ss2=2;
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level==5) 
		ss3 = 2;
	if (level > 5)
		ss3=3;
	if (level > 6)
		ss4=(level - 6);
	if (level > 8) {
		ss4=3;
		ss5=level-8;
	}



	sp = level + mod[4];	
	sp1=0;
	sp2=0;
	sp3=0;
	sp4=0;
	sp5=0;
	if (level <3) {
		sp1 = sp;
		sp2 =0;
	} else if (level <5) {
		x= 	Math.floor(sp * .7);
		sp1 = x;
		sp2 = (sp -x);
	} else if (level < 7) {
		x = Math.ceil(sp * .35);
		y = Math.floor(sp * .35);

		sp1 = x;
		z = sp-x-y;
		sp2 = y;
		sp3 = z;

	} else if (level < 9) {
		x = Math.floor(sp * .28);
		y = Math.floor(sp * .28);
		z = Math.floor(sp * .28);

		sum = sp - x-y-z;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = x;

	} else if (level > 8) {
		x = Math.floor(sp * .21);
		y = Math.ceil(sp * .18);
		z = Math.ceil(sp * .18);
		xx = Math.floor(sp * .21);

		sum = sp - x-y-z-xx;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = xx;
		sp5 = x;


	}
	console.log("Spells known:  "+sp1 +"/ " + sp2+"/ " + sp3 +"/ " + sp4+"/ " + sp5+" / Total = "+sp);
	
	if ((sp1+sp2+sp3+sp4+sp5) != sp)
		console.log("not the right number of spells known");

	//cantrips
	x=0;
	//1 druid cantrip for nature clerics
	if (clDomain == 3)  {
			x=1;
		while (x > 0) {
			tempAr = drCantrip;
			if (Math.random() < 0.66)
				tempAr=["Druidcraft","Guidance","Poison Spray","Resistance","Shillelagh","Thorn Whip"];
			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
	// check if we already know spell

			if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {	
		
				myCantrips.push(temp);				
				x--;
			}		
		}
	}


	//1 necro cantrip for death cleric
	if (clDomain == 7)  {
			x=1;
		while (x > 0) {
			tempAr=["Chill Touch","Chill Touch","Spare the Dying"];
			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
	// check if we already know spell

			if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {	
		
				myCantrips.push(temp);				
				x--;
			}		
		}
	}



	x=3;
	if (level >3)
		x=4;
	if (level >9)
		x=5;
	//cantrips
	while (x > 0) {
		if (Math.random() < 0.66)
			tempAr= ["Guidance","Sacred Flame","Spare the Dying"];
		else
			tempAr=clCantrip;

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
	// add cantrip
			myCantrips.push(temp);				
			x--;
			}
		}		
	//put in alphabetical order
	myCantrips.sort();
	
	tempSpells=[];
	
	//1st level
	switch (clDomain) {
		case 0:
			doSpells.push("Command");	
			doSpells.push("Identify");	
			if (level >2) {
				doSpells.push("Augury");	
				doSpells.push("Suggestion");	
			}
			if (level >4) {
				doSpells.push("Nondetection");	
				doSpells.push("Speak with Dead");	
			}
			if (level >6) {
				doSpells.push("Arcane Eye");	
				doSpells.push("Confusion");	
			}
			if (level >8) {
				doSpells.push("Legend Lore");	
				doSpells.push("Scrying");	
			}
			break;
		case 1:
			doSpells.push("Bless");	
			doSpells.push("Cure Wounds");	
			if (level >2) {
				doSpells.push("Lesser Restoration");	
				doSpells.push("Spiritual Weapon");	
			}
			if (level >4) {
				doSpells.push("Beacon of Hope");	
				doSpells.push("Revivify");	
			}
			if (level >6) {
				doSpells.push("Death Ward");	
				doSpells.push("Guardian of Faith");	
			}
			if (level >8) {
				doSpells.push("Mass Cure Wounds");	
				doSpells.push("Raise Dead");	
			}

			break;
		case 2:
			doSpells.push("Burning Hands");	
			doSpells.push("Faerie Fire");	
			if (level >2) {
				doSpells.push("Flaming Sphere");
				doSpells.push("Scorching Ray");	
			}
			if (level >4) {
				doSpells.push("Daylight");	
				doSpells.push("Fireball");	
			}
			if (level >6) {
				doSpells.push("Guardian of Faith");	
				doSpells.push("Wall of Fire");	
			}
			if (level >8) {
				doSpells.push("Flame Strike");	
				doSpells.push("Scrying");	
			}
			break;
		case 3:
			doSpells.push("Animal Friendship");	
			doSpells.push("Speak with Animals");	
			if (level >2) {
				doSpells.push("Barkskin");	
				doSpells.push("Spike Growth");	
			}
			if (level >4) {
				doSpells.push("Plant Growth");	
				doSpells.push("Wind Wall");	
			}
			if (level >6) {
				doSpells.push("Dominate Beast");	
				doSpells.push("Grasping Vine");	
			}
			if (level >8) {
				doSpells.push("Insect Plague");	
				doSpells.push("Tree Stride");	
			}
			break;
		case 4:
			doSpells.push("Fog Cloud");	
			doSpells.push("Thunderwave");	
			if (level >2) {
				doSpells.push("Gust of Wind");	
				doSpells.push("Shatter");	
			}
			if (level >4) {
				doSpells.push("Call Lightning");	
				doSpells.push("Sleet Storm");	
			}
			if (level >6) {
				doSpells.push("Control Water");	
				doSpells.push("Ice Storm");	
			}
			if (level >8) {
				doSpells.push("Destructive Wave");	
				doSpells.push("Insect Plague");	
			}
			break;
		case 5:
			doSpells.push("Charm Person");	
			doSpells.push("Disguise Self");	
			if (level >2) {
				doSpells.push("Mirror Image");	
				doSpells.push("Pass without Trace");	
			}
			if (level >4) {
				doSpells.push("Blink");	
				doSpells.push("Dispel Magic");	
			}
			if (level >6) {
				doSpells.push("Dimension Door");	
				doSpells.push("Polymorph");	
			}
			if (level >8) {
				doSpells.push("Dominate Person");	
				doSpells.push("Modify Memory");	
			}
			break;
		case 6:
			doSpells.push("Divine Favor");	
			doSpells.push("Shield of Faith");	
			if (level >2) {
				doSpells.push("Magic Weapon");	
				doSpells.push("Spiritual Weapon");	
			}
			if (level >4) {
				doSpells.push("Crusader's Mantle");	
				doSpells.push("Spirit Guardians");	
			}
			if (level >6) {
				doSpells.push("Freedom of Movement");	
				doSpells.push("Stoneskin");	
			}
			if (level >8) {
				doSpells.push("Flame Strike");	
				doSpells.push("Hold Monster");	
			}
			break;
		}
	
	x=sp1;
	


	while (x > 0) {
		tempAr = cl1;
		if (Math.random() < 0.66)
			tempAr=["Bane","Bless","Command","Cure Wounds","Cure Wounds","Guiding Bolt","Guiding Bolt","Healing Word","Healing Word","Inflict Wounds","Shield of Faith"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) > -1) || (doSpells.indexOf(temp) > -1)) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//2nd level
	tempSpells=[];

	x=sp2;
	while (x > 0) {
		tempAr = cl2;
		if (Math.random() < 0.66)
			tempAr=["Aid","Blindness/Deafness","Enhance Ability","Hold Person","Lesser Restoration","Prayer of Healing","Silence","Spiritual Weapon","Warding Bond"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) > -1) || (doSpells.indexOf(temp) > -1)) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





//3rd level
	tempSpells=[];
	x=sp3;
	
	while (x > 0) {
		tempAr = cl3;
		if (Math.random() < 0.66)
			tempAr=["Animate Dead","Beacon of Hope","Bestow Curse","Dispel Magic","Glyph of Warding","Magic Circle","Mass Healing Word","Mass Healing Word","Meld into Stone","Protection from Energy","Revivify","Spirit Guardians"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);




//4th level
	tempSpells=[];
	x=sp4;
	
	while (x > 0) {
		tempAr = cl4;
		if (Math.random() < 0.5)
			tempAr=["Banishment","Control Water","Death Ward","Guardian of Faith","Stone Shape"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





//5th level
	tempSpells=[];
	x=sp5;
	
	while (x > 0) {
		tempAr = cl5;
		if (Math.random() < 0.5)
			tempAr=["Commune","Contagion","Dispel Evil and Good","Flame Strike","Geas","Greater Restoration","Hallow","Insect Plague","Legend Lore","Mass Cure Wounds","Mass Cure Wounds","Planar Binding","Raise Dead"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);






}







//DRUIDS
if (cl==4) {
	ss1=level +1;
	ss2=0;
	if (level>2)
		ss2=2;
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level==5) 
		ss3 = 2;
	if (level > 5)
		ss3=3;
	if (level > 6)
		ss4=(level - 6);
	if (level > 8) {
		ss4=3;
		ss5=level-8;
	}


	sp = level + mod[4];		
	sp3=0;
	sp4=0;
	sp5=0;
	if (level <3) {
		sp1 = sp;
		sp2 =0;
	} else if (level <5) {
		x= 	Math.floor(sp * .7);
		sp1 = x;
		sp2 = (sp -x);
	} else if (level < 7) {
		x = Math.ceil(sp * .35);
		y = Math.floor(sp * .35);

		sp1 = x;
		z = sp-x-y;
		sp2 = y;
		sp3 = z;

	} else if (level < 9) {
		x = Math.floor(sp * .28);
		y = Math.floor(sp * .28);
		z = Math.floor(sp * .28);

		sum = sp - x-y-z;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = x;

	} else if (level > 8) {
		x = Math.floor(sp * .21);
		y = Math.ceil(sp * .18);
		z = Math.ceil(sp * .18);
		xx = Math.floor(sp * .21);

		sum = sp - x-y-z-xx;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = xx;
		sp5 = x;


	}
	console.log("Spells known:  "+sp1 +"/ " + sp2+"/ " + sp3 +"/ " + sp4+"/ " + sp5+" / Total = "+sp);


	//cantrips
	x=2;
	if (level >3)
		x=3;
	if (level > 9)
		x=4;

	// bonus cantrip for circle of land
	if (drCircle ==0) 
		x++;

	while (x > 0) {
		tempAr = drCantrip;
		if (Math.random() < 0.66)
			tempAr=["Guidance","Poison Spray","Resistance","Shillelagh","Thorn Whip"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 
		}		
	//put in alphabetical order
	myCantrips.sort();
	
	tempSpells=[];
	
//1st level
	x=sp1;
	while (x > 0) {
		tempAr = dr1;
		if (Math.random() < 0.66)
			tempAr=["Charm Person","Cure Wounds","Cure Wounds","Cure Wounds","Entangle","Fog Cloud","Healing Word","Healing Word","Thunderwave","Thunderwave"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			} 
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//2nd level
	tempSpells=[];
	x=sp2;
		
	while (x > 0) {
		tempAr = dr2;
		if (Math.random() < 0.66) {
			tempAr=["Barkskin","Barkskin","Barkskin","Enhance Ability","Flame Blade", "Flaming Sphere", "Heat Metal","Heat Metal","Hold Person","Lesser Restoration","Moonbeam", "Pass without Trace", "Spike Growth"];
		}
/*
		//add circle spells twice to make them more likely
		if (ciSpells.length > 0) {

			tempAr.unshift(ciSpells[0]);
			tempAr.unshift(ciSpells[1]);
			tempAr.unshift(ciSpells[0]);
			tempAr.unshift(ciSpells[1]);

		}

		*/

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
		
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
		} 
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


//3rd level
	tempSpells=[];
	x=sp3;
	while (x > 0) {
		tempAr = dr3;
		if (Math.random() < 0.66)
			tempAr= ["Call Lightning","Conjure Animals","Dispel Magic","Meld into Stone","Protection from Energy","Sleet Storm","Speak with Plants","Wind Wall"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);




//4th level
	tempSpells=[];
	x=sp4;
	while (x > 0) {
		tempAr = dr4;
		if (Math.random() < 0.5)
			tempAr= ["Blight","Confusion","Conjure Minor Elementals","Conjure Woodland Beings","Control Water","Dominate Beast","Giant Insect","Grasping Vine","Ice Storm","Locate Creature","Polymorph","Stone Shape","Stoneskin","Wall of Fire"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);




//5th level
	tempSpells=[];
	x=sp5;
	while (x > 0) {
		tempAr = dr5;
		if (Math.random() < 0.5)
			tempAr= ["Antilife Shell","Commune with Nature","Conjure Elemental","Contagion","Geas","Greater Restoration","Insect Plague","Mass Cure Wounds","Mass Cure Wounds","Planar Binding","Reincarnate","Tree Stride","Wall of Stone"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

}














//eldritch knight
if (cl==5) {
	ss1=0;
	ss2=0;
	if (level==3)
		ss1=2;
	if (level>3) 
		ss1=3;
	if (level >6) {
		ss1=4;
		ss2=2;
	}
	if (level >9)
		ss2=3;

	// How many spells are in our book?
	sp1=0;
	sp2=0;
	sp=0;
	if (level ==3)
		sp=3;
	if (level>3)
		sp=4;
	if (level == 7) 
		sp=5;
	if (level > 7)
		sp=6;
	if (level ==10)
		sp=7;
	if (level ==7)
		sp2=1;
	if (level > 7) {
		sp2=2;
	}
	if (level > 9) {
		sp2=3;
	}
	sp1 = sp-sp2;
	console.log(sp + "/" + sp1 + "/" + sp2);


	x=0;
	//cantrips
	if (level >2)
		x=2;
	if (level > 9)
		x=3;
	while (x > 0) {
		if (Math.random() < 0.5) {
			tempAr = ["Acid Splash","Blade Ward","Chill Touch","Fire Bolt","Minor Illusion","Poison Spray","Ray of Frost","Shocking Grasp","True Strike"];
		} else
			tempAr = wiCantrip;


		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 
		}		
	//put in alphabetical order
	myCantrips.sort();
	
//1st level
	x=sp1;
//1 of any spell
	if (x>0)	{
		tempAr=wi1;
		if (Math.random() < 0.66) {
			tempAr= ["Color Spray","False Life","Magic Missile","Ray of Sickness","Sleep","Tasha's Hideous Laughter","Thunderwave"];
		} else {
			tempAr= wi1;
		}

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
		tempSpells.push(temp);				
		x--;
		
	}

// limited to evoc / abjuration
	tempAr = [0,1,1,3,18,19,20,22,27,27,29];

	while (x > 0) {
	i = Math.floor(Math.random() * tempAr.length);
	temp = wi1[tempAr[i]];
// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);	
			x--;
			
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//2nd level
	tempSpells=[];
	x=sp2;
//1 of any spell if level 8
	if (level > 7) {
		if (x>0)	{
			tempAr=wi1;
			if (Math.random() < 0.66) {
			tempAr=["Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Flaming Sphere","Hold Person","Invisibility","Mirror Image","Phantasmal Force","Ray of Enfeeblement","Scorching Ray","Suggestion","Web"];

			} else {
				tempAr= wi2;
			}

			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
			tempSpells.push(temp);				
			x--;
			
		}
	}

// limited to evoc / abjuration
	tempAr = [5,7,13,21,28,30,1];

	while (x > 0) {
		i = Math.floor(Math.random() * tempAr.length);
		temp = wi2[tempAr[i]];
		// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
				// add it
				tempSpells.push(temp);	
				x--;
			
		}
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

}









//paladin spells
if (cl==9) {
	ss2=0;
	ss3=0;
	ss1=0;
	if (level==2)
		ss1=2;
	if (level>2)
		ss1=3;
	if (level>4)  {
		ss1=4;
		ss2=2;
	}
	if (level >6)
		ss2=3;
	if (level >8 )
		ss3=2;

	sp = mod[5] + Math.floor(level / 2);
	if (sp <1)
		sp=1;
	if (level <5) {
		sp1=sp;
		sp2=0;
	} else if (level < 9) {
		sp1=Math.ceil(sp / 2);
		sp2=sp-sp1;
	} else {
		sp1=Math.ceil(sp * .35);
		sp2=Math.floor(sp * .35);
		sp3 = sp-sp1-sp2;
	}
	console.log(sp+"/"+sp1+"/"+sp2+"/"+sp3);
	//alert(sp+"/"+sp1+"/"+sp2+"/"+sp3);

	//1st level spells
	tempSpells = [];
	x=sp1;
	while (x > 0) {
		tempAr = pa1;
		if (Math.random() < 0.66) {
			tempAr= ["Command","Cure Wounds","Cure Wounds","Heroism","Searing Smite","Shield of Faith","Thunderous Smite","Thunderous Smite","Wrathful Smite"];
			}

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

	tempSpells = [];
//2nd level
	x=sp2;
	while (x > 0) {
		tempAr = pa2;
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
		// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//3rd level
	tempSpells = [];
	x=sp3;
	while (x > 0) {
		tempAr = pa3;
		if (Math.random() < 0.66) {
			tempAr= ["Aura of Vitality","Aura of Vitality","Blinding Smite","Blinding Smite","Crusader's Mantle","Dispel Magic","Elemental Weapon"];
			}


		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
		// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);








}







//ranger spells
if (cl==10) {
	if (level==2)
		ss1=2;
	if (level>2)
		ss1=3;
	if (level > 4) {
		ss1=4;
		ss2=2;
	}
	if (level > 6) {
		ss2=3;
	}
	if (level > 8) {
		ss3=2;
	}


	sp=Math.ceil(level / 2) + 1;
	if (level ==1) {
		sp=0;
	}
	if (level <5) {
		sp1=sp;
		sp2=0;
		sp3=0;
	} else if (level < 9) {
		sp1=Math.ceil(sp / 2);
		sp2=sp-sp1;
		sp3=0;
	} else {
		sp1=Math.ceil(sp * .35);
		sp2=Math.floor(sp * .35);
		sp3 = sp-sp1-sp2;
	}
	console.log(sp+"/"+sp1+"/"+sp2+"/"+sp3);
	//alert(sp+"/"+sp1+"/"+sp2+"/"+sp3);





	//1st level spells
	x=0;
	x=sp1;
	tempSpells=[];
	while (x > 0) {
		tempAr = ra1;
		if (Math.random() < 0.66) {
			tempAr= ["Cure Wounds","Cure Wounds","Ensnaring Strike","Hail of Thorns","Hunter's Mark"];

			}

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
	// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

	// 2nd
	tempSpells=[];
	x=0;
	x=sp2;

	while (x > 0) {
		tempAr = ra2;
		if (Math.random() < 0.66)
			tempAr= ["Cordon of Arrows","Cordon of Arrows","Find Traps","Pass without Trace","Protection from Poison","Silence","Spike Growth"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
		// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



	// 3rd
	tempSpells=[];
	x=0;
	x=sp3;

	while (x > 0) {
		tempAr = ra3;
		if (Math.random() < 0.66)
			tempAr= ["Conjure Animals","Conjure Barrage","Lightning Arrow","Protection from Energy","Wind Wall"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
		// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

}






//arcane trickster
if (cl==12) {
	ss1=0;
	ss2=0;
	if (level==3)
		ss1=2;
	if (level>3) 
		ss1=3;
	if (level >6) {
		ss1=4;
		ss2=2;
	}
	if (level >9)
		ss2=3;

	// How many spells are in our book?
	sp1=0;
	sp2=0;
	sp=0;
	if (level ==3)
		sp=3;
	if (level>3)
		sp=4;
	if (level == 7) 
		sp=5;
	if (level > 7)
		sp=6;
	if (level ==10)
		sp=7;
	if (level > 6) {
		sp2=2;
	}
	if (level > 9) {
		sp2=3;
	}
	sp1 = sp-sp2;
	console.log(sp + "/" + sp1 + "/" + sp2);
	
	x=0;
	//3 cantrips (always mage hand)
	if (level >2) {
		x=2;
		myCantrips.push(wiCantrip[7]);
		}
	if (level > 9)
		x=3;

	while (x > 0) {
		if (Math.random() < 0.5) {
			tempAr = ["Acid Splash","Blade Ward","Chill Touch","Fire Bolt","Minor Illusion","Poison Spray","Ray of Frost","Shocking Grasp","True Strike"];
		} else
			tempAr = wiCantrip;


		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 
		}		
	//put in alphabetical order
	myCantrips.sort();
	
//1st level
	x=sp1;
//1 of any spell
	if (x>0)	{
		tempAr=wi1;
		if (Math.random() < 0.66)
			tempAr= ["Burning Hands","Burning Hands","Chromatic Orb","False Life","Mage Armor","Magic Missile","Magic Missile","Ray of Sickness","Shield","Sleep","Tasha's Hideous Laughter","Tasha's Hideous Laughter","Thunderwave","Thunderwave","Thunderwave","Witch Bolt"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
		tempSpells.push(temp);				
		x--;
	}

// others limited to ench/ill
	tempAr = [4,7,15,23,24,25];

	while (x > 0) {
	i = Math.floor(Math.random() * tempAr.length);
	temp = wi1[tempAr[i]];
// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//2nd level
	tempSpells=[];
	x=sp2;
//1 of any spell if level 8
	if (level > 7) {
		if (x>0)	{
			tempAr=wi2;
			if (Math.random() < 0.66) {
			tempAr=["Blindness/Deafness","Cloud of Daggers","Flaming Sphere","Invisibility","Melf's Acid Arrow","Ray of Enfeeblement","Scorching Ray","Shatter","Web"];
			} 

			temp = tempAr[Math.floor(Math.random() * tempAr.length)];
			tempSpells.push(temp);				
			x--;
			
		}
	}

// limited to 
	tempAr = [3,15,15,15,22,24,25,19,6,14,32,32];

	while (x > 0) {
		i = Math.floor(Math.random() * tempAr.length);
		temp = wi2[tempAr[i]];
		// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
				// add it
				tempSpells.push(temp);	
				x--;
			
		}
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


}







//SORCERER
if (cl==13) {
	ss1=level +1;
	ss2=0;
	if (level>2)
		ss2=2;
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level==5) 
		ss3 = 2;
	if (level > 5)
		ss3=3;
	if (level > 6)
		ss4=(level - 6);
	if (level > 8) {
		ss4=3;
		ss5=level-8;
	}



	sp = level + 1;		


	sp3=0;
	sp4=0;
	sp5=0;
	if (level <3) {
		sp1 = sp;
		sp2 =0;
	} else if (level <5) {
		x= 	Math.floor(sp * .7);
		sp1 = x;
		sp2 = (sp -x);
	} else if (level < 7) {
		x = Math.ceil(sp * .35);
		y = Math.floor(sp * .35);

		sp1 = x;
		z = sp-x-y;
		sp2 = y;
		sp3 = z;

	} else if (level < 9) {
		x = Math.floor(sp * .28);
		y = Math.floor(sp * .28);
		z = Math.floor(sp * .28);

		sum = sp - x-y-z;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = x;

	} else if (level > 8) {
		x = Math.floor(sp * .21);
		y = Math.ceil(sp * .18);
		z = Math.ceil(sp * .18);
		xx = Math.floor(sp * .21);

		sum = sp - x-y-z-xx;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = xx;
		sp5 = x;


	}
	console.log("Spells known:  "+sp1 +"/ " + sp2+"/ " + sp3 +"/ " + sp4+"/ " + sp5+" / Total = "+sp);




	//cantrips
	x=4;
	if (level >3)
		x=5;
	if (level >9)
		x=6;

	while (x > 0) {
		tempAr = soCantrip;
		if (Math.random() < 0.66)
			tempAr=["Acid Splash","Blade Ward","Chill Touch","Fire Bolt","Minor Illusion","Poison Spray","Ray of Frost","Shocking Grasp","True Strike"];
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 
		}		
	//put in alphabetical order
	myCantrips.sort();
	
	tempSpells=[];


//level 1
	x=sp1;
	tempSpells=[];
	while (x > 0) {
		tempAr = so1;
		if (Math.random() < 0.66)
			tempAr=["Burning Hands","Charm Person","Chromatic Orb","Color Spray","False Life","Mage Armor","Magic Missile","Ray of Sickness","Shield","Sleep","Thunderwave","Witch Bolt"];


		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//2nd level
	tempSpells=[];
	x=sp2;
	
	while (x > 0) {
		tempAr = so2;
		if (Math.random() < 0.66)
			tempAr=["Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Enhance Ability","Enlarge/Reduce","Hold Person","Invisibility","Mirror Image","Phantasmal Force","Scorching Ray","Shatter","Suggestion","Web"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//3rd level
	tempSpells=[];
	x=sp3;
	while (x > 0) {
		tempAr = so3;
		if (Math.random() < 0.5)
			tempAr=["Blink","Counterspell","Dispel Magic","Fear","Fireball","Fireball","Fly","Gaseous Form","Haste","Hypnotic Pattern","Lightning Bolt","Lightning Bolt","Lightning Bolt","Major Image","Protection from Energy","Slow","Stinking Cloud"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//4th level
	tempSpells=[];
	x=sp4;
	while (x > 0) {
		tempAr = so4;

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//5th level
	tempSpells=[];
	x=sp5;
	while (x > 0) {
		tempAr = so5;
		
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

}










//WARLOCKS
if (cl==14) {
	ss1=1;
	if (level>1)
		ss1=2;
	sp=level+1;
	if (level > 8)
		sp=10;

	sp1=2;
	sp2=0;
	sp3=0;
	sp4=0;
	sp5=0;

	if (level <3) {
		sp1 = sp;
		sp2 =0;
	} else if (level <5) {
		x= 	Math.floor(sp * .7);
		sp1 = x;
		sp2 = (sp -x);
		
	} else if (level < 7) {
		x = Math.ceil(sp * .35);
		y = Math.floor(sp * .35);
		sp1 = x;
		sp2 = y;
		sp3 = sp-x-y;
	} else if (level < 9) {
		x = Math.floor(sp * .28);
		y = Math.floor(sp * .28);
		z = Math.floor(sp * .28);

		sum = sp - x-y-z;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = x;

	} else {
		x = Math.floor(sp * .21);
		y = Math.ceil(sp * .18);
		z = Math.ceil(sp * .18);
		xx = Math.floor(sp * .21);

		sum = sp - x-y-z-xx;
		sp1 = sum;
		sp2 = y;
		sp3 = z;
		sp4 = xx;
		sp5 = x;

	}
	console.log("Spells known:  "+sp1 +"/ " + sp2+"/ " + sp3 +"/ " + sp4+"/ " + sp5+" / Total = "+sp);




	//cantrips
	x=2;
	if (level >3)
		x=3;
	if (level >9)
		x=4;

	if (eblast==true) {
		myCantrips.push("Eldritch Blast")
		x--;
	}

	while (x > 0) {
		tempAr = waCantrip;

		if (Math.random() < 0.66)
			tempAr= ["Blade Ward","Chill Touch","Eldritch Blast","Eldritch Blast","Minor Illusion","Poison Spray","True Strike"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			// add cantrip
			myCantrips.push(temp);							
			x--;
			} 

		}		
	//put in alphabetical order
	myCantrips.sort();


	//tome spells
	if (tome == true) {
		z=3;
		while (z> 0) {
			y=Math.floor(Math.random() * 5);
			if (y==0) {
				
				temp = baCantrip[Math.floor(Math.random() * baCantrip.length)];
			// check if we already know spell
					if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
				// add cantrip
						waTome.push(temp);				
						z--;
						}
			}
			if (y==1) {
			
				temp = clCantrip[Math.floor(Math.random() * clCantrip.length)];
				// check if we already know spell
						if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
					// add cantrip
							waTome.push(temp);				
							z--;
							}
					
					
			}
				if (y==2) {
					temp = drCantrip[Math.floor(Math.random() * drCantrip.length)];
				// check if we already know spell
						if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1)  && (raceSpells.indexOf(temp) == -1)) {
					// add cantrip
							waTome.push(temp);				
							z--;
							}
					
					
				}
				if (y==3) {
					temp = soCantrip[Math.floor(Math.random() * soCantrip.length)];
				// check if we already know spell
						if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
					// add cantrip
							waTome.push(temp);				
							z--;
							}
					
				}
				if (y==4) {
					temp = wiCantrip[Math.floor(Math.random() * wiCantrip.length)];
				// check if we already know spell
						if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
					// add cantrip
							waTome.push(temp);				
							z--;
							}
					
					
				}
		}
		waTome.sort();
		
		// if you have invocation for pact of tome
		if (abOutput.indexOf("Ancient Secrets") > -1) {

			xx=2;
			while (xx>0) {
				temp = tomeRituals[Math.floor(Math.random() * tomeRituals.length)];
				if ((mySpells.indexOf(temp) == -1) && (waTomeRituals.indexOf(temp) == -1)) {
			// add ritual
					waTomeRituals.push(temp);				
					xx--;
				}
			}

			xx=0;	
			if (upgradeUncommon() == true) {
				xx += Math.floor((Math.random() * 2) +1);
			}
			if (upgradeRare() == true) {
				xx += Math.floor((Math.random() * 2) +1);
			}
			console.log("Tome has " + (2+xx) + " rituals");

			if (level > 3) {
				tomeRituals.push("Magic Mouth");
				tomeRituals.push("Magic Mouth");
				tomeRituals.push("Silence");
				tomeRituals.push("Augury");
				tomeRituals.push("Beast Sense");
				tomeRituals.push("Gentle Repose");
				tomeRituals.push("Locate Animals or Plants");
				tomeRituals.push("Animal Messenger");
				tomeRituals.push("Animal Messenger");
			}
			if (level > 5) {
				tomeRituals.push("Meld into Stone");
				tomeRituals.push("Feign Death");
				tomeRituals.push("Meld into Stone");
				tomeRituals.push("Leomund’s Tiny Hut");
				tomeRituals.push("Leomund’s Tiny Hut");
				tomeRituals.push("Water Breathing");
				tomeRituals.push("Phantom Steed");
				tomeRituals.push("Water Walk");
				tomeRituals.push("Water Breathing");
				tomeRituals.push("Phantom Steed");
				tomeRituals.push("Water Walk");

			}
			if (level > 7) {
				tomeRituals.push("Divination");
				
			}
			if (level > 9) {
				tomeRituals.push("Contact Other Plane");
				tomeRituals.push("Commune");
				tomeRituals.push("Contact Other Plane");
				tomeRituals.push("Commune with Nature");
				tomeRituals.push("Rary's Telepathic Bond");
			}

			while (xx>0) {
				temp = tomeRituals[Math.floor(Math.random() * tomeRituals.length)];
				if ((mySpells.indexOf(temp) == -1) && (waTomeRituals.indexOf(temp) == -1)) {
			// add ritual
					waTomeRituals.push(temp);				
					xx--;
				}
			}
		}
		waTomeRituals.sort();
		
	}
	

	//1st
	tempSpells=[];
	x=sp1;
	while (x > 0) {
		tempAr = wa1;
		if (Math.random() < 0.66)
			tempAr=["Armor of Agathys","Arms of Hadar","Charm Person","Hellish Rebuke","Hex","Witch Bolt"];

		tempAr = tempAr.concat(patronSpells1);
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];

	// check if we already know spell
			if (tempSpells.indexOf(temp) == -1) {
				tempSpells.push(temp);				
				x--;
			}
	}
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);


	//2nd level
	tempSpells=[];
	x=sp2;
	
	while (x > 0) {
	tempAr = wa2;

	if (Math.random() < 0.66)
		tempAr=["Cloud of Daggers","Crown of Madness","Hold Person","Invisibility","Mirror Image","Misty Step","Ray of Enfeeblement","Shatter","Suggestion"];

	tempAr = tempAr.concat(patronSpells2);
	temp = tempAr[Math.floor(Math.random() * tempAr.length)];

// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
		}
	}
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);

//3rd level
	tempSpells=[];
	x=sp3;
	while (x > 0) {
		tempAr = wa3;
		if (Math.random() < 0.66)
			tempAr=["Counterspell","Dispel Magic","Fear","Fear","Fly","Gaseous Form","Hunger of Hadar","Hunger of Hadar","Hypnotic Pattern","Magic Circle","Major Image","Vampiric Touch","Vampiric Touch"];

		tempAr = tempAr.concat(patronSpells3);
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





//4th
	tempSpells=[];
	x=sp4;
	while (x > 0) {
		tempAr = wa4;
		if (Math.random() < 0.5)
			tempAr=["Banishment","Blight","Dimension Door"];

		tempAr = tempAr.concat(patronSpells4);
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);




//5th
	tempSpells=[];
	x=sp5;
	while (x > 0) {
		tempAr = wa5;
		tempAr = tempAr.concat(patronSpells5);
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);
}







//wizards
if (cl==15) {
	ss1=level +1;
	ss2=0;
	if (level>2)
		ss2=2;
	if (level>3) {
		ss1=4;
		ss2=3;
	}
	if (level==5) 
		ss3 = 2;
	if (level > 5)
		ss3=3;
	if (level > 6)
		ss4=(level - 6);
	if (level > 8) {
		ss4=3;
		ss5=level-8;
	}



	// How many spells are in our book?
	sp1=6;
	sp2=0;
	sp=mod[3] + level;
	

	// 2nd level
	if (level >1)
		sp1 += 2;

	// 3rd and 4th levels add more 2nd level spells
	if (level >2) 
		sp2 += ((level-2) * 2);

	if (level >4) {
		sp2=4;
		sp3=(level-4) *2;
	} 
	if (level >6) {
		sp3=4;
		sp4=(level-6) * 2;
	} 
	if (level >8) {
		sp4=4;
		sp5=(level-8) * 2;
	} 
	console.log("Spellbook:   "+sp1 +"/ " + sp2+"/ " + sp3 +"/ " + sp4+"/ " + sp5+" / Total = "+sp);





	
	wiz3=0;
	wiz2=0;
//how many spells do we have memorized?

	if (level > 8) {
		x = Math.floor(sp * .21);
		y = Math.ceil(sp * .18);
		z = Math.ceil(sp * .18);
		xx = Math.floor(sp * .21);

		sum = sp - x-y-z-xx;
		wiz1 = sum;
		wiz2 = y;
		wiz3 = z;
		wiz4 = xx;
		wiz5 = x;
	} else if (level > 6) {
		x = Math.floor(sp * .28);
		y = Math.floor(sp * .28);
		z = Math.floor(sp * .28);
		sum = sp - x-y-z;
		wiz1 = sum;
		wiz2 = y;
		wiz3 = z;
		wiz4 = x;

	} else if (level >4) {
		wiz1 = Math.ceil(sp * .35);
		wiz2 = Math.floor(sp * .35);
		wiz3= sp-wiz1-wiz2;

		
	} else if (level > 2) {
		wiz1 = Math.floor(sp * .7);
		wiz2 = sp - wiz1;
	} else {
		wiz1=sp;
		wiz2=0;
	}

	//beware the infinite loops for wizards with 18 intelligence!  You can't memorize more spells than are in your book.
	while (wiz5 > sp5) {
		wiz5--;
		wiz4++;
	}
	while (wiz4 > sp4) {
		wiz4--;
		wiz3++;
	}
	while (wiz3 > sp3) {
		wiz3--;
		wiz2++;
	}
	while (wiz2 > sp2) {
		wiz2--;
		wiz1++;
	}

	console.log("memorized:   ("+wiz1+"/ "+wiz2+"/ "+wiz3 +"/ "+wiz4 +"/ "+wiz5 + " --- total ="+sp+")");

	//cantrips
	x=3;
	if (level >3)
		x=4;
	if (level >9)
		x=5;

	// add minor illusion for illusion school, unless you already know it
	if (wiSchool == 5) {
		temp = "Minor Illusion";
		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			myCantrips.push(temp);				
			} 
		}		
	
	while (x > 0) {
		if (Math.random() < 0.5) {
			tempAr = ["Acid Splash","Blade Ward","Chill Touch","Fire Bolt","Minor Illusion","Poison Spray","Ray of Frost","Shocking Grasp","True Strike"];
		} else
			tempAr = wiCantrip;


		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell


		if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
			myCantrips.push(temp);				
			x--;
	
		}		
	//put in alphabetical order
	}
	
	myCantrips.sort();
	


//1st level
	x=sp1;
	while (x > 0) {
		tempAr=wi1;
		if (Math.random() < 0.66)
			tempAr= ["Burning Hands","Chromatic Orb","Color Spray","False Life","Mage Armor","Magic Missile","Ray of Sickness","Shield","Sleep","Tasha's Hideous Laughter","Thunderwave","Witch Bolt"];

		//this seems to give a 2nd lvl wizard a familiar around 30-50% of the time		
		if (Math.random() < 0.4) 
			tempAr.push("Find Familiar");
	
		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
		}	
	for (x=0;x < wiz1;) {
		temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
		// check if we already know spell.  don't add find familiar since it's a rarely used ritual
		if ((wiz1Prepared.indexOf(temp) == -1) && (temp != "Find Familiar")) {
	// add it
			wiz1Prepared.push(temp);				
			x++;
		}	
	}
	wiz1Prepared.sort();
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





//2nd level
	x=sp2;
	tempSpells=[];
	while (x > 0) {
		tempAr = wi2;
		if (Math.random() < 0.66)
			tempAr=["Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Flaming Sphere","Hold Person","Invisibility","Melf's Acid Arrow","Mirror Image","Phantasmal Force","Ray of Enfeeblement","Scorching Ray","Shatter","Suggestion","Web"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];
// check if we already know spell
		if (tempSpells.indexOf(temp) > -1) {
			} 
		else {
	// add it
			tempSpells.push(temp);				
			x--;
			}
			
		}	
	for (x=0;x < wiz2;) {
		temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];

// check if we already know spell
		if (wiz2Prepared.indexOf(temp) == -1) {
	// add it
			wiz2Prepared.push(temp);				
			x++;
		}	
	}
	wiz2Prepared.sort();
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





//3rd level
	tempSpells=[];

	//animate dead for free if you're a level 6 necromancer
	if (abOutput.indexOf("Undead Thralls") > -1) {
		tempSpells.push("Animate Dead");

	}

	x=sp3;
	while (x > 0) {
		tempAr = wi3;
		if (Math.random() < 0.66)
			tempAr=["Animate Dead","Bestow Curse","Blink","Counterspell","Dispel Magic","Fear","Fireball","Fireball","Fly","Gaseous Form","Glyph of Warding","Haste","Hypnotic Pattern","Leomund’s Tiny Hut","Lightning Bolt","Lightning Bolt","Lightning Bolt","Magic Circle","Major Image","Protection from Energy","Slow","Stinking Cloud","Vampiric Touch"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	for (x=0;x < wiz3;) {
		temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];


		// extra chance of animate dead for necromancer
		if ((abOutput.indexOf("Undead Thralls") > -1) && (Math.random() > 0.66) ) {
			temp="Animate Dead";
		}

// check if we already know spell
		if (wiz3Prepared.indexOf(temp) == -1) {
	// add it
			wiz3Prepared.push(temp);				
			x++;
		}	
	}
	wiz3Prepared.sort();
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);







//4th
	tempSpells=[];

	//poly free if you're a level 10 transmuter
	if (abOutput.indexOf("Shapechanger") > -1) {
		tempSpells.push("Polymorph");
	}
	
	x=sp4;
	while (x > 0) {
		tempAr = wi4;
		if (Math.random() < 0.5)
			tempAr=["Banishment","Blight","Confusion","Conjure Minor Elementals","Dimension Door","Evard's Black Tentacles","Fire Shield","Greater Invisibility","Ice Storm","Mordenkainen’s Faithful Hound","Otiluke’s Resilient Sphere","Phantasmal Killer","Polymorph","Stoneskin","Wall of Fire"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];



		
// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	for (x=0;x < wiz4;) {
		temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];

		// extra chance of poly for lvl 10 transmuter
		if ((abOutput.indexOf("Shapechanger") > -1) && (Math.random() > 0.66) ) {
			temp="Polymorph";
		}

// check if we already know spell
		if (wiz4Prepared.indexOf(temp) == -1) {
	// add it
			wiz4Prepared.push(temp);				
			x++;
		}	
	}
	wiz4Prepared.sort();
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);



//5th
	tempSpells=[];


	x=sp5;
	while (x > 0) {
		tempAr = wi5;
		if (Math.random() < 0.5)
			tempAr=["Animate Objects","Bigby’s Hand","CloudkilI","Cone of Cold","Conjure Elemental","Dominate Person","Geas","Hold Monster","Legend Lore","Mislead","Passwall","Planar Binding","Seeming","Telekinesis","Teleportation Circle","Wall of Force","Wall of Stone"];

		temp = tempAr[Math.floor(Math.random() * tempAr.length)];


// check if we already know spell
		if (tempSpells.indexOf(temp) == -1) {
			tempSpells.push(temp);				
			x--;
			}
			
	}	
	for (x=0;x < wiz5;) {
		temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];

// check if we already know spell
		if (wiz5Prepared.indexOf(temp) == -1) {
	// add it
			wiz5Prepared.push(temp);				
			x++;
		}	
	}
	wiz5Prepared.sort();
	tempSpells.sort();
	mySpells = mySpells.concat(tempSpells);





















	// polymorph automatically in book for 10th level transmutation wizards
}

























if (myCantrips.length > 0 ) {
	if (mySpells.length > 0) {
		cOutput = " &nbsp; &nbsp; <b>Cantrip";	
	} else {
		cOutput = "<b>Cantrip";	
	}
	
	if (myCantrips.length > 1)
		cOutput += "s";

	cOutput += ":</b> ";

	// list all cantrips and put commas where needed
	for (x=0;x < myCantrips.length;x++) {
		if (x==0) {
			cOutput += myCantrips[x];
		} else {
			cOutput += ", " + myCantrips[x];
		}
	}
	//if way of shadow show spell save
	if (mySpells.length == 0) {
		cOutput += " &nbsp; &nbsp; (Spell save DC:</b>  " + (8 + prof + mod[spellAbility]) + ") ";
	}


}




if (cl==15)
	spOutput += "<b>Spellbook:</b>  ";

if ((cl==4) || (cl==3))
	spOutput += "<b>Current spells:</b>  ";

if ((cl==9) && (mySpells.length >0))
	spOutput += "<b>Current spells:</b>  ";


if (mySpells.length > 0 && cl != 15 && cl != 4 && cl != 3 && cl != 9)
	spOutput += "<b>Spells known:</b>  ";



// list all spells and put commas where needed
for (x=0;x < mySpells.length;x++) {
	if (x==0) {
		spOutput += mySpells[x];
	} else {
		spOutput += ", " + mySpells[x];
	}
}

if (cl==15) {
	spOutput += "<br><b>Current spells:</b>  ";

	for (x=0;x < wiz1Prepared.length;x++) {
		if (x==0) {
			spOutput += wiz1Prepared[x];
		} else {
			spOutput += ", " + wiz1Prepared[x];
		}
	}
	for (x=0;x < wiz2Prepared.length;x++) {
		spOutput += ", " + wiz2Prepared[x];
	}
	for (x=0;x < wiz3Prepared.length;x++) {
		spOutput += ", " + wiz3Prepared[x];
	}
	for (x=0;x < wiz4Prepared.length;x++) {
		spOutput += ", " + wiz4Prepared[x];
	}
	for (x=0;x < wiz5Prepared.length;x++) {
		spOutput += ", " + wiz5Prepared[x];
	}

}
spOutput += cOutput;

if (ciSpells.length > 0) {
	spOutput += "<br><b>Druid Circle Spells:</b> "; 

	for (x=0;x < ciSpells.length;x++) {
		if (x==0) {
			spOutput += ciSpells[x];
		} else {
			spOutput += ", " + ciSpells[x];
		}
	}
}

if (oaSpells.length > 0) {
	spOutput += "<br><b>Paladin Oath Spells:</b> "; 

	for (x=0;x < oaSpells.length;x++) {
		if (x==0) {
			spOutput += oaSpells[x];
		} else {
			spOutput += ", " + oaSpells[x];
		}
	}
}



if (loSpells.length > 0) {
	spOutput += "<br><b>Bard Magical Secret Spells:</b> "; 

	for (x=0;x < loSpells.length;x++) {
		if (x==0) {
			spOutput += loSpells[x];
		} else {
			spOutput += ", " + loSpells[x];
		}
	}
}





if (doSpells.length > 0) {
	spOutput += "<br><b>Cleric Domain Spells:</b> "; 

	for (x=0;x < doSpells.length;x++) {
		if (x==0) {
			spOutput += doSpells[x];
		} else {
			spOutput += ", " + doSpells[x];
		}
	}
}


if (waTome.length > 0) {
	spOutput += "<br><b>Warlock Tome Cantrips:</b> "; 
	
	for (x=0;x < waTome.length;x++) {
		if (x==0) {
			spOutput += waTome[x];
		} else {
			spOutput += ", " + waTome[x];

		}
	}

	if (waTomeRituals.length > 0) {

		spOutput += " &nbsp; <b>Tome Rituals:</b> "
		for (x=0;x < waTomeRituals.length;x++) {
			if (x==0) {
				spOutput += waTomeRituals[x];
			} else {
				spOutput += ", " + waTomeRituals[x];

			}
		}


	}
}



if (waSpells.length > 0) {
	spOutput += "<br><b>Spells Given by Invocations:</b> "; 

	for (x=0;x < waSpells.length;x++) {
		if (x==0) {
			spOutput += waSpells[x];
		} else {
			spOutput += ", " + waSpells[x];
		}
	}
}


if (ss1 > 0) {

	spOutput += "<br><b>Spell slots:</b> " + ss1;
	if (cl != 14)  {
		spOutput += " first level";
	if (ss2 > 0) 
		spOutput += ", " + ss2+ " second level";
	if (ss3 > 0) 
		spOutput += ", " + ss3+ " third level";
	if (ss4 > 0) 
		spOutput += ", " + ss4+ " fourth level";
	if (ss5 > 0) 
		spOutput += ", " + ss5+ " fifth level";
	}
	if (cl==14) {
		if (level < 3)
			spOutput += " first level";
		if ((level > 2) && (level <5))
			spOutput += " second level";
		if (level > 8) {
			spOutput += " fifth level";
		} else if (level > 6) {
			spOutput += " fourth level";
		} else if (level > 4) {
			spOutput += " third level";
		}
	}
	spOutput += " &nbsp; &nbsp; Spell save DC:  " + (8 + prof + mod[spellAbility]) + "  &nbsp; &nbsp; Spell Attack Modifier:  " + showPlus (prof + mod[spellAbility]);


	if ((cl==3) || (cl==4) || (cl==15) || (cl==9))
		spOutput += " &nbsp; &nbsp;  Can prepare " + sp + " spells";
	

	if ((cl ==2) || (cl==5) || (cl==10) || (cl==12) || (cl==13) || (cl==14))
		spOutput += " &nbsp; &nbsp;  Knows " + sp + " spells";

	
}



if (raceSpells.length > 0) {
	if (spOutput.length > 0) {
		spOutput += "<br>";
	}
	spOutput += "<b>Race magic";
//	if (raceSpells.length > 1)
//		spOutput += "s"
	spOutput += ":</b> "; 
	for (x=0;x < raceSpells.length;x++) {
		if (x==0) {
			spOutput += raceSpells[x];
		} else {
			spOutput += ", " + raceSpells[x];
		}
	}
//alert ("raceSpellAbility = " + raceSpellAbility + " mod[x]="+mod[raceSpellAbility]);
spOutput += " &nbsp; &nbsp; Spell save DC:  " + (8 + prof + mod[raceSpellAbility]) + " &nbsp; &nbsp;  Spell Attack Modifier:  " + showPlus (prof + mod[raceSpellAbility]);
	
}









//////////// @WEAPONS and ARMOUR  EQUIPMENT

switch (cl) {
	case 1:
		// no heavy weapons for halflings
		if (size=="Small") {
			i = pickWeap([11,14,19]);
			myWp.push(weapons[i]);
		} else if (Math.random() > 0.5) {
				i=20;
				myWp.push(weapons[20]);
		} else {
			i = pickWeap([11,12,19]);
			myWp.push(weapons[i]);
		}

		bool=false;
		if ((i != 12) && (i != 20)) {
			bool=true;
		}

		//backup
		if ((Math.random() > 0.75) && (level > 1)) {
			myWp.push(weapons[3]);
			wpNum[3] = Math.floor(Math.random() * 3) +2;
		} else if (level >1) {
			y = pickWeap([11,14,15,19]);
			while (i==y) {
				y = pickWeap([11,14,15,19]);
			}
			myWp.push(weapons[y]);
		}
		
		if ((mod[1] > -1) && (level>1)) {
			// give a bow to those with decent dex score 
			if (size=="Small") {
				myWp.push(weapons[8]);
			} else {	
				myWp.push(weapons[9]);
			}
		} else {
			myWp.push(weapons[4]);
			wpNum[4] = 3;
			if (level>1) {
				wpNum[4] = Math.floor(Math.random() * 5) +3;
			}
		}

		// sometimes medium armor
		if ((upgradeRare() == true) && (mod[2] <  5)) {
			myAr.push(armors[8]);
		} else 	if ((upgradeUncommon() == true) && (mod[2] <  4)) {
			myAr.push(armors[7]);
		} else 	if ((upgrade() == true) && (mod[2] <  3)) {
			myAr.push(armors[5]);
		}


		//sometimes a shield
		if ((bool==true) && (upgrade() == true))
			myAr.push(armors[0]);


		break;
	case 2:

		if (mod[1] > mod[0])
			myWp.push(weapons[16]);				
		else
			myWp.push(weapons[14]);				


		if (elfBow() == false) {
			if (level > 1) {
				if ((classtxt.indexOf("Valor") > -1) && (size != "Small"))	{
					if ( Math.random() > 0.5) 
						myWp.push(weapons[6]);
					else 
						myWp.push(weapons[9]);
				} else {
					x = Math.random();
					if (x > 0.5) {
						myWp.push(weapons[5]);
					} else {
						myWp.push(weapons[8]);
					}
				}
			}
		}


		myWp.push(weapons[0]);
		if (upgrade() == true) {
			wpNum[0] =  Math.floor(Math.random() * 3) +3;
		} 

		if (upgradeUncommon() == true)
			myWp.push(weapons[7]);


		if (classtxt.indexOf("Valor") > -1)	{
			myAr.push(armors[0]);
			if (upgradeUncommon() == true) {
				myAr.push(armors[7]);
			} else {
				myAr.push(armors[5]);
			}
		} else if ((racetxt == "Mountain Dwarf") && (level > 1)) {
			if (upgradeUncommon() == true) {
				myAr.push(armors[7]);
			} else {
				myAr.push(armors[5]);
			}
		} else if ((upgrade() == true) && (level > 1)) {
			myAr.push(armors[3]);
		} else {
			myAr.push(armors[2]);
		}

		if (Math.random() < 0.5) 
			eqOutput += ", Diplomat's pack";
		else
			eqOutput += ", Entertainer's pack";

		eqOutput += ", " + myInstrument;
		break;
	case 3:
		// use chain mail if your  domain lets you
		if (((clDomain == 1) || (clDomain == 3) || (clDomain == 4) || (clDomain == 6)) && (abil[0] >12)) {
			// only give heavy armor if you have the STR
		
			if ((upgradeUncommon() == true) && (abil[0] > 14) && (level > 1)) {
				if (upgradeUncommon() == true) {
					myAr.push(armors[12]);	
				} else {
					myAr.push(armors[11]);	
				}
			} else {
				myAr.push(armors[10]);
			} 
	 	
		 //scale if you are a mtn dwarf
		} else if (racetxt == "Mountain Dwarf") {
			if ((upgradeUncommon() == true) && (level>1)) {
				myAr.push(armors[7]);
			} else {
				myAr.push(armors[6]);
			}
		} else {
		//leather if nothing else
			if (upgrade() == true) {
				myAr.push(armors[3]);
			} else {
				myAr.push(armors[2]);
			}
		}
		
		if ((elfWeapon()==false) && (dwarfWeapon()==false) && (level > 1)) {
			// pick martial weapon for tempest or war cleric
			if ((clDomain==4) || (clDomain==6)) {
				if (abil[0] > abil[1]) {
					x = pickWeap([11,14,15,19]);
					myWp.push(weapons[x]);
				} else {
					x = pickWeap([17,18]);
					myWp.push(weapons[x]);
				}
			} else {
				myWp.push(weapons[1]);	
				x = pickWeap([2,3,22]);
				myWp.push(weapons[x]);
			}
		} else {
			myWp.push(weapons[1]);	
		}

		if (level == 1) {
			if (Math.random() > 0.5) {
				x = pickWeap([2,3,22]);
				myWp.push(weapons[x]);
			} else {
				myWp.push(weapons[5]);
			}
		}

		if (elfBow() == false) {
			if (level > 1) {
				if  (((clDomain==4) || (clDomain==6)) && (size != "Small")) {
					if (Math.random() > 0.5) {
						myWp.push(weapons[6]);

					} else {
						myWp.push(weapons[9]); 

					}
				} else 
					myWp.push(weapons[5]);
			} 
		}

		myAr.push(armors[0]);
		if (eqOutput.indexOf("Holy symbol") == -1) 
			eqOutput += ", Holy symbol";

		break;






//druid
	case 4:

		if (elfWeapon() == false && dwarfWeapon() == false) {
			if (mod[0] < mod[1]) {
				myWp.push(weapons[17]);
			} else {
				x = pickWeap([1,2,3,22]);
				myWp.push(weapons[x]);
			}
		}

			//sometimes make sure you have a staff to use with your shillelagh cantrip!
		if ((Math.random() > 0.5 ) && (myCantrips.indexOf("Shillelagh") > -1) && (x != 22)) {
			myWp.push(weapons[22]);
		}
		
		if (elfBow() == false) {
			if (level > 1) {
				if (mod[1] > mod[0]) {
					if (Math.random() > 0.3) {
						myWp.push(weapons[24]);
						}
					else  {
						myWp.push(weapons[21]);
						wpNum[21] =  Math.floor(Math.random() * 4) +8;
						if (upgrade() == true) {
							myWp.push(weapons[24]);
						}


					}
					
				} else {
					myWp.push(weapons[4]);
					wpNum[4] =  Math.floor(Math.random() * 3) +3;
		
				}

			} else {
				if (Math.random() > 0.3) {
					myWp.push(weapons[24]);
					}
				else  {
					myWp.push(weapons[21]);
					wpNum[21] = 10;
				}



			}
		}

		if (upgrade() == true ) {
			myAr.push(armors[0]);
		}

		if ((upgrade() == true) && (mod[1] < 3)) {
			myAr.push(armors[4]);
		} else {
			myAr.push(armors[2]);
		}
		eqOutput += ", Explorer's pack, Druidic focus";
		break;
	case 5:
		warriorArmor();
		z=Math.floor((Math.random() * 2)); 

		// 0=great weapon, 1=single hand weapon, 2=2 weapons
		if (fiStyle ==3)
			z=0;

		if ((fiStyle ==2) || (fiStyle ==4))
			z=1;

		if (fiStyle ==5)
			z=2;
		console.log("weapon choice:  " + z + " / fighting style: " + fiStyle);
		if ((z==0) && (size != "Small")) {
			x = pickWeap([13,20,12]);
			myWp.push(weapons[x]);
		}

		if ((z==0) && (size == "Small")) {
			x = pickWeap([11,14,19]);
			myWp.push(weapons[x]);
		}

		if (z==1) {
			myAr.push(armors[0]);
			//rapier for high dex, otherwise random 1 handed weapon
			if (mod[1] < mod[0]) {
				x = pickWeap([11,14,15,19]);
				myWp.push(weapons[x]);
				}
			else 
				myWp.push(weapons[16]);
			}

		if (z==2) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		}

		//backup weapon
		if (level>1) {
			x = pickWeap([14,2,11]);
			while (myWp.indexOf(weapons[x]) != -1) {
				x = pickWeap([14,2,11]);			
			}

			myWp.push(weapons[x]);
		}
		
		
		x=Math.random();
		if (x < 0.6) {
			if (x > 0.3) {
			myWp.push(weapons[3]);
			wpNum[3] = 3;
			} else {
				myWp.push(weapons[4]);
				wpNum[4] = 3;
				if (level > 1) {
					wpNum[4] = Math.floor(Math.random() * 3) +3;
				}
			}
		} 


		if (size == "Small") {

			if (Math.random() > 0.33) {
					myWp.push(weapons[8]);
				} else {
					myWp.push(weapons[5]);
				} 

		} else {
			if (Math.random() > 0.33) {
				myWp.push(weapons[9]);
			} else  {
				myWp.push(weapons[6]);
			}
		}


		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}
		break;
	case 6:
		warriorArmor();
		z=1;

		// 0=great weapon, 1=single hand weapon, 2=2 weapons

		if (fiStyle ==5)
			z=2;



		if (z==1) {
			myAr.push(armors[0]);
			//rapier for high dex, otherwise random 1 handed weapon
			if (mod[1] < mod[0]) {
				x = pickWeap([11,14,15,19]);
				myWp.push(weapons[x]);
				}
			else 
				myWp.push(weapons[16]);
			}

		if (z==2) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		}

		
//backup weapon
		if (fiStyle2 == 5) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		} else if (fiStyle2 ==3) {
			// great weapon provided for that fighting style
			if (size != "Small") {
				x = pickWeap([13,20,12]);
				myWp.push(weapons[x]);
			} else {
				x = pickWeap([11,14,19]);
				myWp.push(weapons[x]);
			}
		} else if (level>1) {
			x = pickWeap([14,2,11]);
			while (myWp.indexOf(weapons[x]) != -1) {
				x = pickWeap([14,2,11]);			
			}
			myWp.push(weapons[x]);
		
		}
				

		x=Math.random();
		if (x < 0.6) {
			if (x > 0.3) {
			myWp.push(weapons[3]);
			wpNum[3] = 3;
			} else {
				myWp.push(weapons[4]);
				wpNum[4] = 3;
				if (level > 1) {
					wpNum[4] = Math.floor(Math.random() * 3) +3;
				}

			}
		} 


		if (size == "Small") {

			if (Math.random() > 0.33) {
				myWp.push(weapons[8]);
			} else 
				myWp.push(weapons[5]);


		} else {
			if (Math.random() > 0.33) {
				myWp.push(weapons[9]);
			} else 
				myWp.push(weapons[6]);
		}
		
		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}

		break;
	case 7:
		warriorArmor();
		z=Math.floor((Math.random() * 2)); 
		// 0=great weapon, 1=single hand weapon, 2=2 weapons
		if (fiStyle ==3)
			z=0;

		if ((fiStyle ==2) || (fiStyle ==4))
			z=1;

		if (fiStyle ==5)
			z=2;


		console.log("weapon choice:  " + z + " / fighting style: " + fiStyle);

		if ((z==0) && (size != "Small")) {
			x = pickWeap([13,20,12]);
			myWp.push(weapons[x]);
		}

		if ((z==0) && (size == "Small")) {
			x = pickWeap([11,14,19]);
			myWp.push(weapons[x]);
		}

		if (z==1) {
			myAr.push(armors[0]);
			//rapier for high dex, otherwise random 1 handed weapon
			if (mod[1] < mod[0]) {
				x = pickWeap([11,14,15,19]);
				myWp.push(weapons[x]);
				}
			else 
				myWp.push(weapons[16]);
		} else if ((fiStyle2 == 2) || (fiStyle2 ==4)) {
			//shield for guys with 2 fighting styles
			//myAr.push(armors[0]);
		}

		if (z==2) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		}

		//backup weapon
		//if 2 weapon styles make sure it gives weapons for 2 handed wielder
		if (fiStyle2 == 5) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		} else if (fiStyle2 ==3) {
			// great weapon provided for that fighting style
			if (size != "Small") {
				x = pickWeap([13,20,12]);
				myWp.push(weapons[x]);
			} else {
				x = pickWeap([11,14,19]);
				myWp.push(weapons[x]);
			}
		} else if (level>1) {
			x = pickWeap([14,2,11]);
			while (myWp.indexOf(weapons[x]) != -1) {
				x = pickWeap([14,2,11]);			
			}
			myWp.push(weapons[x]);
		}
		
		
		x=Math.random();
		if (x < 0.6) {
			if (x > 0.3) {
			myWp.push(weapons[3]);
			wpNum[3] = 3;
			} else {
				myWp.push(weapons[4]);
				wpNum[4] = 3;
				if (level > 1) {
					wpNum[4] = Math.floor(Math.random() * 3) +3;
				}

			}
		} 


		if (size == "Small") {

			if (Math.random() > 0.33) {
				myWp.push(weapons[8]);
			} else 
				myWp.push(weapons[5]);


		} else {
			if (Math.random() > 0.33) {
				myWp.push(weapons[9]);
			} else 
				myWp.push(weapons[6]);
		}



		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}
		break;
	case 8:
		myWp.push(weapons[23]);
		if (Math.random() > 0.5) {
			myWp.push(weapons[18]);
		} else {
			x = pickWeap([2,22,3]);
			myWp.push(weapons[x]);
		}
		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}
		
		if (elfBow() == false) {
			x = Math.random();
			if ((x > 0.8) || (level == 1)) {
				myWp.push(weapons[21]);
				wpNum[21] = 10;
			} else {
				x = pickWeap([5,8]);
				myWp.push(weapons[x]);
			}
		}
		
		break;
	case 9:
		if ((abil[0] > 14) && (level > 1))   {
			if (upgradeRare() == true) { 
				myAr.push(armors[12]);
			}
			else if (upgradeUncommon() == true) {
				myAr.push(armors[11]);
			} 
		}

		if ((abil[0] > 12) && (myAr.length == 0)) {
			myAr.push(armors[10]);
		} else if (myAr.length == 0) {
			myAr.push(armors[9]);
		}

		z=Math.floor((Math.random() * 3)); 

		// 0=great weapon, 1=single hand weapon, 2=2 weapons
		if (fiStyle ==3)
			z=0;

		if ((fiStyle ==2) || (fiStyle ==4))
			z=1;

		if (fiStyle ==5)
			z=2;

		if ((z==0) && (size != "Small")) {
			x = pickWeap([13,20,12]);
			myWp.push(weapons[x]);
		}

		if ((z==0) && (size == "Small")) {
			x = pickWeap([11,14,19]);
			myWp.push(weapons[x]);
		}

		if (z==1) {
			myAr.push(armors[0]);
			//rapier for high dex, otherwise random 1 handed weapon
			if (mod[1] < mod[0]) {
				x = pickWeap([11,14,15,19]);
				myWp.push(weapons[x]);
				}
			else 
				myWp.push(weapons[16]);
			}

		if (z==2) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		}


		if ((mod[1] < mod[0]) && (Math.random() < 0.66)) {
			x=Math.floor(Math.random() * 4) + 3;
			
			if (Math.random() > 0.5) {
				myWp.push(weapons[4]);
				wpNum[4] = x;			
			}	else {
				myWp.push(weapons[3]);
				wpNum[3] = x;			
			}
		} else {

			if (size == "Small") {
				if (Math.random() > 0.33) {
					myWp.push(weapons[8]);	
				} else {
					myWp.push(weapons[5]);	
				}
			} else {

				if (Math.random() > 0.33) {
					myWp.push(weapons[9]);
				} else {
					myWp.push(weapons[6]);
				}
			}
		}



		//backup weapon
		if (level>1) {
			x = pickWeap([14,2,11,15]);
			while (myWp.indexOf(weapons[x]) != -1) {
				x = pickWeap([14,2,11,15]);			
			}
			myWp.push(weapons[x]);
		}




		if (Math.random() > 0.5) {
			eqOutput += ", Priest's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}
		eqOutput += ", Holy symbol";






		break;
	case 10:
		if (size == "Small") 
			myWp.push(weapons[8]);
		else
			myWp.push(weapons[9]);


		if ((mod[1] < 3) && (mod[1] > 0) && (level > 1)) {
			if (upgrade() == true)  {
				if (upgrade() == true)  {
					if (skLearn[16] == true)					
						myAr.push(armors[7]);
					else 
						myAr.push(armors[8]);
				}
				else {
					myAr.push(armors[7]);
				}
			} else {
				if (skLearn[16] == true)					
					myAr.push(armors[5]);
				else
					myAr.push(armors[6]);
			}
		} else {
			if (upgrade() == true)  {
					myAr.push(armors[3]);
			} else {
					myAr.push(armors[2]);
				}
		}

		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}

		z=Math.floor((Math.random() * 2) +1); 
		// 0=great weapon, 1=single hand weapon, 2=2 weapons
		if ((fiStyle ==2) || (fiStyle ==4))
			z=1;

		if (fiStyle ==5)
			z=2;

		if (level > 1) {
			if (z==1) {
				//finesse weapon for high dex, otherwise random 1 handed martial weapon
				if (mod[1] < mod[0]) {
					x = pickWeap([11,14,15,19]);
					myWp.push(weapons[x]);
					}
				else {
					x = pickWeap([16,16,17,18]);
					myWp.push(weapons[x]);
				
				}
			//backup weapon
			x = pickWeap([14,2,11]);
			while (myWp.indexOf(weapons[x]) != -1) {
				x = pickWeap([14,2,11]);			
			}
			myWp.push(weapons[x]);

			}
		} else if (mod[1] < mod[0]) {
			x = pickWeap([16,16,17,18]);
			myWp.push(weapons[x]);

		} else if (z!=2) {
			x = pickWeap([16,17,18]);
			myWp.push(weapons[x]);
		}

		if (z==2) {
			x = pickWeap([17,18]);
			myWp.push(weapons[x]);
			wpNum[x] = 2;
		}

		if ((z != 2) && (level > 1)) {
			myAr.push(armors[0]);
		}
	
		break;
	case 11:
		if (Math.random() > 0.5) {
				myWp.push(weapons[16]);
						
			} else {
				myWp.push(weapons[18]);
			}


		if (upgrade() == true)  {
			myAr.push(armors[3]);
			}
		else {
			myAr.push(armors[2]);
			}

		if (elfBow() == false) {
			myWp.push(weapons[8]);
		}
		if (upgradeUncommon() == true) {
			myWp.push(weapons[7]);	
		}


		myWp.push(weapons[0]);
		wpNum[0] = 2;				
		if (upgrade() == true)
			wpNum[0] = Math.floor(Math.random() * 2) +3;

		x=(Math.random());
		if (x > 0.66) {
			eqOutput += ", Dungeoneer's pack";
		} else if (x > 0.33) {
			eqOutput += ", Explorer's pack";
		}
		else {
			eqOutput += ", Burglar's pack";	
		}
		eqOutput += ", Thieves' tools"

		break;
	case 12:
		if (Math.random() > 0.5) {
				myWp.push(weapons[16]);
						
			} else {
				myWp.push(weapons[18]);
			}

		if (elfBow() == false) {
			myWp.push(weapons[8]);
		}

		if (upgradeUncommon() == true) {
			myWp.push(weapons[7]);	
		}

		if (upgrade() == true) 
			myAr.push(armors[3]);
		else 
			myAr.push(armors[2]);
		myWp.push(weapons[0]);
		wpNum[0] = 2;				

		if (upgrade() == true)
			wpNum[0] = Math.floor(Math.random() * 2) +3;

		x=(Math.random());
		if (x > 0.66) {
			eqOutput += ", Dungeoneer's pack";
		} else if (x > 0.33) {
			eqOutput += ", Explorer's pack";
		}
		else {
			eqOutput += ", Burglar's pack";	
		}
		eqOutput += ", Thieves' tools"

		break;

	case 13:
	
		if (elfWeapon() == false && dwarfWeapon() == false) {
			if (mod[1] > mod[0]) {
				x = pickWeap([22]);
				myWp.push(weapons[x]);
			}						
			
		}
	 

		myWp.push(weapons[0]);
		wpNum[0] = 2;				
		if (upgrade() == true)
			wpNum[0] = Math.floor(Math.random() * 2) +3;

		if (elfBow() == false) {
		
			x = Math.random();
			if (x > 0.75) {
				wpNum[0] = Math.floor(Math.random() * 3) + 4;
			} else if (x > 0.25) {
				myWp.push(weapons[5]);
			} else {
				myWp.push(weapons[21]);
				wpNum[21] = Math.floor(Math.random() * 3) + 9;
			}
		
		}

		dwarfMagicArmor();					


		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Explorer's pack";
		}
		if (Math.random() > 0.5) {
			eqOutput += ", Component pouch";
			if (upgrade() == true) {
				eqOutput += ", Arcane focus";	
			}


		} else {
			eqOutput += ", Arcane focus";

			if (upgrade() == true) {
				eqOutput += ", Component pouch";	
			}


		}

		break;
	case 14:
		if (elfWeapon() == false && dwarfWeapon() == false) {
			x = pickWeap([1,2,2,3,22]);
			myWp.push(weapons[x]);
		}
		
		if (elfBow() == false) {
			z=Math.random();
			if  (z > 0.5) {
				myWp.push(weapons[5]);
			} else {
				myWp.push(weapons[8]);
			}
	
		}

		myWp.push(weapons[0]);
		wpNum[0] = 2;			
		if (upgrade() == true) {
			wpNum[0] = Math.floor(Math.random() * 3) + 3;
		}

		if (dwarfMagicArmor() == false) {
			if ((upgrade() == true) && (level > 1))
				myAr.push(armors[3]);
			else 
				myAr.push(armors[2]);
		}


		if (Math.random() > 0.5) {
			eqOutput += ", Dungeoneer's pack";
		} else {
			eqOutput += ", Scholar's pack";
		}
		if (Math.random() > 0.5) {
			eqOutput += ", Component pouch";
			if (upgrade() == true) {
				eqOutput += ", Arcane focus";	
			}
		} else {
			eqOutput += ", Arcane focus";
			if (upgrade() == true) {
				eqOutput += ", Component pouch";	
			}

		}

		break;		

	case 15:
		if (elfWeapon() == false && dwarfWeapon() == false) {
			if (mod[1] > mod[0]) {
				myWp.push(weapons[0]);
				if (level > 1) {
					wpNum[0] = 2;
				}
			} else {
					myWp.push(weapons[22]);
			}
		}

		if (elfBow() == false) {
			x = Math.random();
			if (x > 0.75) {
					if (myWp.indexOf("Dagger") == -1)
						myWp.push(weapons[0]);

					wpNum[0] = Math.floor(Math.random() * 3) + 4;
			} else if (x > 0.25) {
				myWp.push(weapons[5]);
			} else {
				myWp.push(weapons[21]);
				wpNum[21] = Math.floor(Math.random() * 3) + 9;
			}
		 
		}
		dwarfMagicArmor();
		if (Math.random() > 0.5) {
			eqOutput += ", Explorer's pack";
		} else {
			eqOutput += ", Scholar's pack";
		}
		if (Math.random() > 0.5) {
			eqOutput += ", Component pouch";

			if (upgrade() == true) {
				eqOutput += ", Arcane focus";	
			}


		} else {
			eqOutput += ", Arcane focus";

			if (upgrade() == true) {
				eqOutput += ", Component pouch";	
			}


		}
		eqOutput += ", Spellbook"

		break;
	
}

//if you don't have a hand crossbow and are a drow and over level 1 you have a slight chance of having one
	if (racetxt == "Drow Elf") {
	if ((upgradeUncommon() == true) && (myWp.indexOf("Hand crossbow") == -1))
		myWp.push(weapons[7]);
}





// 1st level gold
x = 5;
if ((cl==1) || (cl==4))
	x=2;
//11, 12, 14, 15
if (cl > 10)
	x=4;
if (cl==13)
	x=3;
// +1d4 for each x
var sum=0;
for (i=1;i <= x; i++)
	sum += Math.floor((Math.random() * 4) +1); 

// x10 if youre not a monk
if (cl != 8)
	sum = sum * 10;

gold += sum;

if (al==true) {
	gold=(x*40);
	if (cl==8) {
		gold=20;
	}
}


var golddebug = [];
golddebug.unshift(gold);

// above 1st level adjustments to gold
x = level -1;
while (x>0) {
	i = Math.random();
	
// tiny  of a chance of losing gold
	if (i < 0.2) {
		// gold * .7 to .9
		gold = gold * ((Math.floor(Math.random() * 3) +7) * 0.1);
	}
	else {
		// gold * 1.2 to 1.7
		gold = gold * ((Math.floor(Math.random() * 6) +12) * 0.1);
	}
gold = Math.floor(gold);

golddebug.push(gold);
x--;
}

// convert some gp to pp for ease of carrying
if ((upgrade() == true) && (gold > 250)) {
	x = (Math.floor(Math.random() * 3) +7) * .1
	platinum = Math.floor((gold * x) / 10);
	gold = Math.floor(gold * (1-x)); 
}

// show total gold we own
weOutput += " &nbsp; <b>Wealth:</b> " + gold + " gp";
if (platinum > 0) {
	weOutput += ", " + platinum + " pp";
}
console.log("Gold at 1st level = " + sum + ")(history = " + golddebug + ")");
console.log("final gold=" + gold + " final platinum =" + platinum);

//chance for extra wealth if you're not a monk
if (cl != 8 ) {
	if (upgrade() == true) {
		// # of wealth items
		x=Math.floor(Math.random() * 20) + 1 + (level * 2);
		z=0;

		if (x > 37) {
			z=4;
		} else  if (x > 29) {
			z=3;
		} else if (x > 23) {
			z=2;
		} else {
			z=1;
		}
		console.log("extra wealth rolls:  x="+x+" / z="+z+" items");
		bool=false;
		while (z>0) {
			
			i=0;

			y=Math.floor(Math.random() * 4);
			if (x > 29) {
				y--;
			}
			if (x > 36) {
				y--;
			}

			//only let bonus happen first time
			x=0;

			//no more junk for levels 8 and up
			if (level >7) {
				y--;
			}

			if (y<0) {
				y=0;
			}

			if (y==0) {
				if (upgradeRare() == true) {
					// is it super rare?
					if (upgradeRare() == true) {
						//400-1000
						i=Math.floor(Math.random() * 7);
						i= (i * 100) + 400;
							
						tempTxt = jewelryAdjectivesRare[Math.floor(Math.random() * jewelryAdjectivesRare.length)] + " " + jewelryRare[Math.floor(Math.random() * jewelryRare.length)];			
						weOutput += ", " + tempTxt+ " worth " + i + " gold";
						z--;
					} else {
						//300 to 600
					x=Math.floor(Math.random() * 7);
					i= (i * 50) + 300;
						
					tempTxt = jewelryAdjectives[Math.floor(Math.random() * jewelryAdjectives.length)] + " " + jewelry[Math.floor(Math.random() * jewelry.length)];			
					weOutput += ", " + tempTxt+ " worth " + i + " gold";
					z--;
					}
				} 
			}

			if (y==1) {
				if (upgradeRare() == true) {
					//250 to 600
					i=Math.floor(Math.random() * 8) + 4;
					i= (i * 50) + 50;
					weOutput += ", Gem worth " + i + " gold";
					z--;
				}
			}


			if (y==2)		{
				if (upgradeUncommon() == true) {
					if ((Math.random() > 0.5) && (bool==false)) {
						var q=Math.floor(Math.random() * 3) + 2;

						i=Math.floor(Math.random() * 7);
						//120 to 240
						i= (i * 20) + 120;

						weOutput += ", " + q + " small gemstones  worth " + i + " gold";
						z--;	
						//only get small gems once
						bool=true;
					} else {
						//150 to 300
						x=Math.floor(Math.random() * 4);
						i= (i * 50) + 150;
							
						tempTxt = jewelryAdjectives[Math.floor(Math.random() * jewelryAdjectives.length)] + " " + jewelry[Math.floor(Math.random() * jewelry.length)];			
						weOutput += ", " + tempTxt+ " worth " + i + " gold";
						z--;
					}
				}
			}

			if (y==3)		{
				if (upgrade() == true) {
					// 50 to 110
					i=Math.floor(Math.random() * 7);
					i= (i * 10) + 50;
					tempTxt = valuables[Math.floor(Math.random() * valuables.length)];
					weOutput += ", " + tempTxt + " worth " + i + " gold";
					z--;
				}
			}

		}

	}
}

if ((level > 1) && ((cl ==9) || (cl == 3))) {
	if (upgrade() == true) {
		if (upgradeUncommon() == true) {
			x=Math.floor(Math.random() * 2) + 2;
			eqOutput += ", " + x + " Flasks of Holy Water";
		} else {
			eqOutput += ", Flask of Holy Water";
		}

	}
	if (upgradeUncommon() == true) {
		eqOutput += ", Vial of Antitoxin";
	}

} else if (level > 1) {
	if (upgradeUncommon() == true) {
		eqOutput += ", Flask of Holy Water";
	}
	if (upgradeRare() == true) {
		eqOutput += ", Vial of Antitoxin";
	}

}

if (upgradeUncommon() == true) {
		eqOutput += ", Healer's kit";
	}


if (level > 1) {
	if (upgradeRare() == true) {
		eqOutput += ", Flask of Alchemist\'s Fire";		
	}
	if (upgradeUncommon() == true) {
		eqOutput += ", Vial of Acid";
	}
	if (classtxt.indexOf("Rogue") > -1) {

//		if  ((upgrade() == true) && (eqOutput.indexOf("Crowbar") == -1) && (eqOutput.indexOf("Burglar") == -1)) {
//			eqOutput += ", Crowbar";
//		}

		if (upgrade() == true) {
			eqOutput += ", Caltrops";	
		}

		if (upgradeUncommon() == true) {
			eqOutput += ", Magnifying Glass";	
		}
		

		//rogues might get 1 poison
		if ((upgradeUncommon() == true) && (classtxt.indexOf("ssassin") == -1)) {

				y=Math.floor(Math.random() * 20);
				if ((y==0) && (upgradeVeryRare() == true)) {
					z = Math.floor(Math.random() * poisonVeryRare.length);
					eqOutput += ", Poison: " + poisonVeryRare[z];
					
				} else if ((y<5) && (upgradeRare() == true)) {
					z = Math.floor(Math.random() * poisonRare.length);
					eqOutput += ", Poison: " + poisonRare[z];
					
				} else if (upgradeUncommon() == true) { 
					z = Math.floor(Math.random() * poisonUncommon.length);
					eqOutput += ", Poison: " + poisonUncommon[z];
				} else {
					eqOutput += ", Vial of Basic Poison";
				}
				
		}
	} else {
		if (upgradeRare() == true) {
			eqOutput += ", Magnifying Glass";	
		}

		if (upgradeRare() == true) {
			eqOutput += ", Vial of Basic Poison";
		}
	}

	if (classtxt.indexOf("ssassin") > -1) {
		if (upgrade() == true) {
			eqOutput += ", Poisoner\'s Kit";	
		}
		if ((upgrade() == true) && (eqOutput.indexOf("Disguise") == -1)) {
			eqOutput += ", Disguise Kit";	
		}
		//many assassins will have 1-3 poisons
		bool=false;
		if (upgrade() == true) {
			bool=true;
			//poOutput += ", Vial of Basic Poison";
		} 

		if (upgradeUncommon() == true) {
			xx=0;
			xx=Math.floor(Math.random() * 3) + 1;
			poOutput += "<br><b>Poison";
			if ((xx>1) || (bool=true))
				poOutput += "s";
			poOutput +=  ":</b> "

			if (bool==true) 
				poOutput += "Basic poison, 	";

			first=true;
			while (xx > 0) {

				y=Math.floor(Math.random() * 20);
				if ((y==0) && (upgradeVeryRare() == true)) {
					z = Math.floor(Math.random() * poisonVeryRare.length);
					if (first == false) {
						poOutput += ", "
					}
					poOutput += poisonVeryRare[z];
					xx--;
					first=false;
				} else if ((y<5) && (upgradeRare() == true)) {
					z = Math.floor(Math.random() * poisonRare.length);

					if (first == false) {
						poOutput += ", "
					}


					poOutput +=  poisonRare[z];
					xx--;
					first=false;
				} else if (upgradeUncommon() == true) { 
					z = Math.floor(Math.random() * poisonUncommon.length);
					if (first == false) {
						poOutput += ", "
					}

					poOutput +=  poisonUncommon[z];
					xx--;
					first=false;
				}

			}
		} 


	}

	

	
	bool=false;
	if (upgrade() == true) {
		if (upgrade() == true) {
			x=Math.floor(Math.random() * 3) + 2;
			if (level > 6)
				x++;
			if (level < 5)  {
				x=Math.floor(Math.random() * 2) + 2;
			}
			maOutput += ", " + x + " Potions of Healing";
		} else
			maOutput += ", Potion of Healing";

		bool=true;
	}

	//let druids try again because they know herbalism
	if ((bool==false) && (cl==4)) {
		if (upgrade() == true) {
			maOutput += ", Potion of Healing";			
		}
	}

	eqOutput = eqOutput + poOutput;	




//CHECK MAGICK ITEMS
	if (upgrade() == true) {
//	if (true == true) {
		//determine number of magic items
		

		//usually 1 magic item level 5, 2 magic items level 10.  sometimes 3 magic items.
		z=0;

		//1st item
		//2nd level = 38%, 3rd level = 57%, 5th leve = 95%, 
		xx=(level * 20)/100;

		if (level < 7)
			xx=96;

		if (level > 6)
			xx=99;

		console.log("* / * / * / * / Level " +level + " guy has a "+xx+" chance of getting the first  magic item")


		if (Math.random() < xx)
			z++;

		//2nd item
		if (level < 5)
			xx=0;
		if (level ==5)
			xx=5;
		if (level > 5) 
			xx=((level-5) * 20) /100;
		if (level > 7)
			xx=(((level-8) * 13) + 70) / 100;


		console.log("* / * / * / * / Level " +level + " guy has a "+xx+" chance of getting the second magic item")

		if (Math.random() < xx) {
			
			z++;
		}

		//very rare bonus item
		if ((upgradeVeryRare() == true) && (level > 6))
			z++;

		//alert(level+"level gives  items ="+z)

		console.log("* / * / * / * / Your character has "+z+" magic item(s)")


		while (z > 0) { 
			x=Math.floor(Math.random() * 20);

			//5% very rare
			if (x==0) {
				y = Math.floor(Math.random() * magicVeryRare.length);
				maOutput += ", " + magicVeryRare[y];
				z=z-0.6;

			//20% rare
			} else if (x < 5) {
				//25% chance the rare item is magic armor.  
				if ((Math.random() < 0.25) && (magicArmor==0) && (myAr.length > 0)) {

					q=Math.floor(Math.random() * myAr.length);
					if (upgradeVeryRare() == true) {
						// +2
						magicArmor=2;
					} else {
						// +1
						magicArmor=1; 	
					}
					maOutput += ", +" + magicArmor +" "+ myAr[q];
					if (upgradeVeryRare() == true) {
						i = Math.floor(Math.random() * 10);
						maOutput += " (Resistant to " + ringResistance[i] + " damage)";	
					}
					whichMagicArmor = q;
					z--;

				//it's not magic armor
				} else {
					y = Math.floor(Math.random() * magicRare.length);
					
					if ((magicRare[y] == "Ring of Resistance") && (maOutput.indexOf("Ring of Resistance") == -1)) {
						i = Math.floor(Math.random() * 10);
						maOutput += ", "+ ringStone[i] +" Ring of Resistance (" + ringResistance[i] + " damage)";
						z--;
					} else if ((magicRare[y] == "Ring of Protection") && (maOutput.indexOf("Ring of Protection") == -1)) {
						ringProtection = 1;
						if (upgradeVeryRare() == true)
							ringProtection = 2;
						maOutput += ", +"+ringProtection+" Ring of Protection";
						z--;
					} else if ((magicRare[y] == "Ring of Evasion (3 charges)") && (maOutput.indexOf("Ring of Evasion") == -1)) {
						maOutput += ", " + magicRare[y];
						z--;
					}

					
				}

			//75% uncommon
			} else {
				//20% chance it's a magic weapon
				if ((Math.random() < 0.20) && (magicWeapon==0)) {
					bool=false;
					var count =0;
					while (bool==false) {
						count++;
						//prevent infinite loops
						if (count > 500) {
			
							bool=true;
						}
						q=Math.floor(Math.random() * myWp.length);
						i = weapons.indexOf(myWp[q]);
						y=wpNum[i] * 1;

						//if there's only 1 of the weapon and it's not unarmed
						if ((y == 0) && (i != 23)) {
							// +2
							if (upgradeVeryRare() == true) {
			
								magicWeapon=2; 
								bool=true;
								maOutput += ", +" + magicWeapon +" "+ myWp[q];
								whichMagic = q;
								z--;
							// +1
							} else {
			
								magicWeapon=1; 	
								bool=true;
								maOutput += ", +" + magicWeapon +" "+ myWp[q];
								whichMagic = q;
								z--;
							}
						} 
					}
				//20% chance scroll
				} else if (Math.random() < 0.2) {

					xx = Math.floor(Math.random() * 20)
					y=0;
					if (xx==0) {
						y=2;
					} else if (xx < 4) {
						y=1;
					}
					
					if (cl==2) {
						if (y==0)
							maOutput += ", Scroll of " + scrollBardUnc[Math.floor(Math.random() * scrollBardUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollBardRare[Math.floor(Math.random() * scrollBardRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollBardVery[Math.floor(Math.random() * scrollBardVery.length)];				
						z=z-0.6;
					} else if (cl==3) {
						if (y==0)
							maOutput += ", Scroll of " + scrollClerUnc[Math.floor(Math.random() * scrollClerUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollClerRare[Math.floor(Math.random() * scrollClerRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollClerVery[Math.floor(Math.random() * scrollClerVery.length)];				
						z=z-0.6;
					} else if (cl==4) {
						if (y==0)
							maOutput += ", Scroll of " + scrollDruiUnc[Math.floor(Math.random() * scrollDruiUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollDruiRare[Math.floor(Math.random() * scrollDruiRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollDruiVery[Math.floor(Math.random() * scrollDruiVery.length)];				

						z=z-0.6;
					} else if (cl==9) {
						if (y==0)
							maOutput += ", Scroll of " + scrollPalaUnc[Math.floor(Math.random() * scrollPalaUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollPalaRare[Math.floor(Math.random() * scrollPalaRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollPalaVery[Math.floor(Math.random() * scrollPalaVery.length)];				

						z=z-0.6;
					} else if (cl==10) {
						if (y==0)
							maOutput += ", Scroll of " + scrollRangUnc[Math.floor(Math.random() * scrollRangUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollRangRare[Math.floor(Math.random() * scrollRangRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollRangVery[Math.floor(Math.random() * scrollRangVery.length)];				

						z=z-0.6;
					} else if (cl==14) {
						if (y==0)
							maOutput += ", Scroll of " + scrollWarlUnc[Math.floor(Math.random() * scrollWarlUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollWarlRare[Math.floor(Math.random() * scrollWarlRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollWarlVery[Math.floor(Math.random() * scrollWarlVery.length)];				

						z=z-0.6;
					} else if ((cl==5) || (cl==12) || (cl==13) || (cl==15)) {
						//fighters and rogues can't cast high level spells
						if ((y==0) || (cl==5) || (cl==12))
							maOutput += ", Scroll of " + scrollWizaUnc[Math.floor(Math.random() * scrollWizaUnc.length)];
						else if (y==1)
							maOutput += ", Scroll of " + scrollWizaRare[Math.floor(Math.random() * scrollWizaRare.length)];
						else if (y==2)
							maOutput += ", Scroll of " + scrollWizaVery[Math.floor(Math.random() * scrollWizaVery.length)];				

						z=z-0.6;
					}

					// 20% chance magic arrows 
				}  else if ((Math.random() < 0.2) && (magicArrows<1)) {
					bool=false;
					
					for (x=0;x < myWp.length;x++) {
					
						i = weapons.indexOf(myWp[x]);
						if ((i == 5) || (i == 6) || (i == 7)) {
							bool=true;
						
							rangedWeapons.push(i);
						} else if ((i == 8) || (i == 9)) {
							bool=true;
						
							rangedWeapons.push(i);
						} else if (i == 24) {
							bool=true;
						
							rangedWeapons.push(i);
						}
					
					}
					if (bool==true) {
						//randomly pick one of their ranged weapons and give magic ammo for it
						i=rangedWeapons[Math.floor(Math.random() * rangedWeapons.length)];
						if ((i == 5) || (i == 6) || (i == 7)) {
							magicArrowType="Crossbow bolts";
						} else if ((i == 8) || (i == 9)) {
							magicArrowType="Arrows";
						} else if (i == 24) {
							magicArrowType="Sling bullets";
						}

						if (upgradeRare() == true) {
							magicArrowPlus=3;
							magicArrows=(Math.floor(Math.random() * 8) +3);
						} else if (upgradeUncommon() == true) {
							magicArrowPlus=2;
							magicArrows=(Math.floor(Math.random() * 6) +2) + (Math.floor(Math.random() * 6) +2);
						} else {
							magicArrowPlus=1;
							magicArrows=(Math.floor(Math.random() * 6) +1) + (Math.floor(Math.random() * 6) +1) + (Math.floor(Math.random() * 6) +1) + 3;
						}
						z--;
						maOutput += ", +" + magicArrowPlus +" " + magicArrowType +" ("+ magicArrows+ ")";
					}


				}
				else {
					// it's not a magic weapon
					y = Math.floor(Math.random() * magicUncommon.length);

					maOutput += ", " + magicUncommon[y];
					if (magicUncommon[y] == "Keoghtom's Ointment") {
						maOutput += " ("+ (Math.floor(Math.random() * 4) +2)   +" doses)"
						z--;
					} else 	if ((magicUncommon[y] == "Boots of Striding and Springing") && (maOutput.indexOf("Striding and Springing") == -1)) {
						bootsOfSS = true;
						z--;
					} else {
						z--;
					}



				}

			}

		}
	}
}

//add wealth to end of equipemnt list
eqOutput += weOutput;


if (maOutput.length > 0) {
	eqOutput += "<br><b>Magic Item";	
	if ((maOutput.indexOf(",") != maOutput.lastIndexOf(",")) || (maOutput.indexOf("otions") > -1)) {
		eqOutput += "s";
	}
	//trim off initial comma
	maOutput = maOutput.slice(1,maOutput.length);
	eqOutput += ": </b>" + maOutput;	
	console.log(maOutput);
}
		

if (companion > -1) {
	if ((level * 4) > companionshp[companion]) {
		companionshp[companion] = level *4;
	}
	eqOutput += "<br><b>Ranger's Companion:</b>  " + companions[companion] + " &mdash; " + (companionshp[companion] * 1) + " hit points, "+((companionsAC[companion] * 1)+ (prof*1)) + " AC, " + (companionsStats[companion]) + ((companionsAttack1[companion] * 1)+prof) + " to hit (" +(companionsDamage1[companion]) +"+"+(companionsDamageBonus[companion]+prof) + " dmg" +	companionsDamageExtra[companion] + ")";
	if (companionsAttackText2[companion].length > 0) {
		eqOutput += ", " + companionsAttackText2[companion] + " +" + ((companionsAttack2[companion] * 1)+prof) + " to hit (" +(companionsAttackDamage2[companion]) +"+"+(companionsDamageBonus2[companion]+prof) + " dmg)";
	}

}


if (familiar.length > 0)
	spOutput += "<br><b>Pact of the Chain Familiar:</b>  " + familiar;

if ((familiar.length == 0) && ((mySpells.indexOf("Find Familiar") > -1) || (waTomeRituals.indexOf("Find Familiar") > -1))) {
	x=Math.floor(Math.random() * familiars.length);
	spOutput += "<br><b>Familiar:</b> " + familiars[x];
	
}






// show weapons
for (x=0;x < myWp.length;x++) {
	//find which number in db
	i = weapons.indexOf(myWp[x]);
	temp=0;
	// use dex for finesse melee, otherwise strength
	if (wpRange[i] != 2) {
	   // if it's a finesse weapon and DEX is higher than STR then use dex bonus
		if ( ((wpRange[i] == 1) || (wpRange[i] == 4)) && (mod[1] > mod[0]) ) {
			temp=1;
			}
		else 
			temp=0;
		//Monks use DEX bonus
		if (cl==8) {
			temp=1;
			}

		wpOutput += "<li>"
		tempTxt ="";
		y=0;
		// show the plus if it's magic
		if (x==whichMagic) {
			y=magicWeapon;
			wpOutput += " +" + y +" ";
		}

		//print plurals
		if (wpNum[i] > 0)
			wpOutput += wpNum[i] +" ";

		wpOutput += myWp[x];
		//print plurals
		if (wpNum[i] > 0)
			wpOutput += "s";

		//better unarmed damage for high level monks
		if ((i==23) && (level >4))
			wpDam[i] = "1d6";

		// +2 to damage if fighter's style is dueling and they're using one weapon with one hand
		z=0;
		if ((fiStyle==2) && (i != 12) && (i != 13) && (i != 20) && (wpNum[i] < 1))
			z=2;
		wpOutput += " (" + showPlus( mod[temp]+prof+y ) +  " to hit) " +wpDam[i]+ showPlus( mod[temp]+z+y ) + " " + wpType[i] + " damage<br>";	
	}	
	
	// ranged weapons
	if (wpRange[i] > 1) {
		wrOutput += "<LI>";
		var q=0;
		// show the plus if it's magic
		if (x==whichMagic) {
			q=magicWeapon;
			wrOutput += " +" + q +" ";
		}
		if (wpNum[i] > 0)
			wrOutput += wpNum[i] +" ";	
		wrOutput += myWp[x];
		if (wpNum[i] > 0)
			wrOutput += "s";	

		// +2 to hit if fighter's fighting style is archery
		z=0;
		if ((fiStyle==0) || (fiStyle2==0))
			z=2;

		y=mod[1];
		if ((wpRange[i] == 4) && (mod[0] > mod[1]))
			y=mod[0];

		if (wpRange[i] == 3) 
			y=mod[0];

		if ((i==21) && (mod[0] > mod[1]))
			y=mod[0];

		//don't show 2 handed weapon damage when weapons are thrown
		if (i == 6) 
			var tempTxt = wpDam[i].slice(0,4);
		else 
			var tempTxt = wpDam[i].slice(0,3);

		wrOutput += " (" + showPlus( y+z+prof+q ) +  " to hit) " +tempTxt+ showPlus( y+q ) + " " + wpType[i] + " damage &nbsp; Range: "+wpDistance[i];


		if ((i == 5) || (i == 6) || (i == 7)) {
			if ((fiStyle==0) || (cl==10)) 
				wrOutput += " &nbsp; 40 bolts";
			else 
				wrOutput += " &nbsp; 20 bolts";
			if (((magicArrowPlus > 0) && (magicArrowType.indexOf("olt") > -1)) && (magicArrowDisplay==false)) {
				wrOutput += "</li><li>+" + magicArrowPlus + " " + magicArrowType +" (" + magicArrows + ") (" + showPlus( y+z+prof+q+magicArrowPlus ) +  " to hit) "+tempTxt+ showPlus( y+q+magicArrowPlus ) + " " + wpType[i] + " damage";
				magicArrowDisplay=true;
			}


		}

		if ((i == 8) || (i == 9)) {
			if ((fiStyle==0) || (cl==10)) 
				wrOutput += " &nbsp; 40 arrows";
			else 
				wrOutput += " &nbsp; 20 arrows";
			
			if ((magicArrowPlus > 0) && (magicArrowType.indexOf("rrow") > -1) && (magicArrowDisplay==false)) {
				wrOutput += "</li><li>+" + magicArrowPlus + " " + magicArrowType +" (" + magicArrows + ") (" + showPlus( y+z+prof+q+magicArrowPlus ) +  " to hit) "+tempTxt+ showPlus( y+q+magicArrowPlus ) + " " + wpType[i] + " damage";
				magicArrowDisplay=true;
			}
		}
		if (i == 24) {
			wrOutput += " &nbsp; 20 bullets";
			if ((magicArrowPlus > 0) && (magicArrowType.indexOf("ullet") > -1) && (magicArrowDisplay==false)) {
				wrOutput += "</li><li>+" + magicArrowPlus + " " + magicArrowType +" (" + magicArrows + ") (" + showPlus( y+z+prof+q+magicArrowPlus ) +  " to hit) "+tempTxt+ showPlus( y+q+magicArrowPlus ) + " " + wpType[i] + " damage";
				magicArrowDisplay=true;
			}

		}

		
	}
}
if (wrOutput.length >0)
	wpOutput += "<b>Ranged weapons:</b>  <br>" + wrOutput;




// Armour armor class
ac=10;
z=0;
console.log(myAr);
for (x=0;x < myAr.length;x++) {
//find all items on the list.
	i = armors.indexOf(myAr[x]);
	if (i==0)
		hasShield = true;
	else {
		//check for light medium or heavy armor
		if (i > 0)
			hasArmor=1;
		if (i >3) 
			hasArmor=2;
		if (i > 8)
			hasArmor=3;
		z=i;
		}
}


//if undefined give them no armor
if (hasArmor < 0)
	hasArmor = 0;

switch (hasArmor) {
	case 0:
		// unarmrored defense for draconic sorcerers
		if (soOrigin == 0) {
			ac = 13;
			}
		//DEX BONUS
		if (mod[1] > 0) {
			ac += mod[1];
			}
		// unarmored defense for barbarians
		if ((cl == 1) && (mod[2] >0)) {
			ac += mod[2];
			}
		// unarmored defense for monks
		if ((cl  == 8) && (mod[4] > 0)) {
			ac += mod[4];
			}
		break;
	case 1:
		ac = armorAC[z];
		//DEX BONUS
		if (mod[1] > 0) {
			ac += mod[1];
			}
		break;
	case 2:
		ac = armorAC[z];
		x=0;
		//  2 POINTS max to dex bonus
		if (mod[1] >1)
			x=2;
		if (mod[1] == 1)
			x=1;
		ac += x;	
		break;
	case 3:
		ac = armorAC[z];
		break;
}

if (hasShield == true)   {
	ac += 2;
	}

//give ring of protection bonus
if (ringProtection > 0) {
	ac += ringProtection;
}

// +1 to ac if fighter with defense style and wearing armor
if ((hasArmor > 0) && fiStyle==1) {
	ac += 1;
}

// add bonus for magic armor
if (magicArmor > 0) {
	ac += magicArmor;
}


// the first armor is never shield.
if (myAr[0] == "Shield" && (myAr.length > 1)) {
	myAr.reverse();

	//switch the magic armor position
	if (magicArmor > 0) {
		if (whichMagicArmor == 0) {
			whichMagicArmor = 1;
		} else {
			whichMagicArmor = 0;
		}

	}
}

arOutput+= "<b>Hit points: " + hp + "</b> &nbsp; Hit dice:  " + level + "d" + hd +"<br><b>Armor:  ";

if (myAr.length == 0) {
		arOutput += "None";
	}

if (myAr.length > 1) {
	if (whichMagicArmor == 0)
		arOutput += "+" + magicArmor+" ";

	arOutput += myAr[0] + " and " 
	
	if (whichMagicArmor == 1)
		arOutput += "+" + magicArmor +" ";

	arOutput += myAr[1];
}





if (myAr.length == 1) {
	if (magicArmor > 0) 
		arOutput += "+" + magicArmor + " ";
	arOutput += myAr;
}

arOutput += "<br>AC:  " + ac + "</b><br>";



if (abOutput.charAt(0)==",") 
	abOutput = abOutput.slice(1,abOutput.length);


if (eqOutput != "") {
	if (eqOutput.charAt(0)==",") 
		eqOutput = eqOutput.slice(1,eqOutput.length);
	}

if (toOutput != "") {
	if (toOutput.charAt(0)==",") 
		toOutput = toOutput.slice(1,toOutput.length);

	abOutput =  "<b>Languages:</b>  <span id=\"la\"></span> &nbsp; &nbsp; <b>Other proficiencies:</b>" + toOutput + "<br>" + abOutput;
} else {
	abOutput =  "<b>Languages:</b>  <span id=\"la\"></span><br>"+ abOutput;
}

//FACTION
//small  chance it's random.  else it's based on class.
x=Math.floor(Math.random() * 4);
if (x==0) {
	myFaction = Math.floor(Math.random() * 5)
} else {
	if ((cl==2) || (cl==15))
		myFaction=0;
	if ((cl==3) || (cl==8) || (cl==9))
		myFaction=1;
	if ((cl==1) || (cl==4) || (cl==10))
		myFaction=2;
	if ((cl==13) || (cl==5) || (cl==6) || (cl==7))
		myFaction=3;
	if ((cl==14) || (cl==11) || (cl==12))
		myFaction=4;
}




for (x=0;x<6;x++) {
	saves[x] = mod[x];
	if (ringProtection > 0) {
		saves[x] += ringProtection;
	}
	/*
	if (abOutput.indexOf("Jack of all") > -1) {
		saves[x] += Math.floor(prof/2);
	}
	*/
	if ((level > 5) && (cl==9)) {
		z=mod[5];
		if (z<1) 
			z=1;
		saves[x] += z;
	}
}
for (x=0;x<2;x++) {
	i = st[x];
	saves[i] += prof;
}


// add or remove the dividing line between spells & other
if ((spOutput.length == 0) && (raceSpells.length == 0)) {
	document.getElementById("spellspot").style.display="none";
} else {
	document.getElementById("spellspot").style.display="block";
}


initiative = mod[1];
// per WotC bard's jack of all trades gives bonus to initiative
if (abOutput.indexOf("Jack of all") > -1) {
	initiative += Math.floor(prof/2);
}
//7th level champions get a bonus too
if (abOutput.indexOf("Remarkable Athlete") > -1) {
	initiative += Math.ceil(prof/2);
}



showAbil();
if (al==true) {
	output  +=   "<b>Faction:</b>  " + factions[myFaction] + " &nbsp; Lifestyle:  " + lifestyles[myLifestyle];
}
document.getElementById("status").innerHTML = output;
document.getElementById("ro").innerHTML = rollOutput;
document.getElementById("sk").innerHTML = skOutput;
document.getElementById("ab").innerHTML = abOutput;
document.getElementById("wp").innerHTML = wpOutput;
document.getElementById("ar").innerHTML = arOutput;
document.getElementById("bg").innerHTML = bgOutput;
document.getElementById("eq").innerHTML = eqOutput;
document.getElementById("la").innerHTML = languageOutput;
document.getElementById("sp").innerHTML = spOutput;

}



