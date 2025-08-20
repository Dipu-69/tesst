import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function OCRPage() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    function onFileChange(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        setFile(f);
        setPreview(URL.createObjectURL(f));
        setResult('');
    }

    async function handleRunOCR() {
        if (!file) return toast.error('Please upload an image first');
        setLoading(true);
        // Dummy response
        await new Promise((r) => setTimeout(r, 1000));
        setResult('Detected text (dummy): "Hello from OCR demo"');
        setLoading(false);

        // Optional real OCR (later):
        // const { createWorker } = await import('tesseract.js');
        // const worker = await createWorker();
        // await worker.loadLanguage('eng');
        // await worker.initialize('eng');
        // const { data: { text } } = await worker.recognize(file);
        // setResult(text);
        // await worker.terminate();
    }

    return (
        <main className="mx-auto max-w-4xl px-4 py-12">
            <Card>
                <CardHeader className="font-semibold text-xl">OCR Tool</CardHeader>
                <CardContent className="space-y-4">
                    <Input type="file" accept="image/*" onChange={onFileChange} />
                    {preview && (
                        <img src={preview} alt="preview" className="max-h-64 rounded-md border object-contain" />
                    )}
                    <Button onClick={handleRunOCR} disabled={loading}>
                        {loading ? 'Processing…' : 'Extract Text'}
                    </Button>
                    {result && (
                        <pre className="whitespace-pre-wrap rounded-md bg-muted p-4 text-sm">{result}</pre>
                    )}
                </CardContent>
            </Card>
        </main>
    );
}