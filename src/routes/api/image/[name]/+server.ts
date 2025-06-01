import { imageMap } from '$lib/imageMap';
import fs from 'fs';
import path from 'path';
import { error } from '@sveltejs/kit';

export async function GET({ params }) {
    const id = params.name;

    const realFile = imageMap.get(id) ?? id; // ha nincs mapben, akkor hátha eredeti fájlnév

    const fullPath = path.resolve('src/lib/images', realFile);
    if (!fs.existsSync(fullPath)) throw error(404, 'Image not found');

    const file = fs.readFileSync(fullPath);
    const ext = path.extname(realFile).substring(1);
    const type = `image/${ext === 'jpg' ? 'jpeg' : ext}`;

    return new Response(file, {
        headers: {
            'Content-Type': type
        }
    });
}
