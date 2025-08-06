'use client';
import Dashboard from '@/components/Dashboard';
import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return <Dashboard>{children}</Dashboard>;
}
