#!/usr/bin/env node
import fs from "fs";
import path from "path";

const name = process.argv[2];
if (!name) {
    console.error("Please provide a component name. Example: npm run create-component MyComponent");
    process.exit(1);
}

const cwd = process.env.INIT_CWD || process.cwd();

const targetDir = path.join(cwd, name);

if (fs.existsSync(targetDir)) {
    console.error(`Folder "${name}" already exists in ${cwd}`);
    process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const jsxContent = `import React from "react";
import "./${name}.scss";
import { use${name} } from "./${name}.logic";

const ${name} = (props) => {
  const logic = use${name}(props);
  return (
    <div className="${name.toLowerCase()}">
      <h2>${name}</h2>
    </div>
  );
};

export default ${name};
`;

const logicContent = `// Logic for ${name}
export const use${name} = (props) => {
  // Add your hooks, state, or logic here
  return {};
};
`;

const scssContent = `.${name.toLowerCase()} {
  // Add your styles here
}
`;

fs.writeFileSync(path.join(targetDir, `${name}.jsx`), jsxContent);
fs.writeFileSync(path.join(targetDir, `${name}.logic.js`), logicContent);
fs.writeFileSync(path.join(targetDir, `${name}.scss`), scssContent);

console.log(`Created ${name} in ${targetDir}`);
