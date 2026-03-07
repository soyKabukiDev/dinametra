import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChartPrice from '../ChartPrice';

vi.mock('react-chartjs-2', () => ({
    Line: () => <div data-testid="mock-line-chart" />
}));

describe('ChartPrice Component', () => {
    it('shows no data message when data is empty', () => {
        render(<ChartPrice data={[]} />);
        expect(screen.getByText('No hay datos disponibles.')).toBeInTheDocument();
    });

    it('renders chart when data is provided', () => {
        const mockData = [
            { name: 'Bitcoin', current_price: 50000 }
        ];
        render(<ChartPrice data={mockData} />);
        expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
        expect(screen.getByText('Precio Crypto')).toBeInTheDocument();
    });
});
