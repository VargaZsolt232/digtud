import { json } from '@sveltejs/kit';
import crypto from 'crypto';
import path from 'path';
import { questions } from '$lib/questions';
import { imageMap } from '$lib/imageMap';

let usedIds = new Set<number>();


export function GET() {
    let remaining = questions.filter(q => !usedIds.has(q.id));

    if (remaining.length === 0) {
        usedIds.clear();
        remaining = questions;
    }

    const question = remaining[Math.floor(Math.random() * remaining.length)];
    usedIds.add(question.id);

    const questionsWithMasked = questions.map(q => {
        const shuffled = [...q.options]
            .sort(() => Math.random() - 0.5)
            .map(opt => {
                    const id = crypto.randomBytes(8).toString('hex') + pathSuffix(opt.image);
                    imageMap.set(id, opt.image); // itt tárolod el a kapcsolatot
                    return {
                        id,
                        value: opt.value,
                        imageUrl: `/api/image/${opt.image}`,
                        maskedUrl: `/api/image/${id}`
                    };
                })


        const maskedMap = Object.fromEntries(
            shuffled.map(opt => [opt.id, opt.value])
        );

        return {
            text: q.text,
            options: shuffled.map(opt => ({
                image: opt.maskedUrl,
                id: opt.id
            })),
            correctMap: maskedMap,
            correct: q.correct
        };
    });

    return json({ questions: questionsWithMasked });
}


function pathSuffix(filename: string) {
    return '.' + filename.split('.').pop();
}
