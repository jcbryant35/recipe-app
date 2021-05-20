import React from 'react';
import { Header } from './header.js';
import { LunchDinnerTitleBox } from './lunch-dinner-title-box.js';
import './lunch-dinner-styles.scss'
import { 
    CheeseburgerPieRecipe,
    ChickenDumplingsRecipe,
    ChickenNoodleSoupRecipe,
    DummyStewRecipe,
    MeatLoafRecipe, 
    SmotheredRoundSteakRecipe,
    RoundSteakNGravyRecipe,
    BeefRiceRecipe,
    ShrimpScampiRecipe,
    ChickenFriedSteakNOystersRecipe,
    GrannyBakedChickenRecipe,
    CrabAndCornChowderRecipe,
    ChickenSourCreamRecipe,
    BroccoliCasseroleRecipe,
    TurnipGreenSoupRecipe,
    FriedPorkChopsRecipe,
    FriedChickenRecipe,
    BakedChickenRecipe,
    HamburgerSteakRecipe,
    BeefTipsRecipe,
    CountryFriedSteakRecipe,
    SteakFingersRecipe,
    BeefStewRecipe,
    EtouffeRecipe,
    GumboRecipe,
    JambalayaRecipe,
    RedBeansRiceRecipe,
    BakedPotatoSoupRecipe
} from './recipe-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';


export class LunchDinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cheeseBurgerPie: true,
            meatLoaf: true,
            chickenNoodleSoup: true,
            bakedPotatoSoup: true,
            chickenDumplings: true,
            roundSteak: true,
            roundSteakGravy: true,
            beefRice: true,
            cornChowder: true,
            broccoliCasserole: true,
            turnipSoup: true,
            friedPorkChops: true,
            friedChicken: true,
            bakedChicken: true,
            hamburgerSteak: true,
            beefTips: true,
            countryFriedSteak: true,
            beefStew: true,
            etouffe: true,
            gumbo: true,
            jambalaya: true,
            redBeansRice: true,
            steakFingers: true,
            dummyStew: true,
            shrimpScampi: true,
            chickenFriedSteakOysters: true,
            grannyBakedChicken: true,
            chickenSourCream: true,
            value: ''
        }
        this.showHideComponents = this.showHideComponents.bind(this);
    };

    showHideComponents(value) {
        switch(value) {
            case 'cheeseburger pie':
            case 'Cheeseburger pie':
            case 'Cheeseburger Pie':
            case 'burger pie':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    roundSteak: !this.state.roundSteak,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'meatloaf':
            case 'meat loaf':
            case 'Meatloaf':
            case 'Meat Loaf':
                this.setState({
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    roundSteak: !this.state.roundSteak,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'chicken noodle soup':
            case 'Chicken noodle soup':
            case 'Chicken Noodle Soup':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    roundSteak: !this.state.roundSteak,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'baked potato soup':
            case 'Baked potato soup':
            case 'Baked Potato Soup':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    chickenDumplings: !this.state.chickenDumplings,
                    roundSteak: !this.state.roundSteak,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'chicken dumplings':
            case 'chicken and dumplings':
            case 'chicken n dumplings':
            case 'Chicken dumplings':
            case 'Chicken n dumplings':
            case 'Chicken N Dumplings':
            case 'Chicken and Dumplings':
            case 'Chicken and dumplings':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteak: !this.state.roundSteak,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'round steak':
            case 'smothered round steak':
            case 'Round steak':
            case 'Round Steak':
            case 'Smothered round steak':
            case 'Smothered Round Steak':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'round steak n gravy':
            case 'round steak and gravy':
            case 'Round steak and gravy':
            case 'Round Steak and Gravy':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteak: !this.state.roundSteak,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'beef rice':
            case 'beef and rice':
            case 'beef n rice':
            case 'Beef rice':
            case 'Beef and Rice':
            case 'Beef n rice':
            case 'Beef Rice':
            case 'Beef n Rice':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    roundSteak: !this.state.roundSteak,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'clam and corn chowder':
            case 'clam chowder':
            case 'clam n corn chowder':
            case 'corn chowder':
            case 'Clam and corn chowder':
            case 'Clam chowder':
            case 'Clam n corn chowder':
            case 'Corn chowder':
            case 'Clam and Corn Chowder':
            case 'Clam n Corn Chowder':
            case 'Clam N Corn Chowder':
            case 'Corn Chowder':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    roundSteak: !this.state.roundSteak,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'broccoli casserole':
            case 'Broccoli casserole':
            case 'Broccoli Casserole':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    roundSteak: !this.state.roundSteak,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'turnip green soup':
            case 'turnip soup':
            case 'Turnip green soup':
            case 'Turnip Green Soup':
            case 'Turnip Soup':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    roundSteak: !this.state.roundSteak,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'fried pork chops':
            case 'Fried pork chops':
            case 'Fried Pork Chops':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    roundSteak: !this.state.roundSteak,
                    friedChicken: !this.state.friedChicken,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'fried chicken':
            case 'Fried chicken':
            case 'Fried Chicken':
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    roundSteak: !this.state.roundSteak,
                    bakedChicken: !this.state.bakedChicken,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

            case 'baked chicken':
            case 'Baked chicken':
            case 'Baked Chicken':
            case `J's Baked Chicken`:
            case `j's baked chicken`:
            case 'js baked chicken':
            case `J's baked chicken`:
                this.setState({
                    meatLoaf: !this.state.meatLoaf,
                    chickenNoodleSoup: !this.state.chickenNoodleSoup,
                    bakedPotatoSoup: !this.state.bakedPotatoSoup,
                    chickenDumplings: !this.state.chickenDumplings,
                    cheeseBurgerPie: !this.state.cheeseBurgerPie,
                    roundSteakGravy: !this.state.roundSteakGravy,
                    beefRice: !this.state.beefRice,
                    cornChowder: !this.state.cornChowder,
                    broccoliCasserole: !this.state.broccoliCasserole,
                    turnipSoup: !this.state.turnipSoup,
                    friedPorkChops: !this.state.friedPorkChops,
                    friedChicken: !this.state.friedChicken,
                    roundSteak: !this.state.roundSteak,
                    hamburgerSteak: !this.state.hamburgerSteak,
                    beefTips: !this.state.beefTips,
                    countryFriedSteak: !this.state.countryFriedSteak,
                    beefStew: !this.state.beefStew,
                    etouffe: !this.state.etouffe,
                    gumbo: !this.state.gumbo,
                    jambalaya: !this.state.jambalaya,
                    redBeansRice: !this.state.redBeansRice,
                    steakFingers: !this.state.steakFingers,
                    dummyStew: !this.state.dummyStew,
                    shrimpScampi: !this.state.shrimpScampi,
                    chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                    grannyBakedChicken: !this.state.grannyBakedChicken,
                    chickenSourCream: !this.state.chickenSourCream,
                })
                break;

        case 'hamburger steak':
        case 'Hamburger steak':
        case 'Hamburger Steak':
        case 'hamburger steak and gravy':
        case 'Hamburger steak and gravy':
        case 'Hamburger Steak and Gravy':
        case 'Hamburger steak n gravy':
        case 'hamburger steak n gravy':
        case 'Hamburger Steak N Gravy':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                roundSteak: !this.state.roundSteak,
                beefTips: !this.state.beefTips,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'beef tips':
        case 'Beef tips':
        case 'Beef Tips':
        case 'beef tips and rice':
        case 'beef tips n rice':
        case 'Beef tips n rice':
        case 'Beef tips and rice':
        case 'Beef Tips and Rice':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'country fried steak':
        case 'Country fried steak':
        case 'Country Fried Steak':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                beefTips: !this.state.beefTips,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'beef stew':
        case 'Beef stew':
        case 'Beef Stew':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefTips: !this.state.beefTips,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'etouffe':
        case 'Etouffe':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                beefTips: !this.state.beefTips,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'gumbo':
        case 'Gumbo':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                beefTips: !this.state.beefTips,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'jambalaya':
        case 'Jambalaya':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                beefTips: !this.state.beefTips,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'red beans n rice':
        case 'red beans and rice':
        case 'Red beans and rice':
        case 'Red beans n rice':
        case 'Red Beans and Rice':
        case 'Red Beans n Rice':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                beefTips: !this.state.beefTips,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'steak fingers':
        case 'Steak fingers':
        case 'Steak Fingers':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                beefTips: !this.state.beefTips,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'dummy stew':
        case 'Dummy stew':
        case 'Dummy Stew':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                beefTips: !this.state.beefTips,
                shrimpScampi: !this.state.shrimpScampi,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'shrimp scampi':
        case 'Shrimp scampi':
        case 'Shrimp Scampi':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                beefTips: !this.state.beefTips,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'chicken fried steak and oysters':
        case 'chicken fried steak n oysters':
        case 'Chicken fried steak and oysters':
        case 'Chicken fried steak n oysters':
        case 'Chicken Fried Steak and Oysters':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                beefTips: !this.state.beefTips,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'grannys baked mandarin chicken':
        case 'grannys chicken':
        case 'grannys baked chicken':
        case 'Grannys baked mandarin chicken':
        case 'Grannys chicken':
        case 'Grannys baked chicken':
        case 'Grannys Baked Mandarin Chicken':
        case 'Grannys Chicken':
        case 'Grannys Baked Chicken':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                beefTips: !this.state.beefTips,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
                chickenSourCream: !this.state.chickenSourCream,
            })
            break;

        case 'chicken and sour cream casserole':
        case 'chicken n sour cream casserole':
        case 'Chicken and Sour Cream Casserole':
        case 'Chicken and sour cream casserole':
            this.setState({
                meatLoaf: !this.state.meatLoaf,
                chickenNoodleSoup: !this.state.chickenNoodleSoup,
                bakedPotatoSoup: !this.state.bakedPotatoSoup,
                chickenDumplings: !this.state.chickenDumplings,
                cheeseBurgerPie: !this.state.cheeseBurgerPie,
                roundSteakGravy: !this.state.roundSteakGravy,
                beefRice: !this.state.beefRice,
                cornChowder: !this.state.cornChowder,
                broccoliCasserole: !this.state.broccoliCasserole,
                turnipSoup: !this.state.turnipSoup,
                friedPorkChops: !this.state.friedPorkChops,
                friedChicken: !this.state.friedChicken,
                bakedChicken: !this.state.bakedChicken,
                hamburgerSteak: !this.state.hamburgerSteak,
                roundSteak: !this.state.roundSteak,
                countryFriedSteak: !this.state.countryFriedSteak,
                beefStew: !this.state.beefStew,
                etouffe: !this.state.etouffe,
                gumbo: !this.state.gumbo,
                jambalaya: !this.state.jambalaya,
                redBeansRice: !this.state.redBeansRice,
                steakFingers: !this.state.steakFingers,
                dummyStew: !this.state.dummyStew,
                shrimpScampi: !this.state.shrimpScampi,
                beefTips: !this.state.beefTips,
                grannyBakedChicken: !this.state.grannyBakedChicken,
                chickenFriedSteakOysters: !this.state.chickenFriedSteakOysters,
            })
            break;        
        default: 
            this.setState({
                cheeseBurgerPie: true,
                meatLoaf: true,
                chickenNoodleSoup: true,
                bakedPotatoSoup: true,
                chickenDumplings: true,
                roundSteak: true,
                roundSteakGravy: true,
                beefRice: true,
                cornChowder: true,
                broccoliCasserole: true,
                turnipSoup: true,
                friedPorkChops: true,
                friedChicken: true,
                bakedChicken: true,
                hamburgerSteak: true,
                beefTips: true,
                countryFriedSteak: true,
                beefStew: true,
                etouffe: true,
                gumbo: true,
                jambalaya: true,
                redBeansRice: true,
                steakFingers: true,
                dummyStew: true,
                shrimpScampi: true,
                chickenFriedSteakOysters: true,
                grannyBakedChicken: true,
                chickenSourCream: true,    
            })
        }
    };


    render() {
        const { 
            cheeseBurgerPie,
            meatLoaf,
            chickenNoodleSoup,
            bakedPotatoSoup,
            chickenDumplings,
            roundSteak,
            roundSteakGravy,
            beefRice,
            cornChowder,
            broccoliCasserole,
            turnipSoup,
            friedPorkChops,
            friedChicken,
            bakedChicken,
            hamburgerSteak,
            beefTips,
            countryFriedSteak,
            beefStew,
            etouffe,
            gumbo,
            jambalaya,
            redBeansRice,
            steakFingers,
            dummyStew,
            shrimpScampi,
            chickenFriedSteakOysters,
            grannyBakedChicken,
            chickenSourCream
        } = this.state;

        return (
            <div id="main">
               <ScrollArrow />
               <Header />
               <SearchBar searches={this.showHideComponents} />
               <LunchDinnerTitleBox />
               <div className="boxWrapper">
                    {cheeseBurgerPie && <CheeseburgerPieRecipe />}
                    {meatLoaf && <MeatLoafRecipe />}
                    {chickenNoodleSoup && <ChickenNoodleSoupRecipe />}
                    {bakedPotatoSoup && <BakedPotatoSoupRecipe />}
                    {chickenDumplings && <ChickenDumplingsRecipe />}
                    {roundSteak && <SmotheredRoundSteakRecipe />}
                    {roundSteakGravy && <RoundSteakNGravyRecipe />}
                    {beefRice && <BeefRiceRecipe />}
                    {cornChowder && <CrabAndCornChowderRecipe />}
                    {broccoliCasserole && <BroccoliCasseroleRecipe />}
                    {turnipSoup && <TurnipGreenSoupRecipe />}
                    {friedPorkChops && <FriedPorkChopsRecipe />}
                    {friedChicken && <FriedChickenRecipe />}
                    {bakedChicken && <BakedChickenRecipe />}
                    {hamburgerSteak && <HamburgerSteakRecipe />}
                    {beefTips && <BeefTipsRecipe />}
                    {countryFriedSteak && <CountryFriedSteakRecipe />}
                    {beefStew && <BeefStewRecipe />}
                    {etouffe && <EtouffeRecipe />}
                    {gumbo && <GumboRecipe />}
                    {jambalaya && <JambalayaRecipe />}
                    {redBeansRice && <RedBeansRiceRecipe />}
                    {steakFingers && <SteakFingersRecipe />}
                    {dummyStew && <DummyStewRecipe />}
                    {shrimpScampi && <ShrimpScampiRecipe />}
                    {chickenFriedSteakOysters && <ChickenFriedSteakNOystersRecipe />}
                    {grannyBakedChicken && <GrannyBakedChickenRecipe />}
                    {chickenSourCream && <ChickenSourCreamRecipe />}
               </div>
               <Footer />
            </div>
        )
    };
};