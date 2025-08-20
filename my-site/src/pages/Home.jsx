import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
                <div className="mx-auto max-w-7xl px-4 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Engage your audience with modern email tools and OCR utilities
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Build campaigns faster, personalize at scale, and extract text from images in a click.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <Button asChild><a href="/tools/bulk-mail">Try Bulk Mail</a></Button>
                        <Button variant="outline" asChild><a href="/tools/ocr">Try OCR</a></Button>
                    </div>
                    {/* Hero image or illustration */}
                    <img
                        src="/images/hero-screenshot.png"
                        alt="Product screenshot"
                        className="mx-auto mt-12 w-full max-w-5xl rounded-xl shadow-xl border"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Feature grid */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-semibold">Why teams choose Acme Tools</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {['Personalization', 'Deliverability-ready', 'OCR Utility', 'Templates', 'Scheduling', 'Analytics (soon)'].map((t) => (
                        <Card key={t}>
                            <CardHeader className="font-semibold">{t}</CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Detailed explanation that mirrors the clarity and polish found on brevo.com.
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Testimonials, FAQs, CTA... */}
            <section id="cta" className="mx-auto max-w-7xl px-4 py-16">
                <div className="rounded-2xl border p-8 text-center">
                    <h3 className="text-2xl font-semibold">Start in minutes</h3>
                    <p className="mt-2 text-muted-foreground">No setup required for the demo tools.</p>
                    <div className="mt-4">
                        <Button asChild><a href="/tools/bulk-mail">Launch Bulk Mail</a></Button>
                    </div>
                </div>
            </section>
        </main>
    );
}