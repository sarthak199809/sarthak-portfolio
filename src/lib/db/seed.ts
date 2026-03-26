import { db } from './db';
import { aiProjects, settings } from './schema';
import { aiProjects as initialData } from '../data';

async function seed() {
    console.log('Seeding initial data...');
    // Seed AI Projects
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

    // Seed Default Resume Link
    await db.insert(settings).values({
        key: 'resume_link',
        value: 'https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/Sarthak_garg_resume_updated-feb26.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL1NhcnRoYWtfZ2FyZ19yZXN1bWVfdXBkYXRlZC1mZWIyNi5wZGYiLCJpYXQiOjE3NzE3NTcyODYsImV4cCI6MTgwMzI5MzI4Nn0.lOFK6pRZfSsmMUzmm0W-JyYS_yIkGDjnwUnHrFIJETE',
    }).onConflictDoNothing();

    console.log('Seeding complete!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
