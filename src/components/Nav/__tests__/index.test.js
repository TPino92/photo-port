import React from 'react';
// react testing lib
import { render, cleanup, getByTestId } from '@testing-library/react';
// jest testing lib
import '@testing-library/jest-dom/extend-expect';
// import components
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline
    it('renders', () => {
        render(<Nav />);
    })

    // snapshot
    it('matches snapasshot', () => {
        const { asFragment } = render(<Nav />);
        // value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav />);
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})