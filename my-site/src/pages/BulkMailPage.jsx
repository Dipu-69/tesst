import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Papa from 'papaparse';
import Mustache from 'mustache';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const schema = z.object({
    subject: z.string().min(1, 'Subject is required'),
    fromName: z.string().min(1, 'From name is required'),
    fromEmail: z.string().email('Valid sender email required'),
    scheduleAt: z.string().optional(),
    html: z.string().min(1, 'Email body is required'),
});

export default function BulkMailPage() {
    const [recipients, setRecipients] = useState([]); // [{email, first_name, ...}]
    const [columns, setColumns] = useState([]);
    const [csvName, setCsvName] = useState('');

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            subject: '',
            fromName: '',
            fromEmail: '',
            scheduleAt: '',
            html: 'Hi {{first_name}},\n\nWelcome to our product!\n\n— {{fromName}}',
        },
    });

    function onCSV(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        setCsvName(f.name);
        Papa.parse(f, {
            header: true,
            skipEmptyLines: true,
            worker: true,
            complete: (results) => {
                const rows = results.data.filter((r) => r.email);
                setRecipients(rows);
                setColumns(Object.keys(rows[0] || {}));
                toast.success(`Loaded ${rows.length} recipients`);
            },
            error: () => toast.error('Failed to parse CSV'),
        });
    }

    function renderPreview(row) {
        const template = watch('html');
        const fromName = watch('fromName') || '';
        return Mustache.render(template, { ...row, fromName });
    }

    async function onSubmit(values) {
        if (recipients.length === 0) {
            toast.error('Please upload a CSV with recipients');
            return;
        }
        // Example payload for backend sending
        const payload = {
            config: {
                subject: values.subject,
                fromName: values.fromName,
                fromEmail: values.fromEmail,
                scheduleAt: values.scheduleAt || null,
            },
            recipients, // [{ email, first_name, ... }]
            template: {
                html: values.html,
            },
        };
        console.log('Submitting payload', payload);

        // Placeholder request
        // await fetch('/api/send-bulk', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
        toast.success('Queued (demo). Connect to your ESP to send for real.');
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-12 space-y-8">
            <Card>
                <CardHeader className="text-xl font-semibold">Bulk Mail</CardHeader>
                <CardContent className="space-y-6">
                    {/* Step 1: Upload CSV */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Recipient CSV (must include "email" column)</label>
                        <Input type="file" accept=".csv" onChange={onCSV} />
                        {csvName && <p className="text-xs text-muted-foreground">Loaded: {csvName}</p>}
                    </div>

                    {/* Step 2: Compose */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                            <Input placeholder="From name" {...register('fromName')} />
                            {errors.fromName && <p className="text-xs text-red-500">{errors.fromName.message}</p>}
                            <Input placeholder="From email" {...register('fromEmail')} />
                            {errors.fromEmail && <p className="text-xs text-red-500">{errors.fromEmail.message}</p>}
                            <Input placeholder="Subject" {...register('subject')} />
                            {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                            <Input type="datetime-local" {...register('scheduleAt')} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email body (supports {{ mustache }} vars)</label>
                            <Textarea rows={14} {...register('html')} />
                            {errors.html && <p className="text-xs text-red-500">{errors.html.message}</p>}
                            {columns.length > 0 && (
                                <p className="text-xs text-muted-foreground">
                                    Variables: {columns.map((c) => `{{${c}}}`).join(', ')}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Step 3: Preview */}
                    <div className="space-y-2">
                        <h3 className="font-medium">Preview (first 3 recipients)</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            {recipients.slice(0, 3).map((row, idx) => (
                                <div key={idx} className="rounded-lg border p-3 text-sm whitespace-pre-wrap">
                                    <div className="mb-2 text-xs text-muted-foreground">{row.email}</div>
                                    {renderPreview(row)}
                                </div>
                            ))}
                            {recipients.length === 0 && (
                                <p className="text-sm text-muted-foreground">Upload a CSV to preview personalized messages.</p>
                            )}
                        </div>
                    </div>

                    {/* Step 4: Actions */}
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => toast.message('Sent test (demo)')}>
                            Send test to me
                        </Button>
                        <Button onClick={handleSubmit(onSubmit)}>Queue campaign</Button>
                    </div>

                    {/* Compliance note */}
                    <p className="text-xs text-muted-foreground">
                        Include an unsubscribe link and ensure SPF/DKIM/DMARC are configured on your sending domain. Follow local laws (e.g., CAN-SPAM/GDPR).
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}