import { writeFileSync } from 'fs';
import { join } from 'path';
import { experiences, projects, profile } from '../src/data/profile';

function generateLlmsTxt(): string {
  let content = `# ${profile.name}\n\n`;
  content += `> ${profile.description}\n\n`;
  
  content += `I'm a software engineer from ${profile.location}, currently working full-time at Workday on backend security and developer tooling for enterprise systems, including sensitive-data redaction, controlled access workflows, and AI-assisted documentation.\n\n`;
  
  content += `Outside of work, I build AutoSubs, an open-source, cross-platform desktop app helping hundreds of thousands of creators automatically generate subtitles for their videos in any language. I'm also developing SubSlate, a new kind of video editor.\n\n`;
  
  content += `## Contact & Social\n\n`;
  content += `- [Email](mailto:${profile.email}) : Primary contact for professional inquiries\n`;
  content += `- [LinkedIn](${profile.linkedin}) : Professional profile and connections\n`;
  content += `- [GitHub](${profile.github}) : Open source projects and contributions\n\n`;
  
  content += `## Featured Work\n\n`;
  
  for (const project of projects) {
    content += `- [${project.title}](${project.href}) : ${project.summary} `;
    if (project.tags.length > 0) {
      content += `Technologies: ${project.tags.join(', ')}.`;
    }
    content += `\n`;
  }
  content += `\n`;
  
  content += `## Experience\n\n`;
  
  for (const exp of experiences) {
    content += `${exp.company} (${exp.period}): ${exp.role}. `;
    if (exp.details.length > 0) {
      // Get the first detail as a summary
      const firstDetail = exp.details[0];
      if (Array.isArray(firstDetail)) {
        const summaryText = firstDetail.map(part => {
          if (typeof part === 'string') return part;
          return part.text;
        }).join('');
        content += summaryText;
      }
    }
    content += `\n\n`;
  }
  
  return content;
}

const outputPath = join(process.cwd(), 'public', 'llms.txt');
const content = generateLlmsTxt();
writeFileSync(outputPath, content, 'utf-8');

console.log(`✅ Generated llms.txt at ${outputPath}`);
