import React from 'react';
import { Header } from './header.js';
import './snacks-styles.scss';
import { 
    CheeseBallRecipe,
    HamRollUpsRecipe

} from './recipe-box.js';
import { SnacksTitleBox } from './snacks-title-box.js';
import { Footer } from './footer.js';
import ScrollArrow  from './scrolltotop.js';
import { SearchBar } from './search-bar.js';



export class Snacks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hamRollUps: true,
            cheeseBall: true,
            value: ''
        }
        this.showHideComponents =  this.showHideComponents.bind(this);
    }

    showHideComponents(value) {
        switch(value) {
            case 'ham roll ups':
            case 'Ham roll ups':
            case 'Ham Roll Ups':
                this.setState({
                    cheeseBall: !this.state.cheeseBall
                })
                break;
            
            case 'cheese ball':
            case 'Cheese ball':
            case 'Cheese Ball':
                this.setState({
                    hamRollUps: !this.state.hamRollUps
                })
                break;

            default:
                this.setState({
                    hamRollUps: true,
                    cheeseBall: true    
                })
        }
    }


    render() {
        const {
            hamRollUps,
            cheeseBall,
        } = this.state;

        return (
            <div id="main">
                <ScrollArrow />
                <Header />
                <SearchBar searches={this.showHideComponents} />
                <SnacksTitleBox />
                <div className="boxWrapper">
                    {hamRollUps && <HamRollUpsRecipe />}
                    {cheeseBall && <CheeseBallRecipe />}
                </div>
                <Footer />
            </div>
        )
    }
}