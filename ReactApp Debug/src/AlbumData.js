const JSONdata = [
    {
        "info": {
                "SName": "Testovaci dotaznik", 
                "SAuthor": "čet. Jitka Volná", 
                "SAbout": "Dotazník testovani", 
                "QuestSum": "15", 
                "STime": "10 minut"
            },
        "pages": [
            {
                "question": [ {
                    "type": "text",
                    "QTitle": "Vaše hodnost?"
                    }
                ]
            }, {
                "question": [ {
                    "type": "radiogroup",
                    "QTitle": "Kdy jsou Vánoce?",
                    "Choices": ["12.12.", "24.12.", "1.1."],
                    "CorrectAnsw": "24.12."
                    }
                ]
            }, {
                "question": [ {
                    "type": "checkbox",
                    "QTitle": "Zvolte mužská jména",
                    "Choices": ["Radek", "Aneta", "Pavel"],
                    "CorrectAnsw": ["Radek", "Pavel"]
                    }
                ]
            }, {
                "question": [ {
                    "type": "text",
                    "QTitle": "Jméno vaší matky?"
                    }
                ]
            }
        ]
    },

    {
        "info": {
                "SName": "Testovaci dotaznik02", 
                "SAuthor": "čet. 2 Volná", 
                "SAbout": "Dotazník 2", 
                "QuestSum": "2", 
                "STime": "10 2"
            },
        "pages": [
            {
                "question": [ {
                    "type": "text",
                    "QTitle": "Vaše hodnost?"
                    }
                ]
            }, {
                "question": [ {
                    "type": "text",
                    "QTitle": "Jméno vaší matky?"
                    }
                ]
            }, {
                "question": [ {
                    "type": "radiogroup",
                    "QTitle": "Kdy jsou Vánoce?",
                    "Choices": ["12.12.", "24.12.", "1.1."],
                    "CorrectAnsw": "24.12."
                    }
                ]
            }, {
                "question": [ {
                    "type": "checkbox",
                    "QTitle": "Zvolte mužská jména",
                    "Choices": ["Radek", "Aneta", "Pavel"],
                    "CorrectAnsw": ["Radek", "Pavel"]
                    }
                ]
            }
        ]
    },

    {
        "info": {
                "SName": "Testovaci dotaznik333", 
                "SAuthor": "čet. J33itka 3", 
                "SAbout": "3 testovani", 
                "QuestSum": "3", 
                "STime": "10 minut"
            },
        "pages": [
            {
                "question": [ {
                    "type": "text",
                    "QTitle": "Vaše hodnost?"
                    }
                ]
            }, {
                "question": [ {
                    "type": "text",
                    "QTitle": "Jméno vaší matky?"
                    }
                ]
            }, {
                "question": [ {
                    "type": "radiogroup",
                    "QTitle": "Kdy jsou Vánoce?",
                    "Choices": ["12.12.", "24.12.", "1.1."],
                    "CorrectAnsw": "24.12."
                    }
                ]
            }, {
                "question": [ {
                    "type": "checkbox",
                    "QTitle": "Zvolte mužská jména",
                    "Choices": ["Radek", "Aneta", "Pavel"],
                    "CorrectAnsw": ["Radek", "Pavel"]
                    }
                ]
            }
        ]
    }
]

export default JSONdata;