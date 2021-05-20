import React from 'react';
import { Header } from './header.js';
import { SidesTitleBox } from './sides-title-box.js';
import './sides-styles.scss';
import {
    MacaroniCheeseRecipe,
    MeatBallsRecipe,
    DinnerRollsRecipe,
    FriedGreenTomatoesRecipe,
    StuffedRedPotatoesRecipe,
    PotatoBallsRecipe,
    HoppingJohnRecipe,
    SavoryCornDishRecipe,
    SquashAuGratinRecipe,
    StuffedBellPeppersRecipe,
    RolledCabbageRecipe,
    RoastedPotatoesRecipe,
    CollardGreensRecipe,
    JGreenBeansRecipe,
} from './recipe-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';


export class Sides extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            macaroni: true,
            dinnerRolls: true,
            stuffedPotatoes: true,
            potatoBalls: true,
            hoppingJohn: true,
            savoryCorn: true,
            stuffedPeppers: true,
            rolledCabbage: true,
            roastedPotatoes: true,
            squashAuGratin: true,
            collards: true,
            greenBeans: true,
            meatBalls: true,
            friedGreenTomatoes: true,
            value: '',
        }
        this.showHideComponents =  this.showHideComponents.bind(this);
    };


    showHideComponents(value) {
        switch(value) {
            case 'macaroni':
            case 'Macaroni':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'rolls':
            case 'Rolls':
            case 'dinner rolls':
            case 'Dinner Rolls':
            case 'Dinner rolls':
                this.setState({
                    macaroni: !this.state.macaroni,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'stuffed potatoes':
            case 'stuffed red potatoes':
            case 'Stuffed potatoes':
            case 'Stuffed red potatoes':
            case 'Stuffed Red Potatoes':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    macaroni: !this.state.macaroni,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'potato balls': 
            case 'Potato balls':
            case 'Potato Balls':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    macaroni: !this.state.macaroni,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'hopping john':
            case 'Hopping john': 
            case 'Hopping John':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    macaroni: !this.state.macaroni,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'savory corn':
            case 'Savory corn':
            case 'Savory Corn':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    macaroni: !this.state.macaroni,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'stuffed bell pepper':
            case 'Stuffed bell pepper':
            case 'Stuffed Bell Pepper':
            case 'stuffed peppers':
            case 'Stuffed peppers':
            case 'Stuffed Peppers':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    macaroni: !this.state.macaroni,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'rolled cabbage':
            case 'Rolled cabbage':
            case 'Rolled Cabbage':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    macaroni: !this.state.macaroni,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'roasted red potatoes':
            case 'roasted potatoes':
            case 'Roasted red potatoes':
            case 'Roasted potatoes':
            case 'Roasted Red Potatoes':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    macaroni: !this.state.macaroni,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'squash au gratin':
            case 'Squash au gratin':
            case 'Squash Au Gratin':
            case 'squash':
            case 'Squash':
            case 'au gratin':
            case 'Au Gratin':
            case 'Augratin':
            case 'augratin':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    macaroni: !this.state.macaroni,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break; 

            case 'collards':
            case 'Collards':
            case 'collard greens':
            case 'Collard greens':
            case 'Collard Greens':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    macaroni: !this.state.macaroni,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;
            
            case 'green beans':
            case 'Green beans':
            case 'Green Beans':
            case 'js green beans':
            case 'Js green beans':
            case 'Js Green Beans':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    macaroni: !this.state.macaroni,
                    meatBalls: !this.state.meatBalls,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'meat balls':
            case 'meatballs':
            case 'Meat balls':
            case 'Meatballs':
            case 'Meat Balls':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    macaroni: !this.state.macaroni,
                    friedGreenTomatoes: !this.state.friedGreenTomatoes,  
                })
                break;

            case 'fried green tomatoes':
            case 'Fried green tomatoes':
            case 'Fried Green Tomatoes':
                this.setState({
                    dinnerRolls: !this.state.dinnerRolls,
                    stuffedPotatoes: !this.state.stuffedPotatoes,
                    potatoBalls: !this.state.potatoBalls,
                    hoppingJohn: !this.state.hoppingJohn,
                    savoryCorn: !this.state.savoryCorn,
                    stuffedPeppers: !this.state.stuffedPeppers,
                    rolledCabbage: !this.state.rolledCabbage,
                    roastedPotatoes: !this.state.roastedPotatoes,
                    squashAuGratin: !this.state.squashAuGratin,
                    collards: !this.state.collards,
                    greenBeans: !this.state.greenBeans,
                    meatBalls: !this.state.meatBalls,
                    macaroni: !this.state.macaroni,  
                })
                break;

            default:
                this.setState({
                    macaroni: true,
                    dinnerRolls: true,
                    stuffedPotatoes: true,
                    potatoBalls: true,
                    hoppingJohn: true,
                    savoryCorn: true,
                    stuffedPeppers: true,
                    rolledCabbage: true,
                    roastedPotatoes: true,
                    squashAuGratin: true,
                    collards: true,
                    greenBeans: true,
                    meatBalls: true,
                    friedGreenTomatoes: true,
                })
        }
    };


    render() {
        const { 
            macaroni,
            dinnerRolls, 
            stuffedPotatoes, 
            potatoBalls,
            hoppingJohn,
            savoryCorn, 
            stuffedPeppers,
            rolledCabbage,
            roastedPotatoes,
            collards,
            greenBeans,
            meatBalls,
            friedGreenTomatoes,
            squashAuGratin,
        } = this.state;

        return (
            <div id="main">
                <ScrollArrow />
                <Header />
                <SearchBar searches={this.showHideComponents} />
                <SidesTitleBox />
                <div className="boxWrapper">
                    {dinnerRolls && <DinnerRollsRecipe />}
                    {meatBalls && <MeatBallsRecipe />}
                    {macaroni && <MacaroniCheeseRecipe />}
                    {friedGreenTomatoes && <FriedGreenTomatoesRecipe />}
                    {stuffedPeppers && <StuffedBellPeppersRecipe />}
                    {roastedPotatoes && <RoastedPotatoesRecipe />}
                    {collards && <CollardGreensRecipe />}
                    {greenBeans && <JGreenBeansRecipe />}
                    {stuffedPotatoes && <StuffedRedPotatoesRecipe />}
                    {potatoBalls && <PotatoBallsRecipe />}
                    {hoppingJohn && <HoppingJohnRecipe />}
                    {savoryCorn && <SavoryCornDishRecipe />}
                    {squashAuGratin && <SquashAuGratinRecipe />}
                    { rolledCabbage && <RolledCabbageRecipe />}
                </div>
                <Footer />
            </div>
        )
    };
};