'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

type Point = { index: number; cumulative: number };

export default function EquityChart({ data }: { data: Point[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="index" stroke="#A1A8B5" tick={{ fill: '#A1A8B5', fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis stroke="#A1A8B5" tick={{ fill: '#A1A8B5', fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ backgroundColor: '#0E1218', border: 'none', color: '#EAEAEA' }} labelStyle={{ color: '#A1A8B5' }} />
          <Line type="monotone" dataKey="cumulative" stroke="#00E0FF" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export {};

