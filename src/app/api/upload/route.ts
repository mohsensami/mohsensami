import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { UTApi, UTFile } from 'uploadthing/server';

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_MEDIA_SIZE = 25 * 1024 * 1024;

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];
const AUDIO_TYPES = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4'];
const FILE_TYPES = ['application/pdf', 'text/plain', 'application/zip', 'application/json'];

const uploadThing = new UTApi({ token: process.env.UPLOADTHING_TOKEN });

function getMaxSize(type: string) {
    if (IMAGE_TYPES.includes(type)) return MAX_IMAGE_SIZE;
    return MAX_MEDIA_SIZE;
}

function isAllowedType(type: string) {
    return (
        IMAGE_TYPES.includes(type) ||
        VIDEO_TYPES.includes(type) ||
        AUDIO_TYPES.includes(type) ||
        FILE_TYPES.includes(type) ||
        type.startsWith('image/') ||
        type.startsWith('video/') ||
        type.startsWith('audio/')
    );
}

function safeExtension(filename: string, type: string) {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (ext && ext.length <= 5) return ext;

    if (type.startsWith('image/')) return type.split('/')[1]?.replace('jpeg', 'jpg') ?? 'jpg';
    if (type.startsWith('video/')) return 'mp4';
    if (type.startsWith('audio/')) return 'mp3';
    if (type === 'application/pdf') return 'pdf';
    return 'bin';
}

export async function POST(request: Request) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
        return NextResponse.json({ error: 'فایل یافت نشد' }, { status: 400 });
    }

    if (!isAllowedType(file.type)) {
        return NextResponse.json({ error: 'فرمت فایل مجاز نیست' }, { status: 400 });
    }

    const maxSize = getMaxSize(file.type);
    if (file.size > maxSize) {
        return NextResponse.json(
            { error: `حجم فایل بیش از ${Math.round(maxSize / (1024 * 1024))} مگابایت است` },
            { status: 400 },
        );
    }

    if (!process.env.UPLOADTHING_TOKEN) {
        return NextResponse.json({ error: 'UploadThing token is not configured' }, { status: 500 });
    }

    const customId = `mohsensami/${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const uploadFile = new UTFile([await file.arrayBuffer()], file.name, {
        type: file.type,
        lastModified: file.lastModified ?? Date.now(),
        customId,
    });

    const uploadResult = await uploadThing.uploadFiles(uploadFile, { concurrency: 1 });

    if (!uploadResult || ('error' in uploadResult && uploadResult.error)) {
        const errorMessage = uploadResult?.error?.message ?? 'آپلود ناموفق بود';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json({ url: uploadResult.data.ufsUrl, key: uploadResult.data.key });
}
