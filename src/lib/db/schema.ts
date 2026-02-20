import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const aiProjects = sqliteTable('ai_projects', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    summary: text('summary').notNull(),
    description: text('description').notNull(),
    n8nScreenshotUrl: text('n8n_screenshot_url').notNull(),
    testLink: text('test_link').notNull(),
    toolsUsed: text('tools_used').notNull(), // Store as JSON string of tools array
    displayOrder: integer('display_order').notNull().default(0),
});
