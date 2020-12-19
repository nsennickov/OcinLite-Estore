class Prod {
    constructor(props){
        this.name = props.name
        this.price = props.price
        this.img = props.img
        this.hover = props.hover
        this.slider = [...props.slider]
        this.id = props.id
        this.inCart = 0
        this.filterProps = props.filterProps
        this.desc = props.desc
    }
}

const allProducts = [
    new Prod({
        name: 'Aform Barstool',
        price: 350.00,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1-348x510.jpg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-348x510.jpg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1-348x510.jpg",
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-348x510.jpg", 
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-348x510.jpg"],
        id: 'Echgk1',
        filterProps: 'Furniture',
        desc: {
            material: "Shell, Plastic",
            legs: "Oak",
            size: "77cm",
            'seating height': "65cm",
            prod_info: "Made by order. Production time: 8-10 weeks \nDelivery: Street level only",
        },
        inCart: 0,
    }),
    
    new Prod({
        name: 'Astro Tray',
        price: 79,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/3569_Astro_Tray_All_1.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/356995_Astro_Tray_32x20_1.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/3569_Astro_Tray_All_1.jpeg",
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/356995_Astro_Tray_32x20_1.jpeg",
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/356995_Astro_Tray_32x20_2.jpeg"],
        id: 'CpkcnJ',
        inCart: 0,
        filterProps: 'Kitchen',
        desc: {
            material: "Oak",
            length: "32cm",
            depth: "20cm",
            height: "2cm",
            prod_info: "Approved for food. Clean with damp cloth"
        }
    }),

    new Prod({
        name: "Bau Pendant",
        price: 370,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/503013_Bau_Nature_Large.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/5030_Bau_Nature_2sizes.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/503013_Bau_Nature_Large.jpeg", 
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/5030_Bau_Nature_2sizes.jpeg"],
        id: "SMJAHe",
        inCart: 0,
        filterProps: 'Lighting',
        desc: {
            material: "Basswood",
            height: "51cm",
            length: "57cm",
            weight: "1,6kg",
            prod_info: "Easy to assemble with the included manual. \nLight source EU: E27(Big socket). \nLow-energy: 9W, MAX: 60W \nDoes not include a hook for the ceiling. \nClean with damp cloth"
        }
    }),

    new Prod({
        name: "Block Table",
        price: 320,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product2.jpg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product2_2.jpg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product2.jpg", 
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product2_2.jpg"],
        id: "YECXt4",
        inCart: 0,
        filterProps: 'Tableware',
        desc: {
            material: "Trays, Steel",
            legs: "Ash wood",
            wheels: "Steel and Rubber",
            width: "35cm",
            height: "64cm",
            length: '50cm',
            weight: "8,8kg",
            prod_info: "Clean with damp cloth. \nEasy to assemble without of any tools. \nDelivered in a flat package"
        }
    }),

    new Prod({
        name: "Craft Motar",
        price: 135,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack2-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-768x480.jpeg",
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack2-768x480.jpeg",],
        desc: {
            material: "White oak and Marble",
            height: "Mortar: 7,5cm; Pestle: 12,5cm",
            diameter: "Mortar: 13cm; Pestle: 3,8cm",
            prod_info: "Clean under warm running water. \nMake sure to wipe thorougly after cleaning. \nOil wood regulary to keep it resistant to dirt"
        },
        id: "aOlZVX",
        inCart: 0,
        filterProps: 'Kitchen',
    }),

    new Prod({
        name: "Ding Table Transparent",
        price: 510,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Ding_Table_GlassOak_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602240_Ding_Table_GlassOak_5-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Ding_Table_GlassOak_1-768x480.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602240_Ding_Table_GlassOak_5-768x480.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602243_Ding_Table_SmokeOak_5-768x480.jpeg"],
        desc: {
            material: "Table top: Glass; Legs: Oak wood",
            diameter: "75cm",
            height: "40cm",
            weight: "17kg",
            prod_info: "Clean with damp cloth. \nEasy to assemble without use of any tools. \nDelivered in a flat package"

        },
        id: "7frcBX",
        inCart: 0,
        filterProps: 'Tableware',
    }),

    new Prod({
        name: "Ekko Throw Blanked",
        price: 190,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602432_Ekko_Throw_Blanket_RaspberryMint_2-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602432_Ekko_Throw_Blanket_RaspberryMint_1-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602432_Ekko_Throw_Blanket_RaspberryMint_2-768x480.jpeg", "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602432_Ekko_Throw_Blanket_RaspberryMint_1-768x480.jpeg"],
        id:"ldsYD1",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "100% New Zealand wool",
            width: "130cm",
            length: "180cm",
            weight: "1kg",
            prod_info: "Dry clean only"
        }
    }),

    new Prod({
        name: "Era Chair low",
        price: 1380,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_0-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_1-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_0-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_2-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_3-768x480.jpeg"],
        id: "gZMfLc",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Shell: Hard moulder foam with steeel reinforcement.",
            cushion: "Soft moulded foam.",
            textile: "Gabriel – Fame, Breeze Fusion. Sørensen Leather – Tango",
            legs: "Oak or Walnut",
            height: "77cm",
            length: "72cm",
            depth: "75cm",
            'seating height': "40cm",
            prod_info: "The shell has a steel reinforcement for adding strength."
        }
        
    }),

    new Prod({
        name: "Era Sofa Oak",
        price: 2640,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_1NY-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_2-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_1NY-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_2-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_3-768x480.jpeg"],
        id: "H3nQct",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Shell: Hard moulded foam with steel reinforcement.",
            cushion: "Soft moulded foam.",
            textile: " Gabriel – Fame, Breeze Fusion. Sørensen Leather – Tango",
            legs: "Oak or Walnut",
            height: "77cm",
            length: "145cm",
            depth: "75cm",
            'seating height': "38cm",
            prod_info: "The shell has a steel reinforcement for adding strength. \nCleaning – Textile: Clean with textile or upholstery cleaner.\nCleaning – Leather: Clean with a damp cloth.\n Use the foam from warm water with soap flakes."
        }
    }),

    new Prod({
        name: "Fara Bell Lamp",
        price: 520,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Bell_Small_Grey-581x851.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/502110_Bell_Lamp_Grey_Cord_Detail-581x851.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Bell_Small_Grey-581x851.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/502110_Bell_Lamp_Grey_Cord_Detail-581x851.jpeg"],
        id: "EIcTYy",
        inCart: 0,
        filterProps: 'Lighting',
        desc: {
            material: "Aluminium",
            diameter: "35cm",
            height: "37cm",
            weight: "1,5kg",
            prod_info: "Light source for EU: E27 (big socket).\nLow-energy 9 Watt bulbs are recommended.\nThe Bell Lamp is delivered without ceiling hook and light canopy.\nClean with damp cloth.\nDelivered assembled."

        }    
            
    }),

    new Prod({
        name: "Form Armchair",
        price: 380,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_2-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_1-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_2-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_3-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602757_Form_Armchair_Grey_4-768x480.jpeg"],
        id: "nnusvn",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Shell: Plastik; Legs: Lacquered Steel",
            height: "80cm",
            length: "56cm",
            depth: "52cm",
            'seating height': "44,2cm",
            prod_info: "Made to order.\nProduction time: 8-10 weeks.\nWorldwide delivery: street level only",
        }
    }),

    new Prod({
        name: "Form Rocking Chair",
        price: 630,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_2.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_1-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_2-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_3-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602732_Form_Rocking_Chair_GreenOak_4-768x480.jpeg"],
        id: "I57iXM",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Shell: Plastic; Legs: Oak",
            height: "73cm",
            length: "48cm",
            depth: "65cm",
            'seating height': "38cm",
            weight: "4kg",
            prod_info: "Made to order. Production time: 8-10 weeks\nWorldwide delivery (street level only)\nThe Chair is delivered assembled"
        }
    }),

    new Prod({
        name: "Geo Jug",
        price: 100,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/251502_geo_grey-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/251502_geo_grey_detail-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/251502_geo_grey-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/251502_geo_grey_detail-768x480.jpeg"],
        id: "koQ8fz",
        inCart: 0,
        filterProps: 'Kitchen',
        desc: {
            material: "Outer: Plastic, Inner: Thermo flask",
            height: "20cm",
            diameter: "16,5cm",
            prod_info: "Not suitable for dishwasher."
        }
    }),

    new Prod({
        name: "Kabino Sideboard",
        price: 1150,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Kabino_sideboard_Grey_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/601045_Kabino_sideboard_Grey_5-768x455.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Kabino_sideboard_Grey_1-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/601045_Kabino_sideboard_Grey_5-768x455.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/601045_Kabino_sideboard_Grey_10-768x480.jpeg"],
        id: "iNnNVG",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Frame: Painted ash wood.\nInner side: Painted MDF.\nSliding doors: Matt lacquered aluminium",
            height: "61cm",
            length: "114cm",
            depth: "42cm",
            weight: "34kg",
            prod_info: "Two Kabinos can be stacked on top of eachother, if the legs are removed.\nSize without legs is H: 51 x L: 114 x D: 45 cm\nClean with damp cloth."
        }
    }),

    new Prod({
        name: "Kamp Table Lamp",
        price: 320,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/502120_Amp_Table_Lamp_SmokeBlack_1-768x480.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/5021_Amp_Lamp_ALL_1-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/502120_Amp_Table_Lamp_SmokeBlack_1-768x480.jpeg", 
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/5021_Amp_Lamp_ALL_1-768x480.jpeg"],
        id: "SaPOhp",
        inCart: 0,
        filterProps: 'Lighting',
        desc: {
            material: "Glass & Marble",
            height: "26,5cm",
            diameter: "14cm",
            weight: "1,65kg"
        }
    }),

    new Prod({
        name: "Kra Lounge Chair",
        price: 1810,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602859-Era-Lounge-Chair-High-Steel-Breeze-Fusion-581x851.png",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602859_Era_Lounge_Chair_High_Steel_Breeze_Fusion_0-581x851.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602859-Era-Lounge-Chair-High-Steel-Breeze-Fusion-581x851.png",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602859_Era_Lounge_Chair_High_Steel_Breeze_Fusion_0-581x851.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602859_Era_Lounge_Chair_High_Steel_Breeze_Fusion_4-581x851.jpeg"],
        id: "tyJ0Zz",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Shell: Hard moulded foam with steel reinforcement.",
            cushion: "Soft moulded foam.",
            textile: "Gabriel – Fame, Breeze Fusion. Sørensen Leather – Tango",
            legs: "Lacquered Steel or Chrome",
            height: "103cm",
            length: "72cm",
            depth: "80cm",
            'seating height': "40cm",
            prod_info: "The shell has a steel reinforcement for adding strength.\nCleaning: Textile: Clean with textile or upholstery cleaner.\nLeather: Clean with a damp cloth. Use the foam from warm water with soap flakes.\nFrequently vacuuming with a soft fitting is recommended both for textile and leather to preserve color and appearance."
        }
    }),

    new Prod({
        name: "Krenit Bowl",
        price: 55,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/352681KrenitBowlYellow125.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/352681KrenitBowlYellow125-768x480.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/3526_Str12_sideid-768x480.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/352681KrenitBowlYellow125-768x480.jpeg"],
        id: "6POXLb",
        inCart: 0,
        filterProps: 'Kitchen',
        desc: {
            material: "Steel",
            width: "12,5cm",
            height: "5,9cm",
            prod_info: "Clean with warm water and wipe thoroughly. Avoid use of steel\nkitchen utensils, microwave and dishwasher. Not dishwasher safe."
        }
    }),

    new Prod({
        name: "Light House",
        price: 135,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/382001_light_house_black_frontview-581x851.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/382001_light_house_black_function_whitecandle-581x851.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/382001_light_house_black_frontid-581x851.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/382001_light_house_black_function_whitecandle-581x851.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/382001_light_house_black_function_blackcandle-581x851.jpeg"],
        id: "f0rFwv",
        inCart: 0,
        filterProps: 'Lighting',
        desc: {
            material: "Steel & Glass",
            width: "24,5cm",
            height: "43,7cm",
            depth: "24cm",
            weight: "2,9kg",
            prod_info: "Clean with damp cloth. Be carefull – the roof gets hot."
        }
        
    }),

    new Prod({
        name: "Lih Clothes Rack",
        price: 440,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/600015_Toj_ClothesRack_Small_Grey-581x851.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/600015_Toj_ClothesRack_Small_Grey_Front-581x851.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/600015_Toj_ClothesRack_Small_Grey-581x851.jpeg", 
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/600015_Toj_ClothesRack_Small_Grey_Front-581x851.jpeg", 
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/600015_Toj_ClothesRack_Small_Grey_Side-581x851.jpeg",
                ],
        id: "o8iwQg",
        inCart: 0,
        desc: {
            material: "Frame: Ash wood Shelve & clothes bar: Steel",
            height: "160cm",
            length: "74cm",
            depth: "59,5cm",
            weight: "12kg",
            prod_info: "Easily assembled with help from the included manual.\nDelivered in a flat package.\nClean with damp cloth."
        }
    }),

    new Prod({
        name: "Liqueur Glasses",
        price: 55,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/120950_liqueur_glass.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/120950_liqueur_glass_function.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/120950_liqueur_glass.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/120950_liqueur_glass_function.jpeg",],
        id: "1rtUiQ",
        inCart: 0,
        filterProps: 'Kitchen',
        desc: {
            material: "Glass",
            diameter: "8,5cm",
            prod_info: "Dishwasher safe, but we would recommend to wash them by hand."
        }
    }),

    new Prod({
        name: "Nabo Trays",
        price: 135,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Nabo_Green.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/357002_Nabo_Trays_Green_1.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Nabo_Green.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/357002_Nabo_Trays_Green_1.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Nabo_Trays_3_Pack_Green_2.jpeg"],
        id: "8zifjQ",
        inCart: 0,
        filterProps: 'Kitchen',
        desc: {
            material: "Melamine",
            height: "6,8cm",
            length: "43,4cm",
            depth: "23,4cm",
            weight: "1,6kg",
            prod_info: "Delivered in a gift box with three trays\nin different sizes and colors. \nThe melamine is glossy inside and matt outside.\nNabo is a set of trays for serving and decoration.\nThe trays are not to be used for food.\nSuitable for dishwasher",

        }
    }),

    new Prod({
        name: "Nord Table",
        price: 2300,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602186_Nord_Table_%C3%98120cm_Oak_1.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602186_Nord_Table_%C3%98120cm_Oak_3.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602186_Nord_Table_%C3%98120cm_Oak_1.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602186_Nord_Table_%C3%98120cm_Oak_3.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602186_Nord_Table_%C3%98120cm_Oak_5NY.jpeg"],
        id: "MpNnUR",
        inCart: 0,
        filterProps: 'Tableware',
        desc: {
            material: "Solid Oak",
            height: "74cm",
            diameter: "120cm",
            prod_info: "Easily assembled by following the included manual.\nClean with damp cloth."
        }
    }),

    new Prod({
        name: "Onkel Sofa",
        price: 4300,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602900_Onkel_Sofa_LightGrey_front.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602905_Onkel_Sofa_DarkGrey_CloseUp.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602900_Onkel_Sofa_LightGrey_front.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602905_Onkel_Sofa_DarkGrey_CloseUp.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602905_Onkel_Sofa_DarkGrey_Side.jpeg"],
        id: "LMzFdA",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Frame: Lacquered Ash Wood; Filling: Foam",
            textile: "Outer Shell: Gabriel – Fame\nCushions: Gabriel – Step Melange",
            height: "87cm",
            length: "235cm",
            depth: "80cm",
            weight: "88kg",
            prod_info: "Made to order. \nProduction time: 6 weeks \nWorldwide delivery (street level only) \nMaintenance: Frequent vacuuming with a soft fitting is recommended"
        }
    }),

    new Prod({
        name: "Shelter Table Lamp",
        price: 320,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/505045_Shelter_Table_Lamp_Black_1.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/WEBShelterProd2.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/505045_Shelter_Table_Lamp_Black_1.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/WEBShelterProd2.jpeg"],
        id: "iNT2Kh",
        inCart: 0,
        filterProps: 'Lighting',
        desc: {
            material: "Steel",
            diameter: "41cm",
            height: "41cm",
            weight: "3,3kg",
            prod_info: "The Shelter consist of two easily assembled parts made of shaped steel with a matt lacquered finish. Light source \nEU – E27 (big socket), 9 Watt low energy bulbs are recommended. 2 meter textile cord with switch is included."
        }
    }),

    new Prod({
        name: "Solid Table",
        price: 1190,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_1.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2.jpeg",
        slider: ["https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_1.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2.jpeg",
                "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_3.jpeg"],
        id: "wT5ogF",
        inCart: 0,
        filterProps: 'Tableware',
        desc: {
            material: "Tabletop: Italian marble \nLegs: Ash Wood",
            height: "40cm",
            length: "130cm",
            width: "38,5cm",
            weight: "50kg",
            prod_info: "Expected delivery within 1 – 3 weeks \nClean with damp cloth \nEasy to assemble without use of any tools \nDelivered in a flat package \nWorldwide delivery (street level)",
        }
    }),

    new Prod({
        name: "Swell Sofa",
        price: 3240,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/SwellProdPic2_2seater.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/SwellProdPic4.jpeg",
        slider: [
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/SwellProdPic2_2seater.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/SwellProdPic4.jpeg",
        ],
        id: "qqzWB7",
        inCart: 0,
        filterProps: 'Furniture',
        desc: {
            material: "Textile: Gabriel Medley \nFilling: Foam \nFrame: Wood \nLegs: Lacquered steel",
            height: "70cm",
            length: "167cm",
            depth: "93cm",
            'seating height': "42cm",
            prod_info: "The Swell Sofa is available in the color of your choice within the Medley and Breeze Fusion range. \nMade to order, expected production time from your order is 6-8 weeks. \nWorldwide delivery (street level).",
        }
    }),

    new Prod({
        name: "Tablo Table",
        price: 340,
        img: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602110_Tablo_Table_Black_Small.jpeg",
        hover: "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602115_Tablo_Table_Black_Large_Edge_Detail.jpeg",
        slider: [
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602110_Tablo_Table_Black_Small.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602115_Tablo_Table_Black_Large_Edge_Detail.jpeg",
            "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602110_Tablo_Table_Black_Small_Parts_Bottomid.jpeg"
        ],
        id: "Wm8t0i",
        inCart: 0,
        filterProps: 'Tableware',
        desc: {
            material: "Table top: Plastic composite \nLegs: Ash wood",
            diameter: "50cm",
            height: "42cm",
            weight: "4,9kg",
            prod_info: "Clean with damp cloth \nEasy to assemble without use of any tools \nDelivered in a flat package"
        },
    }),


]


export default allProducts