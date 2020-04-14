// login test cases.
import { username, password, host} from '../fixtures/credentials';
import { login, common, menu } from '../fixtures/selectors.json';

afterEach(() => {
	cy.get(menu.logout).click();
  })

describe('Login page', function() {
	it('logs you to php admin travels page with valid credentials', () => {
		cy.visit(host);
		cy.login(username, password);
		cy.compareSnapshot('login', 0.0);
		cy.compareSnapshot('login', 0.1);
 	});
});
