import React from 'react';
import { Header } from './header.js';
import { MiscTitleBox } from './misc-title-box.js';
import { CajunBatterRecipe } from './recipe-box.js';
import { FriedChickenBatterRecipe } from './recipe-box.js';
import { HouseSeasoning } from './recipe-box.js';
import { CajunHouseSeasoning } from './recipe-box.js';
import { ChickenTurkeyGravy } from './recipe-box.js';
import { BrownGravyRecipe } from './recipe-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';
import './misc-styles.scss';


export class Misc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            houseSeasoning: true,
            cajunHouseSeasoning: true,
            cajunBatter: true,
            friedChickenBatter: true,
            brownGravy: true,
            turkeyGravy: true,
            value: ''
        }
        this.showHideComponents = this.showHideComponents.bind(this);
    };

    showHideComponents(value) {
        switch(value) {
            case 'house seasoning':
            case 'House seasoning':
            case 'House Seasoning':
                this.setState({
                    cajunHouseSeasoning: !this.state.cajunHouseSeasoning,
                    cajunBatter: !this.state.cajunBatter,
                    friedChickenBatter: !this.state.friedChickenBatter,
                    brownGravy: !this.state.brownGravy,
                    turkeyGravy: !this.state.turkeyGravy,        
                })
                break;

            case 'cajun house seasoning':
            case 'Cajun house seasoning':
            case 'Cajun House Seasoning':
            case 'cajun seasoning':
            case 'Cajun Seasoning':
                this.setState({
                    houseSeasoning: !this.state.houseSeasoning,
                    cajunBatter: !this.state.cajunBatter,
                    friedChickenBatter: !this.state.friedChickenBatter,
                    brownGravy: !this.state.brownGravy,
                    turkeyGravy: !this.state.turkeyGravy,        
                })
                break;

            case 'cajun batter':
            case 'Cajun batter':
            case 'Cajun Batter':
                this.setState({
                    cajunHouseSeasoning: !this.state.cajunHouseSeasoning,
                    houseSeasoning: !this.state.houseSeasoning,
                    friedChickenBatter: !this.state.friedChickenBatter,
                    brownGravy: !this.state.brownGravy,
                    turkeyGravy: !this.state.turkeyGravy,        
                })
                break;

            case 'fried chicken batter':
            case 'Fried chicken batter':
            case 'Fried Chicken Batter':
                this.setState({
                    cajunHouseSeasoning: !this.state.cajunHouseSeasoning,
                    houseSeasoning: !this.state.houseSeasoning,
                    cajunBatter: !this.state.cajunBatter,
                    brownGravy: !this.state.brownGravy,
                    turkeyGravy: !this.state.turkeyGravy,        
                })
                break;

            case 'brown gravy':
            case 'Brown gravy':
            case 'Brown Gravy':
                this.setState({
                    cajunHouseSeasoning: !this.state.cajunHouseSeasoning,
                    houseSeasoning: !this.state.houseSeasoning,
                    friedChickenBatter: !this.state.friedChickenBatter,
                    cajunBatter: !this.state.cajunBatter,
                    turkeyGravy: !this.state.turkeyGravy,        
                })
                break;
        
            case 'turkey gravy':
            case 'chicken gray':
            case 'Turkey gravy':
            case 'Chicken gravy':
            case 'Turkey Gravy':
            case 'Chicken Gravy':
                this.setState({
                    cajunHouseSeasoning: !this.state.cajunHouseSeasoning,
                    houseSeasoning: !this.state.houseSeasoning,
                    friedChickenBatter: !this.state.friedChickenBatter,
                    brownGravy: !this.state.brownGravy,
                    cajunBatter: !this.state.cajunBatter,        
                })
                break;
        
        
            default:
                this.setState({
                    houseSeasoning: true,
                    cajunHouseSeasoning: true,
                    cajunBatter: true,
                    friedChickenBatter: true,
                    brownGravy: true,
                    turkeyGravy: true,        
                })
        }
    };

    render() {

        const {
            houseSeasoning,
            cajunHouseSeasoning,
            cajunBatter,
            friedChickenBatter,
            brownGravy,
            turkeyGravy,
        } = this.state;

        return (
            <div id="main">
               <ScrollArrow />
               <Header />
               <SearchBar searches={this.showHideComponents} />
               <MiscTitleBox />
               <div className="boxWrapper">
                    {houseSeasoning && <HouseSeasoning />}
                    {cajunHouseSeasoning && <CajunHouseSeasoning />}
                    {cajunBatter && <CajunBatterRecipe />}
                    {friedChickenBatter && <FriedChickenBatterRecipe />}
                    {brownGravy && <BrownGravyRecipe />}
                    {turkeyGravy && <ChickenTurkeyGravy />}
               </div>
               <Footer />
            </div>
        )
    };
};
