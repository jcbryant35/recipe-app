import React from 'react';
import { Header } from './header.js';
import { DessertsTitleBox } from './desserts-title-box.js';
import './desserts-styles.scss';
import {
    LemonCakePieRecipe,
    PieCrustRecipe,
    WashingtonPieRecipe,
    PeanutButterPieRecipe,
    PeachCobblerRecipe,
    GooeyButterCakeRecipe,
    KaroCrazyCrunchRecipe,
    BananaNutBreadRecipe
} from './recipe-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';


export class Desserts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lemonCakePie: true,
            pieCrust: true,
            washingtonPie: true,
            peanutButterPie: true,
            peachCobbler: true,
            gooeyButterCake: true,
            karoCrazyCrunch: true,
            bananaNutBread: true,
            value: ''
        }
        this.showHideComponents =  this.showHideComponents.bind(this);
    };

    showHideComponents(value) {
        switch(value) {
            case 'lemon cake pie': 
            case 'Lemon cake pie':
            case 'Lemon Cake Pie':
                this.setState({
                    pieCrust: !this.state.pieCrust,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'pie crust':
            case 'Pie crust':
            case 'Pie Crust':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'washington pie':
            case 'Washington pie':
            case 'Washington Pie':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    pieCrust: !this.state.pieCrust,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'peanut butter pie':
            case 'Peanut butter pie':
            case 'Peanut Butter Pie':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    pieCrust: !this.state.pieCrust,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'peach cobbler':
            case 'Peach cobbler':
            case 'Peach Cobbler':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    pieCrust: !this.state.pieCrust,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'gooey butter cake':
            case 'Gooey butter cake':
            case 'Gooey Butter Cake':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    pieCrust: !this.state.pieCrust,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'karo crazy crunch':
            case 'Karo crazy crunch':
            case 'Karo Crazy Crunch':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    pieCrust: !this.state.pieCrust,
                    bananaNutBread: !this.state.bananaNutBread,
                })
                break;

            case 'banana nut bread':
            case 'Banana nut bread':
            case 'Banana Nut Bread':
                this.setState({
                    lemonCakePie: !this.state.lemonCakePie,
                    washingtonPie: !this.state.washingtonPie,
                    peanutButterPie: !this.state.peanutButterPie,
                    peachCobbler: !this.state.peachCobbler,
                    gooeyButterCake: !this.state.gooeyButterCake,
                    karoCrazyCrunch: !this.state.karoCrazyCrunch,
                    pieCrust: !this.state.pieCrust,
                })
                break;

            default:
                this.setState({
                    lemonCakePie: true,
                    pieCrust: true,
                    washingtonPie: true,
                    peanutButterPie: true,
                    peachCobbler: true,
                    gooeyButterCake: true,
                    karoCrazyCrunch: true,
                    bananaNutBread: true,    
                })
        }
    };

    render() {

        const {
            bananaNutBread,
            pieCrust,
            lemonCakePie,
            peanutButterPie,
            peachCobbler,
            gooeyButterCake,
            karoCrazyCrunch,
            washingtonPie,
        } = this.state;

        return (
            <div id="main">
                <ScrollArrow />
                <Header />
                <SearchBar searches={this.showHideComponents}/>
                <DessertsTitleBox />
                <div className="boxWrapper">
                    {bananaNutBread && <BananaNutBreadRecipe />}
                    {pieCrust && <PieCrustRecipe />}
                    {lemonCakePie && <LemonCakePieRecipe />}
                    {peanutButterPie && <PeanutButterPieRecipe />}
                    {peachCobbler && <PeachCobblerRecipe />}
                    {gooeyButterCake && <GooeyButterCakeRecipe />}
                    {karoCrazyCrunch && <KaroCrazyCrunchRecipe />}
                    {washingtonPie && <WashingtonPieRecipe />}
                </div>
                <Footer />
            </div>
        )
    }
}