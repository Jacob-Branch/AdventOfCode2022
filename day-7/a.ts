import { readFileSync } from "fs";

const test = false;

type file = {
  name: string;
  size: number;
};

type dir = {
  name: string;
  totalSize: number;
  files: file[];
  dirs: dir[];
  parent: dir;
};

const mkdir = (name: string, parent: dir): dir => ({
  name: name,
  totalSize: 0,
  files: [],
  dirs: [],
  parent: parent,
});

const du = (dir: dir) => {
  let size = 0;
  dir.files.forEach((i) => {
    size += i.size;
  });
  dir.dirs.forEach((i) => {
    size += du(i);
  });
  dir.totalSize = size;
  return size;
};

const addUp = (dir: dir) => {
  let sum = 0;
  dir.dirs.forEach((i) => {
    if (i.totalSize < 100_000) {
      sum += i.totalSize;
    }
    sum += addUp(i);
  });
  return sum;
};

const tree = {};
const data = readFileSync(test ? "./test" : "./input", "utf-8")
  .trim()
  .split("\n");

const main = () => {
  let root: dir;
  let pwd: dir;
  let init = false;

  for (const i of data) {
    if (!init) {
      const cmd = i.replace("$ ", "").split(" ");
      root = mkdir(cmd[1], null);
      pwd = root;
      init = true;
      continue;
    }

    if (!i.includes("$ ")) {
      const file = i.split(" ");
      if (file[0] === "dir") {
        pwd.dirs.push(mkdir(file[1], pwd));
      } else {
        const size = Number(file[0]);
        pwd.files.push({ name: file[1], size: size });
      }
      continue;
    }

    const cmd = i.replace("$ ", "").split(" ");
    if (cmd[0] === "cd") {
      if (cmd[1] === "..") {
        pwd = pwd.parent;
      } else {
        pwd = pwd.dirs[pwd.dirs.findIndex((i) => i.name === cmd[1])];
      }
      continue;
    }
  }
  du(root);

  return addUp(root);
};

console.log(main());
