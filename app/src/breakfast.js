import React from 'react';
import './breakfast-styles.scss';
import './_reset.scss';
import { Header } from './header.js';
import { BreakfastTitleBox } from './breakfast-title-box.js';
import { BreakfastTacoRecipe } from './recipe-box.js';
import { BreakfastBurritoRecipe } from './recipe-box.js';
import { OmeletteRecipe } from './recipe-box.js';
import { BiscuitsNGravyRecipe } from './recipe-box.js';
import { SausageBreakfastRollRecipe } from './recipe-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';



export class Breakfast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tacos: true,
            burritos: true,
            omelette: true,
            biscuits: true,
            sausageRoll: true,
            value: ''
        }
        this.showHideComponents = this.showHideComponents.bind(this);
    };

    showHideComponents(value) {
        this.setState({ value: value });

        switch(value) {
            case 'taco': 
            case 'Taco':
            case 'breakfast taco':
            case 'Breakfast taco':
            case 'breakfast tacos':
            case 'Breakfast Tacos':
                this.setState({
                    burritos: !this.state.burritos,
                    omelette: !this.state.omelette,
                    biscuits: !this.state.biscuits,
                    sausageRoll: !this.state.sausageRoll
                })
                break;
            case 'burrito':
            case 'Burrito':
            case 'breakfast burrito':
            case 'Breakfast burrito':
            case 'Breakfast Burrito':
                this.setState({
                    tacos: !this.state.tacos,
                    omelette: !this.state.omelette,
                    biscuits: !this.state.biscuits,
                    sausageRoll: !this.state.sausageRoll
                })
                break;
            case 'omelette':
            case 'Omelette':
                this.setState({
                    tacos: !this.state.tacos,
                    burritos: !this.state.burritos,
                    biscuits: !this.state.biscuits,
                    sausageRoll: !this.state.sausageRoll
                })
                break;
            case 'biscuits':
            case 'Biscuits':
                this.setState({
                    tacos: !this.state.tacos,
                    burritos: !this.state.burritos,
                    omelette: !this.state.omelette,
                    sausageRoll: !this.state.sausageRoll
                })
                break;
            case 'sausage roll':
            case 'Sausage roll':
            case 'Sausage Roll':
            case 'sausage breakfast roll':
            case 'Sausage breakfast roll':
            case 'Sausage Breakfast Roll':
            case 'breakfast roll':
            case 'Breakfast roll':
            case 'Breakfast Roll':
                this.setState({
                    tacos: !this.state.tacos,
                    burritos: !this.state.burritos,
                    biscuits: !this.state.biscuits,
                    omelette: !this.state.omelette
                })
                break;
            default:
                this.setState({
                    tacos: true,
                    burritos: true,
                    omelette: true,
                    biscuits: true,
                    sausageRoll: true,
                }) 
        }
    };
    

    render() {
        const { tacos, burritos, omelette, biscuits, sausageRoll } = this.state;
        return (
            <div id="main">
                <ScrollArrow />
                <Header />
                <SearchBar searches={this.showHideComponents} />
                <BreakfastTitleBox />
                <div className="boxWrapper">
                    {tacos && <BreakfastTacoRecipe />} 
                    { burritos && <BreakfastBurritoRecipe />}
                    { omelette && <OmeletteRecipe />}
                    { biscuits && <BiscuitsNGravyRecipe  />}
                    { sausageRoll && <SausageBreakfastRollRecipe />}
                </div>
                <Footer />
            </div>
        )
    };
};
