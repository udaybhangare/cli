#!/usr/bin/env bun


import * as p from '@clack/prompts';
import setup from './setup';

p.intro("Welcome to Uday's CLI")

const requirements = await p.group({

  projectName: ({results}) => p.text({
    message: "What is the name of your project? (Leave blank if this path is project file)",
    placeholder: "my-project"
  }),

  useSrc: ({results}) => p.select({
    message: "Do you want to use src as root dir?",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),

  useTs: ({results}) => p.select({
    message: "Do you want to use Typescript?",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),

  useAxios: ({results}) => p.select({
    message: "Do you want to use Axios??",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),
},{
  onCancel: ({results}) => {
    p.cancel("Operation cancelled");
    process.exit(0);
  }
})

setup(requirements)

p.outro("Thanks for using this CLI")