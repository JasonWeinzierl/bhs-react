import Page from './page';

class HomePage extends Page {
  override open() {
    return super.open('');
  }

  get self() {
    return this.getByTestID('HomeScreen');
  }

  get title() {
    return this.getByTestID('HomeScreen.title');
  }

  get description() {
    return this.getByTestID('HomeScreen.description');
  }
}

export default new HomePage();
