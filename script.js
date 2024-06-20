const quizData = [
    {
        question: "La longueur d'onde de la lumière visible varie de :",
        answers: {
            a: "380 um à 750 ^m",
            b: "380nm à 750nm",
            c: "380 pm à 750 pm"
        },
        correct: "b"
    },
    {
        question: "Pour la théorie quantique, lorsqu'un électron change d'orbite en se rapprochant du noyau, il y a :",
        answers: {
            a: "réception de photon",
            b: "émission de photon",
            c: "émission et/ou réception de photon"
        },
        correct: "b"
    },
    {
        question: "Pour qu'un matériau vert fluorescent restitue sa couleur, il faut l'exposer à une source lumineuse :",
        answers: {
            a: "rouge",
            b: "orange",
            c: "violette"
        },
        correct: "c"
    },
    {
        question: "L'intensité lumineuse s'exprime en :",
        answers: {
            a: "Lumen (1m)",
            b: "Candela (cd)",
            c: "Lux (1)"
        },
        correct: "b"
    },
    {
        question: "La cathodoluminescence s'applique pour les écrans :",
        answers: {
            a: "LCD",
            b: "Plasma",
            c: "CRT"
        },
        correct: "c"
    },
    {
        question: "Les bâtonnets sont :",
        answers: {
            a: "moins sensibles que les cônes",
            b: "plus sensibles que les cônes",
            c: "autant sensibles que les cônes"
        },
        correct: "b"
    },
    {
        question: "Dans la rétine, le traitement de la couleur est réalisé par :",
        answers: {
            a: "Les cônes et les bâtonnets",
            b: "Les cônes uniquement",
            c: "Les bâtonnets uniquement"
        },
        correct: "b"
    },
    {
        question: "Chez l'homme, un défaut de perception de couleur (daltonisme) est dû :",
        answers: {
            a: "à un dysfonctionnement des bâtonnets",
            b: "à un dysfonctionnement des cônes",
            c: "à un dysfonctionnement des bâtonnets et des cônes"
        },
        correct: "b"
    },
    {
        question: "En synthèse additive, si on veut obtenir une couleur blanche sur un écran, il faut :",
        answers: {
            a: "100% rouge, 100% vert, 100% bleu",
            b: "0% rouge, 0% vert, 0% bleu",
            c: "50% rouge, 50% vert, 50% bleu"
        },
        correct: "a"
    },
    {
        question: "En synthèse additive, si on veut obtenir une couleur cyan sur un écran, il faut :",
        answers: {
            a: "100% rouge, 0% vert, 100% bleu",
            b: "0% rouge, 100% vert, 100% bleu",
            c: "100% rouge, 100% vert, 0% bleu"
        },
        correct: "b"
    },
    {
        question: "En synthèse soustractive, si on veut obtenir une couleur verte, il faut :",
        answers: {
            a: "100% Jaune, 0% Magenta, 100% Cyan",
            b: "0% Jaune, 100% Magenta, 100% Cyan",
            c: "100% Jaune, 100% Magenta, 0% Cyan"
        },
        correct: "a"
    },
    {
        question: "En synthèse soustractive, si on veut obtenir une couleur bleue, il faut :",
        answers: {
            a: "100% Jaune, 0% Magenta, 100% Cyan",
            b: "0% Jaune, 100% Magenta, 100% Cyan",
            c: "100% Jaune, 100% Magenta, 0% Cyan"
        },
        correct: "b"
    },
    {
        question: "Pour les écrans de visualisation, le contraste c'est le rapport :",
        answers: {
            a: "(Max+Min)/Min",
            b: "(Max-Min)/Min",
            c: "Max/Min"
        },
        correct: "c"
    },
    {
        question: "Au niveau d'un écran, la résolution c'est :",
        answers: {
            a: "la distance entre deux pixels",
            b: "la taille du pixel",
            c: "le nombre de pixels par ligne multiplié par le nombre de lignes"
        },
        correct: "a"
    },
    {
        question: "Le gamut d'un écran couleur, c'est :",
        answers: {
            a: "la plage de fréquence de rafraîchissement de l'image",
            b: "le nombre maximum de pixels affichables par ligne",
            c: "les couleurs que cet écran peut reproduire"
        },
        correct: "c"
    },
    {
        question: "Dans un CRT, la déviation du faisceau d'électron est réalisée grâce à :",
        answers: {
            a: "Des plaques métalliques",
            b: "Des bobines de déviation",
            c: "Des bobines et des plaques métalliques"
        },
        correct: "b"
    },
    {
        question: "Dans un CRT, l'anode est située :",
        answers: {
            a: "à l'arrière du tube",
            b: "à l'avant du tube",
            c: "au milieu du tube"
        },
        correct: "b"
    },
    {
        question: "La tension de Cut OFF, est la tension :",
        answers: {
            a: "à partir de laquelle un écran s'illumine",
            b: "maximale de balayage du système de déviation",
            c: "d'alimentation de l'anode"
        },
        correct: "a"
    },
    {
        question: "Le masque trinitron (SONY) est utilisé avec des luminophores :",
        answers: {
            a: "ronds",
            b: "linéaires",
            c: "rectangulaires"
        },
        correct: "b"
    },
    {
        question: "La THT est appliquée sur :",
        answers: {
            a: "cathode",
            b: "le déviateur",
            c: "l'anode"
        },
        correct: "c"
    },
    {
        question: "Dans les écrans LCD, on utilise :",
        answers: {
            a: "Un polarisateur horizontal uniquement",
            b: "Un polarisateur vertical uniquement",
            c: "Un polarisateur horizontal et un polarisateur vertical"
        },
        correct: "c"
    },
    {
        question: "Dans la technologie TFT, il y a un transistor qui commande :",
        answers: {
            a: "un pixel",
            b: "un sous-pixel",
            c: "chaque ligne"
        },
        correct: "b"
    },
    {
        question: "Au sein d'un écran LCD, d'un point de vue électronique, les cristaux liquides sont :",
        answers: {
            a: "considérés comme une résistance",
            b: "considérés comme un condensateur",
            c: "considérés comme une self"
        },
        correct: "b"
    },
    {
        question: "En face avant d'un écran LCD, on trouve :",
        answers: {
            a: "des luminophores RVB",
            b: "des filtres de couleurs RVB",
            c: "des luminophores RVB et des filtres de couleurs RVB"
        },
        correct: "b"
    },
    {
        question: "Sur un écran LCD, il y a :",
        answers: {
            a: "une source de rétro-éclairage par drivers lignes ou colonnes (4 à 6)",
            b: "une seule source de rétro-éclairage",
            c: "autant de sources de rétro-éclairage que de pixels"
        },
        correct: "b"
    },
    {
        question: "Au sein d'une capsule élémentaire d'un écran plasma, il y a :",
        answers: {
            a: "le vide",
            b: "une photo-diode",
            c: "un mélange de gaz ionisé"
        },
        correct: "c"
    },
    {
        question: "Pour commander et maintenir l'allumage d'un pixel, un écran plasma nécessite :",
        answers: {
            a: "Deux électrodes",
            b: "Six électrodes",
            c: "Quatre électrodes"
        },
        correct: "b"
    },
    {
        question: "Au sein d'une capsule élémentaire d'un écran plasma, il y a :",
        answers: {
            a: "un filtre de couleurs",
            b: "une couche de phosphore",
            c: "une couche de phosphore et un filtre de couleurs"
        },
        correct: "c"
    },
    {
        question: "Au sein d'une capsule élémentaire d'un écran plasma, l'excitation électrique génère l'émission :",
        answers: {
            a: "d'une lumière blanche",
            b: "d'Infra-Rouge",
            c: "d'Ultra-Violet"
        },
        correct: "b"
    },
    {
        question: "Pour un écran plasma, le cycle d'allumage d'un sous-pixel est toujours de la forme :",
        answers: {
            a: "Effacement, Écriture",
            b: "Effacement, Écriture, Maintien écriture",
            c: "Effacement, Maintien effacement, Écriture, Maintien écriture"
        },
        correct: "b"
    },
    {
        question: "Les dalles tactiles s'installent sur :",
        answers: {
            a: "CRT uniquement",
            b: "LCD uniquement",
            c: "tous types d'écran"
        },
        correct: "c"
    },
    {
        question: "Un écran tactile résistif est :",
        answers: {
            a: "One-touch",
            b: "Multi-touch",
            c: "OneTouch et Multi-touch"
        },
        correct: "a"
    },
    {
        question: "Un écran tactile FTIR est :",
        answers: {
            a: "une amélioration de la dalle Infra Rouge",
            b: "une amélioration de la dalle Résistive",
            c: "une nouvelle technologie de capteur tactile"
        },
        correct: "a"
    },
    {
        question: "Les défauts de géométrie de l'image (parallélisme, centrage) se trouvent sur un :",
        answers: {
            a: "LCD",
            b: "CRT",
            c: "OLED"
        },
        correct: "b"
    },
    {
        question: "Le défaut d'un masque trinitron se traduit par :",
        answers: {
            a: "des lignes horizontales blanches",
            b: "des lignes horizontales noires",
            c: "des lignes horizontales grises"
        },
        correct: "b"
    },
    {
        question: "Le réglage de focalisation est présent sur les écrans :",
        answers: {
            a: "LCD",
            b: "CRT",
            c: "Plasma"
        },
        correct: "b"
    },
    {
        question: "L'angle de vue latéral d'un LCD :",
        answers: {
            a: "ne varie pas en fonction de l'âge",
            b: "s'améliore en fonction de l'âge",
            c: "se dégrade en fonction de l'âge"
        },
        correct: "c"
    },
    {
        question: "La technologie OLED :",
        answers: {
            a: "utilise une lampe néon pour le rétro-éclairage",
            b: "utilise une lampe LED pour le rétro-éclairage",
            c: "ne nécessite pas de lampe de rétro-éclairage"
        },
        correct: "c"
    },
    {
        question: "ODS est le système de visualisation radar pour :",
        answers: {
            a: "Les CRNA et CDG",
            b: "Les approches",
            c: "Les CRNA et les approches"
        },
        correct: "a"
    },
    {
        question: "IRMA2000 est le système de visualisation radar pour :",
        answers: {
            a: "Les CRNA",
            b: "Les approches",
            c: "Les CRNA et les approches"
        },
        correct: "b"
    }
];
