'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

interface PaymentBreakdownChartProps {
    principal: number;
    totalInterest: number;
    guarantyFee: number;
    closingCosts: number;
}

export function PaymentBreakdownChart({ principal, totalInterest, guarantyFee, closingCosts }: PaymentBreakdownChartProps) {
    const data = [
        { name: 'Principal', value: principal, color: '#3b82f6' },
        { name: 'Interest', value: totalInterest, color: '#ef4444' },
        { name: 'Guaranty Fee', value: guarantyFee, color: '#f59e0b' },
        { name: 'Closing Costs', value: closingCosts, color: '#8b5cf6' },
    ];

    return (
        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={({ percent }) => percent > 0.04 ? `${(percent * 100).toFixed(0)}%` : ''}
                    outerRadius={75}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    wrapperStyle={{ paddingLeft: '20px', fontSize: '12px' }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

interface AmortizationChartProps {
    schedule: Array<{
        month: number;
        principal: number;
        interest: number;
        balance: number;
    }>;
}

export function AmortizationChart({ schedule }: AmortizationChartProps) {
    // Take every 12th month for yearly view to avoid overcrowding
    const yearlyData = schedule.filter((_, index) => index % 12 === 0 || index === schedule.length - 1);

    const data = yearlyData.map((row) => ({
        year: Math.ceil(row.month / 12),
        principal: row.principal,
        interest: row.interest,
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="principal" fill="#10b981" name="Principal" />
                <Bar dataKey="interest" fill="#ef4444" name="Interest" />
            </BarChart>
        </ResponsiveContainer>
    );
}

interface MonthlyPaymentTrendProps {
    schedule: Array<{
        month: number;
        principal: number;
        interest: number;
    }>;
}

export function MonthlyPaymentTrend({ schedule }: MonthlyPaymentTrendProps) {
    // Take every 6th month for better visualization
    const filteredData = schedule.filter((_, index) => index % 6 === 0 || index === schedule.length - 1);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                    dataKey="month"
                    label={{ value: 'Month', position: 'insideBottom', offset: -5 }}
                    tick={{ fontSize: 12 }}
                />
                <YAxis
                    label={{ value: 'Payment ($)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="principal" stackId="a" fill="#10b981" name="Principal" />
                <Bar dataKey="interest" stackId="a" fill="#ef4444" name="Interest" />
            </BarChart>
        </ResponsiveContainer>
    );
}
