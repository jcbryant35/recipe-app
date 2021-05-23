import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Axios from 'axios';


// Recipe box styles
import './recipe-box.scss';


//REVIEWS & STAR RATINGS COMPONONENTS
import { BreakfastTacoCommentBox } from './breakfast-taco-comment.js';
import { BreakfastBurritoCommentBox } from './breakfast-burrito-comment.js';
import { OmeletteCommentBox } from './omelette-comment.js';
import { BiscuitsGravyCommentBox } from './biscuits-gravy-comment.js';
import { SausageBreakfastRollsCommentBox } from './breakfast-rolls-comment.js';
import { CajunBatterCommentBox } from './cajun-batter-comment.js';
import { FriedChickenBatterCommentBox } from './chicken-batter-comment.js';
import { HouseSeasoningCommentBox } from './house-seasoning-comment.js';
import { CajunHouseSeasoningCommentBox } from './cajun-seasoning-comment.js';
import { TurkeyGravyCommentBox } from './turkey-gravy-comment.js';
import { BrownGravyCommentBox } from './brown-gravy-comment.js';
import { CheeseburgerPieCommentBox } from './cheeseburger-pie-comment.js';
import { MeatloafCommentBox } from './meatloaf-comment.js';
import { ChickenNoodleSoupCommentBox } from './chicken-noodle-soup-comment.js';
import { ChickenDumplingsCommentBox } from './chicken-dumplings-comment.js';
import { DummyStewCommentBox } from './dummy-stew-comment.js';
import { SmotheredRoundSteakCommentBox } from './round-steak-comment.js';
import { RoundSteakNGravyCommentBox } from './round-steak-n-gravy-comment.js';
import { BeefRiceCommentBox } from './beef-rice-comment.js';
import { ShrimpScampiCommentBox } from './shrimp-scampi-comment.js';
import { SteakNOystersCommentBox } from './steak-n-oysters-comment.js';
import { GrannyBakedChickenCommentBox } from './granny-baked-chicken-comment.js';
import { CrabCornChowderCommentBox } from './crabcornchowder-comment.js';
import { ChickenSourCreamCommentBox } from './chicken-sour-cream-comment.js';
import { BroccoliCasseroleCommentBox } from './broccoli-casserole-comment.js';
import { TurnipGreenSoupCommentBox } from './turnip-soup-comment.js';
import { FriedPorkChopsCommentBox } from './fried-porkchops-comment.js';
import { FriedChickenCommentBox } from './fried-chicken-comment.js';
import { JBakedChickenCommentBox } from './baked-chicken-comment.js';
import { HamburgerSteakCommentBox } from './hamburger-steak-comment.js';
import { BeefTipsCommentBox } from './beeftips-comment.js';
import { CountryFriedSteakCommentBox } from './country-fried-steak-comment.js';
import { SteakFingersCommentBox } from './steak-fingers-comment.js';
import { BeefStewCommentBox } from './beef-stew-comment.js';
import { EtouffeCommentBox } from './etouffe-comment.js';
import { GumboCommentBox } from './gumbo-comment.js';
import { JambalayaCommentBox } from './jambalaya-comment.js';
import { RedBeansNRiceCommentBox } from './red-beans-rice-comment.js';
import { BakedPotatoSoupCommentBox } from './baked-potato-soup-comment.js';
import { CheeseBallCommentBox } from './cheeseball-comment.js';
import { HamRollupsCommentBox } from './ham-rollups-comment.js';
import { PieCrustCommentBox } from './pie-crust-comment.js';
import { WashingtonPieCommentBox } from './washington-pie-comment.js';
import { LemonCakePieCommentBox } from './lemon-cake-pie-comment.js';
import { PeanutButterPieCommentBox } from './peanut-butter-pie-comment.js';
import { PeachCobblerCommentBox } from './peach-cobbler-comment.js';
import { GooeyButterCakeCommentBox } from './gooey-butter-cake-comment.js';
import { CrazyKaroCrunchCommentBox } from './karo-crunch-comment.js';
import { BananaNutBreadCommentBox } from './banana-nut-bread-comment.js';
import { MeatBallsCommentBox } from './meatballs-comment.js';
import { MacNCheeseCommentBox } from './macaroni-comment.js';
import { DinnerRollsCommentBox } from './dinner-rolls-comment.js';
import { FriedGreenTomatoesCommentBox } from './fried-green-tomatoes-comment.js';
import { StuffedRedPotatoesCommentBox } from './stuffed-red-potatoes-comment.js';
import { PotatoBallsCommentBox } from './potato-balls-comment.js';
import { HoppingJohnCommentBox } from './hopping-john-comment.js';
import { SavoryCornDishCommentBox } from './corn-dish-comment.js';
import { SquashAuGratinCommentBox } from './squash-au-gratin-comment.js';
import { StuffedBellPeppersCommentBox } from './stuffed-peppers-comment.js';
import { RolledCabbageCommentBox } from './rolled-cabbage-comment.js';
import { RoastedPotatoesCommentBox } from './roasted-potatoes-comment.js';
import { CollardGreensCommentBox } from './collard-greens-comment.js';
import { GreenBeansCommentBox } from './green-beans-comment.js';



// Images
import SausageRoll from './sausagerolls.jpg';
import BreakfastTaco from './breakfasttaco.jpg';
import BreakfastBurrito from './breakfastburrito.jpg';
import Omelette from './omelette.jpg';
import BiscuitsGravy from './biscuitsgravy.jpg';
import CajunBatter from './cajunbatter.jpg';
import FriedChickenBatter from './friedchickenbatter.jpg';
import HouseSeasoningRecipe from './houseseasoning.jpg';
import TurkeyGravy from './chickenturkeygravy.jpg';
import BurgerPie from './cheeseburgerpie.jpg';
import MeatLoaf from './meatloaf.jpg';
import ChickenNoodleSoup from './chicken-noodle-soup.jpg';
import ChickenDumplings from './chickendumplings.jpg';
import ComingSoon from './comingsoon.png';
import RoundSteakGravy from './roundsteakngravy.jpg';
import SmotheredRoundSteak from './smotheredsteak.jpg';
import BrownGravy from './browngravy.jpg';
import BakedPotatoSoup from './bakedpotatosoup.jpg';
import BananaBread from './bananabread.jpg';
import BeefNRice from './beefnrice.jpg';
import BeefStew from './beefstew.JPG';
import BeefTips from './beeftips.jpg';
import BroccoliCasserole from './broccolicasserole.jpg';
import Collards from './collards.jpg';
import CountryFriedSteak from './countryfriedsteak.jpg';
import CrabCornChowder from './crabcornchowder.jpg';
import FriedChicken from './friedchicken.jpg';
import FriedGreenTomatoes from './friedgreentomatoes.jpg';
import FriedPorkChops from './friedporkchops.jpg';
import GooeyButterCake from './gooeybuttercake.jpg';
import Gumbo from './gumbo.JPG';
import HamburgerSteak from './hamburgersteak.jpg';
import CheeseBall from './cheeseball3.jpg';
import HamRollUps from './hamrollups.jpg';
import Jambalaya from './jambalaya.JPG';
import JBakedChicken from './jbakedchicken.JPG';
import LemonCakePie from './lemoncakepie.jpg';
import MacNCheese from './macaronicheese.jpg';
import MeatBalls from './meatballs.jpg';
import PeachCobbler from './peachcobbler.jpg';
import PeanutButterPie from './peanutbutterpie.jpg';
import PieCrust from './piecrust.jpg';
import RedBeansNRice from './redbeansnrice.JPG';
import DinnerRolls from './rolls.jpg';
import StuffedPeppers from './stuffedpeppers.jpg';
import TurnipSoup from './turnipgreensoup.jpg';
import Etouffe from './etouffee.jpg';
import RoastedPotatoes from './roasted-potatoes.jpg';





// BREAKFAST RECIPES
export class BreakfastTacoRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/breakfast-taco-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
                <main>
                    <div id="recipeTitle">
                        <h5>Breakfast Taco</h5>
                    </div>
                    <div id="recipeImageBox" style={{backgroundImage: `url(${BreakfastTaco})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#breakfastTacoModal">
                    Recipe
                    </button>

                    <div className="modal fade" id="breakfastTacoModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                            <div className="modal-header">
                                <img src={ BreakfastTaco } alt="Breakfast Taco" style={{height: '80px', width: '80px', margin: '10px'}}/>
                                <h4 className="modal-title">Breakfast Taco</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">

                            <strong>Ingredients:</strong> <br />
                                flour tortillas (taco size) <br />
                                cheese (sliced or shredded) <br />
                                4-6 eggs <br />
                                1/4 package of bacon cut into 2 inch strips <br />
                                1/2 large onion chopped (if small, use whole onion) <br />
                                1 jalepeno pepper chopped (do not remove seeds)<br />
                                3 garlic cloves chopped <br />
                                1/4-1/2 potato cut into 1 inch cubes <br />
                                pinch of Tony Chachere's seasoning <br />
                                <br />
                                *This recipe can be done with sausage also* <br />
                                <br />
                                <strong>Prep time:</strong> 10 mins <br />
                                <strong>Cook time:</strong> 60 mins <br />
                                <strong>Serves:</strong> 2-4
                                <hr />
                                <strong>Directions:</strong> <br />
                                In a large skillet, add the chopped onions,
                                jalepenos, garlic, and bacon. Turn heat to
                                medium-low and cover. Stir occasionally to 
                                ensure everything cooks evenly. Once the 
                                bacon mixture has finished cooking, remove
                                from the skillet and pour the bacon grease
                                into a small skillet, this grease will be used
                                to cook the potatoes. Heat the bacon grease to
                                medium-high and add the cut potatoes, stir them
                                often to brown them evenly. Once potatoes are 
                                golden brown, remove them. Go ahead and preheat
                                oven to 350F, meanwhile, beat the 4 eggs and add 
                                the pinch of Tony Chachere's. Pour eggs into the
                                large skillet and add the bacon mixture, stir well.
                                Cook egg mixture on medium heat until done. Use 
                                the flour tortillas to make tacos by placing egg
                                mixture, potatoes, and cheese. Place the tacos
                                on a pan and place them into the oven for 3 minutes,
                                then remove and enjoy. You may pour salsa on top of
                                them for an even more delightful taste.
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            <BreakfastTacoCommentBox />
                            </div>
                        </div>
                    </div>

                    </div>
                </main>
                <div id="ratingsBox">
                    <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
                </div>
            </div>
        )
    }
};

export class BreakfastBurritoRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/breakfast-burrito-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
                <main>
                    <div id="recipeTitle">
                        <h5>Breakfast Burrito</h5>
                    </div>
                    <div id="recipeImageBox" style={{backgroundImage: `url(${BreakfastBurrito})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#breakfastBurritoModal">
                    Recipe
                    </button>

                    <div className="modal fade" id="breakfastBurritoModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                            <div className="modal-header">
                                <img src={ BreakfastBurrito } alt="Breakfast Burrito" style={{height: '80px', width: '80px', margin: '10px'}}/>

                                <h4 className="modal-title">Breakfast Burrito</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                                flour tortillas (burrito size) <br />
                                cheese (sliced or shredded) <br />
                                4-6 eggs <br />
                                1/4 package of bacon cut into 2 inch strips <br />
                                1/2 large onion chopped (if small, use whole onion) <br />
                                1 jalepeno pepper chopped (do not remove seeds)<br />
                                3 garlic cloves chopped <br />
                                1/4-1/2 potato cut into 1 inch cubes <br />
                                pinch of Tony Chachere's seasoning <br />
                                <br />
                                *This recipe can be done with sausage also* <br />
                                <br />
                                <strong>Prep time:</strong> 10 mins <br />
                                <strong>Cook time:</strong> 60 mins <br />
                                <strong>Serves:</strong> 2-4
                                <hr />
                                <strong>Directions:</strong> <br />
                                In a large skillet, add the chopped onions,
                                jalepenos, garlic, and bacon. Turn heat to
                                medium-low and cover. Stir occasionally to 
                                ensure everything cooks evenly. Once the 
                                bacon mixture has finished cooking, remove
                                from the skillet and pour the bacon grease
                                into a small skillet, this grease will be used
                                to cook the potatoes. Heat the bacon grease to
                                medium-high and add the cut potatoes, stir them
                                often to brown them evenly. Once potatoes are 
                                golden brown, remove them. Go ahead and preheat
                                oven to 350F, meanwhile, beat the 4 eggs and add 
                                the pinch of Tony Chachere's. Pour eggs into the
                                large skillet and add the bacon mixture, stir well.
                                Cook egg mixture on medium heat until done. Use 
                                the flour tortillas to make burritos by placing egg
                                mixture, potatoes, and cheese. Roll into burritos and
                                place on a pan, put them into the oven for 3 minutes,
                                then remove and enjoy. You may pour salsa inside of
                                them for an even more delightful taste.

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            <BreakfastBurritoCommentBox />
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
                <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
                </div>
            </div>
        )
    }
};

export class OmeletteRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/omelette-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
                <main>
                    <div id="recipeTitle">
                        <h5>Famous Omelette</h5>
                    </div>
                    <div id="recipeImageBox" style={{backgroundImage: `url(${Omelette})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#famousOmeletteModal">
                    Recipe
                    </button>

                    <div className="modal fade" id="famousOmeletteModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                            <div className="modal-header">
                                <img src={ Omelette } alt="Famous Omelette" style={{height: '80px', width: '80px', margin: '10px'}}/>

                                <h4 className="modal-title">Famous Omelette</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <strong>Ingredients:</strong> <br />
                                2 eggs per omelette <br />
                                cheese (sliced or shredded) <br />
                                1/4 package of bacon cut into 2 inch strips <br />
                                1/2 large onion chopped (if small, use whole onion) <br />
                                1 jalepeno pepper chopped (do not remove seeds)<br />
                                3 garlic cloves chopped <br />
                                1/2 tsp chopped green onions per omelette <br />
                                pich of Tony Chachere's seasoning <br />
                                <br />
                                *This recipe can be done with sausage also* <br />
                                <br />
                                <strong>Prep time:</strong> 10 mins <br />
                                <strong>Cook time:</strong> n/a <br />
                                <strong>Serves:</strong> 2-6
                                <hr />
                                <strong>Directions:</strong> <br />
                                In a large skillet, add the chopped onions,
                                jalepenos, garlic, and bacon. Turn heat to
                                medium-low and cover. Stir occasionally to 
                                ensure everything cooks evenly. Once the 
                                bacon mixture has finished cooking, remove
                                from the skillet but save the bacon grease.
                                <br /><br />
                                Beat 2 eggs per omelette, add Tony Chachere's
                                seasoning and green onions. Add a little bacon
                                grease to a small skillet, pour the egg mixture
                                into the small skillet and add desired amount 
                                of bacon mixture, stir well.
                                <br /><br />
                                Turn heat to medium
                                and allow the egg mixture to cook a couple of 
                                minutes without touching it. Use a spatula to
                                fold over one side to the other and allow to 
                                continue cooking another minute. Flip the omelette,
                                add cheese on top, and allow to cook anothter minute
                                or until the cheese has melted. 
                                <br /><br />
                                Remove from pan and enjoy! (Repeat this process for
                                multiple omelettes).  
                                

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            <OmeletteCommentBox />      
                            </div>
                        </div>
                    </div>

                    </div>
                </main>
                <div id="ratingsBox">
                    <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
                </div>
            </div>
        )
    }
};

export class BiscuitsNGravyRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/biscuits-gravy-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div id="boxContainer">
                <main>
                    <div id="recipeTitle">
                        <h5>Biscuits 'n Gravy</h5>
                    </div>
                    <div id="recipeImageBox" style={{backgroundImage: `url(${BiscuitsGravy})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#biscuitsNGravyModal">
                    Recipe
                    </button>

                    <div className="modal fade" id="biscuitsNGravyModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                            <div className="modal-header">
                                <img src={ BiscuitsGravy } alt="Biscuits 'n Gravy" style={{height: '80px', width: '80px', margin: '10px'}}/>

                                <h4 className="modal-title">Biscuits 'n Gravy</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                                1 - 12oz package sage flavored sausage <br />
                                3 tbsp butter <br />
                                1/4 cup all-purpose flour <br />
                                3 cups whole milk <br />
                                5+ biscuits <br />
                                Tony Chachere's Seasoning <br />
                                <br />
                                <strong>Prep time:</strong> 5 mins <br />
                                <strong>Cook time:</strong> 25 mins <br />
                                <strong>Serves:</strong> 3+ 
                                <hr />
                                <strong>Directions:</strong> <br />
                                Prepare biscuits (homemade or canned).
                                Cook sausage in a large, deep skillet.
                                Cook over medium-high heat until evenly
                                brown. Remove sausage with a slotted 
                                spoon, leaving the grease in the pan.
                                Stir in the butter until melted. Add
                                flour, and stir until smooth. Reduce
                                heat to medium, and cook until light brown.
                                Gradually whisk in milk, and cook until thickened.
                                Season with Tony Chachere's and stir in
                                cooked sausage. Reduce heat, and simmer for
                                12 to 15 minutes. If gravy becomes too thick,
                                stir in a little more milk. Split open cooked
                                biscuits and pour the sausage gravy over them.
                                Enjoy!
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            <BiscuitsGravyCommentBox />
                            </div>
                        </div>
                    </div>

                    </div>
                </main>
                <div id="ratingsBox">
                    <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
                </div>
            </div>
        )
    }
};

export class SausageBreakfastRollRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/sausage-breakfast-rolls-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div id="boxContainer">
                <main>
                    <div id="recipeTitle">
                        <h5>Sausage Breakfast Roll</h5>
                    </div>
                    <div id="recipeImageBox" style={{backgroundImage: `url(${SausageRoll})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#sausageBreakfastRollModal">
                    Recipe
                    </button>

                    <div className="modal fade" id="sausageBreakfastRollModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                            <div className="modal-header">
                            <img src={ SausageRoll } alt="Sausage Roll" style={{height: '80px', width: '80px', margin: '10px'}}/>
                                <h4 className="modal-title">Sausage Breakfast Roll</h4> <br />
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <strong>Ingredients:</strong> <br />
                                1 can crescent rolls <br />
                                1 1/2 lbs sausage <br />
                                8oz cream cheese <br />
                                <br />
                                <strong>Prep time:</strong> 10 mins <br />
                                <strong>Cook time:</strong> n/a <br />
                                <strong>Serves:</strong> 2-4 
                                <hr />
                                <strong>Directions:</strong> <br />
                                Preheat oven to 375F degrees. Roll
                                out crescent roll on large shallow
                                baking dish. Spread uncooked sausage
                                over dough, then spread cream cheese.
                                Roll up from widest side. Gently slice
                                into 1/2 inch peices and lay peices out
                                flat on greased pan. Cook until everything
                                looks done. Enjoy!
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            <SausageBreakfastRollsCommentBox />
                            </div>
                        </div>
                    </div>

                    </div>
                </main>
                <div id="ratingsBox">
                    <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
                </div>
            </div>
        )
    }
};

// MISC RECIPES
export class CajunBatterRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/cajun-batter-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Cajun Batter</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${CajunBatter})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#cajunBatterModal">
                Recipe
                </button>

                <div className="modal fade" id="cajunBatterModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ CajunBatter } alt="Cajun Batter" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Cajun Batter</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 tsp cayenne pepper <br />
                            2/3 cups all-purpose flour <br />
                            2 tsp paprika <br />
                            1 tbsp salt <br />
                            3 eggs <br />
                            2 tbsp white pepper <br />
                            <br />
                            <strong>Prep time:</strong> 3 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix all ingredients together in a large bowl.
                            Use this batter for anything you would normally
                            batter and fry. Can also be used for cajun
                            battered fries. 
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CajunBatterCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class FriedChickenBatterRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/fried-chicken-batter-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Fried Chicken Batter</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${FriedChickenBatter})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#friedChickenBatterModal">
                Recipe
                </button>

                <div className="modal fade" id="friedChickenBatterModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ FriedChickenBatter } alt="Fried Chicken Batter" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Fried Chicken Batter</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            4 cups flour <br />
                            3 tbsp red pepper <br />
                            4 tbsp garlic powder <br />
                            3 tbsp black pepper <br />
                            1/4 cup seasoning salt <br />
                            <br />
                            <strong>Prep time:</strong> 3 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix all ingredients together in a large bowl.
                            Use this mixture when frying chicken by dipping
                            the raw chicken in the mixture, then dipping
                            into a beaten egg mixture, then dipping back
                            into the flour mixture. Fry til golden crispy.
                            This recipe is good for about 20 pieces of chicken.
                            Can also be used on fried pork chops.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <FriedChickenBatterCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class HouseSeasoning extends React.Component {

        constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/house-seasoning-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>House Seasoning</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${HouseSeasoningRecipe})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#houseSeasoningModal">
                Recipe
                </button>

                <div className="modal fade" id="houseSeasoningModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={HouseSeasoningRecipe} alt="House Seasoning" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">House Seasoning</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 cup salt <br />
                            1/4 cup garlic powder <br />
                            1/4 cup onion powder <br />
                            <br />
                            <strong>Prep time:</strong> 2 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix all ingredients together well and store
                            in an air tight container.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <HouseSeasoningCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class CajunHouseSeasoning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/cajun-seasoning-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Cajun House Seasoning</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${HouseSeasoningRecipe})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#cajunHouseSeasoningModal">
                Recipe
                </button>

                <div className="modal fade" id="cajunHouseSeasoningModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={HouseSeasoningRecipe} alt="Cajun House Seasoning" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Cajun House Seasoning</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            5 tbsp paprika <br />
                            2 tbsp black pepper <br />
                            2 tbsp onion powder <br />
                            2 tbsp cayenne pepper <br />
                            2 tbsp dried oregano <br />
                            2 tbsp thyme <br />
                            1 tbsp garlic powder <br />
                            <br />
                            <strong>Prep time:</strong> 2 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix all ingredients together well and store
                            in an air tight container.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CajunHouseSeasoningCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class ChickenTurkeyGravy extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/turkey-gravy-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Chicken or Turkey Gravy</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${TurkeyGravy})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#chickenTurkeyGravyModal">
                Recipe
                </button>

                <div className="modal fade" id="chickenTurkeyGravyModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={TurkeyGravy} alt="Gravy" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken or Turkey Gravy</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1/2 cup chopped onion <br />
                            3 tbsp butter <br />
                            3 tbsp flour <br />
                            1 pinch chipotle pepper <br />
                            2 tbsp cooked dressing <br />
                            2 cups chicken broth <br />
                            <br />
                            <strong>Prep time:</strong> 2 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Whisk all ingredients together and bring to a
                            boil. Reduce heat and simmer, stir occasionaly
                            until desired thickness. Pour on top of dressing,
                            turkey, or chicken. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <TurkeyGravyCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BrownGravyRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/brown-gravy-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Brown Gravy</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BrownGravy})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#brownGravyModal">
                Recipe
                </button>

                <div className="modal fade" id="brownGravyModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BrownGravy} alt="Brown Gravy" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Brown Gravy</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 tsp yeast extract <br />
                            1 tsp onion powder <br />
                            1 tsp salt <br />
                            4 tbsp butter <br />
                            2 cups cold water <br />
                            2 tbsp cornstarch <br />
                            <br />
                            <strong>Prep time:</strong> 5 mins <br />
                            <strong>Cook time:</strong> 10 mins <br />
                            <hr />
                            <strong>Directions:</strong> <br />
                            Melt butter in saucepan over medium heat.
                            Stir in yeast extract spread, onion powder,
                            and salt until smooth. Gradually whisk in
                            1 1/2 cups water so no lumps form. Bring to
                            a boil. In a small cup, stir together 1/2 cup
                            cold water and cornstarch. Stir in the cornstarch
                            mixture and continue boiling until thickened. Cool
                            slightly before serving. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BrownGravyCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};


// LUNCH & DINNER RECIPES
export class CheeseburgerPieRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/cheeseburger-pie-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Cheeseburger Pie</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BurgerPie})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#cheeseburgerPieRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="cheeseburgerPieRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BurgerPie} alt="Cheeseburger Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Cheeseburger Pie</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1lb ground beef <br />
                            1/2 onion chopped <br />
                            1/2 cup Bisquick<br />
                            1 cup milk <br />
                            1 egg <br />
                            1 1/2 cups shredded cheese <br />
                            1 tsp salt <br />
                            1 tsp pepper <br />
                            1 tsp garlic powder <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 45 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large skillet, brown the meat, seasonings and
                            onions together. Drain, then put in the
                            bottom of a pie plate and top with cheese.
                            In a large bowl, whisk the bisquick,
                            egg, and milk, then pour on top of the meat mixture.
                            Bake at 350F for about 45 mins or until the 
                            bisquick mixture looks done. Enjoy! 
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CheeseburgerPieCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class MeatLoafRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/meatloaf-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Meat Loaf</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${MeatLoaf})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#meatLoafRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="meatLoafRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={MeatLoaf} alt="Meat Loaf" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Meat Loaf</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 1/2lb ground beef <br />
                            2 eggs <br />
                            1/2 cup milk<br />
                            1/2 cup beef broth <br />
                            1 cup bread crumbs <br />
                            1 tsp salt <br />
                            1/4 tsp pepper <br />
                            1/8 tsp nutmeg <br />
                            1 jalepeno chopped with seeds <br />
                            ketchup <br />
                            mustard <br />
                            brown sugar  <br />
                            parmesian <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 1 hour <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large bowl, whisk eggs, milk,
                            broth. Add ground beef, bread crumbs,
                            salt, pepper, nutmeg, chopped jalepeno.
                            Mix thoroughly and form into two loaves
                            in a greased baking dish. Combine the
                            mustard, ketchup, brown sugar, and spread
                            desired amount across the top of each loaf.
                            Sprinke with paremsian and bake for 1 hour. 
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <MeatloafCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class ChickenNoodleSoupRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/chicken-noodle-soup-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5 id="cns">Chicken Noodle Soup</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ChickenNoodleSoup})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#chickenNoodleSoupRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="chickenNoodleSoupRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ChickenNoodleSoup} alt="Chicken Noodle Soup" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken Noodle Soup</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            4 cups rotisserie chicken <br />
                            3 stalks celery cut into 1 inch <br />
                            1/2 cup carrots chopped<br />
                            1 onion chopped <br />
                            2 garlic cloves chopped <br />
                            1/8 cup red bell pepper chopped <br />
                            1/4 cup butter <br />
                            8 ounces egg noodles <br />
                            12 cups chicken broth <br />
                            1 tsp dried majoram <br />
                            1 tsp black pepper <br />
                            1 bay leaf <br />
                            1 tbsp dried parsley <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 1hr 10mins <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Remove all of the meat from the rotisserie
                            chicken, set aside and save all skin/bones/juices. Pour
                            the broth into a large stock pot, add onion, garlic and all
                            of the chicken bones/skin. Bring to a boil, then 
                            cover and simmer on medium heat for 30 minutes.
                            <br /><br />
                            Remove all bones/skin from the broth. Add chicken
                            meat, celery, carrots, bell pepper, majoram, black pepper,
                            bay leaf, dried parsley, juices from the rotisserie chicken,
                            then cover and bring to a boil. Reduce heat to slow simmer for 1 hour.
                            <br /><br />
                            Add egg noodles, bring to a boil and reduce heat back to
                            a slow simmer. Let simmer about 10 minutes or until noodles
                            are soft. Enjoy!

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <ChickenNoodleSoupCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
            <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />    
            </div>
        </div>

        )
    }
};

export class ChickenDumplingsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/chicken-dumplings-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Chicken 'n Dumplings</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ChickenDumplings})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#chickenDumplingsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="chickenDumplingsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ChickenDumplings} alt="Chicken N Dumplings" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken 'n Dumplings</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            4 cups all-purpose flour <br />
                            3 whisked eggs <br />
                            shortening<br />
                            1/2 tsp salt <br />
                            2 large pinches baking powder <br />
                            1 cup ice water <br />
                            12 cups chicken broth <br />
                            1 tsp black pepper <br />
                            1 rotisserie chicken <br />
                            cornstarch <br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> 1hr <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Remove all of the meat from the rotisserie
                            chicken, set aside and save all skin/bones/juices. Pour
                            the broth into a large stock pot, and all
                            of the chicken bones/skin. Bring to a boil, then 
                            cover and simmer on medium heat for 30 minutes.
                            <br /><br />
                            While the broth is simmering, pour the flour into
                            a large bowl and make a well in the center. Pour
                            the whisked eggs, shortening (about the size of an egg),
                            salt, and baking powder into the well. Start mixing the
                            mixture in the well while adding the ice water, working in
                            flour until you have a nice amount of dough, but still
                            have some dry flour in the bowl. Knead dough to consistency
                            to work with. Take about a third or more of the dough and
                            lay on a floured cutting board. Roll out to about 1/8" or 1/4"
                            thick. Cut into strips then across to create the dumplings.
                            <br /><br />
                            Remove all chicken bones and skin from the broth, be sure
                            your broth stays hot. Drop dumplings in one at a time, pushing
                            down under broth with a large spoon. Continue til all of the
                            dough is used, or desired amount. Add the chicken meat and 
                            black pepper to the pot, now is a good time to taste the broth 
                            and season to desired taste with salt/pepper. Cover and cook about
                            20-30 mins or until dumplings are tender. Mix 4tbsp cornstarch in
                            4 tbsp water, add a little at a time and stir frequently to reach
                            desired thickness of broth, or leave as is. Remove from heat, 
                            sprinkle desired amount of black pepper on top, and enjoy! 
                            
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <ChickenDumplingsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class DummyStewRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/dummy-stew-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Dummy Stew</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#dummyStewRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="dummyStewRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Dummy Stew" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Dummy Stew</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            Stew meat (cut into small bits) <br />
                            1 can cream of mushroom soup <br />
                            1 can onion soup<br />
                            <br />
                            <strong>Prep time:</strong> 5 mins <br />
                            <strong>Cook time:</strong> 3 hours <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Bake for 3 hours at 300F in a covered baking dish.
                            This stew may surpise you :-)
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <DummyStewCommentBox />
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />   
            </div>
        </div>

        )
    }
};

export class SmotheredRoundSteakRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/round-steak-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Smothered Round Steak</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${SmotheredRoundSteak})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#smotheredRoundSteakRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="smotheredRoundSteakRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={SmotheredRoundSteak} alt="Dummy Stew" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Smothered Round Steak</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2lbs round steak <br />
                            1 package onion soup mix <br />
                            1 can cream of mushroom soup<br />
                            1/4-1/2 cup water <br />
                            <br />
                            <strong>Prep time:</strong> 5 mins <br />
                            <strong>Cook time:</strong> 6-8 hours <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Cut steak into serving size pieces and place
                            into a slow cooking crock pot. Add dry onion
                            soup mix, water, cream of mushroom soup. Cover
                            and cook on low for 6-8 hours. Serve over rice
                            or mashed potatoes.
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <SmotheredRoundSteakCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class RoundSteakNGravyRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/round-steak-gravy-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Round Steak 'n Gravy</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${RoundSteakGravy})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#roundSteakNGravyRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="roundSteakNGravyRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={RoundSteakGravy} alt="Dummy Stew" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Round Steak 'n Gravy</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2lbs round steak <br />
                            1 cup flour <br />
                            house seasoning (see misc) <br />
                            black pepper <br />
                            1 1/4 cup vegetable oil <br />
                            1/4 cup butter <br />
                            1 tsp chopped garlic <br />
                            1/4 cup chopped onion <br />
                            <br />
                            <strong>Prep time:</strong> 6 mins <br />
                            <strong>Cook time:</strong> 1 hour <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Heat 1/4 cup vegetable oil and butter in a skillet.
                            Cut steak into serving size pieces and season
                            them with house seasoning & black pepper. Place 
                            the steak pieces in the flour and coat them well.
                            Place the steak pieces in the hot oil/butter and
                            brown both sides, then remove and set aside.
                            <br /> <br />
                            Make the gravy by heating 1 cup of vegetable oil,
                            on medium-high heat, then whisking in the flour. Whisk
                            consistently until the flour has become dark brown.
                            Slowly whisk in water until the gravy looks right. 
                            Season with a few pinches of house seasoning,black pepper,
                            onion, garlic and add the steak. Bring to a boil,
                            then reduce to a slow simmer and cook 45 mins to
                            1 hour. Serve over rice or mashed potatoes. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <RoundSteakNGravyCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BeefRiceRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/beef-rice-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Beef 'n Rice</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BeefNRice})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#beefNRiceRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="beefNRiceRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BeefNRice} alt="Beef 'n Rice" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Beef 'n Rice</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2lbs beef tips <br />
                            3 tbsp bacon grease (or vegetable oil) <br />
                            2 cloves minced garlic <br />
                            1/8 cup chopped celery <br />
                            1/8 cup chopped bell pepper <br />
                            3 tbsp flour <br />
                            1 can beef stock <br />
                            1/4 cup chopped onion <br />
                            1/8 tsp salt <br />
                            3 bay leaves <br />
                            1 tsp basil <br />
                            1 tsp thyme <br />
                            1 can rotel diced <br />
                            1 tbsp worcestershire <br />
                            1 tbsp louisiana hot sauce <br />
                            2 crushed fresh tomatoes <br />
                            <br />
                            <strong>Prep time:</strong> 6 mins <br />
                            <strong>Cook time:</strong> 1 1/2 hours <br />
                            <strong>Serves:</strong> 3-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Put bacon grease in skillet. Add beef and fry
                            til brown then remove beef from skillet. Add more
                            bacon grease if needed to make 3 Tbsp of grease 
                            in the skillet, then add garlic, celery, and bell 
                            pepper. Cook until tender, then remove and save. 
                            Add flour to the hot grease and stir until light
                            brown. Add beef stock, then return meat and
                            vegetables. Add salt, bay leaves, basil, thyme, 
                            rotel, worcestershire, hot sauce, and tomatoes.
                            Bring to a boil, reduce heat and simmer for 1 1/2 hours.
                            Taste and season to your taste. Serve over rice. Enjoy! 
                            <br /> <br />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BeefRiceCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class ShrimpScampiRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/beef-rice-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Shrimp Scampi</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#shrimpScampiRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="shrimpScampiRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Beef 'n Rice" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Shrimp Scampi</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 cloves garlic <br />
                            1 tsp anchovy paste <br />
                            1/8 cup vegetable oil <br />
                            1/4 cup butter <br />
                            1 tbsp lemon zest <br />
                            1 tsp pepper <br />
                            1 tbsp worcestershire <br />
                            fresh jumbo shrimp (cleaned and de-veined) <br />
                            fresh lemon juice <br />
                            tony chachere'es seasoning <br />
                            eggs <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Grate 2 cloves of garlic into skillet,
                            preheated with oil and butter. Add anchovy
                            paste, work together. Add lemon zest, pepper,
                            worcestershire, and shrimp. Add lemon juice on
                            top of shrimp. When shrimp is done cooking, pour
                            onto a platter and top with chopped hard boiled eggs.
                            Season over eggs with tony's. Enjoy!

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <ShrimpScampiCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} /> 
            </div>
        </div>

        )
    }
};

export class ChickenFriedSteakNOystersRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/steak-n-oysters-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Chicken Fried Steak 'n Oysters</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#chickenSteakOystersRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="chickenSteakOystersRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Beef 'n Rice" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken Fried Steak 'n Oysters</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            4 pieces round steak <br />
                            cajun house seasoning (see misc) <br />
                            fried chicken batter flour (see misc) <br />
                            butter milk <br />
                            1/2 cup whole milk <br />
                            vegetable oil <br />
                            1 tbsp green onion chopped <br />
                            2 tbsp flour <br />
                            1 pinch salt <br />
                            2 pinchs pepper <br />
                            oysters drained <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat the oil in a skillet.
                            Use a meat mallet to tenderize the round steak
                            pieces. Season both sides with cajun house 
                            seasoning, then dredge in fried chicken batter 
                            flour, then into buttermilk, then back into the
                            flour again. Place them into the skillet of hot
                            oil and fry them until golden brown. Remove them
                            to a plate when done, then remove 2 tbsp of oil
                            from steak pan to a sauce pan. Add chopped green
                            onion, and flour. Season with a pinch of salt &
                            pepper. Cook for 3-4 minutes stirring consistently,
                            then add milk, simmer to right consistency. While gravy 
                            cooks, dredge oysters in the flour mixture, buttermilk,
                            then flour again. Fry in the hot steak oil til brown & 
                            done. Enjoy!
                                
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <SteakNOystersCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class GrannyBakedChickenRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/granny-baked-chicken-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Granny's Baked Mandarin Chicken</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#grannysOvenChickenRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="grannysOvenChickenRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Mandarin Chicken" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Granny's Baked Madarin Chicken</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 bottle russian dressing <br />
                            1 can mandarin oranges <br />
                            1 pkg onion soup mix <br />
                            2-4 chicken breasts <br />
                            house seasoning (see misc) <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 350F. Cut chicken breasts 
                            into quarters and place in a lightly greased
                            baking dish, season with house seasoning and black pepper. 
                            Pour mixture on top of chicken and bake 
                            for 1 hour or until done and tender. Serve
                            with rice. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <GrannyBakedChickenCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class CrabAndCornChowderRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/crab-corn-chowder-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Crab and Corn Chowder</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${CrabCornChowder})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#crabAndCornChowderRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="crabAndCornChowderRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={CrabCornChowder} alt="Crab and Corn Chowder" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Crab and Corn Chowder</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 tbsp vegetable oil <br />
                            3 slices smoked bacon (chopped) <br />
                            1/4 cup chopped red bell pepper <br />
                            2 stalks celery sliced <br />
                            1 cup chicken stock <br />
                            1 cup milk <br />
                            1 cup milk <br />
                            1/2 package frozen whole kernel corn <br />
                            6 oz cooked crab meat <br />
                            1 tbsp chopped thyme <br />
                            1 tsp cayenne pepper <br />
                            1/8 cup shredded cheddar cheese <br />
                            short pasta <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat the oil in a skillet on medium heat.
                            Add the bacon, remove when crisp and set aside.
                            Add the red bell pepper, onion, celery, flour. 
                            Stir well and cook for 2 minutes, stir well again
                            and add the chicken stock, and milk. Whisk together
                            well and then add the corn, crab meat, thyme, cayenne
                            pepper, and shredded cheese, mix well. Add cooked and
                            drained short pasta, mix well. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CrabCornChowderCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class ChickenSourCreamRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/chicken-sour-cream-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Chicken and Sour Cream Casserole</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#chickenSourCreamRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="chickenSourCreamRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Chicken and Sour Cream Casserole" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken and Sour Cream Casserole</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1/2 stack long crackers <br />
                            1 stick butter <br />
                            2-3 cups cooked chicken meat (chopped) <br />
                            1 can cream of chicken soup <br />
                            1/2 cup chicken broth <br />
                            1 cup sour cream <br />
                            1 cup milk <br />
                            paprika <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 350F.
                            Spray or grease a baking dish, and crumble
                            the crackers into the dish. Melt the butter and
                            pour over the crackers, then add the chicken meat.
                            Mix together the cream of chicken soup, chicken broth,
                            and sour cream. Stir until smooth and pour over the
                            casserole. Sprinkle paprika on top and bake until
                            it looks bubbly. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <ChickenSourCreamCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BroccoliCasseroleRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/broccoli-casserole-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Broccoli Casserole</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BroccoliCasserole})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#broccoliCasseroleRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="broccoliCasseroleRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BroccoliCasserole} alt="Broccoli Casserole" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Broccoli Casserole</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1/2 cup celery chopped <br />
                            1/2 onion chopped <br />
                            1 pkg chopped frozed broccoli (or fresh) <br />
                            1 jar cheese whiz <br />
                            1 1/2 cup rice uncooked <br />
                            1/2 cup water <br />
                            1 can cream of mushroom soup <br />
                            1 cup oleo <br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> 30 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 325F. Cook oleo, 
                            celery, onion, and broccoli slowly 
                            for 15 minutes. Remove from skillet
                            and place into a baking dish. Add mushroom
                            soup, cheese whiz, rice, and water. Cook in
                            oven for 30 minutes. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BroccoliCasseroleCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />  
            </div>
        </div>

        )
    }
};

export class TurnipGreenSoupRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/turnip-soup-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Turnip Green Soup</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${TurnipSoup})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#turnipGreenSoupRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="turnipGreenSoupRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={TurnipSoup} alt="Turnip Green Soup" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Turnip Green Soup</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 tsp butter <br />
                            1 pound kielbasa sausage (cut 1 inch) <br />
                            1 onion chopped <br />
                            5 cups chicken broth <br />
                            2 20oz cans turnip greens  <br />
                            2 14.5oz cans great northern beans, rinsed and drained <br />
                            1 pkg vegetable soup mix (Knorr's brand if possible) <br />
                            1 tsp hot sauce <br />
                            2 cloves garlic minced <br />
                            1 pinch Tony Chachere's or Cajun House Seasoning (see misc) <br />
                            salt to taste<br />
                            1 tbsp black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 2hr 15 mins <br />
                            <strong>Serves:</strong> 2-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            Melt butter in a skillet. Cook and stir kielbasa and
                            onion in the hot butter until the onion is tender and
                            then set aside. In a large pot, add chicken broth, turnip 
                            greens, vegetable soup mix, great northern beans, hot sauce, 
                            garlic, seasonings, stir together well and bring to a boil. 
                            Add in the onion, and sausage mixture, return to a boil and 
                            reduce heat to medium-low, cover and simmer for 2hr 15min.
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <TurnipGreenSoupCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class FriedPorkChopsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/fried-porkchops-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Fried Pork Chops</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${FriedPorkChops})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#friedPorkChopsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="friedPorkChopsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={FriedPorkChops} alt="Chicken and Sour Cream Casserole" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Fried Pork Chops</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 cups flour <br />
                            1/2 cup house or cajun house seasoning (see misc) <br />
                            3-4 eggs beaten <br />
                            1/8 cup buttermilk <br />
                            vegetable oil <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oil in skillet. Mix the flour and seasoning
                            together well. Mix the egg and buttermilk together well.
                            Dredge pork chops in the flour mixture, dip into the egg mixture,
                            and, then dip back into the flour mixture. Place pork chops
                            in the hot oil and fry until golden brown. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <FriedPorkChopsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class FriedChickenRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/fried-chicken-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Fried Chicken</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${FriedChicken})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#friedChickenRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="friedChickenRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={FriedChicken} alt="Fried Chicken" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Fried Chicken</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            fried chicken batter (see misc) <br />
                            3-4 eggs beaten <br />
                            1/8 cup buttermilk <br />
                            vegetable oil <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oil in skillet. Mix the egg and buttermilk together well.
                            Dredge chicken pieces in the flour mixture, dip into the egg mixture,
                            and, then dip back into the flour mixture. Place chicken pieces
                            in the hot oil and fry until golden brown. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <FriedChickenCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BakedChickenRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/baked-chicken-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>J's Baked Chicken</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${JBakedChicken})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#bakedChickenRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="bakedChickenRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={JBakedChicken} alt="J's Baked Chicken" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">J's Baked Chicken</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            6 cloves garlic chopped <br />
                            chicken breasts <br />
                            1/2 onion chopped <br />
                            1/4 red bell pepper chopped <br />
                            1/4 green bell pepper chopped <br />
                            1 jalepeno chopped with seeds <br />
                            1/4 cup water <br />
                            1/4 green onion chopped <br />
                            1 tbsp olive oil <br />
                            cajun house seasoning (see misc) <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 40 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 350F. Add onion, garlic,
                            bell peppers, jalepeno, olive oil, and
                            green onion into a small to medium baking dish, 
                            stir well. Stick a small knife all the way through 
                            each breast several times and insert slices of fresh garlic into
                            each cut. Season the chicken breasts and place on to the 
                            vegetable mixture, use a spoon to scoop some mixture
                            on top of each breast. Cook in oven for about 40 minutes
                            or until done. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <JBakedChickenCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class HamburgerSteakRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/hamburger-steak-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Hamburger Steak 'n Gravy</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${HamburgerSteak})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#hamburgerSteakRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="hamburgerSteakRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={HamburgerSteak} alt="J's Baked Chicken" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Hamburger Steak 'n Gravy</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 pound ground beef <br />
                            3 cloves garlic minced <br />
                            1/8 cup red bell pepper chopped <br />
                            1/8 cup green bell pepper chopped <br />
                            1/8 cup onion chopped <br />
                            1/2 jalepeno chopped <br />
                            house or cajun house seasoning (see misc) <br />
                            homemade brown gravy or 1 pkg brown gravy mix <br />
                            <br />
                            <strong>Prep time:</strong> 7 mins <br />
                            <strong>Cook time:</strong> 40 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat skillet. 
                            In a large bowl, add ground beef, garlic,
                            bell peppers, jalepeno, onion, and seasoning.
                            Mix together well and patty out into hamburger
                            patties, add them to a hot skillet. Sear 
                            each side of the meat, then cover and reduce
                            heat to low-medium heat. Cook slowly for about
                            15 minutes per side. Meanwhile, prepare enough 
                            brown gravy and pour on top of the meat (should be drowned
                            in gravy). Lower heat to a lower setting and let
                            them slow cook for about 10-20 minutes or longer. Serve
                            over cooked rice or mashed potatoes. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <HamburgerSteakCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BeefTipsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/beef-tips-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Beef Tips 'n Rice</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BeefTips})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#beefTipsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="beefTipsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BeefTips} alt="Beef Tips 'n Rice" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Beef Tips 'n Rice</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 pound beef tips meat<br />
                            1/2 onion chopped <br />
                            1 tsp garlic minced <br />
                            homemade brown gravy or 1 pkg gravy mix <br />
                            1 cup beef stock <br />
                            3 tbsp vegetable oil <br />
                            house or cajun house seasoning (see misc) <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 1 hour <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Add oil to a skillet and preheat. Cook beef and
                            onion in hot oil until meat is browned. Add brown
                            gravy,beef stock, seasoning, and garlic 
                            (be sure all meat is covered). Bring to boil, 
                            stirring constantly not to burn gravy, then 
                            cover, reduce heat and simmer on low-medium for at least
                            1 or more until the meat is tender. The longer they simmer,
                            the more tender the meat will become. Add more stock and
                            gravy if needed. Serve over rice and enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BeefTipsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class CountryFriedSteakRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/country-fried-steak-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Country Fried Steak</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${CountryFriedSteak})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#countryFriedSteakRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="countryFriedSteakRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={CountryFriedSteak} alt="Country Fried Steak" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Country Fried Steak</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            cubed steaks tenderized <br />
                            1/4 cup house or cajun house seasoning (see misc) <br />
                            2 cups flour<br />
                            2-3 eggs beaten<br />
                            1/8 cup buttermilk <br />
                            homemade white gravy or 1 pkg white gravy mix <br />
                            2 cups vegetable oil <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oil skillet. Mix the eggs and
                            buttermilk together. Mix the seasoning and
                            flour together well. Lightly season the steaks,
                            dip them into the flour mixture, then into the egg
                            mixture and then back into the flour mixture. Place
                            steaks into hot oil and fry until golden brown. Remove
                            steaks and pour white gravy on top of them. Sprinke a
                            pinch of black pepper on top and enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CountryFriedSteakCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class SteakFingersRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/steak-fingers-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Steak Fingers</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#steakFingerRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="steakFingerRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Country Fried Steak" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Steak Fingers</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            cubed steaks tenderized cut into 2 inch wide strips<br />
                            1/4 cup house or cajun house seasoning (see misc) <br />
                            2 cups flour<br />
                            2-3 eggs beaten<br />
                            1/8 cup buttermilk <br />
                            homemade white gravy or 1 pkg white gravy mix <br />
                            2 cups vegetable oil <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oil skillet. Mix the eggs and
                            buttermilk together. Mix the seasoning and
                            flour together well. Lightly season the steak strips,
                            dip them into the flour mixture, then into the egg
                            mixture and then back into the flour mixture. Place
                            steak strips into hot oil and fry until golden brown. Remove
                            steak steak and pour white gravy on top of them, or serve
                            gravy as a dipping sauce. Be sure to add a pinch of black
                            pepper to gravy. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <SteakFingersCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BeefStewRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/beef-stew-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Beef Stew</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BeefStew})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#beefStewRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="beefStewRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BeefStew} alt="Beef Stew" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Beef Stew</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 pounds cubed stew meat<br />
                            3 tablespoons vegetable oil<br />
                            4 cups beef broth<br />
                            1 tbsp dried rosemary<br />
                            1 tbsp dried parsley <br />
                            1 tsp black pepper <br />
                            3 large potatoes peeled and cubed <br />
                            4 carrots cut 1 inch <br />
                            4 stalks celery cut 1 inch <br />
                            1 large onion chopped <br />
                            2 tsp cornstarch <br />
                            2 tsp cold water <br />

                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> 2 hours <br />
                            <strong>Serves:</strong> 2-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large pot, cook beef in oil until brown.
                            Add beef broth, rosemary, parsley, and pepper.
                            Bring to a boil, reduce heat, cover and simmer 1
                            hour. 
                            <br /><br />
                            Add potatoes, carrots, celery, and onion into
                            the pot. Dissolve the cornstarch in the water and
                            stir into stew. Bring back to boil, reduce heat, cover
                            and simmer 1 hour. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BeefStewCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class EtouffeRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/etouffe-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Crawfish & Shrimp Etouffe</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${Etouffe})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#etouffeRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="etouffeRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={Etouffe} alt="Crawfish and Shrimp Etouffe" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Crawfish & Shrimp Etouffe</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1/3 cup vegetable oil<br />
                            1/4 cup flour<br />
                            1 small green bell pepper diced<br />
                            1 onion chopped <br />
                            2 cloves garlic minced <br />
                            2 stalks celery diced <br />
                            2 fresh tomatoes chopped <br />
                            2 tbsp hot sauce <br />
                            1/3 tsp cayenne pepper <br />
                            2 tbsp old bay seasoning <br />
                            1/2 tsp black pepper <br />
                            1 cup fish stock <br />
                            1 pound crawfish tails (cooked and peeled) <br />
                            1 pound medium shrimp (cooked and peeled) <br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> 2-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            The Roux --- Heat oil in skillet over
                            medium heat. Stir in flour and stir constantly 
                            until the mixture turns peanut butter brown or
                            darker, about 15-20 minutes. Mixture must be 
                            stirred constantly to prevent burning. 
                            <br /><br />
                            Once the roux has reached the right color, add
                            onion, garlic, celery, and bell pepper to the 
                            skillet and saute for about 5-7 minutes. Stir in 
                            the chopped tomatoes and fish stock, then add old bay
                            seasoning. Reduce heat and simmer for about 20 minutes,
                            stir occasionally.
                            <br /><br />
                            Add the hot sauce, and rest of seasonings. Add the 
                            crawfish and shrimp. Cook for about 10 minutes, or 
                            until the shrimp are opaque. Serve over rice. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <EtouffeCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class GumboRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/gumbo-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Chicken & Sausage Gumbo</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${Gumbo})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#gumboRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="gumboRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={Gumbo} alt="Chicken and Sausage Gumbo" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Chicken and Sausage Gumbo</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            3/4 cup bacon grease or vegetable oil<br />
                            1 cup flour<br />
                            1 large onion chopped <br />
                            1 large green bell pepper chopped <br />
                            2 celery stalks chopped <br />
                            1 pound andouille or smoked sausage sliced <br />
                            4 cloves garlic minced <br />
                            cajun house seasoning to taste (see misc) <br />
                            6 cups chicken broth <br />
                            2 bay leaves <br />
                            1 rotisserie chicken deboned and shredded <br />
                            <br />
                            <strong>Prep time:</strong> 45 mins <br />
                            <strong>Cook time:</strong> 2 hours 30 mins <br />
                            <strong>Serves:</strong> 2-6
                            <hr />
                            <strong>Directions:</strong> <br />
                            The Broth --- In a large pot, add broth, chicken
                            bones, chicken skin and left over juices from the rotisserie.
                            Bring to a boil and reduce heat to medium-low and simmer
                            covered while preparing the roux.
                            <br /><br />
                            The Roux --- Heat bacon grease in skillet over
                            medium heat. Stir in flour and stir constantly 
                            until the mixture turns a dark chocolate brown color,
                            this process takes a while. Mixture must be 
                            stirred constantly to prevent burning. If you see
                            black specs in the roux, start over.
                            <br /><br />
                            Once the roux has reached the right color, add
                            onion, celery, sausage, and bell pepper to the 
                            skillet and saute for about 5-7 minutes. Season with
                            cajun house seasoning and stir well. Remove chicken
                            bones and skin, then pour in chicken 
                            broth, and add the bay leaves. Bring to a boil over
                            high heat, then reduce heat to medium-low and simmer,
                            uncovered, for 1 hour, stirring occasionally. Stir in
                            the chicken meat and simmer for 1 hour more. Skim off
                            any foam that floats to the top during the last hour. 
                            Serve over rice and enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <GumboCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class JambalayaRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/jambalaya-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Jambalaya</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${Jambalaya})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#jambalayaRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="jambalayaRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={Jambalaya} alt="Cheeseburger Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Jambalaya</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 tbsp peanut oil, divided <br />
                            1 tbsp cajun house seasoning (see misc) <br />
                            10 ounces andouille sliced<br />
                            1 pound chicken breasts cut 1 inch <br />
                            1 onion diced <br />
                            1 small green bell pepper diced <br />
                            2 stalks celery diced <br />
                            3 cloves garlic minced <br />
                            1 16oz can crushed italian tomatoes <br />
                            1/2 tsp red pepper flakes <br />
                            1/2 tsp black pepper <br />
                            1 tsp salt <br />
                            1/2 tsp hot sauce <br />
                            2 tsp worcestershire sauce <br />
                            1 tsp file powder <br />
                            1 1/4 cups uncooked rice <br />
                            2 1/2 cups chicken broth <br />
                            <br />
                            <strong>Prep time:</strong> 20 mins <br />
                            <strong>Cook time:</strong> 45 mins <br />
                            <strong>Serves:</strong> 2-5
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large pot, or dutch oven, heat
                            1 tbsp peanut oil over medium heat. Season
                            andouille and chicken pieces with cajun house
                            seasoning, then saute andouille til browned. 
                            Remove with a slotted spoon and set aside.
                            Add 1 tbsp peanut oil, and saute chicken until
                            lightly browned on all sides. Remove with slotted
                            spoon and set aside. 
                            <br /><br />
                            In the same pot, saute onion, bell pepper, celery,
                            and garlic until tender. Stir in crushed tomatoes,
                            and season with red pepper flakes, black pepper,
                            salt, hot sauce, worcestershire, and file powder.
                            Stir in chicken and sausage. Cook for 10 minutes,
                            stirring occasionally.
                            <br /><br />
                            Stir in the rice, and chicken broth. Bring to a boil,
                            reduce heat, and simmer for 20-25 minutes, or until
                            liquid is absorbed. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <JambalayaCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class RedBeansRiceRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/red-beans-rice-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Red Beans 'n Rice</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${RedBeansNRice})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#redBeansRiceRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="redBeansRiceRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={RedBeansNRice} alt="Red Beans and Rice" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Red Beans 'n Rice</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 tbsp shortening, or as needed <br />
                            1 white onion chopped <br />
                            3 cloves garlic chopped <br />
                            1 green bell pepper chopped <br />
                            8 cups water <br />
                            1 pound dried red beans <br />
                            1 smoked ham hock <br />
                            1 pound smoked sausage <br />
                            2 stalks celery chopped <br />
                            2 bay leaves <br />
                            1 tbsp Tony Chachere's or Cajun House Seasoning (see misc) <br />
                            1/2 tsp dried thyme <br />
                            1/2 tsp dried sage <br />
                            1 dash hot sauce <br />
                            3 cups cooked rice <br />
                            <br />
                            <strong>Prep time:</strong> 20 mins <br />
                            <strong>Cook time:</strong> 5 hours 30 mins <br />
                            <strong>Serves:</strong> 10
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a skillet, melt shortening over medium heat. 
                            Stir in onion, garlic, bell pepper in hot shortening
                            and cook until tender, 5 to 7 mins. 
                            <br /><br />
                            Combine water, red beans, and ham hock in a large
                            pot, bring to a boil. Stir onion mixture into the water.
                            Add smoked sausage and celery to the boiling water, return
                            to a boil, then add bay leaves, cajun seasoning, thyme, 
                            and sage. Reduce heat to low, cover and simmer until the 
                            beans are tender, about 5 1/2 hours.
                            <br /><br />
                            Discard ham hock and bay leaves, stir in hot sauce and 
                            serve over rice. Enjoy!
=                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <RedBeansNRiceCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class BakedPotatoSoupRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/baked-potato-soup-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Baked Potato Soup</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BakedPotatoSoup})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#bakedPotatoSoupRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="bakedPotatoSoupRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BakedPotatoSoup} alt="Baked Potato Soup" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Baked Potato Soup</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            12 slices smoked bacon <br />
                            2/3 cup margarine <br />
                            2/3 cup flour <br />
                            7 cups whole milk <br />
                            4 large baked potatoes, peeled and cubed <br />
                            4 green onions chopped <br />
                            1 cup sour cream <br />
                            1 tsp salt <br />
                            1 tsp black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> 25 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Cook bacon until crisp, drain, and crumble.
                            In a large pot, melt the margarine over medium
                            heat. Whisk in flour until smooth. Gradually
                            stir in milk, whisking constantly until thickened.
                            Stir in potatoes and green onions. Bring to a boil,
                            stirring frequently. Reduce heat, and simmer for
                            10 minutes. Mix bacon, shredded cheese, sour cream,
                            salt, black pepper, and continue cooking, stirring
                            frequently until cheese is melted. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BakedPotatoSoupCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};


// SNACKS
export class CheeseBallRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/cheese-ball-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Aunt Tracey's Cheese Ball</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${CheeseBall})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#cheeseBallRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="cheeseBallRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={CheeseBall} alt="Cheese Ball" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Aunt Tracey's Cheese Ball</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            8oz pkg cream cheese <br />
                            1 pound hot mexican velvetta <br />
                            1 cup chopped pecans <br />
                            1 dash garlic salt <br />
                            chili powder <br />
                            townhouse or club crackers <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large bowl, combine cream cheese,
                            velvetta, pecans, and garlic salt. Mix
                            together by holding and squeezing. Mold
                            into a ball and sprinkle with chili powder.
                            <br /> <br />
                            Spread this cheese over crackers and enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CheeseBallCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class HamRollUpsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/ham-rollups-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Ham Roll Ups</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${HamRollUps})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#hamRollUpsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="hamRollUpsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={HamRollUps} alt="Ham Roll Ups" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Ham Roll Ups</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            8oz pkg cream cheese <br />
                            1 pound deli ham <br />
                            1 green onion chopped <br />
                            cajun house seasoning (see misc) <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Let cream cheese sit out about 30 minutes
                            to allow softening. Lay ham slices out flat
                            and spread cream cheese over them. Sprinkle
                            with seasoning, add a few chopped green onions,
                            then roll ham slices. Cut rolled ham into 1 inch
                            thick slices. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <HamRollupsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};


// DESSERTS
export class PieCrustRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/pie-crust-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Easy Pie Crust</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${PieCrust})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#pieCrustRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="pieCrustRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={PieCrust} alt="Pie crust" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Easy Pie Crust</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 1/2 cups flour <br />
                            1 1/2 sticks butter <br />
                            1 cup fine chopped pecans <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 20-25 mins <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix together and put into a pie plate. 
                            Pat and shape into pie plate, and up sides.
                            Bake at 350F for 20-25 minutes. 
                            <br /><br />
                            *Note: do not
                            pre-bake for covered pies, only pies like pecan,
                            custard, or cheesecakes, only pre-bake crust for
                            cream type pies.*
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <PieCrustCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class WashingtonPieRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/washington-pie-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Washington Pie</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#washingtonPieRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="washingtonPieRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Washington Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Washington Pie</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 can eagle brand sweetened condensed milk <br />
                            1/2 cup lemon juice <br />
                            1 small container cool whip <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix together and add fresh sliced strawberries.
                            Pour into baked pie crust or graham cracker crust.
                            Put in refridgerator, allow enough time to set. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <WashingtonPieCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class LemonCakePieRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/lemon-cake-pie-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Lemon Cake Pie</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${LemonCakePie})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#lemonCakePieRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="lemonCakePieRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={LemonCakePie} alt="Lemon Cake Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Lemon Cake Pie</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 cup powdered sugar <br />
                            1 8oz pkg cream cheese <br />
                            1 large container cool whip <br />
                            1 can eagle brand sweetened condensed milk <br />
                            3 egg yolks <br />
                            1/4 cup lemon juice <br />
                            <br />
                            <strong>Prep time:</strong> 20 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Filling 1 --- Mix together the powdered sugar,
                            cream cheese, and spread over pie crust. Spread
                            1/2 large container cool whip on top. 
                            <br /><br />
                            Filling 2 --- Mix together condensed milk, lemon juice,
                            egg yolks. Spread on top of other layer, and add the other
                            1/2 larger container cool whip on top. Chill in refridgerator
                            until ready to serve. Enjoy!
                            <br /><br />
                            *Tip: You may change flavors by using chocolate pudding layer
                            instead of lemon filling*
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <LemonCakePieCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class PeanutButterPieRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/peanut-butter-pie-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Peanut Butter Pie</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${PeanutButterPie})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#peanutButterPieRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="peanutButterPieRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={PeanutButterPie} alt="Peanut Butter Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Peanut Butter Pie</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            3/4 cup peanut butter <br />
                            4oz softened cream cheese <br />
                            1 cup powdered sugar <br />
                            12oz cool whip <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix peanut butter, cream cheese, powdered sugar 
                            together well, and fold in cool whip. Pour in
                            graham cracker crust. Chill in fridge.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <PeanutButterPieCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} /> 
            </div>
        </div>

        )
    }
};

export class PeachCobblerRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/peach-cobbler-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Peach Cobbler</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${PeachCobbler})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#peachCobblerRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="peachCobblerRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={PeachCobbler} alt="Peach Cobbler" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Peach Cobbler</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 large can sliced peaches <br />
                            1/2 cup sugar <br />
                            1/2 cup flour <br />
                            1/4 cup butter <br />
                            1/4 cup water <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix together the sugar and flour. Melt butter,
                            add water, and mix with the flour and sugar.
                            Pour over peaches and bake at 350F until golden
                            brown. Top with plain cream, whipped cream, or
                            ice cream. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <PeachCobblerCommentBox />   
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class GooeyButterCakeRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/gooey-butter-cake-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Gooey Butter Cake</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${GooeyButterCake})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#gooeyButterCakeRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="gooeyButterCakeRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={GooeyButterCake} alt="Lemon Cake Pie" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Gooey Butter Cake</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 box yellow cake mix <br />
                            2 sticks butter <br />
                            4 eggs <br />
                            1 8oz pkg cream cheese <br />
                            1 sack powdered sugar <br />
                            1 tsp vanilla <br />
                            1 jar peanut butter <br />
                            1 tsp nutmeg <br />
                            1 tsp cinnamon <br />
                             <br />
                            <br />
                            <strong>Prep time:</strong> 30 mins <br />
                            <strong>Cook time:</strong> 45 mins <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Crust --- Mix together the cake mix, 1 stick 
                            melted butter, 1 egg. Mix with beaters. Pour
                            into a greased baking dish. Grease hands, and
                            press the ingredients over bottom of dish.
                            <br /><br />
                            Filling  --- Mix together cream cheese and powdered sugar,
                            slowing add another stick of butter, 3 eggs, vanilla, peanut
                            butter, cinnamon, and nutmeg. Pour into the baking dish and 
                            spread evenly.
                            <br /><br />
                            Bake at 350F for 45 mins. Allow to cool for at least 20-30 mins.
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <GooeyButterCakeCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class KaroCrazyCrunchRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/crazy-karo-crunch-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Karo Crazy Crunch</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#karoCrazyCrunchRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="karoCrazyCrunchRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Karo Crazy Crunch" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Karo Crazy Crunch</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 qts popped corn <br />
                            1 1/3 cups pecans <br />
                            2/3 cup almonds <br />
                            1 1/3 cups sugar <br />
                            1 cup oleo <br />
                            1 tbsp vanilla <br />
                            1/2 cup white karo <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Mix popcorn and nuts on cookie sheet. Combine
                            sugar, oleo, and karo in a 1 1/2 qt sauce pan. 
                            Bring to a boil over medium heat, stirring constantly.
                            Continue boiling, stirring occasionally for
                            10-15 minutes or until mixture turns a light caramel color.
                            Remove from heat. Stir in vanilla. Pour over popped corn and
                            nuts mixture, mix to coat well. Spread out on the cookie sheet
                            to dry. Break apart and store in tightly covered container.
                            This recipe makes about 2 pounds. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CrazyKaroCrunchCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />   
            </div>
        </div>

        )
    }
};

export class BananaNutBreadRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/banana-nut-bread-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Banana Nut Bread</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${BananaBread})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#bananaNutBreadRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="bananaNutBreadRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={BananaBread} alt="Banana Nut Bread" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Banana Nut Bread</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 8oz pkg cream cheese, softened <br />
                            1 cup sugar <br />
                            1/2 cup butter <br />
                            2 eggs beaten <br />
                            2 ripe bananas, mashed <br />
                            2 1/4 cup flour <br />
                            1 1/2 tsp baking powder <br />
                            1/2 tsp baking soda <br />
                            1 cup walnuts chopped <br />
                            <br />
                            <strong>Prep time:</strong> 20 mins <br />
                            <strong>Cook time:</strong> 1hr 15min <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 350F (175C). Grease a
                            9x5 inch loaf pan.
                            <br /><br />
                            Beat together the cream cheese, sugar, butter, eggs,
                            and banana in a large bowl until very smooth. Stir in
                            the flour, baking powder, baking soda, and walnuts until
                            combined. Pour the batter into the prepared loaf pan.
                            <br /><br />
                            Bake in oven until a toothpick inserted into the center
                            comes out clean, about 1 hour and 15 minutes. Allow to
                            cool in the pan for 10 minutes before removing to cool
                            completely on a wire rack. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <BananaNutBreadCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};



// SIDES
export class MeatBallsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/meatballs-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Meat Balls</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${MeatBalls})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#meatBallsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="meatBallsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={MeatBalls} alt="Meat Balls" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Meat Balls</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 pound ground beef <br />
                            1 egg <br />
                            2 tbsp water <br />
                            1/2 cup bread crumbs <br />
                            1/4 cup minced onion <br />
                            1 tsp garlic minced <br />
                            1/2 tsp salt <br />
                            1/8 tsp black pepper<br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> 30 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Pre-heat oven to 350F. In a large bowl, 
                            combine egg, water, bread crumbs, onion, salt,
                            pepper, and garlic, mix well. Add ground beef, 
                            mush with your hands to combine meat with mixture.
                            Form meatballs about 1" in diameter and place on a
                            broiler pan. Bake for 25-30 minutes until meatballs
                            are no longer pink in the middle. Can be simmered
                            in maranara sauce, spaghetti sauce, brown gravy
                            or bbq sauce if desired. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <MeatBallsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class MacaroniCheeseRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/macaroni-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Macaroni & Cheese</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${MacNCheese})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#macaroniCheeseRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="macaroniCheeseRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={MacNCheese} alt="Mac 'n Cheese" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Macaroni & Cheese</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            macaroni noodles <br />
                            1 tsp salt <br />
                            1 stick butter <br />
                            2 eggs beaten <br />
                            1 cup milk <br />
                            2 cups cheese diced <br />
                            1 cup grated cheese <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Preheat oven to 350F.
                            Boil macaroni, 1/2 tsp salt in water for about
                            7-10 minutes. Drain well. Pour noodles into
                            a greased baking dish. Add butter, eggs, milk,
                            and 1/2 tsp salt. Mix together well and add
                            grated cheese on top. Sprinkle black pepper on top
                            lightly and bake til set and done.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <MacNCheeseCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class DinnerRollsRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/dinner-rolls-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Dinner Rolls</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${DinnerRolls})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#dinnerRollsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="dinnerRollsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={DinnerRolls} alt="Dinner Rolls" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Dinner Rolls</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 pounds all-purpose flour <br />
                            2/3 cup shortening <br />
                            1/2 cup sugar <br />
                            1 1/2 tsp salt <br />
                            2 pkg yeast <br />
                            2 cups warm water <br />
                            <br />
                            <strong>Prep time:</strong> 15 mins <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a small bowl, add the warm water and yeast,
                            stir until dissolved, set aside. Put flour into
                            a large bowl, and make a well in the center. Into
                            the well, put shortening, sugar, and salt. Mix well
                            as you add yeast mixture gradually til liquid is gone.
                            Knead until easy to handle. Lift dough into a well
                            greased container. Cover container with foil, and put
                            into fridge. Use as needed, knead air out at each use.
                            To use, break off small pieces of dough and roll into a ball, bake
                            at 350F until golden brown.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <DinnerRollsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class FriedGreenTomatoesRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/fried-green-tomatoes-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Fried Green Tomatoes</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${FriedGreenTomatoes})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#friedGreenTomatoesRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="friedGreenTomatoesRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={FriedGreenTomatoes} alt="Fried Green Tomatoes" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Fried Green Tomatoes</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            green tomatoes <br />
                            2 cups flour <br />
                            2 tsp cornstarch <br />
                            1/4 cup cajun house seasoning (see misc) <br />
                            2-3 eggs <br />
                            1/4 cup milk <br />
                            2 cups corn meal <br />
                            1 tsp salt <br />
                            2 cups vegetable oil <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Slice green tomatoes. Dredge in mixture of
                            flour, cornstarch, and seasoning. Then dredge
                            in egg and milk mixture. Then dredge in corn meal,
                            back into the flour mixture. Fry in hot oil til
                            both sides are brown. Remove to a paper towel and
                            sprinkle seasoning lightly. Enjoy!

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <FriedGreenTomatoesCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class StuffedRedPotatoesRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/stuffed-red-potatoes-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Stuffed Red Potatoes</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#stuffedRedPotatoesRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="stuffedRedPotatoesRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Stuffed Red Potatoes" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Stuffed Red Potatoes</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            red potatoes <br />
                            white cheddar cheese <br />
                            1/2 stick butter <br />
                            black pepper <br />
                            2 tbsp parsley chopped <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a sauce pan, put small whole red potatoes
                            into some salty water until tender. Remove from
                            pan, slice bottoms off of potatoes for a flat 
                            bottom. Use a melon spoon to remove center 
                            pulp of potatoes and put into a separate bowl.
                            Add white cheese, butter, pepper, parsley into 
                            the bowl of potatoes and mix
                            together well. Taste for seasoning and add if needed.
                            Stuff mixture into each potato skin. Bake at 350F
                            for 10-20 mins or until done. Top with parmesan
                            cheese and enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <StuffedRedPotatoesCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class PotatoBallsRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/potato-balls-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Potato Balls</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#potatoBallsRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="potatoBallsRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Potato Balls" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Potato Balls</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            left over mashed potatoes <br />
                            1/2 onion minced <br />
                            parsley chopped <br />
                            garlic paste <br />
                            cayenne pepper <br />
                            2 tbsp flour <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Combine all ingredients, then form into a ball
                            the size of an egg. May need more flour to bind
                            together. Press a little flatter. Fry in skillet
                            in hot oil. May roll in bread crumbs before 
                            frying if desired. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <PotatoBallsCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class HoppingJohnRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/hopping-john-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Hopping John</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#hoppingJohnRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="hoppingJohnRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Hopping John" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Hopping John</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1/2 stick butter <br />
                            1 red bell pepper chopped <br />
                            1 fresh sliced seeded jalepeno <br />
                            1 cup cooked rice <br />
                            1 cup frozed or canned black eye peas <br />
                            fresh chopped parsley <br />
                            house seasoning <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Put 1/2 stick butter into a preheated skillet.
                            Add red bell pepper, jalepeno, and saute. Add
                            rice, black eye peas, parsley, house seasoning,
                            black pepper, and tbsp butter. Stir well over medium heat
                            serve hot. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <HoppingJohnCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class SavoryCornDishRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/corn-dish-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Savory Corn Dish</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#savoryCornDishRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="savoryCornDishRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Savory Corn Dish" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Savory Corn Dish</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            4 tsp butter <br />
                            1 onion chopped <br />
                            4 cloves garlic chopped <br />
                            fresh chopped thyme <br />
                            4 cups frozen whole kernel corn <br />
                            1 cup heavy cream <br />
                            salt and pepper to taste <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Melt butter in a skillet, then add onion,
                            garlic, thyme, corn, cream, and stir well. 
                            Season with salt and pepper to taste. Simmer
                            til tender and done. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <SavoryCornDishCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class SquashAuGratinRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/squash-au-gratin-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }



    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Squash Au Gratin</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#squashAuGratinRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="squashAuGratinRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Squash Au Gratin" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Squash Au Gratin</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            2 cups cooked squash <br />
                            2 tbsp butter melted <br />
                            2 eggs whisked <br />
                            salt and pepper to taste <br />
                            1/3 cup grated cheese <br />
                            1 cup of toasted bread pieces <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 10 mins <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Combine squash, melted butter, seasoning and eggs.
                            Arrage in layers with cheease and bread pieces in
                            a greased baking dish. Bake 10 minutes at 375F.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <SquashAuGratinCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class StuffedBellPeppersRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/stuffed-bell-peppers-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Stuffed Bell Peppers</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${StuffedPeppers})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#stuffedBellPeppersRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="stuffedBellPeppersRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={StuffedPeppers} alt="Stuffed Bell Peppers" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Stuffed Bell Peppers</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 tbsp vegetable oil <br />
                            1 tbsp butter <br />
                            1 green onion finely chopped <br />
                            1 clove garlic minced <br />
                            1 tomato chopped and drained <br />
                            1 seeded jalepeno chopped <br />
                            green bell peppers <br />
                            wild rice cooked <br />
                            salt <br />
                            black pepper <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Stuffing: --- Put the oil and butter into
                            a preheated skillet. Add green onions, 
                            saute. Add garlic, tomato, and jalepeno. 
                            Saute til softened, then pour contents of
                            skillet into cooked wild rice. Season to taste.
                            <br /><br />
                            Peppers: --- Cut the tops off bell peppers, remove
                            the insides, including seeds. Stuff each one with
                            the stuffing you just prepared and place the tops 
                            back onto the peppers. Bake in oven at 350F until
                            peppers have softened to you liking. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <StuffedBellPeppersCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class RolledCabbageRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/rolled-cabbage-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Rolled Cabbage</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#rolledCabbageRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="rolledCabbageRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="Rolled Cabbage" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Rolled Cabbage</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 head fresh cabbage <br />
                            1 pound ground beef <br />
                            1/2 cup browned rice <br />
                            2 tbsp vegetable oil <br />
                            1 medium oil chopped <br />
                            1 egg <br />
                            salt <br />
                            black pepper <br />
                            1 can diced tomatoes <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Using several large green cabbage leaves,
                            break off as many leaves to fill a large
                            container (wash cabbage first). Pour several
                            cups of boiling water over the cabbage leaves.
                            Cover with lid til cabbages leaves are wilted.
                            Drain off water. In a small skillet, preheat the
                            oil and brown the rice. Then in a mixing bowl,
                            add ground beef, browned rice, onion, egg, salt,
                            and pepper. Mix with hands. Put about 1 handful of
                            meat mixture into each cabbage leaf. Place in large
                            pot, cover with water, and cook til water is low to
                            about an inch of water left. Add tomatoes, pinch of
                            salt and pepper, simmer til done. 
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <RolledCabbageCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class RoastedPotatoesRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/roasted-potatoes-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Roasted Potatoes</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${RoastedPotatoes})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#roastedPotatoesRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="roastedPotatoesRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={RoastedPotatoes} alt="Roasted Potatoes" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Roasted Potatoes</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            small red potatoes cube 1 inch <br />
                            2 tbsp olive oil <br />
                            3 cloves garlic minced <br />
                            1 tbsp red bell pepper minced <br />
                            cajun house seasoning (see misc) <br />
                            1 cup red onion chopped <br />
                            2 jalepenos chopped with seeds <br />
                            <br />
                            <strong>Prep time:</strong> 10 mins <br />
                            <strong>Cook time:</strong> 20 mins <br />
                            <strong>Serves:</strong> 2-4
                            <hr />
                            <strong>Directions:</strong> <br />
                            Pour olive oil into the baking dish. Add 
                            potatoes, garlic, red bell pepper, onions,
                            jalepenos, and stir well to coat in the oil.
                            Sprinkle with seasoning and bake in the oven
                            at 350F until the potatoes have softened. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <RoastedPotatoesCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class CollardGreensRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/collard-greens-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>Collard Greens</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${Collards})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#collardGreensRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="collardGreensRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={Collards} alt="Collard Greens" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">Collard Greens</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            rinsed collard greens <br />
                            1 onion chopped <br />
                            1 tbsp garlic minced <br />
                            1/2 tsp olive oil <br />
                            salt <br />
                            black pepper <br />
                            1 whole jalepeno <br />
                            5 strips smoked bacon <br />
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            In a large pot, fill about half way with water,
                            add bacon strips, garlic, onion, and oil. Boil
                            for about 20-30 minutes, adding water if needed.
                            Next, add the collards, pushing the leaves
                            under the water with a large spoon, then add a few 
                            dashes of salt and black pepper. Bring back to a
                            boil then reduce heat, cover, and simmer for about
                            15 minutes. Add whole uncut jalepeno, and continue
                            to simmer for about 10-15 minutes more or until 
                            desired tenderness. Taste and add seasoning to taste.
                            Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <CollardGreensCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};

export class JGreenBeansRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: []
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:8080/green-beans-rating')
        .then(rating => {
            this.setState({ rating: rating.data.rating })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="boxContainer">
            <main>
                <div id="recipeTitle">
                    <h5>J's Green Beans</h5>
                </div>
                <div id="recipeImageBox" style={{backgroundImage: `url(${ComingSoon})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <button id="openModalBtn" type="button" className="btn btn-dark" data-toggle="modal" data-target="#greenBeansRecipeModal">
                Recipe
                </button>

                <div className="modal fade" id="greenBeansRecipeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        <div className="modal-header">
                        <img src={ComingSoon} alt="J's Green Beans" style={{height: '80px', width: '80px', margin: '10px'}}/>
                            <h4 className="modal-title">J's Green Beans</h4> <br />
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <strong>Ingredients:</strong> <br />
                            1 can green beans <br />
                            1/2 cup onion chopped <br />
                            1 tbsp garlic minced <br />
                            4 strips smoked bacon <br />
                            1/4 cup potatoes cubed 1/2" <br />
                            salt <br />
                            black pepper <br />
                            4 cups water
                            <br />
                            <strong>Prep time:</strong> n/a <br />
                            <strong>Cook time:</strong> n/a <br />
                            <strong>Serves:</strong> n/a
                            <hr />
                            <strong>Directions:</strong> <br />
                            Put water a medium pot, put the strips of bacon,
                            onion, and garlic in and boil for about 30 minutes,
                            or until there is about 1 cup of water left in the pot.
                            Add green beans, and more water if neccessary, the beans
                            need to be covered with water at least 1 inch above the beans.
                            Add the cubed potatoes, seasonings, and bring to a boil. 
                            Simmer, covered for about 20 minutes, or until the potatoes 
                            have softened. Enjoy!
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        <GreenBeansCommentBox />
                        </div>
                    </div>
                </div>

                </div>
            </main>
            <div id="ratingsBox">
                <Rater style={{fontSize: '35px'}} total={5} interactive={false} rating={this.state.rating} />
            </div>
        </div>

        )
    }
};
