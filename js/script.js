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
    }
});


// 背景画像の設定
monogatari.assets ('scenes', {
    'world': 'world.jpg',
    'goblin_village': 'goblin_village.jpg',
    'prison': 'prison.jpg',
    'gameover': 'gameover.png'
});


// スクリプト（シナリオ）
monogatari.script ({

    'Start': [
    'narrator: Do you want to skip the tutorial?',
    {
        'Choice': {
            'Skip': {
                'Text': 'Yes, skip it.',
                'Do': 'jump GoblinWorld'
            },
            'DontSkip': {
                'Text': 'No, show the tutorial.',
                'Do': 'jump Start2'
            }
        }
    }
],
    'Start2': [
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
        'master: I will cast a spell to transform you into a monster so you can infiltrate their community. We need information to protect our people and homes from the monsters.',
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
        'master: Now listen. When learning a language, the key is to guess the meaning of words from the context of the situation.',
        'master: You\'ll be thrown into a world where only the language exists. But if you observe carefully and make guesses, you\'ll gradually understand.',
        'master: However, be careful. If you use even slightly unnatural language, your disguise will be exposed, and you\'ll be caught and burned at the stake.',
        'master: It\'s a case of "learn or burn," as they say.',
        'master: Your mission this time is simple: introduce yourself and have a basic conversation. As long as you understand personal pronouns, you\'ll do fine.',
        'master: In French, for example, "Je" means "I," "Tu" or "Vous" means "You," "Il" means "He," and "Elle" means "She."',
        'master: Verbs and other words might change depending on the situation, but you\'ll need to do your best to figure it out.',
        'master: And if you\'re ever completely lost, there\'s an ancient portal connected to this very realm. They say it can reveal hidden wisdom to those who seek it—look for it on this world\'s "top page of polyglot adventure," you know what I mean.',
        'master: Then, we\'re going to Goblin Village. It\'s time to dive in!',
        'jump GoblinWorld'
    ],

    'GoblinWorld': [
        'hide character master',
        'show background goblin_village with fadeIn',
        'narrator: You approach the village of goblins, feeling a bit nervous but ready to put your French skills to the test.',
        'show character goblin normal at right',
        'goblin: Bonjour, qui es-tu?',
        {
            'Choice': {
                'Dialog': 'How do you respond?',
                'Friend': {
                    'Text': "Respond in French: 'Je suis un goblin.'",
                    'Do': 'jump MissionSuccess'
                },
                'Ignore': {
                    'Text': "Stay silent",
                    'Do': 'jump MissionFail'
                }
            }
        }
    ],

    'MissionSuccess': [
        'narrator: You say, "Je suis un ami." (I am a friend.) The goblin looks at you with curiosity but nods approvingly.',
        'master: Well done! You are now ready for more advanced tasks in this world.',
        'narrator: The adventure continues...',
        'end'
    ],


    'MissionFail': [
    'narrator: You stay silent, and the creature becomes suspicious of you. You\'re caught.',
    'show background prison with fadeIn',
    'narrator: Dragged to a dark, damp prison, you realize your mission has failed. Your captors are preparing the pyre—you\'ll soon face the flames.',
    'jump GameOver'
    ],

    'GameOver': [
    'hide character goblin',
    'show background gameover with fadeIn',
    'wait 3000',
    'end'
    ],

});
