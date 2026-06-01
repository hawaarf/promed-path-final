const fs = require('fs');

const data = fs.readFileSync('../src/imports/pasted_text/studios-data.ts', 'utf-8');
const lines = data.split('\n');

const outLines = [];

outLines.push("import { STUDIO_QUESTIONS, STREAM_QUESTIONS } from '../../app/data/questions';");

for (let i = 0; i < 427; i++) {
  outLines.push(lines[i]);
}

// skip 428-449 (ASSESSMENT_QUESTIONS)
for (let i = 450; i < 1182; i++) {
  outLines.push(lines[i]);
}

fs.writeFileSync('../src/imports/pasted_text/studios-data.ts', outLines.join('\n'));
