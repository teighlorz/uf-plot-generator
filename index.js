let somethingHappens = document.getElementById("somethinghappens")
let yourProtagonist = document.getElementById("yourprotagonist")
let aGoal = document.getElementById("pursuesagoal")
let theAntagonist = document.getElementById("theantagonist")
let opposition = document.getElementById("providesopposition")
let plotButton = document.getElementById("generate")

let events=[
    "a mysterious artifact is discovered",
    "a powerful curse is unleashed",
    "a portal to another realm opens",
    "a series of strange disappearances occur",
    "ancient prophecies start coming true",
    "a magical creature is sighted in the sky",
    "a secret society reveals itself",
    "a long-lost relative returns",
    "a new, dangerous drug hits the streets",
    "a prominent figure is assassinated",
    "a celestial alignment affects magic",
    "a forgotten deity seeks worshippers",
    "a legendary weapon is stolen",
    "a rift between dimensions appears",
    "a cursed book is found in a library",
    "a ghost begins haunting a neighborhood",
    "a natural disaster reveals hidden ruins",
    "a rival faction declares war",
    "a disease with magical origin spreads",
    "a time loop occurs",
]

let protagonists=[
    "a disgraced ex-cop turned private investigator",
    "a street-smart thief with a heart of gold",
    "a relucant chosen one with untapped powers",
    "a brilliant but reclusive wizard",
    "a skilled monster hunter seeking redemption",
    "a young witch/warlock mastering their abilities",
    "an archaeologist obsessed with uncovering secrets",
    "a journalist chasing down supernatural stories",
    "a psychic detective solving paranormal mysteries",
    "a rebellious fairy princess defying her kingdom",
    "a werewolf struggling to control their transformations",
    "a vampire seeking a cure for their condition",
    "a time-traveling historian",
    "a shapeshifter navigating a dual identity",
    "a celestial being banished to Earth",
    "a cursed soul seeking a way to break their curse",
    "a skilled alchemist experimenting with forbidden magic",
    "a guardian of ancient relics",
    "a necromancer trying to undo past mistakes",
    "a displaced diety adjusting to normal life",
    "a sarcastic demon hunter with a tragic past",
    "a young psychic inheriting a family legacy of hunters",
    "a skeptic who discovers they can see ghosts",
    "a charming vampire with a conscience",
    "a reformed witch trying to live a normal life",
    "a tech-savvy ghost whisperer",
    "a retired monster slayer",
    "a haunted exorcist with a dark secret",
    "a prophesied hero with a knack for getting into trouble",
    "a secretive librarian with a knowledge of ancient texts",
    "a time-traveling knight on a quest against dark magic",
    "a rogue angel disillusioned with heavenly duties",
    "a werewolf detective solving supernatural crimes",
    "a rogue wizard living on the fringes of society",
    "a psychic medium with a mischevious spirit guide",
    "a rogue necromancer defying magical conventions",
    "a cursed bounty hunter tracking down supernatural fugitives",
    "a supernatural bartender with a network of contacts"
]

let goals=[
    "seeks to uncover a hidden artifact",
    "strives to master a newfound magical abilitiy",
    "aims to rescue a captured friend",
    "ventures into a parallel realm",
    "intends to delve into an ancient prophecy",
    "seeks vengeance for a betrayal",
    "races against time to prevent a catastrophe",
    "embarks on a quest for forbidden knowledge",
    "seeks to uncover a conspiracy threatening the city",
    "navigates a complex web of political intrigue",
    "seeks to break a curse on their family",
    "searches for a legendary creature",
    "seeks to uncover the truth behind a mysterious disappearance",
    "confronts a dark entity haunting their dreams",
    "deciphers an ancient magical ritual",
    "races to find a cure for a magical affliction",
    "uncovers the identity of a masked vigilante",
    "navigates the underworld of magical crime syndicates",
    "seeks redemption for a past mistake",
    "seeks to awaken dormant magical powers within themselves",
    "investigates a series of supernatural murders",
    "embarks on a quest to find a lost civilization",
    "seeks to protect a magical artifact from falling in the wrong hands",
    "aims to unite warring factions in the magical realm",
    "confronts a mythical creature threatening their homeland",
    "ventures into a forbidden forest to uncover its secrets",
    "strives to become the champion in a magical tournament",
    "seeks to free enslaved magical beings"
]

let antagonists =[
    "a malevolent sorcerer",
    "a cunning vampire lord",
    "a secretive coven of witches",
    "an ancient dragon awakened from slumber",
    "a vengeful spirit from the underworld",
    "a power-hungry necromancer",
    "a corrupt government official with dark secrets",
    "a rogue magical artifact with a mind of its own",
    "a shadowy organization manipulating events behind the scenes",
    "a fallen angel seeking to regain lost glory",
    "a charismatic demon leading a cult of followers",
    "a haunted doll posessed by a malevolent spirit",
    "a cursed book that drives its readers to madness",
    "a shape-shifting trickster causing havoc for amusement",
    "a family of werewolves protecting their territory",
    "a vengeful ghost seeking revenge for its untimely death",
    "a cursed object spreading misfortune to its owners",
    "a vampire clan feuding over control of the city's underworld",
    "an evil spirit manipulating dreams to trap its victims",
    "a sinister corporation experimenting with dark magic",
    "a malevolent fae court",
    "a cursed mirror that traps the souls of those who gaze into it",
    "a haunted mansion with a history of gruesome deaths",
    "a rogue witch hunter targeting innocent magical beings",
    "a former vampire hunter turned vampire, hunting their former allies"
]

let oppositions=[
    "thwarts their every move with dark magic?",
    "unleashes hordes of supernatural minions?",
    "manipulates allies into betraying them?",
    "reveals a devastating secret from their past?",
    "casts powerful illusions to decieve them?",
    "forges dark alliances with supernatural entities?",
    "sends assassins and bounty hunters after them?",
    "creates a labyrinth of enchanted traps and illusions?",
    "raises an army of the undead to attack them?",
    "corrups their allies with promises of power?",
    "sows discord amongst their closest friends and allies?",
    "places a bounty on their head?",
    "uses forbidden rituals to manipulate reality itself?",
    "summons a monsterous creature to hunt them down?",
    "employs cursed artifacts to hinder their progress?",
    "sets elaborate magical traps in their path?",
    "enchants innocent bystanders to act as unwitting spies?",
    "places powerful wards and barriers around key locations?",
    "steals their memories or vital knowledge of critical moments?",
    "corrupts ley lines to disrupt their magical abilities?",
    "casts a powerful curse on their loved ones?",
    "manipulates the weather to create natural disasters?",
    "invokes ancient oaths and contracts to bind their actions?"
]

plotButton.addEventListener("click", function(){
    let randomEvent = Math.floor( Math.random() * events.length)
    somethingHappens.textContent = events[randomEvent]

    let randomHero = Math.floor( Math.random() * protagonists.length)
    yourProtagonist.textContent = protagonists[randomHero]

    let randomGoal = Math.floor( Math.random() * goals.length)
     aGoal.textContent = goals[randomGoal]
     
     let randomAntagonist = Math.floor( Math.random() * antagonists.length)
     theAntagonist.textContent = antagonists[randomAntagonist]

     let randomOpposition = Math.floor( Math.random() * oppositions.length)
     opposition.textContent = oppositions[randomOpposition]
})