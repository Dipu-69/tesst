import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function ComingSoon() {
    const { slug } = useParams();
    const [email, setEmail] = useState('');

    async function notify() {
        if (!email.includes('@')) return toast.error('Enter a valid email');
        // Placeholder
        // await fetch('/api/notify', { method: 'POST', body: JSON.stringify({ tool: slug, email }) });
        toast.success('We will notify you!');
        setEmail('');
    }

    return (
        <main className="mx-auto max-w-xl px-4 py-12">
            <Card>
                <CardHeader className="text-xl font-semibold capitalize">{slug?.replace('-', ' ')} — Coming soon</CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                        Be the first to know when this feature launches.
                    </p>
                    <div className="flex gap-2">
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                        <Button onClick={notify}>Notify me</Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}