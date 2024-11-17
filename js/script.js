/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images',  {

});


monogatari.characters ({
    'master': {
        name: 'The Master',
        color: '#5bcaff',
        directory: 'master', // キャラクターごとのフォルダ
        sprites: {
            normal: 'master_normal.png'
        }
    },
    'goblin': {
        name: 'Goblin',
        color: '#bada55',
        directory: 'goblin', // キャラクターごとのフォルダ
        sprites: {
            normal: 'goblin_normal.png'
        }
    },
    'goblin2': {
        name: 'Goblin2',
        color: '#bada55',
        directory: 'goblin2', // キャラクターごとのフォルダ
        sprites: {
            normal: 'goblin2_normal.png'
        }
    },
    'femalegoblin': {
        name: 'femalegoblin',
        color: '#bada55',
        directory: 'goblinfemale', // キャラクターごとのフォルダ
        sprites: {
            normal: 'goblinfemale.png'
        }
    }
});


// 背景画像の設定
monogatari.assets('scenes', {
    'world': 'world.jpg',
    'goblin_village': 'goblin_village.jpg',
    'prison': 'prison.jpg',
    'gameover': 'gameover.png',
    'PublicSquare': 'PublicSquare.jpg',
    'FrontOfAHouse': 'FrontOfAHouse.jpg',
    'InsideAHouse': 'InsideAHouse.jpg',
    'Lake': 'Lake.jpg',
    'Ocean': 'Ocean.jpg',
    'Bakery': 'Bakery.jpg',
    'Supermarket': 'Supermarket.jpg',
    'CarDealership': 'CarDealership.jpg',
    'Office': 'Office.jpg',
    'Classroom': 'Classroom.jpg',
    'Library': 'Library.jpg',
    'Park': 'Park.jpg',
    'TrainStation': 'TrainStation.jpg',
    'Cafe': 'Cafe.jpg',
    'Rooftop': 'Rooftop.jpg',
    'Forest': 'Forest.jpg',
    'StreetAtNight': 'StreetAtNight.jpg',
    'CountrysideRoad': 'CountrysideRoad.jpg',
    'Shrine': 'Shrine.jpg',
    'MarketStreet': 'MarketStreet.jpg',
    'HospitalRoom': 'HospitalRoom.jpg',
    'AmusementPark': 'AmusementPark.jpg',
    'MountainPath': 'MountainPath.jpg',
    'TempleInterior': 'TempleInterior.jpg',
    'Festival': 'Festival.jpg',
    'Restaurant': 'Restaurant.jpg',
    'BeachAtSunset': 'BeachAtSunset.jpg',
    'Bridge': 'Bridge.jpg',
    'ShoppingMall': 'ShoppingMall.jpg',
    'SubwayStation': 'SubwayStation.jpg',
    'SnowyVillage': 'SnowyVillage.jpg',
    'SchoolHallway': 'SchoolHallway.jpg',
    'HotelLobby': 'HotelLobby.jpg',
    'CafeTerrace': 'CafeTerrace.jpg',
    'Aquarium': 'Aquarium.jpg',
    'AbandonedBuilding': 'AbandonedBuilding.jpg',
    'Garden': 'Garden.jpg',
    'StreetMarketAtNight': 'StreetMarketAtNight.jpg',
    'Observatory': 'Observatory.jpg',
    'ForestClearing': 'ForestClearing.jpg',
    'RiceFields': 'RiceFields.jpg',
    'TraditionalFarmhouse': 'TraditionalFarmhouse.jpg',
    'CountryRoadAtSunset': 'CountryRoadAtSunset.jpg',
    'VillageSquare': 'VillageSquare.jpg',
    'CountrysideTrainStation': 'CountrysideTrainStation.jpg',
    'Riverbank': 'Riverbank.jpg',
    'HarvestField': 'HarvestField.jpg',
    'FishingVillage': 'FishingVillage.jpg',
    'MountainVillage': 'MountainVillage.jpg',
    'CountrysideBusStop': 'CountrysideBusStop.jpg',
    'LocalShrineDuringFestival': 'LocalShrineDuringFestival.jpg',
    'AbandonedWatermill': 'AbandonedWatermill.jpg',
    'CountrysideSchool': 'CountrysideSchool.jpg',
    'HilltopViewpoint': 'HilltopViewpoint.jpg'
});



// スクリプト（シナリオ）
monogatari.script ({

    'Start': [
        'show scene black with fade',
        'narrator: Choose the scenario.',
        {
            'Choice': {
                'Tutorial': {
                    'Text': 'Tutorial and Lesson 1',
                    'Do': 'jump Start1-1'
                },
                'Lesson 2': {
                    'Text': 'Lesson 2: What is their problem?',
                    'Do': 'jump 2Start'
                }
            }
        }
    ],

    'Start1-1': [
    'narrator: Do you want to skip the tutorial?',
    {
        'Choice': {
            'Skip': {
                'Text': 'Yes, skip it.',
                'Do': 'jump GoblinWorld'
            },
            'DontSkip': {
                'Text': 'No, show the tutorial.',
                'Do': 'jump Start1-3'
            }
        }
    }
],
    'Start1-3': [
        'show background world with fadeIn',
        'narrator: You suddenly find yourself transported to another world. Before you stands an old man with a long beard who appears to be a sage, known simply as "The Master."',
        'show character master normal at center with fadeIn',
        'master: Bonjour, étranger. Qui êtes-vous? Étranger, comprends-tu le français ? Non, cela doit être difficile de te poser cette question si soudainement.',
        'narrator: The master realizes you don’t understand and switches to English.',
        'master: Um...Hello, stranger. Who are you?',
        {
            'Choice': {
                'Dialog': 'Do you respond?',
                'Respond': {
                    'Text': 'Respond to the Master',
                    'Do': 'jump MasterExplanation'
                },
                'Silent': {
                    'Text': 'Stay Silent',
                    'Do': 'jump SilentResponse'
                }
            }
        }
    ],

    'MasterExplanation': [
        'master: Ah, I knew it. You\'re from another world.',
        'master: I\'ll provide you with a place to stay and enough food. In return, I have a favor to ask.',
        'master: In this world, humans and monsters live close to each other, but they don\'t fully understand one another and remain in conflict.',
        'master: So, I’ll cast a spell to turn you into a monster, and I want you to gather information about their way of life.',
        'master: Incidentally, the monsters around here speak French—likely influenced by the humans in this region.',
        'master: What? You don’t speak French? Don’t worry. I’ll teach you.',
        'master: Huh? You’re suggesting I should go instead? I may have mastered countless languages, but unfortunately, I cannot cast transformation magic on myself.',
        'master: Besides, didn’t you want to learn a new language anyway?',
        'master: Now then, let’s start getting you ready.',
        'jump Rules'
    ],

    'SilentResponse': [
        'narrator: You decide to stay silent, and the Master looks at you with a knowing smile.',
        'jump MasterExplanation'
    ],

    'Rules': [
        'master: First, you\'ll head to the goblin village. There, you will engage in conversations and interact with them.',
        'master: Don\'t worry. The goblins only use extremely simple words. Even if you don\'t fully understand, you\'ll manage somehow.',
        'master: To help you, I\'ll cast a spell that lets you see magical symbols showing how to pronounce the words. This should make things easier for you.',
        'master: Reading aloud is very effective way to learn phrases.',
        'master: Now listen. When learning a language, the key is to guess the meaning of words from the context of the situation.',
        'master: You\'ll be thrown into a world where only the language exists. But if you observe carefully and make guesses, you\'ll gradually understand.',
        'master: However, be careful. If you use even slightly unnatural language, your disguise will be exposed, and you\'ll be caught and burned at the stake.',
        'master: It\'s a case of "learn or burn," as they say.',
        'master: Your mission this time is simple: introduce yourself and have a basic conversation. As long as you understand personal pronouns, you\'ll do fine.',
        'master: In French, for example, "Je" means "I," "Tu" or "Vous" means "You," "Il" means "He," and "Elle" means "She."',
        'master: Verbs and other words might change depending on the situation, but you\'ll need to do your best to figure it out.',
        'master: If you\'re ever completely lost, seek the ancient portal linked to this realm. They call it the \'top page of polyglot adventure,\' you know what I mean.',
        'master: Then, we\'re going to Goblin Village. It\'s time to dive in!',
        'hide character master',
        'jump GoblinWorld'
    ],

'GoblinWorld': [
    'show background goblin_village with fadeIn',
    'narrator: You approach the village of goblins, feeling a bit nervous but ready to put your French skills to the test.',
    'show character goblin normal at right',
    'goblin: Bonjour, qui es-tu? (bɔ̃.ʒuʁ ki e ty)',
    {
        'Choice': {
            'Dialog': 'How do you respond?',
            'Friend': {
                'Text': "'Je suis un goblin.' (ʒə sɥi œ̃ ɡɔ.blɛ̃)",
                'Do': 'jump MissionSuccess'
            },
            'Ignore': {
                'Text': "'Tu es un goblin.' (ty ɛ œ̃ ɡɔ.blɛ̃)",
                'Do': 'jump MissionFail'
            }
        }
    }
],

'MissionSuccess': [
    'goblin: Vous êtes aussi un goblin. Bienvenue. (vu z‿e osi œ̃ ɡɔ.blɛ̃ bjɛ̃.və.ny)',
    'show character goblin2 normal with fadeIn at left',
    'goblin: Lui, il est aussi un goblin. C\'est mon ami. (lɥi il ɛ osi œ̃ ɡɔ.blɛ̃ sɛ mɔ̃‿a.mi)',
    'narrator: You think they all look the same.',
    'goblin: Il est gentil. Et toi? (il ɛ ʒɑ̃.ti e twa)',
    {
        'Choice': {
            'Dialog': 'Que répondez-vous?',
            'Good': {
                'Text': 'Je suis gentil aussi. (ʒə sɥi ʒɑ̃.ti o.si)',
                'Do': 'jump ElleIntro'
            },
            'Bad': {
                'Text': 'Je suis méchant. (ʒə sɥi me.ʃɑ̃ o.si)',
                'Do': 'jump MissionFail'
            }
        }
    }
],


'ElleIntro': [
    'hide character goblin2',
    'show character femalegoblin normal with fadeIn at left',
    'goblin: Très bien. Maintenant, regarde! Elle, c\'est une gobline. (tʁɛ bjɛ̃ mɛ̃t(ə)nɑ̃ ʁə.ɡaʁ ɛl sɛ yn ɡɔ.blin)',
    'femalegoblin: Bonjour! Je suis Lila. (bɔ̃.ʒuʁ ʒə sɥi li.la)',
    'goblin: Elle est intelligente. (ɛl ɛ ɛ̃.te.liʒɑ̃t)',
    {
        'Choice': {
            'Dialog': 'Que répondez-vous?',
            'Compliment': {
                'Text': 'Moi aussi, je pense qu\'elle est très intelligente.(mwa osi ʒə pɑ̃s kɛl ɛ tʁɛ ɛ̃.te.liʒɑ̃t)',
                'Do': 'jump EndLesson'
            },
            'Observation': {
                'Text': 'Elle est différente. (ɛl ɛ di.fe.ʁɑ̃t)',
                'Do': 'jump MissionFail'
            }
        }
    }
],

'EndLesson': [
    'goblin: Toi aussi, tu es gentil! (twa o.si ty ɛ ʒɑ̃.ti)',
    'femalegoblin: Oui, très bien! (wi tʁɛ bjɛ̃)',
    'goblin: Au revoir! Et reviens bientôt nous voir! (o ʁə.vwaʁ e ʁə.vjɛ̃ bjɛ̃.tɔ̃ nu vwaʁ)',
    'jump Clear1'
],
    
'Clear1':[
    'show scene black with fade',
    'show background world with fadeIn',
    'show character master normal with fadeIn',
    'master: Well done! You cleared the first mission.',
    'master: Today, rest well and prepare for the next mission.',
    'show background black with fade',
    'jump Start'
],


    'MissionFail': [
    'narrator: The creature becomes suspicious of you after observing your behavior... You\'re caught.',
    'show scene black with fade',
    'show background prison with fadeIn',
    'narrator: Dragged to a dark, damp prison, you realize your mission has failed. Your captors are preparing the pyre—you\'ll soon face the flames.',
    'jump GameOver'
    ],

    'GameOver': [
    'show background gameover with fadeIn',
    'wait 3000',
    'end'
    ],

/* SCENE 2: START */
"2Start": [
    "show background goblin_village with fadeIn",
    "show character master normal with fadeIn",
    "Master: Adventurer, listen. The goblins seem troubled. I don’t know why, but something is wrong.",
    "Master: Go and talk to them. Find out what’s going on.",
    "Master: Come back when you have news.",
    "hide character master",
    "show scene black with fade",
    "jump 2Conversation1"
],

/* SCENE 3: CONVERSATION 1 */
"2Conversation1": [
    "show background VillageSquare with fadeIn",
    "show character goblin normal at left",
    "goblin: Salut! Nous sommes des gobelins. Nous avons un problème. [sa.ly] [nu.sɔm de ɡɔ.blɛ̃] [nu avɔ̃ œ̃ pʁo.blɛm]",
    {"Choice": {
        "Correct": {
            "Text": "Quel problème? [kɛl pʁo.blɛm]",
            "Do": "next"
        },
        "Wrong1": {
            "Text": "Vous êtes où? [vu.z‿ɛ.t‿u]",
            "Do": "jump MissionFail"
        },
        "Wrong2": {
            "Text": "Je n’ai pas de problème. [ʒə nɛ pa də pʁo.blɛm]",
            "Do": "jump MissionFail"
        }
    }},
    "show character goblin2 normal at right",
    "goblin2: Nous avons perdu quelque chose d’important. C’est un objet précieux. [nu avɔ̃ pɛʁ.dy kɛl.kə ʃoz‿ɛ̃.pɔʁ.tɑ̃] [s‿ɛ.t‿œ̃.n‿ɔb.ʒɛ pʁe.sjø]",
        {"Choice": {
        "Correct": {
        "Text": "C’est où? [s‿ɛ.t‿u]",
        "Do": "next"
    },
    "Wrong1": {
        "Text": "Vous êtes des amis? [vu.z‿ɛ.d‿dez‿a.mi]",
        "Do": "jump MissionFail"
    },
    "Wrong2": {
        "Text": "Ce n’est pas grave. [s‿ə nɛ pa ɡʁav]",
        "Do": "jump MissionFail"
    }
    }},
"goblin2: Nous pensons que c’est près de la rivière. [nu pɑ̃.sɔ̃ kə s‿ɛ pʁɛ də la ʁi.vjɛʁ]",
"goblin: Oui, la dernière fois que nous l’avons vu, c’était là-bas. [wi la dɛʁ.njɛʁ fwa kə nu la.vɔ̃ vy s‿ɛ.t‿ɛ la.ba]",

    {"Choice": {
        "Correct": {
            "Text": "Merci, je vais chercher. [mɛʁ.si ʒə vɛ ʃɛʁ.ʃe]",
            "Do": "hide character goblin",
            "Do":"hide character goblin2",
            "Do":"show scene black with fade",
            "Do":"jump 2Conversation2",
        },
        "Wrong1": {
            "Text": "Trois, c’est tout? [tʁwa s‿ɛ.t‿u]",
            "Do": "jump MissionFail"
        },
        "Wrong2": {
            "Text": "Je vais chez moi. [ʒə vɛ ʃe mwa]",
            "Do": "jump MissionFail"
        }
    }}
],

/* SCENE 4: CONVERSATION 2 */
"2Conversation2": [
    'show scene black with fade',
    "show background Riverbank with fadeIn",
    "show character femalegoblin normal at left",
"femalegoblin: Bonjour! Tu cherches quelque chose? Hier, nous avons vu une lumière près de l’eau. [bɔ̃.ʒuʁ] [ty ʃɛʁʃ kɛl.kə ʃoz? jɛʁ nu avɔ̃ vy yn ly.mjɛʁ pʁɛ də lo]",
{"Choice": {
    "Correct": {
        "Text": "Qu’est-ce que c’était? [kɛs‿kə s‿ɛ.t‿ɛ]",
        "Do": "next"
    },
    "Wrong1": {
        "Text": "C’est votre eau? [s‿ɛ vɔtʁ‿o]",
        "Do": "jump MissionFail"
    },
    "Wrong2": {
        "Text": "Je ne cherche rien. [ʒə n‿ʃɛʁʃ ʁjɛ̃]",
        "Do": "jump MissionFail"
    }
}},
"femalegoblin: Une lumière brillait dans l’eau. Nous n’avons rien touché. [yn ly.mjɛʁ bʁi.jɛ dɑ̃ lo nu n‿avɔ̃ ʁjɛ̃ tu.ʃe]",
{"Choice": {
    "Correct": {
        "Text": "Merci, je vais voir. [mɛʁ.si ʒə vɛ vwaʁ]",
        "Do": "hide character femalegoblin",
        "Do": "show scene black with fade",
        "Do": "jump 2Clear"
    },
    "Wrong1": {
        "Text": "Vous avez peur? [vu.z‿a.ve pœʁ]",
        "Do": "jump MissionFail"
    },
    "Wrong2": {
        "Text": "Ce n’est rien. [s‿ə n‿ɛ ʁjɛ̃]",
        "Do": "jump MissionFail"
    }
}}

],

/* SCENE 5: CLEAR */
"2Clear": [
    "narrator: You dove into the river and found the treasure. The goblins were overjoyed when you returned it to them!",
    'show scene black with fade',
    "show background goblin_village with fadeIn",
    "show character master normal with fadeIn",
    "Master: You’re back! What did you find out?",
    "Master: So, the goblins lost something important? And you learned that *Nous sommes* means 'we are,' and *Elles sont* means 'they are' for women.",
    "Master: Great job! You’ve helped them and learned something new. Keep practicing, adventurer!",
    "hide character master",
    "show scene black with fade",
    "jump EndingScene"
],

/* ENDING SCENE */
"EndingScene": [
    "show scene black with fade",
    "centered You have completed the mission!",
    "end"
]


});