import React from 'react';
// react testing lib
import { render, cleanup } from '@testing-library/react';
// jest testing lib
import '@testing-library/jest-dom/extend-expect';
// import components
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //render About test
    // first test
    it('renders', () => {
        render(<About />);
    });
    // second test
    it('matches snapshot Dom node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})