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
    'goblin_village': 'goblin_village.jpg'
});


// スクリプト（シナリオ）
monogatari.script ({
    'Start': [
        'show background world with fadeIn',
        'narrator: You suddenly find yourself transported to another world. Before you stands an old man with a long beard who appears to be a sage, known simply as "The Master."',
        'show character master normal at center with fadeIn',
        'master: Bonjour, étranger. Qui êtes-vous? Étranger, comprends-tu le français ? Non, cela doit être difficile de te poser cette question si soudainement',
        'narrator: The master realizes you don’t understand and switches to English.',
        'master: Hello, stranger. Who are you?',
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
        'master: In order to survive in this world, you must learn the local language, which is French. You must disguise yourself as one of the monsters here and infiltrate their society.',
        'master: Your first mission is to enter the world of goblins. They use only simple language, which should be easier for you to imitate.',
        'master: Let’s start with basic pronouns.',
        'jump BasicPronouns'
    ],

    'SilentResponse': [
        'narrator: You decide to stay silent, and the Master looks at you with a knowing smile.',
        'jump MasterExplanation'
    ],

    'BasicPronouns': [
        'show background goblin_village with fadeIn',
        'narrator: The Master writes down the basic pronouns for you.',
        'master: Je - I, Tu - You, Il - He, Elle - She',
        'master: These are the basics. Practice them well. Your mission is to greet the goblins in their own language.',
        'jump GoblinWorld'
    ],

    'GoblinWorld': [
        'narrator: You approach the world of goblins, feeling a bit nervous but ready to put your French skills to the test.',
        'show character goblin normal at left',
        'goblin: Bonjour, qui es-tu?',
        {
            'Choice': {
                'Dialog': 'How do you respond?',
                'Friend': {
                    'Text': "Respond in French: 'Je suis un ami.'",
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
        'narrator: You stay silent, and the goblin becomes suspicious of you. Your mission fails.',
        'show background black with fadeOut',
        'narrator: Game Over',
        'end'
    ]
});
