export const projects = [
    {
        id: 1,
        title: {
            sk: "SiteBlock",
            en: "SiteBlock"
            },
        tech: "JavaScript, Chrome Manifest V3",
        description: {
            sk: "Rozšírenie pre Chrome na blokovanie rušivých stránok. Umožňuje zablokovať aktuálnu stránku jedným klikom, pridať ľubovoľnú URL alebo použiť rýchle blokovanie populárnych sietí. Blokovanie funguje cez declarativeNetRequest API, lokálne a bez zberu dát.",
            en: "Chrome extension for blocking distracting websites. Block the current site in one click, add any URL, or use quick block for popular social networks. Built on the declarativeNetRequest API, works fully locally with no data collection."
        },
        url: "https://chromewebstore.google.com/detail/siteblock/blofecfaoifnjcfelboeejloocmjncip?authuser=0&hl=cs",
        img: "/siteblock.png"
    },
    {
        id: 2,
        title: {
            sk: "Procedurálne generovanie modelov stromov",
            en: "Procedural Generation of Tree Models"
            },
        tech: "C#, Unity Engine",
        description: {
            sk: "Bakalárska práca zameraná na procedurálne generovanie 3D modelov stromov v Unity. Štruktúra stromu vzniká zo stochastických L-systémov a 3D korytnačej grafiky, hrúbky vetiev počíta pipe model. Obsahuje procedurálne textúry kôry a listov, interaktívne úpravy (rast, orezávanie, adventívne púčiky) a export do formátu OBJ.",
            en: "Bachelor's thesis project for procedural generation of 3D tree models in Unity. Tree structures are built from stochastic L-systems with 3D turtle graphics, with branch radii computed using a pipe model. Includes procedural bark and leaf textures, interactive editing (growth, pruning, adventitious buds), and OBJ export."
            },
        url: "https://github.com/SamuelBlezak/ProceduralGenerationOfTreeModels",
        img: "/tree.png"
    },
    {
        id: 3,
        title: {
            sk: "Dialava",
            en: "Dialava"
            },
        tech: "Blueprints, Unreal Engine",
        description: {
            sk: "Príbehová hra z pohľadu prvej osoby zasadená do slovenskej dediny, vytvorená v Unreal Engine 5. Ide o tímový univerzitný projekt študentov FMFI UK v spolupráci so študentmi VŠMU. Hra obsahuje dialógový systém s NPC, inventár a crafting, minihry ako blackjack, mines či otváranie trezoru, quest log, cyklus dňa a noci a cutscény.",
            en: "A story-driven first-person game set in a Slovak village, built in Unreal Engine 5. It is a team university project by FMFI UK students in collaboration with VŠMU students. The game features an NPC dialogue system, inventory and crafting, minigames such as blackjack, mines and safe-cracking, a quest log, a day/night cycle and cutscenes."
            },
        url: "https://github.com/SamuelBlezak/Dialava",
        img: "/dialava.png"
    }
]