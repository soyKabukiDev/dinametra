import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Filters from '../Filters';

describe('Filters Component', () => {
    it('renders correctly', () => {
        render(<Filters onChange={() => { }} />);
        expect(screen.getByText('Mostrar:')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('calls onChange when selection changes', () => {
        const handleChange = vi.fn();
        render(<Filters onChange={handleChange} />);

        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: '25' } });

        expect(handleChange).toHaveBeenCalledWith(25);
    });
});
