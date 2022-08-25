import {render} from '@testing-library/react'
import renderer from 'react-test-renderer';
import App from './../App';

// snapshot test
describe("Jest Snapshot testing suite", () => {
    it("Matches Snapshot", () => {
      const page = renderer.create(<App />).toJSON();
      expect(page).toMatchSnapshot();
    });
  });

// unit test
it('renders the page', () => {
    render(<App />);
  });

  // you should also have additional tests to check that each component is 
  // rendering correctly, passing props correctly, state is updating as expected, 
  // etc.