import { writeFile } from 'node:fs';
import YAML from 'json-to-pretty-yaml';
import { projects } from "./projects.mjs";


const OUTPUT_DIR = './src/_collections/projects/';


for (const project of projects) {

  // some little preprocessing
  project.tags = 'project';
  const date = project.date;
  delete project.date;
  project['date-completed'] = date;

  // construct output file
  const name = project.id.replace('-','_');
  const outfile = OUTPUT_DIR + name + '.md';


  // convert
  const data = '---\n' + YAML.stringify(project) + '---\n';


  console.log(outfile);
  console.log(data);

  // write
  writeFile(outfile, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


}
