import { db } from './db';
import { aiProjects } from './schema';
import { aiProjects as initialData } from '../data';

async function seed() {
    console.log('Seeding initial data...');
    for (let i = 0; i < initialData.length; i++) {
        const project = initialData[i];
        await db.insert(aiProjects).values({
            id: project.id,
            title: project.title,
            summary: project.summary,
            description: project.description,
            n8nScreenshotUrl: project.n8nScreenshotUrl,
            testLink: project.testLink,
            toolsUsed: JSON.stringify(project.toolsUsed),
            displayOrder: i,
        }).onConflictDoNothing();
    }
    console.log('Seeding complete!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
