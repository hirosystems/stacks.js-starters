#!/usr/bin/env node

// create-stacks is based on create-vite by Yuxi (Evan) You and Vite contributors

// create-vite: https://github.com/vitejs/vite/blob/main/packages/create-vite
// Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2), { string: ["_"] });
const prompts = require("prompts");
const {
  yellow,
  green,
  cyan,
  blue,
  magenta,
  lightRed,
  red,
  reset,
} = require("kolorist");

const cwd = process.cwd();

const FRAMEWORKS = [
  {
    name: "react",
    color: cyan,
    variants: [
      {
        name: "react",
        display: "JavaScript",
        color: yellow,
      },
      // {
      //   name: "react-ts",
      //   display: "TypeScript",
      //   color: blue,
      // },
    ],
  },
  {
    name: "nextjs",
    color: cyan,
    variants: [
      {
        name: "nextjs",
        display: "JavaScript",
        color: yellow,
      },
    ],
  },
  {
    name: "svelte",
    color: red,
    variants: [
      {
        name: "svelte",
        display: "JavaScript",
        color: yellow,
      },
      // {
      //   name: "svelte-ts",
      //   display: "TypeScript",
      //   color: blue,
      // },
    ],
  },
  {
    name: "vue",
    color: green,
    variants: [
      {
        name: "vue",
        display: "JavaScript",
        color: yellow,
      },
      // {
      //   name: "vue-ts",
      //   display: "TypeScript",
      //   color: blue,
      // },
    ],
  },
  {
    name: "angular",
    color: red,
    variants: [
      {
        name: "angular",
        display: "TypeScript",
        color: red,
      },
    ],
  },
];

const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

const renameFiles = {
  _gitignore: ".gitignore",
};

async function init() {
  let targetDir = argv._[0];
  let template = argv.template || argv.t;

  const defaultProjectName = !targetDir ? "stacks-project" : targetDir;

  let result = {};

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : "text",
          name: "projectName",
          message: reset("Project name:"),
          initial: defaultProjectName,
          onState: (state) =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm",
          name: "overwrite",
          message: () =>
            (targetDir === "."
              ? "Current directory"
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          type: (_, { overwrite } = {}) => {
            if (overwrite === false) {
              throw new Error(red("✖") + " Operation cancelled");
            }
            return null;
          },
          name: "overwriteChecker",
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : "text"),
          name: "packageName",
          message: reset("Package name:"),
          initial: () => toValidPackageName(targetDir),
          validate: (dir) =>
            isValidPackageName(dir) || "Invalid package.json name",
        },
        {
          type: template && TEMPLATES.includes(template) ? null : "select",
          name: "framework",
          message:
            typeof template === "string" && !TEMPLATES.includes(template)
              ? reset(
                  `"${template}" isn't a valid template. Please choose from below: `
                )
              : reset("Select a framework:"),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.name),
              value: framework,
            };
          }),
        },
        // {
        //   type: (framework) =>
        //     framework && framework.variants ? "select" : null,
        //   name: "variant",
        //   message: reset("Select a variant:"),

        //   choices: (framework) =>
        //     framework.variants.map((variant) => {
        //       const variantColor = variant.color;
        //       return {
        //         title: variantColor(variant.name),
        //         value: variant.name,
        //       };
        //     }),
        // },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      }
    );
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }

  const { framework, overwrite, packageName, variant } = result;
  const root = path.join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  template = variant || framework?.name || framework || template;
  console.log(`\nScaffolding project in ${root}...`);

  const templateDir = path.join(__dirname, `templates/template-${template}`);

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file);
    if (content) {
      fs.writeFileSync(targetPath, content);
    } else {
      copy(path.join(templateDir, file), targetPath);
    }
  };

  const files = fs.readdirSync(templateDir);
  for (const file of files.filter((f) => f !== "package.json")) {
    write(file);
  }

  const pkg = require(path.join(templateDir, `package.json`));

  if (template !== "angular") {
    // don't rename angular projects, as the package name is used in build tooling
    pkg.name = packageName || targetDir;
  }

  write("package.json", JSON.stringify(pkg, null, 2));

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : "npm";

  console.log(`\nDone. Now run:\n`);
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`);
  }
  switch (pkgManager) {
    case "yarn":
      console.log("  yarn");
      console.log("  yarn start");
      break;
    default:
      console.log(`  ${pkgManager} install`);
      console.log(`  ${pkgManager} start`);
      break;
  }
  console.log();
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  );
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z0-9-~]+/g, "-");
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function isEmpty(path) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file);

    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}

function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  };
}

init().catch((e) => {
  console.error(e);
});
