import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get heroCard () {
        return $('//a[@data-id="hero-card"]');
    }

    public get articlesInHero () {
        let num = Math.floor(Math.random()*4);
        return $(`//a[@data-id='hero-card'][@data-position='${num}']`)
    }

    public open () {
        return super.open('');
    }
}

export default new HomePage();
