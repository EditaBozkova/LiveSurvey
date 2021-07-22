const JSONdata = [
    {
        "info": {
                "SName": "testMix", 
                "ID": "testMix",
                "SAuthor": "plk. test", 
                "SAbout": "Kratky dotaznik pro debugging", 
                "STime": "?"
            },
        "questions": [
            {
                "Type": "radio",
                "ID": "quest1",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše ****?",
                "Choices": ["odpoved1.1", "odpoved1.2", "odpoved1.3"]
            },
            {
                "Type": "radio",
                "ID": "quest2",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše ****?",
                "Choices": ["odpoved2.1", "odpoved2.2"]
            }, {
                "Type": "text",
                "ID": "quest3",
                "QTitle": "Kolik je Vám let?"
            }, {
                "Type": "checkbox",
                "ID": "quest4",
                "CorrectAnsw": "false",
                "QTitle": "Oblíbene dny",
                "Choices": ["Po", "Ut", "Str"]
            }, {
                "Type": "text",
                "ID": "quest5",
                "QTitle": "Jaký je den?"
            }
        ]
    },
    {
        "info": {
                "SName": "testText", 
                "ID": "testText",
                "SAuthor": "des. test", 
                "SAbout": "Kratky dotaznik pro debugging text odpovedi", 
                "STime": "?"
            },
        "questions": [
            {
                "Type": "text",
                "ID": "quest1",
                "QTitle": "Kolik je Vám let?"
            },
            {
                "Type": "text",
                "ID": "quest2",
                "QTitle": "Kolik je Vám dnů?"
            }
        ]
    },
    {
        "info": {
                "SName": "testCheck", 
                "ID": "testcheck",
                "SAuthor": "des. test", 
                "SAbout": "Kratky dotaznik pro debugging text odpovedi", 
                "STime": "?"
            },
        "questions": [
            {
                "Type": "checkbox",
                "ID": "questi1",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše pohlaví?",
                "Choices": ["Žena", "Muž"]
            }
        ]
    },
    {
        "info": {
                "SName": "testradio", 
                "ID": "testradio",
                "SAuthor": "des. test", 
                "SAbout": "Kratky dotaznik pro debugging text odpovedi", 
                "STime": "?"
            },
        "questions": [
            {
                "Type": "radio",
                "ID": "quest1",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše pohlaví?",
                "Choices": ["Žena", "Muž"]
            }
        ]
    },
    {
        
        "info": {
                "SName": "Kryptoměny", 
                "ID": "krypto", 
                "SAuthor": "des. Edita Božková", 
                "SAbout": "Průzkum napříč veřejností za účelem zjištění důvěry společnosti v jednotlivé kryptoměny.", 
                "QuestSum": "14", 
                "STime": "10 minut"
            },
        "questions": [
            {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše pohlaví",
                "Choices": ["Žena", "Muž"]
            }, {
                "Type": "text",
                "QTitle": "Kolik je Vám let?"
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše nejvyšší dosažené vzdělání?",
                "Choices": ["Žádné", "ZŠ", "SŠ", "VŠ"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Víte, co jsou to kryptoměny?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Máte nějaké zkušenosti s investováním do kryptoměn?",
                "Choices": ["Ano", "Ne a neplánuji to", "Ne, ale přemýšlím o tom"]
            }, {
                "Type": "text",
                "QTitle": "Co Vás od investování do kryptoměn odrazuje?"
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jste vlastníkem nějaké kryptoměny?",
                "Choices": ["Ano", "Ne"]
            }, {
                "Type": "text",
                "QTitle": "Pokud ano, jakou kryptoměnu vlastníte a proč?"
            }, {
                "Type": "checkbox",
                "CorrectAnsw": "false",
                "QTitle": "Jaké kryptoměny znáte?",
                "Choices": ["Bitcoin", "Ethereum", "Dogecoin", "Ripple", "Litecoin", "Tether", "SafeMoon", "Stellar", "NEO"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jaký máte postoj ke kryptoměnám?",
                "Choices": ["Aktivně se o ně zajímám a investuji do nich", "Ne a neplánuji to", "Znám je a zajímám se o ně, ale neinvestuji", "Mám neutrální postoj", "Neznám a nezjímám se", "Nepodporuji je"]
            }, {
                "Type": "checkbox",
                "CorrectAnsw": "false",
                "QTitle": "Používáte kryptoměny?",
                "Choices": ["Používám je k placení", "Obchoduji s nimi na burze", "Je to pro mě forma spoření", "Těžím je", "Neznám a nezjímám se", "Nakoupil/a jsem a držím si je", "Nijak je nevyužívám"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Máte důvěru v trh s kryptoměnami?",
                "Choices": ["Ano", "Ne", "Nemám na to názor"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Myslíte, že obchodování s kryptoměnami má potenciál?",
                "Choices": ["Ano", "Ne", "Nevím"]
            }, {
                "Type": "text",
                "QTitle": "Jaký máte názor na tento způsob výdělku?"
            }
        ]
    },

    {
        "info": {
                "SName": "Sexuální obtěžování ", 
                "ID": "sexual", 
                "SAuthor": "des. Edita Božková", 
                "SAbout": "Anonymní dotazník, který má za úkol zjistit míru sexuálního obtěžování u obětí", 
                "QuestSum": "16", 
                "STime": "10 minut"
            },
        "questions": [
            {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše pohlaví",
                "Choices": ["Žena", "Muž"]
            }, {
                "Type": "text",
                "QTitle": "Kolik je Vám let?"
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Jaké je Vaše nejvyšší dosažené vzdělání?",
                "Choices": ["Žádné", "ZŠ", "SŠ", "VŠ"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Setkal/a jste se někdy s jakoukoliv formou sexuálního obtěžování?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "checkbox",
                "CorrectAnsw": "false",
                "QTitle": "Pokud ano, s čím přesně?",
                "Choices": ["Nevyžádané doteky", "Nevhodné poznámky", "Pokřikování na ulici", "Sexualizování Vaší osoby", "Pokus o znásilnění", "Sexuální násilí", "Nevhodné návrhy a nabídky na sexuální služby", "Nežádoucí fotografie"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Setkal/a jste se někdy s nevhodnými vtipy na Vaši osobu, které měli sexuální podtext?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Setkal/a jste se někdy s nevhodnými poznámkami či narážkami na Vaši osobu?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Zažil/a jste někdy nechtěné dotyky na intimní partie?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Dělal Vám někdo nevhodné sexuální návrhy?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Stalo se Vám někdy, že Vás někdo sexuálně obtěžoval a Vy jste se cítil/a bezmocně?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Poslal Vám někdo nevyžádané fotografie svých intimních partií?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Nutil Vás někdo k sexuálním činnostem?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Ohradila jste se v případě, že Vás někdo jakkoliv sexuálně obtěžoval?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "text",
                "QTitle": "Pokud ne, proč"
            }, {
                "Type": "text",
                "QTitle": "Pokud ano, jak?"
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Stali jste se někdy obětí pokusu o znásilnění, či skutečného znásilnění?",
                "Choices": ["Ano", "Ne", "Nejsem si jistý/á"]
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Byl/a jste někdy nahlásit sexuální obtěžování na policii?",
                "Choices": ["Ano", "Ne, ale chtěl/a jsem", "Nikdy se mi nic takového nestalo", "Ne, nebyl/a"]
            }, {
                "Type": "text",
                "QTitle": "Pokud jste se stali obětí sexuálního násilí a neřešili jste to s policií, jak jste se k tomu postavili?"
            }, {
                "Type": "radio",
                "CorrectAnsw": "false",
                "QTitle": "Pokud jste se stal/a obětí sexuálního obtěžování, zanechalo to na Vás nějaké následky?",
                "Choices": ["Nejsem oběť sexuálního násilí", "Nezanechalo to na mně žádné následky", "Ano, zanechalo to na mě trvalé následky"]
            }
        ]
    }
]

export default JSONdata;