import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Dashboard from '../Dashboard';
import { useCryptoData } from '../../hooks/useCryptoData';

// Mock the hook
vi.mock('../../hooks/useCryptoData', () => ({
    useCryptoData: vi.fn()
}));

// Mock the child components to simplify testing
vi.mock('../ChartPrice', () => ({
    default: () => <div data-testid="chart-price" />
}));
vi.mock('../ChartVolume', () => ({
    default: () => <div data-testid="chart-volume" />
}));

describe('Dashboard Component', () => {
    it('renders loading state initially', () => {
        useCryptoData.mockReturnValue({ data: [], loading: true, error: null });
        render(<Dashboard />);
        expect(screen.getByText('Cargando Gráficas...')).toBeInTheDocument();
    });

    it('renders error message on failure', () => {
        useCryptoData.mockReturnValue({ data: [], loading: false, error: { message: 'Network Error' } });
        render(<Dashboard />);
        expect(screen.getByText('Error: Network Error')).toBeInTheDocument();
    });

    it('renders dashboard with charts on successful data fetch', () => {
        useCryptoData.mockReturnValue({
            data: [{ id: 'bitcoin', name: 'Bitcoin' }],
            loading: false,
            error: null
        });

        render(<Dashboard />);
        expect(screen.getByText('Crypto Dashboard')).toBeInTheDocument();
        expect(screen.getByTestId('chart-price')).toBeInTheDocument();
    });
});
